# Best Practices Share Feature — User Stories

## Context

- The feature adds a Xiaohongshu-style share button on each card in `如何用好 CC` (Best Practices).
- Clicking the button opens a preview modal and generates a poster-like image users can copy or download, branded with "aispeeds.me".
- V1 attempts to render a real QR code pointing to a deep link; if unavailable, a placeholder is shown.
- External cover images may be drawn into the poster via `/img-proxy` to avoid CORS tainting.

## Actors

- Visitor (anonymous user)
- Mobile user (sharing to social platforms)
- Content author (adds/maintains cards)
- Developer (maintenance and QA)

## Assumptions

- Cards are rendered in `#best-practices-overview-cards`.
- Each card has a stable `id`, `title`, `category`, optional `tags`/`tips`.
- External images are proxied through `/img-proxy` when cross-origin.
- Use client-side Canvas to generate PNG; Clipboard API may be unavailable in some browsers (fallback to download).
- Viewport-driven prewarm is used to preload cover image and QR to improve perceived performance.

## User Stories

- As a visitor, I can click a small glass-style share button on a card to generate a share image so that I can quickly share the card to friends/platforms.
  - Acceptance
    - A share button is visible on each card without obstructing content.
    - Clicking share does not open the article (no navigation conflict).
    - A poster is generated within 500ms–1500ms on typical devices.
    - Poster includes: title, category icon, up to 2 tips or overview bullets, up to 3 tags, watermark "aispeeds.me", QR area (real QR when available, otherwise placeholder), optional deep-link text.

- As a visitor, I see a preview modal after clicking share, where I can choose to copy the image, download it, copy a deep link, or cancel.
  - Acceptance
    - Modal has `role="dialog"`, supports ESC and overlay click to close.
    - Buttons: 复制到剪贴板 / 下载图片 / 复制链接 / 取消。
    - Closing the modal does not affect page navigation.

- As a visitor, when my browser supports image clipboard, the image is copied to clipboard; otherwise a file download starts.
  - Acceptance
    - `navigator.clipboard.write` with `ClipboardItem` success path shows a short toast (e.g., "已复制") and closes the modal.
    - On failure or unsupported, an automatic download of `<title>.png` occurs with a toast.

- As a mobile user, I can save the generated image and share it to Xiaohongshu/WeChat Moments.
  - Acceptance
    - Default size: 1080×1440 (portrait). PNG size typically < 1MB.
    - Text remains readable on high-DPI screens; key content is within safe margins.

- As a visitor, I can copy a deep link to the card/article for direct navigation.
  - Acceptance
    - Deep link includes `module`, `view`, and `cardId` query parameters.
    - Copy success shows a toast.

- As a content author, the share image reflects the current card metadata.
  - Acceptance
    - Title, category icon, tags, and tips come from `cardsData.ts` for the corresponding `id`.
    - If tips/tags are missing, layout degrades gracefully.

- As a developer, adding the share button does not interfere with current card click-to-article behavior.
  - Acceptance
    - Share button uses event delegation with `stopPropagation()`.
    - Existing `BaseArticleEventHandler` flow remains unchanged for non-share clicks.

- As a screen-reader user, the share button is accessible.
  - Acceptance
    - `aria-label` describes the action (e.g., "分享此卡片").
    - Focus ring visible; keyboard activation supported.
    - Preview modal has `role="dialog"` and close button with `aria-label`.

## Out of Scope (V1)

- Server-side OG image generation and server-rendered shareable URLs.
- Full focus-trap and background inert handling in the modal (planned).
- Internationalization of all strings (planned).

## Success Metrics

- Functional: ≥ 99% success rate for copy or download across modern browsers.
- Performance: Poster generated in ≤ 1.5s on mid-tier devices; when prewarmed, preview TTI ≤ 500ms.
- UX: ≤ 1% reported navigation conflicts; no visual regressions to cards.
- Network: QR/API failures degrade to placeholder without blocking.

## Manual Acceptance Checklist

- Share button appears on all cards in `best-practices` section.
- Preview modal opens with canvas preview and four actions.
- Copy image to clipboard works on Chrome/Edge; Safari falls back to download.
- Copy deep link writes a URL with `module`, `view`, `cardId`.
- QR renders when network allows; otherwise shows placeholder text.
- Clicking share on a card without tips/tags still renders a balanced layout.
- Button is keyboard-accessible and has `aria-label`; modal close button labeled.
- No navigation conflicts; no console errors; no style regressions on mobile/desktop.
