# SDK快速安装

Claude Code SDK 支持三种使用方式，选择最适合你项目的安装方法。

## 安装方式选择

### 1. 命令行方式（推荐用于快速原型）

最简单的方式是直接使用 NPM 全局安装：

```bash
npm install -g @anthropic/claude-code-sdk
```

安装完成后可以直接在命令行使用：

```bash
claude-code --help
```

### 2. TypeScript/JavaScript 项目集成

对于 TypeScript 或 JavaScript 项目，添加 SDK 依赖：

```bash
npm install @anthropic/claude-code-sdk
```

在项目中导入使用：

```typescript
import { ClaudeCodeSDK } from '@anthropic/claude-code-sdk';

const sdk = new ClaudeCodeSDK({
  apiKey: process.env.ANTHROPIC_API_KEY,
});
```

### 3. Python 项目集成

Python 项目可以通过 pip 安装：

```bash
pip install claude-code-sdk
```

Python 使用方式：

```python
from claude_code import ClaudeCodeClient

client = ClaudeCodeClient(
    api_key=os.getenv("ANTHROPIC_API_KEY")
)
```

## API 密钥配置

所有安装方式都需要配置 Anthropic API 密钥：

### 环境变量方式（推荐）

```bash
export ANTHROPIC_API_KEY="your-api-key-here"
```

### 配置文件方式

创建 `~/.claude/config.json`：

```json
{
  "apiKey": "your-api-key-here",
  "defaultModel": "claude-3-sonnet-20240229"
}
```

## 验证安装

运行简单示例确认安装成功：

### 命令行验证

```bash
claude-code "创建一个Hello World程序"
```

### TypeScript 验证

```typescript
async function test() {
  const result = await sdk.run('创建一个简单的计算器');
  console.log(result);
}
test();
```

### Python 验证

```python
result = client.run("创建一个简单的待办列表")
print(result)
```

## 环境要求

- **Node.js 18+** 是必需的，即使使用 Python SDK 也需要 NPM 依赖
- **Git** 用于版本控制集成
- **支持的操作系统**: macOS, Linux, Windows
