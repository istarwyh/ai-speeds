# 输出格式控制

掌握Text、JSON、Stream三种输出格式，为不同应用场景选择最适合的数据交互方式。

## 三种输出格式对比

### Text 文本格式

默认的人类友好格式，适合直接展示：

```typescript
const result = await sdk.run('创建一个用户注册表单', {
  format: 'text',
});

// 输出示例：
// 我将为您创建一个用户注册表单...
// 表单将包含以下字段：
// 1. 用户名（必填）
// 2. 邮箱（必填）
// 3. 密码（必填，最小8位）
// 4. 确认密码（必填）
```

### JSON 结构化格式

包含完整元数据，便于程序处理：

```typescript
const result = await sdk.run("创建一个用户注册表单", {
  format: 'json'
});

// 输出示例：
{
  "content": "用户注册表单创建完成...",
  "metadata": {
    "cost": 0.002,
    "tokens": 150,
    "model": "claude-3-sonnet-20240229",
    "duration": 1200,
    "tool_calls": ["write_file", "create_component"],
    "files_created": ["RegisterForm.tsx", "validation.ts"]
  },
  "structured_data": {
    "form_fields": [
      {"name": "username", "type": "text", "required": true},
      {"name": "email", "type": "email", "required": true},
      {"name": "password", "type": "password", "required": true, "min": 8}
    ]
  }
}
```

### Stream 流式输出

实时响应，提升用户体验：

```typescript
const stream = await sdk.run('创建一个完整的登录系统', {
  format: 'stream',
  onChunk: chunk => {
    console.log(chunk.content);
    updateProgress(chunk.metadata);
  },
});

// 实时输出：
// ▶ 正在分析需求...
// ▶ 正在设计表单结构...
// ▶ 正在创建验证逻辑...
// ✅ 登录系统创建完成
```

## 应用场景选择

### 用户界面展示

```typescript
// 适合直接显示的格式
const displayFormat = {
  format: 'text',
  style: 'conversational',
  includeCode: true,
};
```

### API 集成

```typescript
// 适合程序处理的格式
const apiFormat = {
  format: 'json',
  include_metadata: true,
  include_tool_calls: true,
};
```

### 实时交互

```typescript
// 适合长时间任务
const streamFormat = {
  format: 'stream',
  update_interval: 500, // 500ms更新一次
  show_progress: true,
};
```

## 高级配置

### 混合输出格式

```typescript
const hybridOutput = {
  primary_format: 'text',
  metadata_format: 'json',
  include_summary: true,
  enable_debug: false,
};
```

### 自定义模板

```typescript
const customTemplate = {
  format: 'json',
  template: {
    summary: '任务完成摘要',
    code_snippets: ['代码片段数组'],
    next_steps: ['下一步建议'],
    warnings: ['注意事项'],
  },
};
```

JSON格式包含成本、耗时等元数据，便于监控和优化 Agent 性能。流式输出能显著改善用户体验，特别是对于长时间运行的 Agent 任务。
