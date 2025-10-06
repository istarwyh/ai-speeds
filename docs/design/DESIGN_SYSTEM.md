# Design System – AI Speeds

A practical, token-driven system for consistent UI across the platform. This
document is the single source of truth for design decisions and their
implementation in code.

- **Scope**: Next.js + Tailwind v3 + CSS Variables + Cloudflare Workers
- **Entry points**:
  - Tokens: `src/styles/designTokens.ts`
  - Tailwind mapping: `tailwind.config.ts` → `theme.extend`
  - Best Practices page scope: `--color-practices-*`, `--bp-*`

---

## Principles

- **Token-first**: No hard-coded hex or ad-hoc values in components. Use CSS
  variables defined in `designTokens.ts` and Tailwind utilities that map to
  them.
- **Separation of concerns**: Global tokens for brand and neutrals; scoped
  tokens for page-specific needs (e.g., Best Practices page).
- **Accessibility**: Aim for WCAG AA contrast. Respect reduced motion.
- **Performance**: Keep fonts and icons minimal. Prefer system fonts by default.
  Avoid client-side CDNs for Tailwind.
- **Consistency**: One naming scheme across CSS variables, Tailwind utilities,
  and component props.

---

## Token Layers

- **Core brand & neutrals** (global)
  - `--color-primary`, `--color-secondary`, `--color-accent`
  - `--color-success`, `--color-warning`, `--color-error`
  - `--color-text-*`, `--color-bg-*`, `--color-border-*`
  - Radii: `--radius-*`
  - Shadows: `--shadow-*`
  - Motion: `--transition-*`

- **Accent scale (teal)**
  - `--color-teal-400`, `--color-teal-500`, `--color-teal-600`
  - Use for accents and interactive states that require a calm, modern feel.

- **Best Practices page scope**
  - `--color-practices-*` → page palette and surfaces
  - `--bp-*` → simplified aliases used by components in that page
  - Scope via a container selector (e.g., `#best-practices { ... }`).

- **Warm background (optional)**
  - `--color-bg-warm` → use on marketing/docs pages for a soft, friendly tone.

Sources: `src/styles/designTokens.ts`.

---

## Tailwind Mapping

`tailwind.config.ts` exposes tokens as utilities. Prefer these classes over
ad-hoc values.

- **Brand & feedback**
  - `bg-primary`, `bg-secondary`, `bg-accent`
  - `text-primary`, `text-secondary`, `text-accent` (via `text-text-*`)
  - `bg-success`, `bg-warning`, `bg-error`

- **Text & backgrounds**
  - `text-text-primary`, `text-text-secondary`, `text-text-muted`,
    `text-text-inverse`
  - `bg-bg-primary`, `bg-bg-secondary`, `bg-bg-tertiary`, `bg-bg-accent`,
    `bg-bg-warm`

- **Borders**
  - `border-border-light`, `border-border-medium`, `border-border-dark`

- **Accent scale (teal)**
  - `bg-teal-400|500|600`, `text-teal-400|500|600`

- **Radii & shadows**
  - `rounded-sm|md|lg|xl|2xl|3xl` → `--radius-*`
  - `shadow-sm|md|lg|xl` → `--shadow-*`

- **Best Practices accents**
  - `text-practices-accent`, `bg-practices-primary`, `bg-practices-secondary`

---

## Color System

- **Primary (blue)**
  - Navigation, primary CTAs, prominent highlights.
- **Secondary (purple)**
  - Secondary CTAs, tags, category accents.
- **Accent (teal)**
  - Tertiary actions, info emphasis, selection highlights.
- **Feedback**
  - Success `--color-success`, Warning `--color-warning`, Error `--color-error`.
- **Neutrals**
  - Text: `--color-text-primary|secondary|muted|inverse`
  - Surfaces: `--color-bg-primary|secondary|tertiary|accent`
  - Borders: `--color-border-light|medium|dark`

Guideline: Prefer `primary` for brand identity and `accent` for interaction
states that don’t demand full brand weight. Keep feedback colors for status.

---

## Typography

- **Default**: System UI stack for performance and consistency
  - `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', ...`
- **Code/Mono**: `--font-family-mono`
- **Sizes**: `--font-size-{xs,sm,base,lg,xl,2xl,3xl,4xl}`

If adopting Inter is desired for marketing pages, add it explicitly in the
layout and restrict the scope to those pages.

---

## Spacing, Radius, Shadow, Motion

- **Spacing**: `--space-1..20` for component-internal spacing scale.
- **Radius**: `--radius-sm..3xl` for shape language.
- **Shadows**: `--shadow-sm..xl` for elevation tokens.
- **Motion**: `--transition-fast|normal|slow` for predictable timings.

Use Tailwind utilities that map to these tokens to ensure consistency.

---

## Accessibility

- **Contrast**: Maintain WCAG AA. Test primary/accent text over surfaces.
- **Focus**: Ensure visible focus rings on interactive elements.
- **Motion**: Respect `prefers-reduced-motion`; avoid non-essential motion.
- **Targets**: Minimum 44×44 px hit area for clickable controls.

---

## Usage Conventions

- **Do**
  - Use token-backed Tailwind classes (`bg-bg-secondary`, `text-text-primary`).
  - Scope page-specific tokens within a container.
  - Keep semantic HTML and accessible labels.

- **Don’t**
  - Don’t use raw hex values like `bg-[#4ECDC4]` in components.
  - Don’t import Tailwind from CDN; we use Tailwind v3 locally.
  - Don’t leak page-scoped variables globally.

---

## Example: Token-Driven Card

```tsx
export function ExampleCard() {
  return (
    <div
      className='bg-bg-primary text-text-primary rounded-xl shadow-md \
      border border-border-light p-4'
    >
      <div className='text-sm text-text-secondary mb-2'>AI Tool</div>
      <h3 className='text-lg font-semibold mb-2'>AI Content Tool</h3>
      <p className='text-sm text-text-muted mb-4'>
        Create amazing content with AI assistance.
      </p>
      <div className='flex gap-2'>
        <button
          className='px-4 py-2 rounded-lg text-white bg-primary \
          hover:bg-primary-dark transition-colors'
        >
          Primary
        </button>
        <button
          className='px-4 py-2 rounded-lg text-white bg-accent \
          hover:bg-teal-600 transition-colors'
        >
          Accent
        </button>
      </div>
    </div>
  );
}
```

---

## Extending the System

1. **Add tokens** in `src/styles/designTokens.ts`.
2. **Expose in Tailwind** via `tailwind.config.ts` → `theme.extend`.
3. **Use utilities** in components; avoid raw values.
4. **Document** the addition in `TOKENS_REFERENCE.md`.

---

## Style Tile

`docs/design/design-token.html` is a visual reference only. When implementing
components, replace all raw values with the tokens and utilities documented
here.

---

## Checklist

- **Tokens**: Declared and mapped to Tailwind utilities
- **No raw hex**: Components use token utilities
- **Contrast**: Meets WCAG AA
- **Scoped variables**: Page-specific tokens are isolated
- **Performance**: Fonts/icons added deliberately and scoped
