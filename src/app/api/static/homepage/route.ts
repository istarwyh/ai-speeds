import { readFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const htmlPath = join(process.cwd(), 'node_modules', '@cc4pm', 'homepage', 'index.html');
  let html = readFileSync(htmlPath, 'utf-8');

  // 移除导航栏，避免与外部侧边栏重复
  // 匹配 <!-- NAV --> 到 </header> 之间的内容
  html = html.replace(/<!-- NAV -->[\s\S]*?<\/header>/i, '');

  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
