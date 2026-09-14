import { getContributorById } from '@/config/contributors';
import { UI_TEXTS } from '@/config/ui-texts';
import type { ContentProvenance, ContributionRole, Contributor } from '@/types/content-provenance';

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

export function hasAttributionRole(provenance: ContentProvenance, role: ContributionRole): boolean {
  return provenance.attributions.some(attribution => attribution.roles.includes(role));
}

export function isHttpsUrl(value: string): boolean {
  try {
    return new URL(value).protocol === 'https:';
  } catch {
    return false;
  }
}
