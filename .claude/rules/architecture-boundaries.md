---
name: architecture-boundaries
status: active
created: 2026-09-13T04:14:13Z
updated: 2026-09-13T08:41:49Z
---

# Architecture Boundaries

These rules are normative. `docs/SRC_ARCHITECTURE.md` describes the current
shape of the system; this file defines which dependency directions and
compatibility seams are allowed.

Use these commands before merging architecture-sensitive changes:

```bash
pnpm run architecture:check
pnpm run architecture:check:self-test
```

## Legacy boundary

### LEG-001 — retired source trees must not return

`src/legacy/`, `src/client/`, `src/components-next/`, `src/scripts/generated/`,
`shared/scripts/generated/`, `LegacyPageWrapper`, the former string-template
module tree, and the retired `scripts/build-client.js`,
`scripts/build-client.cjs`, `scripts/build-client-safe.js`,
`scripts/build-client-safe.cjs`, and `scripts/migrate-to-legacy.sh` entry points
are retired. Do not recreate, copy, vendor, alias, ignore, or restore them as
runnable tooling. Historical code is available from Git history only.

### LEG-002 — the external homepage seam is frozen

The only remaining legacy boundary is this one-way artifact pipeline:

```text
external @cc4pm/homepage index.html
  -> scripts/prepare-cc4pm-homepage.mjs
  -> public/static/cc4pm-homepage.html
     + public/_headers response sandbox
  -> src/components/HomePageWithNav.tsx iframe
     and /api/static/homepage redirect
```

The generated HTML is an opaque leaf artifact. Never hand-edit
`public/static/cc4pm-homepage.html`; make necessary embed maintenance in the
adapter or upgrade the external dependency intentionally, then regenerate it.
`HomePageWithNav` must render it in a sandboxed iframe without
`allow-same-origin` or `allow-popups-to-escape-sandbox`. Direct loads and popup
windows must remain sandboxed by the exact `Content-Security-Policy` entry in
`public/_headers`; do not weaken either isolation layer. CI must regenerate the
artifact and fail on any diff from the committed file, verify the response
policy, and prevent drift. The adapter may read only the exact manifest source
`node_modules/@cc4pm/homepage/index.html`; no source file, including the
adapter, may import, re-export, require, or dynamically import the bare package
or a package subpath. New routes, components, content, services, and utilities
must not parse the artifact, execute its scripts, use it as a data source, or
add dependencies on the preparation pipeline. Maintenance may preserve the
existing seam, but must not expand its responsibilities or add another consumer.

## Compatibility budget

### COMP-001 — compatibility façades must remain thin

A compatibility façade may only re-export, redirect, or translate an old entry
path to one canonical implementation. It must not contain domain logic,
persistent state, validation, data fetching, rendering policy, or a second
implementation of the target behavior.

### COMP-002 — the façade manifest is closed and shrinking

Every allowed compatibility surface must be an exact entry in
`architecture/compatibility-manifest.json`. This includes route façades, ambient
declarations, and compatibility design-token definitions, aliases, Tailwind
mappings, and catalog entries. The manifest is a maximum budget, not a target.
Existing entries may be removed or reduced; they must not be replaced
one-for-one, widened with globs, or joined by new entries. New callers use the
canonical entry directly.

## Context dependency direction

### CTX-001 — dependencies point inward and downward

Use this direction:

```text
App Router entry points
  -> feature UI and feature-owned domain/content
  -> shared foundations
```

- `src/app/**` composes routes, layouts, metadata, and route handlers.
- `src/components/features/<context>/**` contains UI owned by one feature
  context.
- `src/content/<context>/**` and `src/services/<context>/**` contain
  context-owned domain data or services.
- `src/components/brand/**`, `src/config/**`, `src/lib/**`, `src/styles/**`, and
  `src/types/**` are shared foundations.

Shared foundations must not import feature or App Router code. Domain/content
and service layers must not import React UI or route entry points. A feature
must not reach into another feature's private files; move a genuinely shared
primitive into a shared foundation instead.

## Protected contexts

### API-001 — the API proxy has one canonical implementation

`src/app/api/v1/messages/route.ts` is the canonical HTTP controller and owns
environment-driven provider selection. `src/services/llm-provider/**` owns
provider configuration and protocol adapters. The controller may depend on that
service; the service must not depend on App Router pages, UI components, Shares
content, or compatibility routes. `src/app/v1/messages/route.ts` is
compatibility-only and may delegate to the canonical controller without adding
behavior.

### SHR-001 — Shares is a self-contained feature context

The Shares context consists of `src/app/(main)/shares/**`,
`src/components/features/shares/**`, and `src/content/shares/**`. Shares routes
may compose Shares UI and content; Shares UI may use the public Shares content
API and shared foundations. Shares code must not import API route handlers,
LLM-provider internals, homepage preparation code, generated homepage HTML, or
private files from another feature context. Other contexts use only an
intentional public Shares entry point, never its private implementation files.

## Exceptions and enforcement

### EXC-001 — exceptions are exact, local, and removable

An architecture exception must name the affected file and rule, explain why the
canonical direction cannot yet be used, and define the condition for removal.
Blanket directory exemptions, wildcard import exemptions, undocumented
allowlists, and exemptions that permit new callers are forbidden. An exception
must remain narrower than the boundary it relaxes.

The sole current import-direction exception is recorded exactly in
`architecture/compatibility-manifest.json`: `src/app/api/playground/route.ts`
may import `@/app/(main)/playground/_lib/playgroundRequest`. It is
grandfathered, not precedent. Do not add another importer or specifier; move the
shared request contract to a context-neutral owner and remove the manifest entry
when that boundary is changed.

### CI-001 — architecture checks are required gates

`architecture:check` is a read-only validation gate for local development and
CI. `architecture:check:self-test` verifies that the gate rejects representative
violations. A change is not ready to merge if either command fails. Disabling,
skipping, weakening, or converting these checks to advisory output requires an
explicit architecture decision and corresponding rule update.
