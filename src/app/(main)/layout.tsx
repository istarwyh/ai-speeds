import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Claude Code Router',
  description: 'Universal Claude API Proxy - Make AI Speeds Us',
};

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
