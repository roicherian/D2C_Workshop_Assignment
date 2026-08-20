## PriceSlider
- **Type:** MISSING
- **Screen:** term-insurance-quote (coverage amount field)
- **What it is:** A range slider that lets the user pick a sum-insured/coverage amount between ₹25L and ₹2Cr, with the selected value and min/max labels formatted in Lakh/Crore notation.
- **Closest @acko component:** none
- **Why it didn't fit:** No comparable slider/range-input component exists in the library — `Progress` is display-only and not interactive.
- **Props sketch:** `{ id, min, max, step, value, onChange, formatValue }`
- **Reuse potential:** HIGH — coverage/sum-insured sliders are needed across most ACKO insurance quote flows (life, health, motor IDV, etc.), not just term insurance.
