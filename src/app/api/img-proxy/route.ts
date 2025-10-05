import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const src = searchParams.get('src');
  
  if (!src) {
    return NextResponse.json(
      { error: 'Missing src parameter' },
      { status: 400 }
    );
  }
  
  // 验证 URL
  let imageUrl: URL;
  try {
    imageUrl = new URL(src);
  } catch {
    return NextResponse.json(
      { error: 'Invalid URL' },
      { status: 400 }
    );
  }
  
  // 验证协议
  if (imageUrl.protocol !== 'https:') {
    return NextResponse.json(
      { error: 'Only HTTPS URLs are allowed' },
      { status: 400 }
    );
  }
  
  // 白名单检查
  const whitelist = process.env['IMAGE_PROXY_WHITELIST'] || '*';
  if (whitelist !== '*') {
    const allowedHosts = whitelist.split(',').map(h => h.trim());
    if (!allowedHosts.includes(imageUrl.hostname)) {
      return NextResponse.json(
        { error: 'Host not allowed' },
        { status: 403 }
      );
    }
  }
  
  try {
    const imageResponse = await fetch(imageUrl.toString(), {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; ImageProxy/1.0)',
      },
    });
    
    if (!imageResponse.ok) {
      return NextResponse.json(
        { error: 'Failed to fetch image' },
        { status: imageResponse.status }
      );
    }
    
    const contentType = imageResponse.headers.get('content-type');
    if (!contentType?.startsWith('image/')) {
      return NextResponse.json(
        { error: 'Not an image' },
        { status: 400 }
      );
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
    return NextResponse.json(
      { error: 'Failed to proxy image' },
      { status: 500 }
    );
  }
}
