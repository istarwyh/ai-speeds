/**
 * API 类型定义
 */
export type Provider = 'openrouter' | 'deepseek' | 'openai' | 'kimi' | 'siliconflow' | 'nvidia-nim';

export interface ModelMapping {
  [key: string]: string;
}

export interface ProviderConfig {
  defaultBaseUrl: string;
  modelMappings: ModelMapping;
  commonModels?: readonly string[];
}
