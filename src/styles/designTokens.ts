export type ColorToken = {
  name: string;
  cls: string;
  hex: string;
  cssVar: string;
  text?: string;
  border?: boolean;
  usage?: string;
};

export const colorTokenGroups = {
  brand: [
    {
      name: '主品牌色',
      cls: 'bg-primary',
      hex: '#e57a5a',
      cssVar: '--color-primary',
      text: 'text-primary-foreground',
      usage: '主要按钮、重点标签、暖色高光',
    },
    {
      name: '主品牌深色',
      cls: 'bg-primary-dark',
      hex: '#d4614a',
      cssVar: '--color-primary-dark',
      text: 'text-primary-dark-foreground',
      usage: '按钮 hover、强调状态',
    },
    {
      name: '主品牌浅色',
      cls: 'bg-primary-light',
      hex: '#f08b6d',
      cssVar: '--color-primary-light',
      text: 'text-primary-light-foreground',
      usage: '柔和背景、装饰光晕',
    },
    {
      name: '辅助青色',
      cls: 'bg-accent',
      hex: '#06b6d4',
      cssVar: '--color-accent',
      text: 'text-accent-foreground',
      usage: '科技感点缀、辅助强调',
    },
  ],
  feedback: [
    {
      name: '成功',
      cls: 'bg-success',
      hex: '#10b981',
      cssVar: '--color-success',
      text: 'text-success-foreground',
      usage: '成功反馈、可用状态',
    },
    {
      name: '提醒',
      cls: 'bg-warning',
      hex: '#f59e0b',
      cssVar: '--color-warning',
      text: 'text-warning-foreground',
      usage: '提示、需要注意的操作',
    },
    {
      name: '错误',
      cls: 'bg-error',
      hex: '#ef4444',
      cssVar: '--color-error',
      text: 'text-error-foreground',
      usage: '失败、危险操作、错误提示',
    },
  ],
  teal: [
    {
      name: '青色 400',
      cls: 'bg-teal-400',
      hex: '#7eddd6',
      cssVar: '--color-teal-400',
      text: 'text-teal-400-foreground',
      usage: 'Logo 高光、轻量强调',
    },
    {
      name: '青色 500',
      cls: 'bg-teal-500',
      hex: '#4ecdc4',
      cssVar: '--color-teal-500',
      text: 'text-teal-500-foreground',
      usage: 'Logo 路径、品牌辅助色',
    },
    {
      name: '青色 600',
      cls: 'bg-teal-600',
      hex: '#3ba29c',
      cssVar: '--color-teal-600',
      text: 'text-teal-600-foreground',
      usage: '青色 hover、深色点缀',
    },
  ],
  surfaces: [
    {
      name: '主卡片底色',
      cls: 'bg-bg-primary',
      hex: '#ffffff',
      cssVar: '--color-bg-primary',
      border: true,
      usage: '卡片、弹层、主内容容器',
    },
    {
      name: '页面底色',
      cls: 'bg-bg-secondary',
      hex: '#f8fafc',
      cssVar: '--color-bg-secondary',
      border: true,
      usage: '通用页面背景',
    },
    {
      name: '次级底色',
      cls: 'bg-bg-tertiary',
      hex: '#f1f5f9',
      cssVar: '--color-bg-tertiary',
      border: true,
      usage: '输入框、浅色区块、hover 底色',
    },
    {
      name: '冷色提示底色',
      cls: 'bg-bg-accent',
      hex: '#eff6ff',
      cssVar: '--color-bg-accent',
      border: true,
      usage: '信息提示、辅助说明',
    },
    {
      name: '暖色提示底色',
      cls: 'bg-bg-warm',
      hex: '#fffcf8',
      cssVar: '--color-bg-warm',
      border: true,
      usage: '推荐内容、轻量警示、暖色卡片',
    },
  ],
  text: [
    {
      name: '主文本',
      cls: 'text-text-primary',
      hex: '#0f172a',
      cssVar: '--color-text-primary',
      usage: '标题、正文重点、主要信息',
    },
    {
      name: '次级文本',
      cls: 'text-text-secondary',
      hex: '#475569',
      cssVar: '--color-text-secondary',
      usage: '正文、说明文字',
    },
    {
      name: '弱化文本',
      cls: 'text-text-muted',
      hex: '#64748b',
      cssVar: '--color-text-muted',
      usage: '注释、标签、辅助信息',
    },
    {
      name: '反色文本',
      cls: 'text-text-inverse',
      hex: '#ffffff',
      cssVar: '--color-text-inverse',
      usage: '深色背景上的文字',
    },
  ],
  borders: [
    {
      name: '浅边框',
      cls: 'border-border-light',
      hex: '#e2e8f0',
      cssVar: '--color-border-light',
      usage: '默认卡片边框、分割线',
    },
    {
      name: '中边框',
      cls: 'border-border-medium',
      hex: '#cbd5e1',
      cssVar: '--color-border-medium',
      usage: 'hover 边框、输入框边框',
    },
    {
      name: '深边框',
      cls: 'border-border-dark',
      hex: '#94a3b8',
      cssVar: '--color-border-dark',
      usage: '强分割、强调边框',
    },
  ],
  practices: [
    {
      name: '页面辅助青',
      cls: 'bg-practices-accent',
      hex: '#06b6d4',
      cssVar: '--color-practices-accent',
      text: 'text-accent-foreground',
      usage: '旧页面兼容用辅助色',
    },
    {
      name: '页面暖主色',
      cls: 'bg-practices-primary',
      hex: '#e57a5a',
      cssVar: '--color-practices-primary',
      text: 'text-primary-foreground',
      usage: '旧页面兼容用主色',
    },
    {
      name: '页面暖浅色',
      cls: 'bg-practices-secondary',
      hex: '#f08b6d',
      cssVar: '--color-practices-secondary',
      text: 'text-primary-light-foreground',
      usage: '旧页面兼容用浅色',
    },
  ],
} as const satisfies Record<string, readonly ColorToken[]>;

export const radiusTokens = [
  { name: '小圆角', cls: 'rounded-sm', usage: '细小标签、紧凑元素' },
  { name: '中小圆角', cls: 'rounded-md', usage: '输入框、轻量按钮' },
  { name: '中圆角', cls: 'rounded-lg', usage: '普通按钮、内嵌区块' },
  { name: '大圆角', cls: 'rounded-xl', usage: '导航项、浮层按钮' },
  { name: '超大圆角', cls: 'rounded-2xl', usage: '卡片、菜单、操作区' },
  { name: '胶囊圆角', cls: 'rounded-3xl', usage: '品牌卡片、强调容器' },
] as const;
