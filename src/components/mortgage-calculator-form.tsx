import { DollarSign } from 'lucide-react'
import calculatorIcon from '../assets/images/icon-calculator.svg'
import { FormControl, FormItem } from './ui/form'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { InputPrefix } from './ui/input-prefix'
import { useFormContext } from 'react-hook-form'
import { z } from 'zod'

export const mortgageCalculatorFormSchema = z
  .object({
    mortgage_amount: z.string().min(1, { message: 'This field is required' }),
    interest_rate: z.coerce
      .number({
        invalid_type_error: 'This field is required'
      })
      .nonnegative({ message: 'Please enter a positive number' })
      .min(1, { message: 'This field is required' }),
    mortgage_term: z.coerce
      .number({
        invalid_type_error: 'This field is required'
      })
      .nonnegative({ message: 'Please enter a positive number' })
      .min(1, { message: 'This field is required' }),
    mortgage_type: z.enum(['interest', 'repayment'], {
      message: 'This field is required'
    })
  })
  .transform(data => {
    return {
      ...data,
      mortgage_amount: parseFloat(
        data.mortgage_amount.replace('.', '').replace(',', '.')
      )
    }
  })

export type MortgageCalculatorFormType = z.infer<
  typeof mortgageCalculatorFormSchema
>

type MortgageCalculatorFormProps = {
  setResult: (result: number) => void
}

export function MortgageCalculatorForm({
  setResult
}: MortgageCalculatorFormProps) {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors }
  } = useFormContext<MortgageCalculatorFormType>()

  function handleSubmitForm(data: MortgageCalculatorFormType) {
    const monthlyInterestRate = data.interest_rate / 12 / 100
    const totalPayments = data.mortgage_term * 12 // Assuming yearly payments

    let monthlyPayment: number

    if (data.mortgage_type === 'interest') {
      monthlyPayment = data.mortgage_amount * monthlyInterestRate
    } else {
      monthlyPayment =
        (data.mortgage_amount * monthlyInterestRate) /
        (1 - Math.pow(1 + monthlyInterestRate, -totalPayments))
    }

    setResult(Number(monthlyPayment.toFixed(2)))
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit(handleSubmitForm)}>
      <div className="space-y-2 sm:space-y-3">
        <FormItem>
          <Label htmlFor="mortgage_amount">Mortgage Amount</Label>

          <FormControl aria-invalid={!!errors.mortgage_amount}>
            <InputPrefix>
              <DollarSign className="size-3.5" />
            </InputPrefix>

            <Input
              type="text"
              mask="currency"
              {...register('mortgage_amount', { valueAsNumber: false })}
            />
          </FormControl>

          {errors.mortgage_amount && (
            <p className="text-xs font-medium text-primary-red">
              {errors.mortgage_amount.message}
            </p>
          )}
        </FormItem>

        <div className="flex flex-wrap gap-2 sm:flex-nowrap sm:gap-3">
          <FormItem className="w-full sm:w-1/2">
            <Label htmlFor="mortgage_term">Mortgage Term</Label>

            <FormControl aria-invalid={!!errors.mortgage_term}>
              <Input
                type="text"
                {...register('mortgage_term', { valueAsNumber: true })}
              />

              <InputPrefix>Years</InputPrefix>
            </FormControl>

            {errors.mortgage_term && (
              <p className="text-xs font-medium text-primary-red">
                {errors.mortgage_term.message}
              </p>
            )}
          </FormItem>

          <FormItem className="w-full sm:w-1/2">
            <Label htmlFor="interest_rate">Interest Rate</Label>

            <FormControl aria-invalid={!!errors.interest_rate}>
              <Input
                type="number"
                step="0.01"
                min={0}
                {...register('interest_rate', { valueAsNumber: true })}
              />

              <InputPrefix>%</InputPrefix>
            </FormControl>

            {errors.interest_rate && (
              <p className="text-xs font-medium text-primary-red">
                {errors.interest_rate.message}
              </p>
            )}
          </FormItem>
        </div>

        <div className="flex flex-col gap-1.5">
          <Label>Mortgage Type</Label>

          <FormItem
            className="inline-grid gap-0.5"
            aria-invalid={!!errors.mortgage_type}
          >
            <Label className="group font-bold text-slate-900">
              <FormControl className="gap-3 px-3 text-xs">
                <input
                  type="radio"
                  id="repayment"
                  value="repayment"
                  className="sr-only"
                  {...register('mortgage_type')}
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
                  value="interest"
                  className="sr-only"
                  {...register('mortgage_type')}
                />
                <div className="size-3.5 rounded-full border border-slate-700 p-0.5 after:hidden after:h-full after:w-full after:rounded-full after:bg-primary-lime group-has-[:checked]:border-primary-lime after:group-has-[:checked]:block" />
                Interest Only
              </FormControl>
            </Label>

            {errors.mortgage_type && (
              <p className="text-xs font-medium text-primary-red">
                {errors.mortgage_type.message}
              </p>
            )}
          </FormItem>
        </div>
      </div>

      <button
        type="submit"
        className="flex h-9 w-full items-center justify-center gap-3 rounded-full bg-primary-lime px-6 transition-colors hover:bg-primary-lime/50 disabled:bg-lime-700/40 sm:w-auto"
        disabled={isSubmitting}
      >
        <img src={calculatorIcon} alt="" className="size-4" />
        <span className="text-xs font-bold text-slate-900">
          Calculate Repayments
        </span>
      </button>
    </form>
  )
}
