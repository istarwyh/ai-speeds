'use client';

import { usePathname } from 'next/navigation';
import { featurePages } from '@/config/features';
import { ToolHeader } from './ToolHeader';

export function ToolShellHeader() {
  const pathname = usePathname();
  const feature = featurePages.find(
    candidate =>
      candidate.shell === 'tool' &&
      candidate.targetKind === 'route' &&
      (pathname === candidate.href || pathname.startsWith(`${candidate.href}/`)),
  );

  return <ToolHeader title={feature?.title ?? 'AI Speeds Tool'} />;
}
