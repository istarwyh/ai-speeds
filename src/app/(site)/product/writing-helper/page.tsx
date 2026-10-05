import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight, BookOpenText, Check, Clock3, Code2, FileText, GitFork, Keyboard, PenLine } from 'lucide-react';
import { SITE_LINKS } from '@/config/site-links';

const capabilities = [
  {
    icon: BookOpenText,
    title: '词语搭配与词组补全',
    description: '写作时直接获得 Word Collocation 和常用词组建议，减少在编辑器与查询工具之间切换。',
  },
  {
    icon: FileText,
    title: '写作计数留在状态栏',
    description: '在 VS Code 左下角查看英文字符数和全文字符数，也可以设置自己的目标数量。',
  },
  {
    icon: Clock3,
    title: '记录这次写了多久',
    description: 'Windows 使用 Alt + Q，macOS 使用 Option + Q，随时查看当前写作页面已经打开多久。',
  },
] as const;

const supportedDocuments = ['Markdown', '纯文本', 'LaTeX', 'TeX'] as const;

export const metadata: Metadata = {
  title: 'writingHelper：VS Code 英文写作助手 | AI Speeds',
  description: '在 VS Code 中获得英文词语搭配和词组补全建议，同时查看写作计数与用时。',
  alternates: {
    canonical: '/product/writing-helper',
  },
  openGraph: {
    title: 'writingHelper：VS Code 英文写作助手',
    description: '把英文词语搭配建议、写作计数与计时放进 VS Code。',
    url: '/product/writing-helper',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'writingHelper：VS Code 英文写作助手',
    description: '把英文词语搭配建议、写作计数与计时放进 VS Code。',
  },
};

export default function WritingHelperPage() {
  return (
    <main className='overflow-hidden bg-bg-warm'>
      <section className='relative border-b border-border-light py-16 sm:py-20 lg:py-28'>
        <div
          className='pointer-events-none absolute inset-0 opacity-60'
          aria-hidden='true'
          style={{
            background:
              'radial-gradient(circle at 82% 18%, color-mix(in srgb, var(--color-primary) 16%, transparent), transparent 30%), radial-gradient(circle at 12% 72%, color-mix(in srgb, var(--color-accent) 10%, transparent), transparent 28%)',
          }}
        />
        <div className='relative mx-auto grid max-w-site items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(22rem,0.92fr)] lg:px-8'>
          <div>
            <div className='inline-flex min-h-9 items-center gap-2 rounded-pill border border-floating-border bg-floating-surface px-4 text-sm font-semibold text-text-secondary shadow-floating backdrop-blur-floating'>
              <Code2 size={16} className='text-primary-ink' aria-hidden='true' />
              VS Code Extension
            </div>
            <h1 className='mt-7 max-w-3xl text-balance font-editorial text-5xl font-semibold leading-[1.04] tracking-tight text-text-primary sm:text-6xl lg:text-7xl'>
              写英文时，不必在词典和编辑器之间来回切。
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-text-secondary sm:text-xl'>
              writingHelper 把英文词语搭配和词组补全放进 VS Code，也帮你记录写了多少、写了多久。
              打开文档，就可以留在熟悉的编辑器里继续写。
            </p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <a
                href={SITE_LINKS.writingHelperMarketplace}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-press'
              >
                在 VS Code Marketplace 安装
                <ArrowUpRight size={17} aria-hidden='true' />
              </a>
              <a
                href={SITE_LINKS.writingHelperGithub}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-floating-border bg-floating-surface px-6 text-sm font-semibold text-text-primary shadow-floating backdrop-blur-floating transition hover:-translate-y-0.5 hover:border-primary hover:bg-floating-surface-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-press'
              >
                <GitFork size={17} aria-hidden='true' />
                查看源代码
              </a>
            </div>
            <dl className='mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-border-light pt-6'>
              <div>
                <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-text-muted'>Marketplace</dt>
                <dd className='mt-2 text-2xl font-semibold tracking-tight text-text-primary'>17k+</dd>
                <dd className='mt-1 text-sm text-text-secondary'>累计安装</dd>
              </div>
              <div>
                <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-text-muted'>Version</dt>
                <dd className='mt-2 text-2xl font-semibold tracking-tight text-text-primary'>0.1.8</dd>
                <dd className='mt-1 text-sm text-text-secondary'>公开版本</dd>
              </div>
              <div>
                <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-text-muted'>License</dt>
                <dd className='mt-2 text-2xl font-semibold tracking-tight text-text-primary'>GPLv2</dd>
                <dd className='mt-1 text-sm text-text-secondary'>开放源码</dd>
              </div>
            </dl>
          </div>

          <div className='relative mx-auto w-full max-w-lg'>
            <div className='absolute -inset-4 -rotate-2 rounded-[2.75rem] bg-primary/10' aria-hidden='true' />
            <div className='relative overflow-hidden rounded-[2.5rem] border border-floating-border bg-floating-surface-strong p-6 shadow-2xl shadow-slate-900/10 backdrop-blur-floating sm:p-8'>
              <div className='flex items-center justify-between gap-4 border-b border-border-light pb-5'>
                <div>
                  <p className='text-sm font-semibold text-primary-ink'>writingHelper</p>
                  <p className='mt-1 text-sm text-text-secondary'>English writing, inside VS Code</p>
                </div>
                <span className='rounded-pill bg-success/10 px-3 py-1 text-xs font-semibold text-success-foreground'>
                  VS Code
                </span>
              </div>
              <div className='grid items-center gap-5 py-8 sm:grid-cols-[10rem_1fr]'>
                <Image
                  src='/images/products/writing-helper/icon.png'
                  alt='writingHelper 的写字猫图标'
                  width={320}
                  height={320}
                  priority
                  className='mx-auto size-40 object-contain'
                />
                <div>
                  <p className='font-editorial text-3xl font-semibold leading-tight text-text-primary'>
                    从一句话开始，少打断一次思路。
                  </p>
                  <p className='mt-3 text-sm leading-6 text-text-secondary'>
                    搭配建议、目标计数和写作时间都在编辑器里，不必另外打开一套写作界面。
                  </p>
                </div>
              </div>
              <div className='rounded-2xl bg-slate-950 p-5 font-mono text-sm leading-7 text-slate-200'>
                <p>
                  <span className='text-slate-500'>01</span> Life skills are very important...
                </p>
                <p className='mt-1 text-cyan-300'>↳ collocation suggestions appear as you write</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-bg-primary py-20 sm:py-24' aria-labelledby='demo-title'>
        <div className='mx-auto max-w-site px-4 sm:px-6 lg:px-8'>
          <div className='grid items-end gap-6 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>真实插件演示</p>
              <h2
                id='demo-title'
                className='mt-4 text-balance font-editorial text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl'
              >
                建议出现在你正在写的那一行。
              </h2>
            </div>
            <p className='max-w-2xl text-lg leading-8 text-text-secondary lg:justify-self-end'>
              在 Markdown、纯文本或 LaTeX 文档中继续正常输入。writingHelper 使用 VS Code
              的补全体验显示词语搭配候选，不需要把文章复制到另一个网页。
            </p>
          </div>
          <div className='mt-10 overflow-hidden rounded-[2rem] border border-border-light bg-slate-950 p-2 shadow-2xl shadow-slate-950/15 sm:p-3'>
            <Image
              src='/images/products/writing-helper/demo.gif'
              alt='writingHelper 在 VS Code 中提供英文词语搭配补全的演示'
              width={844}
              height={373}
              unoptimized
              className='h-auto w-full rounded-[1.45rem]'
            />
          </div>
          <p className='mt-4 text-sm text-text-muted'>演示素材来自 writingHelper 公开项目 README。</p>
        </div>
      </section>

      <section
        className='border-y border-border-light bg-bg-secondary py-20 sm:py-24'
        aria-labelledby='capabilities-title'
      >
        <div className='mx-auto max-w-site px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>三个写作现场</p>
            <h2
              id='capabilities-title'
              className='mt-4 text-balance font-editorial text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl'
            >
              不替你写，帮你把写作过程接顺。
            </h2>
          </div>
          <div className='mt-12 grid gap-5 md:grid-cols-3'>
            {capabilities.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className='rounded-[2rem] border border-floating-border bg-floating-surface p-7 shadow-floating backdrop-blur-floating'
              >
                <span className='flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary-ink'>
                  <Icon size={22} aria-hidden='true' />
                </span>
                <h3 className='mt-6 text-xl font-semibold tracking-tight text-text-primary'>{title}</h3>
                <p className='mt-3 leading-7 text-text-secondary'>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-bg-primary py-20 sm:py-24' aria-labelledby='start-title'>
        <div className='mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(24rem,1.05fr)] lg:px-8'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>开始使用</p>
            <h2
              id='start-title'
              className='mt-4 text-balance font-editorial text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl'
            >
              安装以后，直接打开一份英文文档。
            </h2>
            <p className='mt-5 text-lg leading-8 text-text-secondary'>
              当前公开扩展是桌面版 VS Code 的 workspace extension。它不是网页编辑器，也没有独立的浏览器运行版本。
            </p>
            <div className='mt-8 rounded-2xl border border-border-light bg-bg-secondary p-5'>
              <div className='flex items-center gap-3 text-sm font-semibold text-text-primary'>
                <Keyboard size={18} className='text-primary-ink' aria-hidden='true' />
                也可以从命令行安装
              </div>
              <code className='mt-4 block overflow-x-auto rounded-xl bg-slate-950 px-4 py-3 text-sm text-cyan-200'>
                code --install-extension istarwyh.writinghelper
              </code>
            </div>
          </div>

          <div className='space-y-4'>
            {[
              ['01', '安装扩展', '打开 Marketplace 页面，在 VS Code 中安装发布者 istarwyh 的 writingHelper。'],
              ['02', '打开支持的文档', '在 Markdown、纯文本、LaTeX 或 TeX 文件中开始英文写作。'],
              ['03', '照常输入', '在补全列表中选择合适的词语搭配，同时在状态栏关注计数和目标。'],
            ].map(([number, title, description]) => (
              <div
                key={number}
                className='grid grid-cols-[3.5rem_1fr] gap-4 rounded-2xl border border-border-light bg-bg-warm p-5 sm:p-6'
              >
                <span className='font-editorial text-3xl font-semibold text-primary-ink'>{number}</span>
                <div>
                  <h3 className='text-lg font-semibold text-text-primary'>{title}</h3>
                  <p className='mt-2 leading-7 text-text-secondary'>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className='bg-slate-950 py-20 text-white sm:py-24'>
        <div className='mx-auto grid max-w-site items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-8'>
          <div>
            <div className='flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300'>
              <PenLine size={17} aria-hidden='true' />
              Ready to write
            </div>
            <h2 className='mt-5 max-w-3xl text-balance font-editorial text-4xl font-semibold tracking-tight sm:text-5xl'>
              下一篇英文稿，留在 VS Code 里写完。
            </h2>
            <ul className='mt-7 flex flex-wrap gap-3'>
              {supportedDocuments.map(document => (
                <li
                  key={document}
                  className='inline-flex items-center gap-2 rounded-pill bg-white/5 px-4 py-2 text-sm text-slate-200'
                >
                  <Check size={15} className='text-cyan-300' aria-hidden='true' />
                  {document}
                </li>
              ))}
            </ul>
          </div>
          <a
            href={SITE_LINKS.writingHelperMarketplace}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-press'
          >
            打开 Marketplace
            <ArrowUpRight size={17} aria-hidden='true' />
          </a>
        </div>
      </section>
    </main>
  );
}
