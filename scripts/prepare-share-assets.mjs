#!/usr/bin/env node
// @ts-nocheck -- operator CLI; inputs are validated at runtime.

import { error, log } from 'node:console';
import { execFile as execFileCallback } from 'node:child_process';
import { access, mkdir, mkdtemp, readdir, rename, rm, stat, writeFile } from 'node:fs/promises';
import { constants as fsConstants } from 'node:fs';
import { basename, dirname, join, relative, resolve, sep } from 'node:path';
import process from 'node:process';
import { promisify } from 'node:util';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { assertSupportedNodeVersion } from './node-runtime.mjs';
import { renderArticleSnapshot } from './share-article.mjs';

const execFile = promisify(execFileCallback);
const scriptPath = fileURLToPath(import.meta.url);
const repoRoot = resolve(dirname(scriptPath), '..');
const slideWidth = 1920;
const slideHeight = 1080;
const thumbnailWidth = 480;
const thumbnailHeight = 270;
const coverWidth = 1200;
const coverHeight = 675;
const maxCommandOutputBytes = 16 * 1024 * 1024;
const defaultSlug = 'agent-native-product-ai-maker-shanghai';
const defaultVersion = 'v4';
const siteOrigin = 'https://xiaohui.cool';
const localPathPattern =
  /(?:file:\/\/(?:localhost)?\/(?:Users|home|private|tmp)\/|\/(?:Users|home|private|tmp)\/|\b[A-Z]:\\)/i;
const sensitivePatterns = [
  /-----BEGIN [A-Z0-9 ]*PRIVATE KEY-----/,
  /\bAKIA[0-9A-Z]{16}\b/,
  /\bgh[pousr]_[A-Za-z0-9]{30,}\b/,
  /\bxox[baprs]-[A-Za-z0-9-]{20,}\b/,
  /\bbearer\s+[A-Za-z0-9._~+/-]{20,}/i,
  /\b(?:api[_ -]?key|client[_ -]?secret|secret|password|passwd)\s*(?:=|:)\s*[A-Za-z0-9._~+/-]{8,}/i,
  /https?:\/\/[^\s/:@]+:[^\s/@]+@/i,
];

function usage() {
  return [
    'Usage: node scripts/prepare-share-assets.mjs [options]',
    '',
    'Options:',
    `  --slug <slug>             Share slug (default: ${defaultSlug})`,
    `  --media-version <vN>      media version directory (default: ${defaultVersion})`,
    '  --source <pptx>           source deck (required unless the default Share is used)',
    '  --render-source <pptx>    optional layout-compatible copy for images/PDF only; downloads use --source',
    '  --output <directory>      output directory (default: dist/shares/<slug>/<version>)',
    '  --registry <file>         TypeScript Share registry module',
    '  --article <markdown>      local article note to freeze as article.md',
    '  --article-url <url>       public URL of that article',
    '  --content-root <dir>      note collection used to resolve [[wikilinks]]',
    '  --renderer <auto|libreoffice|images>  slide renderer (default: auto)',
    '  --concurrency <1-8>       image conversion concurrency (default: 4)',
    '  --force                   replace an existing output directory',
    '  --help',
  ].join('\n');
}

function parseArguments(arguments_) {
  const options = {
    slug: defaultSlug,
    version: defaultVersion,
    source: undefined,
    renderSource: undefined,
    output: undefined,
    registry: resolve(repoRoot, 'src', 'content', 'shares', 'registry.ts'),
    article: undefined,
    articleUrl: undefined,
    contentRoot: resolve(repoRoot, '..', 'quartz', 'content'),
    renderer: 'auto',
    force: false,
    concurrency: 4,
  };
  const valueFlags = new Map([
    ['--slug', 'slug'],
    ['--media-version', 'version'],
    ['--source', 'source'],
    ['--render-source', 'renderSource'],
    ['--output', 'output'],
    ['--registry', 'registry'],
    ['--article', 'article'],
    ['--article-url', 'articleUrl'],
    ['--content-root', 'contentRoot'],
    ['--renderer', 'renderer'],
    ['--concurrency', 'concurrency'],
  ]);
  const pathKeys = new Set(['source', 'renderSource', 'output', 'registry', 'article', 'contentRoot']);

  for (let index = 0; index < arguments_.length; index += 1) {
    const argument = arguments_[index];
    if (argument === '--') {
      continue;
    }
    if (argument === '--help') {
      log(usage());
      process.exit(0);
    }
    if (argument === '--force') {
      options.force = true;
      continue;
    }
    const key = valueFlags.get(argument ?? '');
    if (!key) {
      throw new Error(`Unknown argument: ${argument}`);
    }
    const value = arguments_[index + 1];
    if (!value) {
      throw new Error(`Missing value for ${argument}`);
    }
    index += 1;
    options[key] = key === 'concurrency' ? Number(value) : pathKeys.has(key) ? resolve(process.cwd(), value) : value;
  }

  if (!/^[a-z0-9][a-z0-9-]*$/.test(options.slug)) {
    throw new Error('--slug must be kebab-case');
  }
  if (!/^v[1-9][0-9a-z-]*$/.test(options.version)) {
    throw new Error('--media-version must look like v1, v2 or v2-fix');
  }
  if (!['auto', 'libreoffice', 'images'].includes(options.renderer)) {
    throw new Error('--renderer must be auto, libreoffice or images');
  }
  if (!Number.isInteger(options.concurrency) || options.concurrency < 1 || options.concurrency > 8) {
    throw new Error('--concurrency must be an integer from 1 through 8');
  }
  if (options.source === undefined) {
    if (options.slug !== defaultSlug) {
      throw new Error('--source is required for this Share');
    }
    options.source = resolve(
      repoRoot,
      '..',
      'quartz',
      'content',
      'slide-deck',
      'agent-native-ai-maker-shanghai',
      '构建 Agent Native Product-AI Maker 上海-晓灰-v4.pptx',
    );
  }
  if ((options.article === undefined) !== (options.articleUrl === undefined)) {
    throw new Error('--article and --article-url must be provided together');
  }
  options.output ??= resolve(repoRoot, 'dist', 'shares', options.slug, options.version);
  return options;
}

async function isExecutable(candidate) {
  try {
    await access(candidate, fsConstants.X_OK);
    return (await stat(candidate)).isFile();
  } catch {
    return false;
  }
}

async function findExecutable(command, extraCandidates = []) {
  for (const candidate of extraCandidates) {
    if (candidate && (await isExecutable(candidate))) {
      return candidate;
    }
  }
  for (const directory of (process.env['PATH'] ?? '').split(process.platform === 'win32' ? ';' : ':')) {
    const candidate = directory ? join(directory, command) : '';
    if (candidate && (await isExecutable(candidate))) {
      return candidate;
    }
  }
  return undefined;
}

async function requireExecutable(command, extraCandidates = []) {
  const found = await findExecutable(command, extraCandidates);
  if (!found) {
    throw new Error(`Required executable not found: ${command}`);
  }
  return found;
}

async function runCommand(command, arguments_, action) {
  try {
    return await execFile(command, arguments_, {
      encoding: 'utf8',
      maxBuffer: maxCommandOutputBytes,
      env: process.env,
    });
  } catch (cause) {
    const details = typeof cause?.stderr === 'string' ? cause.stderr.trim() : '';
    throw new Error(`${action} failed${details ? `: ${details}` : ''}`, { cause });
  }
}

function assertPublicTextSafe(text, label) {
  if (localPathPattern.test(text)) {
    throw new Error(`${label} contains a local filesystem path`);
  }
  for (const pattern of sensitivePatterns) {
    if (pattern.test(text)) {
      throw new Error(`${label} contains credential-like text`);
    }
  }
}

async function loadShare(registryPath, slug) {
  const imported = await import(`${pathToFileURL(registryPath).href}?prepare=${Date.now()}`);
  const share = imported.getShareBySlug?.(slug);
  if (!share || share.slug !== slug) {
    throw new Error(`Share ${slug} is not registered in ${relative(repoRoot, registryPath)}`);
  }
  if (!share.deck) {
    throw new Error(`Share ${slug} has no deck`);
  }
  return share;
}

function renderTranscript(share) {
  const sections = share.deck.slides.map(slide =>
    [
      `## Slide ${String(slide.number).padStart(3, '0')}: ${slide.title.replace(/[\r\n]+/g, ' ').trim()}`,
      '',
      `**Image description:** ${slide.description}`,
      '',
      slide.transcript.trim() || '_No transcript text was provided for this slide._',
    ].join('\n'),
  );
  const transcript = [
    `# ${share.title} — Transcript`,
    '',
    share.summary,
    '',
    'This transcript is maintained in the reviewed TypeScript Share registry and follows the physical slide order.',
    '',
    ...sections.flatMap(section => [section, '']),
  ].join('\n');
  assertPublicTextSafe(transcript, 'Generated transcript');
  return `${transcript.trim()}\n`;
}

async function convertWebp(cwebp, input, output, width, height, quality) {
  await runCommand(
    cwebp,
    [
      '-quiet',
      '-mt',
      '-preset',
      'text',
      '-m',
      '6',
      '-q',
      String(quality),
      '-sharp_yuv',
      '-metadata',
      'none',
      '-resize',
      String(width),
      String(height),
      input,
      '-o',
      output,
    ],
    `WebP conversion for ${basename(output)}`,
  );
}

async function mapConcurrent(values, concurrency, worker) {
  let next = 0;
  await Promise.all(
    Array.from({ length: Math.min(concurrency, values.length) }, async () => {
      while (next < values.length) {
        const current = next;
        next += 1;
        await worker(values[current], current);
      }
    }),
  );
}

async function listFiles(root) {
  const files = [];
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        await walk(path);
      } else {
        files.push({ key: relative(root, path).split(sep).join('/'), size: (await stat(path)).size });
      }
    }
  }
  await walk(root);
  return files.sort((left, right) => left.key.localeCompare(right.key));
}

async function renderPages({ renderer, python, sanitizedPptx, deckPdf, rasterDirectory, workDirectory, slideCount }) {
  const soffice = await findExecutable(
    process.env['SOFFICE_BIN'] ?? 'soffice',
    process.platform === 'darwin' ? ['/Applications/LibreOffice.app/Contents/MacOS/soffice'] : [],
  );

  if (renderer === 'libreoffice' || (renderer === 'auto' && soffice)) {
    if (!soffice) {
      throw new Error('LibreOffice (soffice) is not installed; use --renderer images for image-only decks');
    }
    const outputDirectory = join(workDirectory, 'libreoffice-output');
    const profileDirectory = join(workDirectory, 'libreoffice-profile');
    await mkdir(outputDirectory, { recursive: true });
    await mkdir(profileDirectory, { recursive: true });
    await runCommand(
      soffice,
      [
        '--headless',
        '--nologo',
        '--nodefault',
        '--nolockcheck',
        '--nofirststartwizard',
        `-env:UserInstallation=${pathToFileURL(`${profileDirectory}${sep}`).href}`,
        '--convert-to',
        'pdf:impress_pdf_Export',
        '--outdir',
        outputDirectory,
        sanitizedPptx,
      ],
      'LibreOffice PDF export',
    );
    await rename(join(outputDirectory, basename(sanitizedPptx).replace(/\.pptx$/i, '.pdf')), deckPdf);
    const pdftoppm = await requireExecutable('pdftoppm');
    await runCommand(
      pdftoppm,
      [
        '-f',
        '1',
        '-l',
        String(slideCount),
        '-png',
        '-scale-to-x',
        String(slideWidth),
        '-scale-to-y',
        String(slideHeight),
        deckPdf,
        join(rasterDirectory, 'page'),
      ],
      'PDF rasterization',
    );
    return;
  }

  await runCommand(
    python,
    [
      resolve(repoRoot, 'scripts', 'render-share-deck-images.py'),
      '--input',
      sanitizedPptx,
      '--pages-dir',
      rasterDirectory,
      '--pdf',
      deckPdf,
      '--expected-slides',
      String(slideCount),
    ],
    'Image deck rendering',
  );
}

async function prepare(options) {
  const python = await requireExecutable('python3');
  const cwebp = await requireExecutable('cwebp');
  await access(options.source);

  const share = await loadShare(options.registry, options.slug);
  const slideCount = share.deck.slideCount;
  const expectedPrefix = `/shares/${options.slug}/${options.version}`;
  if (new URL(share.deck.baseUrl).pathname !== expectedPrefix) {
    throw new Error(`Registry deck.baseUrl must end with ${expectedPrefix}`);
  }
  const hasArticle = share.resources.some(resource => resource.kind === 'article');
  if (hasArticle !== (options.article !== undefined)) {
    throw new Error(
      hasArticle
        ? 'Share declares an article resource; pass --article and --article-url'
        : 'Share has no article resource; remove --article',
    );
  }

  const stagingRoot = resolve(repoRoot, 'dist', 'shares');
  const outputParent = dirname(options.output);
  if (
    options.output !== resolve(stagingRoot, options.slug, options.version) &&
    !options.output.startsWith(`${stagingRoot}${sep}`)
  ) {
    throw new Error('--output must be inside dist/shares');
  }
  try {
    await access(options.output);
    if (!options.force) {
      throw new Error(`Output already exists: ${relative(repoRoot, options.output)}; pass --force to replace it`);
    }
  } catch (cause) {
    if (cause?.code !== 'ENOENT') {
      throw cause;
    }
  }

  await mkdir(outputParent, { recursive: true });
  const workDirectory = await mkdtemp(join(outputParent, `.work-${options.version}-`));
  try {
    const stage = join(workDirectory, 'stage');
    const raster = join(workDirectory, 'raster');
    await mkdir(join(stage, 'slides'), { recursive: true });
    await mkdir(join(stage, 'thumbnails'), { recursive: true });
    await mkdir(raster, { recursive: true });

    const sanitizedPptx = join(stage, 'source.pptx');
    await runCommand(
      python,
      [
        resolve(repoRoot, 'scripts', 'sanitize-share-pptx.py'),
        '--input',
        options.source,
        '--output',
        sanitizedPptx,
        '--report',
        join(workDirectory, 'sanitizer-review.json'),
        '--expected-slides',
        String(slideCount),
        '--force',
      ],
      'PPTX sanitization',
    );

    let renderSource = sanitizedPptx;
    if (options.renderSource) {
      renderSource = join(workDirectory, 'render.pptx');
      await runCommand(
        python,
        [
          resolve(repoRoot, 'scripts', 'sanitize-share-pptx.py'),
          '--input',
          options.renderSource,
          '--output',
          renderSource,
          '--report',
          join(workDirectory, 'render-review.json'),
          '--expected-slides',
          String(slideCount),
        ],
        'Render copy sanitization',
      );
    }
    await renderPages({
      renderer: options.renderer,
      python,
      sanitizedPptx: renderSource,
      deckPdf: join(stage, 'deck.pdf'),
      rasterDirectory: raster,
      workDirectory,
      slideCount,
    });

    const pages = (await readdir(raster))
      .filter(name => /^page-\d+\.png$/.test(name))
      .sort((left, right) => Number(/\d+/.exec(left)?.[0]) - Number(/\d+/.exec(right)?.[0]));
    if (pages.length !== slideCount) {
      throw new Error(`Expected ${slideCount} rendered pages; received ${pages.length}`);
    }
    await mapConcurrent(pages, options.concurrency, async (name, index) => {
      const number = String(index + 1).padStart(3, '0');
      const input = join(raster, name);
      await convertWebp(cwebp, input, join(stage, 'slides', `${number}.webp`), slideWidth, slideHeight, 90);
      await convertWebp(cwebp, input, join(stage, 'thumbnails', `${number}.webp`), thumbnailWidth, thumbnailHeight, 82);
    });
    await convertWebp(cwebp, join(raster, pages[0]), join(stage, 'cover.webp'), coverWidth, coverHeight, 90);

    await writeFile(join(stage, 'transcript.md'), renderTranscript(share), 'utf8');

    if (options.article !== undefined) {
      const { markdown, unresolved } = await renderArticleSnapshot({
        sourcePath: options.article,
        contentRoot: options.contentRoot,
        siteOrigin,
        sourceUrl: options.articleUrl,
        shareUrl: `https://aispeeds.me/shares/${options.slug}`,
        frozenAt: new Date().toISOString(),
      });
      assertPublicTextSafe(markdown, 'Article snapshot');
      await writeFile(join(stage, 'article.md'), markdown, 'utf8');
      if (unresolved.length > 0) {
        error(`Unresolved article links kept as plain text: ${[...new Set(unresolved)].join(', ')}`);
      }
    }

    const files = await listFiles(stage);
    const manifest = {
      slug: options.slug,
      version: options.version,
      publicBaseUrl: share.deck.baseUrl,
      generatedAt: new Date().toISOString(),
      files,
    };
    await writeFile(join(stage, 'manifest.json'), `${JSON.stringify(manifest, undefined, 2)}\n`, 'utf8');

    if (options.force) {
      await rm(options.output, { recursive: true, force: true });
    }
    await rename(stage, options.output);
    log(`Prepared ${files.length + 1} files at ${relative(repoRoot, options.output)}`);
  } finally {
    await rm(workDirectory, { recursive: true, force: true });
  }
}

async function main() {
  assertSupportedNodeVersion();
  await prepare(parseArguments(process.argv.slice(2)));
}

if (process.argv[1] && resolve(process.argv[1]) === scriptPath) {
  main().catch(cause => {
    error(`prepare-share-assets: ${cause instanceof Error ? cause.message : String(cause)}`);
    process.exitCode = 1;
  });
}
