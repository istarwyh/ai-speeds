# 创建第一个Agent

通过具体示例学习创建专业 AI Agent，从简单功能开始逐步构建复杂应用。

## 法律助手示例

创建一个合同审查和风险识别的法律 Agent：

### 基础配置

```typescript
import { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';

const legalAgent = new ClaudeCodeSDK({
  apiKey: process.env.ANTHROPIC_API_KEY,
  systemPrompt: `
你是一名专业的法律顾问助手，专门协助合同审查和风险分析。

核心能力：
- 识别合同中的关键条款和潜在风险
- 提供法律合规性建议
- 标记需要律师进一步审查的条款

工作原则：
- 始终提醒用户这不能替代专业法律意见
- 重点关注风险识别而非法律结论
- 使用清晰的结构化输出格式
  `,
});
```

### 使用示例

```typescript
async function reviewContract(contractText: string) {
  const result = await legalAgent.run(`
请审查以下合同并识别关键风险点：

${contractText}

请按以下格式输出：
1. 关键条款摘要
2. 潜在风险识别
3. 建议关注的条款
4. 下一步行动建议
  `);

  return result;
}
```

## SRE运维专家

构建系统诊断和问题解决的运维 Agent：

### 系统提示词设计

```typescript
const sreAgent = new ClaudeCodeSDK({
  apiKey: process.env.ANTHROPIC_API_KEY,
  systemPrompt: `
你是一名 Site Reliability Engineering (SRE) 专家，专门处理系统故障诊断和性能优化。

专业领域：
- 系统监控和告警分析
- 性能瓶颈识别和优化
- 故障排查和根因分析
- 自动化运维方案设计

诊断流程：
1. 收集系统状态信息
2. 分析日志和监控数据
3. 识别问题根本原因
4. 提供解决方案和预防措施

输出要求：
- 使用结构化的诊断报告
- 提供具体的命令和配置
- 包含监控和验证步骤
  `,
});
```

### 故障诊断示例

```typescript
async function diagnoseSystemIssue(symptoms: string, logs: string) {
  const diagnosis = await sreAgent.run(`
系统出现以下症状：
${symptoms}

相关日志：
${logs}

请进行全面诊断并提供解决方案。
  `);

  return diagnosis;
}
```

## 自定义系统提示词原则

### 角色定义

明确定义 Agent 的专业身份和能力边界：

```typescript
const customAgent = new ClaudeCodeSDK({
  systemPrompt: `
# 角色定义
你是一名 [具体专业角色]，具有 [专业年限] 年经验。

# 核心能力
- 能力1：具体描述
- 能力2：具体描述
- 能力3：具体描述

# 工作约束
- 不能做什么：明确限制
- 伦理边界：道德和法律约束
- 输出格式：标准化要求

# 交互方式
- 沟通风格：专业、友好、简洁
- 响应格式：结构化输出
- 确认机制：重要决策前的确认
  `,
});
```

### 提示词模板

```typescript
const promptTemplate = {
  role: '专业角色描述',
  capabilities: ['能力1', '能力2', '能力3'],
  constraints: ['约束1', '约束2'],
  outputFormat: {
    structure: '输出结构说明',
    style: '沟通风格要求',
  },
  examples: [
    {
      input: '示例输入',
      output: '期望输出',
    },
  ],
};
```

## 渐进式开发策略

### 第一阶段：基础功能

```typescript
// 简单的单一功能 Agent
const simpleAgent = new ClaudeCodeSDK({
  systemPrompt: '你是一个代码审查助手，专门检查JavaScript代码的常见问题。',
});
```

### 第二阶段：增加工具集成

```typescript
// 集成外部工具的 Agent
const enhancedAgent = new ClaudeCodeSDK({
  systemPrompt: '...',
  tools: ['github-integration', 'code-analysis', 'documentation-generator'],
});
```

### 第三阶段：多功能整合

```typescript
// 综合性专业 Agent
const professionalAgent = new ClaudeCodeSDK({
  systemPrompt: "...",
  tools: [...],
  workflows: [...],
  integrations: [...]
});
```

## 最佳实践

### 测试和验证

```typescript
// Agent 功能测试
async function testAgent() {
  const testCases = [
    { input: '测试输入1', expected: '期望输出类型' },
    { input: '测试输入2', expected: '期望输出类型' },
  ];

  for (const testCase of testCases) {
    const result = await agent.run(testCase.input);
    validateOutput(result, testCase.expected);
  }
}
```

### 性能监控

```typescript
// 监控 Agent 性能
const agentWithMonitoring = new ClaudeCodeSDK({
  apiKey: process.env.ANTHROPIC_API_KEY,
  monitoring: {
    logRequests: true,
    trackPerformance: true,
    alertThresholds: {
      responseTime: 5000, // 5秒
      errorRate: 0.05, // 5%
    },
  },
});
```

从简单的单一功能 Agent 开始，通过测试验证后再逐步增加复杂度和工具集成。清晰的系统提示词是 Agent 表现优秀的关键基础。
