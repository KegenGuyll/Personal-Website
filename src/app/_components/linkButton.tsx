import React from 'react'
import { twMerge } from 'tailwind-merge'
import Button, { ButtonVariant } from './button'
import Link from 'next/link'


interface LinkButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonVariant?: ButtonVariant
  href: string
}

const LinkButton: React.FC<LinkButtonProps> = ({
  children, 
  className, 
  href,
  buttonVariant = ButtonVariant.primary, 
  ...props
}: LinkButtonProps) => {
  return (
    <Link href={href}>
      <Button className={
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
      </Button>  
    </Link>  
  )
}


export default LinkButton