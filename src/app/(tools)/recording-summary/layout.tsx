import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '录音总结 | AI Speeds',
  description: '在浏览器中录音、整理草稿文字，并生成贴合身份的结构化总结。',
  alternates: {
    canonical: '/recording-summary',
  },
};

export default function RecordingSummaryLayout({ children }: { children: ReactNode }) {
  return children;
}
