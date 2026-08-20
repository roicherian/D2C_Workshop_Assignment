import './card.css'

export function Card({ variant = 'elevated', padding = 'md', className = '', children, ...props }) {
  const classes = [
    'acko-card',
    `acko-card--${variant}`,
    `acko-card--padding-${padding}`,
    className,
  ]
    .filter(Boolean)
    .join(' ')
  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className = '', children }) {
  return <div className={['acko-card-header', className].filter(Boolean).join(' ')}>{children}</div>
}

export function CardContent({ className = '', children }) {
  return <div className={['acko-card-content', className].filter(Boolean).join(' ')}>{children}</div>
}

export function CardFooter({ className = '', children }) {
  return <div className={['acko-card-footer', className].filter(Boolean).join(' ')}>{children}</div>
}
