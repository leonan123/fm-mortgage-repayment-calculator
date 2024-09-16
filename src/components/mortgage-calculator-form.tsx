import calculatorIcon from '../assets/images/icon-calculator.svg'

export function MortgageCalculatorForm() {
  return (
    <form action="" className="space-y-5">
      <div className="space-y-3">
        <div className="space-y-1.5">
          <label htmlFor="" className="text-xs font-medium text-slate-500">
            Mortgage Amount
          </label>
          <input
            type="text"
            className="h-8 w-full rounded border border-slate-500 text-sm font-bold text-slate-900"
          />
        </div>

        <div className="flex items-center gap-3">
          <div className="space-y-1.5">
            <label htmlFor="" className="text-xs font-medium text-slate-500">
              Mortgage Term
            </label>
            <input
              type="text"
              className="h-8 w-full rounded border border-slate-500 text-sm font-bold text-slate-900"
            />
          </div>

          <div className="space-y-1.5">
            <label htmlFor="" className="text-xs font-medium text-slate-500">
              Interest Rate
            </label>
            <input
              type="text"
              className="h-8 w-full rounded border border-slate-500 text-sm font-bold text-slate-900"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1.5">
          <label
            htmlFor="mortgage-type"
            className="text-xs font-medium text-slate-500"
          >
            Mortgage Type
          </label>

          <div className="space-y-1.5">
            <label className="flex h-8 items-center gap-3 rounded border border-slate-500 px-3 has-[:checked]:border-primary-lime has-[:checked]:bg-primary-lime/20">
              <input
                type="radio"
                name="mortgage-type"
                className="size-3.5 accent-primary-lime"
              />
              <span className="text-xs font-bold text-slate-900">
                Repayment
              </span>
            </label>

            <label className="flex h-8 items-center gap-3 rounded border border-slate-500 px-3 has-[:checked]:border-primary-lime has-[:checked]:bg-primary-lime/20">
              <input
                type="radio"
                name="mortgage-type"
                className="size-3.5 accent-primary-lime"
              />
              <span className="text-xs font-bold text-slate-900">
                Interest Only
              </span>
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="flex h-9 w-auto items-center justify-center gap-3 rounded-full bg-primary-lime px-6"
      >
        <img src={calculatorIcon} alt="" className="size-4" />
        <span className="text-xs font-bold text-slate-900">
          Calculate Repayments
        </span>
      </button>
    </form>
  )
}
