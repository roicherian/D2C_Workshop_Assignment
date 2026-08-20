## CtaCheckPricesButton
- **Type:** VARIANT-GAP
- **Screen:** term-insurance-landing (hero section CTA)
- **What it is:** The green "Check prices" call-to-action button in the hero section.
- **Closest @acko component:** Button
- **Why it didn't fit:** `@acko/button` only exposes `primary` | `secondary` | `ghost` variants, all mapped to the brand purple. There's no `success`/green variant for high-emphasis conversion CTAs, so the button had to be wrapped and its background overridden with the `--color-success` token.
- **Props sketch:** Same props as `Button` (`variant`, `size`, `onClick`, `children`) — no new props added, just a style override layered on top.
- **Reuse potential:** HIGH — green CTA buttons are a common pattern on ACKO product landing pages wherever a "Check prices" / "Get quote" style CTA needs to stand out from primary purple actions.
