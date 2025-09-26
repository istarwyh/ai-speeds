export interface Provider {
  id: string;
  name: string;
  displayName: string;
  icon: string;
  color?: string; // 可选的自定义颜色，支持任何CSS颜色值
  description: string;
  isDirectlyUsable: boolean;
  proxyUrl?: string;
  originalUrl: string;
  aliasCommand?: string;
  apiKeyUrl: string;
  features: string[];
  specialConfig?: {
    envVars: Record<string, string>;
    notes?: string;
  };
}

export const providers: Provider[] = [
  {
    id: 'anthropic',
    name: 'Anthropic',
    displayName: 'Anthropic (官方)',
    icon: 'AN',
    color: 'linear-gradient(45deg, #5436DA, #7B61FF)',
    description: '官方Claude API，无需代理，但需要解决中国大陆账号充值问题。',
    isDirectlyUsable: true,
    originalUrl: 'https://api.anthropic.com',
    apiKeyUrl: 'https://claude.ai',
    features: ['官方API', '无需代理', '稳定可靠'],
    specialConfig: {
      envVars: {},
      notes:
        '🔄 中国大陆充值方法：<br>1. 弄个美区Apple ID下载Claude Code<br>2. 支付宝定位切到旧金山，使用小程序PockytShop买20刀的苹果礼品卡<br>3. 用礼品卡去苹果App Store充值<br>4. 在Claude Code中完成订阅',
    },
  },
  {
    id: 'deepseek',
    name: 'DeepSeek',
    displayName: 'DeepSeek',
    icon: 'DS',
    description: 'High-performance reasoning models with excellent cost efficiency. Perfect for complex coding tasks.',
    isDirectlyUsable: true,
    proxyUrl: 'https://cc.xiaohui.cool',
    originalUrl: 'https://api.deepseek.com',
    aliasCommand: 'alias deepseek="ANTHROPIC_AUTH_TOKEN=sk-xxxxxx ANTHROPIC_BASE_URL=https://cc.xiaohui.cool claude"',
    apiKeyUrl: 'https://platform.deepseek.com',
    features: ['High reasoning capability', 'Cost efficient', 'Fast response'],
  },
  {
    id: 'anyrouter',
    name: 'AnyRouter',
    displayName: 'AnyRouter',
    icon: 'AR',
    description:
      'Model proxy service - Provides access to Claude and other models. Click to register and get $100 free credits!',
    isDirectlyUsable: true,
    proxyUrl: 'https://anyrouter.top',
    originalUrl: 'https://anyrouter.top',
    aliasCommand: 'alias anyrouter="ANTHROPIC_AUTH_TOKEN=sk-xxxxxx ANTHROPIC_BASE_URL=https://anyrouter.top claude"',
    apiKeyUrl: 'https://anyrouter.top/console/token?aff=4Ly0',
    features: ['$100 free credits', 'Multiple models', 'Easy setup'],
    specialConfig: {
      envVars: {},
      notes: '🎁 Register to get $100 free credits',
    },
  },
  {
    id: 'kimi',
    name: 'Kimi',
    displayName: 'Kimi (Moonshot AI)',
    icon: 'KM',
    description: 'Advanced Chinese AI models with strong multilingual capabilities and long context support.',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.moonshot.cn/anthropic',
    originalUrl: 'https://api.moonshot.cn/v1',
    aliasCommand:
      'alias kimi="ANTHROPIC_AUTH_TOKEN=sk-xxxxxx ANTHROPIC_BASE_URL=https://api.moonshot.cn/anthropic claude"',
    apiKeyUrl: 'https://platform.moonshot.cn',
    features: ['Chinese AI models', 'Multilingual support', 'Long context'],
  },
  {
    id: 'siliconflow',
    name: 'SiliconFlow',
    displayName: 'SiliconFlow',
    icon: 'SF',
    description: 'Chinese AI infrastructure platform providing access to various domestic and international models.',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.siliconflow.cn/',
    originalUrl: 'https://api.siliconflow.cn/v1',
    aliasCommand:
      'alias siliconflow="ANTHROPIC_BASE_URL=https://api.siliconflow.cn/ ANTHROPIC_API_KEY=sk-your-siliconflow-key ANTHROPIC_MODEL=Pro/moonshotai/Kimi-K2-Instruct claude"',
    apiKeyUrl: 'https://siliconflow.cn',
    features: ['Chinese platform', 'Multiple models', 'Domestic & international'],
    specialConfig: {
      envVars: {
        ANTHROPIC_BASE_URL: 'https://api.siliconflow.cn/',
        ANTHROPIC_API_KEY: 'sk-your-siliconflow-key',
        ANTHROPIC_MODEL: 'Pro/moonshotai/Kimi-K2-Instruct',
      },
      notes: 'Uses special environment variable format',
    },
  },
  {
    id: 'qwen3-coder',
    name: 'Qwen3-Coder',
    displayName: 'Qwen3-Coder',
    icon: 'Q3C',
    description:
      'Advanced coding model from Alibaba Cloud with strong programming capabilities and Chinese language support.',
    isDirectlyUsable: true,
    proxyUrl: 'https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy',
    originalUrl: 'https://dashscope.aliyuncs.com/api/v1',
    aliasCommand:
      'alias qwen3-coder="ANTHROPIC_BASE_URL=https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy ANTHROPIC_AUTH_TOKEN=your-dashscope-apikey claude"',
    apiKeyUrl: 'https://dashscope.console.aliyun.com',
    features: ['Programming focused', 'Chinese language support', 'Alibaba OpenSource'],
    specialConfig: {
      envVars: {
        ANTHROPIC_BASE_URL: 'https://dashscope.aliyuncs.com/api/v2/apps/claude-code-proxy',
        ANTHROPIC_AUTH_TOKEN: 'your-dashscope-apikey',
      },
      notes: 'Qwen3-Coder may be expensive according to some feedbacks',
    },
  },
  {
    id: 'aicodewith',
    name: 'AICodeWith',
    displayName: 'AICodeWith',
    icon: 'ACW',
    description:
      'AI coding assistant platform providing direct Claude Code API access. Get 2000 free credits upon registration!',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.aicodewith.com',
    originalUrl: 'https://api.aicodewith.com',
    aliasCommand:
      'alias aicodewith="ANTHROPIC_AUTH_TOKEN=xxx ANTHROPIC_BASE_URL=https://api.aicodewith.com claude --dangerously-skip-permissions"',
    apiKeyUrl: 'https://aicodewith.com/?invitation=VI84XXSW',
    features: ['2000 free credits', 'Direct API access', 'No deployment needed'],
    specialConfig: {
      envVars: {
        ANTHROPIC_AUTH_TOKEN: 'xxx',
        ANTHROPIC_BASE_URL: 'https://api.aicodewith.com',
      },
      notes: '🎁 Get 2000 free credits (~10 conversations) upon registration',
    },
  },
  {
    id: 'claude-code',
    name: 'Claude-Code',
    displayName: 'Claude-Code',
    icon: 'CC',
    color: 'linear-gradient(45deg, #FF6B35, #F7931E)',
    description:
      'Professional Claude Code API service with stable access and excellent performance. Get 4000 free credits (~20 conversations) upon registration!',
    isDirectlyUsable: true,
    proxyUrl: 'https://api.claude-code.top/api/claudecode',
    originalUrl: 'https://api.claude-code.top',
    aliasCommand:
      'alias cc-cc="ANTHROPIC_AUTH_TOKEN=xxx ANTHROPIC_API_KEY=xxx ANTHROPIC_BASE_URL=https://api.claude-code.top/api/claudecode claude --dangerously-skip-permissions"',
    apiKeyUrl: 'https://www.claude-code.top/register?inviteCode=5GTISY',
    features: ['4000 free credits', 'Professional service', 'Stable access', 'Premium experience'],
    specialConfig: {
      envVars: {
        ANTHROPIC_AUTH_TOKEN: 'xxx',
        ANTHROPIC_API_KEY: 'xxx',
        ANTHROPIC_BASE_URL: 'https://api.claude-code.top/api/claudecode',
      },
      notes:
        '🎁 Get **6000** free credits (~30 conversations) upon registration with invitation code <strong>5GTISY</strong>, which gives you an additional **2000** credits. ',
    },
  },
  {
    id: 'openrouter',
    name: 'OpenRouter',
    displayName: 'OpenRouter',
    icon: 'OR',
    description: 'Access to multiple AI models through a single API, including Claude, GPT, and open-source models.',
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
    description: 'Industry-leading GPT models including GPT-4o and GPT-4o-mini for diverse AI applications.',
    isDirectlyUsable: false,
    originalUrl: 'https://api.openai.com/v1',
    apiKeyUrl: 'https://platform.openai.com',
    features: ['GPT-4o models', 'Industry leading', 'Diverse applications'],
  },
];
