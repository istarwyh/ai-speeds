'use client';

import { useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import { DEFAULT_PROVIDER_ID, getProviderEnvBlock, providers, type Provider } from '@/config/providers';
import { UI_TEXTS } from '@/config/ui-texts';

const deployConfigs = [
  {
    id: 'openai',
    label: 'OpenAI 兼容接口',
    command: 'wrangler secret put OPENAI_COMPATIBLE_BASE_URL',
    value: 'https://api.openai.com/v1',
  },
  {
    id: 'openrouter',
    label: 'OpenRouter 聚合接口',
    command: 'wrangler secret put OPENROUTER_BASE_URL',
    value: 'https://openrouter.ai/api/v1',
  },
  {
    id: 'deepseek',
    label: 'DeepSeek 官方接口',
    command: 'wrangler secret put DEEPSEEK_BASE_URL',
    value: 'https://api.deepseek.com',
  },
];

const quickFacts = [
  { label: 'Node.js', value: '版本 ≥ 18.0' },
  { label: '默认推荐', value: 'NVIDIA NIM + AI Speeds' },
  { label: '需要私有', value: '部署到 Cloudflare Workers' },
];

const workflow = ['安装 Node.js', '安装 Claude Code', '选择服务商并拿到 API Key', '复制环境变量后运行 claude'];

const nodeInstallCommands = {
  linux: `# Ubuntu / Debian 用户
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo bash -
sudo apt-get install -y nodejs
node --version`,
  macos: `# macOS 用户
sudo xcode-select --install
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
brew install node
node --version`,
};

const colors: Record<string, string> = {
  amber: '#f59e0b',
  blue: '#2563eb',
  cyan: '#06b6d4',
  emerald: '#059669',
  indigo: '#4f46e5',
  orange: '#f97316',
  pink: '#ec4899',
  purple: '#9333ea',
  red: '#ef4444',
  slate: '#334155',
  teal: '#14b8a6',
  violet: '#8b5cf6',
  zinc: '#3f3f46',
};

const displayFont: CSSProperties = {
  fontFamily: ['Songti SC', 'Noto Serif CJK SC', 'Source Han Serif SC', 'serif'].join(', '),
};

function resolveColor(token: string): string {
  if (token.startsWith('[#') && token.endsWith(']')) {
    return token.slice(1, -1);
  }

  const [name = 'cyan'] = token.split('-');
  return colors[name] ?? '#06b6d4';
}

function providerStyle(provider: Provider): CSSProperties {
  const [from = 'cyan-500', to = 'blue-600'] = provider.color.replace('from-', '').split(' to-');
  return { background: `linear-gradient(135deg, ${resolveColor(from)}, ${resolveColor(to)})` };
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const copyText = () => {
    void navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    });
  };

  return (
    <button
      type='button'
      onClick={copyText}
      className='rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/80 transition hover:border-white/40 hover:bg-white/15 hover:text-white'
    >
      {copied ? '已复制' : UI_TEXTS.BUTTONS.COPY_COMMAND}
    </button>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className='mt-4 overflow-hidden rounded-3xl border border-slate-900/10 bg-slate-950 shadow-2xl shadow-slate-950/10'>
      <div className='flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-white/60'>
        <div className='flex items-center gap-2'>
          <span className='h-2.5 w-2.5 rounded-full bg-[#ff6b57]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#f6c85f]' />
          <span className='h-2.5 w-2.5 rounded-full bg-[#46d07d]' />
          <span className='ml-2 font-semibold tracking-wide'>终端</span>
        </div>
        <CopyButton text={code} />
      </div>
      <pre className='overflow-x-auto whitespace-pre-wrap p-5 text-sm leading-7 text-cyan-100'>
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ProviderCard({
  provider,
  selected,
  onSelect,
}: {
  provider: Provider;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      id={`provider-${provider.id}`}
      type='button'
      onClick={onSelect}
      className={`group relative overflow-hidden rounded-3xl border p-4 text-left transition duration-200 hover:-translate-y-1 hover:shadow-xl ${
        selected
          ? 'border-slate-950 bg-slate-950 text-white shadow-2xl shadow-slate-950/15'
          : 'border-slate-200/80 bg-white/80 text-slate-950 shadow-sm hover:border-slate-300 hover:bg-white'
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-1 ${selected ? 'opacity-100' : 'opacity-0 transition group-hover:opacity-100'}`}
        style={providerStyle(provider)}
      />
      <div className='flex items-center gap-3'>
        <span
          style={providerStyle(provider)}
          className='flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl text-sm font-black text-white shadow-lg'
        >
          {provider.icon}
        </span>
        <div className='min-w-0'>
          <h3 className={`truncate font-bold ${selected ? 'text-white' : 'text-slate-950'}`}>{provider.displayName}</h3>
          <p className={`text-xs ${selected ? 'text-white/60' : 'text-slate-500'}`}>
            {provider.isDirectlyUsable ? '可直接使用' : '需自部署代理'}
          </p>
        </div>
      </div>
      <p className={`mt-3 line-clamp-3 text-sm leading-6 ${selected ? 'text-white/70' : 'text-slate-600'}`}>
        {provider.description}
      </p>
    </button>
  );
}

function Card({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <div className='group relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-xl shadow-slate-900/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10'>
      <div className='absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#e57a5a]/10 transition group-hover:scale-125' />
      <div className='relative'>
        <div className='flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-sm font-black text-white shadow-lg shadow-slate-950/20'>
          {number}
        </div>
        <h2 className='mt-5 text-2xl font-black tracking-tight text-slate-950' style={displayFont}>
          {title}
        </h2>
        {children}
      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return <p className='text-xs font-black uppercase tracking-[0.32em] text-[#d4614a]'>{children}</p>;
}

export function GetStartedSection() {
  const [selectedProviderId, setSelectedProviderId] = useState(DEFAULT_PROVIDER_ID);
  const [expandedDeployId, setExpandedDeployId] = useState(deployConfigs[0]?.id ?? '');
  const selectedProvider = providers.find(provider => provider.id === selectedProviderId) ?? providers[0];
  const envBlock = useMemo(() => (selectedProvider ? getProviderEnvBlock(selectedProvider) : ''), [selectedProvider]);

  if (!selectedProvider) {
    return null;
  }

  return (
    <section
      id='get-started'
      className='relative min-h-screen overflow-hidden bg-[#f7f0e6] px-4 py-10 text-slate-950 sm:px-6 lg:px-10'
    >
      <div aria-hidden className='pointer-events-none absolute inset-0 overflow-hidden'>
        <div className='absolute left-[-12rem] top-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#e57a5a]/20 blur-3xl' />
        <div className='absolute right-[-10rem] top-24 h-[28rem] w-[28rem] rounded-full bg-cyan-300/25 blur-3xl' />
        <div className='absolute bottom-[-14rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-amber-200/30 blur-3xl' />
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.09)_1px,transparent_0)] bg-[length:28px_28px] opacity-40' />
      </div>

      <div className='relative mx-auto max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-stretch'>
          <div className='rounded-[2.5rem] border border-white/70 bg-white/70 p-6 shadow-2xl shadow-slate-900/5 backdrop-blur sm:p-8 lg:p-10'>
            <SectionLabel>{UI_TEXTS.MODULE_TITLES['get-started']}</SectionLabel>
            <h1
              className='mt-5 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-6xl'
              style={displayFont}
            >
              把 Claude Code 接到你想用的模型。
            </h1>
            <p className='mt-5 max-w-2xl text-lg leading-8 text-slate-600'>
              先安装 CLI，再选择服务商，复制环境变量即可开跑。需要私有路由时，再部署 AI Speeds。
            </p>
            <div className='mt-8 grid gap-3 sm:grid-cols-3'>
              {quickFacts.map(item => (
                <div key={item.label} className='rounded-3xl border border-slate-200/80 bg-white/80 p-4 shadow-sm'>
                  <p className='text-xs font-bold tracking-wide text-slate-500'>{item.label}</p>
                  <p className='mt-2 text-sm font-black leading-6 text-slate-950'>{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className='relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/20 sm:p-8'>
            <div className='absolute -right-16 -top-16 h-44 w-44 rounded-full bg-cyan-400/25 blur-2xl' />
            <div className='absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-[#e57a5a]/30 blur-2xl' />
            <div className='relative'>
              <SectionLabel>推荐流程</SectionLabel>
              <h2 className='mt-4 text-3xl font-black tracking-tight' style={displayFont}>
                四步完成接入
              </h2>
              <div className='mt-8 space-y-4'>
                {workflow.map((item, index) => (
                  <div key={item} className='flex gap-4 rounded-3xl border border-white/10 bg-white/[0.06] p-4'>
                    <span className='flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-slate-950'>
                      {index + 1}
                    </span>
                    <p className='text-sm font-semibold leading-7 text-white/85'>{item}</p>
                  </div>
                ))}
              </div>
              <div className='mt-8 rounded-3xl border border-white/10 bg-white/[0.06] p-4'>
                <p className='text-xs font-semibold uppercase tracking-[0.28em] text-white/45'>当前选择</p>
                <p className='mt-2 text-xl font-black'>{selectedProvider.displayName}</p>
                <p className='mt-2 text-sm leading-6 text-white/60'>{selectedProvider.description}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 grid items-start gap-6 lg:grid-cols-[0.92fr_1.08fr]'>
          <div className='space-y-6'>
            <Card number='01' title='安装 Node.js（已安装可跳过）'>
              <p className='mt-3 leading-7 text-slate-600'>确保 Node.js 版本 ≥ 18.0，然后再安装 Claude Code。</p>
              <div className='mt-5 grid gap-4 xl:grid-cols-2'>
                <div>
                  <p className='text-sm font-black text-slate-950'>Ubuntu / Debian 用户</p>
                  <CodeBlock code={nodeInstallCommands.linux} />
                </div>
                <div>
                  <p className='text-sm font-black text-slate-950'>macOS 用户</p>
                  <CodeBlock code={nodeInstallCommands.macos} />
                </div>
              </div>
            </Card>

            <Card number='02' title='安装 Claude Code'>
              <p className='mt-3 leading-7 text-slate-600'>
                安装官方 CLI。也可以使用桌面端或 IDE 插件，按你的开发习惯选择即可。
              </p>
              <CodeBlock code='npm install -g @anthropic-ai/claude-code' />
              <a
                href='https://claude.ai/code'
                target='_blank'
                rel='noreferrer'
                className='mt-5 inline-flex rounded-full bg-slate-950 px-4 py-2 text-sm font-bold text-white transition hover:bg-[#d4614a]'
              >
                打开 Claude Code 下载页
              </a>
            </Card>

            <div className='relative overflow-hidden rounded-[2rem] border border-slate-200/80 bg-white/85 p-6 shadow-xl shadow-slate-900/5 backdrop-blur'>
              <div className='absolute right-0 top-0 h-28 w-28 rounded-bl-[4rem] bg-[#e57a5a]/10' />
              <div className='relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
                <div>
                  <SectionLabel>服务商详情</SectionLabel>
                  <h3 className='mt-3 text-3xl font-black text-slate-950' style={displayFont}>
                    {selectedProvider.displayName}
                  </h3>
                  <p className='mt-3 max-w-3xl leading-7 text-slate-600'>{selectedProvider.description}</p>
                </div>
                <a
                  href={selectedProvider.apiKeyUrl}
                  target='_blank'
                  rel='noreferrer'
                  className='shrink-0 rounded-full bg-[#e57a5a] px-5 py-3 text-sm font-black text-slate-950 shadow-lg shadow-[#e57a5a]/25 transition hover:-translate-y-0.5 hover:bg-[#d4614a]'
                >
                  获取 API Key
                </a>
              </div>

              {selectedProvider.aliasCommand ? (
                <div className='relative mt-6'>
                  <p className='text-sm font-black text-slate-950'>一行别名命令</p>
                  <CodeBlock code={selectedProvider.aliasCommand} />
                </div>
              ) : null}

              {!selectedProvider.isDirectlyUsable ? (
                <div className='relative mt-6 rounded-3xl border border-amber-300 bg-amber-50 p-4 text-sm leading-7 text-amber-950'>
                  这个服务商需要先部署自己的 AI Speeds 代理。参考下方部署步骤，并写入对应的 Base URL。
                </div>
              ) : null}

              {selectedProvider.specialConfig?.notes ? (
                <div className='relative mt-6 rounded-3xl border border-slate-200/80 bg-slate-50 p-4 text-sm leading-7 text-slate-600'>
                  {selectedProvider.specialConfig.notes}
                </div>
              ) : null}

              <div className='relative mt-6 flex flex-wrap gap-2'>
                {selectedProvider.features.map(feature => (
                  <span
                    key={feature}
                    className='rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-bold text-slate-600'
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            <Card number='05' title='自部署 AI Speeds'>
              <p className='mt-3 leading-7 text-slate-600'>
                如果你想保留私有路由、统一模型入口，部署到 Cloudflare Workers 即可。
              </p>
              <CodeBlock code={'git clone https://github.com/istarwyh/ai-speeds\ncd ai-speeds\npnpm install'} />
              <div className='mt-5 overflow-hidden rounded-3xl border border-slate-200 bg-white'>
                {deployConfigs.map(config => (
                  <div key={config.id} className='border-b border-slate-200 last:border-b-0'>
                    <button
                      type='button'
                      onClick={() => setExpandedDeployId(expandedDeployId === config.id ? '' : config.id)}
                      className='flex w-full items-center justify-between px-4 py-4 text-left text-sm font-black text-slate-950 transition hover:bg-slate-50'
                    >
                      {config.label}
                      <span className='text-lg'>{expandedDeployId === config.id ? '−' : '+'}</span>
                    </button>
                    {expandedDeployId === config.id ? (
                      <div className='px-4 pb-4'>
                        <CodeBlock code={config.command} />
                        <p className='mt-3 text-sm text-slate-500'>输入：{config.value}</p>
                      </div>
                    ) : null}
                  </div>
                ))}
              </div>
              <CodeBlock code='pnpm run cf:deploy' />
            </Card>
          </div>

          <div className='space-y-6'>
            <Card number='03' title='选择服务商'>
              <p className='mt-3 leading-7 text-slate-600'>点选一个服务商，下方会自动生成对应的环境变量和注意事项。</p>
              <div className='mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3'>
                {providers.map(provider => (
                  <ProviderCard
                    key={provider.id}
                    provider={provider}
                    selected={provider.id === selectedProvider.id}
                    onSelect={() => setSelectedProviderId(provider.id)}
                  />
                ))}
              </div>
            </Card>

            <Card number='04' title='配置环境变量'>
              <p className='mt-3 leading-7 text-slate-600'>
                把下面内容加入你的 shell 配置，重新加载后运行 Claude Code。
              </p>
              <CodeBlock code={envBlock} />
              <CodeBlock code={'source ~/.zshrc  # bash 用户改为 source ~/.bashrc\nclaude'} />
            </Card>

            <Card number='06' title='需要帮助'>
              <p className='mt-3 leading-7 text-slate-600'>如果你卡在密钥、模型映射或部署环节，可以直接联系。</p>
              <div className='mt-6 space-y-3 text-sm text-slate-600'>
                <a
                  href='mailto:talk@xiaohui.cool'
                  className='block rounded-3xl border border-slate-200 bg-white p-4 font-semibold transition hover:border-[#e57a5a] hover:text-slate-950'
                >
                  邮箱：talk@xiaohui.cool
                </a>
                <div className='rounded-3xl border border-slate-200 bg-white p-4 font-semibold'>微信：istarwyh</div>
                <a
                  href='https://github.com/istarwyh/ai-speeds'
                  target='_blank'
                  rel='noreferrer'
                  className='block rounded-3xl border border-slate-200 bg-white p-4 font-semibold transition hover:border-[#e57a5a] hover:text-slate-950'
                >
                  GitHub 仓库
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
