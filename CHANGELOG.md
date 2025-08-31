# Changelog

All notable changes to this project will be documented in this file.

The format is based on Keep a Changelog, and this project adheres to
Semantic Versioning where applicable.

## [Unreleased] - 2025-08-31

### Changed

- Updated `docs/tech/BEST_PRACTICES_SHARE_USER_STORIES.md` to reflect the
  actual implemented behavior of the Best Practices card share feature:
  - Poster generation is presented via a preview modal with actions for
    copy image, download image, copy deep link, and cancel.
  - QR code is rendered live (deep link) when the network allows, with a
    graceful placeholder fallback when unavailable.
  - External cover images may be drawn into the poster via `/img-proxy`
    to avoid CORS canvas tainting.
  - Viewport-driven prewarm is used to preload the cover image and QR to
    improve perceived performance.
  - Success metrics and manual acceptance checklist updated accordingly.

- Revised `docs/tech/BEST_PRACTICES_SHARE_TECH_DESIGN.md` to align with the
  current implementation:
  - Architecture now includes preview modal flow and viewport-driven prewarm
    via `BaseArticleEventHandler` and `IntersectionObserver`.
  - `ShareService` details updated: canvas composition, deep link builder,
    QR rendering with fallback, and `/img-proxy` for cross-origin images.
  - Accessibility section expanded to cover modal semantics (dialog role,
    ESC/overlay close) and planned focus-trap/inert background.
  - Performance notes include prewarm strategy and font readiness.
  - Security mentions `IMAGE_PROXY_WHITELIST` and `IMAGE_PROXY_CACHE_TTL`.
  - Testing plan covers modal actions, QR rendering, deep link copy, and
    regression on card navigation.

### Notes

- Documentation now matches the code in
  `src/client/shared/services/ShareService.ts` and
  `src/client/shared/handlers/BaseArticleEventHandler.ts`.
- Image proxy host whitelist can be configured via `IMAGE_PROXY_WHITELIST`.
  Per project preference, `*` is acceptable for development; review before
  production.

