import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { BrandIcon } from '@/components/brand';
import { getFeatureById } from '@/config/features';
import { UI_TEXTS } from '@/config/ui-texts';
import { primaryActionFeature } from '@/lib/navigation';

export function MissionHero() {
  const getStarted = getFeatureById('get-started');

  return (
    <section className='relative isolate overflow-hidden bg-bg-warm' aria-labelledby='home-mission-title'>
      <div aria-hidden='true' className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute -left-32 top-8 size-80 rounded-full bg-primary/15 blur-3xl' />
        <div className='absolute -right-24 top-24 size-72 rounded-full bg-cyan-300/20 blur-3xl' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.08)_1px,transparent_0)] bg-[length:32px_32px] opacity-35' />
      </div>

      <div className='relative mx-auto grid min-h-[calc(100svh-var(--size-site-header-mobile))] max-w-site items-center gap-12 px-4 py-16 sm:min-h-[calc(100svh-var(--size-site-header))] sm:px-6 sm:py-20 lg:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)] lg:px-8 lg:py-24'>
        <div>
          <div className='inline-flex items-center gap-2 rounded-pill border border-primary/25 bg-white/70 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-primary-ink shadow-sm backdrop-blur'>
            <Sparkles size={14} aria-hidden='true' />
            Make AI Speeds Us
          </div>
          <h1
            id='home-mission-title'
            className='mt-7 max-w-4xl text-balance font-editorial text-5xl font-semibold leading-[0.98] tracking-[-0.045em] text-text-primary sm:text-6xl lg:text-7xl xl:text-[5.5rem]'
          >
            让 AI 的速度，
            <span className='block text-primary-ink'>成为每个人的能力。</span>
          </h1>
          <p className='mt-7 max-w-2xl text-pretty text-lg leading-8 text-text-secondary sm:text-xl sm:leading-9'>
            {UI_TEXTS.FOOTER.MISSION}
            我们从真实产品、开放工具和公开实践出发，把新的工作方式变成可理解、可使用、可继续共同创造的能力。
          </p>

          <div className='mt-9 flex flex-col gap-3 sm:flex-row'>
            <Link
              href={primaryActionFeature.href}
              className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-press'
            >
              {UI_TEXTS.HEADER.PRIMARY_CTA}
              <ArrowRight size={17} aria-hidden='true' />
            </Link>
            <Link
              href={getStarted.href}
              className='inline-flex min-h-12 items-center justify-center rounded-xl border border-floating-border bg-floating-surface px-5 text-sm font-semibold text-text-primary shadow-floating backdrop-blur-floating transition hover:-translate-y-0.5 hover:border-primary hover:bg-floating-surface-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-press'
            >
              {getStarted.title}
            </Link>
          </div>

          <p className='mt-8 max-w-xl text-sm leading-6 text-text-muted'>
            当前主要由创始贡献者持续建设，并为团队、合作方和受邀贡献者的真实作品保留清晰的署名与来源边界。
          </p>
        </div>

        <figure
          className='relative mx-auto aspect-square w-full max-w-[34rem] rounded-[2.5rem] border border-white/80 bg-white/65 p-5 shadow-2xl shadow-slate-900/10 backdrop-blur sm:p-7'
          aria-label='AI Speeds 连接产品、工具、实践与共同创作'
        >
          <div aria-hidden='true' className='absolute inset-8 rounded-full border border-dashed border-primary/25' />
          <div aria-hidden='true' className='absolute inset-[22%] rounded-full border border-cyan-400/25' />

          <div className='absolute left-1/2 top-1/2 z-10 flex size-32 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full border border-white bg-bg-warm shadow-xl sm:size-40'>
            <BrandIcon size={58} />
            <span className='mt-2 text-sm font-semibold tracking-tight text-text-primary'>AI Speeds</span>
          </div>

          <div className='absolute left-5 top-[16%] rounded-2xl border border-floating-border bg-floating-surface-strong px-4 py-3 shadow-floating sm:left-7'>
            <span className='block text-xs font-semibold uppercase tracking-[0.16em] text-primary-ink'>Products</span>
            <span className='mt-1 block text-sm font-medium text-text-primary'>真实问题的产品答案</span>
          </div>
          <div className='absolute right-5 top-[12%] rounded-2xl border border-floating-border bg-floating-surface-strong px-4 py-3 shadow-floating sm:right-7'>
            <span className='block text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700'>Tools</span>
            <span className='mt-1 block text-sm font-medium text-text-primary'>随手可用的 AI 工具</span>
          </div>
          <div className='absolute bottom-[12%] left-5 rounded-2xl border border-floating-border bg-floating-surface-strong px-4 py-3 shadow-floating sm:left-7'>
            <span className='block text-xs font-semibold uppercase tracking-[0.16em] text-amber-700'>Public Work</span>
            <span className='mt-1 block text-sm font-medium text-text-primary'>可追溯的公开实践</span>
          </div>
          <div className='absolute bottom-[16%] right-5 rounded-2xl border border-floating-border bg-floating-surface-strong px-4 py-3 shadow-floating sm:right-7'>
            <span className='block text-xs font-semibold uppercase tracking-[0.16em] text-teal-700'>Together</span>
            <span className='mt-1 block text-sm font-medium text-text-primary'>清晰署名的共同创造</span>
          </div>
        </figure>
      </div>
    </section>
  );
}
