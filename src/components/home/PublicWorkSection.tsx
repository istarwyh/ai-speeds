import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ShareCard } from '@/components/features/shares';
import { getPublicShares } from '@/content/shares';

export function PublicWorkSection() {
  const shares = getPublicShares().slice(0, 3);

  if (shares.length === 0) {
    return null;
  }

  return (
    <section className='bg-bg-primary py-20 sm:py-24 lg:py-32' aria-labelledby='public-work-title'>
      <div className='mx-auto max-w-site px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>Public work</p>
            <h2
              id='public-work-title'
              className='mt-4 text-balance font-editorial text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl'
            >
              把实践公开，才有继续讨论和共同创造的可能。
            </h2>
            <p className='mt-5 text-lg leading-8 text-text-secondary'>
              这里收录已经公开的演示、讲稿和教学资料，并保留真实作者、活动与来源信息。
            </p>
          </div>
          <Link
            href='/shares'
            className='inline-flex min-h-11 shrink-0 items-center gap-2 self-start rounded-xl text-sm font-semibold text-text-primary transition hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:self-auto'
          >
            查看全部公开分享
            <ArrowRight size={16} aria-hidden='true' />
          </Link>
        </div>

        <div className={`mt-12 grid gap-6 ${shares.length === 1 ? 'max-w-2xl' : 'md:grid-cols-2 xl:grid-cols-3'}`}>
          {shares.map((share, index) => (
            <ShareCard key={share.slug} share={share} priority={index === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
