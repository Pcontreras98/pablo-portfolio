import { ArrowUp } from 'lucide-react'
import { Container } from './Container'

const footerLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
]

const footerLinkClass =
  'text-sm text-zinc-500 transition-colors duration-200 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] py-8 sm:py-10">
      <Container>
        <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:text-left">
          <p className="text-sm text-zinc-500">
            © {year} Pablo Contreras. Built with passion &amp; React.
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8" aria-label="Footer">
            {footerLinks.map((item) => (
              <a key={item.href} href={item.href} className={footerLinkClass}>
                {item.label}
              </a>
            ))}
          </nav>

          <a href="#hero" className={`${footerLinkClass} inline-flex items-center gap-1.5`}>
            <ArrowUp className="h-4 w-4 shrink-0" aria-hidden />
            Back to top
          </a>
        </div>
      </Container>
    </footer>
  )
}
