import type { Metadata } from 'next';
import Image from 'next/image';
import {
  ArrowRight,
  ArrowUpRight,
  BookOpenCheck,
  Boxes,
  Check,
  Code2,
  Database,
  GitFork,
  Network,
  Search,
  Terminal,
  Wrench,
} from 'lucide-react';
import { SITE_LINKS } from '@/config/site-links';

const mcpTools = [
  {
    icon: Search,
    name: 'recommend-mcp-servers',
    title: '先理解任务，再推荐工具',
    description: '接收任务描述、关键词和能力要求，组合可用搜索来源，返回更接近真实需求的 MCP Server 候选。',
  },
  {
    icon: Wrench,
    name: 'install-mcp-server',
    title: '把安装说明变成具体步骤',
    description: '读取目标项目与公开说明，生成安装步骤和客户端配置指南；它提供指引，不会直接修改你的系统。',
  },
] as const;

const providers = ['Meilisearch', 'Compass', 'GetMCP', 'Nacos（按配置）'] as const;
const transports = ['stdio', 'SSE', 'REST'] as const;

export const metadata: Metadata = {
  title: 'MCP Advisor：发现适合任务的 MCP Server | AI Speeds',
  description: '用自然语言发现并筛选适合任务的 MCP Server，再获得安装与客户端配置指引。',
  alternates: {
    canonical: '/product/mcp-advisor',
  },
  openGraph: {
    title: 'MCP Advisor：发现适合任务的 MCP Server',
    description: '从任务出发推荐 MCP Server，并为选定项目生成安装与客户端配置指引。',
    url: '/product/mcp-advisor',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'MCP Advisor：发现适合任务的 MCP Server',
    description: '从任务出发推荐 MCP Server，并为选定项目生成安装与客户端配置指引。',
  },
};

export default function McpAdvisorPage() {
  return (
    <main className='overflow-hidden bg-bg-primary'>
      <section className='relative overflow-hidden bg-slate-950 py-16 text-white sm:py-20 lg:py-28'>
        <div className='pointer-events-none absolute inset-0' aria-hidden='true'>
          <div className='absolute -right-24 top-10 size-80 rounded-full bg-cyan-300/10 blur-3xl' />
          <div className='absolute -bottom-32 left-1/4 size-96 rounded-full bg-primary/10 blur-3xl' />
        </div>
        <div className='relative mx-auto grid max-w-site items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(24rem,0.98fr)] lg:px-8'>
          <div>
            <div className='inline-flex min-h-9 items-center gap-2 rounded-pill border border-white/10 bg-white/5 px-4 text-sm font-semibold text-cyan-200'>
              <Network size={16} aria-hidden='true' />
              Model Context Protocol
            </div>
            <h1 className='mt-7 max-w-3xl text-balance font-editorial text-5xl font-semibold leading-[1.04] tracking-tight sm:text-6xl lg:text-7xl'>
              别在一长串 MCP 名字里碰运气。
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl'>
              MCP Advisor 先听懂你要完成的任务，再帮 AI 助手发现合适的 MCP Server。
              选定以后，它还会整理安装和客户端配置指引。
            </p>
            <div className='mt-8 flex flex-col gap-3 sm:flex-row'>
              <a
                href={SITE_LINKS.mcpAdvisorGettingStarted}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:-translate-y-0.5 hover:bg-primary-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-press'
              >
                查看快速开始
                <ArrowUpRight size={17} aria-hidden='true' />
              </a>
              <a
                href={SITE_LINKS.mcpAdvisorGithub}
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:scale-press'
              >
                <GitFork size={17} aria-hidden='true' />
                查看源代码
              </a>
            </div>
            <dl className='mt-10 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-6'>
              <div>
                <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-400'>MCP Tools</dt>
                <dd className='mt-2 text-2xl font-semibold tracking-tight'>2</dd>
                <dd className='mt-1 text-sm text-slate-400'>推荐与配置指引</dd>
              </div>
              <div>
                <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-400'>Transports</dt>
                <dd className='mt-2 text-2xl font-semibold tracking-tight'>3</dd>
                <dd className='mt-1 text-sm text-slate-400'>stdio / SSE / REST</dd>
              </div>
              <div>
                <dt className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-400'>npm</dt>
                <dd className='mt-2 text-2xl font-semibold tracking-tight'>1.0.7</dd>
                <dd className='mt-1 text-sm text-slate-400'>公开版本</dd>
              </div>
            </dl>
          </div>

          <div className='relative'>
            <div className='rounded-[2rem] border border-white/10 bg-slate-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur sm:p-7'>
              <div className='flex items-center justify-between gap-4 border-b border-white/10 pb-5'>
                <div className='flex items-center gap-3'>
                  <span className='flex size-10 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300'>
                    <Boxes size={20} aria-hidden='true' />
                  </span>
                  <div>
                    <p className='font-semibold'>MCP Advisor</p>
                    <p className='text-xs text-slate-400'>Task → Discovery → Guidance</p>
                  </div>
                </div>
                <span className='rounded-pill bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300'>
                  MCP Server
                </span>
              </div>

              <div className='mt-6 rounded-2xl border border-white/10 bg-slate-950 p-5'>
                <p className='text-xs font-semibold uppercase tracking-[0.16em] text-slate-500'>Your task</p>
                <p className='mt-3 text-base leading-7 text-slate-200'>为保险风险分析寻找合适的 MCP Server</p>
              </div>

              <div className='my-4 flex items-center justify-center text-cyan-300' aria-hidden='true'>
                <ArrowRight size={20} className='rotate-90' />
              </div>

              <div className='grid gap-3 sm:grid-cols-2'>
                <div className='rounded-2xl border border-cyan-300/20 bg-cyan-300/5 p-4'>
                  <Search size={18} className='text-cyan-300' aria-hidden='true' />
                  <p className='mt-3 font-mono text-sm text-cyan-100'>recommend-mcp-servers</p>
                  <p className='mt-2 text-xs leading-5 text-slate-400'>搜索并整理候选</p>
                </div>
                <div className='rounded-2xl border border-primary/30 bg-primary/5 p-4'>
                  <BookOpenCheck size={18} className='text-primary-light' aria-hidden='true' />
                  <p className='mt-3 font-mono text-sm text-orange-100'>install-mcp-server</p>
                  <p className='mt-2 text-xs leading-5 text-slate-400'>生成安装与配置指南</p>
                </div>
              </div>

              <div className='mt-4 flex items-start gap-3 rounded-xl bg-amber-300/10 px-4 py-3 text-sm leading-6 text-amber-100'>
                <Code2 size={17} className='mt-1 shrink-0' aria-hidden='true' />
                名字叫 install，但它提供的是操作指引，不会直接替你修改系统。
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='bg-bg-warm py-20 sm:py-24' aria-labelledby='tools-title'>
        <div className='mx-auto max-w-site px-4 sm:px-6 lg:px-8'>
          <div className='max-w-3xl'>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>两个 MCP 工具</p>
            <h2
              id='tools-title'
              className='mt-4 text-balance font-editorial text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl'
            >
              从“我要做什么”，走到“下一步怎么配置”。
            </h2>
            <p className='mt-5 text-lg leading-8 text-text-secondary'>
              它不是另一个 MCP 应用商店，而是运行在 AI 助手旁边的 MCP Server，把发现与配置过程变成可以调用的工具。
            </p>
          </div>

          <div className='mt-12 grid gap-6 lg:grid-cols-2'>
            {mcpTools.map(({ icon: Icon, name, title, description }) => (
              <article
                key={name}
                className='rounded-[2rem] border border-floating-border bg-floating-surface p-7 shadow-floating backdrop-blur-floating sm:p-8'
              >
                <span className='flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary-ink'>
                  <Icon size={22} aria-hidden='true' />
                </span>
                <p className='mt-6 font-mono text-sm font-semibold text-primary-ink'>{name}</p>
                <h3 className='mt-3 text-2xl font-semibold tracking-tight text-text-primary'>{title}</h3>
                <p className='mt-4 leading-7 text-text-secondary'>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className='border-y border-border-light bg-bg-primary py-20 sm:py-24' aria-labelledby='demo-title'>
        <div className='mx-auto grid max-w-site items-center gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.78fr)_minmax(28rem,1.22fr)] lg:px-8'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>公开项目演示</p>
            <h2
              id='demo-title'
              className='mt-4 text-balance font-editorial text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl'
            >
              AI 助手发起调用，你仍然看得见参数和下一步。
            </h2>
            <p className='mt-5 text-lg leading-8 text-text-secondary'>
              这张公开截图展示了 MCP Advisor 为 PromptX
              整理安装与客户端配置过程。执行任何实际修改前，仍应由用户检查来源和步骤。
            </p>
            <div className='mt-7 space-y-3'>
              {['任务和目标来源保持可见', '工具参数在调用前可以检查', '结果输出为后续操作提供步骤'].map(item => (
                <div key={item} className='flex items-start gap-3 text-sm leading-6 text-text-secondary sm:text-base'>
                  <span className='mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-ink'>
                    <Check size={13} strokeWidth={2.5} aria-hidden='true' />
                  </span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <figure className='overflow-hidden rounded-[2rem] border border-border-light bg-slate-950 p-2 shadow-2xl shadow-slate-950/15 sm:p-3'>
            <Image
              src='/images/products/mcp-advisor/discovery-result.png'
              alt='MCP Advisor 在 AI 助手中生成 PromptX 安装与客户端配置指引的公开演示'
              width={1000}
              height={998}
              className='h-auto w-full rounded-[1.45rem]'
            />
            <figcaption className='px-3 py-3 text-xs leading-5 text-slate-400'>
              截图来自 MCP Advisor 公开 README；界面与实际结果会随使用的 AI 客户端和数据来源变化。
            </figcaption>
          </figure>
        </div>
      </section>

      <section className='bg-bg-secondary py-20 sm:py-24' aria-labelledby='start-title'>
        <div className='mx-auto grid max-w-site gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(26rem,1.1fr)] lg:px-8'>
          <div>
            <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>本地开始</p>
            <h2
              id='start-title'
              className='mt-4 text-balance font-editorial text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl'
            >
              把它接到支持 MCP 的 AI 助手。
            </h2>
            <p className='mt-5 text-lg leading-8 text-text-secondary'>
              MCP Advisor 是 Node.js CLI 和 MCP Server，不是托管在网页里的 SaaS。默认通过 stdio 运行，也提供 SSE 与 REST
              方式供自托管集成。
            </p>
            <a
              href={SITE_LINKS.mcpAdvisorNpm}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-floating-border bg-floating-surface px-5 text-sm font-semibold text-text-primary shadow-floating transition hover:-translate-y-0.5 hover:border-primary hover:bg-floating-surface-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-press'
            >
              <Boxes size={17} aria-hidden='true' />
              查看 npm 包
              <ArrowUpRight size={16} aria-hidden='true' />
            </a>
          </div>

          <div className='overflow-hidden rounded-[2rem] border border-slate-800 bg-slate-950 shadow-2xl shadow-slate-950/15'>
            <div className='flex items-center gap-3 border-b border-slate-800 px-5 py-4 text-sm text-slate-300'>
              <Terminal size={17} className='text-cyan-300' aria-hidden='true' />
              Claude Desktop MCP configuration
            </div>
            <pre className='overflow-x-auto p-5 text-sm leading-7 text-slate-200 sm:p-7'>
              <code>{`{
  "mcpServers": {
    "mcpadvisor": {
      "command": "npx",
      "args": [
        "-y",
        "@xiaohui-wang/mcpadvisor"
      ]
    }
  }
}`}</code>
            </pre>
            <div className='border-t border-slate-800 px-5 py-4 text-xs leading-5 text-slate-400 sm:px-7'>
              npm 包名是 @xiaohui-wang/mcpadvisor；安装前请以仓库快速开始文档为准。
            </div>
          </div>
        </div>
      </section>

      <section className='bg-bg-primary py-20 sm:py-24' aria-labelledby='architecture-title'>
        <div className='mx-auto max-w-site px-4 sm:px-6 lg:px-8'>
          <div className='grid gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.2em] text-primary-ink'>组合式搜索</p>
              <h2
                id='architecture-title'
                className='mt-4 text-balance font-editorial text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl'
              >
                结果来自配置好的来源，不来自一句神秘的承诺。
              </h2>
              <p className='mt-5 text-lg leading-8 text-text-secondary'>
                搜索服务可以聚合多个来源并整理候选。来源是否可用、结果是否最新，取决于本地配置和外部服务状态。
              </p>
            </div>

            <div className='grid gap-4 sm:grid-cols-2'>
              <div className='rounded-[2rem] border border-border-light bg-bg-warm p-6'>
                <Database size={22} className='text-primary-ink' aria-hidden='true' />
                <h3 className='mt-5 text-lg font-semibold text-text-primary'>可组合的搜索来源</h3>
                <ul className='mt-4 flex flex-wrap gap-2'>
                  {providers.map(provider => (
                    <li
                      key={provider}
                      className='rounded-pill border border-border-light bg-white px-3 py-1.5 text-sm text-text-secondary'
                    >
                      {provider}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='rounded-[2rem] border border-border-light bg-bg-warm p-6'>
                <Network size={22} className='text-primary-ink' aria-hidden='true' />
                <h3 className='mt-5 text-lg font-semibold text-text-primary'>三种运行连接方式</h3>
                <ul className='mt-4 flex flex-wrap gap-2'>
                  {transports.map(transport => (
                    <li
                      key={transport}
                      className='rounded-pill border border-border-light bg-white px-3 py-1.5 font-mono text-sm text-text-secondary'
                    >
                      {transport}
                    </li>
                  ))}
                </ul>
              </div>
              <div className='rounded-[2rem] border border-amber-200 bg-amber-50 p-6 sm:col-span-2'>
                <div className='flex items-start gap-3'>
                  <BookOpenCheck size={22} className='mt-1 shrink-0 text-amber-800' aria-hidden='true' />
                  <div>
                    <h3 className='text-lg font-semibold text-slate-900'>推荐不是安全认证</h3>
                    <p className='mt-2 leading-7 text-slate-700'>
                      候选 MCP Server 来自外部目录和项目资料。安装前仍需核对源码、权限、运行命令和数据处理方式。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='border-t border-border-light bg-bg-warm py-20 sm:py-24'>
        <div className='mx-auto grid max-w-site items-center gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:px-8'>
          <div>
            <p className='flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-primary-ink'>
              <Code2 size={17} aria-hidden='true' />
              Open source · repository declares MIT
            </p>
            <h2 className='mt-5 max-w-3xl text-balance font-editorial text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl'>
              下一次找 MCP，先把任务说清楚。
            </h2>
          </div>
          <a
            href={SITE_LINKS.mcpAdvisorGithub}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-slate-950 px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-press'
          >
            打开 GitHub 仓库
            <ArrowUpRight size={17} aria-hidden='true' />
          </a>
        </div>
      </section>
    </main>
  );
}
