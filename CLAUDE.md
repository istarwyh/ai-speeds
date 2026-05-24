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
pnpm run dev                  # Dev server with Turbopack (localhost:3000)
pnpm run build                # Production Next.js build
pnpm run typecheck            # TypeScript type checking (tsc --noEmit)
pnpm run lint                 # ESLint with auto-fix
pnpm run format               # Prettier formatting

# Cloudflare Workers deployment
pnpm run cf:build             # Build via OpenNext for Cloudflare
pnpm run cf:preview           # Local preview of CF build
pnpm run cf:deploy            # Build + deploy to production

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

### Frontend

- `src/app/` uses Next.js App Router routes.
- `src/components/HomePageWithNav.tsx` renders the React/Tailwind homepage,
  navigation, and get-started guide.
- `src/config/providers.ts` stores provider card data used by the get-started
  guide.

### Design Style

The current UI direction is warm tech with light glass surfaces, large rounded
geometry, slate typography, and warm coral highlights. Floating controls and
compact utility CTAs such as prompt buttons should reuse the homepage menu style
via semantic Tailwind tokens instead of hard-coded slate buttons:

```txt
rounded-pill border border-floating-border bg-floating-surface text-text-primary
shadow-floating backdrop-blur-floating transition
hover:translate-y-lift hover:border-primary hover:bg-floating-surface-strong
active:scale-press
```

Use `shadow-primary-glow` for small primary dots and
`bg-floating-surface-strong` with `shadow-floating-strong` for floating
menus/popovers. Token sources are `src/app/globals.css`, `tailwind.config.ts`,
and `src/styles/designTokens.ts`.

### Route Map

| Route                   | Handler                                             |
| ----------------------- | --------------------------------------------------- |
| `POST /api/v1/messages` | Claude API proxy (also at `/v1/messages`)           |
| `GET /api/img-proxy`    | CORS image proxy (also at `/img-proxy` via rewrite) |

## Tech Stack

- **Framework**: Next.js 15 (App Router) + React 19 + Tailwind CSS 3
- **Language**: TypeScript strict mode (`noImplicitAny`,
  `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`)
- **Runtime**: Edge Runtime (V8 Isolates) on Cloudflare Workers via
  `@opennextjs/cloudflare`
- **Build**: Turbopack (dev) + Next.js production build
- **Package manager**: pnpm (`.npmrc`: `shamefully-hoist=true`,
  `strict-peer-dependencies=false`)

## Conventions

- **Path alias**: Use `@/*` for imports from `src/`
- **File naming**: Components PascalCase, utilities camelCase, config kebab-case
- **No `any`**: ESLint error for `@typescript-eslint/no-explicit-any`
- **No non-null assertions**: ESLint error for
  `@typescript-eslint/no-non-null-assertion`
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
- CI deploys on push to `main` via `.github/workflows/deploy.yml` (requires
  `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets)

## CCPM Rules

The following rules are defined in `.claude/rules/` and must be followed:

### DateTime

- **Always use real system datetime** — never estimate or use placeholders
- Get datetime: `date -u +"%Y-%m-%dT%H:%M:%SZ"`
- All dates in frontmatter use ISO 8601 UTC format: `YYYY-MM-DDTHH:MM:SSZ`
- Never change `created` field after initial creation; always update `updated`
  field

### Path Standards

- **Use relative paths** — never expose absolute paths with usernames
- Project files: `internal/auth/server.go` (not `/Users/username/project/...`)
- Cross-project: `../project-name/src/file.ts`
- GitHub issues/comments must never contain absolute paths

### Standard Patterns

- **Fail fast** — check critical prerequisites, then proceed
- **Trust the system** — don't over-validate things that rarely fail
- **Clear errors** — when something fails, say exactly what and how to fix it
- **Minimal output** — show what matters, skip decoration
- **Smart defaults** — only ask when destructive or ambiguous

### GitHub Operations

- **Check remote origin** before ANY write operation to GitHub
- **Don't pre-check authentication** — just run the command and handle failure
- Always specify `--repo` when creating issues
- Use `--json` for structured output when parsing
- Keep operations atomic — one gh command per action

### Test Execution

- **Use test-runner agent** from `.claude/agents/test-runner.md`
- **No mocking** — use real services for accurate results
- Verbose output — capture everything for debugging
- Check test structure first — before assuming code bugs

### Frontmatter Operations

- Standard fields: `name`, `status`, `created`, `updated`
- Status values: `backlog`, `in-progress`, `complete` (PRDs); `open`,
  `in-progress`, `closed` (tasks)
- Always update `updated` field with current datetime on modification

### Strip Frontmatter

- Strip YAML frontmatter before sending content to GitHub
- Command:
  `sed -e '1{/^---$/!b' -e ':a' -e 'N' -e '/\n---$/!ba' -e 'd' -e '}' input.md > output.md`
- Always strip when creating issues, posting comments, or syncing to external
  systems

### Agent Coordination

- **File-level parallelism** — agents working on different files never conflict
- **Explicit coordination** — when same file needed, coordinate explicitly
- **Fail fast** — surface conflicts immediately
- **Human resolution** — conflicts are resolved by humans, not agents
- Stay in assigned file patterns; commit early and often

### Branch & Worktree Operations

- Create branches/worktrees from clean, updated main
- One branch/worktree per epic
- Commit frequently with small, focused commits
- Merge conflicts → stop and report for human resolution
- Delete stale branches/worktrees after merge

### AST-Grep

- Use `ast-grep` for structural code patterns and language-aware refactoring
- Check if installed: `command -v ast-grep >/dev/null 2>&1`
- Pattern syntax: `$VAR` (capture), `$$$` (wildcard), literal code (exact match)
- Supported: JS/TS/TSX, Python, Go, Rust, Ruby, and 20+ languages
