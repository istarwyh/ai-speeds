import type { Metadata } from 'next';
import { HomePage, LegacyHomeHashBridge } from '@/components/home';

export const metadata: Metadata = {
  title: 'AI Speeds - 让 AI 的速度成为每个人的能力',
  description: 'AI Speeds 致力于帮助人们拥抱 AI 时代带来的巨大生产力和范式跃进。',
  alternates: {
    canonical: '/',
  },
};

export default function RootPage() {
  return (
    <>
      <LegacyHomeHashBridge />
      <HomePage />
    </>
  );
}
