import './inputgroup.css'

export function InputGroup({ prefix, suffix, className = '', children }) {
  return (
    <div className={['acko-input-group', className].filter(Boolean).join(' ')}>
      {prefix && <span className="acko-input-group__prefix">{prefix}</span>}
      {children}
      {suffix && <span className="acko-input-group__suffix">{suffix}</span>}
    </div>
  )
}
