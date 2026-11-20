import { useCallback, useEffect, useState } from 'react'
import { Lightbox, type LightboxItem } from '@/components/Lightbox'
import { Navbar, type NavItem } from '@/components/Navbar'
import { PixelSnow } from '@/components/PixelSnow'
import { experience } from '@/data/experience'
import { publications } from '@/data/publications'
import { useKonamiCode } from '@/hooks/useKonamiCode'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Footer } from '@/sections/Footer'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Publications } from '@/sections/Publications'
import { Skills } from '@/sections/Skills'

const navItems: NavItem[] = [
  { id: 'projects', label: 'Work' },
  ...(publications.length > 0 ? [{ id: 'books', label: 'Books' }] : []),
  ...(experience.length > 0 ? [{ id: 'experience', label: 'Experience' }] : []),
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [snow, setSnow] = useState(false)
  const [toast, setToast] = useState<string | null>(null)
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null)

  const toggleSnow = useCallback(() => {
    setSnow((on) => {
      const next = !on
      setToast(next ? 'Snow mode enabled' : 'Snow mode off')
      return next
    })
  }, [])

  useKonamiCode(toggleSnow)

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 2400)
    return () => clearTimeout(timer)
  }, [toast])

  return (
    <>
      <a
        href="#main"
        className="fixed top-3 left-3 z-50 -translate-y-24 rounded-sm bg-accent px-4 py-2 text-xs font-medium text-on-accent focus:translate-y-0"
      >
        Skip to content
      </a>

      <Navbar items={navItems} />

      <main id="main">
        <Hero onInspectImage={setLightbox} />
        <Projects onInspectImage={setLightbox} />
        <Publications />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>

      <Footer onToggleSnow={toggleSnow} />

      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />

      {snow && (
        <div className="pointer-events-none fixed inset-0 z-30">
          <PixelSnow density={5} />
        </div>
      )}

      {toast && (
        <div
          role="status"
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 animate-fade-in rounded-sm border border-line bg-surface px-4 py-2 font-mono text-xs text-ink shadow-lg"
        >
          {toast}
        </div>
      )}
    </>
  )
}
