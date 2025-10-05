# AI Speeds - Claude Code Router

**AI Speeds** 是一个AI工具自我展示和AI生成内容聚合平台，服务于希望发现和体验AI能力的专业人士与学习者。我们让AI工具以Agent身份自我介绍、展示能力，并生成实际应用案例，用户可以直接体验AI工具的真实价值。

通过AI工具作为"虚拟创作者"的创新模式，我们让AI能力发现变得直观有趣，让每个人都能直接感受AI的实际价值。

## ✨ 平台特色

### 🤖 AI工具发现与推荐
- **智能发现**: 帮助用户发现市面上好用的AI工具
- **真实评价**: 提供来自真实用户的使用体验和效果反馈
- **个性化推荐**: 基于用户需求推荐最适合的AI工具
- **即用指南**: 每个工具都提供详细的上手教程

### 📚 AI应用案例分享
- **场景化展示**: 具体的AI应用案例和使用步骤
- **可复制经验**: 提供可直接套用的成功使用模式
- **效果展示**: 真实的AI应用效果和收益数据
- **社区互动**: 用户可分享自己的AI使用心得

### 🌱 AI学习成长社区
- **同伴学习**: 与同样在学习AI的用户交流互动
- **专家指导**: 获得AI应用专家的指导和建议
- **持续激励**: 建立AI学习的社交网络和动力机制
- **知识共享**: 形成互助友爱的AI学习社区文化

### 🔮 AI趋势与洞察
- **前沿资讯**: 精选对普通用户有实际意义的AI趋势
- **深度解读**: 用通俗易懂的方式解释复杂的AI发展
- **行动指导**: 提供具体的前瞻性布局和行动建议
- **避免过载**: 过滤噪音，专注有价值的信息

### 🛠️ Claude Code Router (集成功能)
- **🔄 API Translation**: Anthropic ↔ OpenAI format conversion
- **🌍 Multi-Provider**: OpenRouter, OpenAI, DeepSeek, Kimi, SiliconFlow, AnyRouter等
- **⚡ Edge Computing**: Next.js Edge Runtime + Cloudflare Workers
- **📡 Streaming Support**: Real-time response streaming

## 🚀 快速开始

### 平台导航

访问 [AI Speeds](https://cc.xiaohui.cool) 平台，探索四个核心功能模块：

#### 🎯 选择你的使用场景

**新手用户** → [如何用上 CC](https://cc.xiaohui.cool/get-started) - 快速配置指南<br>
**进阶用户** → [如何用好 CC](https://cc.xiaohui.cool/best-practices) - 最佳实践技巧<br>
**技术用户** → [如何实现 CC](https://cc.xiaohui.cool/how-to-implement) - 架构原理解析<br>
**开发者** → [如何运用 CC](https://cc.xiaohui.cool/how-to-apply-cc) - SDK开发指南

### 1. 安装 Claude Code

```bash
pnpm add -g @anthropic-ai/claude-code
```

### 2. 配置 API 访问

```bash
# 选项 A: 使用共享实例（仅测试）
export ANTHROPIC_BASE_URL="https://cc.xiaohui.cool"
export ANTHROPIC_API_KEY="your-provider-api-key"

# 选项 B: 部署私有实例（推荐）
git clone https://github.com/your-username/claude-code-router
cd claude-code-router && wrangler deploy
export ANTHROPIC_BASE_URL="https://your-domain.workers.dev"
```

### 3. 开始使用 Claude Code

```bash
source ~/.bashrc && claude
```

### 支持的AI提供商

| 提供商 | 状态 | 特色 | 免费额度 | 注册链接 |
|--------|------|------|----------|----------|
| **DeepSeek** | ✅ 即用 | 高性能推理模型，性价比极佳 | 有 | [platform.deepseek.com](https://platform.deepseek.com) |
| **AnyRouter** | ✅ 即用 | 🎁 $100免费额度，多模型支持 | **$100** | [anyrouter.top](https://anyrouter.top/console/token?aff=4Ly0) |
| **Kimi** | ✅ 即用 | 中文AI模型，多语言能力强 | 有 | [platform.moonshot.cn](https://platform.moonshot.cn) |
| **SiliconFlow** | ✅ 即用 | 中文AI基础设施平台 | 有 | [siliconflow.cn](https://siliconflow.cn) |
| **Qwen3-Coder** | ✅ 即用 | 阿里云编程模型，中文支持好 | 有 | [dashscope.console.aliyun.com](https://dashscope.console.aliyun.com) |
| **AICodeWith** | ✅ 即用 | 🎁 2000免费额度，直接API访问 | **2000积分** | [aicodewith.com](https://aicodewith.com/?invitation=VI84XXSW) |
| **Claude-Code** | ✅ 即用 | 🎁 **6000**免费额度，专业服务 | **6000积分** | [claude-code.top](https://www.claude-code.top/register?inviteCode=5GTISY) |
| **Anthropic** | ✅ 官方 | 官方Claude API，需解决充值问题 | 有 | [claude.ai](https://claude.ai) |
| **OpenRouter** | ⚠️ 部署 | 多模型聚合平台 | 有 | [openrouter.ai](https://openrouter.ai) |
| **OpenAI** | ⚠️ 部署 | 行业领先的GPT模型 | 有 | [platform.openai.com](https://platform.openai.com) |

### 提供商配置

| Provider   | API Key Source                                         | Base URL                        |
| ---------- | ------------------------------------------------------ | ------------------------------- |
| OpenRouter | [openrouter.ai](https://openrouter.ai)                 | `https://cc.xiaohui.cool`       |
| DeepSeek   | [platform.deepseek.com](https://platform.deepseek.com) | Deploy with `DEEPSEEK_BASE_URL` |
| OpenAI     | [platform.openai.com](https://platform.openai.com)     | Deploy with `OPENAI_BASE_URL`   |

## 🏗️ 平台架构

### 内容聚合平台架构
```mermaid
graph TB
    A[用户访问] -->|Next.js App Router| B[AI Speeds平台]
    B -->|LegacyPageWrapper适配器| C[内容模块系统]
    C -->|Get Started| D[新手指南模块]
    C -->|Best Practices| E[最佳实践模块] 
    C -->|How to Implement| F[技术架构模块]
    C -->|How to Apply| G[开发指南模块]
    
    B -->|客户端交互| H[动态内容加载]
    H -->|JavaScript| I[模块化HTML模板]
    
    subgraph "Cloudflare Workers边缘网络"
        B
        H
        I
    end

    style A fill:#e1f5fe
    style B fill:#fff3e0
    style C fill:#e8f5e8
```

### API代理服务架构
```mermaid
graph TB
    A[Claude Code Client] -->|Anthropic API Format| B[Claude-Code-Router]
    B -->|Provider Selection| C{Environment Config}
    C -->|OpenRouter| D[OpenRouter API]
    C -->|DeepSeek| E[DeepSeek API]
    C -->|OpenAI| F[OpenAI API]
    C -->|Others| G[Other OpenAI-Compatible APIs]

    B -->|Format Conversion| H[Request Translator]
    B -->|Response Processing| I[Response Translator]
    B -->|Streaming| J[SSE Handler]

    subgraph "Cloudflare Workers"
        B
        H
        I
        J
    end

    style A fill:#e1f5fe
    style B fill:#fff3e0
    style D fill:#f3e5f5
    style E fill:#e8f5e8
    style F fill:#fff8e1
    style G fill:#fce4ec
```

## 💡 平台价值主张

### 🎯 使命
**让每个人都能掌握AI加速自己工作学习成长的方法，在AI时代不掉队、更进步**

### 🌟 核心价值
- **实用优先**: 所有内容聚焦于可直接应用的AI工具和方法，避免空洞理论
- **真实可信**: 展示真实用户的AI应用体验和实际效果，建立可信赖的社区氛围  
- **加速成长**: 强调AI如何显著提升工作效率和学习成果，体现速度价值
- **通俗易懂**: 用通俗易懂的方式解释AI应用，降低普通用户的使用门槛
- **分享文化**: 鼓励用户主动分享AI使用心得，形成知识共享的社区文化
- **持续成长**: 关注用户在AI时代的持续学习和能力提升

### 🔍 解决的核心问题
当用户面临工作效率瓶颈或学习挑战时，他们希望找到AI工具来加速解决问题，但却不知道哪些AI工具真正有效、如何正确使用，或者担心尝试成本过高。现有的AI信息过于技术化或商业化，缺乏来自真实用户的实践经验和可信赖的使用指南，导致用户在AI应用上犹豫不决或效果不佳。

对于高级用户，也缺乏来自一线的Agent构建指南。

## ⚡ Technical Stack

### Core Runtime

- **Framework**: Next.js 15 with App Router
- **Frontend**: React 19 + Tailwind CSS 3
- **Platform**: Cloudflare Workers via OpenNext
- **Language**: TypeScript with strict typing
- **Runtime**: Edge Runtime (V8 Isolates)
- **Deployment**: OpenNext Cloudflare + Wrangler CLI

### Architecture Patterns

| Pattern            | Implementation           | Benefit                         |
| ------------------ | ------------------------ | ------------------------------- |
| **Edge Computing** | 300+ global locations    | <1ms cold start, 0ms warm start |
| **React Server**   | Next.js App Router       | SEO-friendly, fast page loads   |
| **Type Safety**    | Full TypeScript coverage | Runtime error prevention        |
| **Streaming**      | Web Streams API + SSE    | Real-time response delivery     |
| **Modular Design** | React components         | Easy testing & maintenance      |

### Build System

- **Framework**: Next.js 15 with Turbopack
- **Bundler**: esbuild for client modules
- **Module System**: ES6 with tree-shaking
- **Asset Pipeline**: TypeScript → JavaScript + type checking
- **Hot Reload**: Next.js dev server with instant updates

## 🔧 Deployment

### Development

```bash
git clone https://github.com/your-username/claude-code-router
cd claude-code-router
pnpm install

# Next.js Development (Recommended)
pnpm run dev:next        # Start Next.js dev server (http://localhost:3000)

# Legacy Workers Development
pnpm run build:client    # Build frontend modules
pnpm run dev             # Start Wrangler dev server
```

### Production Deployment

#### Option 1: Cloudflare Workers (Next.js)

```bash
# Build Next.js for Cloudflare
pnpm run cf:build        # Build with OpenNext Cloudflare

# Preview locally
pnpm run cf:preview      # Test before deployment

# Deploy to Cloudflare
pnpm run cf:deploy       # Deploy to production
```

#### Option 2: Traditional Deployment

```bash
# Configure environment variables
wrangler secret put OPENROUTER_BASE_URL       # OpenRouter backend
wrangler secret put DEEPSEEK_BASE_URL         # DeepSeek backend
wrangler secret put OPENAI_BASE_URL           # OpenAI backend

# Deploy to Cloudflare Workers
pnpm run deploy
```

### Environment Configuration

```mermaid
flowchart LR
    A[Environment Variables] --> B{Provider Selection}
    B -->|Priority 1| C[DEEPSEEK_BASE_URL]
    B -->|Priority 2| D[OPENAI_BASE_URL]
    B -->|Priority 3| E[KIMI_BASE_URL]
    B -->|Priority 4| F[SILICONFLOW_BASE_URL]
    B -->|Default| G[OPENROUTER_BASE_URL]

    C --> H[DeepSeek API]
    D --> I[OpenAI API]
    E --> J[Kimi API]
    F --> K[SiliconFlow API]
    G --> L[OpenRouter API]
```

## 🔌 API Reference

### Request Format (Anthropic)

```bash
curl -X POST https://cc.xiaohui.cool/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-api-key" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "messages": [{"role": "user", "content": "Hello"}],
    "max_tokens": 100,
    "stream": true
  }'
```

### Model Mapping

| Claude Model                 | OpenRouter                    | DeepSeek            | OpenAI        |
| ---------------------------- | ----------------------------- | ------------------- | ------------- |
| `claude-3-5-haiku-20241022`  | `anthropic/claude-3.5-haiku`  | `deepseek-chat`     | `gpt-4o-mini` |
| `claude-3-5-sonnet-20241022` | `anthropic/claude-3.5-sonnet` | `deepseek-chat`     | `gpt-4o`      |
| `claude-3-opus-20240229`     | `anthropic/claude-3-opus`     | `deepseek-reasoner` | `gpt-4o`      |

## 📁 Architecture & Structure

### Worker Runtime Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Cloudflare Workers                        │
├─────────────────────────────────────────────────────────────────┤
│ 🔄 Request Router    │ 🔄 Format Converter │ 📡 Stream Handler  │
│ • Path matching       │ • Anthropic → OpenAI  │ • SSE processing    │
│ • Method validation   │ • OpenAI → Anthropic  │ • Chunk buffering   │
│ • Auth handling       │ • Model mapping      │ • Error recovery    │
└─────────────────────────────────────────────────────────────────┘
```

### File Structure & Frontend Architecture

```
claude-code-router/
├── 📁 src/
│   ├── 📁 app/                  # Next.js App Router ⭐
│   │   ├── 📁 (main)/home/       # 主页路由组
│   │   │   └── 📁 page.tsx        # 主页 (使用适配器)
│   │   ├── 📁 api/               # API 路由
│   │   │   ├── 📁 v1/messages/    # Claude API 代理
│   │   │   │   └── 📁 route.ts     # POST /api/v1/messages
│   │   │   └── 📁 img-proxy/      # 图片代理
│   │   │       └── 📁 route.ts     # GET /api/img-proxy
│   │   ├── 📁 layout.tsx         # 根布局
│   │   ├── 📁 page.tsx           # 根路由 (重定向)
│   │   └── 📁 globals.css        # 全局样式
│   ├── 📁 components-next/      # Next.js React 组件 ⭐
│   │   └── 📁 LegacyPageWrapper.tsx # 适配器组件
│   ├── 📁 api/                  # API 适配器和类型定义 (复用)
│   │   ├── 📁 adapters/          # 请求和响应格式转换
│   │   │   ├── 📁 format.ts       # 请求/响应格式化
│   │   │   └── 📁 stream.ts       # 流处理
│   │   ├── 📁 types.ts           # API 类型定义
│   │   └── 📁 providers.ts       # 供应商配置
│   ├── 📁 client/               # 客户端模块化代码 (复用)
│   │   ├── 📁 bestPractices/     # 最佳实践模块
│   │   ├── 📁 howToApplyCC/      # 如何使用 CC 模块
│   │   └── 📁 howToImplement/    # 实现指南模块
│   ├── 📁 features/             # 功能模块 (复用)
│   │   ├── 📁 get-started/       # 如何用上 CC
│   │   ├── 📁 best-practices/    # 如何用好 CC
│   │   ├── 📁 how-to-implement/  # 如何实现 CC
│   │   └── 📁 how-to-apply-cc/   # 如何运用 CC
│   ├── 📁 components/           # 布局组件 (复用)
│   ├── 📁 styles/               # 样式系统 (复用)
│   ├── 📁 scripts/              # 脚本系统 (复用)
│   ├── 📁 lib/                  # 工具函数
│   └── 📁 config/               # 全局配置
├── 📁 scripts/                  # 构建自动化
│   └── 📁 build-client.js        # 客户端模块打包
├── 🔧 next.config.mjs           # Next.js 配置
├── 🔧 open-next.config.ts       # OpenNext Cloudflare 配置
└── ⚙️ wrangler.toml             # Cloudflare 配置
```

### Frontend Build Architecture

The project uses a **hybrid architecture** combining Next.js and legacy modules:

#### Next.js Layer (Primary)

- **Framework**: Next.js 15 with App Router
- **Components**: React 19 components
- **Styling**: Tailwind CSS 3
- **API Routes**: Edge Runtime handlers
- **Benefits**: Modern React, SEO-friendly, type-safe

#### Legacy Adapter Layer

- **Purpose**: Reuse existing TypeScript modules without rewriting
- **Implementation**: `LegacyPageWrapper` component
- **Architecture**: Adapter pattern wrapping HTML string templates
- **Benefits**: 100% code reuse, zero migration risk

#### Build Process Flow

```mermaid
graph TB
    A[Next.js App] -->|Uses| B[LegacyPageWrapper]
    B -->|Imports| C[Legacy Modules]
    C -->|Includes| D[src/features/*]
    C -->|Includes| E[src/client/*]
    
    F[src/client/*] -->|esbuild| G[Bundled JS]
    G -->|build-client.js| H[scripts/generated/*]
    
    I[Next.js Build] -->|Outputs| J[.next/]
    J -->|OpenNext| K[Cloudflare Workers]

    style A fill:#61dafb
    style B fill:#ffd700
    style C fill:#e3f2fd
    style K fill:#f38020
```

**Migration Strategy:**

- ✅ **Phase 1**: Next.js + Adapter (Current)
- 🔄 **Phase 2**: Gradual React component migration
- 🎯 **Phase 3**: Remove adapter, pure Next.js

This approach ensures **zero downtime** and **100% code reuse** during migration.

### Key Design Principles

- **🌐 Edge-First**: Optimized for Cloudflare's global network
- **⚛️ React Modern**: Next.js 15 + React 19 architecture
- **⚡ Performance**: Sub-millisecond response times
- **🔄 Streaming**: Native Web Streams API + SSE support
- **🛡️ Type Safety**: Full TypeScript coverage with strict mode
- **♻️ Code Reuse**: 100% legacy code reuse via adapter pattern

## 📦 Migration to Next.js

### Why Next.js?

- ✅ **Modern Stack**: React 19, Tailwind CSS, TypeScript
- ✅ **SEO Friendly**: Server-side rendering support
- ✅ **Developer Experience**: Hot reload, type safety, modern tooling
- ✅ **Edge Runtime**: Compatible with Cloudflare Workers
- ✅ **Future Ready**: Easy to extend with React ecosystem

### Migration Highlights

- **100% Code Reuse**: All business logic preserved
- **Zero Downtime**: Gradual migration strategy
- **Minimal Changes**: Only ~600 lines of adapter code added
- **Performance**: Maintained edge runtime performance
- **Type Safety**: Enhanced TypeScript strict mode

### Migration Documentation

For detailed migration information, see:

- [`MIGRATION_FINAL_SUMMARY.md`](./MIGRATION_FINAL_SUMMARY.md) - Complete migration summary
- [`MIGRATION_PROGRESS.md`](./MIGRATION_PROGRESS.md) - Step-by-step progress
- [`UPGRADE_TO_NEXT_ARCHITECTURE.md`](./UPGRADE_TO_NEXT_ARCHITECTURE.md) - Architecture guide

## 🙏 Acknowledgments

Built with inspiration from:

- [claude-code-router](https://github.com/musistudio/claude-code-router)
- [claude-code-proxy](https://github.com/kiyo-e/claude-code-proxy)

## ⚖️ License & Disclaimer

**MIT License** - Use at your own risk and discretion.

⚠️ **Important**: This is an independent tool, not affiliated with Anthropic,
OpenAI, or OpenRouter. Users are responsible for compliance with all relevant
Terms of Service and API usage policies.
