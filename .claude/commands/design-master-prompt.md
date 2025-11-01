# Design Master

## Overview

This prompt is designed to guide AI in creating components and designs that
adhere to the established design system. The goal is to ensure consistency,
usability, and aesthetic coherence across all UI elements. Below are the
detailed design norms and guidelines that must be followed for any design or
component creation.

## Design Principles

- **Consistency**: All components must use the defined design tokens, Tailwind
  CSS classes, and component structures as outlined in the style guide.
- **Mobile-First**: Designs should prioritize mobile responsiveness, scaling up
  to larger screens with breakpoints.
- **Accessibility**: Ensure high contrast ratios, semantic HTML, and ARIA
  attributes where necessary.
- **User-Centric**: Focus on clarity, simplicity, and intuitive interaction
  patterns.

## Design System Details

### Typography

- **Font Family**: Use `Inter` as the primary font for all text.
- **Font Sizes**: Follow the scale defined in `designTokens.ts` (e.g.,
  `--font-size-xs` to `--font-size-3xl`).
- **Line Heights**: Use predefined line heights (e.g., `--line-height-tight` to
  `--line-height-relaxed`).

### Colors

- **Primary Palette**: Use colors defined in `designTokens.ts` such as
  `--color-primary`, `--color-secondary`, and `--color-accent`.
- **Backgrounds**: Apply background colors from `--color-bg-primary`,
  `--color-bg-secondary`, etc.
- **Text Colors**: Use `--color-text-primary` for main text and
  `--color-text-secondary` for secondary text.
- **Feedback Colors**: Use `--color-success`, `--color-warning`, `--color-error`
  for feedback states.

### Spacing and Layout

- **Spacing Scale**: Adhere to the spacing scale `--spacing-1` to `--spacing-12`
  for margins and padding.
- **Grid and Layout**: Use Tailwind's grid system for responsive layouts,
  ensuring mobile-first design.
- **Border Radius**: Apply `--radius-sm` to `--radius-xl` for consistent corner
  rounding.

### Components

- **Buttons**: Follow the structure and styling from the style guide, using
  variants like `primary`, `secondary`, and `ghost`.
- **Cards**: Use defined card components with consistent shadows (`--shadow-sm`
  to `--shadow-xl`) and borders.
- **Inputs**: Ensure inputs have proper focus states and use
  `--color-border-light` for borders.

### Tailwind CSS Usage

- **Class Naming**: Use Tailwind classes directly in components, avoiding custom
  CSS where possible.
- **Responsive Design**: Prefix classes with breakpoints (e.g.,
  `md:bg-secondary`) for responsive adjustments.
- **Customization**: Extend Tailwind configurations in `tailwind.config.ts` if
  new tokens are needed, and document them.

## Coding Standards

- **TypeScript**: Use strict typing for all components, following interfaces
  defined in the project.
- **Indentation**: Use 2-space indentation for all code.
- **Component Structure**: Destructure props, use arrow functions, and maintain
  a clear component hierarchy.
- **No Hardcoding**: Avoid hardcoded strings or values; use constants or enums
  for reusable data.

## Workflow for AI Design

1. **Reference Style Guide**: Always consult the style guide at
   `src/app/design/style-guide/page.tsx` for visual and code examples.
2. **Use Existing Components**: Leverage components from the project's library
   (e.g., shadcn/ui) for consistency.
3. **Validate Design**: Ensure the design matches the tokens and principles
   outlined above before finalizing.
4. **Document Usage**: Provide a brief note on how the design aligns with the
   system when presenting it.

## Additional Notes

- If a design requirement falls outside the current system, propose an extension
  to the design tokens and document it as per the 'Extending the System'
  guidelines in `DESIGN_SYSTEM.md`.
- Prioritize functional programming patterns, but be open to suggesting
  object-oriented approaches if they better suit the context.
- Keep functions concise, ideally under 30 lines, for maintainability.

By following this prompt, all AI-designed components should seamlessly integrate
into the Claude Code Router project, maintaining a cohesive and professional
user interface.
