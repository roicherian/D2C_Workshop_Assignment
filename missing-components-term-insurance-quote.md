## PriceSlider
- **Type:** MISSING
- **Screen:** term-insurance-quote (coverage amount field)
- **What it is:** A range slider that lets the user pick a sum-insured/coverage amount between ₹25L and ₹2Cr, with the selected value and min/max labels formatted in Lakh/Crore notation.
- **Closest @acko component:** none available in this package. Note: `colors-semantic.md` documents a full Slider token set (`--colorSliderTrackActiveFrom/To`, `--colorSliderThumbBg`, `--shadowSliderThumb`, `--sliderThumbSizeSm/Md/Lg`) and explicitly references `.acko-slider-thumb` in `slider.css` — strong evidence a real `Slider` component exists elsewhere in ACKO's system. Styled this local build against those exact tokens so it matches the real component visually; still worth checking with the design-system team before treating it as a genuine gap.
- **Why it didn't fit:** No slider/range-input component ships in this package — `Progress` is display-only and not interactive.
- **Props sketch:** `{ id, min, max, step, value, onChange, formatValue }`
- **Reuse potential:** HIGH — coverage/sum-insured sliders are needed across most ACKO insurance quote flows (life, health, motor IDV, etc.), not just term insurance.
