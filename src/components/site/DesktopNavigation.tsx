'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type ComponentRef, type RefObject, useEffect, useState } from 'react';
import { resolvedNavigationGroups, standaloneNavigationFeatures, isFeatureActive } from '@/lib/navigation';
import { cn } from '@/lib/utils/cn';
import { useCurrentHash } from './useCurrentHash';

const triggerClass =
  'inline-flex min-h-11 items-center gap-1 rounded-xl px-3 text-sm font-medium text-text-secondary transition hover:bg-bg-tertiary hover:text-text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2';

export function DesktopNavigation({ fallbackFocusRef }: { fallbackFocusRef: RefObject<ComponentRef<'a'> | null> }) {
  const pathname = usePathname();
  const hash = useCurrentHash();
  const [openGroupId, setOpenGroupId] = useState<string | null>(null);

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1024px)');
    const closeForMobile = () => {
      if (!desktopQuery.matches && openGroupId !== null) {
        setOpenGroupId(null);
        window.setTimeout(() => fallbackFocusRef.current?.focus(), 0);
      }
    };

    desktopQuery.addEventListener('change', closeForMobile);
    return () => desktopQuery.removeEventListener('change', closeForMobile);
  }, [fallbackFocusRef, openGroupId]);

  return (
    <nav className='hidden items-center gap-1 lg:flex' aria-label='主导航'>
      {resolvedNavigationGroups.map(group => {
        const active = group.features.some(feature => isFeatureActive(feature, pathname, hash));

        return (
          <DropdownMenu.Root
            key={group.id}
            modal={false}
            open={openGroupId === group.id}
            onOpenChange={nextOpen => setOpenGroupId(nextOpen ? group.id : null)}
          >
            <DropdownMenu.Trigger className={cn(triggerClass, 'group', active && 'bg-bg-tertiary text-text-primary')}>
              {group.label}
              <ChevronDown
                className='transition-transform group-data-[state=open]:rotate-180'
                size={15}
                aria-hidden='true'
              />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align='start'
                sideOffset={8}
                collisionPadding={16}
                onCloseAutoFocus={event => {
                  if (!window.matchMedia('(min-width: 1024px)').matches) {
                    event.preventDefault();
                    window.setTimeout(() => fallbackFocusRef.current?.focus(), 0);
                  }
                }}
                className='z-50 w-80 rounded-2xl border border-floating-border bg-floating-surface-strong p-2 shadow-floating-strong backdrop-blur-floating data-[state=closed]:animate-out data-[state=open]:animate-in'
              >
                {group.features.map(feature => {
                  const featureActive = isFeatureActive(feature, pathname, hash);

                  const itemClassName = cn(
                    'group flex min-h-11 items-start gap-3 rounded-xl px-3 py-2.5 outline-none transition',
                    'hover:bg-bg-tertiary focus:bg-bg-tertiary focus-visible:ring-2 focus-visible:ring-primary',
                    featureActive && 'bg-bg-warm text-primary-ink',
                  );
                  const itemContent = (
                    <>
                      <span className='min-w-0 flex-1'>
                        <span className='block text-sm font-semibold text-text-primary group-hover:text-primary-ink'>
                          {feature.title}
                        </span>
                        <span className='mt-0.5 block text-xs leading-5 text-text-muted'>{feature.description}</span>
                      </span>
                      <ChevronRight className='mt-1 shrink-0 text-text-muted' size={15} aria-hidden='true' />
                    </>
                  );
                  const ariaCurrent = featureActive
                    ? feature.targetKind === 'anchor'
                      ? 'location'
                      : 'page'
                    : undefined;

                  return (
                    <DropdownMenu.Item key={feature.id} asChild>
                      {feature.targetKind === 'anchor' ? (
                        <a href={feature.href} aria-current={ariaCurrent} className={itemClassName}>
                          {itemContent}
                        </a>
                      ) : (
                        <Link href={feature.href} aria-current={ariaCurrent} className={itemClassName}>
                          {itemContent}
                        </Link>
                      )}
                    </DropdownMenu.Item>
                  );
                })}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        );
      })}

      {standaloneNavigationFeatures.map(feature => {
        const active = isFeatureActive(feature, pathname, hash);

        return (
          <Link
            key={feature.id}
            href={feature.href}
            aria-current={active ? 'page' : undefined}
            className={cn(triggerClass, active && 'bg-bg-tertiary text-text-primary')}
          >
            {feature.title}
          </Link>
        );
      })}
    </nav>
  );
}
