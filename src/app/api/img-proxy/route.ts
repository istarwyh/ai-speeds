import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const src = searchParams.get('src');

  if (!src) {
    return NextResponse.json({ error: 'Missing src parameter' }, { status: 400 });
  }

  // 验证 URL
  let imageUrl: URL;
  try {
    imageUrl = new URL(src);
  } catch {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  // 验证协议
  if (imageUrl.protocol !== 'https:') {
    return NextResponse.json({ error: 'Only HTTPS URLs are allowed' }, { status: 400 });
  }

  // 白名单检查
  const whitelist = process.env['IMAGE_PROXY_WHITELIST'] || '*';
  if (whitelist !== '*') {
    const allowedHosts = whitelist.split(',').map(h => h.trim());
    if (!allowedHosts.includes(imageUrl.hostname)) {
      return NextResponse.json({ error: 'Host not allowed' }, { status: 403 });
    }
  }

  try {
    // Friendly headers for CDNs that check hotlinking and content negotiation
    const headers: Record<string, string> = {
      'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0) AppleWebKit/537.36 Chrome/120 Safari/537.36',
      Accept: 'image/avif,image/webp,image/*,*/*;q=0.8',
      Referer: `${imageUrl.origin}/`,
    };

    // Timeout protection
    const controller = new AbortController(); // eslint-disable-line no-undef
    const timeoutMs = Number(process.env['IMAGE_PROXY_TIMEOUT_MS']) || 12000;
    const timer = setTimeout(() => controller.abort(), timeoutMs);
    let imageResponse: Response;
    try {
      imageResponse = await fetch(imageUrl.toString(), {
        headers,
        signal: controller.signal,
        redirect: 'follow',
      });
    } finally {
      clearTimeout(timer);
    }

    if (!imageResponse.ok) {
      return fallbackTransparentPng(imageResponse.status);
    }

    const contentType = imageResponse.headers.get('content-type');
    if (!contentType?.startsWith('image/')) {
      return NextResponse.json({ error: 'Not an image' }, { status: 400 });
    }

    const imageBuffer = await imageResponse.arrayBuffer();

    return new NextResponse(imageBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': `public, max-age=${process.env['IMAGE_PROXY_CACHE_TTL'] || '86400'}`,
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (error) {
    console.error('Image proxy error:', error);
    return fallbackTransparentPng(500);
  }
}

export const runtime = 'nodejs';

// Transparent 1x1 PNG (base64)
function fallbackTransparentPng(status: number) {
  const base64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAoMBgBY9J8wAAAAASUVORK5CYII=';
  const buf = Buffer.from(base64, 'base64');
  return new NextResponse(buf, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=300',
      'Access-Control-Allow-Origin': '*',
      'X-Img-Proxy-Fallback': '1',
      'X-Img-Proxy-Status': String(status),
    },
  });
}
