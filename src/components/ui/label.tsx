import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type LabelProps = ComponentProps<'label'>

export function Label({ className, ...props }: LabelProps) {
  return (
    <label
      className={twMerge('text-xs font-medium text-slate-500', className)}
      {...props}
    />
  )
}
