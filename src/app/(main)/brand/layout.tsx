import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: 'Brand Kit - AI Speeds',
  description: 'AI Speeds 品牌标识资源与外部使用指南',
};

export default function BrandLayout({ children }: { children: ReactNode }) {
  return children;
}
