import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { twMerge } from 'tailwind-merge'
import { Job } from '../_constants/professional-experience'
import dayjs from 'dayjs'

interface CardLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  job: Job
}

const CardLinkWorkExperience: React.FC<CardLinkProps> = ({
  job,
}: CardLinkProps) => {
  const {
    iconImage, 
    title, 
    company, 
    description, 
    startDate, 
    endDate,
    skills
  } = job

  const startDateF = dayjs(startDate)
  const endDateF = dayjs(endDate)

  const diff = endDateF.diff(startDateF, 'months')

  const years = Math.floor(diff / 12)
  const months = diff % 12;

  return (
    <div className={
      twMerge(
        'dark:bg-zinc-600 hover:ring-4 hover:ring-zinc-800 hover:ring-opacity-50 hover:transition-all hover:duration-150',
        'flex flex-col py-2 px-4 rounded-md space-y-8'
      )
      }
    >
      <div className='w-full flex items-center'>
        <div className='p-1 bg-zinc-800 rounded-full h-12 w-12 mr-4 flex-none'>
          {iconImage && (
            <Image 
              className='rounded-full' 
              width={48} 
              height={48} 
              src={iconImage} 
              alt={company}
            />
          )}
        </div>
        <div className='text-lg font-bold  w-full space-y-3'>
          <div>
            <p>{title}</p>
            <div className='flex items-center space-x-2 text-xs font-light'>
              <p aria-label='company' >{company}</p>
              <span>·</span>
              <p aria-label='working dates' >{`${dayjs(startDate).format('MMM YYYY')} - ${dayjs(endDate).format('MMM YYYY')}`}</p>
              <span>·</span>
              <div className='space-x-2'>
                {!!years && (
                  <span>{years} yr</span>
                )}
                {!!months && (
                  <span>{months} mos</span>
                )}
              </div>
            </div>
          </div>
          <div className='text-sm font-normal text-opacity-50'>
            {description}
          </div>
        </div>
      </div>
      {skills && skills.length && (
        <div className='flex flex-wrap gap-1'>
          {skills.map((skill) => (
            <div key={skill} className='bg-zinc-700 py-1 px-3 rounded-md'>
              <span>{skill}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}


export default CardLinkWorkExperience