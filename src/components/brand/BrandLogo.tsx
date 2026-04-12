/**
 * AI Speeds Brand Logo Component
 *
 * 统一的品牌Logo组件，包含图标和文字
 * 适用于页面头部、导航栏等主要位置
 */

import { BrandIcon } from './BrandIcon';

interface BrandLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  variant?: 'default' | 'monochrome' | 'gradient';
  design?: 'lightning' | 'spiral' | 'letterform';
  className?: string;
}

const sizeConfig = {
  small: { icon: 24, text: 'text-lg' },
  medium: { icon: 32, text: 'text-xl' },
  large: { icon: 48, text: 'text-2xl' },
};

export function BrandLogo({
  size = 'medium',
  showText = true,
  variant = 'default',
  design = 'spiral',
  className = '',
}: BrandLogoProps) {
  const config = sizeConfig[size] || sizeConfig.medium;

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <BrandIcon size={config.icon} variant={variant} design={design} />
      {showText && <span className={`font-semibold ${config.text} text-slate-900 dark:text-slate-100`}>AI Speeds</span>}
    </div>
  );
}
