## Modal
- **Type:** MISSING
- **Screen:** term-insurance-quote-modal (lead-capture popup)
- **What it is:** The overlay dialog that houses the "Let's build a perfect life insurance cover for you" popup — a dimmed backdrop plus a sheet/card with a header (title + close), body, and footer, mirroring `@acko/card`'s compound pattern (`Modal` / `ModalHeader` / `ModalBody` / `ModalFooter`).
- **Closest @acko component:** none
- **Why it didn't fit:** No dialog/overlay/popup component exists in the library.
- **Props sketch:** `Modal({ open, onClose, children })`, `ModalHeader({ title, onClose })`, `ModalBody({ children })`, `ModalFooter({ children })`
- **Reuse potential:** HIGH — popups/dialogs are a near-universal pattern across ACKO product flows (lead capture, confirmations, upsells), not specific to this screen.

## SegmentedToggleGroup
- **Type:** VARIANT-GAP
- **Screen:** term-insurance-quote-modal ("Your gender" and smoking question)
- **What it is:** A two-option pill/segmented button group with a checkmark on the selected option, used for the gender and smoking toggle-button questions.
- **Closest @acko component:** RadioGroup
- **Why it didn't fit:** `RadioGroup` only renders native radio-dot + label styling; there's no segmented/pill button-group presentation, so the single-select interaction had to be rebuilt with `<button role="radio">` elements and manual `aria-checked` wiring instead of native radio inputs.
- **Props sketch:** `SegmentedToggleGroup({ name, options, value, onChange })` — same shape as `RadioGroup`'s props.
- **Reuse potential:** HIGH — this exact 2-option segmented pattern (gender, yes/no questions) recurs across other ACKO insurance quote flows (health, motor).
