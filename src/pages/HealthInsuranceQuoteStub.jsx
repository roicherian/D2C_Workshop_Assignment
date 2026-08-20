import { Breadcrumb } from '@acko/breadcrumb'
import { Typography } from '@acko/typography'
import './health-insurance-quote-stub.css'

export function HealthInsuranceQuoteStub() {
  return (
    <div className="health-insurance-quote-stub">
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Health Insurance', href: '/health-insurance' },
          { label: 'Get Quote' },
        ]}
      />
      <Typography as="h1" variant="h1" className="health-insurance-quote-stub__heading">
        Health insurance quote — coming soon
      </Typography>
      <Typography variant="body">
        This flow hasn't been built yet. It'll follow the same pattern as the term insurance quote
        page once the health quote fields are scoped.
      </Typography>
    </div>
  )
}
