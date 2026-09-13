import type { FeatureId } from '@/config/features';
import { SITE_LINKS } from '@/config/site-links';
import { UI_TEXTS } from '@/config/ui-texts';

export type NavigationGroupId = 'products' | 'tools' | 'resources';

export type NavigationGroup = {
  id: NavigationGroupId;
  label: string;
  featureIds: readonly FeatureId[];
};

export type ExternalNavigationItem = {
  id: 'github';
  label: string;
  href: string;
};

export const navigationGroups = [
  {
    id: 'products',
    label: UI_TEXTS.NAVIGATION_GROUPS.PRODUCTS,
    featureIds: ['api-gateway', 'cc4pm'],
  },
  {
    id: 'tools',
    label: UI_TEXTS.NAVIGATION_GROUPS.TOOLS,
    featureIds: ['playground', 'whiteboard', 'recording-summary', 'ai-wireframe'],
  },
  {
    id: 'resources',
    label: UI_TEXTS.NAVIGATION_GROUPS.RESOURCES,
    featureIds: ['get-started', 'shares'],
  },
] as const satisfies readonly NavigationGroup[];

export const standaloneNavigationFeatureIds = ['brand'] as const satisfies readonly FeatureId[];

export const primaryActionFeatureId = 'playground' satisfies FeatureId;

export const externalNavigationItems = [
  {
    id: 'github',
    label: UI_TEXTS.HEADER.GITHUB,
    href: SITE_LINKS.github,
  },
] as const satisfies readonly ExternalNavigationItem[];
