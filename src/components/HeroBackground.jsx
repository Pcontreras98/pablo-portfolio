import heroBg from '../assets/bg.jpg'

export const heroBgSrc = heroBg
export const heroImagePosition = 'center 10%'
export const heroOverlayClass =
  'absolute inset-0 bg-gradient-to-b from-[#0d0d0d]/70 via-[#0d0d0d]/45 to-black'

export const heroBottomFadeMobile =
  'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.04) 12%, rgba(0,0,0,0.22) 35%, rgba(0,0,0,0.48) 58%, rgba(0,0,0,0.72) 78%, transparent 100%)'

export const heroBottomFadeDesktop =
  'linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.08) 28%, rgba(0,0,0,0.45) 58%, rgba(0,0,0,0.7) 82%, transparent 100%)'

export function HeroBackground() {
  return (
    <div className="relative h-full w-full">
      <img
        src={heroBgSrc}
        alt=""
        role="presentation"
        className="h-full w-full object-cover"
        style={{ objectPosition: heroImagePosition }}
        width={1920}
        height={1080}
        decoding="async"
        fetchPriority="high"
        sizes="100vw"
      />
      <div className={heroOverlayClass} />
    </div>
  )
}

export function NavbarHeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-x-0 top-0 h-svh w-full">
        <HeroBackground />
      </div>
    </div>
  )
}

export function AboutHeroFade() {
  return (
    <div
      className="hero-about-transition pointer-events-none absolute inset-x-0 top-0 z-0 h-[min(52vh,28rem)] sm:h-[min(46vh,26rem)]"
      aria-hidden
    >
      <div className="hero-about-bridge-image absolute inset-0 overflow-hidden">
        <img
          src={heroBgSrc}
          alt=""
          role="presentation"
          className="h-full w-full object-cover"
          style={{ objectPosition: heroImagePosition }}
          width={1920}
          height={1080}
          decoding="async"
          sizes="100vw"
        />
        <div className={heroOverlayClass} />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(0,0,0,0.25)_30%,rgba(13,13,13,0.75)_68%,rgba(13,13,13,0.92)_100%)]" />
    </div>
  )
}
