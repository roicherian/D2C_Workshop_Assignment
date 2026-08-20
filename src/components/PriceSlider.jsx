import './price-slider.css'

// MISSING: no range/slider component exists in @acko/*.
// See missing-components-term-insurance-quote.md.
export function PriceSlider({ id, min, max, step, value, onChange, formatValue = (v) => v }) {
  const pct = ((value - min) / (max - min)) * 100

  return (
    <div className="price-slider">
      <div className="price-slider__value">{formatValue(value)}</div>
      <input
        id={id}
        type="range"
        className="price-slider__input"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ '--price-slider-fill': `${pct}%` }}
      />
      <div className="price-slider__range-labels">
        <span>{formatValue(min)}</span>
        <span>{formatValue(max)}</span>
      </div>
    </div>
  )
}
