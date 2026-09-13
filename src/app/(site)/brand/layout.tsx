import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '品牌资料 | AI Speeds',
  description: 'AI Speeds 品牌标识资源与外部使用指南。',
  alternates: {
    canonical: '/brand',
  },
};

export default function BrandLayout({ children }: { children: ReactNode }) {
  return children;
}
