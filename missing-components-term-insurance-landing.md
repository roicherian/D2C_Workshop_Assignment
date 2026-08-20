## CtaCheckPricesButton
- **Type:** VARIANT-GAP — **RESOLVED**
- **Screen:** term-insurance-landing (hero section CTA)
- **What it is:** The "Check prices" call-to-action button in the hero section.
- **Closest @acko component:** Button
- **Update:** Originally overridden to green since no `success` variant exists in the real Button palette (primary/secondary/outline/ghost/link/danger/inverted, per `colors-semantic.md`). Reverted to plain `variant="primary"` (brand purple) to match the design system as-shipped — no override, no gap. Keeping this entry for the workshop record in case a future screen wants a genuine high-emphasis/success CTA color.
- **Reuse potential:** N/A — no longer a custom component; standard `Button` usage.
