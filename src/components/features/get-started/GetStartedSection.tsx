'use client';

import { useMemo, useState, type CSSProperties, type ReactNode } from 'react';
import { DEFAULT_PROVIDER_ID, getProviderEnvBlock, providers, type Provider } from '@/config/providers';
import { UI_TEXTS } from '@/config/ui-texts';

const deployConfigs = [
  {
    id: 'openai',
    label: 'OpenAI-compatible',
    command: 'wrangler secret put OPENAI_COMPATIBLE_BASE_URL',
    value: 'https://api.openai.com/v1',
  },
  {
    id: 'openrouter',
    label: 'OpenRouter',
    command: 'wrangler secret put OPENROUTER_BASE_URL',
    value: 'https://openrouter.ai/api/v1',
  },
  {
    id: 'deepseek',
    label: 'DeepSeek',
    command: 'wrangler secret put DEEPSEEK_BASE_URL',
    value: 'https://api.deepseek.com',
  },
];

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
      className='rounded-lg border border-border-medium bg-bg-primary px-3 py-1.5 text-xs font-semibold text-text-secondary transition hover:border-primary hover:text-text-primary'
    >
      {copied ? 'Copied' : UI_TEXTS.BUTTONS.COPY_COMMAND}
    </button>
  );
}

function CodeBlock({ code }: { code: string }) {
  return (
    <div className='mt-4 overflow-hidden rounded-2xl border border-border-dark bg-text-primary shadow-inner shadow-black/20'>
      <div className='flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-text-inverse'>
        <span>Terminal</span>
        <CopyButton text={code} />
      </div>
      <pre className='overflow-x-auto whitespace-pre-wrap p-4 text-sm leading-6 text-teal-400'>
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
      className={`group rounded-2xl border p-4 text-left shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
        selected ? 'border-primary bg-bg-warm' : 'border-border-light bg-bg-primary hover:border-border-medium'
      }`}
    >
      <div className='flex items-center gap-3'>
        <span
          style={providerStyle(provider)}
          className='flex h-11 w-11 items-center justify-center rounded-xl text-sm font-black text-white shadow-lg'
        >
          {provider.icon}
        </span>
        <div>
          <h3 className='font-semibold text-text-primary'>{provider.displayName}</h3>
          <p className='text-xs text-text-muted'>{provider.isDirectlyUsable ? 'Ready to use' : 'Self-host proxy'}</p>
        </div>
      </div>
      <p className='mt-3 line-clamp-3 text-sm leading-6 text-text-secondary'>{provider.description}</p>
    </button>
  );
}

function Card({ number, title, children }: { number: string; title: string; children: ReactNode }) {
  return (
    <div className='rounded-3xl border border-border-light bg-bg-primary p-6 shadow-lg'>
      <div className='flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-black text-accent-foreground'>
        {number}
      </div>
      <h2 className='mt-4 text-2xl font-bold text-text-primary'>{title}</h2>
      {children}
    </div>
  );
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
    <section id='get-started' className='min-h-screen bg-bg-secondary px-4 py-16 text-text-primary sm:px-6 lg:px-10'>
      <div className='mx-auto max-w-7xl'>
        <div className='max-w-3xl'>
          <p className='text-sm font-semibold uppercase tracking-[0.3em] text-primary-dark'>
            {UI_TEXTS.MODULE_TITLES['get-started']}
          </p>
          <h1 className='mt-4 text-4xl font-black tracking-tight text-text-primary sm:text-5xl'>
            Run Claude Code with your provider.
          </h1>
          <p className='mt-5 text-lg leading-8 text-text-secondary'>{UI_TEXTS.MODULE_DESCRIPTIONS['get-started']}</p>
        </div>

        <div className='mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]'>
          <Card number='1' title='Install Claude Code'>
            <p className='mt-3 text-text-secondary'>
              Install the official Anthropic CLI or use desktop and IDE integrations.
            </p>
            <CodeBlock code='npm install -g @anthropic-ai/claude-code' />
            <a
              href='https://claude.ai/code'
              target='_blank'
              rel='noreferrer'
              className='mt-4 inline-flex text-sm font-semibold text-primary-dark hover:text-primary'
            >
              Open Claude Code download page
            </a>
          </Card>

          <Card number='2' title='Choose Provider'>
            <p className='mt-3 text-text-secondary'>
              Select a provider to see setup details and environment variables.
            </p>
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
        </div>

        <div className='mt-6 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]'>
          <div className='rounded-3xl border border-border-light bg-bg-primary p-6 shadow-xl'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between'>
              <div>
                <p className='text-sm font-semibold uppercase tracking-[0.3em] text-primary-dark'>Provider detail</p>
                <h3 className='mt-2 text-2xl font-bold text-text-primary'>{selectedProvider.displayName}</h3>
                <p className='mt-3 max-w-3xl text-text-secondary'>{selectedProvider.description}</p>
              </div>
              <a
                href={selectedProvider.apiKeyUrl}
                target='_blank'
                rel='noreferrer'
                className='rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary-dark'
              >
                Get API key
              </a>
            </div>

            {selectedProvider.aliasCommand ? (
              <div className='mt-6'>
                <p className='text-sm font-semibold text-text-primary'>Quick alias command</p>
                <CodeBlock code={selectedProvider.aliasCommand} />
              </div>
            ) : null}

            {!selectedProvider.isDirectlyUsable ? (
              <div className='mt-6 rounded-2xl border border-warning bg-bg-warm p-4 text-sm text-text-primary'>
                This provider needs your own deployed AI Speeds proxy. Use the deployment guide below and set the
                matching base URL.
              </div>
            ) : null}

            {selectedProvider.specialConfig?.notes ? (
              <div className='mt-6 rounded-2xl border border-border-light bg-bg-secondary p-4 text-sm text-text-secondary'>
                {selectedProvider.specialConfig.notes}
              </div>
            ) : null}

            <div className='mt-6 flex flex-wrap gap-2'>
              {selectedProvider.features.map(feature => (
                <span
                  key={feature}
                  className='rounded-full border border-border-light bg-bg-secondary px-3 py-1 text-xs font-medium text-text-secondary'
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          <Card number='3' title='Configure Environment'>
            <p className='mt-3 text-text-secondary'>Add these exports to your shell config, then reload the shell.</p>
            <CodeBlock code={envBlock} />
            <CodeBlock code={'source ~/.zshrc  # or source ~/.bashrc\nclaude'} />
          </Card>
        </div>

        <div className='mt-6 grid gap-6 lg:grid-cols-2'>
          <Card number='4' title='Deploy Your Own'>
            <p className='mt-3 text-text-secondary'>
              Self-host AI Speeds on Cloudflare Workers when you want private routing and full control.
            </p>
            <CodeBlock code={'git clone https://github.com/istarwyh/ai-speeds\ncd ai-speeds\npnpm install'} />
            <div className='mt-5 divide-y divide-border-light rounded-2xl border border-border-light'>
              {deployConfigs.map(config => (
                <div key={config.id}>
                  <button
                    type='button'
                    onClick={() => setExpandedDeployId(expandedDeployId === config.id ? '' : config.id)}
                    className='flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-text-primary'
                  >
                    {config.label}
                    <span>{expandedDeployId === config.id ? '−' : '+'}</span>
                  </button>
                  {expandedDeployId === config.id ? (
                    <div className='px-4 pb-4'>
                      <CodeBlock code={config.command} />
                      <p className='mt-2 text-sm text-text-muted'>Enter: {config.value}</p>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <CodeBlock code='pnpm run cf:deploy' />
          </Card>

          <Card number='5' title='Need Help?'>
            <p className='mt-3 text-text-secondary'>
              Questions about Claude Code routing, provider setup, or deployment are welcome.
            </p>
            <div className='mt-6 space-y-3 text-sm text-text-secondary'>
              <a
                href='mailto:talk@xiaohui.cool'
                className='block rounded-2xl border border-border-light bg-bg-secondary p-4 hover:border-primary'
              >
                Email: talk@xiaohui.cool
              </a>
              <div className='rounded-2xl border border-border-light bg-bg-secondary p-4'>WeChat: istarwyh</div>
              <a
                href='https://github.com/istarwyh/ai-speeds'
                target='_blank'
                rel='noreferrer'
                className='block rounded-2xl border border-border-light bg-bg-secondary p-4 hover:border-primary'
              >
                GitHub repository
              </a>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
