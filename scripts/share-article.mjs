// @ts-nocheck -- operator helper; inputs are validated at runtime.
import { readdir, readFile } from 'node:fs/promises';
import { basename, join, relative, sep } from 'node:path';

const frontmatterPattern = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/;

/** Quartz-style slug: path without extension, spaces become hyphens. */
function slugFromRelativePath(relativePath) {
  return relativePath
    .split(sep)
    .join('/')
    .replace(/\.md$/i, '')
    .replace(/\s+/g, '-')
    .replace(/&/g, '-and-')
    .replace(/%/g, '-percent')
    .replace(/\?/g, '')
    .replace(/#/g, '-hash');
}

async function indexMarkdown(root) {
  const index = new Map();
  async function walk(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      if (entry.name.startsWith('.') || entry.name === 'node_modules' || entry.name === 'private') {
        continue;
      }
      const path = join(directory, entry.name);
      if (entry.isDirectory()) {
        await walk(path);
      } else if (entry.name.endsWith('.md')) {
        const key = basename(entry.name, '.md');
        if (!index.has(key)) {
          index.set(key, relative(root, path));
        }
      }
    }
  }
  await walk(root);
  return index;
}

/**
 * Convert an Obsidian note into a self-contained Markdown snapshot.
 * Wikilinks resolve to absolute site URLs; unresolved links are kept as plain text and reported.
 */
export async function renderArticleSnapshot({ sourcePath, contentRoot, siteOrigin, sourceUrl, shareUrl, frozenAt }) {
  const raw = await readFile(sourcePath, 'utf8');
  const match = frontmatterPattern.exec(raw);
  const frontmatter = match?.[1] ?? '';
  const body = match ? raw.slice(match[0].length) : raw;
  const title = /^title:\s*(.+)$/m.exec(frontmatter)?.[1]?.trim();
  if (!title) {
    throw new Error('Article source must have a title in its frontmatter');
  }
  const published = /^published:\s*(\S+)/m.exec(frontmatter)?.[1];
  const index = await indexMarkdown(contentRoot);
  const unresolved = [];

  let text = body.replace(/\[\[([^\]|]+)\|?([^\]]*)\]\]/g, (_whole, target, alias) => {
    const label = (alias || target).trim();
    const found = index.get(target.trim());
    if (!found) {
      unresolved.push(target.trim());
      return label;
    }
    return `[${label}](${siteOrigin}/${encodeURI(slugFromRelativePath(found))})`;
  });

  text = text.replace(/^> \[!\w+\]\s*(.*)$/gm, (_whole, heading) => `**${heading.trim() || '延伸阅读'}**\n`);
  text = text.replace(/^> ?/gm, '');

  const header = [
    `# ${title}`,
    '',
    `- 原文：${sourceUrl}`,
    ...(published ? [`- 原文发布日期：${published.slice(0, 10)}`] : []),
    `- 关联分享：${shareUrl}`,
    `- 快照冻结时间：${frozenAt}`,
    '',
    '本文件是公开发布时冻结的文章快照；原文后续修改不会改变此快照。',
    '',
    '---',
    '',
  ].join('\n');

  return { markdown: `${header}${text.trim()}\n`, unresolved };
}
