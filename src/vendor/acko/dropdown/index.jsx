import './dropdown.css'

export function Dropdown({ id, options = [], value, onChange, placeholder }) {
  return (
    <select id={id} className="acko-dropdown" value={value} onChange={(e) => onChange(e.target.value)}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  )
}
