import type { Metadata } from 'next';
import { AiWireframeSection } from '@/components/features/ai-wireframe/AiWireframeSection';

export const metadata: Metadata = {
  title: 'AI 线框图 | AI Speeds',
  description: '面向 AI 编程工作流的低保真 UI 结构编辑器。',
  alternates: {
    canonical: '/wireframe',
  },
};

export default function WireframePage() {
  return <AiWireframeSection />;
}
