import illustrationEmpty from '../assets/images/illustration-empty.svg'

export function MortgageCalculatorResult() {
  return (
    <div className="flex h-full flex-col items-center justify-center p-4">
      <img src={illustrationEmpty} alt="illustration" />

      <h2 className="font-semibold text-slate-100">Results shown here</h2>

      <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  )
}
