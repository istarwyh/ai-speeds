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
- **cc4pm Integration** -- Embedded
  [Claude Code for Product Maker](https://github.com/istarwyh/cc4pm) homepage
  with 200+ skills for product makers
- **Edge Deploy** -- Cloudflare Workers (300+ locations, sub-ms cold start)

---

## Application Tabs

The app has 4 main navigation tabs, each serving a distinct purpose:

### 1. Home -- cc4pm Homepage

**Route**: `/`

The default landing page embeds the
**[cc4pm](https://github.com/istarwyh/cc4pm)** (Claude Code for Product Maker)
homepage -- an Anthropic hackathon award-winning project that provides an AI
product private tutor with 200+ skills across 4 core modules:

| Module                                  | Skills | Focus                                               |
| --------------------------------------- | ------ | --------------------------------------------------- |
| **BMM** (Business Modeling Methodology) | 44     | PRD creation, sprint planning, market research      |
| **CIS** (Creative Intelligence System)  | 10     | Brainstorming, design thinking, innovation strategy |
| **WDS** (Web Design System)             | 50     | UX design, prototyping, Figma integration           |
| **Engineering**                         | 94+    | TDD, security review, agentic engineering           |

The homepage content is sourced from the `@cc4pm/homepage` npm package and
auto-synced via a multi-repo CI/CD pipeline (see
[cc4pm Pipeline](#cc4pm-pipeline) below).

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
    api/
      v1/messages/route.ts       # Claude API proxy endpoint
      playground/route.ts        # API test proxy
      playground/models/route.ts # Model list fetcher
      img-proxy/route.ts         # CORS image proxy
      static/homepage/route.ts   # Serves cc4pm homepage HTML
    (main)/
      home/page.tsx              # Home page (cc4pm iframe / legacy wrapper)
      playground/page.tsx        # API playground UI
      whiteboard/page.tsx        # Whiteboard (Excalidraw)
      brand/page.tsx             # Brand kit
  components/
    HomePageWithNav.tsx           # Homepage with sidebar + cc4pm iframe
    LegacyPageWrapper.tsx         # Bridge: legacy HTML strings into React
    features/whiteboard/          # Whiteboard components
  services/
    llm-provider/
      providers.ts                # Provider configs & model mappings
      adapters/
        format.ts                 # Anthropic <-> OpenAI message conversion
        stream.ts                 # OpenAI SSE -> Anthropic SSE streaming
  config/
    navigation.ts                 # Navigation section IDs
    ui-texts.ts                   # UI text constants (tab labels, etc.)
  legacy/                         # Legacy HTML-string templates
    features/get-started/         # "How to use CC" guide
    scripts/generated/            # Auto-generated cc4pm homepage HTML
  lib/                            # Utilities
```

### Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19
- **Styling**: Tailwind CSS 3
- **Language**: TypeScript (strict mode)
- **Runtime**: Edge Runtime on Cloudflare Workers via `@opennextjs/cloudflare`
- **Build**: Turbopack (dev) + esbuild (legacy client)

---

## cc4pm Pipeline

The cc4pm homepage is maintained in a separate repository
([istarwyh/cc4pm](https://github.com/istarwyh/cc4pm)) and automatically synced
to this project via a multi-repo CI/CD pipeline:

```
cc4pm/main (push to packages/homepage/**)
    |
    v
publish-homepage.yml  (in cc4pm repo)
    |--- npm publish @cc4pm/homepage@x.y.z
    |--- repository_dispatch "cc4pm-homepage-released"
         |
         v
sync-cc4pm.yml  (in this repo)
    |--- pnpm add @cc4pm/homepage@x.y.z
    |--- git commit & push
    |--- Cloudflare Workers auto-deploy
```

At build time, `scripts/build-client.cjs` reads `@cc4pm/homepage/index.html` and
embeds it as a TypeScript constant (since Cloudflare Workers cannot use
`fs.readFileSync` at runtime). The HTML is then served via
`/api/static/homepage`.

---

## Development

```bash
pnpm install
pnpm run build:client   # Required before first dev session (generates cc4pm HTML)
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
