# MCP 与常用命令 - 扩展 Claude Code 的能力边界

掌握 MCP (Model Context
Protocol) 服务器的集成和管理，以及如何创建和使用自定义命令。

## 1. MCP 服务器集成

**常用 MCP 服务器配置**：

```json
{
  "mcpadvisor": {
    "command": "npx",
    "args": ["-y", "@xiaohui-wang/mcpadvisor@1.0.4"]
  },
  "Up-to-date Docs For Any Prompt": {
    "command": "npx",
    "args": ["-y", "@upstash/context7-mcp@latest"]
  },
  "sequential-thinking": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"],
    "env": {},
    "disabled": true
  },
  "memory": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-memory"],
    "env": {}
  }
}
```

**MCP 管理命令**：

```bash
# 添加一个 MCP
claude mcp add <name> <command> [args...]

# 示例：添加 context7
claude mcp add context7 -- npx -y @upstash/context7-mcp --api-key YOUR_API_KEY

# 查看所有 MCP 命令
claude mcp
```

## 2. 常用命令参数

如果在 Claude 中使用命令，为了和对话区分，需要前面加 `!`。

```bash
# 继续最近的对话
claude --continue

# 可以选择最近的一些对话中的一个开始
claude --resume

# 进入 Claude Debug 模式，会打印很多运行时日志
claude --debug

开启 YOLO 无限制模式
claude  --dangerously-skip-permissions
```

## 3. 自定义 Slash 命令

**创建命令**：在 `.claude/commands/`
目录下创建 Markdown 文件。可以在家目录下或者当前项目下。

```bash
mkdir -p .claude/commands
```

**示例：修复 GitHub Issue**，使用 `$ARGUMENTS` 作为占位符：

```markdown
# .claude/commands/fix-issue.md

请分析和修复 GitHub issue: $ARGUMENTS

执行步骤：

1. 使用 `gh issue view $ARGUMENTS` 获取详细信息
2. 理解问题描述
3. 搜索相关代码文件
4. 实现修复方案
5. 运行测试验证
6. 提交代码并创建 PR
```

**使用方法**：

```bash
/fix-issue 1234
```

## 4. Meta-Slash-Commands

和 Meta-Prompt 类似，又到了套娃的环节了！当然不用命令，直接说和 CC 说创建一个 Slash
Command 也可以。

**版本管理的斜杠命令生成器**：

```markdown
---
allowed-tools: Write(*),Read(*),Bash(mkdir:*),Bash(ls:*),Bash(echo:*),Bash(cp:*),Bash(date:*)
description: 生成一个支持版本管理的新斜杠命令
version: 1.0.0
author: xiaohui
---

# 生成带版本管理的斜杠命令

您正在创建一个内置版本管理的新 Slash Command。根据 `$ARGUMENTS`
中的用户需求，生成一个完整的带版本控制的 Slash Command 文件。

## 版本管理功能

此命令支持：

- **语义化版本控制** (MAJOR.MINOR.PATCH)
- 更新现有命令时**自动创建备份**
- 在 YAML Frontmatter 中**跟踪版本历史**
- **生成更新日志**
```

## 5. 常用 allowed-tools 模式

- `Bash(git:*)` - 用于 Git 命令
- `Bash(gh:*)` - 用于 GitHub CLI 命令
- `Read(*)`, `Write(*)`, `Edit(*)` - 用于文件操作
- `LS(*)`, `Glob(*)`, `Grep(*)` - 用于目录/搜索操作
- `WebFetch(*)`, `WebSearch(*)` - 用于 Web 操作

## 6. 最佳实践

- **模块化设计**：命令不要太大，方便组合
- **版本管理**：为重要命令添加版本控制
- **文档完善**：每个命令都要有清晰的说明
- claude --help 可以看到所有命令
