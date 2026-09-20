import { UI_TEXTS } from '@/config/ui-texts';

type SkipLinkProps = {
  href: `#${string}`;
};

export function SkipLink({ href }: SkipLinkProps) {
  return (
    <a
      href={href}
      className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:inline-flex focus:min-h-11 focus:items-center focus:rounded-xl focus:bg-bg-primary focus:px-4 focus:text-sm focus:font-semibold focus:text-text-primary focus:shadow-floating-strong focus:outline-none focus:ring-2 focus:ring-primary'
    >
      {UI_TEXTS.HEADER.SKIP_TO_CONTENT}
    </a>
  );
}
