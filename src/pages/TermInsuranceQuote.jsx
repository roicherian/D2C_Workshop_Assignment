import { useMemo, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { Breadcrumb } from '@acko/breadcrumb'
import { Typography } from '@acko/typography'
import { Field } from '@acko/field'
import { TextInput } from '@acko/textinput'
import { InputGroup } from '@acko/inputgroup'
import { RadioGroup } from '@acko/radiogroup'
import { Dropdown } from '@acko/dropdown'
import { Toggle } from '@acko/toggle'
import { Button } from '@acko/button'
import { Card, CardHeader, CardContent } from '@acko/card'
import { PriceSlider } from '../components/PriceSlider'
import './term-insurance-quote.css'

const TERM_OPTIONS = [10, 15, 20, 25, 30].map((years) => ({ value: String(years), label: `${years} years` }))

function formatCoverage(value) {
  if (value >= 10000000) {
    const cr = value / 10000000
    return `₹${Number.isInteger(cr) ? cr : cr.toFixed(1)} Cr`
  }
  return `₹${Math.round(value / 100000)} L`
}

function estimateMonthlyPremium({ age, coverage, termYears, smoker }) {
  const baseRatePerLakhPerYear = 45 + Math.max(0, age - 25) * 2.5
  const smokerMultiplier = smoker ? 1.6 : 1
  const termAdjustment = 1 + (termYears - 10) * 0.01
  const annualPremium = (coverage / 100000) * baseRatePerLakhPerYear * smokerMultiplier * termAdjustment
  return Math.round(annualPremium / 12)
}

export function TermInsuranceQuote() {
  const [form, setForm] = useState({
    name: '',
    dob: '',
    gender: 'male',
    mobile: '',
    smoker: false,
    coverage: 5000000,
    term: '20',
  })
  const [quote, setQuote] = useState(null)

  const setField = (key, value) => setForm((f) => ({ ...f, [key]: value }))

  const age = useMemo(() => {
    if (!form.dob) return null
    const dob = new Date(form.dob)
    if (Number.isNaN(dob.getTime())) return null
    const diffMs = Date.now() - dob.getTime()
    return Math.floor(diffMs / (365.25 * 24 * 60 * 60 * 1000))
  }, [form.dob])

  const handleSubmit = (e) => {
    e.preventDefault()
    const premium = estimateMonthlyPremium({
      age: age ?? 30,
      coverage: form.coverage,
      termYears: Number(form.term),
      smoker: form.smoker,
    })
    setQuote({ premium, coverage: form.coverage, term: form.term })
  }

  return (
    <div className="term-insurance-quote">
      <div className="term-insurance-quote__container">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Life insurance', href: '/life-insurance' },
            { label: 'Term insurance', href: '/' },
            { label: 'Get quote' },
          ]}
        />

        <Typography as="h1" variant="heading-lg" weight="bold" className="term-insurance-quote__heading">
          Get your term insurance quote
        </Typography>
        <Typography variant="body-md" color="secondary" className="term-insurance-quote__subheading">
          Answer a few quick questions to see your estimated premium.
        </Typography>

        <form className="term-insurance-quote__form" onSubmit={handleSubmit}>
          <Field label="Full name" htmlFor="name" required>
            <TextInput
              id="name"
              placeholder="As per your ID proof"
              value={form.name}
              onChange={(e) => setField('name', e.target.value)}
              required
            />
          </Field>

          <Field label="Date of birth" htmlFor="dob" required>
            <TextInput id="dob" type="date" value={form.dob} onChange={(e) => setField('dob', e.target.value)} required />
          </Field>

          <Field label="Gender" required>
            <RadioGroup
              name="gender"
              value={form.gender}
              onChange={(value) => setField('gender', value)}
              options={[
                { value: 'male', label: 'Male' },
                { value: 'female', label: 'Female' },
                { value: 'other', label: 'Other' },
              ]}
            />
          </Field>

          <Field label="Mobile number" htmlFor="mobile" required>
            <InputGroup prefix="+91">
              <TextInput
                id="mobile"
                type="tel"
                placeholder="98765 43210"
                value={form.mobile}
                onChange={(e) => setField('mobile', e.target.value)}
                required
              />
            </InputGroup>
          </Field>

          <Field label="Do you smoke or use tobacco?">
            <Toggle id="smoker" checked={form.smoker} onChange={(value) => setField('smoker', value)} label={form.smoker ? 'Yes' : 'No'} />
          </Field>

          <Field label="Coverage amount" htmlFor="coverage" hint="Choose how much your family should receive">
            <PriceSlider
              id="coverage"
              min={2500000}
              max={20000000}
              step={2500000}
              value={form.coverage}
              onChange={(value) => setField('coverage', value)}
              formatValue={formatCoverage}
            />
          </Field>

          <Field label="Policy term" htmlFor="term" required>
            <Dropdown id="term" value={form.term} onChange={(value) => setField('term', value)} options={TERM_OPTIONS} />
          </Field>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            fullWidth
            iconRight={<ArrowRight aria-hidden="true" />}
            className="term-insurance-quote__submit"
          >
            See my premium
          </Button>
        </form>

        {quote && (
          <Card padding="lg" className="term-insurance-quote__result">
            <CardHeader>
              <Typography as="h3" variant="heading-md" weight="semibold">
                Your estimated premium
              </Typography>
            </CardHeader>
            <CardContent>
              <Typography variant="display-sm" weight="bold" className="term-insurance-quote__premium">
                ₹{quote.premium.toLocaleString('en-IN')}
                <span className="term-insurance-quote__premium-period">/month</span>
              </Typography>
              <Typography variant="body-sm" color="secondary" className="term-insurance-quote__summary">
                {formatCoverage(quote.coverage)} cover for {quote.term} years
              </Typography>
              <Typography variant="caption" color="secondary" className="term-insurance-quote__disclaimer">
                This is an indicative estimate only. Final premium depends on medical underwriting. ARN: L0130 | *T&C Apply
              </Typography>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
