const URLS = {
  ABOUT: '/about',
  PROFESSIONAL_EXPERIENCE: '/professional-experience',
  PROJECTS: '/projects',
  HOME: '/'
}

const PROJECT_URLS = {
  DAD_JOKES: `${URLS.PROJECTS}/dad-jokes`,
  KUBRIC: `${URLS.PROJECTS}/kubric`,
  MADDEN_FRANCHISE_EXPORT: `${URLS.PROJECTS}/madden-franchise-export`,
  TMREV: `${URLS.PROJECTS}/tmrev`
}

const GITHUB_URLS = {
  DAD_JOKES: 'https://github.com/DadJokes-io/Dad_Jokes_API',
  KUBRIC: 'https://github.com/tmrev/kubrick',
  MADDEN_FRANCHISE_EXPORT: 'https://github.com/KegenGuyll/madden-franchise-export',
  TMREV: 'https://github.com/tmrev/tmrev.io'
}

const WEB_URLS = {
  DAD_JOKES: 'https://dadjokes.io',
  KUBRIC: null,
  MADDEN_FRANCHISE_EXPORT: null,
  TMREV: 'https://tmrev.io'
}

const calendarInvite = 'https://calendly.com/guyllkegen/introduction-call'

const emailAddress = 'guyllkegen@gmail.com'

export { 
  URLS, 
  calendarInvite, 
  emailAddress, 
  PROJECT_URLS, 
  GITHUB_URLS,
  WEB_URLS
}