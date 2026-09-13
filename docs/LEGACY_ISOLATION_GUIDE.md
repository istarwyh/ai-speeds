# Legacy Isolation Guide — Tombstone

This migration guide is retired. The isolation migration completed, and the
former string-template implementation and retired source trees were removed.

Do not recreate `src/legacy/`, `src/client/`, `src/components-next/`,
`src/scripts/generated/`, `shared/scripts/generated/`, `LegacyPageWrapper`, the
former feature/client bundle tree, `scripts/build-client.js`,
`scripts/build-client.cjs`, `scripts/build-client-safe.js`,
`scripts/build-client-safe.cjs`, or `scripts/migrate-to-legacy.sh`. New features
belong in the current Next.js App Router contexts described by:

- `docs/SRC_ARCHITECTURE.md` — current architecture authority.
- `.claude/rules/architecture-boundaries.md` — normative dependency and
  compatibility rules.
- `docs/QUICK_START_NEW_DEV.md` — current development workflow.

The only remaining legacy boundary is frozen and external:

```text
external @cc4pm/homepage index.html
  -> scripts/prepare-cc4pm-homepage.mjs
  -> public/static/cc4pm-homepage.html
     + public/_headers response sandbox
  -> src/components/HomePageWithNav.tsx iframe
     and /api/static/homepage redirect
```

This seam may be maintained but not expanded. The adapter may read only the
exact package `index.html`; no source file may import, re-export, require, or
dynamically import the package or a subpath. New features cannot depend on the
external HTML, generated artifact, preparation script, iframe DOM, or embedded
scripts. The iframe and `public/_headers` response policy must remain sandboxed
without same-origin or popup-escape privileges. Compatibility façades remain
thin and their closed manifest may only shrink.

For migration history, use Git history rather than these instructions. Relevant
milestones include `c5605cc` (legacy directory isolation) and `3aacfe7` (legacy
homepage replacement/removal). Historical notes under `docs/tech/202510/` may
explain past decisions but are not current architectural authority.
