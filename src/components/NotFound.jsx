import { useEffect } from 'react'
import { ArrowLeft, Home } from 'lucide-react'
import logo from '../assets/logo.png'

export function NotFound() {
  useEffect(() => {
    document.title = '404 | Pablo Contreras'

    let robots = document.head.querySelector('meta[name="robots"]')
    if (!robots) {
      robots = document.createElement('meta')
      robots.setAttribute('name', 'robots')
      document.head.appendChild(robots)
    }
    robots.setAttribute('content', 'noindex, follow')
  }, [])

  return (
    <div className="relative flex min-h-svh flex-col overflow-x-hidden bg-black text-slate-300">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(0,229,160,0.08),transparent)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-zinc-900/40 via-transparent to-black/40" aria-hidden />

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-16 text-center">
        <a href="/" className="mb-10 inline-flex items-center gap-3 transition-opacity duration-200 hover:opacity-90">
          <img src={logo} alt="Pablo Contreras logo" className="h-8 w-8 object-contain" width={32} height={32} />
          <span className="text-base font-semibold tracking-tight text-white sm:text-lg">Pablo Contreras</span>
        </a>

        <p className="text-7xl font-bold tabular-nums tracking-tight text-white sm:text-8xl">
          4
          <span className="bg-gradient-to-r from-brand to-brand-muted bg-clip-text text-transparent">0</span>
          4
        </p>

        <h1 className="mt-4 text-2xl font-bold tracking-tight text-white sm:text-3xl">Page not found</h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>

        <div className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center">
          <a
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-3.5 text-base font-semibold text-[#0d0d0d] transition-all duration-200 hover:scale-105 hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand motion-reduce:hover:scale-100"
          >
            <Home className="h-4 w-4 shrink-0" aria-hidden />
            Back to Home
          </a>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-brand/40 px-8 py-3.5 text-base font-semibold text-brand transition-all duration-200 hover:bg-brand/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand"
          >
            <ArrowLeft className="h-4 w-4 shrink-0" aria-hidden />
            Contact Me
          </a>
        </div>
      </main>
    </div>
  )
}
