import { ModelMapping } from './types';

/**
 * 供应商配置
 */
export const PROVIDER_CONFIGS = {
  'nvidia-nim': {
    defaultBaseUrl: 'https://integrate.api.nvidia.com/v1',
    modelMappings: {
      // Claude 4.5 系列模型映射
      'claude-haiku-4-5-20251001': 'moonshotai/kimi-k2.5',
      'claude-sonnet-4-5-20250929': 'moonshotai/kimi-k2.5',
      'claude-opus-4-5-20251101': 'moonshotai/kimi-k2.5',
      // 旧版本模型兼容
      'claude-3-5-haiku-20241022': 'moonshotai/kimi-k2.5',
      'claude-3-5-sonnet-20241022': 'moonshotai/kimi-k2.5',
      'claude-3-opus-20240229': 'moonshotai/kimi-k2.5',
      // 别名映射
      haiku: 'moonshotai/kimi-k2.5',
      sonnet: 'moonshotai/kimi-k2.5',
      opus: 'moonshotai/kimi-k2.5',
    } as ModelMapping,
    commonModels: ['moonshotai/kimi-k2.5'],
  },
  openrouter: {
    defaultBaseUrl: 'https://openrouter.ai/api/v1',
    modelMappings: {
      // Claude 4.5 系列
      'claude-haiku-4-5-20251001': 'anthropic/claude-3.5-haiku',
      'claude-sonnet-4-5-20250929': 'anthropic/claude-3.5-sonnet',
      'claude-opus-4-5-20251101': 'anthropic/claude-3-opus',
      // 旧版本兼容
      'claude-3-5-haiku-20241022': 'anthropic/claude-3.5-haiku',
      'claude-3-5-sonnet-20241022': 'anthropic/claude-3.5-sonnet',
      'claude-3-opus-20240229': 'anthropic/claude-3-opus',
      // 别名
      haiku: 'anthropic/claude-3.5-haiku',
      sonnet: 'anthropic/claude-3.5-sonnet',
      opus: 'anthropic/claude-3-opus',
    } as ModelMapping,
  },
  deepseek: {
    defaultBaseUrl: 'https://aispeeds.me',
    modelMappings: {
      // Claude 4.5 系列
      'claude-haiku-4-5-20251001': 'deepseek-chat',
      'claude-sonnet-4-5-20250929': 'deepseek-chat',
      'claude-opus-4-5-20251101': 'deepseek-reasoner',
      // 旧版本兼容
      'claude-3-5-haiku-20241022': 'deepseek-chat',
      'claude-3-5-sonnet-20241022': 'deepseek-chat',
      'claude-3-opus-20240229': 'deepseek-reasoner',
      // 别名
      haiku: 'deepseek-chat',
      sonnet: 'deepseek-chat',
      opus: 'deepseek-reasoner',
    } as ModelMapping,
    commonModels: ['deepseek-chat', 'deepseek-reason'],
  },
  openai: {
    defaultBaseUrl: 'https://api.openai.com/v1',
    modelMappings: {
      // Claude 4.5 系列
      'claude-haiku-4-5-20251001': 'gpt-4o-mini',
      'claude-sonnet-4-5-20250929': 'gpt-4o',
      'claude-opus-4-5-20251101': 'gpt-4o',
      // 旧版本兼容
      'claude-3-5-haiku-20241022': 'gpt-4o-mini',
      'claude-3-5-sonnet-20241022': 'gpt-4o',
      'claude-3-opus-20240229': 'gpt-4o',
      // 别名
      haiku: 'gpt-4o-mini',
      sonnet: 'gpt-4o',
      opus: 'gpt-4o',
    } as ModelMapping,
    commonModels: ['gpt-4o', 'gpt-4o-mini', 'gpt-3.5-turbo'],
  },
  kimi: {
    defaultBaseUrl: 'https://api.moonshot.cn/v1',
    modelMappings: {
      'claude-3-5-haiku-20241022': 'moonshot-v1-8k',
      'claude-3-5-sonnet-20241022': 'moonshot-v1-32k',
      'claude-3-opus-20240229': 'moonshot-v1-128k',
      haiku: 'moonshot-v1-8k',
      sonnet: 'moonshot-v1-32k',
      opus: 'moonshot-v1-128k',
    } as ModelMapping,
    commonModels: ['moonshot-v1-8k', 'moonshot-v1-32k', 'moonshot-v1-128k'],
  },
  siliconflow: {
    defaultBaseUrl: 'https://api.siliconflow.cn/v1',
    modelMappings: {
      'claude-3-5-haiku-20241022': 'Qwen/Qwen2.5-7B-Instruct',
      'claude-3-5-sonnet-20241022': 'Qwen/Qwen2.5-14B-Instruct',
      'claude-3-opus-20240229': 'Qwen/Qwen2.5-72B-Instruct',
      haiku: 'Qwen/Qwen2.5-7B-Instruct',
      sonnet: 'Qwen/Qwen2.5-14B-Instruct',
      opus: 'Qwen/Qwen2.5-72B-Instruct',
    } as ModelMapping,
    commonModels: ['Qwen/Qwen2.5-7B-Instruct', 'Qwen/Qwen2.5-14B-Instruct'],
  },
} as const;
