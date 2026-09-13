import type { MetadataRoute } from 'next';
import { UI_TEXTS } from '@/config/ui-texts';

export type FeatureKind = 'route' | 'section';
export type FeatureTargetKind = 'route' | 'anchor' | 'external';
export type FeatureActiveMatch = 'exact' | 'prefix' | 'hash';
export type ShellKind = 'site' | 'tool' | 'immersive';
export type SearchGroupId = 'products' | 'tools' | 'resources' | 'shares' | 'curated' | 'brand';
export type HomeSectionId = 'home' | 'get-started' | 'ai-wireframe';

export type FeaturePage = {
  id: string;
  title: string;
  description: string;
  href: string;
  targetKind: FeatureTargetKind;
  shell: ShellKind;
  isPublic: boolean;
  includeInSitemap: boolean;
  searchable: boolean;
  keywords: readonly string[];
  searchGroup: SearchGroupId;
  activeMatch: FeatureActiveMatch;
  kind: FeatureKind;
  showInHomeMenu: boolean;
  sitemapPriority?: number;
  sitemapChangeFrequency?: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
};

export const DEFAULT_HOME_SECTION_ID: HomeSectionId = 'home';

const HOME_SECTION_IDS = ['home', 'get-started', 'ai-wireframe'] satisfies readonly HomeSectionId[];

export const HOME_PAGE_ANCHOR_IDS = ['api-gateway', 'cc4pm'] as const;

const featureDefinitions = [
  {
    id: 'home',
    title: UI_TEXTS.NAVIGATION.HOME,
    description: '了解 AI Speeds 的使命、产品、工具与公开实践。',
    href: '/',
    targetKind: 'route',
    shell: 'site',
    isPublic: true,
    includeInSitemap: true,
    searchable: true,
    keywords: ['AI Speeds', '人工智能', 'AI 生产力'],
    searchGroup: 'brand',
    activeMatch: 'exact',
    kind: 'route',
    showInHomeMenu: true,
    sitemapPriority: 1,
    sitemapChangeFrequency: 'weekly',
  },
  {
    id: 'api-gateway',
    title: UI_TEXTS.NAVIGATION.API_GATEWAY,
    description: '将 Anthropic API 格式转换到多种 OpenAI 兼容模型服务。',
    href: '/#api-gateway',
    targetKind: 'anchor',
    shell: 'site',
    isPublic: true,
    includeInSitemap: false,
    searchable: true,
    keywords: ['Claude API', 'Anthropic', 'OpenAI compatible', '模型网关', 'API 代理'],
    searchGroup: 'products',
    activeMatch: 'hash',
    kind: 'section',
    showInHomeMenu: false,
  },
  {
    id: 'cc4pm',
    title: UI_TEXTS.NAVIGATION.CC4PM,
    description: '面向产品主理人的 AI 原生产品工作方法与可复用能力。',
    href: '/#cc4pm',
    targetKind: 'anchor',
    shell: 'site',
    isPublic: true,
    includeInSitemap: false,
    searchable: true,
    keywords: ['产品管理', 'AI PM', '产品主理人', 'Agent'],
    searchGroup: 'products',
    activeMatch: 'hash',
    kind: 'section',
    showInHomeMenu: false,
  },
  {
    id: 'get-started',
    title: UI_TEXTS.NAVIGATION.GET_STARTED,
    description: UI_TEXTS.MODULE_DESCRIPTIONS['get-started'],
    href: '/get-started',
    targetKind: 'route',
    shell: 'site',
    isPublic: true,
    includeInSitemap: true,
    searchable: true,
    keywords: ['Claude Code', 'Provider', '环境变量', '接入指南'],
    searchGroup: 'resources',
    activeMatch: 'exact',
    kind: 'route',
    showInHomeMenu: true,
    sitemapPriority: 0.8,
    sitemapChangeFrequency: 'monthly',
  },
  {
    id: 'ai-wireframe',
    title: UI_TEXTS.NAVIGATION.AI_WIREFRAME,
    description: UI_TEXTS.MODULE_DESCRIPTIONS['ai-wireframe'],
    href: '/wireframe',
    targetKind: 'route',
    shell: 'tool',
    isPublic: true,
    includeInSitemap: true,
    searchable: true,
    keywords: ['Wireframe', 'UI', '结构设计', '低保真原型'],
    searchGroup: 'tools',
    activeMatch: 'prefix',
    kind: 'route',
    showInHomeMenu: true,
    sitemapPriority: 0.7,
    sitemapChangeFrequency: 'monthly',
  },
  {
    id: 'whiteboard',
    title: UI_TEXTS.NAVIGATION.WHITEBOARD,
    description: '自由绘制、书写和整理思路的在线白板。',
    href: '/whiteboard',
    targetKind: 'route',
    shell: 'tool',
    isPublic: true,
    includeInSitemap: true,
    searchable: true,
    keywords: ['Excalidraw', '绘图', '草图', '头脑风暴'],
    searchGroup: 'tools',
    activeMatch: 'prefix',
    kind: 'route',
    showInHomeMenu: true,
    sitemapPriority: 0.6,
    sitemapChangeFrequency: 'monthly',
  },
  {
    id: 'playground',
    title: UI_TEXTS.NAVIGATION.PLAYGROUND,
    description: '测试 OpenAI、Responses 和 Anthropic 兼容接口。',
    href: '/playground',
    targetKind: 'route',
    shell: 'tool',
    isPublic: true,
    includeInSitemap: true,
    searchable: true,
    keywords: ['API', 'Playground', 'Curl', '模型测试'],
    searchGroup: 'tools',
    activeMatch: 'prefix',
    kind: 'route',
    showInHomeMenu: true,
    sitemapPriority: 0.8,
    sitemapChangeFrequency: 'monthly',
  },
  {
    id: 'recording-summary',
    title: UI_TEXTS.NAVIGATION.RECORDING_SUMMARY,
    description: '录制或导入语音，将内容整理为可继续使用的总结。',
    href: '/recording-summary',
    targetKind: 'route',
    shell: 'tool',
    isPublic: true,
    includeInSitemap: true,
    searchable: true,
    keywords: ['录音', '语音识别', '总结', '转录'],
    searchGroup: 'tools',
    activeMatch: 'prefix',
    kind: 'route',
    showInHomeMenu: true,
    sitemapPriority: 0.7,
    sitemapChangeFrequency: 'monthly',
  },
  {
    id: 'shares',
    title: UI_TEXTS.NAVIGATION.SHARES,
    description: UI_TEXTS.SHARES.CATALOG_DESCRIPTION,
    href: '/shares',
    targetKind: 'route',
    shell: 'site',
    isPublic: true,
    includeInSitemap: true,
    searchable: true,
    keywords: ['演示', '讲稿', '分享', '教学资料'],
    searchGroup: 'shares',
    activeMatch: 'prefix',
    kind: 'route',
    showInHomeMenu: true,
    sitemapPriority: 0.8,
    sitemapChangeFrequency: 'monthly',
  },
  {
    id: 'brand',
    title: UI_TEXTS.NAVIGATION.BRAND,
    description: '下载 AI Speeds 品牌标识并了解外部使用规范。',
    href: '/brand',
    targetKind: 'route',
    shell: 'site',
    isPublic: true,
    includeInSitemap: true,
    searchable: true,
    keywords: ['Logo', '品牌', 'Brand Kit', '视觉规范'],
    searchGroup: 'brand',
    activeMatch: 'prefix',
    kind: 'route',
    showInHomeMenu: false,
    sitemapPriority: 0.7,
    sitemapChangeFrequency: 'monthly',
  },
] as const satisfies readonly FeaturePage[];

export type FeatureId = (typeof featureDefinitions)[number]['id'];

export const featurePages: readonly FeaturePage[] = featureDefinitions;

export const publicFeaturePages = featurePages.filter(feature => feature.isPublic);

export const searchableFeaturePages = publicFeaturePages.filter(feature => feature.searchable);

export const homeSectionFeatures = featurePages.filter(
  (feature): feature is FeaturePage & { id: HomeSectionId } => feature.showInHomeMenu && isHomeSectionId(feature.id),
);

export const homeUtilityFeatures = featurePages.filter(
  feature => feature.showInHomeMenu && feature.kind === 'route' && !isHomeSectionId(feature.id),
);

export function isHomeSectionId(value: string): value is HomeSectionId {
  return HOME_SECTION_IDS.some(sectionId => sectionId === value);
}

export function validateFeatureRegistry(features: readonly FeaturePage[] = featurePages): string[] {
  const errors: string[] = [];
  const featureIds = new Set<string>();
  const routeHrefs = new Set<string>();
  const declaredHomeAnchors = new Set<string>(HOME_PAGE_ANCHOR_IDS);

  for (const feature of features) {
    if (featureIds.has(feature.id)) {
      errors.push(`Feature ID 重复：${feature.id}`);
    }
    featureIds.add(feature.id);

    if (
      feature.id.trim().length === 0 ||
      feature.title.trim().length === 0 ||
      feature.description.trim().length === 0
    ) {
      errors.push(`Feature 缺少 ID、标题或描述：${feature.id || '(empty)'}`);
    }

    if (!feature.isPublic && (feature.searchable || feature.includeInSitemap)) {
      errors.push(`未公开 Feature 不能进入搜索或 Sitemap：${feature.id}`);
    }

    if (feature.includeInSitemap && (feature.targetKind !== 'route' || !feature.isPublic)) {
      errors.push(`Sitemap 只接受公开 Route Feature：${feature.id}`);
    }

    if (feature.sitemapPriority !== undefined && (feature.sitemapPriority < 0 || feature.sitemapPriority > 1)) {
      errors.push(`Sitemap priority 必须位于 0 到 1：${feature.id}`);
    }

    if (feature.targetKind === 'route') {
      if (feature.kind !== 'route') {
        errors.push(`Route Feature 必须使用 route kind：${feature.id}`);
      }

      if (
        !feature.href.startsWith('/') ||
        feature.href.startsWith('//') ||
        feature.href.includes('#') ||
        feature.href.includes('?')
      ) {
        errors.push(`Route Feature 必须使用无查询或片段的站内路径：${feature.id}`);
      }

      if (routeHrefs.has(feature.href)) {
        errors.push(`Route Href 重复：${feature.href}`);
      }
      routeHrefs.add(feature.href);

      if (feature.activeMatch === 'hash') {
        errors.push(`Route Feature 不能使用 hash 激活匹配：${feature.id}`);
      }
    } else if (feature.targetKind === 'anchor') {
      const [pathname, hash, extraHash] = feature.href.split('#');

      if (feature.kind !== 'section' || feature.activeMatch !== 'hash') {
        errors.push(`Anchor Feature 必须使用 section kind 和 hash 激活匹配：${feature.id}`);
      }

      if (pathname !== '/' || hash !== feature.id || extraHash !== undefined) {
        errors.push(`首页 Anchor 必须使用 /#<feature-id>：${feature.id}`);
      }

      if (!declaredHomeAnchors.has(feature.id)) {
        errors.push(`Anchor 未声明为首页 Section：${feature.id}`);
      }

      if (feature.includeInSitemap) {
        errors.push(`Anchor 不能进入 Sitemap：${feature.id}`);
      }
    } else {
      try {
        const url = new URL(feature.href);
        if (url.protocol !== 'https:') {
          errors.push(`External Feature 必须使用 HTTPS：${feature.id}`);
        }
      } catch {
        errors.push(`External Feature URL 无效：${feature.id}`);
      }

      if (feature.includeInSitemap) {
        errors.push(`External Feature 不能进入 Sitemap：${feature.id}`);
      }
    }
  }

  for (const anchorId of HOME_PAGE_ANCHOR_IDS) {
    const anchorFeature = features.find(feature => feature.id === anchorId);

    if (anchorFeature === undefined || anchorFeature.targetKind !== 'anchor') {
      errors.push(`首页 Section 声明没有对应的 Anchor Feature：${anchorId}`);
    }
  }

  return errors;
}

export function getFeatureById(id: FeatureId): FeaturePage {
  const feature = featurePages.find(candidate => candidate.id === id);

  if (feature === undefined) {
    throw new Error(`Feature 不存在：${id}`);
  }

  return feature;
}
