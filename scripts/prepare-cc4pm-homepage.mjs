import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';

const sourcePath = join(process.cwd(), 'node_modules', '@cc4pm', 'homepage', 'index.html');
const outputPath = join(process.cwd(), 'public', 'static', 'cc4pm-homepage.html');
const navPattern = /<!-- NAV -->[\s\S]*?<\/header>/i;

const homepageHtml = await readFile(sourcePath, 'utf8');

await mkdir(dirname(outputPath), { recursive: true });
await writeFile(outputPath, homepageHtml.replace(navPattern, ''), 'utf8');

console.log(`Prepared ${outputPath}`);
