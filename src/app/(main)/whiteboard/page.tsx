import type { Metadata } from 'next';
import { WhiteboardLoader } from '@/components/features/whiteboard/WhiteboardLoader';

export const metadata: Metadata = {
  title: '白板 - AI Speeds',
  description: '自由绘制和书写的白板工具',
};

export default function WhiteboardPage() {
  return (
    <div className='h-[calc(100vh-4rem)] w-full'>
      <WhiteboardLoader />
    </div>
  );
}
