import { Card, CardContent } from '@acko/card'
import { Typography } from '@acko/typography'
import { CtaCheckPricesButton } from './CtaCheckPricesButton'
import './hero.css'

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L19 6V11C19 15.5 16 19 12 21C8 19 5 15.5 5 11V6L12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 15V9M12 9L9.5 11.5M12 9L14.5 11.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function HandIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 12V6.5C8 5.67 8.67 5 9.5 5C10.33 5 11 5.67 11 6.5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M11 11V5.5C11 4.67 11.67 4 12.5 4C13.33 4 14 4.67 14 5.5V11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M14 11V6.5C14 5.67 14.67 5 15.5 5C16.33 5 17 5.67 17 6.5V13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <path
        d="M8 12L6.5 10.5C5.9 9.9 4.93 9.9 4.35 10.5C3.85 11 3.85 11.83 4.35 12.35L8.5 17C9.5 18.5 11 19.5 13 19.5H14C16.5 19.5 18 17.5 18 15V13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <section className="hero">
      <div className="hero__inner">
        <Typography as="h1" variant="display" className="hero__headline">
          Protect your family with 100% pure life insurance
        </Typography>

        <div className="hero__features">
          <Card className="hero__feature-card">
            <CardContent className="hero__feature-content">
              <span className="hero__feature-icon">
                <ShieldIcon />
              </span>
              <Typography variant="bodySmall" className="hero__feature-text">
                Coverage from ₹25 lakh onwards
              </Typography>
            </CardContent>
          </Card>

          <Card className="hero__feature-card">
            <CardContent className="hero__feature-content">
              <span className="hero__feature-icon">
                <HandIcon />
              </span>
              <Typography variant="bodySmall" className="hero__feature-text">
                Adjust your coverage when you need
              </Typography>
            </CardContent>
          </Card>
        </div>

        <CtaCheckPricesButton />

        <Typography variant="caption" className="hero__fine-print">
          ARN: L0130 | *T&C Apply
        </Typography>
      </div>
    </section>
  )
}
