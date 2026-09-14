import { featurePages, getFeatureById, type FeatureId, type FeaturePage } from '@/config/features';
import {
  externalNavigationItems,
  navigationGroups,
  primaryActionFeatureId,
  standaloneNavigationFeatureIds,
} from '@/config/site-navigation';

export type ResolvedNavigationGroup = {
  id: (typeof navigationGroups)[number]['id'];
  label: string;
  features: readonly FeaturePage[];
};

function resolvePublicFeature(id: FeatureId): FeaturePage {
  const feature = getFeatureById(id);

  if (!feature.isPublic) {
    throw new Error(`导航不能引用未公开功能：${id}`);
  }

  return feature;
}

export const resolvedNavigationGroups: readonly ResolvedNavigationGroup[] = navigationGroups.map(group => ({
  id: group.id,
  label: group.label,
  features: group.featureIds.map(resolvePublicFeature),
}));

export const standaloneNavigationFeatures = standaloneNavigationFeatureIds.map(resolvePublicFeature);

export const primaryActionFeature = resolvePublicFeature(primaryActionFeatureId);

export function isFeatureActive(feature: FeaturePage, pathname: string, hash = ''): boolean {
  const [featurePathname, featureHash = ''] = feature.href.split('#');

  if (feature.activeMatch === 'hash') {
    return pathname === featurePathname && hash === `#${featureHash}`;
  }

  if (feature.activeMatch === 'prefix') {
    return pathname === featurePathname || pathname.startsWith(`${featurePathname}/`);
  }

  return pathname === featurePathname;
}

export function validateNavigationRegistry(): string[] {
  const errors: string[] = [];
  const groupIds = new Set<string>();
  const navigationFeatureIds = new Set<string>();

  for (const group of navigationGroups) {
    if (groupIds.has(group.id)) {
      errors.push(`导航分组 ID 重复：${group.id}`);
    }
    groupIds.add(group.id);

    if (group.label.trim().length === 0) {
      errors.push(`导航分组缺少标题：${group.id}`);
    }

    for (const featureId of group.featureIds) {
      if (navigationFeatureIds.has(featureId)) {
        errors.push(`Feature 重复进入普通导航：${featureId}`);
      }
      navigationFeatureIds.add(featureId);
    }
  }

  for (const featureId of standaloneNavigationFeatureIds) {
    if (navigationFeatureIds.has(featureId)) {
      errors.push(`Feature 重复进入普通导航：${featureId}`);
    }
    navigationFeatureIds.add(featureId);
  }

  for (const featureId of navigationFeatureIds) {
    const feature = featurePages.find(candidate => candidate.id === featureId);

    if (feature === undefined) {
      errors.push(`导航引用了不存在的功能：${featureId}`);
      continue;
    }

    if (!feature.isPublic) {
      errors.push(`公开导航不能引用未公开功能：${featureId}`);
    }

    if (feature.shell === 'immersive') {
      errors.push(`Immersive Feature 不能直接进入普通导航：${featureId}`);
    }
  }

  const primaryAction = featurePages.find(feature => feature.id === primaryActionFeatureId);

  if (primaryAction === undefined) {
    errors.push(`Primary Action 引用了不存在的功能：${primaryActionFeatureId}`);
  } else {
    if (!primaryAction.isPublic) {
      errors.push(`Primary Action 不能引用未公开功能：${primaryActionFeatureId}`);
    }

    if (primaryAction.targetKind !== 'route' || primaryAction.shell === 'immersive') {
      errors.push(`Primary Action 必须指向公开的普通 Route：${primaryActionFeatureId}`);
    }
  }

  const externalItemIds = new Set<string>();

  for (const item of externalNavigationItems) {
    if (externalItemIds.has(item.id)) {
      errors.push(`外部导航 ID 重复：${item.id}`);
    }
    externalItemIds.add(item.id);

    if (item.label.trim().length === 0) {
      errors.push(`外部导航缺少标题：${item.id}`);
    }

    try {
      const url = new URL(item.href);
      if (url.protocol !== 'https:') {
        errors.push(`外部导航必须使用 HTTPS：${item.id}`);
      }
    } catch {
      errors.push(`外部导航 URL 无效：${item.id}`);
    }
  }

  return errors;
}
