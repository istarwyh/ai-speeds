# API认证配置

掌握多种API认证方式，实现灵活的模型提供商切换和成本优化。

## Anthropic 直连

标准的官方认证方式：

```bash
export ANTHROPIC_API_KEY="sk-ant-api03-..."
```

```typescript
import { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';

const sdk = new ClaudeCodeSDK({
  provider: 'anthropic',
  apiKey: process.env.ANTHROPIC_API_KEY,
  model: 'claude-3-sonnet-20240229',
});
```

## Amazon Bedrock

通过 AWS 访问 Claude 模型，适合企业用户：

```bash
export AWS_ACCESS_KEY_ID="your-access-key"
export AWS_SECRET_ACCESS_KEY="your-secret-key"
export AWS_REGION="us-east-1"
```

```typescript
const sdk = new ClaudeCodeSDK({
  provider: 'bedrock',
  region: 'us-east-1',
  model: 'anthropic.claude-3-sonnet-20240229-v1:0',
});
```

## Google Vertex AI

使用 Google Cloud 凭证：

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/path/to/credentials.json"
export GOOGLE_CLOUD_PROJECT="your-project-id"
```

```typescript
const sdk = new ClaudeCodeSDK({
  provider: 'vertex',
  projectId: process.env.GOOGLE_CLOUD_PROJECT,
  location: 'us-central1',
});
```

## 认证优先级

1. 显式传入的认证参数
2. 环境变量
3. 配置文件 `~/.claude/config.json`
4. 默认的系统认证

## 成本优化策略

不同提供商定价对比：

- **Anthropic直连**: 官方定价，功能完整
- **Bedrock**: 企业折扣，集成AWS服务
- **Vertex AI**: Google Cloud积分，地域优势

## 安全最佳实践

```typescript
// 生产环境配置
const sdk = new ClaudeCodeSDK({
  apiKey: process.env.ANTHROPIC_API_KEY, // 环境变量
  timeout: 30000, // 30秒超时
  maxRetries: 3,
  rateLimiting: {
    requestsPerMinute: 60,
  },
});
```

避免在代码中硬编码密钥，使用密钥管理服务和环境变量。
