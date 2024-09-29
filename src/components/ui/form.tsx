import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type FormItemProps = ComponentProps<'div'>

export function FormItem({ className, ...props }: FormItemProps) {
  return <div className={twMerge('space-y-1.5', className)} {...props} />
}

type FormControlProps = ComponentProps<'div'>

export function FormControl({ className, ...props }: FormControlProps) {
  return (
    <div
      className={twMerge(
        'group relative flex h-8 w-full items-center overflow-hidden rounded border border-slate-500 text-sm font-bold transition-colors',
        'hover:border-slate-700',
        'focus-within:border-primary-lime',
        'has-[:checked]:border-primary-lime has-[:checked]:bg-primary-lime/20',
        'aria-[invalid=true]:border-primary-red',
        className
      )}
      {...props}
    />
  )
}
