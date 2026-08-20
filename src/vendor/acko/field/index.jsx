import { Label } from '@acko/label'
import './field.css'

export function Field({ label, htmlFor, hint, error, required = false, children }) {
  return (
    <div className="acko-field">
      {label && (
        <Label htmlFor={htmlFor}>
          {label}
          {required && <span className="acko-field__required">*</span>}
        </Label>
      )}
      <div className="acko-field__control">{children}</div>
      {hint && !error && <p className="acko-field__hint">{hint}</p>}
      {error && <p className="acko-field__error">{error}</p>}
    </div>
  )
}
