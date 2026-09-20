import { ArrowUpRight, Braces, Check, Route, Terminal } from 'lucide-react';
import Link from 'next/link';
import { getFeatureById } from '@/config/features';
import { SITE_LINKS } from '@/config/site-links';

const gatewayCapabilities = [
  '在 Anthropic Messages API 与 OpenAI 兼容接口之间转换消息、工具和流式事件',
  '按请求传入 API Key，不在 AI Speeds 服务端保存你的模型凭据',
  '连接 DeepSeek、OpenRouter、OpenAI、Kimi、SiliconFlow 与 NVIDIA NIM 等服务',
] as const;

const cc4pmCapabilities = [
  '26 节交互式课程，覆盖 Claude Code 基础、产品方法、设计和工程交付',
  '200+ Skills，把研究、规划、设计、开发与评测沉淀成可复用工作流',
  '支持 Claude Code、Cursor、Codex 与 OpenCode，课程和工具保持 MIT 开源',
] as const;

function CapabilityList({ items, inverted = false }: { items: readonly string[]; inverted?: boolean }) {
  return (
    <ul className='mt-6 space-y-3'>
      {items.map(item => (
        <li
          key={item}
          className={`flex gap-3 text-sm leading-6 sm:text-base ${inverted ? 'text-slate-300' : 'text-text-secondary'}`}
        >
          <span
            className={`mt-1 flex size-5 shrink-0 items-center justify-center rounded-full ${
              inverted ? 'bg-cyan-300/10 text-cyan-300' : 'bg-primary/10 text-primary-ink'
            }`}
          >
            <Check size={13} strokeWidth={2.5} aria-hidden='true' />
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProductStories() {
  const gateway = getFeatureById('api-gateway');
  const cc4pm = getFeatureById('cc4pm');
  const playground = getFeatureById('playground');
  const getStarted = getFeatureById('get-started');

  return (
    <section className='bg-bg-primary py-20 sm:py-24 lg:py-32' aria-labelledby='products-title'>
      <div className='mx-auto max-w-site px-4 sm:px-6 lg:px-8'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>
            Products with a point of view
          </p>
          <h2
            id='products-title'
            className='mt-4 text-balance font-editorial text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl'
          >
            不做功能陈列，做能改变工作方式的产品。
          </h2>
          <p className='mt-5 text-lg leading-8 text-text-secondary'>
            AI Speeds 从真实使用场景出发：一边降低模型接入门槛，一边把 AI 原生的产品方法变成可学习、可复用的系统。
          </p>
        </div>

        <div className='mt-12 space-y-8 lg:mt-16 lg:space-y-12'>
          <article
            id={gateway.id}
            className='scroll-mt-24 overflow-hidden rounded-[2.5rem] bg-slate-950 text-white shadow-2xl shadow-slate-950/15'
          >
            <div className='grid lg:grid-cols-[minmax(0,0.92fr)_minmax(26rem,1.08fr)]'>
              <div className='p-7 sm:p-10 lg:p-12'>
                <div className='flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300'>
                  <span className='flex size-9 items-center justify-center rounded-xl bg-cyan-300/10'>
                    <Route size={18} aria-hidden='true' />
                  </span>
                  AI Speeds Product 01
                </div>
                <h3 className='mt-7 font-editorial text-4xl font-semibold tracking-tight sm:text-5xl'>
                  {gateway.title}
                </h3>
                <p className='mt-5 text-lg leading-8 text-slate-300'>
                  让 Claude Code 接入你已经在使用的模型服务，而不是被单一接口格式锁住。
                </p>
                <CapabilityList items={gatewayCapabilities} inverted />
                <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                  <Link
                    href={playground.href}
                    className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'
                  >
                    打开接口测试
                    <ArrowUpRight size={16} aria-hidden='true' />
                  </Link>
                  <Link
                    href={getStarted.href}
                    className='inline-flex min-h-12 items-center justify-center rounded-xl border border-white/15 bg-white/10 px-5 text-sm font-semibold text-white transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950'
                  >
                    查看接入指南
                  </Link>
                </div>
              </div>

              <div className='relative min-h-[28rem] overflow-hidden border-t border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(6,182,212,0.24),transparent_45%),linear-gradient(145deg,#111827,#020617)] p-5 sm:p-8 lg:border-l lg:border-t-0'>
                <div
                  aria-hidden='true'
                  className='absolute -right-20 -top-20 size-64 rounded-full border border-cyan-300/20'
                />
                <div className='relative mx-auto flex h-full max-w-xl flex-col justify-center'>
                  <div className='overflow-hidden rounded-2xl border border-white/10 bg-slate-950/85 shadow-2xl'>
                    <div className='flex items-center justify-between border-b border-white/10 px-4 py-3'>
                      <div className='flex gap-1.5' aria-hidden='true'>
                        <span className='size-2.5 rounded-full bg-primary' />
                        <span className='size-2.5 rounded-full bg-amber-300' />
                        <span className='size-2.5 rounded-full bg-cyan-300' />
                      </div>
                      <span className='font-mono text-[11px] text-slate-500'>POST /v1/messages</span>
                    </div>
                    <div className='space-y-4 p-5 font-mono text-xs leading-6 sm:p-6 sm:text-sm'>
                      <p className='text-cyan-300'>ANTHROPIC_BASE_URL=https://aispeeds.me</p>
                      <p className='text-slate-400'>ANTHROPIC_API_KEY=your_provider_key</p>
                      <div className='h-px bg-white/10' />
                      <p className='text-slate-300'>provider → model mapping → format adapter → SSE stream</p>
                      <p className='text-primary-light'>✓ Claude Code compatible response</p>
                    </div>
                  </div>
                  <div className='mt-4 grid grid-cols-3 gap-3 text-center text-[11px] font-semibold uppercase tracking-wider text-slate-400'>
                    <span className='rounded-xl border border-white/10 bg-white/5 px-2 py-3'>Anthropic</span>
                    <span className='rounded-xl border border-white/10 bg-white/5 px-2 py-3'>OpenAI</span>
                    <span className='rounded-xl border border-white/10 bg-white/5 px-2 py-3'>More APIs</span>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article
            id={cc4pm.id}
            className='scroll-mt-24 overflow-hidden rounded-[2.5rem] border border-floating-border bg-bg-warm shadow-xl shadow-slate-900/5'
          >
            <div className='grid lg:grid-cols-[minmax(26rem,1.04fr)_minmax(0,0.96fr)]'>
              <div className='relative min-h-[27rem] overflow-hidden bg-[linear-gradient(145deg,rgba(229,122,90,0.12),rgba(6,182,212,0.12))] p-6 sm:p-8 lg:order-first'>
                <div
                  aria-hidden='true'
                  className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.08)_1px,transparent_0)] bg-[length:28px_28px]'
                />
                <div className='relative mx-auto flex h-full max-w-xl flex-col justify-center'>
                  <div className='rounded-3xl border border-white/80 bg-white/80 p-5 shadow-xl backdrop-blur sm:p-7'>
                    <div className='flex items-center gap-3'>
                      <span className='flex size-11 items-center justify-center rounded-2xl bg-primary/10 text-primary-ink'>
                        <Terminal size={22} aria-hidden='true' />
                      </span>
                      <div>
                        <p className='text-xs font-semibold uppercase tracking-[0.18em] text-text-muted'>
                          Claude Code for Product Maker
                        </p>
                        <p className='mt-1 text-lg font-semibold text-text-primary'>一个人，一支产品团队。</p>
                      </div>
                    </div>
                    <div className='mt-6 rounded-2xl bg-slate-950 p-5 font-mono text-sm shadow-lg'>
                      <p className='text-slate-400'>~ $</p>
                      <p className='mt-1 text-cyan-300'>npx cc4pm install</p>
                      <p className='mt-4 text-slate-400'>cc4pm $</p>
                      <p className='mt-1 text-primary-light'>/cc4pm-guide</p>
                    </div>
                    <div className='mt-5 grid grid-cols-3 gap-2'>
                      {['26 节课程', '5 个阶段', '200+ Skills'].map(item => (
                        <span
                          key={item}
                          className='rounded-xl bg-bg-tertiary px-2 py-3 text-center text-xs font-semibold text-text-secondary'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className='p-7 sm:p-10 lg:p-12'>
                <div className='flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-ink'>
                  <span className='flex size-9 items-center justify-center rounded-xl bg-primary/10'>
                    <Braces size={18} aria-hidden='true' />
                  </span>
                  AI Speeds Product 02
                </div>
                <h3 className='mt-7 font-editorial text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl'>
                  {cc4pm.title}
                </h3>
                <p className='mt-5 text-lg leading-8 text-text-secondary'>
                  不只学会写 Prompt，而是学会指挥 AI 代理，把研究、决策和交付连接成完整产品工作流。
                </p>
                <CapabilityList items={cc4pmCapabilities} />
                <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
                  <a
                    href={SITE_LINKS.cc4pmGithub}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-text-primary px-5 text-sm font-semibold text-text-inverse transition hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                  >
                    查看 cc4pm
                    <ArrowUpRight size={16} aria-hidden='true' />
                  </a>
                  <Link
                    href={getStarted.href}
                    className='inline-flex min-h-12 items-center justify-center rounded-xl border border-floating-border bg-white px-5 text-sm font-semibold text-text-primary transition hover:border-primary hover:bg-bg-warm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2'
                  >
                    配置 Claude Code
                  </Link>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
