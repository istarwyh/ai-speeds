/**
 * AI Speeds Brand Logo Component
 *
 * 统一的品牌Logo组件，包含图标和文字
 * 适用于页面头部、导航栏等主要位置
 */

import { cn } from '@/lib/utils/cn';
import { BrandIcon } from './BrandIcon';

export interface BrandLogoProps {
  size?: 'small' | 'medium' | 'large';
  showText?: boolean;
  variant?: 'default' | 'monochrome' | 'gradient';
  design?: 'lightning' | 'spiral' | 'letterform';
  className?: string;
  textClassName?: string;
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
  className,
  textClassName,
}: BrandLogoProps) {
  const config = sizeConfig[size];

  return (
    <div className={cn('flex items-center gap-2', className)}>
      <span aria-hidden='true'>
        <BrandIcon size={config.icon} variant={variant} design={design} />
      </span>
      {showText && <span className={cn('font-semibold text-text-primary', config.text, textClassName)}>AI Speeds</span>}
    </div>
  );
}
