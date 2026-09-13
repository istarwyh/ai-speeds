import { UI_TEXTS } from '@/config/ui-texts';
import {
  getContributorById,
  type ContentProvenance,
  type ContributionRole,
  type Contributor,
} from '@/content/contributors';
import { shareProvenanceBySlug, type Share } from '@/content/shares';

export type ResolvedContentAttribution = {
  contributor: Contributor;
  roles: ContentProvenance['attributions'][number]['roles'];
};

export type ResolvedContentProvenance = Omit<ContentProvenance, 'attributions'> & {
  attributions: readonly ResolvedContentAttribution[];
  label: string;
};

function buildAttributionLabel(provenance: ContentProvenance, contributors: readonly Contributor[]): string {
  const names = contributors.map(contributor => contributor.displayName).join('、');
  const prefix = UI_TEXTS.ATTRIBUTION[provenance.origin];

  return names.length > 0 ? `${prefix} · ${names}` : prefix;
}

export function resolveContentProvenance(provenance: ContentProvenance): ResolvedContentProvenance {
  const attributions = provenance.attributions.map(attribution => {
    const contributor = getContributorById(attribution.contributorId);

    if (contributor === undefined) {
      throw new Error(`内容署名引用了不存在的贡献者：${attribution.contributorId}`);
    }

    return {
      contributor,
      roles: attribution.roles,
    };
  });

  return {
    ...provenance,
    attributions,
    label: buildAttributionLabel(
      provenance,
      attributions.map(attribution => attribution.contributor),
    ),
  };
}

function getRegisteredShareProvenance(slug: string): ContentProvenance | undefined {
  const registry: Readonly<Record<string, ContentProvenance>> = shareProvenanceBySlug;
  return registry[slug];
}

export function getShareProvenance(share: Share): ResolvedContentProvenance {
  const provenance = getRegisteredShareProvenance(share.slug);

  if (provenance === undefined) {
    throw new Error(`公开分享缺少来源与署名信息：${share.slug}`);
  }

  return resolveContentProvenance(provenance);
}

function hasAttributionRole(provenance: ContentProvenance, role: ContributionRole): boolean {
  return provenance.attributions.some(attribution => attribution.roles.includes(role));
}

function isHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}

export function validateShareProvenance(shares: readonly Share[]): string[] {
  const errors: string[] = [];
  const shareBySlug = new Map(shares.map(share => [share.slug, share]));
  const provenanceRegistry: Readonly<Record<string, ContentProvenance>> = shareProvenanceBySlug;

  for (const slug of Object.keys(provenanceRegistry)) {
    if (!shareBySlug.has(slug)) {
      errors.push(`来源与署名信息引用了不存在的分享：${slug}`);
    }
  }

  for (const share of shares) {
    const provenance = getRegisteredShareProvenance(share.slug);

    if (provenance === undefined) {
      if (share.status === 'public') {
        errors.push(`公开分享缺少来源与署名信息：${share.slug}`);
      }
      continue;
    }

    if (provenance.attributions.length === 0) {
      errors.push(`分享至少需要一项署名：${share.slug}`);
    }

    const contributorIds = new Set<string>();

    for (const attribution of provenance.attributions) {
      if (contributorIds.has(attribution.contributorId)) {
        errors.push(`同一贡献者不能重复出现在分享署名中：${share.slug} -> ${attribution.contributorId}`);
      }
      contributorIds.add(attribution.contributorId);

      if (attribution.roles.length === 0) {
        errors.push(`分享署名至少需要一个角色：${share.slug} -> ${attribution.contributorId}`);
      }

      if (new Set(attribution.roles).size !== attribution.roles.length) {
        errors.push(`分享署名角色重复：${share.slug} -> ${attribution.contributorId}`);
      }

      if (getContributorById(attribution.contributorId) === undefined) {
        errors.push(`分享引用了不存在的贡献者：${share.slug} -> ${attribution.contributorId}`);
      }
    }

    if (
      provenance.origin === 'original' &&
      !hasAttributionRole(provenance, 'creator') &&
      !hasAttributionRole(provenance, 'author')
    ) {
      errors.push(`原创内容至少需要 Creator 或 Author：${share.slug}`);
    }

    if (provenance.origin === 'collaboration') {
      if (contributorIds.size < 2) {
        errors.push(`共创内容至少需要两个不同的贡献主体：${share.slug}`);
      }

      if (!hasAttributionRole(provenance, 'collaborator')) {
        errors.push(`共创内容必须标注主要 Collaborator：${share.slug}`);
      }
    }

    if (provenance.origin === 'curated') {
      if (provenance.rightsMode === 'owned') {
        errors.push(`精选内容不能默认标记为自有版权：${share.slug}`);
      }

      if (provenance.sourceUrl === undefined || !isHttpsUrl(provenance.sourceUrl)) {
        errors.push(`精选内容必须提供有效的 HTTPS 来源：${share.slug}`);
      }

      if (!hasAttributionRole(provenance, 'curator')) {
        errors.push(`精选内容必须标注 Curator：${share.slug}`);
      }

      if (!hasAttributionRole(provenance, 'creator') && !hasAttributionRole(provenance, 'author')) {
        errors.push(`精选内容必须标注原作者或发布主体：${share.slug}`);
      }
    }

    if (provenance.sourceUrl !== undefined && !isHttpsUrl(provenance.sourceUrl)) {
      errors.push(`内容来源必须使用有效的 HTTPS URL：${share.slug}`);
    }

    if (provenance.canonicalUrl !== undefined && !isHttpsUrl(provenance.canonicalUrl)) {
      errors.push(`内容 Canonical 必须使用有效的 HTTPS URL：${share.slug}`);
    }

    if (provenance.rightsMode === 'linked-only' && (share.deck !== undefined || share.resources.length > 0)) {
      errors.push(`linked-only 分享不能托管本地 Deck 或下载资源：${share.slug}`);
    }
  }

  return errors;
}
