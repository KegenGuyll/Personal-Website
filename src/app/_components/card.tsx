import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: React.ReactNode
}

const Card: React.FC<CardProps> = ({
  className, 
  children, 
  header = null, 
  ...props
}: CardProps) => {
  return (
    <div className={twMerge(
      'dark:bg-zinc-700 border dark:border-zinc-600 p-4 rounded-md', 
      className
      )} 
      {...props}
    >
      {header && (
        <div className='mb-4'>
          {header}
        </div>
      )}
      <div>
        {children}
      </div>
    </div>
  )
}

export default Card