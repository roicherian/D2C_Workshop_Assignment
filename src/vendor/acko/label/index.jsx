import './label.css'

export function Label({ htmlFor, className = '', children }) {
  return (
    <label htmlFor={htmlFor} className={['acko-label', className].filter(Boolean).join(' ')}>
      {children}
    </label>
  )
}
