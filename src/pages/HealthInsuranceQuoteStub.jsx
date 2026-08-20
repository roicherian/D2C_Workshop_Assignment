import { Breadcrumb } from '@acko/breadcrumb'
import { Typography } from '@acko/typography'
import './health-insurance-quote-stub.css'

export function HealthInsuranceQuoteStub() {
  return (
    <div className="health-insurance-quote-stub">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Health insurance', href: '/health-insurance' },
          { label: 'Get quote' },
        ]}
      />
      <Typography as="h1" variant="heading-lg" weight="bold" className="health-insurance-quote-stub__heading">
        Health insurance quote — coming soon
      </Typography>
      <Typography variant="body-md" color="secondary">
        This flow hasn't been built yet. It'll follow the same pattern as the term insurance quote
        page once the health quote fields are scoped.
      </Typography>
    </div>
  )
}
