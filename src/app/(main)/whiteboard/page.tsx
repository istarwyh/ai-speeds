import type { Metadata } from 'next';
import Link from 'next/link';
import { BrandIcon } from '@/components/BrandIcon';
import { WhiteboardLoader } from '@/components/features/whiteboard/WhiteboardLoader';
import { UI_TEXTS } from '@/config/ui-texts';

export const metadata: Metadata = {
  title: '白板 - AI Speeds',
  description: '自由绘制和书写的白板工具',
};

export default function WhiteboardPage() {
  return (
    <div className='flex h-screen w-full flex-col'>
      <header className='flex h-12 shrink-0 items-center gap-3 border-b border-gray-200 bg-white px-4'>
        <Link href='/' className='flex items-center gap-2 text-gray-600 transition-colors hover:text-gray-900'>
          <BrandIcon size={24} />
          <span className='text-sm font-semibold italic'>AI Speeds</span>
        </Link>
        <span className='text-gray-300'>|</span>
        <span className='text-sm font-medium text-gray-500'>{UI_TEXTS.NAVIGATION.WHITEBOARD}</span>
      </header>
      <div className='min-h-0 flex-1'>
        <WhiteboardLoader />
      </div>
    </div>
  );
}
