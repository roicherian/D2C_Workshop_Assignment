import { useState } from 'react'
import { Breadcrumb } from '@acko/breadcrumb'
import { Typography } from '@acko/typography'
import { Card, CardContent } from '@acko/card'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { QuoteLeadModal } from '../components/QuoteLeadModal'
import { ShieldUpIcon, HandIcon } from '../components/icons'
import './term-insurance-landing.css'

const HERO_FEATURES = [
  { icon: <ShieldUpIcon aria-hidden="true" />, text: 'Coverage from ₹25 lakh onwards' },
  { icon: <HandIcon aria-hidden="true" />, text: 'Adjust your coverage when you need' },
]

export function TermInsuranceLanding() {
  const [isCheckPricesOpen, setIsCheckPricesOpen] = useState(false)

  return (
    <div className="term-insurance-landing">
      <Header />
      <Hero
        headline="Protect your family with 100% pure life insurance"
        features={HERO_FEATURES}
        arn="ARN: L0130 | *T&C Apply"
        onCtaClick={() => setIsCheckPricesOpen(true)}
      />

      <div className="term-insurance-landing__container section-container">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Life insurance', href: '/life-insurance' },
            { label: 'Term insurance' },
          ]}
        />

        <Card variant="outline" padding="lg" className="term-insurance-landing__content">
          <CardContent>
            <Typography variant="overline" color="brand" className="term-insurance-landing__eyebrow">
              Term insurance
            </Typography>
            <Typography variant="body-md">
              Term insurance is the purest form of life insurance. It protects the people who depend
              on you. A term insurance plan gives your family a fixed amount of money if you pass away
              during the policy period. This money can help your dependents pay for daily household
              expenses, outstanding loans, your children's education, and other financial goals — even
              when you're no longer there to provide for them.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <QuoteLeadModal open={isCheckPricesOpen} onClose={() => setIsCheckPricesOpen(false)} />
    </div>
  )
}
