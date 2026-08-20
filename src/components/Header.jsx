import { Button } from '@acko/button'
import './header.css'

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10 8.5L16 12L10 15.5V8.5Z" fill="currentColor" />
    </svg>
  )
}

function HamburgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 5H17M3 10H17M3 15H17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="site-header__logo" href="/" aria-label="ACKO home">
          <PlayIcon />
          <span>ACKO</span>
        </a>
        <Button variant="ghost" iconOnly aria-label="Open menu">
          <HamburgerIcon />
        </Button>
      </div>
    </header>
  )
}
