import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/components-next/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Legacy colors
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',

        // Brand colors
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
          light: 'var(--color-primary-light)',
        },
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',

        // Feedback colors
        success: 'var(--color-success)',
        warning: 'var(--color-warning)',
        error: 'var(--color-error)',

        // Teal scale
        teal: {
          400: 'var(--color-teal-400)',
          500: 'var(--color-teal-500)',
          600: 'var(--color-teal-600)',
        },

        // Background colors
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-tertiary': 'var(--color-bg-tertiary)',
        'bg-accent': 'var(--color-bg-accent)',
        'bg-warm': 'var(--color-bg-warm)',

        // Text colors
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',
        'text-inverse': 'var(--color-text-inverse)',

        // Border colors
        'border-light': 'var(--color-border-light)',
        'border-medium': 'var(--color-border-medium)',
        'border-dark': 'var(--color-border-dark)',

        // Best Practices page colors
        'practices-accent': 'var(--color-practices-accent)',
        'practices-primary': 'var(--color-practices-primary)',
        'practices-secondary': 'var(--color-practices-secondary)',
      },
    },
  },
  plugins: [],
};

export default config;
