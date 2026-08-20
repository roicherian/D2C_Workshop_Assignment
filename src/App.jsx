import { Routes, Route } from 'react-router-dom'
import { TermInsuranceLanding } from './pages/TermInsuranceLanding'
import { TermInsuranceQuote } from './pages/TermInsuranceQuote'

export function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<TermInsuranceLanding />} />
        <Route path="/quote" element={<TermInsuranceQuote />} />
      </Routes>
    </div>
  )
}
