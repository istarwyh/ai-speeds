# 多轮对话管理

掌握多轮对话的核心技巧，构建能够保持长期记忆和上下文的智能Agent。

## 会话持续策略

### 命令行方式

```bash
# 继续上次会话
claude-code --continue "让我们继续上次的讨论"

# 恢复特定会话
claude-code --resume session-id-123 "回到之前的计划"

# 设置最大轮次
claude-code --maxTurns 10 "开始新的交互任务"
```

### Session ID 管理

```bash
# 查看所有会话
claude-code --list-sessions

# 删除特定会话
claude-code --delete-session session-id-123

# 导出会话历史
claude-code --export-session session-id-123 > conversation.json
```

## TypeScript SDK 实现

### 会话管理类

```typescript
import { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';

class ConversationManager {
  private sdk: ClaudeCodeSDK;
  private sessionId: string;
  private messageHistory: Array<{ role: string; content: string }>;

  constructor(apiKey: string) {
    this.sdk = new ClaudeCodeSDK({ apiKey });
    this.sessionId = this.generateSessionId();
    this.messageHistory = [];
  }

  async sendMessage(content: string) {
    // 添加用户消息
    this.messageHistory.push({ role: 'user', content });

    const response = await this.sdk.run(content, {
      sessionId: this.sessionId,
      context: this.messageHistory,
      maxTurns: 50,
    });

    // 保存助手回复
    this.messageHistory.push({ role: 'assistant', content: response.content });

    return response;
  }

  saveSession() {
    localStorage.setItem(
      `claude_session_${this.sessionId}`,
      JSON.stringify(this.messageHistory),
    );
  }

  loadSession(sessionId: string) {
    const saved = localStorage.getItem(`claude_session_${sessionId}`);
    if (saved) {
      this.sessionId = sessionId;
      this.messageHistory = JSON.parse(saved);
    }
  }
}
```

### 使用示例

```typescript
const conversation = new ConversationManager(process.env.ANTHROPIC_API_KEY);

// 第一轮对话
const response1 = await conversation.sendMessage('请帮我设计一个用户管理系统');

// 第二轮 - 保持上下文
const response2 = await conversation.sendMessage('请增加角色权限管理功能');

// 保存会话
conversation.saveSession();
```

## Python SDK 实现

### ClaudeSDKClient 会话模式

```python
from claude_code import ClaudeSDKClient
import json
import uuid

class ConversationManager:
    def __init__(self, api_key: str):
        self.client = ClaudeSDKClient(api_key=api_key)
        self.session_id = str(uuid.uuid4())
        self.message_history = []

    async def send_message(self, content: str):
        # 添加用户消息
        self.message_history.append({"role": "user", "content": content})

        response = await self.client.run(
            content,
            session_id=self.session_id,
            context=self.message_history,
            max_turns=50
        )

        # 保存助手回复
        self.message_history.append({
            "role": "assistant",
            "content": response.content
        })

        return response

    def save_session(self, filename: str = None):
        if not filename:
            filename = f"session_{self.session_id}.json"

        with open(filename, 'w', encoding='utf-8') as f:
            json.dump(self.message_history, f, ensure_ascii=False, indent=2)

    def load_session(self, filename: str):
        with open(filename, 'r', encoding='utf-8') as f:
            self.message_history = json.load(f)
```

## 性能优化策略

### 上下文窗口管理

```typescript
class ContextWindow {
  private maxTokens = 100000; // 模型上下文限制
  private messages: Message[];

  addMessage(message: Message) {
    this.messages.push(message);
    this.trimContext();
  }

  private trimContext() {
    let totalTokens = this.calculateTokens();

    while (totalTokens > this.maxTokens && this.messages.length > 2) {
      // 保留系统消息和最近的交互
      this.messages.splice(1, 1); // 移除最早的非系统消息
      totalTokens = this.calculateTokens();
    }
  }

  private calculateTokens(): number {
    // 简化的token计算，实际项目中使用tiktoken
    return this.messages.reduce(
      (sum, msg) => sum + Math.ceil(msg.content.length / 4),
      0,
    );
  }
}
```

### 批量处理优化

```typescript
// 高效的批量对话处理
async function processBatch(
  conversations: ConversationManager[],
  messages: string[],
) {
  const promises = conversations.map((conv, index) =>
    conv.sendMessage(messages[index]),
  );

  return await Promise.all(promises);
}
```

## 错误处理和重试机制

```typescript
class RobustConversation extends ConversationManager {
  async sendMessageWithRetry(content: string, maxRetries = 3) {
    for (let attempt = 1; attempt <= maxRetries; attempt++) {
      try {
        return await this.sendMessage(content);
      } catch (error) {
        if (attempt === maxRetries) throw error;

        console.log(`第${attempt}次尝试失败，${3 - attempt}秒后重试...`);
        await new Promise(resolve => setTimeout(resolve, 3000));
      }
    }
  }
}
```

对于复杂业务流程，建议使用 Python
SDK 的持久连接模式维护会话状态。合理控制 maxTurns 参数可避免无限循环，同时保持足够的交互深度。
