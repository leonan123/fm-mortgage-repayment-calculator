import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputPrefixProps = ComponentProps<'label'> & {
  direction?: 'left' | 'right'
}

export function InputPrefix({
  className,
  direction = 'left',
  ...props
}: InputPrefixProps) {
  return (
    <label
      className={twMerge(
        'flex h-full items-center justify-center bg-slate-100 px-3 text-xs text-slate-700 transition-colors',
        'group-focus-within:bg-primary-lime group-focus-within:text-slate-900',
        'group-aria-[invalid=true]:bg-primary-red group-aria-[invalid=true]:text-slate-100',
        className
      )}
      {...props}
    />
  )
}
