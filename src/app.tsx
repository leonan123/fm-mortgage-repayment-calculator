import { useState } from 'react'
import {
  MortgageCalculatorForm,
  mortgageCalculatorFormSchema,
  type MortgageCalculatorFormType
} from './components/mortgage-calculator-form'
import { MortgageCalculatorResult } from './components/mortgage-calculator-result'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

export function App() {
  const [result, setResult] = useState<number | null>(null)

  const formMethods = useForm<MortgageCalculatorFormType>({
    resolver: zodResolver(mortgageCalculatorFormSchema)
  })

  function handleClearAllClick() {
    formMethods.reset()
    setResult(null)
  }

  return (
    <main className="flex min-h-dvh items-center justify-center bg-slate-100">
      <div className="m-4 flex max-w-[760px] flex-col overflow-hidden rounded-2xl bg-white shadow-xl sm:flex-row">
        <div className="w-full p-4 sm:w-1/2 sm:p-7">
          <FormProvider {...formMethods}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h1 className="text-lg font-bold text-slate-900">
                Mortgage Calculator
              </h1>

              <button
                className="w-fit text-xs font-medium text-slate-500 underline transition-colors hover:text-slate-700"
                onClick={handleClearAllClick}
              >
                Clear All
              </button>
            </div>

            <div className="mt-4 sm:mt-6">
              <MortgageCalculatorForm setResult={setResult} />
            </div>
          </FormProvider>
        </div>

        <div className="w-full bg-slate-900 sm:w-1/2 sm:rounded-bl-[60px]">
          <MortgageCalculatorResult result={result} />
        </div>
      </div>
    </main>
  )
}
