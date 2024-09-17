import { DollarSign } from 'lucide-react'
import calculatorIcon from '../assets/images/icon-calculator.svg'
import { FormControl, FormItem } from './ui/form'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { InputPrefix } from './ui/input-prefix'

export function MortgageCalculatorForm() {
  return (
    <form className="space-y-5">
      <div className="space-y-3">
        <FormItem>
          <Label htmlFor="amount">Mortgage Amount</Label>

          <FormControl>
            <InputPrefix>
              <DollarSign className="size-3.5" />
            </InputPrefix>

            <Input type="text" name="amount" />
          </FormControl>
        </FormItem>

        <div className="flex items-center gap-3">
          <FormItem className="w-1/2">
            <Label htmlFor="mortgage-term">Mortgage Term</Label>

            <FormControl>
              <Input type="text" name="mortgage-term" />

              <InputPrefix>Years</InputPrefix>
            </FormControl>
          </FormItem>

          <FormItem className="w-1/2">
            <Label htmlFor="interest-rate">Interest Rate</Label>

            <FormControl>
              <Input type="text" name="interest-rate" />

              <InputPrefix>%</InputPrefix>
            </FormControl>
          </FormItem>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Mortgage Type</Label>

          <FormItem className="inline-grid">
            <Label className="group font-bold text-slate-900">
              <FormControl className="gap-3 px-3 text-xs">
                <input
                  type="radio"
                  id="repayment"
                  name="mortgage-type"
                  value="repayment"
                  className="sr-only"
                />
                <div className="size-3.5 rounded-full border border-slate-700 p-0.5 after:hidden after:h-full after:w-full after:rounded-full after:bg-primary-lime group-has-[:checked]:border-primary-lime after:group-has-[:checked]:block" />
                Repayment
              </FormControl>
            </Label>

            <Label className="group font-bold text-slate-900">
              <FormControl className="gap-3 px-3 text-xs">
                <input
                  type="radio"
                  id="interest"
                  name="mortgage-type"
                  value="interest"
                  className="sr-only"
                />
                <div className="size-3.5 rounded-full border border-slate-700 p-0.5 after:hidden after:h-full after:w-full after:rounded-full after:bg-primary-lime group-has-[:checked]:border-primary-lime after:group-has-[:checked]:block" />
                Interest Only
              </FormControl>
            </Label>
          </FormItem>
        </div>
      </div>

      <button
        type="submit"
        className="flex h-9 w-auto items-center justify-center gap-3 rounded-full bg-primary-lime px-6 transition-colors hover:bg-primary-lime/50"
      >
        <img src={calculatorIcon} alt="" className="size-4" />
        <span className="text-xs font-bold text-slate-900">
          Calculate Repayments
        </span>
      </button>
    </form>
  )
}
