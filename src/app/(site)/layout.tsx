import type { ReactNode } from 'react';
import { SiteFooter, SiteHeader } from '@/components/site';
import { siteSearchEntries } from '@/lib/search';

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className='flex min-h-dvh flex-col bg-bg-primary text-text-primary'>
      <SiteHeader searchEntries={siteSearchEntries} />
      <div id='main-content' tabIndex={-1} className='min-h-0 flex-1 outline-none'>
        {children}
      </div>
      <SiteFooter />
    </div>
  );
}
