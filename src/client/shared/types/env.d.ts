export {};

declare global {
  // Using 'var' to avoid block-scoped redeclaration if a bundler polyfills `process`.
  // In the browser, esbuild replaces process.env.NODE_ENV at build time.

  var process: {
    env: {
      NODE_ENV: 'development' | 'production' | 'test';
    };
  };
}
