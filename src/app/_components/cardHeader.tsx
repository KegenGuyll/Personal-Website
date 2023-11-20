import React from 'react'

interface CardHeaderProps {
  label: string
  action?: React.ReactNode
}

const CardHeader: React.FC<CardHeaderProps> = ({label, action = null}: CardHeaderProps) => {
  return (
    <div className='flex items-center'>
      <div className='flex space-x-2 flex-grow items-center'>
        <div className='bg-white opacity-80 h-2 w-2 rounded-full' />
        <p className='md:text-xl text-lg font-semibold opacity-80'>
          {label}
        </p>
      </div>
      {action && (
        <div>
          {action}
        </div>
      )}
    </div>
  )
}

export default CardHeader