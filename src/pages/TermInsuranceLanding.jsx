import { Breadcrumb } from '@acko/breadcrumb'
import { Typography } from '@acko/typography'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import './term-insurance-landing.css'

export function TermInsuranceLanding() {
  return (
    <div className="term-insurance-landing">
      <Header />
      <Hero />

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
        </section>
      </div>
    </div>
  )
}
