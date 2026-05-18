import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-static';

const navPattern = /<!-- NAV -->[\s\S]*?<\/header>/i;

function getHomepageHtml(): string {
  const homepagePath = join(process.cwd(), 'node_modules', '@cc4pm', 'homepage', 'index.html');
  return readFileSync(homepagePath, 'utf8').replace(navPattern, '');
}

export function GET() {
  return new NextResponse(getHomepageHtml(), {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
