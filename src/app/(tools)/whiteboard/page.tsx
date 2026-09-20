import type { Metadata } from 'next';
import { WhiteboardLoader } from '@/components/features/whiteboard/WhiteboardLoader';

export const metadata: Metadata = {
  title: '白板 | AI Speeds',
  description: '自由绘制、书写和整理思路的在线白板工具。',
  alternates: {
    canonical: '/whiteboard',
  },
};

export default function WhiteboardPage() {
  return (
    <main className='h-full min-h-0 w-full'>
      <WhiteboardLoader />
    </main>
  );
}
