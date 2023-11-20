import React from 'react'
import { twMerge } from 'tailwind-merge'

enum ButtonVariant {
  primary = 'PRIMARY',
  secondary = 'SECONDARY'
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonVariant?: ButtonVariant
}

const Button: React.FC<ButtonProps> = ({
  children, 
  className, 
  buttonVariant = ButtonVariant.primary, 
  ...props
}: ButtonProps) => {
  return (
    <button className={
      twMerge(
        'border p-2 rounded-md font-bold', 
        'dark:text-white dark:border-zinc-600 ring-0 hover:ring-2 hover:ring-zinc-500 hover:shadow-lg',
        'hover:transition-all',
        buttonVariant === ButtonVariant.primary && 'dark:bg-zinc-700',
        buttonVariant === ButtonVariant.secondary && 'dark:bg-transparent',
        className
        )} 
      {...props}
    >
      {children}
    </button>
  )
}

export { ButtonVariant }

export type { ButtonProps }

export default Button