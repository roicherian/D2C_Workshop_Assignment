# ACKO Card System

**Layer 3** of the design system — card grammar for composing contextual UI surfaces.

```
scales.md → semantics.md → components → cards.md
Raw values      Color roles    Atom components  Card grammar
```

> **Rule for LLM generation:** Every card must use a `Card` variant from the shell spec, compose from the slot vocabulary, pick a card type that matches the content's purpose, and reference only semantic tokens — never primitive values directly.

This file is the **single source of truth** for card creation. The catalog has **43 typed patterns** organised in two tracks:

- **§1–§11 — ACKO product patterns.** Domain-grounded cards for insurance flows: policies, alerts, plans, add-ons, network providers, status, commerce, content.
- **§12–§43 — Storybook reference patterns.** Layout-grounded cards mirroring `Organisms/Cards` in the Storybook (`apps/storybook/stories/CardOrganisms.stories.tsx`). Each entry names its reference function (e.g. `Card01_CreatorList`) so the implementation can be opened directly.

If a brief does not match any of the 43 patterns, **stop and ask** — do not invent a new shape.

---

## Part 1 — Card Base Component

### React API

```tsx
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outline' | 'elevated' | 'demoted';  // default: 'default'
  padding?: 'none' | 'sm' | 'md' | 'lg';                     // default: 'md'
  children: React.ReactNode;
}
```

### Sub-components

```tsx
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
```

### Variants

| Variant | Fill | Stroke | Shadow |
|---------|------|--------|--------|
| `default` | `--colorCardBg` (grey-50) | `1px solid --colorCardBorder` (white highlight edge) | none |
| `outline` | `transparent` | `1px solid --colorCardOutlineBorder` (grey-200) | none |
| `elevated` | `--colorCardElevatedBg` (white) | none | `--shadowCard` |
| `demoted` | `--colorCardDemotedBg` (grey-150) | `1px solid --colorCardDemotedBorder` (grey-200) | none |

### Padding Scale

| Value | CSS |
|-------|-----|
| `none` | `0` |
| `sm` | `12px` |
| `md` | `20px` |
| `lg` | `24px` |

### Sub-component Layout

| Sub-component | Padding | Border |
|---------------|---------|--------|
| `CardHeader` | `padding-bottom: 16px` | `border-bottom: 1px solid var(--colorBorderSubtle)` |
| `CardContent` | `padding: 20px 0` | none |
| `CardFooter` | `padding-top: 16px` | `border-top: 1px solid var(--colorBorderSubtle)` |

### Specifications

- Border radius: `--radius4xl` (20px)
- Footer aligns children to `flex-end`

### Built-in seam dividers (read this before generating any card)

`CardHeader` renders a `border-bottom` and `CardFooter` renders a `border-top`, both `1px var(--colorBorderSubtle)`. These hairlines appear automatically wherever you compose Header + Content + Footer — **do not add `<Separator />` between sub-components**. Two rules to keep the seams visually balanced:

1. **Default rhythm is asymmetric (16 / 20).** CardHeader has `pb: 16`, CardContent has `pt/pb: 20`, CardFooter has `pt: 16` — so each line sits 4px closer to the header/footer than to the content. Acceptable when every card on a page uses the default; obvious when one card overrides and another doesn't.
2. **Always override both sides of a seam, with `!`.** A plain `pt-24` / `pb-24` will silently lose to the component's own CSS — only the `!` modifier wins. To open up a seam to 24px symmetrically:

   ```tsx
   <CardHeader className="!pb-24">…</CardHeader>
   <CardContent className="!pt-24 !pb-24">…</CardContent>
   <CardFooter className="!pt-24">…</CardFooter>
   ```

   Never override one side without matching the other (e.g. `!pb-24` on CardHeader paired with default 20px on CardContent's top → off-center divider). This is the most common cause of "separator spacing looks weird" bugs in generated cards.

---

## Part 2 — Card Grammar

1. **Identify the purpose** — match to one of the **43** card types in the catalog
2. **Pick the shell variant** specified for that type
3. **Compose slots** — use only the slots defined for that type
4. **Use real components** from the atom layer (Button, Badge, Typography, Avatar, etc.)
5. **Reference semantic tokens only** — never hardcode hex values or primitives

---

## Card layout hierarchy & badge placement (mandatory)

### Reading order — vertical, not split columns

- Do **not** place the **primary title** on the left and **supporting / body** text on the right in the same row. That left/right split is **not** a default card pattern for marketing or product cards.
- Use a **vertical reading order**: optional `eyebrow` → title-reference `status-badge` → `title` → `meta` → `body` → actions in `CardFooter`. Title and subtext **stack**; body copy is not a second column beside the title unless a **documented exception** applies (e.g. a list-event row §20, a horizontal-image card §14/§15 — flagged in their entries).

### Title-reference badges (`status-badge`)

- When a badge **qualifies the headline** (e.g. "Most popular", "New"), it must appear **above the title** in document order.
- It may sit on the **top edge of the card**, including **slight overlap** of the top border — that is a **valid** reference pattern when product chrome calls for it.
- Do **not** place title-reference badges **beside** the title, **below** the title, or in **inconsistent** corners of the card.
- Badges **not** tied to the title (e.g. price chip, ancillary tag) belong in a **separate slot** (`meta`, trailing area, or the card type's defined field) — do not reuse title-reference placement rules for those.

### Actions in card grids

- In a **row of cards** (e.g. plan comparison, feature tiles), **primary actions** must sit at a **consistent vertical position** across cards: use **equal-height** cards, column flex, and push the footer row (e.g. `mt-auto` on the action row or `CardFooter` at the bottom). Avoid **staggered button heights** when body copy length differs between cards.

---

## Slot Vocabulary

Slots are composable building blocks. A card type's entry lists which slots it uses; do not invent new structural regions outside this list.

### Core slots (used across §1–§43)

| Slot | Description | Typical Component |
|------|-------------|------------------|
| `status-badge` | Above the title — state or title qualifier (Pending, Most popular); may sit on top card edge | `Badge` |
| `eyebrow` | Small overline label above the title | `Typography variant="overline"` |
| `title` | Primary headline of the card | `Typography variant="heading-sm"` (or `heading-md`) |
| `meta` | Supporting info — id, date, duration, address | `Typography variant="body-sm" color="secondary"` or `caption` |
| `body` | Secondary descriptive content | `Typography variant="body-sm"` |
| `media` | Hero image, illustration, or wave placeholder | `<img>` with `object-fit: cover`, or styled gradient block |
| `icon` | Product or entity icon | Lucide icon or `/public/assets/icons/*.svg` |
| `primary-cta` | Main action for the card | `Button variant="primary"` or `"secondary"` |
| `secondary-cta` | Supporting action or text link | `Button variant="ghost"` or `"outline"` |
| `footer-link` | Subtle inline link at the bottom | `Typography variant="body-sm" color="brand"` as anchor / `Button variant="link"` |
| `input` | Inline text entry within the card | `TextInput` |
| `divider` | Horizontal rule between sections | `Separator` |
| `progress` | Progress bar or indicator | `Progress` |
| `inline-notice` | Nested informational strip | `Alert` (compact) |

### Extended slots (added for §12–§43)

| Slot | Description | Typical Component |
|------|-------------|------------------|
| `avatar` | Single user/entity avatar | `Avatar` |
| `avatar-stack` | Overlapped avatar row (facepile); negative-margin chain with hairline ring in `--colorCardBg` | `Avatar` × N inside `flex` row |
| `search-trigger` | Input-shaped tappable pill — `icon` + placeholder + `ChevronRight`; `--colorInputBg` fill, `--colorInputBorder` stroke, `--radiusFull` | `<button>` (or `<a>`) styled as input |
| `rating` | Star rating row — filled stars in `--colorWarning`, empty stars in `--colorBorder` | `<div>` with star glyphs (`★`) |
| `stepper` | Quantity stepper — `Button iconOnly` (Minus) + value + `Button iconOnly` (Plus) | `Button` × 2 + `Typography body-md semibold` |
| `feed-stats` | Engagement row — repeated `icon + count` pairs (likes, saves, comments) | `<span>` rows, `--colorTextSecondary` |
| `time-badge` | Small high-contrast time pill — `--colorTextPrimary` fill, `--colorTextStatic` text, `--radiusSm`, `label-sm` | `<span>` |
| `stat-grid` | 3-column icon + number cells | `<div>` grid |
| `task-list` | Vertical list of `icon + label` rows (Reading task pattern) | `<div>` with `Mail`/Lucide icons + `Typography` |
| `media-overlay` | Element absolutely positioned over `media` (badge, caption, control) | Composed inside `media-wrap` |
| `play-control` | Play action — circular FAB centred on media (`size="lg" iconOnly`) **or** small chip (`size="sm" iconLeft={Play}`) | `Button variant="primary"` |
| `host-pill` | Solid role label on solid-fill surfaces — `--colorTextStatic` fill, `--colorPrimary` text, `--radiusFull`, `label-sm` | `<span>` |
| `audience-counter` | `avatar-stack` + circular numeric extra (e.g. `40.2k`) | `Avatar` × N + ringed `<div>` |
| `dismiss` | Close (`X`) icon button — top-right of card | `Button variant="ghost" size="sm" iconOnly iconLeft={<X />}` |
| `media-caption-bar` | Bottom caption strip on full-bleed media — solid 72% black wash **or** linear gradient `to top` from 88% black; text in `color="static"` | `<div>` absolutely positioned at `bottom: 0` |
| `footer-row` | Hairline-divided footer block (`border-top: 1px solid var(--colorBorderSubtle)`); content patterns: `view-more` (label + `ChevronRight`), `share` (`Share2` + label), `split-meta` (`Users` + count, `MapPin` + place) | `<div>` |

---

## Card Type Catalog

### 1. PolicyCard

**Purpose:** Displays an existing insurance policy (car, bike, health).

**Shell:** `Card variant="default"` or `"elevated"`, `padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `icon` | Yes | Product icon — 24px |
| `title` | Yes | Policy name |
| `meta` | Yes | Vehicle reg + coverage expiry |
| `status-badge` | Conditional | Only when expiring/expired/notice |
| `primary-cta` | Conditional | Only for actionable states |
| `secondary-cta` | Optional | |
| `inline-notice` | Optional | Renewal message below actions |

**Variants:** `compact` (icon + title + meta + chevron), `standard` (+ expiry badge + actions), `with-notice`

**Token rules:** Expiry text in `--colorSuccessText` (active) / `--colorErrorText` (expired) / `--colorWarningText` (expiring soon). Chevron: `ChevronRight`, 18px.

---

### 2. PromoCard

**Purpose:** Acquisition, cross-sell, or upsell — drives toward a new product or purchase.

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | Bold value proposition |
| `primary-cta` | Yes | Always present |
| `media` | Conditional | Required for vertical-rich and carousel variants |
| `body` | Optional | Supporting subtitle |
| `eyebrow` | Optional | Offer tag — use `Badge` |

**Variants:**

| Variant | Shell | Layout |
|---------|-------|--------|
| `horizontal-banner` | `Card variant="elevated" padding="md"` | Text left, image right |
| `vertical-rich` | Custom full-bleed image + gradient overlay | Image fills card, text overlays at bottom |
| `mini` | `Card variant="default" padding="sm"` | Eyebrow + title + CTA — compact |
| `carousel-tile` | `Card variant="elevated" padding="none"` | Image top, label + CTA bottom |

---

### 3. AlertCard

**Purpose:** Status notification — policy update, system message, time-sensitive event.

**Shell:** Custom — no Card wrapper. Full-width banner with left accent border.

| Slot | Required | Notes |
|------|----------|-------|
| `eyebrow` | Yes | Policy/context name |
| `title` | Yes | Status message |
| `body` | Optional | Additional detail |
| `primary-cta` | Optional | Aligned trailing |

**Variants by severity:**

| Variant | Background | Left border | Text color |
|---------|------------|-------------|------------|
| `info` | `--colorInfoSubtle` | `--colorInfo` | `--colorInfoText` |
| `warning` | `--colorWarningSubtle` | `--colorWarning` | `--colorWarningText` |
| `error` | `--colorErrorSubtle` | `--colorError` | `--colorErrorText` |
| `success` | `--colorSuccessSubtle` | `--colorSuccess` | `--colorSuccessText` |
| `neutral` | `--colorSurfaceRaised` | `--colorBorder` | `--colorTextDefault` |

Left accent border: `4px solid {color}`, full card height. Border radius: `--radius2xl`.

---

### 4. DecisionCard

**Purpose:** Requires explicit user choice before proceeding. High urgency. Blocks flow.

**Shell:** `Card variant="outline" padding="md"` with colored top border.

| Slot | Required | Notes |
|------|----------|-------|
| `status-badge` | Yes | "Pending", "On hold", "Action required" |
| `title` | Yes | Clear directive — `heading-md` |
| `body` | Yes | Context explaining why action is needed |
| `primary-cta` | Yes | `Button variant="primary" fullWidth` |
| `icon` | Optional | |
| `footer-link` | Optional | "Learn more" |

**Variants:** `pending` (warning border), `on-hold` (error border), `action-required` (error border)

---

### 5. ServiceTile

**Purpose:** Quick-access shortcut to a feature or service. Tappable square.

**Shell:** `Card variant="default" padding="sm"` — fixed square aspect ratio.

| Slot | Required | Notes |
|------|----------|-------|
| `icon` | Yes | 24px, `--colorTextDefault` |
| `title` | Yes | `label-lg` — 2 lines max |

Size: 80×80px to 96×96px. No explicit CTA — entire tile is interactive.

---

### 6. NetworkCard

**Purpose:** Provider in a network — hospital, garage, lab. Used in listing contexts.

**Shell:** `Card variant="outline" padding="md"` or `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | Provider name |
| `meta` | Yes | Rating + distance or address |
| `status-badge` | Optional | Network type ("Cashless") |
| `media` | Optional | Provider thumbnail, 64×64px, `--radiusLg` |
| `footer-link` | Optional | "View details" |

Selected state: `border-color: --colorPrimary` + `box-shadow: 0 0 0 1px var(--colorPrimary)`

---

### 7. StatusCard

**Purpose:** Shows status of a claim, transaction, booking, or background process.

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `status-badge` | Yes | Current status |
| `title` | Yes | What is being tracked |
| `meta` | Yes | Reference ID, date, timestamp |
| `body` | Optional | Secondary detail |
| `primary-cta` | Optional | "View details" |
| `progress` | Optional | For in-progress states |

**Badge color by state:**

| State | Badge bg | Badge text |
|-------|----------|------------|
| Completed / Paid | `--colorSuccessBadgeBg` | `--colorSuccessText` |
| Scheduled | `--colorPrimarySubtle` | `--colorPrimary` |
| Pending / Processing | `--colorWarningBadgeBg` | `--colorWarningText` |
| Failed / Rejected | `--colorErrorBadgeBg` | `--colorErrorText` |

---

### 8. CommerceCard

**Purpose:** Pricing, discounts, coupon entry, and reward display.

**Shell:** `Card variant="outline" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | Offer headline or pricing label |
| `primary-cta` | Yes | Apply, Save, Explore |
| `icon` | Conditional | Coupon/offer icon — 24px |
| `input` | Conditional | `TextInput` for coupon code entry |
| `body` | Optional | Savings amount, terms |
| `secondary-cta` | Optional | Remove (for applied state) |

**Variants:** `coupon-input`, `coupon-applied`, `pricing-summary`, `reward`, `offer-banner`

---

### 9. ContentCard

**Purpose:** Editorial content — articles, how-to guides, explanations.

**Shell:** `Card variant="elevated" padding="none"` for image-top; `Card variant="default" padding="md"` for inline banner.

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | Article title |
| `media` | Conditional | Hero image — full bleed, 16:9 or 3:2 |
| `eyebrow` | Optional | Category label — `overline color="brand"` |
| `meta` | Optional | Author, date, read time — `caption` |
| `body` | Optional | Excerpt — 3 lines max |
| `primary-cta` | Optional | "Read more" — `Button variant="outline" size="sm"` |

**Variants:** `image-top`, `thumbnail-right`, `info-banner`

---

### 10. PlanRadioCard (selectable plan option)

**Purpose:** One **plan option** inside a **radio group** (e.g. bike insurance Comprehensive vs Third-party). User selects **exactly one** plan; the **card shell** shows selection via **border** (not a full-card tint). Used in purchase flows where the card is the **entire hit target** but may include **secondary links** (see exceptions below).

**This is a documented variation** of the card shell: it does **not** use the `Card` component wrapper — it uses **ACKO radio "card item"** primitives (`acko-radio-card-item`, `acko-radio-native`, `acko-radio-circle`, `acko-radio-label-content`) plus **app-level CSS** for grid layout and borders.

**Reference implementation:** D2C bike journey — `PlanRadioCard` in `SelectPlan.tsx`; styles in app `index.css` under `.plan-radio-card*`.

#### Shell & border (mandatory)

| State | Border | Token / value |
|-------|--------|----------------|
| Default / unselected | **1px** solid | `var(--colorCardOutlineBorder)` — **matches** `Card variant="outline"` (e.g. bike details / IDV strips on same screen). |
| Selected | **2px** solid | `var(--colorPrimary)` |
| Hover (unselected) | **1px** | Border `var(--colorPrimaryMuted)` |
| Hover (selected) | **2px** | Border `var(--colorPrimaryHover)` |

- **Padding:** `var(20px)`; **radius:** `var(--radius4xl)`; **background:** `var(--colorCardElevatedBg)`.
- **Transition:** `border-color`, `border-width`, `background-color` (~150ms).
- **Focus:** `@acko/css` applies **`box-shadow`** on **`.acko-radio-card-item:focus-within`**, which stacks with the purple border and looks like a **double** purple edge. **Override** for this pattern only: **`.plan-radio-card.acko-radio-card-item:focus-within { box-shadow: none; }`**. Keyboard focus remains on the **radio circle** via **`.acko-radio-native:focus-visible + .acko-radio-circle`** (DS).

#### Layout — CSS Grid (not default ACKO flex row)

Use **`plan-radio-card--plan-grid`**: `grid-template-columns: auto 1fr`; **`align-items: center`** on the title row so the **radio** and **plan title** align vertically.

| `plan-radio-card--has-badge` | Grid areas |
|------------------------------|------------|
| **No** | `radio | title` then `main | main` (full width) |
| **Yes** | `badge | badge` (full width), then `radio | title`, then `main | main` |

- **Badge row** must span **both** columns (`badge badge`), **`justify-self: start`**, so the **"Most popular"** pill aligns with the **radio column** — do **not** place the badge only in column 2.
- **Main** (`acko-radio-label-content.plan-radio-card-main`): set **`gap: 0`** on the label content override so spacing is controlled only by inner stacks.

#### Slots (composition)

| Slot | Required | Notes |
|------|----------|-------|
| `status-badge` | Conditional | **"Most popular"** — `Badge variant="solid" color="purple" size="md" textCase="sentence"`; optional **shimmer** (wrapper + `::after` gradient animation; badge `z-index` above shimmer; `margin-bottom: calc(var(4px) / 2)` under pill). Respect **`prefers-reduced-motion`**. |
| `title` | Yes | Plan name — `Typography` **20px** bold (`heading-sm` + explicit size/line height), primary. |
| `body` (pointers) | Yes | **Single `<ul>`** — **tenure** lines first, then **coverage** lines; same visual system for all rows: Lucide **`Check`** 18px, `var(--colorSuccessText)`, `Typography body-sm` primary **medium**; list **`gap: var(12px)`**; row **`gap: var(8px)`** icon-to-text. |
| `footer-link` | Optional | **"More details"** — `Button variant="link" size="sm"`; **`stopPropagation`** on click so the label does not toggle radio. |
| `divider` | Yes | `Separator` between body and price — tuned **`marginTop`** (e.g. `calc(var(16px) - var(4px))`) above separator block. |
| `meta` (price) | Yes | **Row:** `flex flex-nowrap justify-start items-center gap-2`. **Main price:** `heading-md` + **`--fontHeadingMd*`** tokens. **Strikethrough (optional):** `body-md` secondary, `line-through`, **`--fontBodyMd*`**, regular weight (not extrabold unless product specifies). |

**Main block top spacing:** `padding-top: calc(var(8px) + var(4px))` on `.plan-radio-card-main` for space below the title row.

#### Props (data model)

| Prop | Purpose |
|------|---------|
| `groupName` | Radio `name` (from parent `useId()`). |
| `value` / current `plan` | Option id vs selection. |
| `setPlan` | Updates selection. |
| `showHighlightBadge?` | Renders badge row + `plan-radio-card--has-badge`. |
| `title` | Plan name. |
| `tenurePointers` | `string[]` — short tenure lines (same checklist style as features). |
| `features` | `string[]` — coverage bullets. |
| `price` | Formatted amount. |
| `strikethrough?` | Optional old price. |

#### Exceptions to global card rules

- **Nested control:** Rule "no interactive inside fully interactive card" is **relaxed** here for **"More details"**: use **`type="button"`** + **`stopPropagation`** — required for product UX; document in QA.
- **Selection chrome:** Rule 12 in `Rules for LLM Card Generation` references a **box-shadow ring** — for **PlanRadioCard**, selection is **`border-width` 1→2px** + **primary color**, **not** an extra `box-shadow` on the card (and **disable** DS `:focus-within` shadow as above).

---

### 11. AddOnCheckboxCard (selectable add-on / upsell line item)

**Purpose:** One **optional insurance add-on** (e.g. Zero Dep, PA cover) in a **multi-select** list. User can toggle **many** add-ons on or off. The **entire card** is the hit target; selection is shown with a **2px primary border** (same mental model as plan cards). Used in purchase flows after plan selection.

**This is a documented variation** of the card shell: it does **not** use the `Card` component — it uses a **div** with **`addon-select-card`** + **`addon-select-card--strip`** and **app-level CSS** in `index.css` (strip + body + price row).

**Reference implementation:** D2C bike journey — `AddOnCheckboxCard` in `SelectAddOns.tsx`; styles under `.addon-select-card*`, `.addon-strip*`, `.addon-pointer-list`, `.addon-strip-price-row` in app `index.css`.

#### Shell & border (mandatory)

| State | Border | Notes |
|-------|--------|--------|
| Default / unselected | **2px** solid | `var(--colorCardOutlineBorder)` — aligns with selectable **outline** chrome. |
| Selected | **2px** solid | `var(--colorPrimary)` |
| Hover (unselected) | **2px** | `var(--colorPrimaryMuted)` |
| Hover (selected) | **2px** | `var(--colorPrimaryHover)` |

- **Radius:** `var(--radius4xl)`; **strip layout** uses **`addon-select-card--strip`** → **`padding: 0`**, **`overflow: hidden`**.
- **Background:** outer card uses `var(--greyWhite)`; **top strip** (`.addon-strip`) uses a **demoted-tint** mix: `color-mix(in srgb, var(--colorCardDemotedBg) 22%, var(--greyWhite))` with **bottom hairline** `var(--colorBorderSubtle)`.
- **Transition:** `border-color`, `background-color` (~150ms).

#### Layout — "structure 2" (mandatory for all add-ons)

Use a **single column** inside the strip:

1. **Optional `status-badge` row** — full width, **`justify-start`**. When present, wrap badge in **`max-w-[min(100%,14rem)]`** so long copy wraps cleanly. Typical: **`Badge variant="solid" color="purple" size="md" textCase="sentence"`** ("Popular in your city"). **Omit** the row when `stripEnd` is absent.
2. **Checkbox + title row** — **`flex`**, **`gap: var(12px)`**; checkbox column **`pt-0.5`** for optical alignment with **`heading-sm`** title.
3. Inner stack **`gap: var(8px)`** between badge row and checkbox row (when a badge exists).

**Body (below strip):** `.addon-strip-body` — pointer list + dotted separator + price.

| Region | Class / behaviour |
|--------|-------------------|
| Strip container | `.addon-strip` — padding `var(16px) var(20px)` |
| Pointers | **`<ul class="addon-pointer-list">`** — reuse **PlanRadioCard** row pattern: Lucide **`Check`** 18px, **`plan-radio-card-pointer-item`** / **`plan-radio-card-pointer-icon`**, **`Typography body-sm`** primary medium; list **`gap: var(8px)`**. |
| Price | **`.addon-strip-price-row`** — **`heading-md`** with **`--fontHeadingMd*`** tokens; **dotted rule** via **`::before`** + `repeating-linear-gradient` (not browser `dotted`). |

#### Slots (composition)

| Slot | Required | Notes |
|------|----------|-------|
| `status-badge` | Optional | Title-qualifier pill **above** checkbox + title — **not** beside the title. Omit for add-ons without merchandising. |
| `title` | Yes | Add-on name — **`Typography` `heading-sm`**, **brand** when selected else **primary**, **bold**. |
| `body` (pointers) | Yes | **`string[]`** — checklist rows (same iconography as plan card features). |
| `meta` (price) | Yes | Formatted premium — **dotted line** above price row. |

#### Props (data model)

| Prop | Purpose |
|------|---------|
| `title` | Add-on label. |
| `pointers` | Feature lines for the list. |
| `price` | Number — format with journey **`formatRupees`**. |
| `selected` | Controlled checked state. |
| `onToggle` | `(next: boolean) => void` — invoked on card click or checkbox change. |
| `stripEnd?` | Optional **`ReactNode`** — almost always a **`Badge`**; omit when no badge. |

#### Exceptions to global card rules

- **Nested control:** The whole card is **`onClick`** to toggle. **`Checkbox`** is nested — wrap it in **`stopPropagation`** on **`onClick`** so clicking the checkbox does not double-fire; checkbox **`onChange`** still updates state. Same accessibility pattern as **PlanRadioCard** "More details" (exception to "no nested interactive" for product UX).
- **Not a `Card` component:** Do not wrap in **`@acko/card`** — use the **documented class names** so strip/body/price styles apply.

---

## §12–§43 — Storybook Reference Catalog

Cards 12–43 mirror the layouts in `apps/storybook/stories/CardOrganisms.stories.tsx`. Each entry's **Reference** field names the source function — open it for the full implementation. All cards in this section use only `@acko/card`, `@acko/button`, `@acko/typography`, `@acko/avatar`, `@acko/badge`, and `lucide-react`. Helper class names (`sb-card-*`) live in `apps/storybook/src/preview.css`; their styles use **only semantic tokens** — no primitives, no raw hex.

> **Naming offset:** Storybook function `Card01_*` maps to skill entry **§12**, `Card02_*` to **§13**, …, `Card32_*` to **§43**.

### 12. CreatorListCard

**Purpose:** Header row introducing a list of related people — title on the left, overlapping avatar facepile on the right.

**Reference:** `Card01_CreatorList`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | `Typography variant="body-md" weight="semibold"` |
| `avatar-stack` | Yes | 4 × `Avatar size="sm"`; chained with **negative left margin** and a **2px ring** in `--colorCardBg` for separation; `z-index` increases per child so the leftmost is behind. |

**Notes:** Title and avatar stack sit in a single `space-between` row. This is one of the documented exceptions where left/right placement is allowed because **neither side is body copy** — both are peer slots.

---

### 13. SearchRowCard

**Purpose:** Tappable search entry point — looks like a search input but routes to the search screen.

**Reference:** `Card02_SearchRow`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `search-trigger` | Yes | Pill-shaped row: leading `Search` icon, placeholder text in `body-md` `--colorTextSecondary`, trailing `ChevronRight`; fill `--colorInputBg`, stroke `--colorInputBorder`, radius `--radiusFull`. |

**Notes:** This is a **navigation control disguised as an input** — the trigger is a `<button>`/`<a>`, not a real `TextInput`. Aria label must describe the destination (e.g. `aria-label="Search creators"`).

---

### 14. HorizontalImageRightCard

**Purpose:** Article / topic preview with text on the left, square media on the right; rating + bookmark live with the text.

**Reference:** `Card03_HorizontalImageRight`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | `heading-sm` |
| `rating` | Yes | 5-star row, filled stars `--colorWarning`, empty `--colorBorder` |
| `secondary-cta` | Yes | `Button variant="ghost" size="sm" iconOnly iconLeft={<Bookmark />}` — `aria-label` required |
| `media` | Yes | 104×104 square wave; `--radiusInsetMd` |

**Notes:** This is the **first documented exception** to the vertical-stacking rule. Text occupies the left column, media the right; both columns are vertically `stretch`-aligned. Use **only** for "topic + thumbnail" previews, never for marketing or product cards.

---

### 15. HorizontalImageLeftCard

**Purpose:** Same as §14 but image-leading — used when the media is the dominant signifier (cover art, illustration).

**Reference:** `Card04_HorizontalImageLeft`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `media` | Yes | 104×104 square wave; `--radiusInsetMd` |
| `title` | Yes | `heading-sm`, vertically centered |

**Notes:** Same exception as §14. Use the `vcenter` modifier (`align-items: center`) when the body is a single line — keeps the title visually balanced against the media.

---

### 16. TicketCard

**Purpose:** Quantity-controlled ticket / pass row (event tickets, child seats, add-on units).

**Reference:** `Card05_Ticket`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | `body-md` `weight="semibold"` |
| `meta` | Yes | `body-sm` `color="secondary"` (e.g. age range, tier) |
| `stepper` | Yes | `Button variant="secondary" size="sm" iconOnly` (Minus) + count + `Button …` (Plus); minimum is 1 — disable `−` when `n <= 1`. |

**Notes:** Stepper `Button` is **interactive nested in a non-interactive card** — the `Card` itself has no `onClick`. This is the standard composition; no exception needed.

---

### 17. ProfileFollowCard

**Purpose:** Compact person row with a Follow CTA — list item, search result, recommendation row.

**Reference:** `Card06_ProfileFollow`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `avatar` | Yes | `Avatar size="lg"` |
| `title` | Yes | Display name — `body-md` `weight="semibold"` |
| `meta` | Yes | Handle — `body-sm` `color="secondary"` |
| `primary-cta` | Yes | `Button variant="primary" size="sm"` ("Follow") |

---

### 18. SocialFeedCard

**Purpose:** Single social-feed post — author header, body, engagement stats.

**Reference:** `Card07_SocialFeed`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `avatar` | Yes | `Avatar size="md"` |
| `title` | Yes | Author name — `body-md` `weight="semibold"` |
| `meta` | Yes | Timestamp — `caption` `color="secondary"` (e.g. "· 2 weeks ago") |
| `secondary-cta` | Yes | `Button variant="ghost" size="sm" iconOnly iconLeft={<MoreHorizontal />}` |
| `body` | Yes | `body-sm` `color="secondary"` |
| `feed-stats` | Yes | Likes (`Heart`), saves (`Bookmark`), comments (`MessageCircle`); icons 18px, counts in `caption`, color `--colorTextSecondary`; row `gap-8`, separated `space-between`. |

---

### 19. EventRowCard

**Purpose:** Event / scheduled session row — small thumbnail + time-stamped title + actions.

**Reference:** `Card08_EventRow`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `media` | Yes | 72×56 thumbnail wave; `--radiusInsetSm` |
| `time-badge` | Yes | "07:00 PM" — `--colorTextPrimary` fill, `--colorTextStatic` text |
| `title` | Yes | `body-md` `weight="semibold"` |
| `meta` | Yes | Date — `body-sm` `color="secondary"` |
| `secondary-cta` | Optional | `MoreHorizontal` ghost icon button |

---

### 20. StatBarCard

**Purpose:** Compact analytics summary — three icon + number cells in a single row.

**Reference:** `Card09_StatBar`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `stat-grid` | Yes | 3 cells, `grid-template-columns: repeat(3, minmax(0, 1fr))`; each cell stacks icon (28px, `--colorTextSecondary`) above number (`body-md` `semibold`); cell `gap-8`, grid `gap-12`. |

**Notes:** Always 3 cells. Avoid 2 (looks empty) or 4+ (cramped) — split into a second card if more metrics are needed.

---

### 21. ReadingHeaderCard

**Purpose:** Reading-task header — overline label + leading-icon title row.

**Reference:** `Card10_ReadingHeader`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `eyebrow` | Yes | "Reading task" — `caption` `color="secondary"` |
| `icon` | Yes | 20px Lucide (e.g. `Mail`), `--colorTextPrimary`, top-aligned with `margin-top: 2px` for optical alignment |
| `title` | Yes | `heading-sm` |

---

### 22. ReadingIconBodyCard

**Purpose:** Reading-task with a leading icon, title, and a short description.

**Reference:** `Card11_ReadingIconBody`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `icon` | Yes | 22px Lucide, `--colorTextPrimary` |
| `title` | Yes | `heading-sm` |
| `body` | Yes | `body-sm` `color="secondary"`, ≤ 2 lines |

---

### 23. ReadingInlineLongCard

**Purpose:** Reading-task variant with **inline icon + title** in one row, then a long body paragraph below.

**Reference:** `Card12_ReadingInlineLong`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `icon` | Yes | 20px, inline with title |
| `title` | Yes | `heading-sm` |
| `body` | Yes | `body-sm` `color="secondary"`, 3–6 lines |

---

### 24. ReadingTaskListCard

**Purpose:** Reading-task with a **list of sub-items** and a Continue CTA — onboarding tasks, learning checkpoints.

**Reference:** `Card13_ReadingTaskList`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `eyebrow` | Yes | "Reading task" |
| `title` | Yes | `heading-sm` |
| `task-list` | Yes | Vertical list, `gap-12`; each row: 18px Lucide icon `--colorTextPrimary` + label `body-md` `weight="semibold"`; row `gap-12` icon-to-label. |
| `primary-cta` | Yes | `Button variant="secondary" fullWidth` ("Continue") |

---

### 25. ReadingTimedCard

**Purpose:** Reading-task with a leading **time badge** + title + long body — used when the session is timeboxed.

**Reference:** `Card14_ReadingTimed`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `time-badge` | Yes | `align-self: flex-start` |
| `title` | Yes | `heading-sm` |
| `body` | Yes | `body-sm` `color="secondary"`, 4–6 lines |

---

### 26. ReadingMediaMetaCard

**Purpose:** Reading-task / lesson preview with a hero media block, overlay time badge, body, and trailing rating + bookmark.

**Reference:** `Card15_ReadingMediaMeta`

**Shell:** `Card variant="default" padding="none"` + `sb-card-clip` (overflow hidden so media corners follow card radius)

| Slot | Required | Notes |
|------|----------|-------|
| `media` | Yes | 16:9 wave, full bleed, no inner radius |
| `media-overlay` (`time-badge`) | Yes | Absolutely positioned: `top: 12px; left: 12px;` |
| `title` | Yes | `heading-sm`; lives in the body region (`padding: 20px`) |
| `body` | Yes | `body-sm` `color="secondary"` |
| `meta` | Yes | Duration in `caption` `color="secondary"` |
| `rating` | Yes | 5-star row |
| `secondary-cta` | Yes | `Bookmark` ghost icon button, trailing |

---

### 27. ProfilePostArticleCard

**Purpose:** Article-style post — author header with Follow, then long-form title and body.

**Reference:** `Card16_ProfilePostArticle`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `avatar` | Yes | `Avatar size="lg"` |
| `title` (author) | Yes | `body-md` `weight="semibold"` |
| `meta` | Yes | Handle — `body-sm` `color="secondary"` |
| `primary-cta` | Yes | `Button variant="primary" size="sm"` ("Follow") |
| `title` (article) | Yes | `heading-sm` |
| `body` | Yes | `body-sm` `color="secondary"` |

**Notes:** Card has **two `title` slots** — author name (in the header) and article title (in the body). Document this in code comments.

---

### 28. HeroCenteredCard

**Purpose:** Centred onboarding / empty-state-style card — avatar, headline, body, full-width primary CTA.

**Reference:** `Card17_HeroCentered`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `avatar` | Yes | `Avatar size="xl"` |
| `title` | Yes | `heading-sm` `align="center"` |
| `body` | Yes | `body-sm` `color="secondary"` `align="center"` |
| `primary-cta` | Yes | `Button variant="primary" fullWidth iconRight={<ArrowRight />}` |

---

### 29. InfoViewMoreCard

**Purpose:** Info / lesson summary with a "View more" footer link.

**Reference:** `Card18_InfoViewMore`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | `heading-sm` |
| `body` | Yes | `body-sm` `color="secondary"`, 2 lines |
| `meta` | Yes | Duration — `caption` `color="secondary"` |
| `footer-row` (`view-more`) | Yes | Hairline divider + label `body-md` `weight="semibold"` + `ChevronRight` 20px; full-width `space-between`. |

---

### 30. PricingChooseShareCard

**Purpose:** Pricing card — title, price, primary "Choose" CTA, and a "Share" footer.

**Reference:** `Card19_PricingChooseShare`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | `heading-sm` |
| `meta` | Yes | Price — `body-sm` `color="secondary"` (e.g. `$39 / person`) |
| `primary-cta` | Yes | `Button variant="primary" size="sm"` ("Choose") |
| `footer-row` (`share`) | Yes | Hairline divider + `Share2` 18px + label `body-md`; inline-flex, `gap-8`. |

---

### 31. ListEventRowCard

**Purpose:** Event row for a vertical list — thumbnail, title, body, trailing time, and a footer with members + location.

**Reference:** `Card20_ListEventRow`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `media` | Yes | 80×80 thumbnail wave; `--radiusInsetMd` |
| `title` | Yes | `heading-sm` |
| `body` | Yes | `body-sm` `color="secondary"`, 2–3 lines |
| `meta` (time) | Yes | `caption` `color="secondary"`, trailing, `white-space: nowrap` |
| `footer-row` (`split-meta`) | Yes | Hairline divider + two items: (`Users` + member count) and (`MapPin` + place); `space-between`, both `body-md` primary. |

**Notes:** This is a documented exception — the body region uses a thumbnail-left + text-right split (similar to §14/§15) because it is a **list row**, not a marketing card.

---

### 32. CoverPlayBottomBarCard

**Purpose:** Full-bleed media cover with a **centred play FAB** and a **bottom caption bar** (course / video preview).

**Reference:** `Card21_CoverPlayBottomBar`

**Shell:** `Card variant="default" padding="none"` + `sb-card-clip`

| Slot | Required | Notes |
|------|----------|-------|
| `media` | Yes | 16:10 wave, `min-height: 220px`, no radius |
| `play-control` (FAB) | Yes | `Button variant="primary" size="lg" iconOnly iconLeft={<Play />}` centred over media; **override**: fill `--colorTextPrimary`, text `--colorTextStatic` (`sb-card-cover-play-fab`); `pointer-events: auto` (parent overlay is `none`). |
| `media-caption-bar` | Yes | Bottom strip: solid `color-mix(in srgb, var(--colorTextPrimary) 72%, transparent)`; padding `16px 20px`; stacks `caption color="static"` (author) above `heading-sm color="static"` (title); `gap-4`. |

---

### 33. CoverAvatarGradientFooterCard

**Purpose:** Full-bleed media cover with a **gradient bottom bar** containing avatar, title stack, and a More button.

**Reference:** `Card22_CoverAvatarGradientFooter`

**Shell:** `Card variant="default" padding="none"` + `sb-card-clip`

| Slot | Required | Notes |
|------|----------|-------|
| `media` | Yes | 16:10 wave, `min-height: 220px` |
| `media-caption-bar` (gradient) | Yes | `linear-gradient(to top, color-mix(in srgb, var(--colorTextPrimary) 88%, transparent) 0%, transparent 100%)`; padding `16px 20px`. |
| `avatar` | Yes | `Avatar size="lg"` |
| `eyebrow` | Yes | Author — `caption` `color="static"` |
| `title` | Yes | `heading-sm` `color="static"` |
| `meta` | Yes | Duration — `caption` `--colorTextStatic` (mix of `--colorTextStatic` 78% transparent) |
| `secondary-cta` | Yes | `MoreHorizontal` ghost icon button — color override `--colorTextStatic` |

---

### 34. InsetMediaProfileRowCard

**Purpose:** White card with an **inset rounded media block at the top**, then a profile row + More button.

**Reference:** `Card23_InsetMediaProfileRow`

**Shell:** `Card variant="default" padding="none"` + `sb-card-clip`

| Slot | Required | Notes |
|------|----------|-------|
| `media` | Yes | 16:10 wave, **inset**: `padding: 20px 20px 0` around media wrapper; `--radiusInsetMd` on media |
| `avatar` | Yes | `Avatar size="lg"` |
| `title` | Yes | `body-md` `weight="semibold"` |
| `meta` | Yes | Handle — `body-sm` `color="secondary"` |
| `secondary-cta` | Yes | `MoreHorizontal` ghost icon button |

---

### 35. ReadingGradientFacepileCard

**Purpose:** Reading-task card on a **purple-to-blue gradient surface** — facepile, eyebrow, title, duration, play chip.

**Reference:** `Card24_ReadingGradientFacepile`

**Shell:** `Card variant="outline" padding="md"` + `sb-card-reading-gradient sb-card-clip`

- **Background:** `linear-gradient(125deg, var(--colorPrimary) 0%, var(--colorBtnLinkColor) 100%)`
- **Border:** transparent (gradient does the work)
- **Text:** all text uses `color="static"` or the muted alias `color-mix(in srgb, var(--colorTextStatic) 78%, transparent)`

| Slot | Required | Notes |
|------|----------|-------|
| `avatar-stack` | Yes | 4 × `Avatar size="md"`; ring color `color-mix(in srgb, var(--colorTextStatic) 35%, transparent)` for visibility on gradient |
| `eyebrow` | Yes | "Reading task" — `overline` muted-static |
| `title` | Yes | `heading-md` `color="static"` |
| `meta` | Yes | Duration — `caption` muted-static |
| `play-control` (chip) | Yes | `Button variant="primary" size="sm" iconLeft={<Play />}` ("Play"); chip override: fill `--colorTextPrimary`, text `--colorTextStatic`. |

---

### 36. HostSolidLocationCard

**Purpose:** Solid-primary host card — host avatar + name + Host pill, title, location.

**Reference:** `Card25_HostSolidLocation`

**Shell:** `Card variant="outline" padding="md"` + `sb-card-host-solid`

- **Background:** `--colorPrimary` (solid)
- **Border:** transparent
- **All text:** `color="static"`

| Slot | Required | Notes |
|------|----------|-------|
| `avatar` | Yes | `Avatar size="md"` |
| `title` (host) | Yes | Host name — `body-md` `weight="medium" color="static"` |
| `host-pill` | Yes | "Host" — fill `--colorTextStatic`, text `--colorPrimary`, radius `--radiusFull`, `label-sm` |
| `title` (event) | Yes | `heading-md` `color="static"` |
| `footer-row` (`split-meta`) | Yes | `MapPin` 18px + place name — both static; no top divider on solid surface (gap only). |

---

### 37. HostDenseAudienceCard

**Purpose:** Dense host card — title row with More, audience facepile + count, footer date + play chip.

**Reference:** `Card26_HostDenseAudience`

**Shell:** `Card variant="outline" padding="md"` + `sb-card-host-solid`

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | `heading-md` `color="static"`; same row as `MoreHorizontal` ghost (`color-static`). |
| `secondary-cta` | Yes | `MoreHorizontal` ghost icon button |
| `audience-counter` | Yes | 4 × `Avatar size="xl"` overlapped + 56×56 ringed `<div>` containing `User` 18px + count (e.g. "40.2k") in `label-md`; ring `2px solid --colorTextStatic`. |
| `meta` | Yes | "2 hours · October 30, 2023" — `caption`, `color-mix(--colorTextStatic 72%, transparent)` |
| `play-control` (chip) | Yes | Same chip override as §35. |

---

### 38. CourseApplyCard

**Purpose:** Course / event signup — time badge, title, duration, full-width Apply.

**Reference:** `Card27_CourseApply`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `time-badge` | Yes | `align-self: flex-start` |
| `title` | Yes | `heading-sm` |
| `meta` | Yes | Duration — `body-sm` `color="secondary"` |
| `primary-cta` | Yes | `Button variant="primary" fullWidth` ("Apply") |

---

### 39. ProfileSheetFollowCard

**Purpose:** Profile sheet / dialog-style card — top dismiss, centred avatar/name/handle, full-width Follow.

**Reference:** `Card28_ProfileSheetFollow`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `dismiss` | Yes | `Button variant="ghost" size="sm" iconOnly iconLeft={<X />}`; row `justify: flex-end`; ghost color `--colorTextSecondary`. |
| `avatar` | Yes | `Avatar size="xl"`, centred |
| `title` | Yes | `heading-sm` `align="center"` |
| `meta` | Yes | Handle — `body-sm` `color="secondary" align="center"` |
| `primary-cta` | Yes | `Button variant="primary" fullWidth` ("Follow") |

---

### 40. CreatorChipCard

**Purpose:** Minimal horizontal "creator chip" — avatar + name + role label. Often used inline within feeds.

**Reference:** `Card29_CreatorChip`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `avatar` | Yes | `Avatar size="md"` |
| `title` | Yes | Name — `body-md` `weight="semibold"` |
| `meta` | Yes | Role label — `body-sm` `color="brand"` (e.g. "Creator") |

**Notes:** Single-row layout; meta uses `color="brand"` instead of `secondary` because the role is the value proposition.

---

### 41. CoursePreviewStackCard

**Purpose:** Course preview — hero media, then left-aligned instructor + course title + duration.

**Reference:** `Card30_CoursePreviewStack`

**Shell:** `Card variant="default" padding="none"` + `sb-card-clip`

| Slot | Required | Notes |
|------|----------|-------|
| `media` | Yes | 16:9 wave, full bleed |
| `eyebrow` | Yes | Instructor — `caption` `color="secondary"` |
| `title` | Yes | `heading-sm` |
| `meta` | Yes | Duration — `body-sm` `color="secondary"` |

**Notes:** Body region uses `padding: 20px` (`sb-card-reading-body`).

---

### 42. CoursePreviewOverlapCard

**Purpose:** Course preview with an **avatar overlapping the seam** between media and body — centred body content + footer "View contents" link.

**Reference:** `Card31_CoursePreviewOverlap`

**Shell:** `Card variant="default" padding="none"` + `sb-card-clip`

| Slot | Required | Notes |
|------|----------|-------|
| `media` | Yes | 16:9 wave |
| `avatar` | Yes | `Avatar size="xl"`; `margin-top: -32px` to overlap; **3px ring** in `--colorCardBg` to read against media; `border-radius: --radiusFull`. |
| `title` (instructor) | Yes | `body-md` `weight="semibold"` |
| `meta` | Yes | Course title — `body-sm` `color="secondary"` |
| `footer-row` (`view-more`) | Yes | `Button variant="link"` ("View contents"); link override: color `--colorTextSecondary`, no underline; on hover, color `--colorTextPrimary` + underline. Top hairline `--colorBorderSubtle`. |

---

### 43. CoursePreviewTitleFirstCard

**Purpose:** Centred course preview — title above a square media block, then a "View contents" footer.

**Reference:** `Card32_CoursePreviewTitleFirst`

**Shell:** `Card variant="default" padding="md"`

| Slot | Required | Notes |
|------|----------|-------|
| `title` | Yes | `heading-sm` `align="center"` |
| `media` | Yes | Square wave, `max-width: 240px`, `aspect-ratio: 1`, `--radiusInsetMd` |
| `footer-row` (`view-more`) | Yes | Same `view-contents` link pattern as §42. |

**Notes:** Body region is centred (`align-items: center`) with `gap-16`.

---

## Shell Selection Guide

| Card Type | Default Shell | When elevated | When outline |
|-----------|--------------|---------------|--------------|
| §1 PolicyCard | `default` | On dark/grey page bg | Never |
| §2 PromoCard | `elevated` | Always for rich variants | Never |
| §3 AlertCard | Custom | — | — |
| §4 DecisionCard | `outline` | Never | Always |
| §5 ServiceTile | `default` | Never | Never |
| §6 NetworkCard | `outline` | Never | For listing/selection |
| §7 StatusCard | `default` | Never | Never |
| §8 CommerceCard | `outline` | Never | Always |
| §9 ContentCard | `elevated` | For standalone articles | Never |
| §10 PlanRadioCard | ACKO radio **card item** + app grid (see §10) — **not** the `Card` component | — | **Idle** border matches `outline`: 1px `--colorCardOutlineBorder`; **selected**: 2px `--colorPrimary` |
| §11 AddOnCheckboxCard | `addon-select-card` + `addon-select-card--strip` (see §11) — **not** the `Card` component | — | 2px border idle/selected; strip uses **demoted** tint |
| §12 CreatorListCard | `default` `padding="md"` | — | — |
| §13 SearchRowCard | `default` `padding="md"` | — | — |
| §14 HorizontalImageRightCard | `default` `padding="md"` | — | — |
| §15 HorizontalImageLeftCard | `default` `padding="md"` | — | — |
| §16 TicketCard | `default` `padding="md"` | — | — |
| §17 ProfileFollowCard | `default` `padding="md"` | — | — |
| §18 SocialFeedCard | `default` `padding="md"` | — | — |
| §19 EventRowCard | `default` `padding="md"` | — | — |
| §20 StatBarCard | `default` `padding="md"` | — | — |
| §21 ReadingHeaderCard | `default` `padding="md"` | — | — |
| §22 ReadingIconBodyCard | `default` `padding="md"` | — | — |
| §23 ReadingInlineLongCard | `default` `padding="md"` | — | — |
| §24 ReadingTaskListCard | `default` `padding="md"` | — | — |
| §25 ReadingTimedCard | `default` `padding="md"` | — | — |
| §26 ReadingMediaMetaCard | `default` `padding="none"` + clip | — | — |
| §27 ProfilePostArticleCard | `default` `padding="md"` | — | — |
| §28 HeroCenteredCard | `default` `padding="md"` | — | — |
| §29 InfoViewMoreCard | `default` `padding="md"` | — | — |
| §30 PricingChooseShareCard | `default` `padding="md"` | — | — |
| §31 ListEventRowCard | `default` `padding="md"` | — | — |
| §32 CoverPlayBottomBarCard | `default` `padding="none"` + clip | — | — |
| §33 CoverAvatarGradientFooterCard | `default` `padding="none"` + clip | — | — |
| §34 InsetMediaProfileRowCard | `default` `padding="none"` + clip | — | — |
| §35 ReadingGradientFacepileCard | `outline` `padding="md"` + gradient class | — | Always |
| §36 HostSolidLocationCard | `outline` `padding="md"` + solid class | — | Always (override fill `--colorPrimary`) |
| §37 HostDenseAudienceCard | `outline` `padding="md"` + solid class | — | Always (override fill `--colorPrimary`) |
| §38 CourseApplyCard | `default` `padding="md"` | — | — |
| §39 ProfileSheetFollowCard | `default` `padding="md"` | — | — |
| §40 CreatorChipCard | `default` `padding="md"` | — | — |
| §41 CoursePreviewStackCard | `default` `padding="none"` + clip | — | — |
| §42 CoursePreviewOverlapCard | `default` `padding="none"` + clip | — | — |
| §43 CoursePreviewTitleFirstCard | `default` `padding="md"` | — | — |

---

## Token Quick Reference

> Token definitions live in `colors-semantic.md`, `radii.md`, `shadows.md`, and `scales.md`. The tables below are a card-specific cheatsheet for which canonical token to reach for in each card slot — not a re-definition.

### Surfaces

| Token | Use |
|-------|-----|
| `--colorCardBg` | Default card background |
| `--colorCardElevatedBg` | Elevated card background |
| `--colorCardDemotedBg` | Demoted/secondary card |
| `--colorCardOutlineBorder` | Outline-variant stroke + selectable card idle border |
| `--colorInputBg` | Search-trigger fill (§13) |
| `--colorInputBorder` | Search-trigger stroke (§13) |
| `--colorPrimary` | Solid host surfaces (§36, §37), gradient stop (§35) |
| `--colorBtnLinkColor` | Gradient stop (§35), wave gradient mid-stop |
| `--colorPrimarySubtle` | Wave gradient start, marketing tint |
| `--colorTextPrimary` | Caption-bar fill (§32 via 72% mix), play-chip fill |
| `--colorTextStatic` | Text on dark/gradient/solid surfaces |
| `--colorWarning` | Filled stars in `rating` slot |
| `--colorBorder` | Empty stars in `rating` slot |
| `--colorBorderSubtle` | Hairline footer dividers |

### Spacing in cards (1px-base, per `scales.md`)

`@acko/tokens` ships `--spacing: 0.0625rem`, so utility numbers equal pixel values.

| Utility | Pixels | Use |
|---------|--------|-----|
| `gap-4` | 4px | Caption-bar inner stack (§32, §33) |
| `gap-8` | 8px | Icon-to-text, tight rows, stat-cell stacks |
| `gap-12` | 12px | Reading-stack default, footer-row gaps, list rows |
| `gap-16` | 16px | Internal section gaps, `sb-card-split` gap |
| `gap-20` | 20px | Card padding `md` (default), reading-body padding |
| `gap-24` | 24px | Card padding `lg`, gallery grid gap |

**Card padding scale:** `sm` 12px, `md` 20px, `lg` 24px (Part 1).

### Border radius

| Token | Value | Use |
|-------|-------|-----|
| `--radiusSm` | 4px | `time-badge` |
| `--radiusLg` | 8px | Provider thumbnails |
| `--radius2xl` | 12px | AlertCard, inline notices |
| `--radiusInsetSm` | 8px | Small thumbs in `padding="sm"` cards (§19) |
| `--radiusInsetMd` | 4px | Inset media in `padding="md"` cards (§14, §15, §31, §43) |
| `--radius4xl` | 20px | All card containers |
| `--radiusFull` | 9999px | Badges, pills, search-trigger, host-pill, audience ring |

### Shadows

| Token | Use |
|-------|-----|
| `--shadowCard` | Elevated card shell |
| `--shadowSubtle` | Small internal raised elements |

### Wave / placeholder gradient (Storybook media)

```css
background: linear-gradient(
  125deg,
  var(--colorPrimarySubtle) 0%,
  var(--colorBtnLinkColor) 45%,
  var(--colorPrimary) 100%
);
```

Used for `media` slots in §12, §14, §15, §19, §26, §31–§34, §41–§43. Replace with real imagery in production; gradient is a placeholder.

---

## Rules for LLM Card Generation

1. **Match type first** — identify which of the **43** types the card is. Closest type wins; extend minimally. If nothing fits, **stop and ask** — do not invent a new shape.
2. **Only use defined slots** — do not invent new structural regions. The Slot Vocabulary is the contract.
3. **One primary CTA per card** — never two primary buttons in the same card.
4. **Tokens only** — never write a raw hex, rem, or px value for color or spacing. Spacing utilities are 1px-base (`gap-12` = 12px); see `scales.md`.
5. **Typography via component** — always use `Typography` with a named variant; never `<h*>`, `<p>`, or inline `font-*` styles.
6. **Badge for status** — any state label uses `Badge`, not custom text.
7. **No decorative borders inside default cards** — use `Separator` only for genuine content divisions.
8. **Card width is always contextual** — cards never define their own `width`. Parent layout controls it.
9. **Dark theme is inherited** — do not write per-card dark-theme overrides. Semantic tokens handle it.
10. **Media must have a fallback** — if a `media` slot image fails, the card must still be usable.
11. **No CTA inside fully-interactive cards** — when the entire card is a tap target, do not nest `Button` or any interactive component inside it. **Documented exceptions:** §10 PlanRadioCard ("More details" link with `stopPropagation`), §11 AddOnCheckboxCard (nested `Checkbox` with `stopPropagation`).
12. **Selection state lives on the card shell** — variant change + visible border treatment (`box-shadow: 0 0 0 2px var(--colorPrimary)`, **or** §10's 1→2px border, **or** §11's 2px primary border). Never use a `Badge` or internal element to indicate selection.
13. **Title and body stack vertically by default** — never default to title-left / subtext-right in one row. **Documented split-row exceptions:** §12 (title + facepile), §14 / §15 (text + thumbnail), §31 (list-event row), §37 (title + More button).
14. **Title-reference badges stay above the title** (top-edge overlap allowed). Align primary CTAs across cards in a grid to the same vertical position.
15. **Cover and gradient surfaces use static text** — on `media-caption-bar`, `sb-card-host-solid`, and `sb-card-reading-gradient` surfaces, all text uses `Typography color="static"` (or the muted-static `color-mix` alias). Never rely on `--colorTextPrimary` over dark/gradient fills.
16. **Reference the Storybook function** — when implementing §12–§43, link the source function (e.g. `Card01_CreatorList`) in the component file's top comment so the canonical layout is one click away.
