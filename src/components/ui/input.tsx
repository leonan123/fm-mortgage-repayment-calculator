import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
  return (
    <input
      className={twMerge('h-full w-full px-3.5 outline-none', className)}
      {...props}
    />
  )
}
