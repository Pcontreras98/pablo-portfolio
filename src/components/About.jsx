import { Container } from './Container'
import { AboutHeroFade } from './HeroBackground'
import cardBg from '../assets/card-bg.jpg'
import avatar from '../assets/pablo-photo.jpg'
import { PERSON_FULL_NAME } from '../config/seo'
import { SOCIAL_LINKS } from '../data/social'
import { TECHNOLOGIES } from '../data/technologies'
import { SocialIcon } from './SocialIcon'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const stats = [
  { value: '2024', label: 'Started Coding Journey' },
  { value: '10+', label: 'Projects' },
  { value: `${TECHNOLOGIES.length}+`, label: 'Technologies' },
]

const socialIconIds = ['github', 'linkedin', 'email']

export function About() {
  const { ref: sectionRef, getRevealProps } = useRevealOnScroll()
  const introBlock = getRevealProps(0)
  const statsBlock = getRevealProps(100)
  const cardBlock = getRevealProps(150)

  return (
    <section ref={sectionRef} id="about" className="relative scroll-mt-20 overflow-hidden bg-transparent py-24">
      <AboutHeroFade />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,transparent_14%,rgba(13,13,13,0.55)_26%,#0D0D0D_38%,#0D0D0D_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-[min(52vh,28rem)] h-32 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(45,212,191,0.04),transparent_70%)] sm:top-[min(46vh,26rem)]"
        aria-hidden
      />

      <Container className="relative z-10">
        <div className="grid gap-14 sm:gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <div {...introBlock}>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand sm:text-xs">Who I Am</p>
              <h2 className="mt-4 text-[2.25rem] font-bold leading-tight tracking-tight text-white sm:mt-3 sm:text-4xl lg:text-5xl">
                <span className="text-white">From Systems </span>
                <span className="bg-gradient-to-r from-brand-muted to-brand bg-clip-text text-transparent">to Code</span>
              </h2>

              <div className="mt-10 space-y-5 text-lg leading-relaxed text-zinc-400 sm:mt-8 sm:space-y-4 sm:text-base">
                <p>
                  I started in systems engineering, where I learned to think in terms of structure, reliability, and how
                  pieces fit together. That mindset carried straight into software: the same curiosity about how things
                  work, just applied to the web.
                </p>
                <p>
                  Moving into frontend development felt like a natural step. I enjoy turning ideas into interfaces people
                  can actually use—layout, motion, and clarity matter as much as the logic underneath.
                </p>
                <p>
                  Today I work with HTML, CSS, and JavaScript, and I am deepening my stack with React and TypeScript. I
                  care about responsive design, accessibility, and writing code that is easy to maintain as projects grow.
                </p>
              </div>
            </div>

            <div className={`${statsBlock.className} mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4`} style={statsBlock.style}>
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-white/5 border-l-4 border-l-brand bg-zinc-900/60 px-4 py-4 backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold tabular-nums text-white">{item.value}</p>
                  <p className="mt-1.5 text-base text-zinc-400 sm:mt-1 sm:text-sm">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:sticky lg:top-24" {...cardBlock}>
            <div className="mx-auto w-full max-w-[380px] overflow-hidden rounded-[1.75rem] border border-white/[0.06] bg-[#0A0A0A] shadow-[0_16px_40px_-12px_rgba(0,0,0,0.85),0_8px_20px_-8px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.04)] transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-14px_rgba(0,0,0,0.9),0_16px_32px_-12px_rgba(0,0,0,0.65),0_0_48px_-10px_rgba(0,229,160,0.15)] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
              <div className="relative h-40 overflow-hidden sm:h-44">
                <div
                  className="absolute inset-0 scale-105 bg-cover bg-center blur-[1.5px] brightness-90"
                  style={{ backgroundImage: `url(${cardBg})` }}
                  aria-hidden
                />
                <div className="absolute inset-0 bg-brand/[0.07] mix-blend-soft-light" aria-hidden />
                <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-[#0A0A0A]/55 to-[#0A0A0A]" aria-hidden />
              </div>

              <div className="relative flex flex-col items-center px-7 pb-9 pt-0 sm:px-8">
                <div className="-mt-[4.5rem] sm:-mt-20">
                  <div className="relative">
                    <div
                      className="absolute -inset-0.5 rounded-full bg-gradient-to-br from-brand/70 to-brand-muted/50 opacity-90 blur-[2px]"
                      aria-hidden
                    />
                    <img
                      src={avatar}
                      alt="Pablo Contreras profile"
                      className="relative h-[7.75rem] w-[7.75rem] rounded-full border-[3px] border-brand/90 object-cover object-top shadow-[0_16px_40px_-12px_rgba(0,0,0,0.85),0_0_24px_-4px_rgba(0,229,160,0.35)] sm:h-[8.75rem] sm:w-[8.75rem]"
                      width={140}
                      height={140}
                      decoding="async"
                    />
                  </div>
                </div>

                <h3 className="mt-6 text-center text-[1.625rem] font-bold tracking-tight text-white sm:mt-5 sm:text-2xl">
                  Pablo Contreras
                </h3>
                <p className="mt-1 text-center text-sm text-zinc-500">{PERSON_FULL_NAME}</p>
                <p className="mt-2 text-center text-lg font-medium text-brand sm:mt-1.5 sm:text-[0.9375rem]">
                  Frontend Developer <span className="text-brand/70">•</span> Peru
                </p>

                <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
                  {socialIconIds.map((id) => {
                    const link = SOCIAL_LINKS.find((item) => item.id === id)
                    const isExternal = link.href.startsWith('http')

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.06] bg-[#141414] text-brand/90 transition-all duration-200 hover:border-brand hover:bg-[#1a1a1a] hover:text-brand-hover"
                        aria-label={link.label}
                      >
                        <SocialIcon id={id} />
                      </a>
                    )
                  })}
                </div>

                <div className="mt-8 inline-flex w-full max-w-[19rem] items-center justify-center rounded-full border border-brand/40 bg-brand/10 px-5 py-2.5">
                  <span className="inline-flex items-center justify-center gap-2.5 text-base font-medium text-brand sm:text-sm">
                    <span className="relative flex h-2 w-2 shrink-0">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-45 motion-reduce:animate-none" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-brand shadow-[0_0_8px_rgba(0,229,160,0.9)]" />
                    </span>
                    Available for Work
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
