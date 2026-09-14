import type { FeatureTargetKind, SearchGroupId } from '@/config/features';
import type { ContentOrigin } from '@/types/content-provenance';

export type SearchEntry = {
  id: string;
  title: string;
  description: string;
  href: string;
  group: SearchGroupId;
  origin: ContentOrigin;
  attributionLabel: string;
  keywords: readonly string[];
  targetKind: FeatureTargetKind;
};

type RankedSearchEntry = {
  entry: SearchEntry;
  score: number;
};

export function normalizeSearchValue(value: string): string {
  return value.normalize('NFKC').toLowerCase().trim().replace(/\s+/g, ' ');
}

function rankSearchEntry(entry: SearchEntry, normalizedQuery: string): RankedSearchEntry | undefined {
  const title = normalizeSearchValue(entry.title);
  const description = normalizeSearchValue(entry.description);
  const keywords = entry.keywords.map(normalizeSearchValue);
  let score = 0;

  if (title.startsWith(normalizedQuery)) {
    score += 400;
  } else if (title.includes(normalizedQuery)) {
    score += 300;
  }

  if (keywords.some(keyword => keyword.includes(normalizedQuery))) {
    score += 200;
  }

  if (description.includes(normalizedQuery)) {
    score += 100;
  }

  if (score === 0) {
    return undefined;
  }

  return { entry, score };
}

export function searchSiteEntries(query: string, entries: readonly SearchEntry[]): readonly SearchEntry[] {
  const normalizedQuery = normalizeSearchValue(query);

  if (normalizedQuery.length === 0) {
    return entries;
  }

  return entries
    .map(entry => rankSearchEntry(entry, normalizedQuery))
    .filter((ranked): ranked is RankedSearchEntry => ranked !== undefined)
    .sort((left, right) => right.score - left.score || left.entry.title.localeCompare(right.entry.title, 'zh-CN'))
    .map(ranked => ranked.entry);
}
