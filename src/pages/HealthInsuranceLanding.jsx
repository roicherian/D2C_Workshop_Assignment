import { Breadcrumb } from '@acko/breadcrumb'
import { Typography } from '@acko/typography'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { HospitalCrossIcon, CoinsShieldIcon } from '../components/icons'
import './health-insurance-landing.css'

const HERO_FEATURES = [
  { icon: <HospitalCrossIcon aria-hidden="true" />, text: 'Cashless treatment at 10,000+ hospitals' },
  { icon: <CoinsShieldIcon aria-hidden="true" />, text: 'Cover up to ₹1 crore for your family' },
]

export function HealthInsuranceLanding() {
  return (
    <div className="health-insurance-landing">
      <Header />
      <Hero
        headline="Comprehensive health cover for every hospital bill"
        features={HERO_FEATURES}
        arn="ARN: L0130 | *T&C Apply"
        ctaTo="/health-insurance/quote"
      />

      <div className="health-insurance-landing__container">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Health insurance' },
          ]}
        />

        <section className="health-insurance-landing__content">
          <Typography variant="overline" color="brand" className="health-insurance-landing__eyebrow">
            Health insurance
          </Typography>
          <Typography as="h2" variant="heading-lg" weight="bold" className="health-insurance-landing__heading">
            Cover for the unexpected
          </Typography>
          <Typography variant="body-md" color="secondary" className="health-insurance-landing__body">
            Health insurance protects you and your family from unexpected medical expenses. A health
            insurance plan covers hospitalization costs, pre- and post-hospitalization expenses,
            day-care procedures, and more — so a medical emergency doesn't turn into a financial one
            too.
          </Typography>
        </section>
      </div>
    </div>
  )
}
