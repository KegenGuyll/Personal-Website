import Card from '@/app/_components/card'
import CardLink from '@/app/_components/cardLinks'
import ContactCTA from '@/app/_components/contactCTA'
import Container from '@/app/_components/container'
import projects from '@/app/_constants/projects'
import React from 'react'

const ProjectsPage = () => {
  return (
    <Container className='h-screen'>
      <div className='space-y-8'>
        <div className='space-y-2'>
          <h1 className='text-3xl font-bold' >My Works</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Ducimus dolore dignissimos temporibus. Dolores soluta illum quo perferendis dolor ab adipisci ullam alias. 
            Iure expedita recusandae tenetur reprehenderit sint rem ea?
          </p>
        </div>
        <div className='space-y-2'>
          <Card>
            <div className='space-y-2'>
              {projects.map((project) => (
                <CardLink 
                  key={project.title}
                  href={project.link}
                  label={project.title}
                  description={project.description}
                />
              ))}
            </div>
          </Card>
        </div>
        <div className='space-y-2'>
          <ContactCTA/>
        </div>
      </div>
    </Container>
  )
}

export default ProjectsPage