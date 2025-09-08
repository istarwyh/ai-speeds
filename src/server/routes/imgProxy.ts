import type { Env } from '../../../env';

export async function handleImgProxy(url: URL, request: Request, env: Env): Promise<Response> {
  // CORS preflight
  if (request.method === 'OPTIONS') {
    return new Response(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, HEAD, OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Max-Age': '86400',
        'X-ImgProxy-Reason': 'preflight',
      },
    });
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    return new Response('Method Not Allowed', {
      status: 405,
      headers: { 'Content-Type': 'text/plain; charset=UTF-8', 'X-ImgProxy-Reason': 'method' },
    });
  }

  const src = url.searchParams.get('src');
  if (!src) return new Response('Missing src', { status: 400, headers: { 'Content-Type': 'text/plain; charset=UTF-8', 'X-ImgProxy-Reason': 'missing-src' } });

  // Validate URL
  let target: URL;
  try {
    target = new URL(src);
  } catch {
    return new Response('Invalid src', { status: 400, headers: { 'Content-Type': 'text/plain; charset=UTF-8', 'X-ImgProxy-Reason': 'invalid-src' } });
  }

  if (target.protocol !== 'https:') {
    return new Response('Only https is allowed', { status: 400, headers: { 'Content-Type': 'text/plain; charset=UTF-8', 'X-ImgProxy-Reason': 'non-https' } });
  }

  // Enforce whitelist with optional '*' wildcard to allow any host
  const whitelistRaw = (env.IMAGE_PROXY_WHITELIST || '')
    .split(',')
    .map((h) => h.trim().toLowerCase())
    .filter(Boolean);
  const allowAll = whitelistRaw.includes('*');
  const whitelist = whitelistRaw.filter((h) => h !== '*');
  const host = target.hostname.toLowerCase();
  const allowed = allowAll || whitelist.includes(host);
  if (!allowed) {
    return new Response('Host not allowed', { status: 403, headers: { 'Content-Type': 'text/plain; charset=UTF-8', 'X-ImgProxy-Reason': 'denied-host' } });
  }

  // Fetch with Cloudflare cache
  const ttl = parseInt(env.IMAGE_PROXY_CACHE_TTL || '86400', 10);
  const cfInit: RequestInit & { cf?: any } = {
    method: 'GET',
    cf: { cacheTtl: ttl, cacheEverything: true },
    headers: {
      'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
      'User-Agent': 'aispeeds-image-proxy',
    },
  };

  const upstream = await fetch(target.toString(), cfInit);
  if (!upstream.ok) {
    return new Response(`Upstream ${upstream.status}`, { status: 502, headers: { 'Content-Type': 'text/plain; charset=UTF-8', 'X-ImgProxy-Reason': 'bad-upstream' } });
  }

  const contentType = upstream.headers.get('content-type') || 'application/octet-stream';
  const headers = new Headers();
  headers.set('Content-Type', contentType);
  headers.set('Cache-Control', `public, max-age=${ttl}, s-maxage=${ttl}, immutable`);
  headers.set('Access-Control-Allow-Origin', '*');
  headers.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  headers.set('X-ImgProxy-Reason', 'ok');

  return new Response(upstream.body, { status: 200, headers });
}
