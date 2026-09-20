import { ArrowUpRight, Boxes, Mic, PencilRuler, Terminal } from 'lucide-react';
import Link from 'next/link';
import { getFeatureById, type FeatureId } from '@/config/features';

const toolDefinitions = [
  {
    id: 'playground',
    label: 'Connect',
    icon: Terminal,
    accent: 'bg-slate-950 text-white',
  },
  {
    id: 'whiteboard',
    label: 'Think',
    icon: PencilRuler,
    accent: 'bg-cyan-100 text-cyan-900',
  },
  {
    id: 'recording-summary',
    label: 'Capture',
    icon: Mic,
    accent: 'bg-amber-100 text-amber-900',
  },
  {
    id: 'ai-wireframe',
    label: 'Shape',
    icon: Boxes,
    accent: 'bg-primary/15 text-primary-ink',
  },
] as const satisfies readonly { id: FeatureId; label: string; icon: typeof Terminal; accent: string }[];

export function ToolCollection() {
  return (
    <section className='bg-bg-warm py-20 sm:py-24 lg:py-32' aria-labelledby='tools-title'>
      <div className='mx-auto max-w-site px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>Tool collection</p>
            <h2
              id='tools-title'
              className='mt-4 text-balance font-editorial text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl'
            >
              想法出现时，工具应该已经就位。
            </h2>
          </div>
          <p className='max-w-md text-base leading-7 text-text-secondary'>
            每一项都是已经可以打开使用的真实工具，没有“即将推出”的占位入口。
          </p>
        </div>

        <div className='mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
          {toolDefinitions.map(definition => {
            const feature = getFeatureById(definition.id);
            const Icon = definition.icon;

            return (
              <article
                key={feature.id}
                className='group flex min-h-72 flex-col rounded-[2rem] border border-floating-border bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/50 hover:shadow-floating sm:p-6'
              >
                <div className='flex items-center justify-between'>
                  <span className={`flex size-12 items-center justify-center rounded-2xl ${definition.accent}`}>
                    <Icon size={22} aria-hidden='true' />
                  </span>
                  <span className='rounded-pill bg-success/10 px-2.5 py-1 text-xs font-semibold text-emerald-700'>
                    可直接使用
                  </span>
                </div>
                <p className='mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-text-muted'>
                  {definition.label}
                </p>
                <h3 className='mt-2 text-2xl font-semibold tracking-tight text-text-primary'>{feature.title}</h3>
                <p className='mt-3 text-sm leading-6 text-text-secondary'>{feature.description}</p>
                <Link
                  href={feature.href}
                  className='mt-auto inline-flex min-h-11 items-center gap-2 pt-6 text-sm font-semibold text-text-primary transition group-hover:text-primary-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary'
                >
                  打开工具
                  <ArrowUpRight size={16} aria-hidden='true' />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
