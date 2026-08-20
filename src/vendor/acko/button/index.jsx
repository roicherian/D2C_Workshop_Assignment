import './button.css'

export function Button({
  variant = 'primary',
  size = 'md',
  iconOnly = false,
  iconLeft,
  iconRight,
  fullWidth = false,
  className = '',
  children,
  ...props
}) {
  const classes = [
    'acko-btn',
    `acko-btn--${variant}`,
    `acko-btn--${size}`,
    iconOnly ? 'acko-btn--icon' : '',
    fullWidth ? 'acko-btn--full' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} {...props}>
      {iconLeft && (
        <span className="acko-btn-icon" aria-hidden="true">
          {iconLeft}
        </span>
      )}
      {children}
      {iconRight && (
        <span className="acko-btn-icon" aria-hidden="true">
          {iconRight}
        </span>
      )}
    </button>
  )
}
