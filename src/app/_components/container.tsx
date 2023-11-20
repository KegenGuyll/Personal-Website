import React from 'react'
import { twMerge } from 'tailwind-merge'

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {}

const Container: React.FC<ContainerProps> = ({children, className, ...props}: ContainerProps) => {
  return (
    <section 
      className={
        twMerge(
        'flex items-center justify-center p-4 rounded-lg border dark:bg-zinc-800 dark:border-zinc-700 dark:text-white',
        className
      )}
      {...props}
    >
      <div className='w-full max-w-xl lg:max-w-3xl'>
        {children}
      </div>
    </section>
  )
}

export default Container