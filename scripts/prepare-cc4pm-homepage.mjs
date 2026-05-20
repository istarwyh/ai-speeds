import { log } from 'node:console';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import process from 'node:process';

const sourcePath = join(process.cwd(), 'node_modules', '@cc4pm', 'homepage', 'index.html');
const outputPath = join(process.cwd(), 'public', 'static', 'cc4pm-homepage.html');
const navPattern = /<!-- NAV -->[\s\S]*?<\/header>/i;
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

const homepageHtml = await readFile(sourcePath, 'utf8');
const embeddedHomepage = homepageHtml.replace(navPattern, '').replace('</style>', `${embeddedOverrides}\n</style>`);

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, embeddedHomepage, 'utf8');

log(`Prepared ${outputPath}`);
