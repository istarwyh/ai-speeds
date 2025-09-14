# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with the Claude-Code-Router repository.

## Development Commands

```bash
npm run dev    # Start development server with Wrangler
npm run deploy # Deploy to Cloudflare Workers
```

## Project Architecture

This is a Cloudflare Worker that acts as a **transparent proxy service** between Anthropic's Claude API format and OpenAI-compatible APIs. The Claude-Code-Router enables Claude Code users to access multiple model providers (OpenRouter, OpenAI, DeepSeek, Kimi, SiliconFlow, and other OpenAI-style APIs) without changing their client configuration.

**Key Concept:** Users only interact with the proxy endpoint - the backend provider selection is configured at deployment time by the service administrator.

### Core Components

- **src/server/index.ts**: Main Worker entry point handling routing and orchestration
- **src/api/adapters/format.ts**: Converts between Anthropic API format and OpenAI chat completions format
- **src/api/adapters/stream.ts**: Handles streaming response translation with proper SSE formatting
- **src/server/env.ts**: TypeScript environment interface for Cloudflare Workers
- **src/api/types.ts**: API type definitions
- **src/api/providers.ts**: Provider configurations and model mappings

### API Translation Flow

1. Receives Anthropic-format requests at `/v1/messages`
2. Uses `selectProvider()` function to determine target provider based on environment configuration priority
3. `formatAnthropicToOpenAI()` converts message structure with provider-specific model mapping from `PROVIDER_CONFIGS`
4. Forwards to configured endpoint (OpenRouter or any OpenAI-compatible API)
5. For streaming: `streamOpenAIToAnthropic()` translates SSE events in real-time
6. For non-streaming: `formatOpenAIToAnthropic()` converts the complete response

### Key Translation Logic

- **Provider selection**: `selectProvider()` function prioritizes OpenAI-compatible over OpenRouter when both are configured
- **Model mapping**: Configuration-driven approach in `types.ts:PROVIDER_CONFIGS` with model validation for OpenAI-compatible APIs
- **Tool call validation**: Ensures proper tool_calls/tool message pairing with `validateOpenAIToolCalls()`
- **Message structure**: Handles complex content arrays, system messages, and role differences
- **Streaming events**: Converts OpenAI delta format to Anthropic's content block events

### Environment Configuration

- `OPENROUTER_BASE_URL`: OpenRouter API base URL (defaults to `https://openrouter.ai/api/v1`)
- `OPENAI_COMPATIBLE_BASE_URL`: Any OpenAI-compatible API base URL (when set, routes to this endpoint instead of OpenRouter)
- Custom domain configured: `cc.xiaohui.cool`
- Observability enabled for logging

The worker includes static HTML pages for the homepage (`src/templates/index.ts`), terms (`src/templates/terms.ts`), and privacy policy (`src/templates/privacy.ts`).

### Frontend Architecture & Build System

This project implements a **dual-layer frontend architecture** that separates development and runtime concerns:

#### Development Layer (`src/client/`)
- **Location**: `src/client/[moduleName]/`
- **Purpose**: Modern TypeScript development environment with full modular architecture
- **Structure**: Each module follows a consistent pattern:
  ```
  src/client/[moduleName]/
  ├── core/           # Business logic managers (e.g., BestPracticesManager)
  ├── data/           # Static data and configuration (cardsData, categoryConfig)
  ├── handlers/       # Event handling logic
  ├── renderers/      # UI rendering components
  ├── services/       # Data services and API layers
  └── index.ts        # Module initialization entry point
  ```
- **Benefits**: Type safety, code organization, maintainability, testing support

#### Runtime Layer (`modules/`)
- **Location**: `modules/[module-name]/`
- **Purpose**: Production-ready HTML templates with embedded compiled JavaScript
- **Structure**: Static HTML containers + bundled client code
- **Benefits**: Single-file deployment, optimized for Cloudflare Workers edge execution

#### Build Process
1. **Source Compilation**: `src/client/[moduleName]/index.ts` → bundled JavaScript via esbuild
2. **Code Injection**: Build script (`scripts/build-client.js`) injects compiled code into `modules/[module-name]/index.ts`
3. **Runtime Execution**: Final modules contain both HTML structure and embedded logic

#### File Relationship Examples
- `src/client/howToImplement/index.ts` ← **Development source**
- `modules/how-to-implement/index.ts` ← **Runtime module** (HTML + bundled JS)

**Key Principle**: These files are **complementary, not duplicates**. The src/ version is the development source, while the modules/ version is the production artifact.

# 开发指导原则

## 核心要求
1. **NEVER 重写现有的良好架构** - 如果发现已有模块化、类型安全的代码结构，必须在此基础上扩展
2. **优先检查现有代码结构** - 在开始任何开发前，先全面了解现有的类、接口、控制器等架构
3. **遵循现有的设计模式** - 如果项目已采用MVC、组件化等模式，必须保持一致性
4. **渐进式增强原则** - 在现有功能基础上逐步添加新功能，而不是推倒重来

## 具体执行步骤
1. **架构分析阶段**：
   - 先用 `find_by_name` 和 `view_file` 全面了解现有代码结构
   - 识别现有的控制器、组件、数据模型
   - 理解现有的依赖关系和设计模式

2. **增量开发阶段**：
   - 在现有类中添加新方法，而不是创建新的重复结构
   - 扩展现有接口，而不是定义新的不兼容接口
   - 复用现有的组件和工具函数

3. **集成验证阶段**：
   - 确保新功能与现有功能无缝集成
   - 保持现有API的向后兼容性
   - 验证类型安全和模块依赖正确性

## 禁止行为
- ❌ 创建功能重复的新文件（如 bestPracticesComplete.ts）
- ❌ 绕过现有的类型系统和接口定义
- ❌ 用字符串模板替代类型安全的TypeScript代码
- ❌ 为了"快速实现"而牺牲代码质量和架构一致性

## 质量标准
- ✅ npm run build:client 通过
- ✅ 保持现有的TypeScript类型安全
- ✅ 遵循现有的命名约定和代码风格
- ✅ 维护现有的模块化结构
- ✅ 确保代码可测试性和可维护性