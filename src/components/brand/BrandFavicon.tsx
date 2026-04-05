/**
 * AI Speeds Brand Favicon Component
 *
 * 专门用于favicon的简化版本
 * 确保在小尺寸下清晰可辨
 */

interface BrandFaviconProps {
  size?: number;
  className?: string;
}

export function BrandFavicon({ size = 32, className = '' }: BrandFaviconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-label='AI Speeds - Mountain Climbing Path'
    >
      {/* Letter A - Mountain Triangle (no horizontal bar) */}
      <path
        d='M 16 4 L 6 28 M 16 4 L 26 28'
        stroke='#2563eb'
        strokeWidth='3'
        strokeLinecap='round'
        strokeLinejoin='round'
        fill='none'
      />

      {/* Letter S - One continuous winding climbing path */}
      <path
        d='M 7 27 C 9 25, 11 22, 14 19 C 17 16, 22 16, 23 19 C 24 22, 19 23, 16 20 C 13 17, 12 12, 16 8'
        stroke='#4ECDC4'
        strokeWidth='3'
        strokeLinecap='round'
        fill='none'
      />

      {/* Peak point */}
      <circle cx='16' cy='4' r='2.5' fill='#7EDDD6' />
      <circle cx='16' cy='4' r='1' fill='white' opacity='0.8' />
    </svg>
  );
}
