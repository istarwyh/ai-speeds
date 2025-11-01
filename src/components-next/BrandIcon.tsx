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

  // Spiral Ascent Design (Direction 3)
  if (design === 'spiral') {
    return (
      <svg
        width={size}
        height={size}
        viewBox='0 0 32 32'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={className}
        aria-label='AI Speeds - Spiral Growth'
      >
        {variant === 'gradient' && (
          <defs>
            <linearGradient id='brandGradient' x1='0%' y1='100%' x2='100%' y2='0%'>
              <stop offset='0%' stopColor='#4ECDC4' />
              <stop offset='100%' stopColor='#2563eb' />
            </linearGradient>
          </defs>
        )}

        {/* Spiral ascending path */}
        <path
          d='M 16 28 C 12 28, 10 26, 10 23 C 10 20, 12 18, 15 18 C 18 18, 20 20, 20 22 C 20 23.5, 19 24.5, 17.5 24.5 C 16.5 24.5, 16 24, 16 23 L 16 12 C 16 8, 18 6, 20 5 C 21 4.2, 21.5 3.5, 22 3'
          stroke={c.primary}
          strokeWidth='2.5'
          strokeLinecap='round'
          fill='none'
        />

        {/* Upward arrow tip - perfectly symmetrical wings centered at x=22 */}
        <path
          d='M 18 7 C 19.5 5.5, 20.5 4.2, 22 3 M 26 7 C 24.5 5.5, 23.5 4.2, 22 3'
          stroke={c.secondary}
          strokeWidth='3'
          strokeLinecap='round'
          fill='none'
        />

        {/* Peak point highlight - larger and more prominent */}
        <circle cx='22' cy='3' r='2.2' fill={c.accent} />

        {/* AI nodes along the path - progressive sizing for ascent effect */}
        <circle cx='16' cy='28' r='2' fill={c.secondary} opacity='0.7' />
        <circle cx='15' cy='18' r='1.5' fill={c.secondary} opacity='0.65' />
        <circle cx='16' cy='12' r='1' fill={c.secondary} opacity='0.6' />
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
 * Uses a more minimal spiral design for better recognition at small sizes
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
      aria-label='AI Speeds - Spiral Growth'
    >
      {/* Simplified spiral ascending path - thicker for visibility */}
      <path
        d='M 16 28 C 12 28, 10 26, 10 23 C 10 20, 12 18, 15 18 C 18 18, 20 20, 20 22 C 20 23.5, 19 24.5, 17.5 24.5 C 16.5 24.5, 16 24, 16 23 L 16 12 C 16 8, 18 6, 20 5 C 21 4.2, 21.5 3.5, 22 3'
        stroke='#4ECDC4'
        strokeWidth='3'
        strokeLinecap='round'
        fill='none'
      />
      {/* Simplified upward arrow tip - perfectly symmetrical and more prominent */}
      <path
        d='M 18 7 C 19.5 5.5, 20.5 4.2, 22 3 M 26 7 C 24.5 5.5, 23.5 4.2, 22 3'
        stroke='#2563eb'
        strokeWidth='3.5'
        strokeLinecap='round'
        fill='none'
      />
      {/* Peak point highlight - larger for small sizes */}
      <circle cx='22' cy='3' r='2.5' fill='#7EDDD6' />
    </svg>
  );
}

/**
 * Wordmark version with icon and text
 * Uses the spiral design for consistency
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
      {/* Spiral Icon */}
      <g transform='translate(2, 4)'>
        {/* Spiral ascending path */}
        <path
          d='M 16 28 C 12 28, 10 26, 10 23 C 10 20, 12 18, 15 18 C 18 18, 20 20, 20 22 C 20 23.5, 19 24.5, 17.5 24.5 C 16.5 24.5, 16 24, 16 23 L 16 12 C 16 8, 18 6, 20 5 C 21 4.2, 21.5 3.5, 22 3'
          stroke='#4ECDC4'
          strokeWidth='2.5'
          strokeLinecap='round'
          fill='none'
        />
        {/* Upward arrow tip - perfectly symmetrical */}
        <path
          d='M 18 7 C 19.5 5.5, 20.5 4.2, 22 3 M 26 7 C 24.5 5.5, 23.5 4.2, 22 3'
          stroke='#2563eb'
          strokeWidth='3'
          strokeLinecap='round'
          fill='none'
        />
        {/* Peak point highlight */}
        <circle cx='22' cy='3' r='2.2' fill='#7EDDD6' />
        {/* AI nodes along the path - progressive sizing */}
        <circle cx='16' cy='28' r='1.8' fill='#2563eb' opacity='0.7' />
        <circle cx='15' cy='18' r='1.3' fill='#2563eb' opacity='0.65' />
      </g>

      {/* Text: AI Speeds */}
      <text
        x='48'
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
