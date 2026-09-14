import Link from 'next/link';
import type { ReactNode } from 'react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { SkipLink } from '@/components/site/SkipLink';
import { UI_TEXTS } from '@/config/ui-texts';
import { cn } from '@/lib/utils/cn';

type ToolHeaderProps = {
  title: string;
  homeHref?: string;
  actions?: ReactNode;
  className?: string;
};

export function ToolHeader({ title, homeHref = '/', actions, className }: ToolHeaderProps) {
  return (
    <>
      <SkipLink href='#tool-main-content' />
      <header
        className={cn(
          'relative z-30 flex h-tool-header shrink-0 items-center border-b border-floating-border bg-header-surface px-3 backdrop-blur-header sm:px-4',
          className,
        )}
      >
        <div className='flex min-w-0 flex-1 items-center gap-3'>
          <Link
            href={homeHref}
            aria-label={UI_TEXTS.HEADER.HOME_ARIA}
            className='shrink-0 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          >
            <BrandLogo size='small' textClassName='hidden text-sm sm:inline' />
          </Link>
          <span className='h-5 w-px shrink-0 bg-border-light' aria-hidden='true' />
          <p className='truncate text-sm font-medium text-text-secondary'>{title}</p>
        </div>
        {actions ? <div className='ml-3 flex shrink-0 items-center gap-2'>{actions}</div> : null}
      </header>
    </>
  );
}
