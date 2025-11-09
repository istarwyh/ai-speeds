// Shared image helpers: resolve proxied URL and preload to warm caches
// - resolveProxiedUrl: rewrites cross-origin HTTPS to /img-proxy for same-origin fetch
// - preloadImage: warms browser and Cloudflare cache via creating an Image object

export const resolveProxiedUrl = (url: string): string => {
  try {
    const abs = new URL(url, window.location.href);
    if (abs.origin !== window.location.origin && abs.protocol === 'https:') {
      return `/img-proxy?src=${encodeURIComponent(abs.toString())}`;
    }
    return abs.toString();
  } catch {
    return url;
  }
};

export const preloadImage = (url: string): Promise<void> => {
  return new Promise<void>(resolve => {
    try {
      const src = resolveProxiedUrl(url);
      const img = new window.Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => resolve();
      img.onerror = () => resolve();
      // Use requestIdleCallback if available to avoid competing with critical path
      const start = () => {
        img.src = src;
      };
      if ('requestIdleCallback' in window) {
        (
          window as unknown as { requestIdleCallback: (callback: () => void, options: { timeout: number }) => void }
        ).requestIdleCallback(start, { timeout: 500 });
      } else {
        setTimeout(start, 0);
      }
    } catch {
      resolve();
    }
  });
};
