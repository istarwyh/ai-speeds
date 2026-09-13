import { log } from 'node:console';
import { randomUUID } from 'node:crypto';
import { lstat, mkdir, open, readFile, rename, rm } from 'node:fs/promises';
import { basename, dirname, join, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

/** @typedef {import('node:fs').Stats} FileStats */

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const sourcePath = resolve(repositoryRoot, 'node_modules', '@cc4pm', 'homepage', 'index.html');
const outputPath = resolve(repositoryRoot, 'public', 'static', 'cc4pm-homepage.html');
const navMarkerPattern = /<!-- NAV -->/gi;
const navSectionPattern = /<!-- NAV -->[\s\S]*?<\/header>/gi;
const navbarScrollDereferencePattern =
  / {8}\/\/ navbar shadow\n {8}navbar\.classList\.toggle\('scrolled', window\.scrollY > 80\);\n\n/g;
const headPattern = /<\/head>/g;
const embeddedOverrides = `
html,
body {
  overflow-x: hidden;
}

#hero {
  min-height: 100dvh;
  padding-top: 0;
}

@media (max-width: 767px) {
  body {
    font-size: 16px;
  }

  .container {
    padding: 0 16px;
  }

  section {
    padding: 56px 0;
  }

  #hero {
    min-height: 100dvh;
    padding: 40px 0 56px;
  }

  .hero-content {
    gap: 16px;
    padding: 0 16px;
    width: 100%;
  }

  .hero-badge {
    justify-content: center;
    max-width: 100%;
    width: 100%;
    text-align: center;
    white-space: normal;
    overflow-wrap: anywhere;
  }

  .hero-title {
    font-size: clamp(22px, 6vw, 24px);
    line-height: 1.18;
    max-width: 100%;
    word-break: break-word;
  }

  .hero-title-line1,
  .hero-title-line2 {
    max-width: 100%;
    overflow-wrap: anywhere;
    white-space: normal;
  }

  .hero-title-line2 {
    font-size: clamp(21px, 5.8vw, 24px);
  }

  .hero-sub {
    font-size: 16px;
    line-height: 1.65;
    max-width: 100%;
    overflow-wrap: anywhere;
  }

  .hero-sub br {
    display: none;
  }

  .hero-origin {
    font-size: 14px;
  }

  .hero-stats {
    display: grid;
    gap: 12px;
    grid-template-columns: 1fr;
    max-width: 100%;
    width: 100%;
  }

  .stat-item {
    background: var(--bg-card);
    border: 1px solid var(--border-default);
    border-radius: var(--border-radius-md);
    padding: 16px 8px;
  }

  .hero-ctas {
    max-width: 100%;
  }

  .hero-ctas .btn-primary,
  .hero-ctas .btn-github {
    box-sizing: border-box;
    max-width: 100%;
  }

  .terminal-preview {
    font-size: 13px;
    max-width: 100%;
    padding: 14px;
  }

  .terminal-line {
    overflow-x: auto;
    white-space: nowrap;
  }

  .proof-strip {
    align-items: stretch;
  }

  .proof-item,
  .proof-badge {
    width: 100%;
  }

  .proof-badge {
    justify-content: center;
  }

  .stage-header {
    align-items: start;
    display: grid;
    gap: 10px 14px;
    grid-template-columns: 44px minmax(0, 1fr) 24px;
  }

  .stage-badge {
    grid-column: 1;
  }

  .stage-info {
    grid-column: 2;
    min-width: 0;
  }

  .stage-title {
    font-size: 16px;
  }

  .stage-meta {
    font-size: 13px;
  }

  .stage-tag {
    grid-column: 2 / 4;
    justify-self: start;
    white-space: normal;
  }

  .stage-toggle {
    grid-column: 3;
    margin-top: 10px;
  }

  .install-terminal {
    border-radius: 14px;
  }

  .install-terminal-body {
    font-size: 13px;
    min-height: 220px;
    overflow-x: auto;
    padding: 16px;
  }

  .term-line {
    overflow-wrap: anywhere;
    white-space: pre-wrap;
  }
}

@media (max-width: 374px) {
  .proof-badge {
    font-size: 13px;
    padding: 10px 14px;
  }
}
`;

const outputDirectoryComponents = [
  { path: repositoryRoot, label: 'repository root', create: false },
  { path: join(repositoryRoot, 'public'), label: 'public', create: true },
  { path: dirname(outputPath), label: 'public/static', create: true },
];
const outputPathLabel = 'public/static/cc4pm-homepage.html';

/**
 * @param {unknown} error
 * @param {string} code
 * @returns {boolean}
 */
function hasErrorCode(error, code) {
  return typeof error === 'object' && error !== null && Reflect.get(error, 'code') === code;
}

/**
 * @param {string} path
 * @returns {Promise<FileStats | null>}
 */
async function lstatIfExists(path) {
  try {
    return await lstat(path);
  } catch (error) {
    if (hasErrorCode(error, 'ENOENT')) {
      return null;
    }

    throw error;
  }
}

/**
 * @param {boolean} createMissing
 * @returns {Promise<void>}
 */
async function verifyOutputDirectoryPath(createMissing) {
  for (const component of outputDirectoryComponents) {
    let stats = await lstatIfExists(component.path);

    if (!stats && createMissing && component.create) {
      try {
        await mkdir(component.path);
      } catch (error) {
        if (!hasErrorCode(error, 'EEXIST')) {
          throw error;
        }
      }

      stats = await lstatIfExists(component.path);
    }

    if (!stats) {
      throw new Error(`[LEG-002] homepage output path component is missing: ${component.label}`);
    }

    if (stats.isSymbolicLink()) {
      throw new Error(`[LEG-002] refusing homepage output through symlink path component: ${component.label}`);
    }

    if (!stats.isDirectory()) {
      throw new Error(`[LEG-002] homepage output path component must be a directory: ${component.label}`);
    }
  }
}

/** @returns {Promise<FileStats | null>} */
async function verifyOutputFile() {
  const stats = await lstatIfExists(outputPath);

  if (!stats) {
    return null;
  }

  if (stats.isSymbolicLink()) {
    throw new Error(`[LEG-002] refusing symlink homepage output: ${outputPathLabel}`);
  }

  if (!stats.isFile()) {
    throw new Error(`[LEG-002] existing homepage output must be a regular file: ${outputPathLabel}`);
  }

  return stats;
}

/**
 * @param {string} embeddedHomepage
 * @param {FileStats | null} existingOutputStats
 * @returns {Promise<void>}
 */
async function replaceOutputAtomically(embeddedHomepage, existingOutputStats) {
  const temporaryOutputPath = join(dirname(outputPath), `.${basename(outputPath)}.${process.pid}.${randomUUID()}.tmp`);
  const outputMode = existingOutputStats ? existingOutputStats.mode & 0o777 : 0o666;
  const temporaryFile = await open(temporaryOutputPath, 'wx', outputMode);
  let shouldRemoveTemporaryFile = true;

  try {
    try {
      await temporaryFile.writeFile(embeddedHomepage, 'utf8');
      await temporaryFile.sync();
    } finally {
      await temporaryFile.close();
    }

    await verifyOutputDirectoryPath(false);
    await verifyOutputFile();
    await rename(temporaryOutputPath, outputPath);
    shouldRemoveTemporaryFile = false;
  } finally {
    if (shouldRemoveTemporaryFile) {
      await rm(temporaryOutputPath, { force: true });
    }
  }
}

/**
 * @param {string} homepageHtml
 * @returns {string}
 */
function prepareEmbeddedHomepage(homepageHtml) {
  const navMarkerCount = homepageHtml.match(navMarkerPattern)?.length ?? 0;
  const navSectionMatchCount = homepageHtml.match(navSectionPattern)?.length ?? 0;
  const navbarScrollDereferenceCount = homepageHtml.match(navbarScrollDereferencePattern)?.length ?? 0;
  const headMatchCount = homepageHtml.match(headPattern)?.length ?? 0;

  if (navMarkerCount !== 1 || navSectionMatchCount !== 1) {
    const navMatchCount = navMarkerCount !== 1 ? navMarkerCount : navSectionMatchCount;
    throw new Error(`[LEG-002] expected exactly one nav marker match, found ${navMatchCount}`);
  }

  if (headMatchCount !== 1) {
    throw new Error(`[LEG-002] expected exactly one </head> marker, found ${headMatchCount}`);
  }

  if (navbarScrollDereferenceCount !== 1) {
    throw new Error(`[LEG-002] expected exactly one navbar scroll dereference, found ${navbarScrollDereferenceCount}`);
  }

  return homepageHtml
    .replace(navSectionPattern, '')
    .replace(navbarScrollDereferencePattern, '')
    .replace(headPattern, headMarker => `<style>${embeddedOverrides}</style>\n${headMarker}`);
}

/**
 * @param {string} actual
 * @param {string} expected
 * @param {string} caseName
 */
function assertEqual(actual, expected, caseName) {
  if (actual !== expected) {
    throw new Error(`[self-test] ${caseName}: output mismatch`);
  }
}

/**
 * @param {string} caseName
 * @param {string} homepageHtml
 * @param {string} expectedMessage
 */
function assertLeg002Failure(caseName, homepageHtml, expectedMessage) {
  try {
    prepareEmbeddedHomepage(homepageHtml);
  } catch (error) {
    if (error instanceof Error && error.message === expectedMessage) {
      return;
    }

    throw error;
  }

  throw new Error(`[self-test] ${caseName}: expected ${expectedMessage}`);
}

function runSelfTest() {
  const navbarScrollDereferenceFixture = `        // navbar shadow
        navbar.classList.toggle('scrolled', window.scrollY > 80);

`;
  const validInput =
    '<html><head><title>Test</title></head><body><!-- NAV --><header>Navigation</header><main>Content</main><script>\n' +
    navbarScrollDereferenceFixture +
    '        ticking = false;\n</script></body></html>';
  const expectedValidOutput = `<html><head><title>Test</title><style>${embeddedOverrides}</style>\n</head><body><main>Content</main><script>\n        ticking = false;\n</script></body></html>`;

  assertEqual(prepareEmbeddedHomepage(validInput), expectedValidOutput, 'valid input');
  assertLeg002Failure(
    'missing nav marker',
    '<html><head></head><body><main>Content</main></body></html>',
    '[LEG-002] expected exactly one nav marker match, found 0',
  );
  assertLeg002Failure(
    'duplicate nav marker',
    '<html><head></head><body><!-- NAV --><!-- NAV --><header>Navigation</header></body></html>',
    '[LEG-002] expected exactly one nav marker match, found 2',
  );
  assertLeg002Failure(
    'missing head marker',
    '<html><head><body><!-- NAV --><header>Navigation</header></body></html>',
    '[LEG-002] expected exactly one </head> marker, found 0',
  );
  assertLeg002Failure(
    'duplicate head marker',
    '<html><head></head></head><body><!-- NAV --><header>Navigation</header></body></html>',
    '[LEG-002] expected exactly one </head> marker, found 2',
  );
  assertLeg002Failure(
    'missing navbar scroll dereference',
    '<html><head></head><body><!-- NAV --><header>Navigation</header><script>ticking = false;</script></body></html>',
    '[LEG-002] expected exactly one navbar scroll dereference, found 0',
  );
  assertLeg002Failure(
    'duplicate navbar scroll dereference',
    '<html><head></head><body><!-- NAV --><header>Navigation</header><script>\n' +
      navbarScrollDereferenceFixture +
      navbarScrollDereferenceFixture +
      '</script></body></html>',
    '[LEG-002] expected exactly one navbar scroll dereference, found 2',
  );

  log('prepare-cc4pm-homepage self-test passed (7 cases)');
}

async function prepareHomepage() {
  const homepageHtml = await readFile(sourcePath, 'utf8');
  const embeddedHomepage = prepareEmbeddedHomepage(homepageHtml);

  await verifyOutputDirectoryPath(true);
  const existingOutputStats = await verifyOutputFile();
  await replaceOutputAtomically(embeddedHomepage, existingOutputStats);

  log(`Prepared ${outputPath}`);
}

if (process.argv.includes('--self-test')) {
  runSelfTest();
} else {
  await prepareHomepage();
}
