import { Navbar, type NavItem } from '@/components/Navbar'
import { publications } from '@/data/publications'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Footer } from '@/sections/Footer'
import { Hero } from '@/sections/Hero'
import { Process } from '@/sections/Process'
import { Projects } from '@/sections/Projects'
import { Publications } from '@/sections/Publications'
import { Services } from '@/sections/Services'
import { Stack } from '@/sections/Stack'
import { Work } from '@/sections/Work'

const navItems: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  ...(publications.length > 0 ? [{ id: 'writing', label: 'Writing' }] : []),
]

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-on-accent focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar items={navItems} />

      <main id="main">
        <Hero />
        <Work />
        <Services />
        <Process />
        <Experience />
        <Stack />
        <Projects />
        <Publications />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
