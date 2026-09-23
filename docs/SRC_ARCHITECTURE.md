# Source Architecture

This document is the current authority for the repository's source layout and
import direction. Normative constraints and rule IDs live in
`.claude/rules/architecture-boundaries.md`.

Last reviewed: `2026-09-23T02:00:01Z`.

## System map

```text
Next.js App Router
├── product routes and route-local UI
├── API route controllers
├── feature UI
│   ├── native homepage and site shell
│   ├── Shares
│   ├── playground
│   └── whiteboard
├── feature domain/content
│   ├── src/content/shares
│   └── src/services/llm-provider
└── shared foundations
    ├── src/components/brand
    ├── src/config
    ├── src/lib
    ├── src/styles
    └── src/types
```

The project no longer has the retired `src/legacy/`, `src/client/`, or
`src/components-next/` trees; the `src/scripts/generated/` or
`shared/scripts/generated/` client-bundle outputs; `LegacyPageWrapper`; or the
retired `scripts/build-client.js`, `scripts/build-client.cjs`,
`scripts/build-client-safe.js`, `scripts/build-client-safe.cjs`, and
`scripts/migrate-to-legacy.sh` entry points. Instructions that describe them are
historical, not current architecture.

## App Router contexts

### Application shells

- `src/app/layout.tsx` owns the root HTML shell, global CSS, and default site
  metadata.
- `src/app/(site)/layout.tsx` owns the site header and footer used by the native
  homepage, onboarding, Shares, and brand pages.
- `src/app/(tools)/layout.tsx` provides the focused tool shell.
- `src/app/(immersive)/**` is reserved for full-screen experiences without site
  chrome, including the YourBuddy and Harbor iframes and Share deck viewer.
- `src/app/(legacy)/**` contains compatibility redirects only.
- `src/app/(site)/page.tsx` composes the native homepage from
  `src/components/home/**`; `src/components/site/**` owns navigation, global
  search, and footer UI.
- Route-local implementation details stay next to their route, using folders
  such as `_components` and `_lib` when they are not shared.

### Product routes

Current public contexts include:

- `/` — native AI Speeds homepage.
- `/get-started` — Claude Code onboarding.
- `/product/yourbuddy` — sandboxed immersive cross-origin YourBuddy product
  page.
- `/product/harbor-self-evolving` — immersive cross-origin Harbor product page.
- `/playground` — request-building UI plus its own API endpoints.
- `/whiteboard` — the Excalidraw-based whiteboard feature.
- `/wireframe` — AI wireframe editor.
- `/recording-summary` — recording and transcription workflow.
- `/shares`, `/shares/[slug]`, `/shares/[slug]/deck` — public Shares catalog,
  detail, and deck viewer.
- `/brand` and `/design/style-guide` — brand and design-system references.

The route map is not permission to import across contexts. Route entry points
compose their own feature code and shared foundations; private feature files do
not become shared merely because they are under `src/`.

## API proxy context

The Claude-compatible proxy has one canonical implementation:

```text
POST /api/v1/messages
  -> src/app/api/v1/messages/route.ts
  -> src/services/llm-provider/providers.ts
  -> src/services/llm-provider/adapters/format.ts
  -> src/services/llm-provider/adapters/stream.ts
  -> selected OpenAI-compatible upstream
```

The controller extracts `x-api-key` and performs environment-driven provider
selection. It uses the service-owned provider configuration and protocol
adapters to convert Anthropic request/response formats and stream Server-Sent
Events when requested. The route declares the Node.js runtime.

Provider selection order is:

1. `DEEPSEEK_BASE_URL`
2. `OPENAI_BASE_URL`
3. `KIMI_BASE_URL`
4. `SILICONFLOW_BASE_URL`
5. `OPENROUTER_BASE_URL`
6. `NVIDIA_NIM_BASE_URL`
7. `OPENAI_COMPATIBLE_BASE_URL`, with provider detection
8. the default NVIDIA NIM configuration

`POST /v1/messages` is a compatibility façade that delegates to the canonical
controller. New code must use the canonical implementation rather than adding
logic to the alias.

## Shares context

Shares is a complete vertical feature:

```text
src/app/(site)/shares/**                 catalog and detail pages
src/app/(immersive)/shares/[slug]/deck  full-screen deck viewer
  -> src/components/features/shares/**
  -> src/content/shares/**
  -> public assets at https://assets.aispeeds.me
```

- `src/content/shares/types.ts` defines the content contract.
- `src/content/shares/registry.ts` owns registration, lookup, URL construction,
  and publication validation.
- `src/content/shares/<slug>.ts` contains share-specific metadata and slide
  content.
- `src/components/features/shares/index.ts` is the public UI entry point for
  Shares routes.
- Shares routes generate static parameters from public registry entries and
  reject unknown or non-public slugs.

Routes may import the public Shares UI and content APIs. Shares UI may import
Shares content types/helpers and shared brand, config, and utility modules.
Neither layer imports the API proxy, another feature's private implementation,
or the homepage artifact pipeline.

## Native homepage and frozen compatibility seam

The active root homepage is native Next.js/React:

```text
src/app/(site)/page.tsx
  -> src/components/home/HomePage.tsx
  -> src/components/home/**
  -> src/components/site/**
  -> src/config/features.ts + src/config/site-navigation.ts
```

The former external cc4pm homepage pipeline remains only as a frozen
compatibility boundary:

```text
external @cc4pm/homepage index.html
  -> scripts/prepare-cc4pm-homepage.mjs
  -> public/static/cc4pm-homepage.html
     + public/_headers response sandbox
  -> src/components/HomePageWithNav.tsx (inactive compatibility component)
     and /api/static/homepage redirect
```

`prepare:homepage` still regenerates the artifact before development and
production builds so old direct URLs remain deterministic. `public/_headers`
applies a response sandbox to direct and popup loads. CI regenerates the file,
compares it with the committed artifact, and fails on drift. The native `/`
route never renders this iframe.

This is an isolation seam, not a platform for new work. The adapter may read
only `node_modules/@cc4pm/homepage/index.html`; no source file, including the
adapter, may import, re-export, require, or dynamically import the package or a
subpath. New features cannot depend on the external HTML, generated file,
preparation script, DOM shape, or scripts inside the compatibility iframe. Add
native routes/components instead. Do not add another consumer or move
application behavior into the preparation step.

YourBuddy and Harbor Self-Evolving are separate, intentional immersive product
boundaries. Their routes are registered in `src/config/features.ts`, appear in
the product navigation through `src/config/site-navigation.ts`, and load only
their declared GitHub Pages origins from route-local iframe pages:

```text
src/app/(immersive)/product/yourbuddy/page.tsx
src/app/(immersive)/product/harbor-self-evolving/page.tsx
```

The YourBuddy iframe uses an explicit sandbox and narrowly delegated browser
capabilities for its verified search, storage, popup, download, clipboard, and
fullscreen behavior. Neither product iframe is part of the frozen cc4pm homepage
compatibility seam.

## Dependency direction

| From                                   | May import                                                                         | Must not import                                                         |
| -------------------------------------- | ---------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| `src/app/**`                           | its feature UI/domain, route-local code, shared foundations                        | another context's private files without an explicit public contract     |
| `src/components/features/<context>/**` | the same context's public domain/content API, brand UI, config, lib, styles, types | App Router entries, API route handlers, another feature's private files |
| `src/content/<context>/**`             | same-context files and non-UI shared foundations                                   | React components, App Router entries, unrelated services                |
| `src/services/<context>/**`            | same-context files and non-UI shared foundations                                   | React components, App Router entries, unrelated feature content         |
| shared foundations                     | same or lower-level shared foundations                                             | feature UI/domain and App Router entries                                |

The intended flow is always composition inward from routes and downward toward
feature-owned logic and shared leaves. If two contexts need the same primitive,
extract a context-neutral module; do not make one feature depend on the other.

## Compatibility façades

Compatibility surfaces are temporary delegates, not alternate implementation
locations. Current route-level compatibility includes:

- `src/app/(legacy)/home/page.tsx`, which redirects the former `/home` entry to
  `/` while preserving the hash.
- `src/app/v1/messages/route.ts`, which re-exports the canonical message
  handler.
- `src/app/api/static/homepage/route.ts`, which redirects to the prepared
  homepage artifact.
- the `/img-proxy` rewrite, which delegates to `/api/img-proxy`.

`architecture/compatibility-manifest.json` is the exact, closed inventory. In
addition to the route façades above, it records the ambient declaration in
`types/cc4pm-homepage.d.ts` and the practices compatibility design-token
surfaces in `src/app/globals.css`, `tailwind.config.ts`, and
`src/styles/designTokens.ts`: definitions, aliases, Tailwind mappings, and
catalog entries. These entries exist only to preserve current consumers; new
code must not adopt them.

A façade may redirect, re-export, or delegate; it may not own business logic,
validation, rendering policy, or state. The entire compatibility inventory is a
maximum budget that must only shrink. New entry points must be canonical rather
than added to that budget.

The manifest also records the sole import-direction exception:
`src/app/api/playground/route.ts` imports
`@/app/(tools)/playground/_lib/playgroundRequest`. This exact API-to-tools edge
is grandfathered while both sides share the request contract. Do not copy it.
When that boundary changes, move the contract to a context-neutral owner and
remove the exception.

## Architecture validation

Run both checks when changing imports, route ownership, compatibility paths, or
the homepage seam:

```bash
pnpm run architecture:check
pnpm run architecture:check:self-test
```

The first command validates the repository. The second verifies the boundary
checker itself. See `.claude/rules/architecture-boundaries.md` for the normative
rules `LEG-001` through `CI-001`.
