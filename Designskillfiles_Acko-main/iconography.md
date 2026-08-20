---
description: Icon usage guidelines — arrow vs chevron semantics, sizing, placement, and canonical icon set
alwaysApply: true
---
# Iconography

Rules for consistent, semantically correct icon usage across all components.

## Icon Library

- **UI icons** → use **Lucide React** (`lucide-react`) as the canonical icon set. Do not mix icon libraries.
- **Product / feature icons** → use SVGs from `/public/assets/icons/*.svg`.

## Arrow vs Chevron — When to Use Each

### Arrow → "Go" / "Perform an action"

Arrows carry **kinetic meaning** — they signal momentum, directional intent, and progression to a new state.

| Context | Icon | Example |
|---------|------|---------|
| Primary CTA / submit | `ArrowRight` | `<Button variant="primary" iconRight={<ArrowRight />}>Continue</Button>` |
| Back navigation (icon-only) | `ArrowLeft` | `<Button variant="ghost" iconOnly iconLeft={<ArrowLeft />}>Back</Button>` |
| Back navigation (with label) | `ArrowLeft` | `<Button variant="ghost" iconLeft={<ArrowLeft />}>Go back</Button>` |
| External link | `ArrowUpRight` | `<Button variant="link" iconRight={<ArrowUpRight />}>Visit site</Button>` |
| Pagination next/prev (page change) | `ArrowRight` / `ArrowLeft` | Moving to a new page |
| Download / send | `Download` / `Send` | Action that leaves the current context |

### Chevron → "Reveal" / "Browse within context"

Chevrons are **structural** — they signal "more content here" without leaving the current context.

| Context | Icon | Example |
|---------|------|---------|
| Accordion expand/collapse | `ChevronDown` / `ChevronUp` | Toggle content visibility |
| Dropdown menu trigger | `ChevronDown` | Open a menu or select list |
| Side navigation expand | `ChevronRight` | Reveal nested nav items |
| Carousel / slider | `ChevronLeft` / `ChevronRight` | Browse items within a container |
| Stepper / breadcrumb separator | `ChevronRight` | Visual separator between steps |

### Decision Rule

> **Will the user leave the current context or trigger a state change?**
> - **Yes** → Arrow
> - **No, content reveals in place** → Chevron

## Icon Sizing

Icons are sized using Tailwind spacing utilities — **the utility number is the pixel value** (1px-base scale, see `scales.md`). Do not use typography tokens for icon dimensions.

| Component size | Icon size | Tailwind utility |
|----------------|-----------|------------------|
| `xs` | 12px | `size-12` |
| `sm` | 16px | `size-16` |
| `md` | 16px | `size-16` |
| `lg` | 24px | `size-24` |
| `xl` | 32px | `size-32` |

### Rules

- Always use Tailwind spacing utilities — never typography tokens
- Icons inherit their size from the CSS layer (`.acko-btn-{size} .acko-btn-icon`). Do **not** set `size` props on Lucide icons inside buttons
- Always use `currentColor` for fill so icons inherit text color from the theme
- Always add `aria-hidden="true"` on decorative icons

## Icon Placement

| Position | Meaning | Prop |
|----------|---------|------|
| Leading (left) | Reinforces the label — describes *what* | `iconLeft` |
| Trailing (right) | Indicates direction — describes *where* | `iconRight` |

- **CTA buttons**: arrow on the **right** (`iconRight`) — it points where you're going
- **Back buttons**: arrow on the **left** (`iconLeft`) — it points where you came from
- **Destructive actions**: icon on the **left** (`iconLeft`) — e.g., trash icon reinforces the label

## Anti-Patterns

| Don't | Do |
|-------|-----|
| `ChevronRight` on a primary CTA button | Use `ArrowRight` — it's an action, not a reveal |
| `ArrowDown` for accordion toggle | Use `ChevronDown` — it's an expand, not navigation |
| `ArrowRight` for dropdown trigger | Use `ChevronDown` — it opens a menu in place |
| Mixed icon libraries in one project | Stick to Lucide throughout |
| `--font-*` tokens for icon dimensions | Use Tailwind `size-*` utilities |
| `size-3` / `size-4` (old 4px-base) | Use `size-12` / `size-16` — the number is the pixel value |
| Decorative icon without `aria-hidden="true"` | Always hide decorative icons from screen readers |
