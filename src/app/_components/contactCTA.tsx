import React from 'react'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LinkButton from './linkButton'
import { calendarInvite, emailAddress } from '../_constants/urls'
import CopyButton from './copyButton'

const ContactCTA: React.FC = () => {

  return (
    <div className='text-center flex flex-col items-center justify-center space-y-4'>
      <h2 className='text-3xl'>Let&apos;s Work Together</h2>
      <p className='font-light text-lg opacity-60' >Developer, Creating and Building Innovative Technology</p>
      <div className='flex items-center space-x-4'>
        <LinkButton href={calendarInvite} className='flex items-center space-x-2'>
          <FontAwesomeIcon icon={faPlusCircle} />
          <span>Let&apos;s Talk</span>
        </LinkButton>
        <CopyButton copyText={emailAddress}/>
      </div>
    </div>
  )
}

export default ContactCTA