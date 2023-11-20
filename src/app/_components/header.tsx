'use client'

import Link from 'next/link';
import Container from './container';
import { IconDefinition, faBuilding, faCode, faHouse, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePathname } from 'next/navigation';
import { twMerge } from 'tailwind-merge';
import { URLS } from '../_constants/urls';

interface Links {
  link: string
  label: string
  icon: IconDefinition
}

const links: Links[] = [
  { link: URLS.HOME, label: 'Home', icon: faHouse },
  { link: URLS.ABOUT, label: 'About', icon: faUser },
  { link: URLS.PROFESSIONAL_EXPERIENCE, label: 'Professional Experience', icon: faBuilding },
  { link: URLS.PROJECTS, label: 'Projects', icon: faCode },
];

function Header() {
  const pathname = usePathname()

  return (
    <header>
      <Container>
        <ul className='flex space-x-6'>
          {links.map((link) => (
             <Link
             key={link.label}
             href={link.link}
           >
            <li 
                title={link.label}
                className={
                  twMerge(
                    pathname === link.link && 'bg-zinc-600', 
                    'h-8 w-8 flex items-center justify-center rounded-full',
                    'hover:bg-zinc-500'
                  )
                } 
              >
                <FontAwesomeIcon icon={link.icon}/>
              </li>
            </Link>  
          ))}
        </ul>
      </Container>
    </header>
  );
}

export default Header