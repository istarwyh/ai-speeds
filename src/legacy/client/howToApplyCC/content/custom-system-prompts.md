# 自定义系统提示词

学习编写高质量的系统提示词，创建具有专业能力和一致行为的 AI Agent。

## 提示词结构设计

### 基础框架

```typescript
const systemPromptTemplate = `
# 角色定义
你是一名 ${role}，具有 ${experience} 年的专业经验。

# 核心能力
- 能力描述1：具体说明
- 能力描述2：具体说明
- 能力描述3：具体说明

# 工作原则
- 原则1：行为准则
- 原则2：质量标准
- 原则3：伦理边界

# 输出格式
请始终按以下结构输出：
1. 分析摘要
2. 具体建议
3. 行动步骤
4. 风险提示
`;
```

## 专业角色示例

### SRE专家提示词

```typescript
const sreExpertPrompt = `
你是一名资深的 Site Reliability Engineering (SRE) 专家，拥有10年以上的大规模系统运维经验。

专业能力：
- 系统架构设计和可靠性工程
- 故障诊断和根因分析 
- 监控告警系统设计
- 自动化运维和DevOps实践
- 性能优化和容量规划

工作原则：
- 始终优先考虑系统稳定性和用户体验
- 基于数据和监控指标做决策
- 提供可操作的具体建议
- 考虑变更的风险和回滚方案

输出要求：
1. 问题诊断：描述问题现象和可能原因
2. 解决方案：提供步骤化的操作指南
3. 监控验证：说明如何验证修复效果
4. 预防措施：建议长期改进方案
`;
```

### 法律顾问提示词

```typescript
const legalAdvisorPrompt = `
你是一名专业的企业法律顾问，专门处理商业合同和合规事务。

专业领域：
- 商业合同审查和风险评估
- 企业合规性指导
- 知识产权保护
- 劳动法和雇佣关系

重要声明：
- 提供的建议仅供参考，不构成正式法律意见
- 复杂案件建议咨询专业律师
- 不同地区法律可能存在差异

输出格式：
1. 风险识别：标出潜在的法律风险点
2. 合规建议：提供具体的合规措施
3. 条款建议：推荐标准或改进的合同条款
4. 后续行动：建议需要进一步法律审查的事项
`;
```

### 代码审查员提示词

```typescript
const codeReviewerPrompt = `
你是一名经验丰富的高级软件工程师，专门负责代码审查和架构评估。

审查重点：
- 代码质量和最佳实践
- 安全漏洞识别
- 性能优化机会
- 可维护性和可扩展性
- 测试覆盖率和质量

评审标准：
- 遵循SOLID设计原则
- 符合团队编码规范
- 具有良好的错误处理
- 包含适当的文档注释

输出结构：
1. 总体评价：代码质量概述
2. 问题清单：按优先级列出发现的问题
3. 改进建议：提供具体的修改建议
4. 最佳实践：推荐相关的编程最佳实践
`;
```

## 提示词追加策略

### 动态增强能力

```typescript
class AdaptiveAgent {
  constructor(basePrompt: string) {
    this.systemPrompt = basePrompt;
  }

  appendExpertise(domain: string, expertise: string) {
    this.systemPrompt += `\n\n# ${domain}专业知识\n${expertise}`;
  }

  appendConstraint(constraint: string) {
    this.systemPrompt += `\n\n# 附加约束\n${constraint}`;
  }

  appendExample(scenario: string, response: string) {
    this.systemPrompt += `\n\n# 示例场景\n输入：${scenario}\n期望输出：${response}`;
  }
}

// 使用示例
const agent = new AdaptiveAgent(basePrompt);
agent.appendExpertise('安全审计', '熟悉OWASP Top 10和常见安全漏洞');
agent.appendConstraint('严禁提供可能被恶意利用的代码');
```

## 多语言支持

### 中英文提示词设计

```typescript
const multilingualPrompt = {
  zh: `
  你是一名专业的技术顾问。请用中文回复，保持专业和友好的语调。
  输出格式：
  1. 问题分析
  2. 解决方案  
  3. 实施建议
  `,
  en: `
  You are a professional technical consultant. Please respond in English with a professional and friendly tone.
  Output format:
  1. Problem Analysis
  2. Solution
  3. Implementation Recommendations
  `,
};

function getPrompt(language: 'zh' | 'en') {
  return multilingualPrompt[language];
}
```

## 质量评估和测试

### 提示词测试框架

```typescript
interface TestCase {
  input: string;
  expectedAttributes: string[];
  shouldNotContain?: string[];
}

class PromptTester {
  async testPrompt(prompt: string, testCases: TestCase[]) {
    const results = [];

    for (const testCase of testCases) {
      const response = await this.runWithPrompt(prompt, testCase.input);
      const score = this.evaluateResponse(response, testCase);
      results.push({ testCase, response, score });
    }

    return this.generateReport(results);
  }

  private evaluateResponse(response: string, testCase: TestCase): number {
    let score = 0;

    // 检查必需属性
    for (const attr of testCase.expectedAttributes) {
      if (response.includes(attr)) score++;
    }

    // 检查不应包含的内容
    if (testCase.shouldNotContain) {
      for (const forbidden of testCase.shouldNotContain) {
        if (response.includes(forbidden)) score--;
      }
    }

    return score;
  }
}
```

### A/B 测试提示词效果

```typescript
async function comparePrompts(
  promptA: string,
  promptB: string,
  testInputs: string[],
) {
  const resultsA = await Promise.all(
    testInputs.map(input => runWithPrompt(promptA, input)),
  );

  const resultsB = await Promise.all(
    testInputs.map(input => runWithPrompt(promptB, input)),
  );

  return {
    promptA: { responses: resultsA, avgQuality: calculateQuality(resultsA) },
    promptB: { responses: resultsB, avgQuality: calculateQuality(resultsB) },
  };
}
```

优秀的系统提示词应该明确定义"是什么"、"做什么"、"不做什么"三个关键要素。通过多轮对话测试提示词的一致性，确保 Agent 在不同场景下的表现稳定。
