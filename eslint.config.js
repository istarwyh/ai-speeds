import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import security from 'eslint-plugin-security';

const compatibilityImportPaths = [
  {
    name: '@cc4pm/homepage',
    message:
      '[LEG-002] Do not import the external homepage package; the adapter may only read its exact index.html file.',
  },
  ...['@/app/(main)/home/page', 'src/app/(main)/home/page'].map(name => ({
    name,
    message: '[COMP-002] Compatibility route owners are façades, not reusable implementation modules.',
  })),
  ...['@/app/v1/messages/route', 'src/app/v1/messages/route'].map(name => ({
    name,
    message: '[COMP-002] Import the canonical /api/v1/messages implementation instead of its compatibility façade.',
  })),
  ...['@/app/api/static/homepage/route', 'src/app/api/static/homepage/route'].map(name => ({
    name,
    message: '[COMP-002] Compatibility route owners are façades, not reusable implementation modules.',
  })),
];

const compatibilityImportPatterns = [
  {
    group: ['@cc4pm/homepage/**'],
    message:
      '[LEG-002] Do not import external homepage package subpaths; the adapter may only read its exact index.html file.',
  },
  {
    group: [
      '@/legacy',
      '@/legacy/**',
      '@/client',
      '@/client/**',
      '@/components-next',
      '@/components-next/**',
      'src/legacy',
      'src/legacy/**',
      'src/client',
      'src/client/**',
      'src/components-next',
      'src/components-next/**',
      '@/scripts/generated',
      '@/scripts/generated/**',
      'src/scripts/generated',
      'src/scripts/generated/**',
      'shared/scripts/generated',
      'shared/scripts/generated/**',
    ],
    message: '[LEG-001] Retired source trees must not be recreated or imported.',
  },
  {
    group: [
      '@/app/(main)/home/page.*',
      '@/app/v1/messages/route.*',
      '@/app/api/static/homepage/route.*',
      'src/app/(main)/home/page.*',
      'src/app/v1/messages/route.*',
      'src/app/api/static/homepage/route.*',
    ],
    message: '[COMP-002] Compatibility route owners are façades, not reusable implementation modules.',
  },
];

const compatibilityImportRule = [
  'error',
  {
    paths: compatibilityImportPaths,
    patterns: compatibilityImportPatterns,
  },
];

const apiImportRule = [
  'error',
  {
    paths: compatibilityImportPaths,
    patterns: [
      ...compatibilityImportPatterns,
      {
        regex: '^(?:@/|src/)app/\\(main\\)/',
        message: '[API-001] API routes must not import UI-route internals; move shared logic to a neutral context.',
      },
    ],
  },
];

const playgroundApiImportRule = [
  'error',
  {
    paths: compatibilityImportPaths,
    patterns: [
      ...compatibilityImportPatterns,
      {
        regex: '^@/app/\\(main\\)/(?!playground/_lib/playgroundRequest$)',
        message:
          '[API-001] The Playground route may use only its exact recorded compatibility edge into UI-route internals.',
      },
      {
        regex: '^src/app/\\(main\\)/',
        message:
          '[API-001] The Playground exception permits only the exact @/ alias spelling recorded in the manifest.',
      },
    ],
  },
];

export default [
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      '.open-next/**',
      '.wrangler/**',
      '.claude/worktrees/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '.cache/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    ignores: ['node_modules/**', 'dist/**', 'build/**', '.wrangler/**', 'coverage/**', '.cache/**'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        // Node.js globals
        console: 'readonly',
        process: 'readonly',
        Buffer: 'readonly',
        __dirname: 'readonly',
        __filename: 'readonly',
        module: 'readonly',
        require: 'readonly',
        exports: 'readonly',
        global: 'readonly',

        // Web APIs
        fetch: 'readonly',
        Response: 'readonly',
        Request: 'readonly',
        Headers: 'readonly',
        AbortController: 'readonly',
        AbortSignal: 'readonly',
        DOMException: 'readonly',
        URL: 'readonly',
        URLSearchParams: 'readonly',
        crypto: 'readonly',
        TextEncoder: 'readonly',
        TextDecoder: 'readonly',
        ReadableStream: 'readonly',
        btoa: 'readonly',
        atob: 'readonly',

        // Browser DOM APIs
        window: 'readonly',
        document: 'readonly',
        navigator: 'readonly',
        HTMLElement: 'readonly',
        HTMLDivElement: 'readonly',
        HTMLButtonElement: 'readonly',
        HTMLCanvasElement: 'readonly',
        Event: 'readonly',
        KeyboardEvent: 'readonly',
        MouseEvent: 'readonly',
        Image: 'readonly',
        Blob: 'readonly',
        ClipboardItem: 'readonly',
        CanvasRenderingContext2D: 'readonly',
        MutationObserver: 'readonly',
        history: 'readonly',
        ReadableStreamDefaultController: 'readonly',

        // Cloudflare Workers
        addEventListener: 'readonly',
        removeEventListener: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
        setInterval: 'readonly',
        clearInterval: 'readonly',

        // Types that might be used
        RequestInit: 'readonly',
        ExportedHandler: 'readonly',
        ExportedHandlerFetchHandler: 'readonly',
        ScheduledController: 'readonly',
        IncomingRequestCfProperties: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier: prettier,
      security: security,
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-non-null-assertion': 'error',

      // Security rules
      'security/detect-object-injection': 'warn',
      'security/detect-non-literal-regexp': 'warn',
      'security/detect-unsafe-regex': 'error',

      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-var': 'error',
      'prefer-const': 'error',
      'no-unused-vars': 'off',
      eqeqeq: ['error', 'always'],
      curly: ['error', 'all'],
      quotes: ['error', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      'no-empty': 'warn',
      'no-undef': 'error',
      'no-restricted-imports': compatibilityImportRule,

      // Prettier integration
      'prettier/prettier': 'error',
    },
  },
  {
    files: ['src/app/api/**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts}'],
    ignores: ['src/app/api/playground/route.ts'],
    rules: {
      'no-restricted-imports': apiImportRule,
    },
  },
  {
    files: ['src/app/api/playground/route.ts'],
    rules: {
      'no-restricted-imports': playgroundApiImportRule,
    },
  },
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
    },
  },
];
