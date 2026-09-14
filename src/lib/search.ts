import type { SearchEntry } from '@/lib/search-query';

export type { SearchEntry } from '@/lib/search-query';

export function validateSearchEntries(entries: readonly SearchEntry[]): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();

  for (const entry of entries) {
    if (ids.has(entry.id)) {
      errors.push(`搜索条目 ID 重复：${entry.id}`);
    }
    ids.add(entry.id);

    if (
      entry.title.trim().length === 0 ||
      entry.description.trim().length === 0 ||
      entry.attributionLabel.trim().length === 0
    ) {
      errors.push(`搜索条目缺少标题、描述或署名：${entry.id}`);
    }

    if (entry.targetKind === 'external') {
      try {
        const url = new URL(entry.href);
        if (url.protocol !== 'https:') {
          errors.push(`外部搜索条目必须使用 HTTPS：${entry.id}`);
        }
      } catch {
        errors.push(`外部搜索条目 URL 无效：${entry.id}`);
      }
    } else if (!entry.href.startsWith('/') || entry.href.startsWith('//')) {
      errors.push(`站内搜索条目必须使用绝对站内路径：${entry.id}`);
    }
  }

  return errors;
}
