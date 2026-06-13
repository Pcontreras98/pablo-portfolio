import { TypeAnimation } from 'react-type-animation'
import {
  HeroBackground,
  heroBottomFadeDesktop,
  heroBottomFadeMobile,
} from './HeroBackground'

const typingPhrases = ['React Developer', 'Lifelong Learner']
const typingSequence = [typingPhrases[0], 2200, typingPhrases[1], 2200]
const typeSpeed = { type: 'keyStrokeDelayInMs', value: 75 }
const deleteSpeed = { type: 'keyStrokeDelayInMs', value: 42 }

const subtitleClass =
  'hero-type-animation inline-block min-w-[11ch] text-center text-2xl font-light text-[#c0c0c0] md:min-w-[17ch] md:text-3xl'

const primaryButtonClass =
  'flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-[#0d0d0d] transition-all duration-200 hover:scale-105 hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:hover:scale-100'

const secondaryButtonClass =
  'flex cursor-pointer items-center justify-center whitespace-nowrap rounded-full border border-brand/40 px-8 py-3.5 text-base font-semibold text-brand transition-all duration-200 hover:bg-brand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

function HeroAvailabilityBadge() {
  return (
    <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/5 px-4 py-2">
      <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-brand motion-reduce:animate-none" aria-hidden />
      <span className="text-xs font-semibold uppercase tracking-widest text-brand">
        Open to opportunities
      </span>
    </div>
  )
}

function HeroScrollIndicator() {
  return (
    <a
      href="#about"
      className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-[#555] transition-colors hover:text-[#777] motion-reduce:animate-none max-sm:bottom-8 sm:animate-bounce"
      aria-label="Scroll to about section"
    >
      <span className="text-xs uppercase tracking-widest">Scroll</span>
      <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
      </svg>
    </a>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <HeroBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/55 sm:hidden" />
        <div
          className="absolute inset-x-0 bottom-0 h-52 max-sm:block sm:hidden"
          style={{ background: heroBottomFadeMobile }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(ellipse_90%_100%_at_50%_100%,rgba(45,212,191,0.07),transparent_72%)] max-sm:block sm:hidden"
        />
        <div
          className="absolute inset-x-0 bottom-0 hidden h-52 sm:block md:h-64"
          style={{ background: heroBottomFadeDesktop }}
        />
        <div className="absolute inset-x-0 bottom-0 hidden h-28 bg-[radial-gradient(ellipse_70%_100%_at_50%_100%,rgba(45,212,191,0.05),transparent_70%)] sm:block sm:h-40 md:h-48" />
      </div>

      <div
        className="pointer-events-none absolute top-1/3 left-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/5 blur-[120px]"
        aria-hidden
      />

      <div className="hero-content-enter relative z-10 mx-auto w-full max-w-5xl px-6 text-center md:px-10">
        <HeroAvailabilityBadge />

        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-4 tracking-tight">
          Hi, I&apos;m{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand to-brand-muted">
            Pablo Contreras
          </span>
        </h1>

        <div className="mb-6 flex h-12 items-center justify-center">
          <span className="sr-only">Rotating subtitle: {typingPhrases.join(' and ')}.</span>
          <TypeAnimation
            sequence={typingSequence}
            wrapper="span"
            speed={typeSpeed}
            deletionSpeed={deleteSpeed}
            repeat={Infinity}
            cursor
            preRenderFirstString={false}
            className={subtitleClass}
            aria-hidden
          />
        </div>

        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-[#8a8a8a] md:text-xl">
          Systems engineer turned frontend developer. I build clean, responsive, and accessible web experiences — and I&apos;m just getting started.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="#projects" className={primaryButtonClass}>
            View My Work
            <svg className="h-4 w-4 shrink-0" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#contact" className={secondaryButtonClass}>
            Contact Me
          </a>
        </div>
      </div>

      <HeroScrollIndicator />
    </section>
  )
}
