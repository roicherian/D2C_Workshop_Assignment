---
description: ACKO Primitive Color Palette — Raw hex values for design system foundation
version: 1.0.0
last_updated: 2026-04-29
---

# Color Primitives

**Layer 1** of the ACKO token architecture. Components NEVER reference these directly — they go through semantic tokens in `colors-semantic.md`.

## Purpose of This File

This file contains raw, value-neutral color definitions. These are the **atomic building blocks** of the design system. Think of them as a painter's palette — just pure colors with no intended meaning attached.

- ✅ **Do:** Use these when defining semantic tokens
- ✅ **Do:** Reference when designing new components
- ❌ **Don't:** Use directly in component code
- ❌ **Don't:** Assume semantic meaning (that's in `colors-semantic.md`)

---

## Table of Contents

1. [Neutrals](#neutrals) — Grey scale for surfaces, text, borders
2. [Brand](#brand) — ACKO purple brand color
3. [Semantic Colors](#semantic-colors) — Status and feedback colors
4. [Accent Colors](#accent-colors) — Highlights and data visualization
5. [Alpha Tokens](#alpha-tokens) — Transparency and overlays
6. [Usage Guidelines](#usage-guidelines)
7. [WCAG Compliance Notes](#wcag-compliance-notes)

---

# Neutrals

## Grey (Custom 20-Step Scale)

ACKO's neutral grey scale. Optimized for subtle surface layering and dark-mode depth with half-step intermediates for precise border, text, and surface control.

**Design rationale:** The 150 step preserves ACKO's established subtle grey (#EBEBEB). Half-steps (250, 350, 450, 550, 650, 750) enable fine-grained control over component borders, disabled states, and dark-mode surfaces without reusing the same shade for multiple roles.

| Token | Hex | Usage Hint |
|-------|-----|------------|
| `--greyWhite` | `#FFFFFF` | Pure white backgrounds |
| `--grey50` | `#FBFBFB` | Subtle backgrounds, almost white |
| `--grey100` | `#F5F5F5` | Light backgrounds, cards |
| `--grey150` | `#EBEBEB` | Subtle borders, dividers |
| `--grey200` | `#DCDCDC` | Borders, disabled backgrounds |
| `--grey250` | `#CECECE` | Input borders, readonly borders |
| `--grey300` | `#C0C0C0` | Borders, separators |
| `--grey350` | `#B2B2B2` | Disabled text, strong borders |
| `--grey400` | `#A4A4A4` | Placeholder text, disabled text |
| `--grey450` | `#969696` | Secondary icons, strong borders |
| `--grey500` | `#888888` | Secondary text, icons |
| `--grey550` | `#7A7A7A` | Supporting text, chip icons |
| `--grey600` | `#6C6C6C` | Body text (light backgrounds) |
| `--grey650` | `#5E5E5E` | Dark mode borders |
| `--grey700` | `#505050` | Headings, emphasis |
| `--grey750` | `#424242` | Dark mode surfaces |
| `--grey800` | `#343434` | Dark backgrounds, inverse text |
| `--grey900` | `#181818` | Darkest backgrounds |
| `--grey950` | `#0A0A0A` | Almost black |
| `--greyBlack` | `#000000` | Pure black |

**WCAG Contrast (vs white background):**
- `grey50-450`: ❌ Not safe for text
- `grey500–550`: ⚠️ Large text only (AA large)
- `grey600-950`: ✅ Safe for all text (AA/AAA)

**WCAG Contrast (vs black background):**
- `grey700-950`: ❌ Not safe for text
- `grey400-650`: ⚠️ Large text only
- `grey50-350`: ✅ Safe for all text

---

# Brand

## Purple (ACKO Brand Color)

ACKO's primary brand color. Generated from three brand-approved anchors:
- **Lightest**: `#F3F3FF` (purple50)
- **Medium**: `#6841E6` (purple600) — primary brand usage
- **Darkest**: `#241362` (purple950)

All intermediate steps are mathematically interpolated in HSL color space for smooth visual transitions.

| Token | Hex | Usage Hint |
|-------|-----|------------|
| `--purple50` | `#F3F3FF` | Subtle backgrounds, hover states |
| `--purple100` | `#E1E0FE` | Light backgrounds, badges |
| `--purple150` | `#D1CFFD` | Selected hover backgrounds, active radio cards |
| `--purple200` | `#C1BDFC` | Soft accents, disabled states |
| `--purple300` | `#A69CF9` | Borders, secondary elements |
| `--purple400` | `#8E7CF4` | Hover states, active backgrounds |
| `--purple500` | `#795DEE` | Interactive elements |
| `--purple600` | `#6841E6` | Buttons, links, primary CTAs |
| `--purple700` | `#491FD4` | Button hover, pressed states |
| `--purple800` | `#3A1BA5` | Text on light backgrounds |
| `--purple850` | `#33198F` | Active radio card borders, dark hover |
| `--purple900` | `#2B1678` | High contrast text |
| `--purple950` | `#241362` | Headings, maximum contrast |

**WCAG Contrast (vs white background):**
- `purple50-400`: ❌ Not safe for text
- `purple600`: ⚠️ AA for large text only (4.5:1)
- `purple700-950`: ✅ Safe for all text (AAA)

**Best Practices:**
- Primary CTAs: Use `purple600` background with white text
- Links: Use `purple700` for AAA compliance
- Backgrounds: `purple50` for subtle brand presence
- Never use `purple100-400` for text — insufficient contrast

---

# Semantic Colors

Colors with inherent meaning for status, feedback, and information hierarchy.

## Red (Error, Danger, Critical)

| Token | Hex |
|-------|-----|
| `--red50` | `#FEF2F2` |
| `--red100` | `#FEE2E2` |
| `--red200` | `#FECACA` |
| `--red300` | `#FCA5A5` |
| `--red400` | `#F87171` |
| `--red500` | `#EF4444` |
| `--red600` | `#DC2626` |
| `--red700` | `#B91C1C` |
| `--red800` | `#991B1B` |
| `--red900` | `#7F1D1D` |
| `--red950` | `#450A0A` |

**Use for:** Error messages, destructive actions, critical alerts, claim rejections, payment failures

---

## Amber (Warnings, Pending, Caution)

**New in v2.0** — Differentiated from Yellow for proper warning semantics.

| Token | Hex |
|-------|-----|
| `--amber50` | `#FFFBEB` |
| `--amber100` | `#FEF3C7` |
| `--amber200` | `#FDE68A` |
| `--amber300` | `#FCD34D` |
| `--amber400` | `#FBBF24` |
| `--amber500` | `#F59E0B` |
| `--amber600` | `#D97706` |
| `--amber700` | `#B45309` |
| `--amber800` | `#92400E` |
| `--amber900` | `#78350F` |
| `--amber950` | `#451A03` |

**Use for:** Warning banners, pending claims, payment due notices, caution states, KYC pending

**Why Amber vs Yellow:**
- **Amber**: Warmer, muted — appropriate for "caution" emotion
- **Yellow**: Brighter, attention-grabbing — use for highlights only
- **WCAG**: `amber600` passes AA contrast on white; `yellow500` fails

---

## Yellow (Highlights, Attention)

| Token | Hex |
|-------|-----|
| `--yellow50` | `#FEFAE8` |
| `--yellow100` | `#FEF9C3` |
| `--yellow200` | `#FEF08A` |
| `--yellow300` | `#FDE047` |
| `--yellow400` | `#FACC15` |
| `--yellow500` | `#EAB308` |
| `--yellow600` | `#D18C0A` |
| `--yellow700` | `#A76406` |
| `--yellow800` | `#875008` |
| `--yellow900` | `#62360F` |
| `--yellow950` | `#302012` |

**Use for:** Highlights, tooltips, new feature badges, selected states — NOT warnings (use Amber)

---

## Green (Success, Positive, Safe)

| Token | Hex |
|-------|-----|
| `--green50` | `#F0FDF4` |
| `--green100` | `#DCFCE7` |
| `--green200` | `#BBF7D0` |
| `--green300` | `#86EFAC` |
| `--green400` | `#4ADE80` |
| `--green500` | `#22C55E` |
| `--green600` | `#16A34A` |
| `--green700` | `#15803D` |
| `--green800` | `#166534` |
| `--green900` | `#14532D` |
| `--green950` | `#052E16` |

**Use for:** Success messages, claim approved, payment successful, policy active

---

## Blue (Info, Neutral, Trust)

| Token | Hex |
|-------|-----|
| `--blue50` | `#EFF6FF` |
| `--blue100` | `#DBEAFE` |
| `--blue200` | `#BFDBFE` |
| `--blue300` | `#93C5FD` |
| `--blue400` | `#60A5FA` |
| `--blue500` | `#3B82F6` |
| `--blue600` | `#2563EB` |
| `--blue700` | `#1D4ED8` |
| `--blue800` | `#1E40AF` |
| `--blue900` | `#1E3A8A` |
| `--blue950` | `#172554` |

**Use for:** Informational messages, tips, links (secondary), trust indicators

---

# Accent Colors

Colors for visual variety, data visualization, and non-semantic highlights.

## Indigo (Secondary Info, Data Viz)

Fills the gap between Blue and Purple for richer data visualization.

| Token | Hex |
|-------|-----|
| `--indigo50` | `#EEF2FF` |
| `--indigo100` | `#E0E7FF` |
| `--indigo200` | `#C7D2FE` |
| `--indigo300` | `#A5B4FC` |
| `--indigo400` | `#818CF8` |
| `--indigo500` | `#6366F1` |
| `--indigo600` | `#4F46E5` |
| `--indigo700` | `#4338CA` |
| `--indigo800` | `#3730A3` |
| `--indigo900` | `#312E81` |
| `--indigo950` | `#1E1B4B` |

**Use for:** Secondary links, scheduled states, data visualization, analytics dashboards

---

## Cyan (Live States, Notifications)

Right blue-green for eye-catching live indicators.

| Token | Hex |
|-------|-----|
| `--cyan50` | `#ECFEFF` |
| `--cyan100` | `#CFFAFE` |
| `--cyan200` | `#A5F3FC` |
| `--cyan300` | `#67E8F9` |
| `--cyan400` | `#22D3EE` |
| `--cyan500` | `#06B6D4` |
| `--cyan600` | `#0891B2` |
| `--cyan700` | `#0E7490` |
| `--cyan800` | `#155E75` |
| `--cyan900` | `#164E63` |
| `--cyan950` | `#083344` |

**Use for:** Live chat indicators, real-time notifications, unread badges, active connections

**Cyan vs Teal:**
- **Cyan**: Vibrant, high saturation — grabs attention
- **Teal**: Muted, professional — calmer presence

---

## Teal (Professional Accent)

| Token | Hex |
|-------|-----|
| `--teal50` | `#EDFDFE` |
| `--teal100` | `#D1FBFC` |
| `--teal200` | `#A9EFFB` |
| `--teal300` | `#6FE2F1` |
| `--teal400` | `#29CEE7` |
| `--teal500` | `#17B6D3` |
| `--teal600` | `#0891B2` |
| `--teal700` | `#0E7490` |
| `--teal800` | `#155E75` |
| `--teal900` | `#164E63` |
| `--teal950` | `#083344` |

**Use for:** Data visualization, professional accents, dashboard elements

---

## Pink (Accent, Highlights)

| Token | Hex |
|-------|-----|
| `--pink50` | `#FDF2F8` |
| `--pink100` | `#FCE7F3` |
| `--pink200` | `#FBCFE8` |
| `--pink300` | `#F9ABD4` |
| `--pink400` | `#F472B6` |
| `--pink500` | `#EC4899` |
| `--pink600` | `#DB2777` |
| `--pink700` | `#BE185D` |
| `--pink800` | `#9D174D` |
| `--pink900` | `#831843` |
| `--pink950` | `#500724` |

**Use for:** Promotional badges, special offers, accent elements

---

## Orange (Energy, Warm Accent)

| Token | Hex |
|-------|-----|
| `--orange50` | `#FFF3E5` |
| `--orange100` | `#FFE5CC` |
| `--orange200` | `#FFCB9E` |
| `--orange300` | `#FFB56B` |
| `--orange400` | `#FFA85C` |
| `--orange500` | `#FF8D28` |
| `--orange600` | `#EB740A` |
| `--orange700` | `#B65C0C` |
| `--orange800` | `#8D4301` |
| `--orange900` | `#521F00` |
| `--orange950` | `#300212` |

**Use for:** Energy, warmth, data visualization

---

## Lime (Fresh, Energetic)

| Token | Hex |
|-------|-----|
| `--lime50` | `#F4FDF0` |
| `--lime100` | `#E7FCDC` |
| `--lime200` | `#CFF7BB` |
| `--lime300` | `#A9EF86` |
| `--lime400` | `#7BDE4A` |
| `--lime500` | `#58C522` |
| `--lime600` | `#45A316` |
| `--lime700` | `#398015` |
| `--lime800` | `#306516` |
| `--lime900` | `#214210` |
| `--lime950` | `#132E05` |

**Use for:** Fresh, energetic accents, data visualization

---

# Alpha Tokens

Transparency tokens for overlays, shadows, and layered UI.

Modern UI requires transparency for modals, disabled states, and depth. These tokens use `rgba()` format and work across all backgrounds.

## Transparent

| Token | Value | Usage |
|-------|-------|-------|
| `--transparent` | `rgba(0, 0, 0, 0)` | Fully transparent — inactive tabs, accordion headers, calendar cells |

## Black Alpha (Overlays, Shadows)

| Token | Value | Usage |
|-------|-------|-------|
| `--blackA04` | `rgba(0, 0, 0, 0.04)` | Ghost button hover (light mode) |
| `--blackA08` | `rgba(0, 0, 0, 0.08)` | Ghost button active (light mode) |
| `--blackA1` | `rgba(0, 0, 0, 0.05)` | Subtle borders, hover lifts |
| `--blackA2` | `rgba(0, 0, 0, 0.10)` | Light shadows, hover states |
| `--blackA3` | `rgba(0, 0, 0, 0.15)` | Borders, dividers |
| `--blackA4` | `rgba(0, 0, 0, 0.20)` | Strong borders |
| `--blackA5` | `rgba(0, 0, 0, 0.30)` | Disabled backgrounds |
| `--blackA6` | `rgba(0, 0, 0, 0.40)` | Overlay backgrounds |
| `--blackA7` | `rgba(0, 0, 0, 0.50)` | **Modal overlays / surface scrim (light mode)** |
| `--blackA8` | `rgba(0, 0, 0, 0.60)` | Heavy overlays, close icon on dark toast |
| `--blackA9` | `rgba(0, 0, 0, 0.70)` | **Modal overlays / surface scrim (dark mode)** |
| `--blackA10` | `rgba(0, 0, 0, 0.80)` | Maximum overlay |
| `--blackA11` | `rgba(0, 0, 0, 0.90)` | Near-opaque |
| `--blackA12` | `rgba(0, 0, 0, 0.95)` | Almost solid black |

## White Alpha (Dark Mode Overlays)

| Token | Value | Usage |
|-------|-------|-------|
| `--whiteA08` | `rgba(255, 255, 255, 0.08)` | Ghost button active (dark mode) |
| `--whiteA1` | `rgba(255, 255, 255, 0.05)` | Ghost button hover (dark mode), skeleton shimmer (dark) |
| `--whiteA2` | `rgba(255, 255, 255, 0.10)` | Borders on dark backgrounds |
| `--whiteA3` | `rgba(255, 255, 255, 0.15)` | Hover states on dark |
| `--whiteA4` | `rgba(255, 255, 255, 0.20)` | Active states on dark |
| `--whiteA5` | `rgba(255, 255, 255, 0.30)` | Light text on dark |
| `--whiteA6` | `rgba(255, 255, 255, 0.40)` | Medium opacity on dark |
| `--whiteA7` | `rgba(255, 255, 255, 0.50)` | Semi-transparent white |
| `--whiteA8` | `rgba(255, 255, 255, 0.60)` | Skeleton shimmer (light mode) |
| `--whiteA9` | `rgba(255, 255, 255, 0.70)` | Close icon on dark toast (light mode) |
| `--whiteA10` | `rgba(255, 255, 255, 0.80)` | Nearly opaque white |
| `--whiteA11` | `rgba(255, 255, 255, 0.90)` | Almost solid white |
| `--whiteA12` | `rgba(255, 255, 255, 0.95)` | Pure white text |

## A90 Variants (Dark Mode Badge Gradients)

Semi-transparent deep-shade colors for gradient badge fills in dark mode. Each is its base color at 90% opacity, approximating `color-mix(in srgb, {color} 90%, transparent)`.

| Token | Value | Usage |
|-------|-------|-------|
| `--purple950A90` | `rgba(36, 19, 98, 0.90)` | Badge purple gradient start (dark) |
| `--purple900A90` | `rgba(43, 22, 120, 0.90)` | Badge purple gradient end (dark) |
| `--lime950A90` | `rgba(19, 46, 5, 0.90)` | Badge green gradient start (dark) |
| `--lime900A90` | `rgba(33, 66, 16, 0.90)` | Badge green gradient end (dark) |
| `--blue950A90` | `rgba(23, 37, 84, 0.90)` | Badge blue gradient start (dark) |
| `--blue900A90` | `rgba(30, 58, 138, 0.90)` | Badge blue gradient end (dark) |
| `--orange950A90` | `rgba(48, 2, 18, 0.90)` | Badge orange gradient start (dark) |
| `--orange900A90` | `rgba(82, 31, 0, 0.90)` | Badge orange gradient end (dark) |
| `--red950A90` | `rgba(69, 10, 10, 0.90)` | Badge red / counter red gradient start (dark) |
| `--red900A90` | `rgba(127, 29, 29, 0.90)` | Badge red / counter red gradient end (dark) |
| `--grey800A90` | `rgba(52, 52, 52, 0.90)` | Badge grey gradient start (dark) |
| `--grey700A90` | `rgba(80, 80, 80, 0.90)` | Badge grey gradient end (dark) |


---

# Usage Guidelines

## For Designers

**When Adding to Figma:**
1. Create color styles matching these exact token names
2. Organize with folders: Neutrals, Brand, Semantic, Accent, Alpha
3. Never create colors outside this system — request additions via design system team
4. Use semantic tokens in designs, not primitives directly

**Requesting New Colors:**
- New colors require design system team approval
- Must justify with use cases and WCAG compliance
- Consider if existing colors can be repurposed first

---

## For Developers

**In Code:**
```css
/* ❌ WRONG - Don't use primitives directly */
.button {
  background: var(--purple600);
}

/* ✅ CORRECT - Use semantic tokens */
.button {
  background: var(--colorPrimary);
}
```

Primitives exist in `colors-semantic.md` mapping only. Components reference semantic tokens exclusively.

**Why This Matters:**
- Primitives can change (e.g., brand color shifts)
- Semantic tokens insulate components from primitive changes
- Easier to maintain and theme

---

# WCAG Compliance Notes

## Text Contrast Requirements

**WCAG AA (Minimum):**
- Normal text (< 18px): 4.5:1 contrast ratio
- Large text (≥ 18px): 3:1 contrast ratio

**WCAG AAA (Enhanced):**
- Normal text: 7:1 contrast ratio
- Large text: 4.5:1 contrast ratio

**Rule of Thumb:** 
- 50-500: Surface/background colors only
- 600: Minimum for text (AA)
- 700+: Safe for all text

---

## Colorblind Accessibility

**Never rely on color alone** to convey information. Always pair with:
- Icons (✓ ✗ ⚠)
- Text labels
- Patterns/textures
- Position/layout

**Most Common:** Deuteranopia (red-green colorblindness)
- Don't use red/green as only differentiator
- Pair red with icons/text: "❌ Error: Payment failed"
- Pair green with icons/text: "✓ Success: Claim approved"

---

# Questions or Additions?

Contact the ACKO Design System team to:
- Request new colors
- Report accessibility issues
- Suggest improvements
- Get implementation help

**Maintainer:** Design System Team  
**Last Review:** 2026-04-29  
**Next Review:** 2026-07-29 (quarterly)