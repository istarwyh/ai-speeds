export interface Env {
  OPENROUTER_BASE_URL?: string;
  DEEPSEEK_BASE_URL?: string;
  OPENAI_BASE_URL?: string;
  
  // Backward compatibility - auto-detects provider type
  OPENAI_COMPATIBLE_BASE_URL?: string;
  
  // Assets binding for static files
  ASSETS: Fetcher;

  // Image proxy configuration
  // Comma-separated hostnames, e.g. "images.unsplash.com,cdn.jsdelivr.net"
  IMAGE_PROXY_WHITELIST?: string;
  // Cache TTL in seconds for proxied images (default 86400 = 1 day)
  IMAGE_PROXY_CACHE_TTL?: string;
}
