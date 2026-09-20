import { ArrowRight, Check, Compass, Terminal } from 'lucide-react';
import Link from 'next/link';
import { getFeatureById } from '@/config/features';

const steps = [
  {
    number: '01',
    title: '选择 Provider',
    description: '从官方 API、国内模型服务或 AI Speeds 默认线路中选择适合你的入口。',
  },
  {
    number: '02',
    title: '配置环境变量',
    description: '根据服务商复制对应配置，只把真实 API Key 留在你自己的设备上。',
  },
  {
    number: '03',
    title: '启动 Claude Code',
    description: '运行 claude，开始把任务交给可以阅读项目、使用工具和持续执行的 AI 代理。',
  },
] as const;

export function GetStartedPreview() {
  const getStarted = getFeatureById('get-started');

  return (
    <section className='bg-bg-warm py-20 sm:py-24 lg:py-32' aria-labelledby='get-started-preview-title'>
      <div className='mx-auto max-w-site px-4 sm:px-6 lg:px-8'>
        <div className='overflow-hidden rounded-[2.5rem] border border-floating-border bg-white shadow-xl shadow-slate-900/5'>
          <div className='grid lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]'>
            <div className='relative overflow-hidden bg-slate-950 p-7 text-white sm:p-10 lg:p-12'>
              <div
                aria-hidden='true'
                className='absolute -right-24 -top-24 size-72 rounded-full bg-cyan-400/15 blur-3xl'
              />
              <div className='relative'>
                <span className='flex size-12 items-center justify-center rounded-2xl bg-white/10 text-cyan-300'>
                  <Compass size={24} aria-hidden='true' />
                </span>
                <p className='mt-8 text-sm font-semibold uppercase tracking-[0.2em] text-primary-light'>Get started</p>
                <h2
                  id='get-started-preview-title'
                  className='mt-4 text-balance font-editorial text-4xl font-semibold leading-tight tracking-tight sm:text-5xl'
                >
                  第一次接入，也应该足够清楚。
                </h2>
                <p className='mt-5 text-base leading-7 text-slate-300'>
                  完整指南保留服务商选择、环境变量生成、命令复制和配置说明，不需要在不同文档之间来回拼答案。
                </p>
                <Link
                  href={getStarted.href}
                  className='mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'
                >
                  打开完整接入指南
                  <ArrowRight size={16} aria-hidden='true' />
                </Link>
              </div>
            </div>

            <ol className='grid divide-y divide-border-light p-3 sm:p-5'>
              {steps.map(step => (
                <li
                  key={step.number}
                  className='grid gap-4 px-3 py-6 sm:grid-cols-[3.5rem_1fr_auto] sm:items-start sm:px-5 sm:py-7'
                >
                  <span className='font-mono text-sm font-semibold text-primary-ink'>{step.number}</span>
                  <div>
                    <h3 className='text-xl font-semibold text-text-primary'>{step.title}</h3>
                    <p className='mt-2 max-w-xl text-sm leading-6 text-text-secondary sm:text-base'>
                      {step.description}
                    </p>
                  </div>
                  <span className='hidden size-9 items-center justify-center rounded-full bg-success/10 text-emerald-700 sm:flex'>
                    {step.number === '03' ? (
                      <Terminal size={17} aria-hidden='true' />
                    ) : (
                      <Check size={17} aria-hidden='true' />
                    )}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
