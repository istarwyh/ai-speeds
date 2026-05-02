# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Project Overview

**AI Speeds** (`aispeeds`) — an AI content platform and Claude API proxy.
Translates Anthropic API format to OpenAI-compatible format, enabling Claude
Code to work with providers like DeepSeek, OpenRouter, OpenAI, Kimi,
SiliconFlow, and NVIDIA NIM.

Deployed to Cloudflare Workers at `cc.xiaohui.cool` / `aispeeds.me`.

## Commands

```bash
pnpm install                  # Install dependencies
pnpm run build:client         # REQUIRED before first dev session (generates legacy content maps)
pnpm run dev                  # Dev server with Turbopack (localhost:3000)
pnpm run build                # Production Next.js build
pnpm run typecheck            # TypeScript type checking (tsc --noEmit)
pnpm run lint                 # ESLint with auto-fix
pnpm run format               # Prettier formatting

# Cloudflare Workers deployment
pnpm run cf:build             # Build via OpenNext for Cloudflare
pnpm run cf:preview           # Local preview of CF build
pnpm run cf:deploy            # Build + deploy to production

# Legacy client (esbuild bundling)
pnpm run build:client         # Smart build with change detection
pnpm run build:client:direct  # Force full rebuild
```

**No test framework is configured.** There are no test files or test runner in
this project.

## Architecture

### Three-Layer API Proxy

```
Controller:  src/app/api/v1/messages/route.ts   — HTTP handling, API key extraction
Service:     src/services/llm-provider/          — Provider selection, format conversion
             ├── providers.ts                    — Provider configs & model mappings
             └── adapters/
                 ├── format.ts                   — Anthropic ↔ OpenAI message/tool conversion
                 └── stream.ts                   — OpenAI SSE → Anthropic SSE streaming
Utility:     src/lib/, src/config/               — Shared utilities
```

### Provider Selection (priority order in `selectProvider()`)

1. `DEEPSEEK_BASE_URL` → 2. `OPENAI_BASE_URL` → 3. `KIMI_BASE_URL` → 4.
   `SILICONFLOW_BASE_URL` → 5. `OPENROUTER_BASE_URL` → 6. `NVIDIA_NIM_BASE_URL`
   → 7. `OPENAI_COMPATIBLE_BASE_URL` (auto-detects) → 8. Default: `nvidia-nim`

API keys are passed per-request via `x-api-key` header, not stored server-side.

### Hybrid Frontend

- **New code**: `src/app/` (Next.js App Router) + `src/components/` (React)
- **Legacy code**: `src/legacy/` — excluded from ESLint and TypeScript checking
- **Bridge**: `LegacyPageWrapper` injects legacy HTML via
  `dangerouslySetInnerHTML` and executes scripts
- **Homepage content**: Served from `@cc4pm/homepage` NPM package, built into
  `src/legacy/scripts/generated/homepageHtml`, served via `/api/static/homepage`
  route

### Route Map

| Route                      | Handler                                             |
| -------------------------- | --------------------------------------------------- |
| `POST /api/v1/messages`    | Claude API proxy (also at `/v1/messages`)           |
| `GET /api/img-proxy`       | CORS image proxy (also at `/img-proxy` via rewrite) |
| `GET /api/static/homepage` | Serves generated homepage HTML                      |

## Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19 + Tailwind CSS 3
- **Language**: TypeScript strict mode (`noImplicitAny`,
  `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`)
- **Runtime**: Edge Runtime (V8 Isolates) on Cloudflare Workers via
  `@opennextjs/cloudflare`
- **Build**: Turbopack (dev) + esbuild (legacy client modules)
- **Package manager**: pnpm (`.npmrc`: `shamefully-hoist=true`,
  `strict-peer-dependencies=false`)

## Conventions

- **Path alias**: Use `@/*` for imports from `src/`
- **File naming**: Components PascalCase, utilities camelCase, config kebab-case
- **No `any`**: ESLint error for `@typescript-eslint/no-explicit-any`
- **No non-null assertions**: ESLint error for
  `@typescript-eslint/no-non-null-assertion`
- **Legacy code**: Never add new code to `src/legacy/` — it's excluded from type
  checking and linting
- **Single quotes**, semicolons, trailing commas, 120 char print width (see
  `.prettierrc.json`)

### Commit Convention

Conventional Commits enforced by commitlint. Types: `feat`, `fix`, `docs`,
`style`, `refactor`, `test`, `revert`, `chore`, `perf`, `ci`, `build`,
`security`.

Subject: lowercase, 3-100 chars, no period. Header max 120 chars.

### Git Hooks (Husky)

- **pre-commit**: lint-staged (ESLint fix + Prettier), rejects files >500KB
- **commit-msg**: commitlint validation
- **pre-push**: Scoped TypeScript typecheck on changed files under `src/app`,
  `src/components-next`, `scripts`, `modules`

## Environment Variables

| Variable                     | Purpose                                  |
| ---------------------------- | ---------------------------------------- |
| `DEEPSEEK_BASE_URL`          | DeepSeek API backend                     |
| `OPENAI_BASE_URL`            | OpenAI API backend                       |
| `KIMI_BASE_URL`              | Kimi API backend                         |
| `SILICONFLOW_BASE_URL`       | SiliconFlow API backend                  |
| `OPENROUTER_BASE_URL`        | OpenRouter API backend                   |
| `NVIDIA_NIM_BASE_URL`        | NVIDIA NIM API backend                   |
| `OPENAI_COMPATIBLE_BASE_URL` | Generic fallback (auto-detects provider) |
| `IMAGE_PROXY_WHITELIST`      | Comma-separated hostnames or `*`         |
| `IMAGE_PROXY_CACHE_TTL`      | Cache TTL in seconds (default 86400)     |
| `IMAGE_PROXY_TIMEOUT_MS`     | Proxy timeout (default 12000)            |

## Build Notes

- `next.config.mjs` has `eslint.ignoreDuringBuilds: true` and
  `typescript.ignoreBuildErrors: true` (temporary during migration)
- `src/legacy/` is excluded from TypeScript (`tsconfig.json`) and ESLint
  (`eslint.config.js`)
- CI deploys on push to `main` via `.github/workflows/deploy.yml` (requires
  `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets)
