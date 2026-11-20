import { useEffect } from 'react'
import { Navbar, type NavItem } from '@/components/Navbar'
import { showPublications } from '@/data/publications'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Footer } from '@/sections/Footer'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Publications } from '@/sections/Publications'
import { Services } from '@/sections/Services'
import { Work } from '@/sections/Work'

const navItems: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
]

// Sections after the nav items without a link of their own: tracked so no link stays lit there.
const trailingSections = [...(showPublications ? ['writing'] : []), 'contact']

export default function App() {
  // The browser looks for #anchor targets before React renders them, so shared links like
  // /#work-docflow would stay at the top. Jump to the target once the page exists.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1))
    const target = id ? document.getElementById(id) : null
    if (target) requestAnimationFrame(() => target.scrollIntoView({ behavior: 'instant' }))
  }, [])

  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-on-accent focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar items={navItems} trailingSections={trailingSections} />

      <main id="main">
        <Hero />
        <Work />
        <Services />
        <Experience />
        <Projects />
        {showPublications && <Publications />}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
