// 主模块聚合器
export { getStartedModule } from './get-started';
export { bestPracticesModule } from './best-practices';
export { implementationModule } from './how-to-implement';
export { howToApplyCCModule } from './how-to-apply-cc';

// 模块配置
export const moduleConfig = {
  'get-started': {
    title: '如何用上 CC',
    icon: '🚀',
    description: '快速开始使用 Claude Code Router，连接你喜欢的 AI 模型',
    order: 1,
  },
  'best-practices': {
    title: '如何用好 CC',
    icon: '⚡',
    description: '基于 Anthropic 官方最佳实践的深度指南',
    order: 2,
  },
  'how-to-implement': {
    title: '如何实现 CC',
    icon: '🔧',
    description: '深入了解 Claude Code Router 的技术架构与实现原理',
    order: 3,
  },
  'how-to-apply-cc': {
    title: '如何运用 CC',
    icon: '🎯',
    description: '掌握 Claude Code SDK，构建专业的 AI Agent 应用',
    order: 4,
  },
};

// 内容类型定义
export interface ContentItem {
  id: string;
  title: string;
  category: string;
  status: 'published' | 'coming-soon' | 'draft';
  path?: string;
  component?: string;
}

export interface ModuleStructure {
  components: string[];
  content: ContentItem[];
  articles?: ContentItem[];
  guides?: ContentItem[];
}
