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
    displayName: 'NVIDIA NIM（默认）',
    icon: 'NV',
    color: 'from-[#76B900] to-[#1A1A1A]',
    description: '项目默认线路，基于 NVIDIA NIM 提供 MiniMax M2.1 推理能力，适合快速上手。',
    isDirectlyUsable: true,
    proxyUrl: 'https://aispeeds.me',
    originalUrl: 'https://integrate.api.nvidia.com/v1',
    aliasCommand: 'alias claude="ANTHROPIC_API_KEY=nvapi-xxxxxx ANTHROPIC_BASE_URL=https://aispeeds.me claude"',
    apiKeyUrl: 'https://build.nvidia.com/',
    features: ['默认推荐', '无需自部署', 'NVIDIA 推理', 'MiniMax M2.1'],
    specialConfig: {
      envVars: {
        ANTHROPIC_API_KEY: 'nvapi-xxxxxx',
        ANTHROPIC_BASE_URL: 'https://aispeeds.me',
      },
      notes: '把 ANTHROPIC_API_KEY 替换为你的 NVIDIA NIM API Key。',
    },
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    displayName: 'Anthropic 官方',
    icon: 'AN',
    color: 'from-[#5436DA] to-[#7B61FF]',
    description: '官方 Claude API，无需代理，适合已经开通 Claude API 计费的用户。',
    isDirectlyUsable: true,
    originalUrl: 'https://api.anthropic.com',
    apiKeyUrl: 'https://claude.ai',
    features: ['官方接口', '无需代理', '稳定接入'],
    specialConfig: {
      envVars: {
        ANTHROPIC_API_KEY: 'sk-ant-xxxxxx',
      },
      notes: '如果你的账号已经能使用 Claude API，优先选择这条线路。',
    },
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    displayName: 'DeepSeek',
    icon: 'DS',
    color: 'from-blue-600 to-cyan-500',
    description: '推理和代码能力强，成本友好，适合日常编码、分析和批量任务。',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.deepseek.com/anthropic',
    originalUrl: 'https://api.deepseek.com',
    aliasCommand:
      'alias deepseek="ANTHROPIC_BASE_URL=https://api.deepseek.com/anthropic ANTHROPIC_MODEL=deepseek-chat claude"',
    apiKeyUrl: 'https://platform.deepseek.com',
    features: ['推理能力强', '成本友好', '响应较快'],
  },
  {
    id: 'anyrouter',
    name: 'AnyRouter',
    displayName: 'AnyRouter',
    icon: 'AR',
    color: 'from-purple-600 to-pink-500',
    description: '模型代理服务，提供兼容 Claude Code 的入口，新用户可领取试用额度。',
    isDirectlyUsable: true,
    proxyUrl: 'https://anyrouter.top',
    originalUrl: 'https://anyrouter.top',
    aliasCommand: 'alias anyrouter="ANTHROPIC_AUTH_TOKEN=sk-xxxxxx ANTHROPIC_BASE_URL=https://anyrouter.top claude"',
    apiKeyUrl: 'https://anyrouter.top/console/token?aff=4Ly0',
    features: ['试用额度', '多模型可选', '配置简单'],
    specialConfig: {
      envVars: {
        ANTHROPIC_AUTH_TOKEN: 'sk-xxxxxx',
        ANTHROPIC_BASE_URL: 'https://anyrouter.top',
      },
      notes: '先注册账号，再到控制台创建 Token。',
    },
  },
  {
    id: 'kimi',
    name: 'Kimi',
    displayName: 'Kimi（月之暗面）',
    icon: 'KM',
    color: 'from-slate-700 to-blue-500',
    description: '中文体验好，支持长上下文，适合中文代码说明、文档整理和复杂阅读。',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.moonshot.cn/anthropic',
    originalUrl: 'https://api.moonshot.cn/v1',
    aliasCommand:
      'alias kimi="ANTHROPIC_AUTH_TOKEN=sk-xxxxxx ANTHROPIC_BASE_URL=https://api.moonshot.cn/anthropic claude"',
    apiKeyUrl: 'https://platform.moonshot.cn',
    features: ['中文友好', '多语言支持', '长上下文'],
  },
  {
    id: 'siliconflow',
    name: 'SiliconFlow',
    displayName: 'SiliconFlow',
    icon: 'SF',
    color: 'from-emerald-600 to-teal-500',
    description: '国内 AI 基础设施平台，可接入多种国产和海外开源模型。',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.siliconflow.cn/',
    originalUrl: 'https://api.siliconflow.cn/v1',
    aliasCommand:
      'alias siliconflow="ANTHROPIC_BASE_URL=https://api.siliconflow.cn/ ANTHROPIC_API_KEY=sk-siliconflow-xxxxxx ANTHROPIC_MODEL=Pro/moonshotai/Kimi-K2-Instruct claude"',
    apiKeyUrl: 'https://siliconflow.cn',
    features: ['国内平台', '模型丰富', '中英文场景'],
    specialConfig: {
      envVars: {
        ANTHROPIC_BASE_URL: 'https://api.siliconflow.cn/',
        ANTHROPIC_API_KEY: 'sk-siliconflow-xxxxxx',
        ANTHROPIC_MODEL: 'Pro/moonshotai/Kimi-K2-Instruct',
      },
      notes: '这条线路使用 ANTHROPIC_API_KEY，而不是 ANTHROPIC_AUTH_TOKEN。',
    },
  },
  {
    id: 'qwen3-coder',
    name: 'Qwen3-Coder',
    displayName: 'Qwen3-Coder',
    icon: 'Q3C',
    color: 'from-orange-500 to-amber-500',
    description: '阿里云代码模型，编程能力强，对中文开发场景支持较好。',
    isDirectlyUsable: true,
    proxyUrl: 'https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy',
    originalUrl: 'https://dashscope.aliyuncs.com/api/v1',
    aliasCommand:
      'alias qwen3-coder="ANTHROPIC_BASE_URL=https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy ANTHROPIC_AUTH_TOKEN=sk-dashscope-xxxxxx claude"',
    apiKeyUrl: 'https://dashscope.console.aliyun.com',
    features: ['专注编程', '中文友好', '阿里生态'],
    specialConfig: {
      envVars: {
        ANTHROPIC_BASE_URL: 'https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy',
        ANTHROPIC_AUTH_TOKEN: 'sk-dashscope-xxxxxx',
      },
      notes: '重度使用前建议先确认计费规则。',
    },
  },
  {
    id: 'aicodewith',
    name: 'AICodeWith',
    displayName: 'AICodeWith',
    icon: 'ACW',
    color: 'from-indigo-600 to-violet-500',
    description: '面向 AI 编程的服务平台，提供 Claude Code API 入口和试用额度。',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.aicodewith.com',
    originalUrl: 'https://api.aicodewith.com',
    aliasCommand:
      'alias aicodewith="ANTHROPIC_AUTH_TOKEN=sk-xxxxxx ANTHROPIC_BASE_URL=https://api.aicodewith.com claude"',
    apiKeyUrl: 'https://aicodewith.com/?invitation=VI84XXSW',
    features: ['试用额度', '直接接入', '无需部署'],
    specialConfig: {
      envVars: {
        ANTHROPIC_AUTH_TOKEN: 'sk-xxxxxx',
        ANTHROPIC_BASE_URL: 'https://api.aicodewith.com',
      },
      notes: '创建账号后，把占位 Token 替换为真实值。',
    },
  },
  {
    id: 'claude-code',
    name: 'Claude-Code',
    displayName: 'Claude-Code',
    icon: 'CC',
    color: 'from-[#FF6B35] to-[#F7931E]',
    description: '面向 Claude Code 的托管兼容服务，提供稳定接入和试用额度。',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.claude-code.top/api/claudecode',
    originalUrl: 'https://api.claude-code.top',
    aliasCommand:
      'alias cc-cc="ANTHROPIC_AUTH_TOKEN=sk-xxxxxx ANTHROPIC_API_KEY=sk-xxxxxx ANTHROPIC_BASE_URL=https://api.claude-code.top/api/claudecode claude"',
    apiKeyUrl: 'https://www.claude-code.top/register?inviteCode=5GTISY',
    features: ['试用额度', '托管服务', '接入稳定', '专注 Claude Code'],
    specialConfig: {
      envVars: {
        ANTHROPIC_AUTH_TOKEN: 'sk-xxxxxx',
        ANTHROPIC_API_KEY: 'sk-xxxxxx',
        ANTHROPIC_BASE_URL: 'https://api.claude-code.top/api/claudecode',
      },
      notes: '这个服务需要同时填写 auth token 和 API key。',
    },
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    displayName: 'OpenRouter',
    icon: 'OR',
    color: 'from-red-500 to-pink-500',
    description: '通过一个 OpenAI 兼容接口访问 Claude、GPT 和开源模型。',
    isDirectlyUsable: false,
    originalUrl: 'https://openrouter.ai/api/v1',
    apiKeyUrl: 'https://openrouter.ai',
    features: ['多模型聚合', '统一接口', '开源模型'],
  },
  {
    id: 'openai',
    name: 'OpenAI',
    displayName: 'OpenAI',
    icon: 'AI',
    color: 'from-zinc-700 to-zinc-500',
    description: '通过 AI Speeds 的兼容代理接入 GPT 系列模型。',
    isDirectlyUsable: false,
    originalUrl: 'https://api.openai.com/v1',
    apiKeyUrl: 'https://platform.openai.com',
    features: ['GPT 模型', '工具生态广', '兼容性好'],
  },
];

export function getProviderEnvVars(provider: Provider): Record<string, string> {
  if (provider.specialConfig && Object.keys(provider.specialConfig.envVars).length > 0) {
    return provider.specialConfig.envVars;
  }

  if (provider.proxyUrl) {
    return {
      ANTHROPIC_BASE_URL: provider.proxyUrl,
      ANTHROPIC_AUTH_TOKEN: 'sk-xxxxxx',
    };
  }

  return {
    ANTHROPIC_API_KEY: 'sk-xxxxxx',
  };
}

export function getProviderEnvBlock(provider: Provider): string {
  return Object.entries(getProviderEnvVars(provider))
    .map(([key, value]) => `export ${key}="${value}"`)
    .join('\n');
}
