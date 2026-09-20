import { ArrowRight, Code2 } from 'lucide-react';
import Link from 'next/link';
import { SITE_LINKS } from '@/config/site-links';
import { primaryActionFeature } from '@/lib/navigation';

export function HomeClosingCta() {
  return (
    <section className='bg-bg-primary pb-20 sm:pb-24 lg:pb-32' aria-labelledby='home-closing-title'>
      <div className='mx-auto max-w-site px-4 sm:px-6 lg:px-8'>
        <div className='relative overflow-hidden rounded-[2.5rem] bg-text-primary px-6 py-14 text-text-inverse shadow-2xl shadow-slate-950/15 sm:px-10 sm:py-16 lg:px-16 lg:py-20'>
          <div aria-hidden='true' className='pointer-events-none absolute inset-0'>
            <div className='absolute -right-24 -top-24 size-80 rounded-full bg-primary/30 blur-3xl' />
            <div className='absolute -bottom-28 left-[18%] size-72 rounded-full bg-cyan-400/20 blur-3xl' />
          </div>
          <div className='relative max-w-4xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.22em] text-primary-light'>Start where you are</p>
            <h2
              id='home-closing-title'
              className='mt-5 text-balance font-editorial text-4xl font-semibold leading-tight tracking-tight sm:text-6xl'
            >
              选择一个真实问题，让 AI 从今天开始参与工作。
            </h2>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300'>
              先测试一条接口、整理一次录音、画出一个结构，或公开一份值得继续讨论的实践。
            </p>
            <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
              <Link
                href={primaryActionFeature.href}
                className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'
              >
                打开 {primaryActionFeature.title}
                <ArrowRight size={16} aria-hidden='true' />
              </Link>
              <a
                href={SITE_LINKS.github}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'
              >
                <Code2 size={17} aria-hidden='true' />在 GitHub 查看项目
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
