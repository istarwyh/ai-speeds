# Claude-Code-Router

Universal API proxy for using Claude Code with multiple AI providers. Seamlessly translates between Anthropic's Claude API and OpenAI-compatible APIs.

## ✨ Features

- **🔄 API Translation**: Anthropic ↔ OpenAI format conversion
- **🌍 Multi-Provider**: OpenRouter, OpenAI, DeepSeek, Kimi, SiliconFlow
- **⚡ Edge Computing**: Cloudflare Workers for global performance
- **📡 Streaming Support**: Real-time response streaming
- **🛡️ Type Safety**: Full TypeScript implementation

## 🚀 Quick Start

### 1. Install Claude Code
```bash
npm install -g @anthropic-ai/claude-code
```

### 2. Configure API Access
```bash
# Option A: Use shared instance (testing only)
export ANTHROPIC_BASE_URL="https://cc.xiaohui.cool"
export ANTHROPIC_API_KEY="your-provider-api-key"

# Option B: Deploy your own instance (recommended)
git clone https://github.com/your-username/claude-code-router
cd claude-code-router && wrangler deploy
export ANTHROPIC_BASE_URL="https://your-domain.workers.dev"
```

### 3. Start Using Claude Code
```bash
source ~/.bashrc && claude
```

### Provider Setup

| Provider | API Key Source | Base URL |
|----------|----------------|----------|
| OpenRouter | [openrouter.ai](https://openrouter.ai) | `https://cc.xiaohui.cool` |
| DeepSeek | [platform.deepseek.com](https://platform.deepseek.com) | Deploy with `DEEPSEEK_BASE_URL` |
| OpenAI | [platform.openai.com](https://platform.openai.com) | Deploy with `OPENAI_BASE_URL` |


## 🏗️ Architecture

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

## ⚡ Technical Stack

### Core Runtime
- **Platform**: Cloudflare Workers (V8 Isolates)
- **Language**: TypeScript with strict typing
- **Runtime**: Edge-optimized JavaScript (no Node.js dependencies)
- **Deployment**: Wrangler CLI + GitHub Actions

### Architecture Patterns
| Pattern | Implementation | Benefit |
|---------|----------------|----------|
| **Edge Computing** | 300+ global locations | <1ms cold start, 0ms warm start |
| **Serverless** | Auto-scaling isolates | 0 maintenance, infinite scale |
| **Type Safety** | Full TypeScript coverage | Runtime error prevention |
| **Streaming** | Web Streams API | Real-time response delivery |
| **Modular Design** | Functional composition | Easy testing & maintenance |

### Build System
- **Bundler**: esbuild (10x faster than webpack)
- **Module System**: ES6 with tree-shaking
- **Asset Pipeline**: TypeScript → JavaScript + type checking
- **Hot Reload**: Wrangler dev server with instant updates


## 🔧 Deployment

### Development
```bash
git clone https://github.com/your-username/claude-code-router
cd claude-code-router
npm install && npm install -g wrangler
npm run build:client    # Build frontend modules
npm run dev             # Start development server
```

### Production Deployment
```bash
# Configure environment variables
wrangler secret put OPENROUTER_BASE_URL       # OpenRouter backend
wrangler secret put DEEPSEEK_BASE_URL         # DeepSeek backend  
wrangler secret put OPENAI_BASE_URL           # OpenAI backend

# Deploy to Cloudflare Workers
npm run deploy
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
| Claude Model | OpenRouter | DeepSeek | OpenAI |
|--------------|------------|----------|---------|
| `claude-3-5-haiku-20241022` | `anthropic/claude-3.5-haiku` | `deepseek-chat` | `gpt-4o-mini` |
| `claude-3-5-sonnet-20241022` | `anthropic/claude-3.5-sonnet` | `deepseek-chat` | `gpt-4o` |
| `claude-3-opus-20240229` | `anthropic/claude-3-opus` | `deepseek-reasoner` | `gpt-4o` |

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
│   ├── 📁 client/              # Frontend & documentation system (TypeScript source)
│   │   ├── 📁 bestPractices/    # Best practices module (development source)
│   │   │   ├── 📁 core/          # BestPracticesManager & business logic
│   │   │   ├── 📁 data/          # Card data & configuration
│   │   │   ├── 📁 renderers/     # UI rendering components
│   │   │   ├── 📁 services/      # Content & markdown services
│   │   │   ├── 📁 handlers/      # Event handling logic
│   │   │   └── 📁 index.ts       # Module entry point
│   │   ├── 📁 howToImplement/   # Implementation guide module (development source)
│   │   │   ├── 📁 core/          # HowToImplementManager
│   │   │   ├── 📁 data/          # Implementation data & configuration
│   │   │   ├── 📁 handlers/      # Event handling
│   │   │   ├── 📁 renderers/     # UI rendering components
│   │   │   ├── 📁 services/      # Content services
│   │   │   └── 📁 index.ts       # Module entry point
│   │   ├── 📁 howToApplyCC/     # Claude Code application guide (development source)
│   │   │   ├── 📁 core/          # Application logic
│   │   │   ├── 📁 data/          # Application guide data
│   │   │   ├── 📁 handlers/      # Event handling
│   │   │   └── 📁 index.ts       # Module entry point
│   │   └── 📁 shared/           # Shared components & utilities
│   │       ├── 📁 renderers/     # Base renderer classes
│   │       ├── 📁 types/         # Shared TypeScript types
│   │       ├── 📁 services/      # Shared services (share service, etc.)
│   │       └── 📁 utils/         # Common utilities
│   ├── 📁 server/              # Worker runtime logic
│   └── 📁 tests/               # Test suites
├── 📁 modules/                 # Static HTML templates + compiled JavaScript
│   ├── 📁 best-practices/      # Best practices HTML + bundled client code
│   ├── 📁 how-to-implement/    # Implementation guide HTML + bundled code
│   ├── 📁 how-to-apply-cc/     # Claude Code guide HTML + bundled code
│   ├── 📁 get-started/         # Getting started static components
│   └── 📁 index.ts             # Main module router
├── 📁 shared/                  # Cross-platform utilities & runtime scripts
│   └── 📁 index.ts             # Shared utilities
├── 📁 scripts/                 # Build automation & bundling
│   └── 📁 build-client.js      # Frontend build orchestrator
├── 📁 docs/                    # Documentation
│   ├── 📁 cc-best-practices.md # Claude Code best practices
│   ├── 📁 claude-code-sdk.md   # SDK documentation
│   └── 📁 DIRECTORY_STRUCTURE.md # Project structure guide
├── 🔧 index.ts                 # Worker entry point (fetch handler)
├── 🔧 formatRequest.ts         # Anthropic → OpenAI transformer
├── 🔧 formatResponse.ts        # OpenAI → Anthropic transformer
├── 🔧 streamResponse.ts        # Server-Sent Events handler
├── 🔧 types.ts                 # TypeScript definitions
└── ⚙️ wrangler.toml            # Worker configuration & bindings
```

### Frontend Build Architecture
The project uses a **dual-layer frontend architecture**:

#### Development Layer (`src/client/`)
- **Purpose**: Modern TypeScript development with full module structure
- **Architecture**: Modular design (core, data, handlers, renderers, services)
- **Benefits**: Type safety, code organization, maintainability
- **Build Target**: Gets compiled and bundled by `scripts/build-client.js`

#### Runtime Layer (`modules/`)  
- **Purpose**: Production-ready HTML templates + compiled JavaScript
- **Architecture**: Static HTML containers + bundled client code
- **Benefits**: Single-file deployment, optimized for Cloudflare Workers
- **Source**: Generated from development layer through build process

#### Build Process Flow
```mermaid
graph LR
    A[src/client/*/index.ts] -->|esbuild| B[Bundled JavaScript]
    B -->|build-client.js| C[modules/*/index.ts]
    C -->|Runtime| D[HTML + JS Module]
    E[npm run build:client] -->|Orchestrates| A

    style A fill:#e3f2fd
    style B fill:#fff3e0
    style C fill:#e8f5e8
    style D fill:#fce4ec
```

**Active Modules:**
- **Best Practices** (`src/client/bestPractices` → `modules/best-practices`)
- **How to Implement** (`src/client/howToImplement` → `modules/how-to-implement`)
- **How to Apply Claude Code** (`src/client/howToApplyCC` → `modules/how-to-apply-cc`)
- **Get Started** (Static components in `modules/get-started`)

This approach ensures **clean separation** between development complexity and runtime efficiency.

### Key Design Principles
- **🌐 Edge-First**: Optimized for Cloudflare's global network
- **🔒 Zero Dependencies**: No external runtime dependencies
- **⚡ Performance**: Sub-millisecond response times
- **🔄 Streaming**: Native Web Streams API support
- **🛡️ Type Safety**: Full TypeScript coverage with strict mode

## 🙏 Acknowledgments

Built with inspiration from:
- [claude-code-router](https://github.com/musistudio/claude-code-router)
- [claude-code-proxy](https://github.com/kiyo-e/claude-code-proxy)

## ⚖️ License & Disclaimer

**MIT License** - Use at your own risk and discretion.

⚠️ **Important**: This is an independent tool, not affiliated with Anthropic, OpenAI, or OpenRouter. Users are responsible for compliance with all relevant Terms of Service and API usage policies.