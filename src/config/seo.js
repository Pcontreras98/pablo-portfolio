/** Production domain — no trailing slash. Update here only when the domain changes. */
export const SITE_URL = 'https://pablocontreras.dev'

export const SITE_SEO = {
  title: 'Pablo Contreras | Frontend Developer',
  description:
    'Frontend developer from Peru. I build clean, responsive, and accessible web experiences with React, JavaScript, and modern CSS.',
  keywords: [
    'Pablo Contreras',
    'frontend developer',
    'React developer',
    'web developer Peru',
    'portfolio',
    'JavaScript',
    'responsive design',
    'accessible web',
  ].join(', '),
  author: 'Pablo Contreras',
  siteName: 'Pablo Contreras',
  locale: 'en_US',
  themeColor: '#0d0d0d',
  ogImage: '/og-image.jpg',
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: 'Pablo Contreras — Frontend Developer portfolio',
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
