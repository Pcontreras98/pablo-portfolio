import { useEffect } from 'react'
import { PERSON_DISPLAY_NAME, SITE_SEO, SITE_URL, absoluteUrl } from '../config/seo'

function setMeta(attr, key, content) {
  if (!content) return
  let element = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let element = document.head.querySelector(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.setAttribute('rel', rel)
    document.head.appendChild(element)
  }
  element.setAttribute('href', href)
}

export function DocumentHead() {
  useEffect(() => {
    const ogImage = absoluteUrl(SITE_SEO.ogImage)

    document.title = SITE_SEO.title
    document.documentElement.lang = 'en'

    setMeta('name', 'description', SITE_SEO.description)
    setMeta('name', 'keywords', SITE_SEO.keywords)
    setMeta('name', 'author', SITE_SEO.author)
    setMeta('name', 'theme-color', SITE_SEO.themeColor)
    setMeta('name', 'robots', 'index, follow')

    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:site_name', SITE_SEO.siteName)
    setMeta('property', 'og:url', absoluteUrl('/'))
    setMeta('property', 'og:title', SITE_SEO.title)
    setMeta('property', 'og:description', SITE_SEO.description)
    setMeta('property', 'og:image', ogImage)
    setMeta('property', 'og:image:alt', SITE_SEO.ogImageAlt)
    setMeta('property', 'og:image:width', String(SITE_SEO.ogImageWidth))
    setMeta('property', 'og:image:height', String(SITE_SEO.ogImageHeight))
    setMeta('property', 'og:locale', SITE_SEO.locale)

    setMeta('name', 'twitter:card', SITE_SEO.twitterCard)
    setMeta('name', 'twitter:title', SITE_SEO.title)
    setMeta('name', 'twitter:description', SITE_SEO.description)
    setMeta('name', 'twitter:image', ogImage)
    setMeta('name', 'twitter:image:alt', SITE_SEO.ogImageAlt)

    setLink('canonical', absoluteUrl('/'))

    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: SITE_SEO.author,
      alternateName: PERSON_DISPLAY_NAME,
      url: SITE_URL,
      image: ogImage,
      jobTitle: 'Frontend Developer',
      email: `mailto:${SITE_SEO.email}`,
      sameAs: [SITE_SEO.github, SITE_SEO.linkedin],
    }

    let script = document.head.querySelector('script[data-seo-jsonld]')
    if (!script) {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.setAttribute('data-seo-jsonld', '')
      document.head.appendChild(script)
    }
    script.textContent = JSON.stringify(jsonLd)
  }, [])

  return null
}
