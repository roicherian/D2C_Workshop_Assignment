import { useNavigate } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Button } from '@acko/button'

export function CtaCheckPricesButton({ to = '/quote', children = 'Check prices' }) {
  const navigate = useNavigate()
  return (
    <Button
      variant="primary"
      size="lg"
      fullWidth
      iconRight={<ArrowRight aria-hidden="true" />}
      onClick={() => navigate(to)}
    >
      {children}
    </Button>
  )
}
