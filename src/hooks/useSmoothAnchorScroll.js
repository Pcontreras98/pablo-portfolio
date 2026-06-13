import { useEffect } from 'react'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useSmoothAnchorScroll() {
  useEffect(() => {
    function onClick(event) {
      const link = event.target.closest('a[href^="#"]')
      if (!link) return

      const href = link.getAttribute('href')
      if (!href || href === '#') return

      const id = href.slice(1)
      const target = document.getElementById(id)
      if (!target) return

      event.preventDefault()
      target.scrollIntoView({
        behavior: prefersReducedMotion() ? 'auto' : 'smooth',
        block: 'start',
      })
      history.pushState(null, '', href)
    }

    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])
}
