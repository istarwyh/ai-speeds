import { featurePages, searchableFeaturePages } from '@/config/features';
import { getPublicShares } from '@/content/shares';
import { getShareProvenance } from '@/lib/attribution';
import type { SearchEntry } from '@/lib/search-query';

export type { SearchEntry } from '@/lib/search-query';

function buildFeatureSearchEntries(): SearchEntry[] {
  return searchableFeaturePages.map(feature => ({
    id: `feature:${feature.id}`,
    title: feature.title,
    description: feature.description,
    href: feature.href,
    group: feature.searchGroup,
    origin: 'original',
    attributionLabel: 'AI Speeds',
    keywords: feature.keywords,
    targetKind: feature.targetKind,
  }));
}

function buildShareSearchEntries(): SearchEntry[] {
  return getPublicShares().map(share => {
    const provenance = getShareProvenance(share);

    return {
      id: `share:${share.slug}`,
      title: share.title,
      description: share.summary,
      href: `/shares/${share.slug}`,
      group: 'shares',
      origin: provenance.origin,
      attributionLabel: provenance.label,
      keywords: [...share.tags, share.author.name, share.event.name, share.location],
      targetKind: 'route',
    };
  });
}

export const siteSearchEntries: readonly SearchEntry[] = [...buildFeatureSearchEntries(), ...buildShareSearchEntries()];

export function validateSearchIndex(entries: readonly SearchEntry[] = siteSearchEntries): string[] {
  const errors: string[] = [];
  const ids = new Set<string>();
  const publicShareSlugs = new Set(getPublicShares().map(share => share.slug));

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

    if (entry.id.startsWith('feature:')) {
      const featureId = entry.id.slice('feature:'.length);
      const feature = featurePages.find(candidate => candidate.id === featureId);

      if (feature === undefined) {
        errors.push(`搜索引用了不存在的 Feature：${featureId}`);
      } else if (!feature.isPublic || !feature.searchable) {
        errors.push(`未公开或不可搜索的 Feature 不能进入搜索：${featureId}`);
      } else if (
        entry.href !== feature.href ||
        entry.targetKind !== feature.targetKind ||
        entry.group !== feature.searchGroup
      ) {
        errors.push(`Feature 搜索条目与注册表不一致：${featureId}`);
      }
    } else if (entry.id.startsWith('share:')) {
      const slug = entry.id.slice('share:'.length);

      if (!publicShareSlugs.has(slug)) {
        errors.push(`非公开或不存在的 Share 不能进入搜索：${slug}`);
      }
    } else {
      errors.push(`搜索条目 ID 缺少受支持的来源前缀：${entry.id}`);
    }
  }

  const expectedIds = [
    ...searchableFeaturePages.map(feature => `feature:${feature.id}`),
    ...getPublicShares().map(share => `share:${share.slug}`),
  ];

  for (const expectedId of expectedIds) {
    if (!ids.has(expectedId)) {
      errors.push(`公开可搜索内容缺少搜索条目：${expectedId}`);
    }
  }

  return errors;
}
