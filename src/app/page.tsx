import { readFileSync } from 'fs';
import { join } from 'path';
import { LegacyPageWrapper } from '@/components/LegacyPageWrapper';

export default function RootPage() {
  // 服务端读取 cc4pm 首页 HTML
  const fullHtml = readFileSync(join(process.cwd(), 'node_modules', '@cc4pm', 'homepage', 'index.html'), 'utf-8');

  // 提取 body 内容，避免 hydration mismatch
  const bodyMatch = fullHtml.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  const homepageHtml = bodyMatch?.[1]?.trim() ?? fullHtml;

  return <LegacyPageWrapper homepageHtml={homepageHtml} />;
}
