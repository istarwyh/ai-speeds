// UI 文字常量 - 单一数据源 (Single Source of Truth)
// 所有用户界面的文字内容都应该在这里定义，避免硬编码字符串

export const UI_TEXTS = {
  // 导航标签文字
  NAVIGATION: {
    HOME: '献给产品主理人',
    GET_STARTED: '如何用上CC',
    WHITEBOARD: '白板',
  },

  // 模块标题和描述
  MODULE_TITLES: {
    'get-started': '如何用上CC',
  },

  MODULE_DESCRIPTIONS: {
    'get-started': '快速开始使用 Claude Code Router，连接你喜欢的 AI Provider',
  },

  // 导航图标
  MODULE_ICONS: {
    'get-started': '🚀',
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
