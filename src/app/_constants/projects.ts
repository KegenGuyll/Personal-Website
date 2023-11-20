import { PROJECT_URLS } from "./urls"

interface Project {
  title: string
  description: string
  githubLink: string
  link: string
  icon: string
}


const projects: Project[] = [
  {
    title: 'Dad Jokes',
    description: 'dad jokes api',
    githubLink: 'https://github.com/DadJokes-io/Dad_Jokes_API',
    link: PROJECT_URLS.DAD_JOKES,
    icon: ''
  },
  {
    title: 'TMREV',
    description: 'a movie review website with a focus on data visualization',
    githubLink: 'https://github.com/tmrev/tmrev.io',
    link: PROJECT_URLS.TMREV,
    icon: ''
  },
  {
    title: 'Kubric',
    description: 'Web scrapper designed to scrap movie review sites.',
    githubLink: 'https://github.com/tmrev/kubrick',
    link: PROJECT_URLS.KUBRIC,
    icon: ''
  },
  {
    title: 'Madden Franchise Export',
    description: 'Web scrapper designed to scrap movie review sites.',
    githubLink: 'https://github.com/KegenGuyll/madden-franchise-export',
    link: PROJECT_URLS.MADDEN_FRANCHISE_EXPORT,
    icon: ''
  }
]

export type { Project }

export default projects