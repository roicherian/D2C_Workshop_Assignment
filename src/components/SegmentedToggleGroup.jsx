import { CheckIcon } from './icons'
import './segmented-toggle-group.css'

// VARIANT-GAP: RadioGroup only renders native radio-dot styling, no
// segmented/pill button-group variant. See
// missing-components-term-insurance-quote-modal.md.
export function SegmentedToggleGroup({ name, options = [], value, onChange }) {
  return (
    <div role="radiogroup" aria-label={name} className="segmented-toggle-group">
      {options.map((opt) => {
        const selected = value === opt.value
        return (
          <button
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={selected}
            className={[
              'segmented-toggle-group__option',
              selected ? 'segmented-toggle-group__option--selected' : '',
            ]
              .filter(Boolean)
              .join(' ')}
            onClick={() => onChange(opt.value)}
          >
            {selected && <CheckIcon />}
            {opt.label}
          </button>
        )
      })}
    </div>
  )
}
