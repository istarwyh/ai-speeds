# NVIDIA NIM Provider 集成方案

## 概述

本文档详细描述了将 NVIDIA NIM 作为新 provider 集成到 Claude Code
Router 项目的技术方案。

### 需求背景

- **接口地址**: `https://integrate.api.nvidia.com/v1`
- **协议兼容性**: NVIDIA NIM 兼容 OpenAI API 格式
- **默认模型**: `minimaxai/minimax-m2.1`
- **特殊要求**: 设为项目默认部署即提供转发能力的 provider

### 用户使用方式

```bash
alias claude="ANTHROPIC_API_KEY=nvapi-xxxxxx ANTHROPIC_BASE_URL=https://aispeeds.me claude"
```

## 方案设计

### 1. 架构设计

```
┌─────────────────────────────────────────────────────────────┐
│                    Claude Code Client                        │
│                  (Anthropic Protocol)                        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│              Claude Code Router (aispeeds.me)               │
│                                                             │
│  ┌─────────────────┐    ┌──────────────────────────────┐   │
│  │ selectProvider()│───▶│ 默认选择 NVIDIA NIM         │   │
│  └─────────────────┘    │ (无需环境变量配置)           │   │
│                         └──────────────────────────────┘   │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │          Format Conversion Layer                      │   │
│  │  Anthropic Request ──▶ OpenAI Request                │   │
│  │  OpenAI Response   ──▶ Anthropic Response            │   │
│  └─────────────────────────────────────────────────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
┌─────────────────────────────────────────────────────────────┐
│                     NVIDIA NIM API                          │
│           https://integrate.api.nvidia.com/v1               │
│                                                             │
│              Model: minimaxai/minimax-m2.1                  │
└─────────────────────────────────────────────────────────────┘
```

### 2. 关键变更点

#### 2.1 类型定义 (`src/services/llm-provider/types.ts`)

```typescript
// 添加 'nvidia-nim' 到 Provider union type
export type Provider =
  | 'openrouter'
  | 'deepseek'
  | 'openai'
  | 'kimi'
  | 'siliconflow'
  | 'nvidia-nim';
```

#### 2.2 Provider 配置 (`src/services/llm-provider/providers.ts`)

```typescript
export const PROVIDER_CONFIGS = {
  'nvidia-nim': {
    defaultBaseUrl: 'https://integrate.api.nvidia.com/v1',
    modelMappings: {
      // Claude 4.5 系列模型映射
      'claude-haiku-4-5-20251001': 'minimaxai/minimax-m2.1',
      'claude-sonnet-4-5-20250929': 'minimaxai/minimax-m2.1',
      'claude-opus-4-5-20251101': 'minimaxai/minimax-m2.1',
      // 旧版本模型兼容
      'claude-3-5-haiku-20241022': 'minimaxai/minimax-m2.1',
      'claude-3-5-sonnet-20241022': 'minimaxai/minimax-m2.1',
      'claude-3-opus-20240229': 'minimaxai/minimax-m2.1',
      // 别名映射
      haiku: 'minimaxai/minimax-m2.1',
      sonnet: 'minimaxai/minimax-m2.1',
      opus: 'minimaxai/minimax-m2.1',
    } as ModelMapping,
    commonModels: ['minimaxai/minimax-m2.1'],
  },
  // ... 其他 provider 配置也已更新为支持 Claude 4.5 系列 ...
} as const;
```

#### 2.3 API 路由 - 默认 Provider (`src/app/api/v1/messages/route.ts`)

**核心变更**: 将 NVIDIA NIM 设为默认 provider

```typescript
function selectProvider(env: Record<string, string | undefined>): {
  provider: Provider;
  baseUrl: string;
} {
  // 检查是否有明确指定其他 provider
  if (env['DEEPSEEK_BASE_URL']) {
    return { provider: 'deepseek', baseUrl: env['DEEPSEEK_BASE_URL'] };
  }
  if (env['OPENAI_BASE_URL']) {
    return { provider: 'openai', baseUrl: env['OPENAI_BASE_URL'] };
  }
  if (env['KIMI_BASE_URL']) {
    return { provider: 'kimi', baseUrl: env['KIMI_BASE_URL'] };
  }
  if (env['SILICONFLOW_BASE_URL']) {
    return { provider: 'siliconflow', baseUrl: env['SILICONFLOW_BASE_URL'] };
  }
  if (env['OPENROUTER_BASE_URL']) {
    return { provider: 'openrouter', baseUrl: env['OPENROUTER_BASE_URL'] };
  }

  // 新增: 支持 NVIDIA NIM 环境变量
  if (env['NVIDIA_NIM_BASE_URL']) {
    return { provider: 'nvidia-nim', baseUrl: env['NVIDIA_NIM_BASE_URL'] };
  }

  // Auto-detect from OPENAI_COMPATIBLE_BASE_URL
  if (env['OPENAI_COMPATIBLE_BASE_URL']) {
    const baseUrl = env['OPENAI_COMPATIBLE_BASE_URL'].toLowerCase();

    if (baseUrl.includes('nvidia') || baseUrl.includes('nim')) {
      return { provider: 'nvidia-nim', baseUrl };
    }
    // ... 其他检测逻辑 ...
  }

  // ⚠️ 关键变更: 默认使用 NVIDIA NIM
  return {
    provider: 'nvidia-nim',
    baseUrl:
      env['NVIDIA_NIM_BASE_URL'] ||
      PROVIDER_CONFIGS['nvidia-nim'].defaultBaseUrl,
  };
}
```

#### 2.4 Get-Started 页面配置 (`src/legacy/features/get-started/types/provider.ts`)

```typescript
export const providers: Provider[] = [
  // 将 NVIDIA NIM 放在列表首位，突出显示
  {
    id: 'nvidia-nim',
    name: 'NVIDIA NIM',
    displayName: 'NVIDIA NIM (默认)',
    icon: 'NV',
    color: 'linear-gradient(45deg, #76B900, #1A1A1A)', // NVIDIA 绿色
    description:
      '项目默认 Provider。基于 NVIDIA NIM 平台，提供高性能 AI 推理服务。使用 MiniMax M2.1 模型。',
    isDirectlyUsable: true,
    proxyUrl: 'https://aispeeds.me',
    originalUrl: 'https://integrate.api.nvidia.com/v1',
    aliasCommand:
      'alias claude="ANTHROPIC_API_KEY=nvapi-xxxxxx ANTHROPIC_BASE_URL=https://aispeeds.me claude"',
    apiKeyUrl: 'https://build.nvidia.com/',
    features: [
      '默认 Provider',
      '无需额外部署',
      'NVIDIA 高性能推理',
      'MiniMax M2.1 模型',
    ],
    specialConfig: {
      envVars: {
        ANTHROPIC_API_KEY: 'nvapi-xxxxxx (你的 NVIDIA NIM API Key)',
        ANTHROPIC_BASE_URL: 'https://aispeeds.me',
      },
      notes:
        '🚀 这是项目的默认 Provider，部署后即可直接使用。只需将 ANTHROPIC_API_KEY 替换为你的 NVIDIA NIM API Key (格式: nvapi-xxx) 即可。',
    },
  },
  // ... 其他现有 providers ...
];
```

#### 2.5 Hero Section 徽章 (`src/legacy/features/get-started/index.ts`)

```typescript
<div class="badges">
    <!-- NVIDIA NIM 放在首位 -->
    <a href="javascript:void(0)" class="badge badge-primary" data-provider="nvidia-nim" onclick="scrollToProvider('nvidia-nim')">NVIDIA NIM (默认)</a>
    <a href="javascript:void(0)" class="badge" data-provider="anthropic" onclick="scrollToProvider('anthropic')">Anthropic</a>
    <!-- ... 其他徽章 ... -->
</div>
```

### 3. 环境变量配置

#### 3.1 服务端 (Cloudflare Workers)

```bash
# wrangler.toml 或 Cloudflare Dashboard
[vars]
# 可选：如果需要覆盖默认配置
NVIDIA_NIM_BASE_URL = "https://integrate.api.nvidia.com/v1"
```

#### 3.2 客户端使用

```bash
# 方式一：使用 alias (推荐)
alias claude="ANTHROPIC_API_KEY=nvapi-xxxxxx ANTHROPIC_BASE_URL=https://aispeeds.me claude"

# 方式二：直接设置环境变量
export ANTHROPIC_API_KEY="nvapi-xxxxxx"
export ANTHROPIC_BASE_URL="https://aispeeds.me"
```

### 4. 模型映射策略

| Claude 模型                | NVIDIA NIM 模型        | 说明              |
| -------------------------- | ---------------------- | ----------------- |
| claude-haiku-4-5-20251001  | minimaxai/minimax-m2.1 | Claude 4.5 Haiku  |
| claude-sonnet-4-5-20250929 | minimaxai/minimax-m2.1 | Claude 4.5 Sonnet |
| claude-opus-4-5-20251101   | minimaxai/minimax-m2.1 | Claude 4.5 Opus   |
| claude-3-5-haiku-20241022  | minimaxai/minimax-m2.1 | 旧版兼容          |
| claude-3-5-sonnet-20241022 | minimaxai/minimax-m2.1 | 旧版兼容          |
| claude-3-opus-20240229     | minimaxai/minimax-m2.1 | 旧版兼容          |
| haiku                      | minimaxai/minimax-m2.1 | 别名支持          |
| sonnet                     | minimaxai/minimax-m2.1 | 别名支持          |
| opus                       | minimaxai/minimax-m2.1 | 别名支持          |

**说明**: 当前所有模型统一映射到 `minimaxai/minimax-m2.1`。支持 Claude
4.5 系列新模型名和旧版模型名的兼容。

## 实现状态

### Phase 1: 核心功能 ✅ 已完成

1. [x] 修改 `src/services/llm-provider/types.ts` - 添加 `nvidia-nim` 类型
2. [x] 修改 `src/services/llm-provider/providers.ts` - 添加 NVIDIA
       NIM 配置，更新所有 provider 支持 Claude 4.5 系列
3. [x] 修改 `src/app/api/v1/messages/route.ts` - 设置为默认 provider

### Phase 2: 前端展示 ✅ 已完成

4. [x] 修改 `src/legacy/features/get-started/types/provider.ts` - 添加 NVIDIA
       NIM provider 信息
5. [x] 修改 `src/legacy/features/get-started/index.ts` - 添加 hero section 徽章

### Phase 3: 验证与部署

6. [ ] 本地测试 API 转发功能
7. [ ] 测试 get-started 页面显示
8. [ ] 部署到 Cloudflare Workers

## 已确认信息

| 项目           | 确认结果                      |
| -------------- | ----------------------------- |
| API Key 格式   | `nvapi-xxx` (NVIDIA 标准格式) |
| 服务端默认 Key | 不需要，用户自行提供          |
| 模型映射       | 仅 `minimaxai/minimax-m2.1`   |

## 待跟进事项

### 速率限制和配额

NVIDIA NIM API 的速率限制和配额策略需要在实际使用中验证。

### 错误处理

NVIDIA NIM
API 的错误响应格式是否与标准 OpenAI 格式完全一致，需要在集成测试中验证。

## 风险评估

| 风险                  | 影响           | 缓解措施                   |
| --------------------- | -------------- | -------------------------- |
| NVIDIA NIM API 不稳定 | 用户体验下降   | 添加备用 provider 切换机制 |
| 模型能力差异          | 输出质量不一致 | 在文档中明确说明能力差异   |
| API Key 泄露          | 安全问题       | 确保 key 仅在客户端配置    |
| 响应格式差异          | 解析错误       | 增强格式适配层容错性       |

## 参考资料

- [NVIDIA NIM API 文档](https://build.nvidia.com/)
- [OpenAI API 兼容格式](https://platform.openai.com/docs/api-reference)
- [项目现有 Provider 配置](../../../src/services/llm-provider/providers.ts)

---

_文档版本: 1.1.0_ _创建时间: 2026-01-24_ _更新时间: 2026-01-24_
_状态: 实现完成，待验证部署_
