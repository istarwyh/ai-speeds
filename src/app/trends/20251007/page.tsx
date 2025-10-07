import { Metadata } from 'next';
import { TrendsArticle } from '@/components/trends/TrendsArticle';

export const metadata: Metadata = {
  title: 'OpenAI DevDay 2025 新闻 - AI 趋势',
  description: 'OpenAI 刚刚宣布打造 ChatGPT 操作系统，8 亿用户将迎来全新体验。了解最新的 AI 发展趋势。',
};

export default function TrendsPage() {
  return <TrendsArticle />;
}
