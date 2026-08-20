import { useNavigate } from 'react-router-dom'
import { Button } from '@acko/button'
import './cta-check-prices-button.css'

// VARIANT-GAP: @acko/button has no "success" variant for high-emphasis
// conversion CTAs, so we wrap it and override the fill color.
// See missing-components-term-insurance-landing.md.
export function CtaCheckPricesButton() {
  const navigate = useNavigate()
  return (
    <Button variant="primary" size="lg" className="cta-check-prices" onClick={() => navigate('/quote')}>
      Check prices
    </Button>
  )
}
