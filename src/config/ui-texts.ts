// UI 文字常量 - 单一数据源 (Single Source of Truth)
// 所有用户界面的文字内容都应该在这里定义，避免硬编码字符串

export const UI_TEXTS = {
  // 导航标签文字
  NAVIGATION: {
    GET_STARTED: 'Claude Code Proxy',
    BEST_PRACTICES: '如何用好 AI',
    HOW_TO_IMPLEMENT: '如何实现 Agent',
    HOW_TO_APPLY_CC: '使用 Agent SDK',
    AI_TRENDS: 'AI 趋势',
  },

  // 模块标题和描述
  MODULE_TITLES: {
    'get-started': 'Claude Code Proxy',
    'best-practices': '如何用好 AI',
    'how-to-implement': '如何实现 Agent',
    'how-to-apply-cc': '使用 Agent SDK',
  },

  MODULE_DESCRIPTIONS: {
    'get-started': '快速开始使用 Claude Code Router，连接你喜欢的 AI Provider',
    'best-practices': '基于 Anthropic 官方最佳实践的深度指南',
    'how-to-implement': '深入了解 Claude Code Router 的技术架构与实现原理',
    'how-to-apply-cc': '掌握 Claude Code SDK，构建专业的 AI Agent 应用',
  },

  // 导航图标
  MODULE_ICONS: {
    'get-started': '🚀',
    'best-practices': '⚡',
    'how-to-implement': '🔧',
    'how-to-apply-cc': '🎯',
  },

  // 通用按钮文字
  BUTTONS: {
    BACK_TO_OVERVIEW: '返回概览',
    COPY_COMMAND: '复制命令',
  },

  // 面包屑导航
  BREADCRUMB: {
    SEPARATOR: ' > ',
  },
} as const;

// 类型安全的键值访问辅助函数
export type UITextKey = keyof typeof UI_TEXTS;
export type NavigationKey = keyof typeof UI_TEXTS.NAVIGATION;
export type ModuleTitleKey = keyof typeof UI_TEXTS.MODULE_TITLES;
export type ModuleDescriptionKey = keyof typeof UI_TEXTS.MODULE_DESCRIPTIONS;
export type ModuleIconKey = keyof typeof UI_TEXTS.MODULE_ICONS;

// 便利函数：根据sectionId获取对应文字
export const getModuleTitle = (sectionId: string): string => {
  return UI_TEXTS.MODULE_TITLES[sectionId as ModuleTitleKey] || sectionId;
};

export const getModuleDescription = (sectionId: string): string => {
  return UI_TEXTS.MODULE_DESCRIPTIONS[sectionId as ModuleDescriptionKey] || '';
};

export const getModuleIcon = (sectionId: string): string => {
  return UI_TEXTS.MODULE_ICONS[sectionId as ModuleIconKey] || '';
};
