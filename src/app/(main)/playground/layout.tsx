import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '接口测试 - AI Speeds',
  description: '测试 OpenAI、Responses 和 Anthropic 兼容接口的在线工具',
};

export default function PlaygroundLayout({ children }: { children: ReactNode }) {
  return children;
}
