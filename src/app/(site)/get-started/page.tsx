import type { Metadata } from 'next';
import { GetStartedSection } from '@/components/features/get-started/GetStartedSection';

export const metadata: Metadata = {
  title: '如何用上 Claude Code | AI Speeds',
  description: '安装 Claude Code、选择模型服务商并生成环境变量，一页完成接入。',
  alternates: {
    canonical: '/get-started',
  },
};

export default function GetStartedPage() {
  return (
    <main>
      <GetStartedSection />
    </main>
  );
}
