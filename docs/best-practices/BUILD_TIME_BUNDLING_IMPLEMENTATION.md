# Historical Tombstone: Retired Client Bundling

> **Historical only — do not implement or restore this design.**

The build-time client-bundling architecture previously documented here has been
removed. This file remains only to prevent old links from being mistaken for
current guidance.

Do not recreate, copy from Git history, vendor, alias, or ignore any of these
retired surfaces:

- `src/client/`
- `src/scripts/generated/`
- `shared/scripts/generated/`
- `scripts/build-client.js`
- `scripts/build-client.cjs`
- `scripts/build-client-safe.js`
- `scripts/build-client-safe.cjs`
- `scripts/migrate-to-legacy.sh`
- `LegacyPageWrapper`

Do not add package scripts, build steps, or CI paths that restore or invoke
them. Historical implementation details are available from Git history only.

Current architecture is defined by:

- `docs/SRC_ARCHITECTURE.md`
- `.claude/rules/architecture-boundaries.md`
