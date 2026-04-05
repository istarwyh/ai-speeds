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
  design?: 'lightning' | 'spiral' | 'letterform';
}

export function BrandIcon({ size = 32, className = '', variant = 'default', design = 'spiral' }: BrandIconProps) {
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

  // A+S Mountain Climbing Path Design - AI Speeds Brand
  if (design === 'spiral') {
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
        {variant === 'gradient' && (
          <defs>
            <linearGradient id='brandGradient' x1='0%' y1='100%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#4ECDC4' />
              <stop offset='50%' stopColor='#3b82f6' />
              <stop offset='100%' stopColor='#2563eb' />
            </linearGradient>
          </defs>
        )}

        {/* Letter A - Mountain Triangle Outline (no horizontal bar) */}
        <path
          d='M 16 4 L 6 28 M 16 4 L 26 28'
          stroke={c.secondary}
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='none'
        />

        {/* Letter S - One continuous winding climbing path inside A */}
        <path
          d='M 7 27 C 9 25, 11 22, 14 19 C 17 16, 22 16, 23 19 C 24 22, 19 23, 16 20 C 13 17, 12 12, 16 8'
          stroke={c.primary}
          strokeWidth='2.5'
          strokeLinecap='round'
          fill='none'
          style={{ filter: variant === 'gradient' ? 'drop-shadow(0 0 2px rgba(78, 205, 196, 0.3))' : 'none' }}
        />

        {/* Peak achievement point */}
        <circle cx='16' cy='4' r='2' fill={c.accent} />
        <circle cx='16' cy='4' r='0.8' fill='white' opacity='0.7' />
      </svg>
    );
  }

  // Letterform Design - A+S (Direction 4)
  if (design === 'letterform') {
    return (
      <svg
        width={size}
        height={size}
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='AI Speeds - AS Letterform'
      >
        {variant === 'gradient' && (
          <defs>
            <linearGradient id='brandGradient' x1='0%' y1='100%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#4ECDC4' />
              <stop offset='100%' stopColor='#2563eb' />
            </linearGradient>
          </defs>
        )}

        {/* "A" as upward arrow/mountain */}
        <path
          d='M 8 28 L 14 6 L 20 28'
          stroke={c.primary}
          strokeWidth='3'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='none'
        />
        {/* A crossbar */}
        <path d='M 10 20 L 18 20' stroke={c.primary} strokeWidth='3' strokeLinecap='round' />

        {/* "S" as ascending curve */}
        <path
          d='M 28 24 C 26 24, 24 23, 24 21 C 24 19, 26 18, 27 18 C 28 18, 29 19, 29 20 C 29 21, 28 22, 27 22 C 26 22, 25 21, 25 19.5 C 25 17, 27 15, 28 13 C 29 11, 28 9, 27 8'
          stroke={c.secondary}
          strokeWidth='2.5'
          strokeLinecap='round'
          fill='none'
        />

        {/* Speed accent dots */}
        <circle cx='14' cy='6' r='1.5' fill={c.accent} />
        <circle cx='27' cy='8' r='1.5' fill={c.accent} />
      </svg>
    );
  }

  // Default Lightning Design (existing)
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
 * Uses bold A+S mountain climbing design for better recognition at small sizes
 */
export function BrandIconSimple({ size = 16, className = '' }: { size?: number; className?: string }) {
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

/**
 * Wordmark version with icon and text
 * Uses the A+S mountain climbing design for consistency
 */
export function BrandWordmark({ size = 120, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size * 1.5}
      height={size / 3}
      viewBox='0 0 180 40'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      aria-label='AI Speeds'
    >
      {/* A+S Mountain Climbing Icon */}
      <g transform='translate(2, 4)'>
        {/* Letter A - Mountain Triangle (no horizontal bar) */}
        <path
          d='M 16 4 L 6 28 M 16 4 L 26 28'
          stroke='#2563eb'
          strokeWidth='2.5'
          strokeLinecap='round'
          strokeLinejoin='round'
          fill='none'
        />

        {/* Letter S - One continuous winding climbing path */}
        <path
          d='M 7 27 C 9 25, 11 22, 14 19 C 17 16, 22 16, 23 19 C 24 22, 19 23, 16 20 C 13 17, 12 12, 16 8'
          stroke='#4ECDC4'
          strokeWidth='2.2'
          strokeLinecap='round'
          fill='none'
        />

        {/* Peak achievement */}
        <circle cx='16' cy='4' r='2' fill='#7EDDD6' />
        <circle cx='16' cy='4' r='0.8' fill='white' opacity='0.7' />
      </g>

      {/* Text: AI Speeds - italic for speed/dynamism */}
      <text
        x='48'
        y='26'
        fontFamily='system-ui, -apple-system, sans-serif'
        fontSize='18'
        fontWeight='600'
        fontStyle='italic'
        fill='#0f172a'
      >
        AI Speeds
      </text>
    </svg>
  );
}
