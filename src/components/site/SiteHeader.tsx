'use client';

import { Code2, Search } from 'lucide-react';
import Link from 'next/link';
import { type ComponentRef, useCallback, useRef, useState } from 'react';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { externalNavigationItems } from '@/config/site-navigation';
import { UI_TEXTS } from '@/config/ui-texts';
import { primaryActionFeature } from '@/lib/navigation';
import type { SearchEntry } from '@/lib/search-query';
import { DesktopNavigation } from './DesktopNavigation';
import { GlobalSearchDialog } from './GlobalSearchDialog';
import { MobileNavigation } from './MobileNavigation';
import { SkipLink } from './SkipLink';

type SiteHeaderProps = {
  searchEntries: readonly SearchEntry[];
};

export function SiteHeader({ searchEntries }: SiteHeaderProps) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileNavigationOpen, setMobileNavigationOpen] = useState(false);
  const brandLinkRef = useRef<ComponentRef<'a'>>(null);
  const searchTriggerRef = useRef<HTMLButtonElement>(null);
  const handleSearchOpenChange = useCallback((open: boolean) => {
    setSearchOpen(open);

    if (open) {
      setMobileNavigationOpen(false);
    }
  }, []);
  const github = externalNavigationItems.find(item => item.id === 'github');

  return (
    <>
      <SkipLink href='#main-content' />
      <header className='sticky top-0 z-40 border-b border-floating-border bg-header-surface backdrop-blur-header'>
        <div className='mx-auto flex h-site-header-mobile max-w-site items-center gap-3 px-4 sm:h-site-header sm:px-6 lg:px-8'>
          <Link
            ref={brandLinkRef}
            href='/'
            aria-label={UI_TEXTS.HEADER.HOME_ARIA}
            className='shrink-0 rounded-xl transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          >
            <BrandLogo size='small' textClassName='text-base tracking-tight' />
          </Link>

          <div className='min-w-0 flex-1 lg:ml-3'>
            <DesktopNavigation fallbackFocusRef={brandLinkRef} />
          </div>

          <div className='flex shrink-0 items-center gap-2'>
            <button
              ref={searchTriggerRef}
              type='button'
              onClick={event => {
                event.currentTarget.focus();
                handleSearchOpenChange(true);
              }}
              className='inline-flex size-11 items-center justify-center gap-2 rounded-xl border border-floating-border bg-floating-surface text-text-primary shadow-sm transition hover:border-primary hover:bg-floating-surface-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 xl:w-auto xl:px-3'
              aria-label={UI_TEXTS.HEADER.OPEN_SEARCH}
              aria-controls='site-search-dialog'
              aria-expanded={searchOpen}
              aria-haspopup='dialog'
              aria-keyshortcuts='Meta+K Control+K'
            >
              <Search size={18} aria-hidden='true' />
              <span className='hidden text-sm font-medium xl:inline'>{UI_TEXTS.HEADER.OPEN_SEARCH}</span>
              <kbd className='hidden rounded-md border border-border-light bg-bg-primary px-1.5 py-0.5 text-[10px] text-text-muted 2xl:inline'>
                ⌘K
              </kbd>
            </button>

            {github ? (
              <a
                href={github.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={github.label}
                className='hidden size-11 items-center justify-center rounded-xl text-text-secondary transition hover:bg-bg-tertiary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:inline-flex'
              >
                <Code2 size={19} aria-hidden='true' />
              </a>
            ) : null}

            <Link
              href={primaryActionFeature.href}
              className='hidden min-h-11 items-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-press lg:inline-flex'
            >
              {UI_TEXTS.HEADER.PRIMARY_CTA}
            </Link>

            <MobileNavigation
              open={mobileNavigationOpen}
              onOpenChange={setMobileNavigationOpen}
              fallbackFocusRef={brandLinkRef}
            />
          </div>
        </div>
      </header>
      <GlobalSearchDialog
        entries={searchEntries}
        open={searchOpen}
        onOpenChange={handleSearchOpenChange}
        returnFocusRef={searchTriggerRef}
      />
    </>
  );
}
