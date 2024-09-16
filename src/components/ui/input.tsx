import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge(
        'h-8 w-full rounded border border-slate-500 text-sm font-bold text-slate-900',
        className
      )}
      {...props}
    />
  )
}
