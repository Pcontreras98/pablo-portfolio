import { ExternalLink } from 'lucide-react'
import { Container } from './Container'
import { SocialIcon } from './SocialIcon'
import { PROJECTS } from '../data/projects'
import { useRevealOnScroll } from '../hooks/useRevealOnScroll'

const tagBadgeClass =
  'inline-flex items-center rounded-full border border-brand/25 bg-brand/10 px-3 py-1 text-xs font-medium text-brand'

const projectCardClass =
  'group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#111111] shadow-[0_12px_40px_-18px_rgba(0,0,0,0.75)] transition duration-500 ease-out hover:-translate-y-2 hover:border-brand/45 hover:shadow-[0_0_28px_rgba(0,229,160,0.22),0_24px_48px_-16px_rgba(0,0,0,0.65)] focus-within:-translate-y-2 focus-within:border-brand/45 focus-within:shadow-[0_0_28px_rgba(0,229,160,0.22),0_24px_48px_-16px_rgba(0,0,0,0.65)] motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:focus-within:translate-y-0'

const overlayClass =
  'absolute inset-0 z-[1] hidden items-center justify-center gap-4 bg-black/60 opacity-0 pointer-events-none transition-opacity duration-300 ease-out md:flex md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:group-focus-within:opacity-100 md:group-focus-within:pointer-events-auto'

const iconButtonClass =
  'inline-flex h-12 w-12 items-center justify-center rounded-full border border-brand/35 bg-brand/15 text-white shadow-[0_8px_24px_-8px_rgba(0,229,160,0.35)] transition duration-300 ease-out hover:scale-110 hover:bg-brand/25 hover:border-brand/55 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:transition-none motion-reduce:hover:scale-100'

const mobileLinkClass =
  'inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-brand/30 bg-brand/10 px-3 py-2.5 text-sm font-semibold text-brand transition-colors duration-200 hover:bg-brand/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand'

const imageFrameDefaultClass = 'relative aspect-[16/10] overflow-hidden bg-neutral-950'

const imageFrameInsetDarkClass =
  'relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-[#1e293b] via-[#0b0e14] to-[#0f172a]'

const imageDefaultClass =
  'h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105 group-focus-within:scale-105 motion-reduce:group-hover:scale-100 motion-reduce:group-focus-within:scale-100'

const imageInsetDarkClass =
  'absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-lg border border-white/[0.06] object-cover object-top shadow-[0_20px_48px_-16px_rgba(0,0,0,0.85)] transition duration-500 ease-out group-hover:scale-[1.02] group-focus-within:scale-[1.02] sm:inset-4 sm:h-[calc(100%-2rem)] sm:w-[calc(100%-2rem)] motion-reduce:group-hover:scale-100 motion-reduce:group-focus-within:scale-100'

function ProjectCard({ project }) {
  const insetDark = project.imageVariant === 'inset-dark'

  return (
    <article className={projectCardClass}>
      <div className={insetDark ? imageFrameInsetDarkClass : imageFrameDefaultClass}>
        {insetDark ? (
          <>
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_20%_0%,rgba(56,189,248,0.12),transparent_55%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_100%_100%,rgba(0,229,160,0.06),transparent_50%)]"
              aria-hidden
            />
          </>
        ) : null}
        <img
          src={project.image}
          alt={project.imageAlt || project.title}
          className={insetDark ? imageInsetDarkClass : imageDefaultClass}
          loading="lazy"
          decoding="async"
        />
        <div className={overlayClass}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonClass}
            aria-label={`View ${project.title} on GitHub`}
          >
            <SocialIcon id="github" className="h-5 w-5" />
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={iconButtonClass}
            aria-label={`Open ${project.title} live demo`}
          >
            <ExternalLink className="h-5 w-5" aria-hidden />
          </a>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6 sm:p-7">
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white sm:text-xl">{project.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400 sm:text-[0.9375rem]">{project.description}</p>
        </div>

        <div className="flex gap-2 md:hidden">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={mobileLinkClass}
          >
            <SocialIcon id="github" className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={mobileLinkClass}
          >
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            Demo
          </a>
        </div>

        <ul className="mt-auto flex flex-wrap gap-2 pt-1" aria-label="Tech stack">
          {project.tags.map((tag) => (
            <li key={tag}>
              <span className={tagBadgeClass}>{tag}</span>
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

export function Projects() {
  const { ref: sectionRef, getRevealProps } = useRevealOnScroll()
  const headerBlock = getRevealProps(0, 'mx-auto max-w-3xl text-center')
  const gridBlock = getRevealProps(
    100,
    'mt-14 grid gap-8 sm:mt-16 md:grid-cols-2 lg:mt-20 lg:grid-cols-3 lg:gap-10',
  )

  return (
    <section ref={sectionRef} id="projects" className="scroll-mt-20 bg-[#0A0A0A] py-16 sm:py-24">
      <Container>
        <header className={headerBlock.className} style={headerBlock.style}>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand">Portfolio</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Featured Work
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-neutral-400 sm:text-base">
            A selection of projects I&apos;ve built while learning and growing as a frontend developer.
          </p>
        </header>

        <div className={gridBlock.className} style={gridBlock.style}>
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  )
}
