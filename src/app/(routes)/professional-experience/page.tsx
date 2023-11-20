import Button from '@/app/_components/button'
import Card from '@/app/_components/card'
import CardLinkWorkExperience from '@/app/_components/cardLinkWorkExperience'
import CardLink from '@/app/_components/cardLinks'
import ContactCTA from '@/app/_components/contactCTA'
import Container from '@/app/_components/container'
import jobs from '@/app/_constants/professional-experience'
import recommendations from '@/app/_constants/professional-recommendations'
import { faCloudArrowDown } from '@fortawesome/free-solid-svg-icons/faCloudArrowDown'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const ProfessionalExperiencePage = () => {
  return (
    <Container>
      <div className='space-y-8'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold' >My Professional Experience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
          <div>
            <a href="/public/resume.pdf" download="kegen-guyll-resume.pdf">
              <Button className='flex items-center space-x-2'>
                <span>Download Resume</span>
                <FontAwesomeIcon icon={faCloudArrowDown} />
              </Button>
            </a>
          </div>
        </div>
        <div>
        <Card>
          <div className='space-y-2'>
            {jobs.map((job) => (
              <CardLinkWorkExperience
                key={job.title}
                job={job}
              />
            ))}
          </div>
        </Card>
        </div>
        <div className='space-y-4'>
        <h1 className='text-2xl font-bold' >Recommendations</h1>
        <div className='space-y-2'>
          {recommendations.map((recommendation) => (
            <CardLink
              key={recommendation.author}
              label={recommendation.author}
              description={recommendation.text}
              href={recommendation.link}
              iconImage={recommendation.image}
              iconImageAlt={recommendation.author}
            />
          ))} 
        </div>
        </div>
        <div className='space-y-4'>
          <ContactCTA/>
        </div>
      </div>
    </Container>
  )
}

export default ProfessionalExperiencePage