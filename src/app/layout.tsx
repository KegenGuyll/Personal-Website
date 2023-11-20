import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

import './globals.css'
import Header from './_components/header';
import Container from './_components/container'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const roboto = Roboto({
  weight: ['400', '700', '100', '300', '500', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Kegen Guyll',
  description: 'Kegen Guyll Software Developer for Hire.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className='p-2 md:p-8 space-y-4 dark:bg-zinc-900'>
        <Header/>  
        {children}
        <footer>
          <Container>
          <div className='flex'>
            <div className='flex space-x-2 flex-grow items-center'>
              <div className='bg-white opacity-60 h-1 w-1 md:h-2 md:w-2 rounded-full' />
              <p className='text-md md:text-xl font-semibold opacity-60'>
                Follow Me
              </p>
            </div>
            <div className='space-x-2 flex items-center'>
              <Link 
                href={'https://www.linkedin.com/in/kegenguyll/'} 
                className='bg-zinc-700 rounded-full p-2 h-12 w-12 flex items-center justify-center'
              >
                <FontAwesomeIcon size='xl' icon={faLinkedin}/>
              </Link>
              <Link 
                href={'https://github.com/KegenGuyll'} 
                className='bg-zinc-700 rounded-full p-2 h-12 w-12 flex items-center justify-center'
              >
                <FontAwesomeIcon size='xl' icon={faGithub}/>
              </Link>
            </div>
          </div>
          </Container>
        </footer>
      </body>
    </html>
  )
}
