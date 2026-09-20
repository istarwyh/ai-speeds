'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { ArrowUpRight, Search, X } from 'lucide-react';
import Link from 'next/link';
import { type RefObject, useEffect, useMemo, useRef, useState } from 'react';
import type { SearchGroupId } from '@/config/features';
import { UI_TEXTS } from '@/config/ui-texts';
import { searchSiteEntries, type SearchEntry } from '@/lib/search-query';

const GROUP_ORDER: readonly SearchGroupId[] = ['products', 'tools', 'resources', 'shares', 'curated', 'brand'];

type GlobalSearchDialogProps = {
  entries: readonly SearchEntry[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  returnFocusRef: RefObject<HTMLButtonElement | null>;
};

function isRestorableFocusTarget(target: HTMLElement | null): target is HTMLElement {
  return (
    target !== null &&
    target !== document.body &&
    target !== document.documentElement &&
    target.isConnected &&
    !target.matches(':disabled') &&
    target.closest('[inert]') === null &&
    target.getClientRects().length > 0
  );
}

function SearchResultLink({ entry, onSelect }: { entry: SearchEntry; onSelect: () => void }) {
  const content = (
    <>
      <span className='min-w-0 flex-1'>
        <span className='block truncate text-sm font-semibold text-text-primary'>{entry.title}</span>
        <span className='mt-0.5 line-clamp-2 block text-xs leading-5 text-text-muted'>{entry.description}</span>
        <span className='mt-1 block text-[11px] font-medium text-primary-ink'>{entry.attributionLabel}</span>
      </span>
      {entry.targetKind === 'external' ? (
        <ArrowUpRight className='mt-1 shrink-0 text-text-muted' size={16} aria-hidden='true' />
      ) : null}
    </>
  );
  const className =
    'search-result flex items-start gap-3 rounded-xl px-3 py-2.5 transition hover:bg-bg-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';

  if (entry.targetKind === 'external') {
    return (
      <a href={entry.href} target='_blank' rel='noopener noreferrer' onClick={onSelect} className={className}>
        {content}
      </a>
    );
  }

  if (entry.targetKind === 'anchor') {
    return (
      <a href={entry.href} onClick={onSelect} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={entry.href} onClick={onSelect} className={className}>
      {content}
    </Link>
  );
}

export function GlobalSearchDialog({ entries, open, onOpenChange, returnFocusRef }: GlobalSearchDialogProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const results = useMemo(() => searchSiteEntries(query, entries), [entries, query]);
  const groupedResults = useMemo(
    () =>
      GROUP_ORDER.map(group => ({
        group,
        entries: results.filter(entry => entry.group === group),
      })).filter(group => group.entries.length > 0),
    [results],
  );

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (event.key.toLowerCase() === 'k' && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();

        if (!open) {
          openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
          onOpenChange(true);
        }
      }
    };

    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, [onOpenChange, open]);

  const handleOpenChange = (nextOpen: boolean) => {
    if (!nextOpen) {
      setQuery('');
    }
    onOpenChange(nextOpen);
  };

  const getResultElements = () => Array.from(contentRef.current?.querySelectorAll<HTMLElement>('.search-result') ?? []);

  const focusFirstResult = () => {
    getResultElements()[0]?.focus();
  };

  const focusLastResult = () => {
    getResultElements().at(-1)?.focus();
  };

  const focusAdjacentResult = (direction: -1 | 1) => {
    const resultElements = getResultElements();
    const activeIndex = resultElements.findIndex(element => element === document.activeElement);

    if (resultElements.length === 0 || activeIndex === -1) {
      return;
    }

    const nextIndex = (activeIndex + direction + resultElements.length) % resultElements.length;
    resultElements[nextIndex]?.focus();
  };

  return (
    <Dialog.Root open={open} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className='fixed inset-0 z-50 bg-slate-950/25 backdrop-blur-sm data-[state=closed]:animate-out data-[state=open]:animate-in' />
        <Dialog.Content
          id='site-search-dialog'
          ref={contentRef}
          onOpenAutoFocus={event => {
            if (openerRef.current === null) {
              openerRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;
            }

            event.preventDefault();
            inputRef.current?.focus();
          }}
          onCloseAutoFocus={event => {
            const opener = openerRef.current;
            openerRef.current = null;
            event.preventDefault();

            if (isRestorableFocusTarget(opener)) {
              opener.focus();
              return;
            }

            returnFocusRef.current?.focus();
          }}
          onKeyDown={event => {
            const target = event.target;

            if (
              event.nativeEvent.isComposing ||
              !(target instanceof HTMLElement) ||
              target.closest('.search-result') === null ||
              (event.key !== 'ArrowDown' && event.key !== 'ArrowUp')
            ) {
              return;
            }

            event.preventDefault();
            focusAdjacentResult(event.key === 'ArrowDown' ? 1 : -1);
          }}
          className='fixed left-1/2 top-[max(5rem,12vh)] z-50 flex max-h-[min(78vh,44rem)] w-[min(42rem,calc(100vw-2rem))] -translate-x-1/2 flex-col overflow-hidden rounded-3xl border border-floating-border bg-floating-surface-strong shadow-floating-strong backdrop-blur-floating focus:outline-none data-[state=closed]:animate-out data-[state=open]:animate-in'
        >
          <div className='flex items-start gap-3 border-b border-border-light px-4 py-4 sm:px-5'>
            <Search className='mt-2 shrink-0 text-text-muted' size={20} aria-hidden='true' />
            <div className='min-w-0 flex-1'>
              <Dialog.Title className='sr-only'>{UI_TEXTS.SEARCH.TITLE}</Dialog.Title>
              <Dialog.Description className='sr-only'>{UI_TEXTS.SEARCH.DESCRIPTION}</Dialog.Description>
              <label className='sr-only' htmlFor='site-search-input'>
                {UI_TEXTS.SEARCH.PLACEHOLDER}
              </label>
              <input
                ref={inputRef}
                id='site-search-input'
                value={query}
                onChange={event => setQuery(event.target.value)}
                onKeyDown={event => {
                  if (event.nativeEvent.isComposing) {
                    return;
                  }

                  if (event.key === 'ArrowDown') {
                    event.preventDefault();
                    focusFirstResult();
                  } else if (event.key === 'ArrowUp') {
                    event.preventDefault();
                    focusLastResult();
                  }
                }}
                placeholder={UI_TEXTS.SEARCH.PLACEHOLDER}
                autoComplete='off'
                className='h-10 w-full bg-transparent text-base text-text-primary outline-none placeholder:text-text-muted sm:text-lg'
              />
            </div>
            <Dialog.Close
              className='inline-flex size-10 shrink-0 items-center justify-center rounded-xl text-text-muted transition hover:bg-bg-tertiary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
              aria-label={UI_TEXTS.SEARCH.CLOSE}
            >
              <X size={18} aria-hidden='true' />
            </Dialog.Close>
          </div>

          <div className='min-h-0 flex-1 overflow-y-auto p-3 sm:p-4'>
            {groupedResults.length > 0 ? (
              <div className='space-y-4'>
                {groupedResults.map(({ group, entries }) => (
                  <section key={group} aria-labelledby={`search-group-${group}`}>
                    <h2
                      id={`search-group-${group}`}
                      className='px-3 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted'
                    >
                      {UI_TEXTS.SEARCH.GROUPS[group]}
                    </h2>
                    <div className='grid gap-1'>
                      {entries.map(entry => (
                        <SearchResultLink key={entry.id} entry={entry} onSelect={() => handleOpenChange(false)} />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            ) : (
              <div className='flex min-h-40 items-center justify-center px-6 text-center text-sm text-text-muted'>
                {UI_TEXTS.SEARCH.EMPTY}
              </div>
            )}
          </div>

          <div className='flex items-center justify-between border-t border-border-light px-4 py-3 text-xs text-text-muted sm:px-5'>
            <span role='status' aria-live='polite' aria-atomic='true'>
              {query.length === 0 ? UI_TEXTS.SEARCH.DESCRIPTION : `${results.length} 个结果`}
            </span>
            <span>{entries.length} 项可搜索内容</span>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
