import './toggle.css'

export function Toggle({ id, checked, onChange, label }) {
  return (
    <label className="acko-toggle" htmlFor={id}>
      <input id={id} type="checkbox" role="switch" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <span className="acko-toggle__track">
        <span className="acko-toggle__thumb" />
      </span>
      {label && <span className="acko-toggle__label">{label}</span>}
    </label>
  )
}
