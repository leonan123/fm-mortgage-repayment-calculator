import { useState } from 'react'
import { MortgageCalculatorForm } from './components/mortgage-calculator-form'
import { MortgageCalculatorResult } from './components/mortgage-calculator-result'

export function App() {
  const [result, setResult] = useState<number | null>(null)

  return (
    <main className="flex h-screen items-center justify-center bg-slate-100">
      <div className="flex max-w-[760px] overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="w-1/2 p-7">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-slate-900">
              Mortgage Calculator
            </h1>

            <button className="text-xs font-medium text-slate-500 underline transition-colors hover:text-slate-700">
              Clear All
            </button>
          </div>

          <div className="mt-6">
            <MortgageCalculatorForm setResult={setResult} />
          </div>
        </div>

        <div className="w-1/2 rounded-bl-[60px] bg-slate-900">
          <MortgageCalculatorResult result={result} />
        </div>
      </div>
    </main>
  )
}
