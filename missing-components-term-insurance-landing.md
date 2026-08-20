## CtaCheckPricesButton
- **Type:** VARIANT-GAP
- **Screen:** term-insurance-landing (hero section CTA)
- **What it is:** The green "Check prices" call-to-action button in the hero section.
- **Closest @acko component:** Button
- **Why it didn't fit:** Per `colors-semantic.md`'s Button token set (`--colorBtnSecondaryBg/Border/Text`, `--colorBtnGhostColor/HoverBg`, `--colorBtnLinkColor`, `--colorBtnDangerBg/Text`, `--colorBtnInvertedBg/Text`), the real variant palette is primary/secondary/ghost/link/danger/inverted — none map to green. There's no success variant for high-emphasis conversion CTAs, so the button is wrapped with `variant="primary"` and its background overridden using semantic `--colorSuccess`/`--colorSuccessHover` tokens (not a raw hex).
- **Props sketch:** Same props as `Button` (`variant`, `size`, `onClick`, `children`) — no new props added, just a style override layered on top.
- **Reuse potential:** HIGH — green CTA buttons are a common pattern on ACKO product landing pages wherever a "Check prices" / "Get quote" style CTA needs to stand out from primary purple actions.
