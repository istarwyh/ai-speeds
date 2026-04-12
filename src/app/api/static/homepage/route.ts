import { NextResponse } from 'next/server';
import { homepageHtml } from '@/legacy/scripts/generated/homepageHtml';

// 移除导航栏（构建时已确定，缓存结果避免每次请求重复计算）
const NAV_PATTERN = /<!-- NAV -->[\s\S]*?<\/header>/i;
const processedHtml = homepageHtml.replace(NAV_PATTERN, '');

export async function GET() {
  return new NextResponse(processedHtml, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
