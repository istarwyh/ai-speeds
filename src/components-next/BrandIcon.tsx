/**
 * AI Speeds Brand Icon
 *
 * Design concept:
 * - Lightning bolt represents "Speed"
 * - Circuit/neural network pattern represents "AI"
 * - Teal accent color (#4ECDC4) for modern, tech feel
 * - Clean, minimal design suitable for favicon and logo
 */

interface BrandIconProps {
  size?: number;
  className?: string;
  variant?: 'default' | 'monochrome' | 'gradient';
}

export function BrandIcon({ size = 32, className = '', variant = 'default' }: BrandIconProps) {
  const colors = {
    default: {
      primary: '#4ECDC4', // Teal 500
      secondary: '#2563eb', // Primary blue
      accent: '#7EDDD6', // Teal 400
    },
    monochrome: {
      primary: 'currentColor',
      secondary: 'currentColor',
      accent: 'currentColor',
    },
    gradient: {
      primary: 'url(#brandGradient)',
      secondary: 'url(#brandGradient)',
      accent: 'url(#brandGradient)',
    },
  };

  // Avoid dynamic object indexing to satisfy security/detect-object-injection
  const c = variant === 'default' ? colors.default : variant === 'monochrome' ? colors.monochrome : colors.gradient;

  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 32 32'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-label='AI Speeds'
    >
      {variant === 'gradient' && (
        <defs>
          <linearGradient id='brandGradient' x1='0%' y1='0%' x2='100%' y2='100%'>
            <stop offset='0%' stopColor='#4ECDC4' />
            <stop offset='100%' stopColor='#2563eb' />
          </linearGradient>
        </defs>
      )}

      {/* Lightning bolt - Speed symbol */}
      <path
        d='M18 2L8 16H14L12 30L26 12H18L20 2Z'
        fill={c.primary}
        stroke={c.secondary}
        strokeWidth='1.5'
        strokeLinejoin='round'
      />

      {/* AI Circuit nodes - top right */}
      <circle cx='24' cy='6' r='1.5' fill={c.accent} />
      <circle cx='28' cy='8' r='1' fill={c.accent} opacity='0.7' />
      <line x1='24' y1='6' x2='28' y2='8' stroke={c.accent} strokeWidth='0.8' opacity='0.5' />

      {/* AI Circuit nodes - bottom left */}
      <circle cx='6' cy='24' r='1.5' fill={c.accent} />
      <circle cx='4' cy='28' r='1' fill={c.accent} opacity='0.7' />
      <line x1='6' y1='24' x2='4' y2='28' stroke={c.accent} strokeWidth='0.8' opacity='0.5' />
    </svg>
  );
}

/**
 * Simplified version for favicon (16x16)
 */
export function BrandIconSimple({ size = 16, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox='0 0 16 16'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-label='AI Speeds'
    >
      {/* Simplified lightning bolt */}
      <path d='M9 1L4 8H7L6 15L13 6H9L10 1Z' fill='#4ECDC4' stroke='#2563eb' strokeWidth='1' strokeLinejoin='round' />
    </svg>
  );
}

/**
 * Wordmark version with icon and text
 */
export function BrandWordmark({ size = 120, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size / 3}
      viewBox='0 0 120 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-label='AI Speeds'
    >
      {/* Icon */}
      <g transform='translate(0, 4)'>
        <path
          d='M18 2L8 16H14L12 30L26 12H18L20 2Z'
          fill='#4ECDC4'
          stroke='#2563eb'
          strokeWidth='1.5'
          strokeLinejoin='round'
        />
        <circle cx='24' cy='6' r='1.5' fill='#7EDDD6' />
        <circle cx='6' cy='24' r='1.5' fill='#7EDDD6' />
      </g>

      {/* Text: AI Speeds */}
      <text
        x='38'
        y='26'
        fontFamily='system-ui, -apple-system, sans-serif'
        fontSize='18'
        fontWeight='600'
        fill='#0f172a'
      >
        AI Speeds
      </text>
    </svg>
  );
}
