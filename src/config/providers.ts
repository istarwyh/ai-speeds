export interface ProviderConfig {
  envVars: Record<string, string>;
  notes?: string;
}

export interface Provider {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  color: string;
  description: string;
  isDirectlyUsable: boolean;
  proxyUrl?: string;
  originalUrl: string;
  aliasCommand?: string;
  apiKeyUrl: string;
  features: string[];
  specialConfig?: ProviderConfig;
}

export const DEFAULT_PROVIDER_ID = 'nvidia-nim';

export const providers: Provider[] = [
  {
    id: 'nvidia-nim',
    name: 'NVIDIA NIM',
    displayName: 'NVIDIA NIM (default)',
    icon: 'NV',
    color: 'from-[#76B900] to-[#1A1A1A]',
    description: 'Project default provider powered by NVIDIA NIM for high-performance AI inference with MiniMax M2.1.',
    isDirectlyUsable: true,
    proxyUrl: 'https://aispeeds.me',
    originalUrl: 'https://integrate.api.nvidia.com/v1',
    aliasCommand: 'alias claude="ANTHROPIC_API_KEY=nvapi-xxxxxx ANTHROPIC_BASE_URL=https://aispeeds.me claude"',
    apiKeyUrl: 'https://build.nvidia.com/',
    features: ['Default provider', 'No extra deployment', 'NVIDIA inference', 'MiniMax M2.1 model'],
    specialConfig: {
      envVars: {
        ANTHROPIC_API_KEY: 'nvapi-xxxxxx',
        ANTHROPIC_BASE_URL: 'https://aispeeds.me',
      },
      notes: 'Replace ANTHROPIC_API_KEY with your NVIDIA NIM API key.',
    },
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    displayName: 'Anthropic official',
    icon: 'AN',
    color: 'from-[#5436DA] to-[#7B61FF]',
    description: 'Official Claude API with first-party Claude model access and no proxy layer.',
    isDirectlyUsable: true,
    originalUrl: 'https://api.anthropic.com',
    apiKeyUrl: 'https://claude.ai',
    features: ['Official API', 'No proxy required', 'Stable access'],
    specialConfig: {
      envVars: {
        ANTHROPIC_API_KEY: 'sk-ant-your-key',
      },
      notes: 'Use this when your Claude Code account and billing are already available.',
    },
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    displayName: 'DeepSeek',
    icon: 'DS',
    color: 'from-blue-600 to-cyan-500',
    description: 'High-performance reasoning models with strong cost efficiency for coding and analysis tasks.',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.deepseek.com/anthropic',
    originalUrl: 'https://api.deepseek.com',
    aliasCommand:
      'alias deepseek="ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic ANTHROPIC_MODEL=deepseek-chat claude"',
    apiKeyUrl: 'https://platform.deepseek.com',
    features: ['Strong reasoning', 'Cost efficient', 'Fast responses'],
  },
  {
    id: 'anyrouter',
    name: 'AnyRouter',
    displayName: 'AnyRouter',
    icon: 'AR',
    color: 'from-purple-600 to-pink-500',
    description: 'Model proxy service with direct Claude Code-compatible access and trial credits for new users.',
    isDirectlyUsable: true,
    proxyUrl: 'https://anyrouter.top',
    originalUrl: 'https://anyrouter.top',
    aliasCommand: 'alias anyrouter="ANTHROPIC_AUTH_TOKEN=sk-xxxxxx ANTHROPIC_BASE_URL=https://anyrouter.top claude"',
    apiKeyUrl: 'https://anyrouter.top/console/token?aff=4Ly0',
    features: ['$100 trial credits', 'Multiple models', 'Easy setup'],
    specialConfig: {
      envVars: {
        ANTHROPIC_AUTH_TOKEN: 'sk-xxxxxx',
        ANTHROPIC_BASE_URL: 'https://anyrouter.top',
      },
      notes: 'Register first, then create a token in the console.',
    },
  },
  {
    id: 'kimi',
    name: 'Kimi',
    displayName: 'Kimi (Moonshot AI)',
    icon: 'KM',
    color: 'from-slate-700 to-blue-500',
    description: 'Chinese AI models with multilingual capability and long-context support.',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.moonshot.cn/anthropic',
    originalUrl: 'https://api.moonshot.cn/v1',
    aliasCommand:
      'alias kimi="ANTHROPIC_AUTH_TOKEN=sk-xxxxxx ANTHROPIC_BASE_URL=https://api.moonshot.cn/anthropic claude"',
    apiKeyUrl: 'https://platform.moonshot.cn',
    features: ['Chinese models', 'Multilingual support', 'Long context'],
  },
  {
    id: 'siliconflow',
    name: 'SiliconFlow',
    displayName: 'SiliconFlow',
    icon: 'SF',
    color: 'from-emerald-600 to-teal-500',
    description: 'Chinese AI infrastructure platform with access to domestic and international models.',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.siliconflow.cn/',
    originalUrl: 'https://api.siliconflow.cn/v1',
    aliasCommand:
      'alias siliconflow="ANTHROPIC_BASE_URL=https://api.siliconflow.cn/ ANTHROPIC_API_KEY=sk-your-siliconflow-key ANTHROPIC_MODEL=Pro/moonshotai/Kimi-K2-Instruct claude"',
    apiKeyUrl: 'https://siliconflow.cn',
    features: ['Chinese platform', 'Multiple models', 'Domestic and international'],
    specialConfig: {
      envVars: {
        ANTHROPIC_BASE_URL: 'https://api.siliconflow.cn/',
        ANTHROPIC_API_KEY: 'sk-your-siliconflow-key',
        ANTHROPIC_MODEL: 'Pro/moonshotai/Kimi-K2-Instruct',
      },
      notes: 'This provider uses ANTHROPIC_API_KEY instead of ANTHROPIC_AUTH_TOKEN.',
    },
  },
  {
    id: 'qwen3-coder',
    name: 'Qwen3-Coder',
    displayName: 'Qwen3-Coder',
    icon: 'Q3C',
    color: 'from-orange-500 to-amber-500',
    description: 'Alibaba Cloud coding model with strong programming capability and Chinese support.',
    isDirectlyUsable: true,
    proxyUrl: 'https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy',
    originalUrl: 'https://dashscope.aliyuncs.com/api/v1',
    aliasCommand:
      'alias qwen3-coder="ANTHROPIC_BASE_URL=https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy ANTHROPIC_AUTH_TOKEN=your-dashscope-apikey claude"',
    apiKeyUrl: 'https://dashscope.console.aliyun.com',
    features: ['Programming focused', 'Chinese support', 'Alibaba ecosystem'],
    specialConfig: {
      envVars: {
        ANTHROPIC_BASE_URL: 'https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy',
        ANTHROPIC_AUTH_TOKEN: 'your-dashscope-apikey',
      },
      notes: 'Check pricing before heavy use.',
    },
  },
  {
    id: 'aicodewith',
    name: 'AICodeWith',
    displayName: 'AICodeWith',
    icon: 'ACW',
    color: 'from-indigo-600 to-violet-500',
    description: 'AI coding assistant platform with Claude Code API access and trial credits.',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.aicodewith.com',
    originalUrl: 'https://api.aicodewith.com',
    aliasCommand: 'alias aicodewith="ANTHROPIC_AUTH_TOKEN=xxx ANTHROPIC_BASE_URL=https://api.aicodewith.com claude"',
    apiKeyUrl: 'https://aicodewith.com/?invitation=VI84XXSW',
    features: ['Trial credits', 'Direct API access', 'No deployment needed'],
    specialConfig: {
      envVars: {
        ANTHROPIC_AUTH_TOKEN: 'xxx',
        ANTHROPIC_BASE_URL: 'https://api.aicodewith.com',
      },
      notes: 'Create an account and replace the token placeholder before use.',
    },
  },
  {
    id: 'claude-code',
    name: 'Claude-Code',
    displayName: 'Claude-Code',
    icon: 'CC',
    color: 'from-[#FF6B35] to-[#F7931E]',
    description: 'Claude Code API service with stable access, trial credits, and hosted compatibility endpoints.',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.claude-code.top/api/claudecode',
    originalUrl: 'https://api.claude-code.top',
    aliasCommand:
      'alias cc-cc="ANTHROPIC_AUTH_TOKEN=xxx ANTHROPIC_API_KEY=xxx ANTHROPIC_BASE_URL=https://api.claude-code.top/api/claudecode claude"',
    apiKeyUrl: 'https://www.claude-code.top/register?inviteCode=5GTISY',
    features: ['Trial credits', 'Hosted service', 'Stable access', 'Claude Code focused'],
    specialConfig: {
      envVars: {
        ANTHROPIC_AUTH_TOKEN: 'xxx',
        ANTHROPIC_API_KEY: 'xxx',
        ANTHROPIC_BASE_URL: 'https://api.claude-code.top/api/claudecode',
      },
      notes: 'Both auth token and API key placeholders are required by this service.',
    },
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    displayName: 'OpenRouter',
    icon: 'OR',
    color: 'from-red-500 to-pink-500',
    description: 'Access Claude, GPT, and open-source models through a single OpenAI-compatible API.',
    isDirectlyUsable: false,
    originalUrl: 'https://openrouter.ai/api/v1',
    apiKeyUrl: 'https://openrouter.ai',
    features: ['Multiple models', 'Single API', 'Open-source models'],
  },
  {
    id: 'openai',
    name: 'OpenAI',
    displayName: 'OpenAI',
    icon: 'AI',
    color: 'from-zinc-700 to-zinc-500',
    description: 'GPT models including GPT-4o and GPT-4o-mini through the OpenAI-compatible proxy path.',
    isDirectlyUsable: false,
    originalUrl: 'https://api.openai.com/v1',
    apiKeyUrl: 'https://platform.openai.com',
    features: ['GPT-4o models', 'Industry leading', 'Broad tooling support'],
  },
];

export function getProviderEnvVars(provider: Provider): Record<string, string> {
  if (provider.specialConfig && Object.keys(provider.specialConfig.envVars).length > 0) {
    return provider.specialConfig.envVars;
  }

  if (provider.proxyUrl) {
    return {
      ANTHROPIC_BASE_URL: provider.proxyUrl,
      ANTHROPIC_AUTH_TOKEN: 'your-api-key',
    };
  }

  return {
    ANTHROPIC_API_KEY: 'your-api-key',
  };
}

export function getProviderEnvBlock(provider: Provider): string {
  return Object.entries(getProviderEnvVars(provider))
    .map(([key, value]) => `export ${key}="${value}"`)
    .join('\n');
}
