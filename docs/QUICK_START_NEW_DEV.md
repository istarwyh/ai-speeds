# New Developer Quick Start

The legacy migration is complete. Develop against the current Next.js App Router
architecture. Do not recreate `src/legacy/`, `src/client/`,
`src/components-next/`, `src/scripts/generated/`, `shared/scripts/generated/`,
or `LegacyPageWrapper`. The retired entry points `scripts/build-client.js`,
`scripts/build-client.cjs`, `scripts/build-client-safe.js`,
`scripts/build-client-safe.cjs`, and `scripts/migrate-to-legacy.sh` must not be
restored or run from Git history.

## 1. Install and run

Use Node.js `^22.18.0 || >=24.0.0`. Node.js 23 is intentionally unsupported; the
Share tooling relies on native, unflagged TypeScript execution available at the
declared runtime floor.

```bash
pnpm install
pnpm run node:check
pnpm run dev
```

The development server prepares the external homepage artifact before starting
Next.js. Open `http://localhost:3000`.

## 2. Read the architecture contract

Read these before adding a route or moving code:

- `docs/SRC_ARCHITECTURE.md` — current source map and import direction.
- `.claude/rules/architecture-boundaries.md` — normative boundary rules and rule
  IDs.
- `docs/LEGACY_ISOLATION_GUIDE.md` — tombstone for the retired migration plan.

## 3. Choose the owning context

Put code with the context that owns it:

```text
src/app/(main)/<feature>/          route entries and route-local composition
src/components/features/<feature>/ feature-owned React UI
src/content/<feature>/             feature-owned content and domain records
src/services/<feature>/            feature-owned service logic
```

Use shared foundations only for context-neutral primitives:

```text
src/components/brand/  shared brand UI
src/config/            shared configuration
src/lib/               shared utilities
src/styles/            design tokens and shared styles
src/types/             cross-context type declarations
```

Do not place feature-specific logic in a shared folder to bypass a dependency
boundary.

## 4. Follow import direction

The allowed direction is:

```text
App Router entry
  -> same-context feature UI and domain/content
  -> shared foundations
```

Practical rules:

1. Routes compose; they do not become reusable libraries.
2. Feature UI may use the same feature's public content/domain API and shared
   foundations.
3. Content and services never import React components or App Router files.
4. Shared foundations never import feature code.
5. Features do not import another feature's private files. Extract a genuinely
   shared primitive instead.
6. Import the public entry point of a context when one exists; do not
   deep-import its private implementation.

Example:

```tsx
// src/app/(main)/my-feature/page.tsx
import { MyFeature } from '@/components/features/my-feature/MyFeature';

export default function MyFeaturePage() {
  return <MyFeature />;
}
```

Default to a Server Component. Add `'use client'` only to the smallest component
that needs browser state, effects, or event handlers.

`architecture/compatibility-manifest.json` records one grandfathered API-to-main
import for the playground request contract. It is an exact exception, not an
example to copy. Do not create another cross-context import.

## 5. Respect protected contexts

### API proxy

The canonical Claude-compatible controller is
`src/app/api/v1/messages/route.ts`; provider and protocol logic belongs in
`src/services/llm-provider/**`. `/v1/messages` is compatibility-only. UI code
must not import route handlers or provider internals.

### Shares

Shares lives in:

- `src/app/(main)/shares/**`
- `src/components/features/shares/**`
- `src/content/shares/**`

Keep new Shares metadata in the content registry model and Shares UI in its
feature directory. Do not couple Shares to the API proxy or homepage artifact.

### External homepage

The only remaining legacy boundary is frozen:

```text
external @cc4pm/homepage index.html
  -> scripts/prepare-cc4pm-homepage.mjs
  -> public/static/cc4pm-homepage.html
     + public/_headers response sandbox
  -> src/components/HomePageWithNav.tsx iframe
     and /api/static/homepage redirect
```

Never hand-edit the generated HTML. It is rendered in a sandboxed iframe without
`allow-same-origin` or `allow-popups-to-escape-sandbox`; `public/_headers`
applies the frozen response sandbox to direct loads and popup documents. CI
regenerates the artifact, validates this policy, and fails on any diff,
verifying deterministic output and preventing committed artifact drift.
Necessary embed maintenance belongs in the adapter, which may read only
`node_modules/@cc4pm/homepage/index.html`; no source file may import, re-export,
require, or dynamically import the package or a subpath. New feature code must
not parse, patch, or build behavior on the artifact. Add native App Router
routes or components instead. Compatibility façades, ambient declarations, and
design-token surfaces are enumerated in
`architecture/compatibility-manifest.json`; this is a closed, shrinking budget,
and its façades must remain thin delegates.

## 6. Validate before handoff

```bash
pnpm run node:check
pnpm run node:check:self-test
pnpm run lint:check
pnpm run typecheck
pnpm run architecture:check
pnpm run architecture:check:self-test
pnpm run build
```

`pnpm run lint` applies fixes; use it intentionally when you want files changed.
The architecture commands are required whenever imports, route ownership,
compatibility paths, or the homepage seam change.

A change is ready for review when:

- its route, UI, content, and service files have a clear owner;
- imports follow the documented direction;
- no retired source tree or new homepage-artifact dependency exists;
- no compatibility façade has gained logic or been added to the budget; and
- the relevant validation commands pass.
