import './card.css'

export function Card({ className = '', children, ...props }) {
  return (
    <div className={['acko-card', className].filter(Boolean).join(' ')} {...props}>
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
