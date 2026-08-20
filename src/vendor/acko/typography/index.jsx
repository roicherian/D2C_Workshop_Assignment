import './typography.css'

const DEFAULT_TAG = {
  'display-xl': 'h1',
  'display-lg': 'h1',
  'display-md': 'h1',
  'display-sm': 'h1',
  'heading-xl': 'h2',
  'heading-lg': 'h2',
  'heading-md': 'h3',
  'heading-sm': 'h3',
  'body-lg': 'p',
  'body-md': 'p',
  'body-sm': 'p',
  'label-lg': 'label',
  'label-md': 'label',
  'label-sm': 'label',
  caption: 'span',
  overline: 'span',
}

export function Typography({
  variant,
  weight,
  color = 'primary',
  align,
  as,
  truncate = false,
  className = '',
  children,
  ...props
}) {
  const Tag = as || DEFAULT_TAG[variant] || 'span'
  const classes = [
    'acko-typography',
    `acko-typography--${variant}`,
    weight ? `acko-typography--weight-${weight}` : '',
    `acko-typography--color-${color}`,
    align ? `acko-typography--align-${align}` : '',
    truncate ? 'acko-typography--truncate' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
