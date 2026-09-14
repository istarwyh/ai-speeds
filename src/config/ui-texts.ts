// UI 文字常量 - 单一数据源 (Single Source of Truth)
// 所有用户界面的文字内容都应该在这里定义，避免硬编码字符串

export const UI_TEXTS = {
  // 导航标签文字
  NAVIGATION: {
    HOME: '首页',
    API_GATEWAY: 'AI API 网关',
    CC4PM: 'cc4pm',
    GET_STARTED: '如何用上 Claude Code',
    AI_WIREFRAME: 'AI 线框图',
    WHITEBOARD: '白板',
    PLAYGROUND: '接口测试',
    RECORDING_SUMMARY: '录音总结',
    SHARES: '公开分享',
    BRAND: '品牌资料',
  },

  NAVIGATION_GROUPS: {
    PRODUCTS: '产品',
    TOOLS: '工具',
    RESOURCES: '资源',
  },

  HEADER: {
    NAVIGATION_ARIA: '全站导航',
    HOME_ARIA: 'AI Speeds 首页',
    OPEN_MENU: '打开导航菜单',
    CLOSE_MENU: '关闭导航菜单',
    SKIP_TO_CONTENT: '跳至主要内容',
    OPEN_SEARCH: '搜索',
    PRIMARY_CTA: '开始使用',
    GITHUB: 'GitHub',
  },

  SEARCH: {
    TITLE: '搜索 AI Speeds',
    DESCRIPTION: '查找产品、工具、指南和公开分享。',
    PLACEHOLDER: '搜索产品、工具或内容…',
    EMPTY: '没有找到匹配内容。',
    CLOSE: '关闭搜索',
    SHORTCUT_HINT: '按 ⌘ K 快速打开',
    GROUPS: {
      products: '产品',
      tools: '工具',
      resources: '资源',
      shares: '公开分享',
      curated: '精选资源',
      brand: '品牌',
    },
  },

  ATTRIBUTION: {
    original: 'AI Speeds 原创',
    collaboration: 'AI Speeds 共创',
    curated: 'AI Speeds 精选',
  },

  FOOTER: {
    MISSION: '帮助人们拥抱 AI 时代带来的巨大生产力和范式跃进。',
    PRODUCTS: '产品',
    TOOLS: '工具',
    RESOURCES: '资源',
    BRAND: '品牌',
    COPYRIGHT: 'AI Speeds',
  },

  // 模块标题和描述
  MODULE_TITLES: {
    'get-started': '如何用上CC',
    'ai-wireframe': '快速设计 UI 结构',
  },

  MODULE_DESCRIPTIONS: {
    'get-started': '安装、选服务商、复制环境变量，一页完成 Claude Code 接入',
    'ai-wireframe': '面向 AI 编程工作流的低保真 UI 结构编辑器',
  },

  // 导航图标
  MODULE_ICONS: {
    'get-started': '🚀',
    'ai-wireframe': '▦',
  },

  // 通用按钮文字
  BUTTONS: {
    BACK_TO_OVERVIEW: '返回概览',
    COPY_COMMAND: '复制',
    CLOSE: '关闭',
  },

  SHARES: {
    CATALOG_EYEBROW: 'AI Speeds Shares',
    CATALOG_TITLE: '公开分享与教学资料',
    CATALOG_DESCRIPTION: '浏览活动分享、教学演示、逐页讲稿与可下载资料。',
    EMPTY: '暂时还没有公开分享。',
    VIEW_SHARE: '查看分享',
    OPEN_DECK: '在线阅读',
    DOWNLOAD_PDF: '下载 PDF',
    DOWNLOAD_PPTX: '下载 PPTX',
    DOWNLOAD_TRANSCRIPT: '下载逐页讲稿',
    TRANSCRIPT_TITLE: '逐页讲稿',
    TRANSCRIPT_DESCRIPTION: '按幻灯片顺序整理的公开讲稿与无障碍说明。',
    BACK_TO_SHARES: '返回公开分享',
    BACK_TO_SHARE: '返回分享详情',
    PREVIOUS_SLIDE: '上一页',
    NEXT_SLIDE: '下一页',
    ENTER_FULLSCREEN: '进入全屏',
    EXIT_FULLSCREEN: '退出全屏',
    ENTER_PRESENTATION: '进入演示模式',
    EXIT_PRESENTATION: '退出演示模式',
    RETRY_SLIDE: '重新加载',
    SLIDE_LOAD_ERROR: '当前幻灯片加载失败。',
    THUMBNAILS: '幻灯片缩略图',
  },

  MENU: {
    LABEL: '菜单',
    COLLAPSE: '收起页面菜单',
    EXPAND: '展开页面菜单',
    NAVIGATION_ARIA: '页面导航菜单',
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
