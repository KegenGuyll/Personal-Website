import Card from '@/app/_components/card'
import CardHeader from '@/app/_components/cardHeader'
import CardLink from '@/app/_components/cardLinks'
import ContactCTA from '@/app/_components/contactCTA'
import Container from '@/app/_components/container'
import LinkButton from '@/app/_components/linkButton'
import { URLS } from '@/app/_constants/urls'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'


const AboutPage = () => {
  return (
    <Container>
      <div className='space-y-8'>
        <div className='space-y-2'> 
          <h1 className='text-3xl font-bold' >It&apos;s Me Kegen</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
        </div>
        <div className='space-y-2'>
          <div className=' h-96 w-full bg-zinc-700 p-2 rounded-md'>
            Image
          </div> 
        </div>
        <div className='space-y-2'>
          <h2 className='text-2xl font-bold' >More About Me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
        </div>
        <div className='space-y-2'>
          <h3 className='text-2xl font-bold' >My Side Projects</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
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
  )
}

export default AboutPage