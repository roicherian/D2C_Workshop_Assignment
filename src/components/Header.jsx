import { Button } from '@acko/button'
import { PlayIcon, HamburgerIcon } from './icons'
import './header.css'

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
