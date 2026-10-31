import { useEffect, useState } from 'react'
import { CommandPalette } from '@/components/CommandPalette'
import { Navbar, type NavItem } from '@/components/Navbar'
import { useSpotlight } from '@/hooks/useSpotlight'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Footer } from '@/sections/Footer'
import { Hero } from '@/sections/Hero'
import { Process } from '@/sections/Process'
import { Projects } from '@/sections/Projects'
import { Services } from '@/sections/Services'
import { Stack } from '@/sections/Stack'
import { Work } from '@/sections/Work'

const navItems: NavItem[] = [
  { id: 'work', label: 'Work' },
  { id: 'services', label: 'Services' },
  { id: 'process', label: 'Process' },
  { id: 'experience', label: 'Experience' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Projects' },
]

export default function App() {
  const [commandsOpen, setCommandsOpen] = useState(false)
  useSpotlight()

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandsOpen((value) => !value)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-lg bg-accent px-4 py-2.5 text-sm font-medium text-on-accent focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar items={navItems} onOpenCommands={() => setCommandsOpen(true)} />
      <CommandPalette
        open={commandsOpen}
        onClose={() => setCommandsOpen(false)}
        sections={navItems}
      />

      <main id="main">
        <Hero />
        <Work />
        <Services />
        <Process />
        <Experience />
        <Stack />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
