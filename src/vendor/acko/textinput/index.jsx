import { useId } from 'react'
import { Label } from '@acko/label'
import './textinput.css'

export function TextInput({
  id,
  label,
  hint,
  error,
  required = false,
  size = 'md',
  prefix,
  suffix,
  type = 'text',
  value,
  onChange,
  className = '',
  ...props
}) {
  const generatedId = useId()
  const inputId = id || generatedId

  const classes = [
    'acko-text-input-wrapper',
    `acko-text-input-wrapper--${size}`,
    error ? 'acko-text-input-wrapper--error' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="acko-text-input-field">
      {label && (
        <Label htmlFor={inputId}>
          {label}
          {required && <span className="acko-text-input-field__required">*</span>}
        </Label>
      )}
      <div className={classes}>
        {prefix && <span className="acko-text-input-wrapper__prefix">{prefix}</span>}
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={(e) => onChange?.(e.target.value)}
          className="acko-text-input"
          aria-invalid={!!error}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {suffix && <span className="acko-text-input-wrapper__suffix">{suffix}</span>}
      </div>
      {hint && !error && (
        <p id={`${inputId}-hint`} className="acko-text-input-field__hint">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${inputId}-error`} className="acko-text-input-field__error" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
