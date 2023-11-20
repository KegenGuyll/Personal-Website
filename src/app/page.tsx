import { faArrowRight, faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Card from './_components/card'
import CardHeader from './_components/cardHeader'
import CardLink from './_components/cardLinks'
import Container from './_components/container'
import LinkButton from './_components/linkButton'
import { URLS, calendarInvite, emailAddress } from './_constants/urls'
import ContactCTA from './_components/contactCTA'
import Image from 'next/image'
import CopyButton from './_components/copyButton'

export default function Home() {
  return (
    <main className='space-y-4'>
      <Container>
        <div className='space-y-16'>
          <div className='flex'>
            <div className='flex space-x-2 flex-grow items-center'>
              <div className='bg-white opacity-60 h-1 w-1 md:h-2 md:w-2 rounded-full' />
              <p className='text-md md:text-xl font-semibold opacity-60'>
                Software Developer
              </p>
            </div>
            <button className='flex space-x-2 items-center bg-green-700 bg-opacity-20 text-green-500 uppercase rounded-full font-bold text-xs md:text-sm p-2'>
              <div className='bg-green-500 h-1 w-1 md:h-2 md:w-2 rounded-full' />
              <p>available for work</p>
            </button>
          </div>
          <div className='space-y-4 flex flex-col'>
            <div className='flex items-center'>
              <div className='flex-grow space-y-2'>
                <h1 className='text-2xl md:text-4xl font-semibold'>I&apos;m Kegen Guyll</h1>
                <div>
                  <span className='opacity-60 text-sm md:text-base'>
                    <p>Software Developer from Bentonville, AR.</p>
                    <p>Currently Developing at AcreTrader</p>
                  </span>
                </div>
              </div>
              <div>
                <div className='h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64 bg-zinc-700 border-zinc-600 border-2 rounded-full flex items-center justify-center overflow-hidden'>
                  <Image
                    src='/kegen-profile-photo.jpeg'
                    alt='Kegen Guyll'
                    width={600}
                    height={600}
                  /> 
                </div>
              </div>
            </div>
              <div className='flex items-center space-x-4'>
              
              <LinkButton href={calendarInvite} className='flex items-center space-x-2'>
                <FontAwesomeIcon icon={faPlusCircle} />
                <span>Let&apos;s Talk</span>
              </LinkButton>
              <CopyButton copyText={emailAddress} text='Email'/>
            </div>
          </div>
          <div className='space-y-4'>
          <Card 
              header={
                <CardHeader label='Professional Experience' 
                  action={
                    <LinkButton 
                      href={URLS.PROFESSIONAL_EXPERIENCE}
                      className='flex items-center space-x-2 shadow-md hover:ring-zinc-800 hover:ring-4 hover:ring-opacity-50'
                    >
                      <span>Learn More</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </LinkButton>
                  }
                />
              }
            >
              <div className='space-y-2'>
                <CardLink
                  href={`${URLS.PROFESSIONAL_EXPERIENCE}/acretrader/`}
                  iconImage='/acretrader-logo.png' 
                  iconImageAlt='AcreTrader' 
                  label='AcreTrader' 
                  description='A startup Fin-Tech company...' 
                />
                <CardLink 
                  href={`${URLS.PROFESSIONAL_EXPERIENCE}/walmart-global-tech/`}
                  iconImage='/walmart-global-tech-logo.png'
                  iconImageAlt='Walmart Global Tech'
                  label='Walmart Global Tech' 
                  description='A fortune 1 company...' 
                />
              </div>
            </Card>
            <Card 
              header={
                <CardHeader label='Projects' 
                  action={
                    <LinkButton href={URLS.PROJECTS} className='flex items-center space-x-2 shadow-md hover:ring-zinc-800 hover:ring-4 hover:ring-opacity-50'>
                      <span>View All</span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </LinkButton>
                  }
                />
              }
            >
              <div className='space-y-2'>
                <CardLink 
                  href={`${URLS.PROJECTS}/dad-jokes/`}
                  label='Dad Jokes' 
                  description='dad jokes api' 
                />
                <CardLink 
                  href={`${URLS.PROJECTS}/tmrev/`}
                  label='TMREV' 
                  description='a movie review website with a focus on data visualization' 
                />
              </div>
            </Card>
          </div>
          <ContactCTA/>
        </div>
      </Container>
    </main>
  )
}
