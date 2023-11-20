import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'

interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  iconImage?: string,
  iconImageAlt?: string,
  fontAwesomeIcon?: IconDefinition,
  label: string,
  description?: string | React.ReactNode
  tagLabel?: string
}

const CardLink: React.FC<CardLinkProps> = ({
  href = '/', 
  iconImage, 
  iconImageAlt,
  fontAwesomeIcon,
  label,
  description,
  tagLabel,
  ...props
}: CardLinkProps) => {
  return (
    <div>
      <Link href={href} {...props} >
        <div className={
          twMerge(
            'dark:bg-zinc-600 hover:ring-4 hover:ring-zinc-800 hover:ring-opacity-50 hover:transition-all hover:duration-150',
            'flex items-center py-2 px-4 rounded-md'
          )
          }
        >
          <div className='p-1 bg-zinc-800 rounded-full h-12 w-12 mr-4 flex-none'>
            {iconImage && iconImageAlt && (
              <Image 
                className='rounded-full' 
                width={48} 
                height={48} 
                src={iconImage} 
                alt={iconImageAlt}
              />
            )}
            {fontAwesomeIcon && (
              <FontAwesomeIcon icon={fontAwesomeIcon}/>
            )}
          </div>
          <div className='text-lg font-bold w-full'>
            <span>
              <p>{label}</p>
            </span>
            {description && (
              <span className='text-sm font-light text-opacity-50 line-clamp-3 break-before-all'>
                {typeof description === 'string' ? (
                  <p>{description}</p>
                ): (
                  <div className='space-y-2'>
                    {description}
                  </div>
                )}
              </span>
            )}
          </div>
          <div className='flex-grow'/>
          <div className='ml-2'>
            <FontAwesomeIcon icon={faChevronRight}/>
          </div>
        </div>
      </Link>
    </div>
  )
}


export default CardLink