import React from 'react'
import { URLS } from "./urls"

interface Job {
  company: string
  title: string
  startDate: string
  endDate?: string
  description: React.ReactNode
  link: string
  iconImage:string
  skills?: string[]
}

const jobs: Job[] = [
  { 
    company: 'AcreTrader',
    title: 'Senior Front End Software Engineer III',
    description: (
      <ul className='list-inside list-disc'>
        <li>
          Championed frontend initiatives for Acres.com, culminating in a surge to over 50,000 active users, showcasing product reach and effectiveness.
        </li>
        <li>
          Strategically formulated and implemented SEO tactics, resulting in a 2x organic visibility and engagement growth.
        </li>
        <li>
          Used tools like Segment, Google Analytics, and Tag Manager to track events and grow the platform
        </li>
        <li>
          Demonstrated proficiency in a range of technologies, including Typescript, Next.js (React.js), TailwindCSS, Mapbox, and Figma.
        </li>
        <li>
          Wrote developer documentation on Confluence to help on board new developers.
        </li>
      </ul>
    ),
    startDate: 'May/01/2023',
    endDate: 'Oct/01/2023',
    link: `${URLS.PROFESSIONAL_EXPERIENCE}/acretrader`,
    iconImage: '/acretrader-logo.png',
    skills: [
      'Typescript',
      'React.JS',
      'Next.JS',
      'TailwindCSS',
      'Mapbox',
      'Figma',
      'Redux',
      'Segment',
      'Tag Manager'
    ]
  },
  { 
    company: 'AcreTrader',
    title: 'Senior Software Engineer',
    description: (
      <ul className='list-inside list-disc'>
        <li>
          Architected and developed Acres, a geospatial analytics software, amassing 20,000 monthly users.
        </li>
        <li>
          Lead a small team for an internal management software project.
        </li>
        <li>
          Demonstrated proficiency in a range of technologies, including Typescript, Next.js (React.js), TailwindCSS, Mapbox, and Figma.
        </li>
      </ul>
    ),
    startDate: 'Jul/01/2022',
    endDate: 'May/01/2023',
    link: `${URLS.PROFESSIONAL_EXPERIENCE}/acretrader`,
    iconImage: '/acretrader-logo.png',
    skills: [
      'Typescript',
      'React.js',
      'Next.js',
      'TailwindCSS',
      'Mapbox',
      'Figma'
    ]
  },
  { 
    company: 'AcreTrader',
    title: 'Frontend Developer',
    description: null,
    startDate: 'May/01/2021',
    endDate: 'July/01/2022',
    link: `${URLS.PROFESSIONAL_EXPERIENCE}/acretrader`,
    iconImage: '/acretrader-logo.png',
    skills: [
      'Vue.js',
      'Javascript'
    ]
  },
  { 
    company: 'Walmart Global Tech',
    title: 'Software Engineer II',
    description: (
      <ul className='list-inside list-disc'>
        <li>
          Demonstrated proficiency in a range of technologies, including Typescript, React.js, Node.js, and Docker.
        </li>
        <li>
          Tasked with conducting comprehensive code reviews to ensure best practices and optimal performance.
        </li>
        <li>
          Played a pivotal role in developing, refining, and maintaining the user interface, ensuring seamless user experience.
        </li>
        <li>
          Created CD/CLI pipelines for continuous deployment and collecting code coverage
        </li>
      </ul>
    ),
    startDate: 'Jan/01/2021',
    endDate: 'May/01/2021',
    link: `${URLS.PROFESSIONAL_EXPERIENCE}/walmart`,
    iconImage: '/walmart-global-tech-logo.png',
    skills: [
      'React.js',
      'Typescript',
      'Redux',
      'Jira'
    ]
  },
  { 
    company: 'Walmart Global Tech',
    title: 'Associate Software Engineer',
    description: (
      <ul className='list-inside list-disc'>
        <li>
          Collaborated with cross-functional teams, gaining insights into end-to-end software development lifecycle.
        </li>
        <li>
        Spearheaded the creation of &quot;Atlas&quot;, an internal Walmart application designed to facilitate the deployment of software to next-generation checkout systems using React.js, Typescript, and Redux.
        </li>
        <li>
          Created unit test using Jest for testing React components
        </li>
      </ul>
    ),
    startDate: 'Jan/01/2020',
    endDate: 'May/01/2021',
    link: `${URLS.PROFESSIONAL_EXPERIENCE}/walmart`,
    iconImage: '/walmart-global-tech-logo.png'
  },
  {
    company: 'Walmart Global Tech',
    title: 'Technician III',
    description: (
      <ul className='list-inside list-disc'>
        <li>
          Established a foundation in the Agile Process, driving efficiency in project management and delivery.
        </li>
        <li>
          Rapidly advanced from a High School Intern position, a testament to demonstrated technical skills and strong work ethic.
        </li>
        <li>
          Dockerized Java and Node applications to be deployed to Kubernetes clusters
        </li>
      </ul>
    ),
    startDate: 'Jun/01/2018',
    endDate: 'Jan/01/2020',
    link: `${URLS.PROFESSIONAL_EXPERIENCE}/walmart`,
    iconImage: '/walmart-global-tech-logo.png'
  },
  {
    company: 'Walmart Global Tech',
    title: 'Intern',
    description: (
      <ul className='list-inside list-disc'>
        <li>
          Contributed to Walmart’s internal pickers app using React.js and React Native.
        </li>
        <li>
          Established foundation knowledge in source control such as Git
        </li>
      </ul>
    ),
    startDate: 'Sep/01/2017',
    endDate: 'Apr/01/2018',
    link: `${URLS.PROFESSIONAL_EXPERIENCE}/walmart`,
    iconImage: '/walmart-global-tech-logo.png'
  }
]

export type { Job }

export default jobs