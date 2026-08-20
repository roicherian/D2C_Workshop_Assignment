import './radiogroup.css'

export function RadioGroup({ name, options = [], value, onChange }) {
  return (
    <div role="radiogroup" className="acko-radio-group">
      {options.map((opt) => (
        <label key={opt.value} className="acko-radio-group__option">
          <input
            type="radio"
            name={name}
            value={opt.value}
            checked={value === opt.value}
            onChange={() => onChange(opt.value)}
          />
          <span>{opt.label}</span>
        </label>
      ))}
    </div>
  )
}
