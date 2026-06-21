/** Production domain — no trailing slash. Update here only when the domain changes. */
export const SITE_URL = 'https://pablocontreras.dev'

export const PERSON_FULL_NAME = 'Pablo Martin Contreras Niño'
export const PERSON_DISPLAY_NAME = 'Pablo Contreras'

export const SITE_SEO = {
  title: `${PERSON_FULL_NAME} | Frontend Developer`,
  description: `Portfolio of ${PERSON_FULL_NAME}, a frontend developer from Peru. I build clean, responsive, and accessible web experiences with React, TypeScript, JavaScript, and modern CSS.`,
  keywords: [
    PERSON_FULL_NAME,
    PERSON_DISPLAY_NAME,
    'frontend developer',
    'React developer',
    'web developer Peru',
    'portfolio',
    'JavaScript',
    'responsive design',
    'accessible web',
  ].join(', '),
  author: PERSON_FULL_NAME,
  siteName: PERSON_DISPLAY_NAME,
  locale: 'en_US',
  themeColor: '#0d0d0d',
  ogImage: '/og-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: `${PERSON_DISPLAY_NAME} — Frontend Developer. React, TypeScript, JavaScript portfolio banner.`,
  twitterCard: 'summary_large_image',
  email: 'pablomartincontrerasnino@gmail.com',
  github: 'https://github.com/Pcontreras98',
  linkedin: 'https://linkedin.com/in/pcontreras98',
}

export function absoluteUrl(path) {
  const base = SITE_URL.replace(/\/$/, '')
  const normalizedPath = path.startsWith('/') ? path : `/${path}`
  return `${base}${normalizedPath}`
}
