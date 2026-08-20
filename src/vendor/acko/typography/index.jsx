import './typography.css'

export function Typography({ as: Tag = 'p', variant = 'body', className = '', children, ...props }) {
  const classes = ['acko-typography', `acko-typography--${variant}`, className].filter(Boolean).join(' ')
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  )
}
