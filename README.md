# AI Speeds

AI Speeds is an AI product platform and universal Claude API proxy. It combines
a native Next.js product site, public tools and resources, and an Anthropic
Messages API compatibility layer for OpenAI-compatible model providers.

Production: **[aispeeds.me](https://aispeeds.me)**

Mirror domain: **[cc.xiaohui.cool](https://cc.xiaohui.cool)**

## What is included

- **Native product site** — React Server Components, grouped
  product/tool/resource navigation, global search, and public content
  attribution.
- **API proxy** — Anthropic Messages API to OpenAI Chat Completions with
  real-time SSE conversion.
- **Multi-provider routing** — DeepSeek, OpenAI, OpenRouter, Kimi, SiliconFlow,
  NVIDIA NIM, and generic OpenAI-compatible endpoints.
- **Tools** — API Playground, whiteboard, recording summary, and AI wireframe.
- **Public resources** — Claude Code onboarding, public Shares, and brand
  assets.
- **Harbor Self-Evolving** — an AI Speeds product route that displays the
  independently published Harbor Chinese site in a full-screen cross-origin
  iframe.
- **Cloudflare deployment** — OpenNext output deployed to Cloudflare Workers.

## Site map

### Products

| Entry                | Route                           | Description                                               |
| -------------------- | ------------------------------- | --------------------------------------------------------- |
| AI API Gateway       | `/#api-gateway`                 | Anthropic-to-OpenAI-compatible API gateway                |
| cc4pm                | `/#cc4pm`                       | AI-native product methods and reusable workflows          |
| Harbor Self-Evolving | `/product/harbor-self-evolving` | Full-screen view of the Harbor Self-Evolving Chinese site |

### Tools

| Tool              | Route                |
| ----------------- | -------------------- |
| API Playground    | `/playground`        |
| Whiteboard        | `/whiteboard`        |
| Recording Summary | `/recording-summary` |
| AI Wireframe      | `/wireframe`         |

### Resources

| Resource               | Route          |
| ---------------------- | -------------- |
| Claude Code onboarding | `/get-started` |
| Public Shares          | `/shares`      |
| Brand assets           | `/brand`       |

`/home` is retained only as a compatibility redirect to `/` while preserving the
URL hash.

## Quick start

### Use the hosted API proxy

```bash
pnpm add -g @anthropic-ai/claude-code

export ANTHROPIC_BASE_URL="https://aispeeds.me"
export ANTHROPIC_API_KEY="your-provider-api-key"

claude
```

API keys are supplied per request and are not stored by AI Speeds.

### Run locally

Use Node.js `^22.18.0 || >=24.0.0`. Node.js 23 is unsupported.

```bash
git clone https://github.com/istarwyh/ai-speeds.git
cd ai-speeds
pnpm install
pnpm run node:check
pnpm run dev
```

Open `http://localhost:3000`.

## Architecture

### Site shells

The App Router is split by presentation context while public URLs remain stable:

```text
src/app/
├── (site)/        native homepage, onboarding, Shares, brand pages
├── (tools)/       playground, whiteboard, recording summary, wireframe
├── (immersive)/   Harbor iframe and full-screen Share deck viewer
├── (legacy)/      compatibility redirects only
├── api/           canonical API controllers
└── layout.tsx     root HTML shell and global styles
```

The native homepage is owned by:

```text
src/app/(site)/page.tsx
  -> src/components/home/HomePage.tsx
  -> src/components/home/*
  -> src/components/site/*
```

Navigation, search, sitemap metadata, and route behavior use these registries:

```text
src/config/features.ts
src/config/site-navigation.ts
src/config/ui-texts.ts
src/lib/navigation.ts
```

The historical `@cc4pm/homepage` artifact pipeline remains only as a frozen
compatibility boundary for `/static/cc4pm-homepage.html` and
`/api/static/homepage`; it is not the active root homepage.

### Harbor Self-Evolving

```text
AI Speeds product navigation
  -> /product/harbor-self-evolving
  -> src/app/(immersive)/product/harbor-self-evolving/page.tsx
  -> https://istarwyh.github.io/harbor-self-evolving/zh/
```

The parent URL stays on `aispeeds.me`. Harbor remains independently built and
published from its own repository.

### API proxy

```text
POST /api/v1/messages
  -> src/app/api/v1/messages/route.ts
  -> src/services/llm-provider/providers.ts
  -> src/services/llm-provider/adapters/format.ts
  -> selected OpenAI-compatible upstream
  -> src/services/llm-provider/adapters/stream.ts
  -> Anthropic-compatible SSE response
```

`POST /v1/messages` is a compatibility facade for the canonical controller.
Provider selection follows the configured environment variables in this order:

1. `DEEPSEEK_BASE_URL`
2. `OPENAI_BASE_URL`
3. `KIMI_BASE_URL`
4. `SILICONFLOW_BASE_URL`
5. `OPENROUTER_BASE_URL`
6. `NVIDIA_NIM_BASE_URL`
7. `OPENAI_COMPATIBLE_BASE_URL`
8. NVIDIA NIM default configuration

## Environment variables

| Variable                     | Purpose                             |
| ---------------------------- | ----------------------------------- |
| `DEEPSEEK_BASE_URL`          | DeepSeek API backend                |
| `OPENAI_BASE_URL`            | OpenAI API backend                  |
| `KIMI_BASE_URL`              | Kimi API backend                    |
| `SILICONFLOW_BASE_URL`       | SiliconFlow API backend             |
| `OPENROUTER_BASE_URL`        | OpenRouter API backend              |
| `NVIDIA_NIM_BASE_URL`        | NVIDIA NIM API backend              |
| `OPENAI_COMPATIBLE_BASE_URL` | Generic OpenAI-compatible backend   |
| `IMAGE_PROXY_WHITELIST`      | Allowed image proxy hosts or `*`    |
| `IMAGE_PROXY_CACHE_TTL`      | Image proxy cache TTL in seconds    |
| `IMAGE_PROXY_TIMEOUT_MS`     | Image proxy timeout in milliseconds |

## Development commands

| Command                                       | Description                                           |
| --------------------------------------------- | ----------------------------------------------------- |
| `pnpm run dev`                                | Prepare compatibility assets and start Turbopack      |
| `pnpm run node:check`                         | Validate the supported Node.js runtime                |
| `pnpm run architecture:check`                 | Validate route and dependency boundaries              |
| `pnpm run lint:check`                         | Run ESLint without modifying files                    |
| `pnpm run typecheck`                          | Run strict TypeScript checks                          |
| `pnpm run shares:validate -- --registry-only` | Validate the Share registry                           |
| `pnpm run build`                              | Build the Next.js application                         |
| `pnpm run cf:build`                           | Build OpenNext output for Cloudflare Workers          |
| `pnpm run cf:preview`                         | Preview the Cloudflare build locally                  |
| `pnpm run cf:deploy`                          | Build and deploy with the configured Wrangler account |

Pushes to `main` run the production workflow in `.github/workflows/deploy.yml`.
The workflow verifies the frozen compatibility artifact, architecture rules,
lint, Share registry/assets, Next.js build, TypeScript, and OpenNext build
before deploying.

## API example

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

## Documentation

- `docs/SRC_ARCHITECTURE.md` — current source layout and dependency direction.
- `docs/QUICK_START_NEW_DEV.md` — contributor workflow.
- `docs/LEGACY_ISOLATION_GUIDE.md` — retired architecture tombstone and frozen
  compatibility boundary.
- `docs/tech/202609/SITE_SHELL_AND_HOMEPAGE_REFACTOR_TECHNICAL_PLAN.md` — native
  homepage and shell migration record.
- `docs/tech/202609/HARBOR_SELF_EVOLVING_INTEGRATION.md` — Harbor integration
  decision and implementation record.

## License

MIT

This is an independent tool and is not affiliated with Anthropic, OpenAI, or
OpenRouter. Users are responsible for compliance with applicable provider terms.
