/**
 * AI Speeds Brand Constants
 *
 * 统一的品牌标识常量
 * 包括颜色、尺寸、设计规范等
 */

export const BRAND_COLORS = {
  primary: '#4ECDC4', // Teal 500
  secondary: '#2563eb', // Primary blue
  accent: '#7EDDD6', // Teal 400
  dark: '#0f172a', // Slate 900
  light: '#f8fafc', // Slate 50
} as const;

export const BRAND_SIZES = {
  favicon: 16,
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64,
} as const;

export const BRAND_VARIANTS = {
  default: 'default',
  monochrome: 'monochrome',
  gradient: 'gradient',
} as const;

export const BRAND_DESIGNS = {
  lightning: 'lightning',
  spiral: 'spiral', // Default - A+S mountain climbing
  letterform: 'letterform',
} as const;

export const BRAND_CONFIG = {
  defaultDesign: BRAND_DESIGNS.spiral,
  defaultVariant: BRAND_VARIANTS.default,
  primaryColor: BRAND_COLORS.primary,
  secondaryColor: BRAND_COLORS.secondary,
} as const;
