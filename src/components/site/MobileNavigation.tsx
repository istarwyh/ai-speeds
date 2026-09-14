'use client';

import * as Popover from '@radix-ui/react-popover';
import { ExternalLink, Code2, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ComponentRef, type RefObject, useEffect } from 'react';
import { UI_TEXTS } from '@/config/ui-texts';
import { externalNavigationItems } from '@/config/site-navigation';
import {
  isFeatureActive,
  primaryActionFeature,
  resolvedNavigationGroups,
  standaloneNavigationFeatures,
} from '@/lib/navigation';
import { cn } from '@/lib/utils/cn';
import { useCurrentHash } from './useCurrentHash';

type MobileNavigationProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  fallbackFocusRef: RefObject<ComponentRef<'a'> | null>;
};

export function MobileNavigation({ open, onOpenChange, fallbackFocusRef }: MobileNavigationProps) {
  const pathname = usePathname();
  const hash = useCurrentHash();

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const closeForDesktop = () => {
      if (desktopQuery.matches && open) {
        onOpenChange(false);
        window.setTimeout(() => fallbackFocusRef.current?.focus(), 0);
      }
    };

    desktopQuery.addEventListener('change', closeForDesktop);
    return () => desktopQuery.removeEventListener('change', closeForDesktop);
  }, [fallbackFocusRef, onOpenChange, open]);

  return (
    <Popover.Root open={open} onOpenChange={onOpenChange} modal>
      <Popover.Trigger
        className='inline-flex size-11 items-center justify-center rounded-xl border border-floating-border bg-floating-surface text-text-primary shadow-sm transition hover:border-primary hover:bg-floating-surface-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 lg:hidden'
        aria-label={open ? UI_TEXTS.HEADER.CLOSE_MENU : UI_TEXTS.HEADER.OPEN_MENU}
      >
        {open ? <X size={19} aria-hidden='true' /> : <Menu size={19} aria-hidden='true' />}
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          align='end'
          sideOffset={8}
          collisionPadding={16}
          aria-label={UI_TEXTS.HEADER.NAVIGATION_ARIA}
          onCloseAutoFocus={event => {
            if (window.matchMedia('(min-width: 1024px)').matches) {
              event.preventDefault();
              window.setTimeout(() => fallbackFocusRef.current?.focus(), 0);
            }
          }}
          className='z-50 max-h-[min(70vh,36rem)] w-[min(24rem,calc(100vw-2rem))] overscroll-contain overflow-y-auto rounded-3xl border border-floating-border bg-floating-surface-strong p-3 shadow-floating-strong backdrop-blur-floating focus:outline-none data-[state=closed]:animate-out data-[state=open]:animate-in'
        >
          <nav aria-label={UI_TEXTS.HEADER.NAVIGATION_ARIA}>
            <div className='space-y-4'>
              {resolvedNavigationGroups.map(group => (
                <section key={group.id} aria-labelledby={`mobile-navigation-${group.id}`}>
                  <h2
                    id={`mobile-navigation-${group.id}`}
                    className='px-3 pb-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-muted'
                  >
                    {group.label}
                  </h2>
                  <div className='grid gap-1 sm:grid-cols-2'>
                    {group.features.map(feature => {
                      const active = isFeatureActive(feature, pathname, hash);

                      const className = cn(
                        'rounded-xl px-3 py-2.5 text-sm transition hover:bg-bg-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                        active ? 'bg-bg-warm text-primary-ink' : 'text-text-primary',
                      );
                      const ariaCurrent = active ? (feature.targetKind === 'anchor' ? 'location' : 'page') : undefined;
                      const content = (
                        <>
                          <span className='block font-semibold'>{feature.title}</span>
                          <span className='mt-0.5 block text-xs leading-5 text-text-muted'>{feature.description}</span>
                        </>
                      );

                      return feature.targetKind === 'anchor' ? (
                        <a
                          key={feature.id}
                          href={feature.href}
                          onClick={() => onOpenChange(false)}
                          aria-current={ariaCurrent}
                          className={className}
                        >
                          {content}
                        </a>
                      ) : (
                        <Link
                          key={feature.id}
                          href={feature.href}
                          onClick={() => onOpenChange(false)}
                          aria-current={ariaCurrent}
                          className={className}
                        >
                          {content}
                        </Link>
                      );
                    })}
                  </div>
                </section>
              ))}
            </div>

            <div className='mt-4 border-t border-border-light pt-3'>
              {standaloneNavigationFeatures.map(feature => {
                const active = isFeatureActive(feature, pathname, hash);

                return (
                  <Link
                    key={feature.id}
                    href={feature.href}
                    onClick={() => onOpenChange(false)}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex min-h-11 items-center rounded-xl px-3 text-sm font-semibold transition hover:bg-bg-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary',
                      active ? 'bg-bg-warm text-primary-ink' : 'text-text-primary',
                    )}
                  >
                    {feature.title}
                  </Link>
                );
              })}

              {externalNavigationItems.map(item => (
                <a
                  key={item.id}
                  href={item.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  onClick={() => onOpenChange(false)}
                  className='flex min-h-11 items-center gap-2 rounded-xl px-3 text-sm font-semibold text-text-primary transition hover:bg-bg-tertiary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                >
                  <Code2 size={16} aria-hidden='true' />
                  {item.label}
                  <ExternalLink className='ml-auto text-text-muted' size={14} aria-hidden='true' />
                </a>
              ))}
            </div>

            <Link
              href={primaryActionFeature.href}
              onClick={() => onOpenChange(false)}
              className='mt-3 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-primary px-4 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-press'
            >
              {UI_TEXTS.HEADER.PRIMARY_CTA}
            </Link>
          </nav>
          <Popover.Arrow className='fill-floating-surface-strong' />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
