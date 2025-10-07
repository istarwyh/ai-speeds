import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'AI Speeds',
  description: 'Make AI Speeds Us',
};

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return children;
}
