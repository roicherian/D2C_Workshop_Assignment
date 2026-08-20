---
description: Semantic color tokens — role-based aliases that components reference. Never use primitives directly.
globs: "**/*.css"
---

# Semantic Color Tokens

Components reference ONLY these tokens. Never use primitives (`--purple600`, `--grey200`) in component CSS.

```
primitives → semantics → component CSS
--purple600 → --colorPrimary → .acko-btn-primary { background-color: var(--colorPrimary) }
```

## Documentation scope

**Portable across platforms:** The **role** of each semantic token (what it means for UI: primary CTA, surface, error text, border, etc.) and how themes (light / dark / elevated) swap *values*. Component code must always go through **semantic names**, never raw palette keys.

**Web-specific in this file:** CSS custom property syntax (e.g. `--colorTextPrimary`), references to `tokens.css` / `[data-theme]`. Flutter should use the **same semantic identifiers** (e.g. `AckoColors.primary`, or a generated map from a shared token file), not hardcoded hex from this doc’s reference columns.

## Brand / Primary

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorPrimary` | Main CTA fill | `purple600` | `purple500` |
| `--colorPrimaryHover` | Hover state | `purple700` | `purple400` |
| `--colorPrimaryActive` | Pressed state | `purple800` | `purple300` |
| `--colorPrimaryMuted` | Soft border hints | `purple400` | `purple600` |
| `--colorPrimarySubtle` | Tinted backgrounds | `purple100` | `purple900` |
| `--colorPrimaryRing` | Focus ring | `purple200` | `purple800` |
| `--colorOnPrimary` | Text on primary bg | `#FFFFFF` | `greyWhite` |

## Surfaces

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorSurface` | Page background | `grey100` | `grey750` |
| `--colorSurfaceRaised` | Elevated surfaces | `grey100` | `grey700` |
| `--colorSurfaceRaisedHover` | Hovered raised | `grey200` | `grey650` |
| `--colorSurfaceRaisedActive` | Pressed raised | `grey300` | `grey600` |
| `--colorSurfaceOverlay` | Backdrop | `rgba(10,10,10,0.5)` | `rgba(0,0,0,0.7)` |
| `--colorSurfaceGhostHover` | Ghost interaction bg | `rgba(0,0,0,0.04)` | `rgba(255,255,255,0.05)` |

## Text

| Token | Typography prop | Light | Dark | Role |
|-------|----------------|-------|------|------|
| `--colorTextPrimary` | `primary` (default) | `grey800` | `grey50` | Headings, values, main content |
| `--colorTextDefault` | — | `grey700` | `grey100` | Labels, body text |
| `--colorTextSupporting` | — | `grey550` | `grey200` | Supporting text (readonly, chevrons) |
| `--colorTextSecondary` | `secondary` | `grey450` | `grey350` | Subtext, placeholders, helpers |
| `--colorTextDisabled` | — | `grey300` | `grey450` | Disabled text |
| `--colorTextInvert` | `invert` | `#FFFFFF` | `greyWhite` | Text on dark/filled surfaces regardless of theme |
| `--colorTextBrand` | `brand` | `purple600` | `purple500` | Brand-colored text — links, emphasis |
| `--colorTextError` | `error` | `red700` | `red400` | Error messages |
| `--colorTextSuccess` | `success` | `green700` | `green400` | Success messages |
| `--colorTextStatic` | `static` | `greyWhite` | `greyWhite` | Fixed color across themes — does not change |

## Borders

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorBorder` | Default border | `grey300` | `grey600` |
| `--colorBorderStrong` | Hover/filled | `grey450` | `grey550` |
| `--colorBorderSubtle` | Faint dividers | `grey200` | `grey650` |

## Dividers

Explicit separator tokens (distinct from borders).

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorDivider` | Standard divider | `grey200` | `grey650` |
| `--colorDividerStrong` | Emphasized divider | `grey300` | `grey600` |
| `--colorDividerSubtle` | Faint divider | `grey150` | `grey700` |

## Disabled

| Token | Light | Dark |
|-------|-------|------|
| `--colorDisabledBg` | `grey150` | `grey600` |
| `--colorDisabledText` | `grey350` | `grey450` |
| `--colorDisabledBorder` | `grey200` | `grey600` |

## Readonly

Readonly state — distinct from disabled. Elements CAN receive focus, value IS submitted with form.

| Token | Light | Dark |
|-------|-------|------|
| `--colorReadonlyBg` | `grey100` | `grey700` |
| `--colorReadonlyText` | `grey700` | `grey200` |
| `--colorReadonlyBorder` | `grey250` | `grey600` |

## Feedback States

### Error
| Token | Light | Dark |
|-------|-------|------|
| `--colorError` | `red600` | `red600` |
| `--colorErrorText` | `red700` | `red400` |
| `--colorErrorSubtle` | `red100` | `red950` |
| `--colorErrorBorder` | `red200` | `red800` |
| `--colorErrorBadgeBg` | `red100` | `red900` |
| `--colorErrorGradientFrom` | `red200` | `red800` | Input error border gradient start |
| `--colorErrorGradientTo` | `grey150` | `grey600` | Input error border gradient end |

### Success
| Token | Light | Dark |
|-------|-------|------|
| `--colorSuccess` | `green600` | `green500` |
| `--colorSuccessText` | `green700` | `green400` |
| `--colorSuccessSubtle` | `green100` | `green950` |
| `--colorSuccessBorder` | `green200` | `green800` |
| `--colorSuccessBadgeBg` | `green200` | `green900` |

### Warning
| Token | Light | Dark |
|-------|-------|------|
| `--colorWarning` | `orange600` | `orange500` |
| `--colorWarningText` | `orange700` | `orange400` |
| `--colorWarningSubtle` | `orange50` | `orange950` |
| `--colorWarningBorder` | `orange100` | `orange800` |
| `--colorWarningBadgeBg` | `orange200` | `orange900` |

### Info (uses brand purple — NOT blue)
| Token | Light | Dark |
|-------|-------|------|
| `--colorInfo` | `purple600` | `purple500` |
| `--colorInfoText` | `purple700` | `purple400` |
| `--colorInfoSubtle` | `purple100` | `purple950` |
| `--colorInfoBorder` | `purple200` | `purple800` |
| `--colorInfoBadgeBg` | `purple200` | `purple900` |

## Cards

Surface hierarchy (five levels, back → front):

| Level | Token name | Light | Dark | Intent |
|-------|------------|-------|------|--------|
| page.base | `--colorSurface` | `grey100` | `grey700` | Primary page background |
| surface.default | `--colorCardBg` | `grey50` | `grey650` | Default card/container surface |
| surface.secondary | `--colorCardSecondaryBg` | `grey100` | `grey700` | Secondary layered surface |
| surface.elevated | `--colorCardElevatedBg` | `grey50` | `grey600` | Elevated cards (modals, highlights) |
| surface.demoted | `--colorCardDemotedBg` | `grey150` | `grey750` | Low emphasis / background containers |

Border tokens:

| Token | Light | Dark |
|-------|-------|------|
| `--colorCardBorder` | `greyWhite` | `grey600` |
| `--colorCardSecondaryBorder` | `grey150` | `grey600` |
| `--colorCardDemotedBorder` | `grey200` | `grey650` |
| `--colorCardOutlineBorder` | `grey200` | `grey600` |

## Component-Specific Tokens

### Tooltip
| Token | Light | Dark |
|-------|-------|------|
| `--colorTooltipBg` | `grey700` | `grey200` |
| `--colorTooltipText` | `greyWhite` | `grey750` |

### Tabs — pill container + inner tab
| Token | Light | Dark | Role |
|-------|-------|------|------|
| `--colorTabPillBg` | `grey50` | `grey650` | Outer pill track fill |
| `--colorTabPillOuterBorder` | `greyWhite` | `grey600` | `1px` outer pill border |
| `--colorTabPillActiveBg` | `purple100` | `purple900` | Active inner pill fill |
| `--colorTabPillActiveText` | `purple600` | `greyWhite` | Active label + icon |
| `--colorTabTextInactive` | `grey400` | `grey400` | Inactive pill tab (transparent bg) |
| `--colorTabTextDisabled` | `grey300` | `grey500` | Disabled pill tab label |

### Toggle
| Token | Light | Dark |
|-------|-------|------|
| `--colorToggleBg` | `grey150` | `grey650` |
| `--colorToggleBgHover` | `grey200` | `grey600` |
| `--colorToggleActiveBg` | `purple100` | `purple900` |
| `--colorToggleActiveText` | `purple700` | `purple300` |
| `--colorToggleText` | `grey450` | `grey350` |

### Accordion
| Token | Light | Dark |
|-------|-------|------|
| `--colorAccordionBorder` | `grey200` | `grey600` |
| `--colorAccordionHeaderHover` | `grey50` | `grey650` |
| `--colorAccordionIcon` | `grey400` | `grey400` |

### Breadcrumb
| Token | Light | Dark |
|-------|-------|------|
| `--colorBreadcrumbText` | `grey400` | `grey400` |
| `--colorBreadcrumbLink` | `grey500` | `grey350` |
| `--colorBreadcrumbLinkHover` | `purple600` | `purple400` |
| `--colorBreadcrumbCurrent` | `grey700` | `grey100` |
| `--colorBreadcrumbSeparator` | `grey300` | `grey550` |

### Table
| Token | Light | Dark |
|-------|-------|------|
| `--colorTableHeaderBg` | `grey100` | `grey700` |
| `--colorTableHeaderText` | `grey500` | `grey350` |
| `--colorTableBorder` | `grey200` | `grey600` |
| `--colorTableRowHover` | `grey50` | `grey650` |
| `--colorTableStripe` | `grey50` | `rgba(255,255,255,0.02)` |

### Button
| Token | Light | Dark |
|-------|-------|------|
| `--colorBtnSecondaryBg` | `purple50` | `grey650` |
| `--colorBtnSecondaryBorder` | `purple300` | `purple600` |
| `--colorBtnSecondaryText` | `purple700` | `grey50` |
| `--colorBtnInvertedBg` | `grey100` | `grey100` |
| `--colorBtnInvertedText` | `purple700` | `purple700` |
| `--colorBtnGhostColor` | `purple600` | `purple500` |
| `--colorBtnGhostHoverBg` | `purple50` | `grey600` |
| `--colorBtnLinkColor` | `blue600` | `blue500` |
| `--colorBtnDangerBg` | `red100` | `red900` |
| `--colorBtnDangerText` | `red500` | `red200` |
| `--colorBtnDisabledBg` | `grey100` | `grey600` |
| `--colorBtnDisabledText` | `grey350` | `grey450` |
| `--colorBtnPrimaryHoverBg` | — | `purple600` |

### Input (shared by TextInput, Dropdown, Textarea, InputGroup; **not** OTP filled/focus)
| Token | Light | Dark | Role |
|-------|-------|------|------|
| `--colorInputBg` | `greyWhite` | `grey750` | Default fill |
| `--colorInputBorder` | `grey150` | `grey600` | Default border |
| `--colorInputHoverBorder` | `grey300` | `grey550` | Hover border |
| `--colorInputFilledBorder` | `grey200` | `grey550` | Filled (has value) border |
| `--colorInputFocusBorder` | `grey200` | `grey550` | Focus/selected border (error excluded) |
| `--colorInputDisabledBg` | — | `grey650` | Disabled fill (dark only) |
| `--colorInputDisabledBorder` | — | `grey600` | Disabled border (dark only) |
| `--colorInputOptionHover` | `purple50` | `grey650` | Dropdown option hover |
| `--colorInputOptionSelectedBg` | `purple100` | `purple900` | Selected option bg |
| `--colorInputOptionSelectedText` | `purple700` | `purple300` | Selected option text |

### OTP Input (cell-specific — default empty cell still uses `--colorInput*`)
| Token | Light | Dark | Role |
|-------|-------|------|------|
| `--colorOtpFilledBg` | `greyWhite` | `grey750` | Digit entered, not focused |
| `--colorOtpFilledBorder` | `grey100` | `grey600` | Filled cell border |
| `--colorOtpFilledText` | `grey800` | `grey100` | Digit color |
| `--colorOtpFocusBg` | `greyWhite` | `grey700` | Focused cell fill |
| `--colorOtpFocusBorder` | `grey200` | `grey550` | Focused cell border |
| `--colorOtpFocusRing` | `grey150` | `grey600` | `2px` focus ring |
| `--colorOtpErrorFill` | `greyWhite` | `grey700` | Error cell interior |
| `--colorOtpErrorGradientFrom` | `grey150` | `grey600` | Error border gradient start (`0deg`) |
| `--colorOtpErrorGradientTo` | `red100` | `red900` | Error border gradient end |

### Slider / Progress
| Token | Light | Dark | Role |
|-------|-------|------|------|
| `--colorTrackInactive` | `grey200` | `grey600` | Unfinished track area (Progress; slider disabled ticks) |
| `--colorSliderTrackActiveFrom` | `purple300` | `purple800` | Filled segment gradient start (horizontal) |
| `--colorSliderTrackActiveTo` | `purple700` | `purple500` | Filled segment gradient end |
| `--colorSliderTrackInactiveFrom` | `grey150` | `grey500` | Rail gradient start |
| `--colorSliderTrackInactiveTo` | `grey200` | `grey550` | Rail gradient end |
| `--colorSliderThumbBg` | `purple50` | `purple50` | Thumb fill |
| `--colorSliderThumbStrokeFrom` | `purple500` | `purple500` | Thumb border gradient top |
| `--colorSliderThumbStrokeTo` | `purple700` | `purple700` | Thumb border gradient bottom |
| `--shadowSliderThumb` | purple-tint drop shadow | stronger purple-tint | Thumb elevation |

**Slider thumb layout (theme-agnostic, defined on `:root`):**

| Token | Value |
|-------|------|
| `--sliderThumbSizeSm` | `16px` |
| `--sliderThumbSizeMd` | `20px` |
| `--sliderThumbSizeLg` | `24px` |

Referenced in `slider.css` as `width` / `height` on `.acko-slider-thumb`.

### Switch

Complete switch state system.

**OFF State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorSwitchTrackOff` | Track background OFF | `grey300` | `grey600` |
| `--colorSwitchTrackOffHover` | Track hover OFF | `grey400` | `grey550` |
| `--colorSwitchThumbOff` | Thumb color OFF | `greyWhite` | `grey300` |

**ON State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorSwitchTrackOn` | Track background ON | `purple600` | `purple500` |
| `--colorSwitchTrackOnHover` | Track hover ON | `purple700` | `purple400` |
| `--colorSwitchThumb` | Thumb color (original token) | `greyWhite` | `greyWhite` |
| `--colorSwitchThumbOn` | Thumb color ON | `greyWhite` | `greyWhite` |

**Error State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorSwitchTrackError` | Track error state | `red600` | `red600` |
| `--colorSwitchThumbError` | Thumb error state | `greyWhite` | `greyWhite` |

**Disabled State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorSwitchTrackDisabledOff` | Track disabled OFF | `grey200` | `grey650` |
| `--colorSwitchTrackDisabledOn` | Track disabled ON | `grey300` | `grey600` |
| `--colorSwitchThumbDisabled` | Thumb disabled | `grey250` | `grey500` |

**Focus State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorSwitchFocusRing` | Focus ring | `purple200` | `purple800` |

### Checkbox

Complete checkbox state system.

**Base States (Unchecked):**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorCheckboxBorder` | Default border | `grey300` | `grey550` |
| `--colorCheckboxBg` | Default background | `transparent` | `transparent` |
| `--colorCheckboxHoverBorder` | Hover border | `grey450` | `grey500` |
| `--colorCheckboxHoverBg` | Hover background | `grey50` | `grey700` |

**Checked State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorCheckboxCheckedBg` | Checked background | `purple600` | `purple500` |
| `--colorCheckboxCheckedBorder` | Checked border | `purple600` | `purple500` |
| `--colorCheckboxCheckedIcon` | Checkmark icon | `greyWhite` | `greyWhite` |
| `--colorCheckboxCheckedHoverBg` | Checked + hover bg | `purple700` | `purple400` |
| `--colorCheckboxCheckedHoverBorder` | Checked + hover border | `purple700` | `purple400` |

**Indeterminate State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorCheckboxIndeterminateBg` | Indeterminate background | `purple600` | `purple500` |
| `--colorCheckboxIndeterminateBorder` | Indeterminate border | `purple600` | `purple500` |
| `--colorCheckboxIndeterminateIcon` | Minus icon | `greyWhite` | `greyWhite` |

**Error State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorCheckboxErrorBorder` | Error unchecked border | `red600` | `red600` |
| `--colorCheckboxErrorBg` | Error unchecked bg | `transparent` | `transparent` |
| `--colorCheckboxErrorCheckedBg` | Error checked bg | `red600` | `red600` |
| `--colorCheckboxErrorCheckedBorder` | Error checked border | `red600` | `red600` |
| `--colorCheckboxErrorCheckedIcon` | Error checked icon | `greyWhite` | `greyWhite` |

**Disabled State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorCheckboxDisabledBorder` | Disabled unchecked border | `grey250` | `grey600` |
| `--colorCheckboxDisabledBg` | Disabled unchecked bg | `grey150` | `grey700` |
| `--colorCheckboxDisabledCheckedBg` | Disabled checked bg | `grey350` | `grey550` |
| `--colorCheckboxDisabledCheckedBorder` | Disabled checked border | `grey350` | `grey550` |
| `--colorCheckboxDisabledCheckedIcon` | Disabled checked icon | `grey200` | `grey600` |

**Focus State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorCheckboxFocusRing` | Focus ring | `purple200` | `purple800` |
| `--colorCheckboxErrorFocusRing` | Error focus ring | `red200` | `red800` |

### Radio

Complete radio button state system.

**Base States (Unselected):**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorRadioBorder` | Default outer ring | `grey300` | `grey550` |
| `--colorRadioHoverBorder` | Hover outer ring | `grey450` | `grey500` |
| `--colorRadioHoverBg` | Hover background tint | `grey50` | `grey700` |

**Selected State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorRadioSelectedBorder` | Selected outer ring | `purple600` | `purple500` |
| `--colorRadioSelectedDot` | Selected inner dot | `purple600` | `purple500` |
| `--colorRadioSelectedHoverBorder` | Selected + hover ring | `purple700` | `purple400` |
| `--colorRadioSelectedHoverDot` | Selected + hover dot | `purple700` | `purple400` |

**Error State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorRadioErrorBorder` | Error unselected ring | `red600` | `red600` |
| `--colorRadioErrorSelectedBorder` | Error selected ring | `red600` | `red600` |
| `--colorRadioErrorSelectedDot` | Error selected dot | `red600` | `red600` |

**Disabled State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorRadioDisabledBorder` | Disabled unselected ring | `grey250` | `grey600` |
| `--colorRadioDisabledBg` | Disabled background | `grey150` | `grey700` |
| `--colorRadioDisabledSelectedBorder` | Disabled selected ring | `grey350` | `grey550` |
| `--colorRadioDisabledSelectedDot` | Disabled selected dot | `grey350` | `grey550` |

**Focus State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorRadioFocusRing` | Focus ring | `purple200` | `purple800` |
| `--colorRadioErrorFocusRing` | Error focus ring | `red200` | `red800` |

### Form Controls
| Token | Light | Dark |
|-------|-------|------|
| `--colorControlBorderSelector` | `grey200` | `grey500` |

### Radio Card
| Token | Light | Dark |
|-------|-------|------|
| `--colorRadioCardHoverBorder` | `purple200` | `purple700` |
| `--colorRadioCardHoverBg` | `purple50` | `purple950` |
| `--colorRadioCardActiveBorder` | `purple300` | `purple600` |
| `--colorRadioCardActiveBg` | `purple100` | `purple900` |

### Calendar
| Token | Light | Dark |
|-------|-------|------|
| `--colorCalSelectedBg` | `purple600` | `purple500` |
| `--colorCalSelectedText` | `greyWhite` | `greyWhite` |
| `--colorCalRangeBg` | `purple50` | `purple950` |
| `--colorCalRangeText` | `purple700` | `purple300` |
| `--colorCalHoverBg` | `purple50` | `purple950` |
| `--colorCalTodayText` | `purple600` | `purple400` |
| `--colorCalCellHoverBg` | `grey100` | `grey650` |

### Chip / Tag

Interactive chips (selectable, dismissible).

**Base States:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorChipBg` | Default background | `grey150` | `grey650` |
| `--colorChipText` | Default text | `grey700` | `grey200` |
| `--colorChipBorder` | Default border | `grey200` | `grey600` |
| `--colorChipHoverBg` | Hover background | `grey200` | `grey600` |
| `--colorChipActiveBg` | Pressed background | `grey250` | `grey550` |

**Selected State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorChipSelectedBg` | Selected background | `purple100` | `purple900` |
| `--colorChipSelectedText` | Selected text | `purple700` | `purple300` |
| `--colorChipSelectedBorder` | Selected border | `purple200` | `purple800` |

**Error State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorChipErrorBg` | Error background | `red100` | `red950` |
| `--colorChipErrorText` | Error text | `red700` | `red400` |
| `--colorChipErrorBorder` | Error border | `red200` | `red800` |

**Disabled State:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorChipDisabledBg` | Disabled background | `grey100` | `grey700` |
| `--colorChipDisabledText` | Disabled text | `grey300` | `grey500` |

**Dismiss Icon:**

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorChipCloseIcon` | Close icon | `grey500` | `grey400` |
| `--colorChipCloseIconHover` | Close icon hover | `grey700` | `grey200` |

### Badge — Solid (gradient fill + border)

Pattern: one token per role, e.g. `--colorBadgePurpleGradientFrom`, `--colorBadgePurpleGradientTo`, `--colorBadgePurpleBorder`, `--colorBadgePurpleText` (name the hue in camelCase: purple, green, etc.).

Background is `linear-gradient(0deg, gradientFrom, gradientTo)` with a `1px solid border`.

| Color | `gradientFrom` Light | `gradientTo` Light | `border` Light | `text` Light |
|-------|----------------------|--------------------|--------------:|-------------|
| purple | `purple200` | `purple100` | `purple200` | `purple800` |
| green (lime) | `lime200` | `lime100` | `lime200` | `green800` |
| blue | `blue200` | `blue100` | `blue200` | `blue800` |
| orange | `orange200` | `orange100` | `orange200` | `orange800` |
| pink | `red200` | `red100` | `red200` | `red800` |
| gray | `grey200` | `grey100` | `grey200` | `grey600` |

Dark solid/dot badges use **reduced intensity**: gradient stops are `color-mix(in srgb, <darkest> 90%, transparent)` from the **`950` → `900`** step of each hue, with a solid **`900`** border (grey uses `grey800` → `grey700` mix, border `grey600`). Pink badge hues map to **red** primitives. Outline badges unchanged.

| Color | `gradientFrom` Dark | `gradientTo` Dark | `border` Dark | `text` Dark |
|-------|---------------------|-------------------|-------------:|------------|
| purple | `color-mix(..., purple950, 90%)` | `color-mix(..., purple900, 90%)` | `purple900` | `purple200` |
| green (lime) | `color-mix(..., lime950, 90%)` | `color-mix(..., lime900, 90%)` | `lime900` | `green200` |
| blue | `color-mix(..., blue950, 90%)` | `color-mix(..., blue900, 90%)` | `blue900` | `blue200` |
| orange | `color-mix(..., orange950, 90%)` | `color-mix(..., orange900, 90%)` | `orange900` | `orange200` |
| pink | `color-mix(..., red950, 90%)` | `color-mix(..., red900, 90%)` | `red900` | `red200` |
| gray | `color-mix(..., grey800, 90%)` | `color-mix(..., grey700, 90%)` | `grey600` | `grey200` |

### Badge — Outline

Pattern: `--colorBadge{Hue}OutlineColor` (e.g. `--colorBadgePurpleOutlineColor`).

| Color | Light | Dark |
|-------|-------|------|
| purple | `purple600` | `purple400` |
| green (lime) | `lime600` | `lime600` |
| blue | `blue600` | `blue600` |
| orange | `orange600` | `orange600` |
| pink | `red600` | `red600` |
| gray | `grey600` | `grey500` |

### Counter Badge (gradient fill + border)

Pattern: `--colorCounter{Hue}GradientFrom` / `GradientTo` / `Border` (e.g. `--colorCounterPinkGradientFrom`).

Background is `linear-gradient(0deg, gradientFrom, gradientTo)` with a `1px solid border`. Text is always `--colorOnPrimary` (white).

| Color | `gradientFrom` Light | `gradientTo` Light | `border` Light |
|-------|----------------------|--------------------|---------------|
| pink | `red500` | `red400` | `red500` |
| purple | `purple500` | `purple400` | `purple500` |
| blue | `blue500` | `blue400` | `blue500` |

| Color | `gradientFrom` Dark | `gradientTo` Dark | `border` Dark |
|-------|---------------------|-------------------|--------------|
| pink | `color-mix(..., red950, 90%)` | `color-mix(..., red900, 90%)` | `red900` |
| purple | `color-mix(..., purple950, 90%)` | `color-mix(..., purple900, 90%)` | `purple900` |
| blue | `color-mix(..., blue950, 90%)` | `color-mix(..., blue900, 90%)` | `blue900` |

### Toast

Floating notification tokens.

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorToastBg` | Toast background | `grey750` | `grey200` |
| `--colorToastText` | Toast text | `greyWhite` | `grey750` |
| `--colorToastBorder` | Toast border | `grey600` | `grey300` |
| `--colorToastSuccessBg` | Success toast bg | `green600` | `green600` |
| `--colorToastSuccessText` | Success toast text | `greyWhite` | `greyWhite` |
| `--colorToastErrorBg` | Error toast bg | `red600` | `red600` |
| `--colorToastErrorText` | Error toast text | `greyWhite` | `greyWhite` |
| `--colorToastWarningBg` | Warning toast bg | `orange600` | `orange600` |
| `--colorToastWarningText` | Warning toast text | `greyWhite` | `greyWhite` |
| `--colorToastInfoBg` | Info toast bg | `purple600` | `purple600` |
| `--colorToastInfoText` | Info toast text | `greyWhite` | `greyWhite` |
| `--colorToastCloseIcon` | Close icon | `rgba(255,255,255,0.7)` | `rgba(0,0,0,0.6)` |
| `--colorToastCloseIconHover` | Close icon hover | `greyWhite` | `grey750` |

### Skeleton

Loading placeholder shimmer.

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorSkeletonBg` | Base skeleton fill | `grey150` | `grey650` |
| `--colorSkeletonShimmer` | Shimmer gradient overlay | `rgba(255,255,255,0.5)` | `rgba(255,255,255,0.05)` |
| `--colorSkeletonBorder` | Skeleton border | `grey200` | `grey600` |

### Progress Bar

Linear progress indicator.

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorProgressTrackBg` | Track background | `grey200` | `grey650` |
| `--colorProgressFillBg` | Fill progress | `purple600` | `purple500` |
| `--colorProgressSuccessBg` | Success state fill | `green600` | `green500` |
| `--colorProgressErrorBg` | Error state fill | `red600` | `red500` |
| `--colorProgressWarningBg` | Warning state fill | `orange600` | `orange500` |
| `--colorProgressText` | Label text | `grey700` | `grey200` |

### Link

Link state tokens.

| Token | Role | Light | Dark |
|-------|------|-------|------|
| `--colorLink` | Default link | `purple600` | `purple400` |
| `--colorLinkHover` | Link hover | `purple700` | `purple300` |
| `--colorLinkActive` | Link pressed | `purple800` | `purple200` |
| `--colorLinkVisited` | Visited link | `purple700` | `purple500` |
| `--colorLinkDisabled` | Disabled link | `grey400` | `grey500` |

### Wizard

| Token | Light | Dark |
|-------|-------|------|
| `--colorWizardActiveBg` | `purple500` | `purple600` |
| `--colorWizardActiveText` | `grey50` | `greyWhite` |
| `--colorWizardActiveShadowTop` | `purple400` | `purple500` |
| `--colorWizardActiveShadowBottom` | `purple700` | `purple800` |
| `--colorWizardDoneBg` | `purple200` | `purple700` |
| `--colorWizardDoneText` | `purple600` | `purple300` |
| `--colorWizardUpcomingBorder` | `grey250` | `grey500` |
| `--colorWizardUpcomingText` | `grey350` | `grey450` |
| `--colorWizardConnectorDone` | `purple200` | `purple700` |
| `--colorWizardConnectorUpcoming` | `grey250` | `grey500` |

## Shadows (Semantic)

| Token | Light | Dark |
|-------|-------|------|
| `--shadowCard` | `var(--shadowMd)` | `var(--shadowMd)` |
| `--shadowDropdown` | `var(--shadowLg)` | `var(--shadowLg)` |
| `--shadowModal` | `var(--shadowXl)` | `var(--shadowXl)` |
| `--shadowSubtle` | `var(--shadowSm)` | `var(--shadowSm)` |
| `--shadowBtnInner` | `inset 0 1px 2px rgba(255,255,255,0.28)` | `inset 0 1px 2px rgba(255,255,255,0.15)` |
| `--shadowBtnHover` | `0 4px 8px rgba(0,0,0,0.08)` | `0 4px 8px rgba(0,0,0,0.3)` |
| `--shadowFocusRing` | `0 0 0 3px var(--colorPrimaryRing)` | same |
| `--shadowBtnSecondaryHover` | `inset 0 2px 4px rgba(255,255,255,0.48)` | `inset 0 2px 4px rgba(0,0,0,0.2)` |
