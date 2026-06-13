import { TabletSmartphone } from 'lucide-react'
import {
  siCss,
  siGit,
  siHtml5,
  siJavascript,
  siReact,
  siTailwindcss,
  siTypescript,
} from 'simple-icons'
import { Container } from './Container'
import { TECHNOLOGIES } from '../data/technologies'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const brandIcons = {
  html5: siHtml5,
  css3: siCss,
  javascript: siJavascript,
  react: siReact,
  git: siGit,
  typescript: siTypescript,
  tailwind: siTailwindcss,
}

const techCardClass =
  'group flex min-h-[11.75rem] flex-col rounded-2xl border border-white/[0.06] bg-[#121212] p-5 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-brand/35 sm:min-h-[12.5rem] sm:p-6 motion-reduce:transition-none motion-reduce:hover:translate-y-0'

function TechIcon({ iconKey }) {
  if (iconKey === 'responsive') {
    return (
      <TabletSmartphone className="h-7 w-7 text-sky-400" strokeWidth={1.75} aria-hidden />
    )
  }

  const icon = brandIcons[iconKey]
  if (!icon) return null

  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" aria-hidden>
      <path fill={`#${icon.hex}`} d={icon.path} />
    </svg>
  )
}

function TechCard({ tech }) {
  const percent = Math.min(100, Math.max(0, tech.proficiency))

  return (
    <article className={techCardClass}>
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1E1E1E]">
        <TechIcon iconKey={tech.iconKey} />
      </div>

      <h3 className="mt-4 text-base font-bold leading-tight tracking-tight text-white sm:text-lg">
        {tech.name}
      </h3>

      <div className="mt-auto pt-4">
        <div className="h-2 w-full overflow-hidden rounded-full bg-[#2a2a2a]">
          <div
            className="h-full rounded-full bg-brand transition-[width] duration-500 ease-out motion-reduce:transition-none"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-2 flex items-center justify-between gap-2 text-xs leading-none">
          <span className="font-medium text-zinc-500">Proficiency</span>
          <span className="font-semibold tabular-nums text-brand">{percent}%</span>
        </div>
      </div>
    </article>
  )
}

export function Technologies() {
  const { ref: sectionRef, getRevealProps } = useRevealOnScroll()
  const headerBlock = getRevealProps(0, 'mx-auto max-w-3xl text-center')
  const gridBlock = getRevealProps(
    100,
    'mt-16 grid grid-cols-2 gap-4 sm:mt-20 sm:gap-6 lg:mt-24 lg:grid-cols-4 lg:gap-7',
  )
  const footerBlock = getRevealProps(
    150,
    'mx-auto mt-14 max-w-3xl text-center text-sm text-neutral-500 sm:mt-16 sm:text-base',
  )

  return (
    <section ref={sectionRef} id="skills" className="scroll-mt-20 bg-[#0D0D0D] py-16 sm:py-24">
      <Container>
        <header className={headerBlock.className} style={headerBlock.style}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">Expertise</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Technologies &amp; Tools
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            The technologies I work with daily and continue to deepen my understanding of.
          </p>
        </header>

        <div className={gridBlock.className} style={gridBlock.style}>
          {TECHNOLOGIES.map((tech) => (
            <TechCard key={tech.id} tech={tech} />
          ))}
        </div>

        <p className={footerBlock.className} style={footerBlock.style}>
          Always learning.{' '}
          <span className="font-semibold text-brand">Next up: Node.js, Next.js, and Testing.</span>
        </p>
      </Container>
    </section>
  )
}
