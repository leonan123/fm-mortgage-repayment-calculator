import illustrationEmpty from '../assets/images/illustration-empty.svg'

type MortgageCalculatorResult = {
  result: number | null
}

export function MortgageCalculatorResult({ result }: MortgageCalculatorResult) {
  return (
    <div className="flex h-full flex-col items-center p-7">
      {result ? (
        <div className="h-full">
          <h2 className="text-lg font-bold leading-none text-slate-100">
            Your results
          </h2>

          <p className="mt-4 text-xs leading-relaxed text-slate-500">
            Your results are shown below based on the information you provided.
            To adjust the results, edit the form and click "calculated
            repayments" again.
          </p>

          <div className="mt-6 flex flex-col justify-center rounded border-t-[3px] border-primary-lime bg-slate-950/50 p-6">
            <span className="text-xs text-slate-500">
              Your monthly repayments
            </span>

            <strong className="mt-2 text-3xl text-primary-lime">
              ${' '}
              {Intl.NumberFormat('en-US', {
                maximumFractionDigits: 2,
                minimumFractionDigits: 2
              }).format(result)}
            </strong>

            <div className="mt-6 h-px bg-slate-500/30" />

            <div className="mt-5 flex flex-col gap-2 text-xs text-slate-500">
              Total you'll repay over the term
              <strong className="text-lg font-semibold text-slate-100">
                ${' '}
                {Intl.NumberFormat('en-US', {
                  maximumFractionDigits: 2,
                  minimumFractionDigits: 2
                }).format(result * 12)}
              </strong>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center">
          <img src={illustrationEmpty} alt="illustration" />

          <h2 className="font-semibold text-slate-100">Results shown here</h2>

          <p className="mt-3 text-center text-xs leading-relaxed text-slate-500">
            Complete the form and click “calculate repayments” to see what your
            monthly repayments would be.
          </p>
        </div>
      )}
    </div>
  )
}
