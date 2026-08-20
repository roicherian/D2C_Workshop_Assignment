## Modal
- **Type:** MISSING
- **Screen:** term-insurance-quote-modal (lead-capture popup)
- **What it is:** The overlay dialog that houses the "Let's build a perfect life insurance cover for you" popup — a dimmed backdrop plus a sheet/card with a header (title + close), body, and footer, mirroring `@acko/card`'s compound pattern (`Modal` / `ModalHeader` / `ModalBody` / `ModalFooter`).
- **Closest @acko component:** none
- **Why it didn't fit:** No dialog/overlay/popup component ships in this component package. Note: the design-system tokens (`--colorSurfaceOverlay` for the backdrop, `--shadowModal` for elevation, per `colors-semantic.md`) already exist, which suggests a real `Modal`/`Dialog` component exists elsewhere in ACKO's broader system and simply isn't part of this package's exports — worth confirming with the design-system team before promoting a duplicate.
- **Props sketch:** `Modal({ open, onClose, children })`, `ModalHeader({ title, onClose })`, `ModalBody({ children })`, `ModalFooter({ children })`
- **Reuse potential:** HIGH — popups/dialogs are a near-universal pattern across ACKO product flows (lead capture, confirmations, upsells), not specific to this screen.

## SegmentedToggleGroup
- **Type:** VARIANT-GAP
- **Screen:** term-insurance-quote-modal ("Your gender" and smoking question)
- **What it is:** A two-option pill/segmented button group with a checkmark on the selected option, used for the gender and smoking toggle-button questions.
- **Closest @acko component:** Chip (selectable variant) — re-evaluated against `colors-semantic.md`'s Chip token set (`--colorChipBg/Text/Border`, `--colorChipSelectedBg/Text/Border`), which is a closer match than `RadioGroup`: chips already model a selectable pill with default/selected states, just not exposed as a single-select group with `role="radio"` semantics.
- **Why it didn't fit:** No packaged component exposes a single-select group of Chip-style pills with `radiogroup`/`radio` ARIA roles — Chip itself is presentational, and `RadioGroup` only renders native radio-dot styling. Rebuilt with `<button role="radio">` elements styled on the Chip token set.
- **Props sketch:** `SegmentedToggleGroup({ name, options, value, onChange })` — same shape as `RadioGroup`'s props, styled with Chip tokens.
- **Reuse potential:** HIGH — this exact 2-option segmented pattern (gender, yes/no questions) recurs across other ACKO insurance quote flows (health, motor).
