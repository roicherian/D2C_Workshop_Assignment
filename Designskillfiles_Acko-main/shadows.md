---
description: Shadow tokens — primitive and semantic shadows for elevation hierarchy
---

# Shadow Tokens

## Tiered Shadow Scale (Primitive)

| Token | Light | Use Case |
|-------|-------|----------|
| `--shadowXs` | `0 1px 2px rgba(0,0,0,0.04)` | Subtle depth |
| `--shadowSm` | `0 1px 4px rgba(0,0,0,0.06)` | Light elevation |
| `--shadowMd` | `0 2px 8px rgba(0,0,0,0.06)` | Medium elevation |
| `--shadowLg` | `0px 2px 16px 4px rgba(0,0,0,0.04)` | Cards, dropdowns |
| `--shadowXl` | `0 4px 24px rgba(0,0,0,0.10)` | Modals, dialogs |
| `--shadow2xl` | `0 8px 32px rgba(0,0,0,0.14)` | Maximum elevation |

## Semantic Shadow Aliases

| Token | Maps to | Use Case |
|-------|---------|----------|
| `--shadowCard` | `--shadowLg` | Elevated cards |
| `--shadowDropdown` | `--shadowLg` | Dropdown menus, popovers |
| `--shadowModal` | `--shadowXl` | Modals, dialogs |
| `--shadowSubtle` | `--shadowXs` | Small element depth |

## Component Shadows

| Token | Light | Dark | Used by |
|-------|-------|------|---------|
| `--shadowBtnInner` | `inset 0 1px 2px rgba(255,255,255,0.28)` | `inset 0 1px 2px rgba(255,255,255,0.15)` | Primary, secondary buttons |
| `--shadowBtnHover` | `0 4px 8px rgba(0,0,0,0.08)` | `0 4px 8px rgba(0,0,0,0.3)` | Button hover |
| `--shadowBtnSecondaryHover` | `inset 0 2px 4px rgba(255,255,255,0.48)` | `inset 0 2px 4px rgba(0,0,0,0.2)` | Secondary hover |
| `--shadowFocusRing` | `0 0 0 3px var(--colorPrimaryRing)` | same | All focusable elements |

> **Dark mode note:** Shadows are heavier in dark theme to remain visible on dark surfaces. `--shadowBorder` also adapts: `0 0 0 1px rgba(255,255,255,0.06)` in dark.

## Badge Gradient Pattern

Solid badges use a vertical gradient fill with a solid border — no shadows:

```css
background: linear-gradient(0deg, var(--colorBadge-{color}-gradient-from), var(--colorBadge-{color}-gradient-to));
border: 1px solid var(--colorBadge-{color}-border);
```

Counter badges follow the same pattern with their own token set (`--colorCounter-{color}-*`).

## Rules

- Shadows are heavier in dark mode to remain visible on dark surfaces
- Prefer `box-shadow` over `border` for hairline edges
- Never use harsh drop shadows — keep them diffused
