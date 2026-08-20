import './segmented-toggle-group.css'

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M2.5 7L5.5 10L11.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

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
