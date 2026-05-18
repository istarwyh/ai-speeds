# AI Speeds

AI content platform and universal Claude API proxy. Translates Anthropic
Messages API to OpenAI-compatible format, enabling Claude Code to work with any
provider.

Deployed at **[aispeeds.me](https://aispeeds.me)**.

## Features

- **API Proxy** -- Anthropic Messages API to OpenAI Chat Completions / Responses
  API with real-time SSE streaming
- **Multi-Provider** -- DeepSeek, OpenAI, OpenRouter, Kimi, SiliconFlow, NVIDIA
  NIM, or any OpenAI-compatible endpoint
- **React Homepage** -- Native Next.js landing and get-started guide for product
  makers and Claude Code users
- **Edge Deploy** -- Cloudflare Workers (300+ locations, sub-ms cold start)

---

## Application Tabs

The app has 4 main navigation tabs, each serving a distinct purpose:

### 1. Home -- Product Maker Homepage

**Route**: `/`

The default landing page is a native React/Tailwind experience for AI product
makers. It introduces AI Speeds, Claude Code Router, and quick entry points for
the get-started guide, whiteboard, and API playground.

### 2. Get Started -- How to Use Claude Code

**Route**: `/home#get-started`

Step-by-step guide for setting up Claude Code with various AI providers: install
Claude Code, choose a provider, and configure environment variables.

### 3. Whiteboard

**Route**: `/whiteboard`

Free-form drawing and writing tool powered by
[Excalidraw](https://excalidraw.com/). Useful for quick sketches, wireframes,
and visual brainstorming.

### 4. Playground -- API Testing

**Route**: `/playground`

Built-in API test tool supporting three API formats:

- **OpenAI Chat Completions** (`/v1/chat/completions`)
- **OpenAI Responses** (`/v1/responses`)
- **Anthropic Messages** (`/v1/messages`)

Features streaming output (rendered + raw SSE view), model discovery, and
latency measurement.

---

## Quick Start

### Use the hosted instance

```bash
# Install Claude Code
pnpm add -g @anthropic-ai/claude-code

# Point it at AI Speeds
export ANTHROPIC_BASE_URL="https://aispeeds.me"
export ANTHROPIC_API_KEY="your-provider-api-key"

# Start using
claude
```

### Self-host

```bash
git clone https://github.com/your-username/ai-speeds
cd ai-speeds
pnpm install
pnpm run cf:deploy
```

Set environment variables in Cloudflare dashboard or via Wrangler:

| Variable                     | Purpose                                  |
| ---------------------------- | ---------------------------------------- |
| `DEEPSEEK_BASE_URL`          | DeepSeek API backend                     |
| `OPENAI_BASE_URL`            | OpenAI API backend                       |
| `KIMI_BASE_URL`              | Kimi API backend                         |
| `SILICONFLOW_BASE_URL`       | SiliconFlow API backend                  |
| `OPENROUTER_BASE_URL`        | OpenRouter API backend                   |
| `NVIDIA_NIM_BASE_URL`        | NVIDIA NIM API backend                   |
| `OPENAI_COMPATIBLE_BASE_URL` | Generic fallback (auto-detects provider) |

Provider selection is automatic based on which `*_BASE_URL` env vars are set, in
the order listed above.

---

## Architecture

```
POST /api/v1/messages  (Anthropic format)
        |
        v
  selectProvider()  -- picks backend from env vars
        |
        v
  formatAnthropicToOpenAI()  -- converts request format
        |
        v
  POST {provider}/chat/completions  (OpenAI format)
        |
        v
  streamOpenAIToAnthropic()  -- converts response back
        |
        v
  SSE stream  (Anthropic format)
```

### Project Structure

```
src/
  app/
    page.tsx                     # Home page shell with hash-based sections
    api/
      v1/messages/route.ts       # Claude API proxy endpoint
      playground/route.ts        # API test proxy
      playground/models/route.ts # Model list fetcher
      img-proxy/route.ts         # CORS image proxy
    (main)/
      home/page.tsx              # /home route for get-started anchor links
      playground/page.tsx        # API playground UI
      whiteboard/page.tsx        # Whiteboard (Excalidraw)
      brand/page.tsx             # Brand kit
  components/
    HomePageWithNav.tsx           # React homepage, navigation, and get-started guide
    features/whiteboard/          # Whiteboard components
  services/
    llm-provider/
      providers.ts                # Provider configs & model mappings
      adapters/
        format.ts                 # Anthropic <-> OpenAI message conversion
        stream.ts                 # OpenAI SSE -> Anthropic SSE streaming
  config/
    navigation.ts                 # Navigation section IDs
    providers.ts                  # Provider card data for get-started guide
    ui-texts.ts                   # UI text constants (tab labels, etc.)
  lib/                            # Utilities
```

### Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript (strict mode)
- **Runtime**: Edge Runtime on Cloudflare Workers via `@opennextjs/cloudflare`
- **Build**: Turbopack (dev) + Next.js production build

---

## Development

```bash
pnpm install
pnpm run dev             # Dev server at localhost:3000
```

### Commands

| Command               | Description                  |
| --------------------- | ---------------------------- |
| `pnpm run dev`        | Dev server with Turbopack    |
| `pnpm run build`      | Production Next.js build     |
| `pnpm run typecheck`  | TypeScript type checking     |
| `pnpm run lint`       | ESLint with auto-fix         |
| `pnpm run format`     | Prettier formatting          |
| `pnpm run cf:build`   | Build for Cloudflare Workers |
| `pnpm run cf:preview` | Local preview of CF build    |
| `pnpm run cf:deploy`  | Deploy to production         |

## API Usage

### Proxy a Claude request

```bash
curl -X POST https://aispeeds.me/v1/messages \
  -H "Content-Type: application/json" \
  -H "x-api-key: your-provider-api-key" \
  -d '{
    "model": "gpt-4o",
    "messages": [{"role": "user", "content": "Hello"}],
    "max_tokens": 100,
    "stream": true
  }'
```

The proxy accepts Anthropic Messages API format and forwards to the configured
OpenAI-compatible backend. Model names are automatically mapped (e.g.
`claude-sonnet-4-5-20250929` -> provider-specific model ID).

## License

MIT

This is an independent tool, not affiliated with Anthropic, OpenAI, or
OpenRouter. Users are responsible for compliance with all relevant Terms of
Service.
