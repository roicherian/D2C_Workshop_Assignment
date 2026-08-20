import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@acko/button'
import './cta-check-prices-button.css'

// VARIANT-GAP: @acko/button's real variants (primary/secondary/ghost/link/
// danger/inverted, per colors-semantic.md) have no success/green option for
// high-emphasis conversion CTAs, so we wrap it and override the fill color.
// See missing-components-term-insurance-landing.md.
export function CtaCheckPricesButton({ to = '/quote', children = 'Check prices' }) {
  const navigate = useNavigate()
  return (
    <Button
      variant="primary"
      size="lg"
      fullWidth
      className="cta-check-prices"
      iconRight={<ArrowRight aria-hidden="true" />}
      onClick={() => navigate(to)}
    >
      {children}
    </Button>
  )
}
