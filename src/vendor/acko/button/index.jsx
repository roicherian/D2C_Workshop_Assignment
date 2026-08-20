import './button.css'

export function Button({
  variant = 'primary',
  size = 'md',
  iconOnly = false,
  className = '',
  children,
  ...props
}) {
  const classes = [
    'acko-button',
    `acko-button--${variant}`,
    `acko-button--${size}`,
    iconOnly ? 'acko-button--icon' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
