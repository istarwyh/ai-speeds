import Link from 'next/link';
import { BrandLogo } from '@/components/brand/BrandLogo';
import { externalNavigationItems } from '@/config/site-navigation';
import { UI_TEXTS } from '@/config/ui-texts';
import { resolvedNavigationGroups, standaloneNavigationFeatures } from '@/lib/navigation';

export function SiteFooter() {
  const year = new Date().getUTCFullYear();

  return (
    <footer className='border-t border-border-light bg-bg-warm'>
      <div className='mx-auto grid max-w-site gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.25fr_2fr] lg:px-8 lg:py-16'>
        <div>
          <Link
            href='/'
            aria-label={UI_TEXTS.HEADER.HOME_ARIA}
            className='inline-flex rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
          >
            <BrandLogo />
          </Link>
          <p className='mt-4 max-w-md text-sm leading-7 text-text-secondary'>{UI_TEXTS.FOOTER.MISSION}</p>
        </div>

        <div className='grid grid-cols-2 gap-8 sm:grid-cols-4'>
          {resolvedNavigationGroups.map(group => (
            <section key={group.id} aria-labelledby={`footer-${group.id}`}>
              <h2 id={`footer-${group.id}`} className='text-sm font-semibold text-text-primary'>
                {group.label}
              </h2>
              <ul className='mt-3 space-y-2'>
                {group.features.map(feature => {
                  const className =
                    'rounded text-sm text-text-muted transition hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary';

                  return (
                    <li key={feature.id}>
                      {feature.targetKind === 'anchor' ? (
                        <a href={feature.href} className={className}>
                          {feature.title}
                        </a>
                      ) : (
                        <Link href={feature.href} className={className}>
                          {feature.title}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}

          <section aria-labelledby='footer-brand'>
            <h2 id='footer-brand' className='text-sm font-semibold text-text-primary'>
              {UI_TEXTS.FOOTER.BRAND}
            </h2>
            <ul className='mt-3 space-y-2'>
              {standaloneNavigationFeatures.map(feature => (
                <li key={feature.id}>
                  <Link
                    href={feature.href}
                    className='rounded text-sm text-text-muted transition hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                  >
                    {feature.title}
                  </Link>
                </li>
              ))}
              {externalNavigationItems.map(item => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='rounded text-sm text-text-muted transition hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className='border-t border-border-light'>
        <div className='mx-auto flex max-w-site flex-col gap-2 px-4 py-5 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8'>
          <p>
            © {year} {UI_TEXTS.FOOTER.COPYRIGHT}
          </p>
          <p>Original work, collaborations, and curated resources are identified separately.</p>
        </div>
      </div>
    </footer>
  );
}
