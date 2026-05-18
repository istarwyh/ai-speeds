export type ColorToken = {
  name: string;
  cls: string;
  hex: string;
  cssVar: string;
  text?: string;
  border?: boolean;
};

export const colorTokenGroups = {
  brand: [
    { name: 'Primary', cls: 'bg-primary', hex: '#e57a5a', cssVar: '--color-primary', text: 'text-primary-foreground' },
    {
      name: 'Primary Dark',
      cls: 'bg-primary-dark',
      hex: '#d4614a',
      cssVar: '--color-primary-dark',
      text: 'text-primary-dark-foreground',
    },
    {
      name: 'Primary Light',
      cls: 'bg-primary-light',
      hex: '#f08b6d',
      cssVar: '--color-primary-light',
      text: 'text-primary-light-foreground',
    },
    { name: 'Accent', cls: 'bg-accent', hex: '#06b6d4', cssVar: '--color-accent', text: 'text-accent-foreground' },
  ],
  feedback: [
    { name: 'Success', cls: 'bg-success', hex: '#10b981', cssVar: '--color-success', text: 'text-success-foreground' },
    { name: 'Warning', cls: 'bg-warning', hex: '#f59e0b', cssVar: '--color-warning', text: 'text-warning-foreground' },
    { name: 'Error', cls: 'bg-error', hex: '#ef4444', cssVar: '--color-error', text: 'text-error-foreground' },
  ],
  teal: [
    {
      name: 'Teal 400',
      cls: 'bg-teal-400',
      hex: '#7eddd6',
      cssVar: '--color-teal-400',
      text: 'text-teal-400-foreground',
    },
    {
      name: 'Teal 500',
      cls: 'bg-teal-500',
      hex: '#4ecdc4',
      cssVar: '--color-teal-500',
      text: 'text-teal-500-foreground',
    },
    {
      name: 'Teal 600',
      cls: 'bg-teal-600',
      hex: '#3ba29c',
      cssVar: '--color-teal-600',
      text: 'text-teal-600-foreground',
    },
  ],
  surfaces: [
    { name: 'BG Primary', cls: 'bg-bg-primary', hex: '#ffffff', cssVar: '--color-bg-primary', border: true },
    { name: 'BG Secondary', cls: 'bg-bg-secondary', hex: '#f8fafc', cssVar: '--color-bg-secondary', border: true },
    { name: 'BG Tertiary', cls: 'bg-bg-tertiary', hex: '#f1f5f9', cssVar: '--color-bg-tertiary', border: true },
    { name: 'BG Accent', cls: 'bg-bg-accent', hex: '#eff6ff', cssVar: '--color-bg-accent', border: true },
    { name: 'BG Warm', cls: 'bg-bg-warm', hex: '#fffcf8', cssVar: '--color-bg-warm', border: true },
  ],
  text: [
    { name: 'Text Primary', cls: 'text-text-primary', hex: '#0f172a', cssVar: '--color-text-primary' },
    { name: 'Text Secondary', cls: 'text-text-secondary', hex: '#475569', cssVar: '--color-text-secondary' },
    { name: 'Text Muted', cls: 'text-text-muted', hex: '#64748b', cssVar: '--color-text-muted' },
    { name: 'Text Inverse', cls: 'text-text-inverse', hex: '#ffffff', cssVar: '--color-text-inverse' },
  ],
  borders: [
    { name: 'Border Light', cls: 'border-border-light', hex: '#e2e8f0', cssVar: '--color-border-light' },
    { name: 'Border Medium', cls: 'border-border-medium', hex: '#cbd5e1', cssVar: '--color-border-medium' },
    { name: 'Border Dark', cls: 'border-border-dark', hex: '#94a3b8', cssVar: '--color-border-dark' },
  ],
  practices: [
    {
      name: 'Practices Accent',
      cls: 'bg-practices-accent',
      hex: '#06b6d4',
      cssVar: '--color-practices-accent',
      text: 'text-accent-foreground',
    },
    {
      name: 'Practices Primary',
      cls: 'bg-practices-primary',
      hex: '#e57a5a',
      cssVar: '--color-practices-primary',
      text: 'text-primary-foreground',
    },
    {
      name: 'Practices Secondary',
      cls: 'bg-practices-secondary',
      hex: '#f08b6d',
      cssVar: '--color-practices-secondary',
      text: 'text-primary-light-foreground',
    },
  ],
} as const satisfies Record<string, readonly ColorToken[]>;

export const radiusTokens = [
  { name: 'sm', cls: 'rounded-sm' },
  { name: 'md', cls: 'rounded-md' },
  { name: 'lg', cls: 'rounded-lg' },
  { name: 'xl', cls: 'rounded-xl' },
  { name: '2xl', cls: 'rounded-2xl' },
  { name: '3xl', cls: 'rounded-3xl' },
] as const;
