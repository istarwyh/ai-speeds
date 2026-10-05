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
  id: 'blog' | 'github';
  label: string;
  href: string;
  showInPrimaryNavigation: boolean;
};

export const navigationGroups = [
  {
    id: 'products',
    label: UI_TEXTS.NAVIGATION_GROUPS.PRODUCTS,
    featureIds: ['yourbuddy', 'mcp-advisor', 'writing-helper', 'api-gateway', 'cc4pm', 'harbor-self-evolving'],
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
    id: 'blog',
    label: UI_TEXTS.NAVIGATION.BLOG,
    href: SITE_LINKS.blog,
    showInPrimaryNavigation: true,
  },
  {
    id: 'github',
    label: UI_TEXTS.HEADER.GITHUB,
    href: SITE_LINKS.github,
    showInPrimaryNavigation: false,
  },
] as const satisfies readonly ExternalNavigationItem[];

export const primaryExternalNavigationItems = externalNavigationItems.filter(item => item.showInPrimaryNavigation);
