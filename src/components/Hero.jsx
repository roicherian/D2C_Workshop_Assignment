import { Card, CardContent } from '@acko/card'
import { Typography } from '@acko/typography'
import { CtaCheckPricesButton } from './CtaCheckPricesButton'
import './hero.css'

export function Hero({ headline, features, arn, ctaTo, ctaLabel = 'Check prices' }) {
  return (
    <section className="hero">
      <div className="hero__inner">
        <Typography as="h1" variant="display" className="hero__headline">
          {headline}
        </Typography>

        <div className="hero__features">
          {features.map((feature) => (
            <Card key={feature.text} className="hero__feature-card">
              <CardContent className="hero__feature-content">
                <span className="hero__feature-icon">{feature.icon}</span>
                <Typography variant="bodySmall" className="hero__feature-text">
                  {feature.text}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        <CtaCheckPricesButton to={ctaTo}>{ctaLabel}</CtaCheckPricesButton>

        <Typography variant="caption" className="hero__fine-print">
          {arn}
        </Typography>
      </div>
    </section>
  )
}
