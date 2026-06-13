import { Container } from './Container'
import { ContactForm } from './ContactForm'
import { SOCIAL_LINKS } from '../data/social'
import { SocialIcon } from './SocialIcon'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const iconBoxClass =
  'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-transparent bg-zinc-900 text-brand transition-[background-color,border-color,box-shadow,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:border-brand group-hover:bg-brand group-hover:text-zinc-950 group-hover:shadow-[0_0_22px_rgba(0,229,160,0.65),0_0_44px_rgba(0,229,160,0.35)] motion-reduce:group-hover:border-transparent motion-reduce:group-hover:bg-zinc-900 motion-reduce:group-hover:text-brand motion-reduce:group-hover:shadow-none'

const iconClass =
  'h-[1.125rem] w-[1.125rem] text-brand transition-colors duration-300 group-hover:text-zinc-950 sm:h-5 sm:w-5 motion-reduce:group-hover:text-brand'

function ContactLink({ href, label, value, children }) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group mb-4 flex items-start gap-3 last:mb-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand sm:mb-5 sm:gap-4"
    >
      <span className={iconBoxClass}>{children}</span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-sm leading-none text-zinc-500 sm:text-base">{label}</span>
        <span className="mt-0.5 block break-words text-sm font-medium leading-tight text-zinc-300 transition-colors duration-300 group-hover:text-brand sm:text-base">
          {value}
        </span>
      </span>
    </a>
  )
}

export function Contact() {
  const { ref: sectionRef, getRevealProps } = useRevealOnScroll()

  const introBlock = getRevealProps(0)
  const linksBlock = getRevealProps(100)
  const availabilityBlock = getRevealProps(200)
  const formBlock = getRevealProps(150)

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative scroll-mt-20 bg-[#0D0D0D] py-20 sm:py-24 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,229,160,0.08),transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-transparent to-black/40" aria-hidden />

      <Container className="relative">
        <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="flex flex-col gap-10">
            <div {...introBlock}>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand">Get in touch</p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.1] tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let&apos;s Build{' '}
                <span className="bg-gradient-to-r from-brand via-brand to-brand-muted bg-clip-text text-transparent">
                  Something
                </span>{' '}
                Together
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-zinc-400 sm:text-lg">
                I&apos;m open to freelance collaborations, full-time roles, and interesting product work. Tell me
                about your project — I&apos;ll get back to you within 24–48 hours.
              </p>
            </div>

            <div className="flex flex-col" {...linksBlock}>
              {SOCIAL_LINKS.map((link) => (
                <ContactLink
                  key={link.id}
                  href={link.href}
                  label={link.label}
                  value={link.displayValue}
                >
                  <SocialIcon id={link.id} className={iconClass} />
                </ContactLink>
              ))}
            </div>

            <div
              className={`${availabilityBlock.className} inline-flex max-w-md items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/50 px-5 py-4 shadow-[0_8px_32px_-16px_rgba(0,0,0,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/20 motion-reduce:hover:translate-y-0`}
              style={availabilityBlock.style}
            >
              <span className="relative flex h-2.5 w-2.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-40 motion-reduce:animate-none" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand shadow-[0_0_12px_rgba(0,229,160,0.85)]" />
              </span>
              <p className="text-sm leading-snug text-zinc-300">
                Currently available for opportunities starting{' '}
                <strong className="font-semibold text-white">Q2 2026</strong>
              </p>
            </div>
          </div>

          <div {...formBlock}>
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  )
}
