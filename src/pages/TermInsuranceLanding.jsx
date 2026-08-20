import { useState } from 'react'
import { Breadcrumb } from '@acko/breadcrumb'
import { Typography } from '@acko/typography'
import { Button } from '@acko/button'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { QuoteLeadModal } from '../components/QuoteLeadModal'
import { ShieldUpIcon, HandIcon } from '../components/icons'
import './term-insurance-landing.css'

const HERO_FEATURES = [
  { icon: <ShieldUpIcon />, text: 'Coverage from ₹25 lakh onwards' },
  { icon: <HandIcon />, text: 'Adjust your coverage when you need' },
]

export function TermInsuranceLanding() {
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false)

  return (
    <div className="term-insurance-landing">
      <Header />
      <Hero
        headline="Protect your family with 100% pure life insurance"
        features={HERO_FEATURES}
        arn="ARN: L0130 | *T&C Apply"
        ctaTo="/quote"
      />

      <div className="term-insurance-landing__container">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Life Insurance', href: '/life-insurance' },
            { label: 'Term Insurance' },
          ]}
        />

        <section className="term-insurance-landing__content">
          <Typography as="h2" variant="h2" className="term-insurance-landing__heading">
            TERM INSURANCE
          </Typography>
          <Typography variant="body" className="term-insurance-landing__body">
            Term insurance is the purest form of life insurance. It protects the people who depend on you.
            A term insurance plan gives your family a fixed amount of money if you pass away during the
            policy period. This money can help your dependents pay for daily household expenses,
            outstanding loans, your children's education, and other financial goals — even when
            you're no longer there to provide for them.
          </Typography>

          <Button
            variant="secondary"
            size="lg"
            className="term-insurance-landing__preview-modal-btn"
            onClick={() => setIsLeadModalOpen(true)}
          >
            Preview quote popup
          </Button>
        </section>
      </div>

      <QuoteLeadModal open={isLeadModalOpen} onClose={() => setIsLeadModalOpen(false)} />
    </div>
  )
}
