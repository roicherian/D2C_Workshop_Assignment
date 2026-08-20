import { Button } from '@acko/button'
import { HamburgerIcon } from './icons'
import './header.css'

const LOGO_URL =
  'https://pub-c050457d48794d5bb9ffc2b4649de2c1.r2.dev/ACKO%20logo%20horizontal%20Light%20BG.svg'

export function Header() {
  return (
    <header className="site-header full-bleed">
      <div className="site-header__inner section-container">
        <a className="site-header__logo" href="/" aria-label="ACKO home">
          <img src={LOGO_URL} alt="ACKO" height={24} />
        </a>
        <Button variant="ghost" iconOnly aria-label="Open menu">
          <HamburgerIcon aria-hidden="true" size={20} />
        </Button>
      </div>
    </header>
  )
}
