import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"
import { useSmoothAnchorScroll } from './hooks/useSmoothAnchorScroll'
import { DocumentHead } from './components/DocumentHead'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Technologies } from './components/Technologies'
import { Contact } from './components/Contact'


export default function App() {
  useSmoothAnchorScroll()

  return (
    <div className="relative flex min-h-svh flex-col overflow-x-hidden bg-black">
      <a
        href="#main-content"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:block focus:h-auto focus:w-auto focus:overflow-visible focus:whitespace-normal focus:rounded-lg focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-zinc-950 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-brand"
      >
        Skip to main content
      </a>

      <div className="relative z-10 flex min-h-svh flex-col">
        <Navbar />
        <DocumentHead />
        <main id="main-content" className="flex flex-1 flex-col" tabIndex={-1}>
          <Hero />
          <About />
          <Projects />
          <Technologies />
          <Contact />
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </div>
  )
}
