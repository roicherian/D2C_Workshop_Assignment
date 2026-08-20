import { Routes, Route } from 'react-router-dom'
import { TermInsuranceLanding } from './pages/TermInsuranceLanding'
import { TermInsuranceQuote } from './pages/TermInsuranceQuote'
import { HealthInsuranceLanding } from './pages/HealthInsuranceLanding'
import { HealthInsuranceQuoteStub } from './pages/HealthInsuranceQuoteStub'

export function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<TermInsuranceLanding />} />
        <Route path="/quote" element={<TermInsuranceQuote />} />
        <Route path="/health-insurance" element={<HealthInsuranceLanding />} />
        <Route path="/health-insurance/quote" element={<HealthInsuranceQuoteStub />} />
      </Routes>
    </div>
  )
}
