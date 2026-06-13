import { useEffect, useState } from 'react'
import { Container } from './Container'
import { NavbarHeroBackground } from './HeroBackground'
import logo from '../assets/logo.png'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const CV_PATH = '/cv-pablo-contreras.pdf'

const navLinkClass =
  'text-sm font-medium text-zinc-400 transition-colors duration-200 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

const resumeLinkClass =
  'text-sm font-medium text-white transition-colors duration-200 hover:text-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

const hireButtonClass =
  'inline-flex items-center justify-center rounded-full bg-brand px-6 py-2.5 text-sm font-semibold text-zinc-950 transition-all duration-300 ease-out hover:bg-brand-hover hover:shadow-[0_0_20px_rgba(0,229,160,0.22)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 32)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    function onKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [menuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50 overflow-hidden transition-colors duration-300 ease-out">
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-300 ease-out motion-reduce:transition-none ${
          scrolled ? 'opacity-100' : 'opacity-0'
        }`}
        aria-hidden
      >
        <NavbarHeroBackground />
      </div>

      <Container className="relative z-10 flex h-20 items-center justify-between gap-6">
        <a
          href="#hero"
          className="group flex min-w-0 shrink-0 items-center gap-3 transition-opacity duration-200 hover:opacity-90"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={logo}
            alt="Pablo Contreras logo"
            className="h-8 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            width={32}
            height={32}
            decoding="async"
          />
          <span className="whitespace-nowrap text-base font-semibold tracking-tight text-white sm:text-lg">
            Pablo Contreras
          </span>
        </a>

        <nav className="hidden h-full items-center gap-8 md:flex" aria-label="Primary">
          {navLinks.map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </a>
          ))}
          <a
            href={CV_PATH}
            download
            target="_blank"
            rel="noopener noreferrer"
            className={resumeLinkClass}
          >
            Resume
          </a>
          <a href="#contact" className={`${hireButtonClass} ml-1`}>
            Hire Me
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-zinc-300 transition-colors duration-200 hover:bg-white/5 hover:text-brand md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </Container>

      <div id="mobile-menu" className={`relative z-10 md:hidden ${menuOpen ? 'block' : 'hidden'}`}>
        <Container className="flex flex-col gap-2 pb-6 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`${navLinkClass} rounded-xl px-4 py-3.5 transition-colors duration-200 hover:bg-white/[0.04]`}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={CV_PATH}
              download
              target="_blank"
              rel="noopener noreferrer"
              className={`${resumeLinkClass} rounded-xl px-4 py-3.5 transition-colors duration-200 hover:bg-white/[0.04]`}
              onClick={() => setMenuOpen(false)}
            >
              Resume
            </a>
          </nav>
          <a href="#contact" className={`${hireButtonClass} mt-3 w-full`} onClick={() => setMenuOpen(false)}>
            Hire Me
          </a>
        </Container>
      </div>
    </header>
  )
}
