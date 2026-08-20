import './breadcrumb.css'

export function Breadcrumb({ items = [] }) {
  return (
    <nav className="acko-breadcrumb" aria-label="Breadcrumb">
      <ol>
        {items.map((item, i) => {
          const isLast = i === items.length - 1
          return (
            <li key={item.label}>
              {item.href && !isLast ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              )}
              {!isLast && <span className="acko-breadcrumb__separator">/</span>}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
