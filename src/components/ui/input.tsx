import type { ComponentProps } from 'react'
import React from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'> & {
  mask?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, mask, onChange, ...props }, ref) => {
    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
      if (mask === 'currency') {
        const value = e.target.value
        const maskedValue = value
          .replace(/\D/g, '')
          .replace(/(\d)(\d{2})$/, '$1,$2')
          .replace(/\B(?=(\d{3})+(?!\d))/g, '.')

        if (value !== maskedValue) {
          e.target.value = maskedValue
        }
      }
    }

    return (
      <input
        ref={ref}
        onChange={handleInputChange}
        className={twMerge('size-full px-3.5 outline-none', className)}
        {...props}
      />
    )
  }
)
