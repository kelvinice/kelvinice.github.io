import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m } from 'motion/react'
import { useEffect, useState } from 'react'
import { Navbar, type NavItem } from '@/components/Navbar'
import { PixelSnow } from '@/components/PixelSnow'
import { useKonamiCode } from '@/hooks/useKonamiCode'
import { experience } from '@/data/experience'
import { publications } from '@/data/publications'
import { About } from '@/sections/About'
import { Contact } from '@/sections/Contact'
import { Experience } from '@/sections/Experience'
import { Footer } from '@/sections/Footer'
import { Hero } from '@/sections/Hero'
import { Projects } from '@/sections/Projects'
import { Publications } from '@/sections/Publications'
import { Skills } from '@/sections/Skills'

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  ...(experience.length > 0 ? [{ id: 'experience', label: 'Experience' }] : []),
  ...(publications.length > 0 ? [{ id: 'books', label: 'Books' }] : []),
  { id: 'contact', label: 'Contact' },
]

export default function App() {
  const [blizzard, setBlizzard] = useState(false)
  const [toast, setToast] = useState<string | null>(null)

  useKonamiCode(() => {
    setBlizzard((on) => !on)
    setToast(blizzard ? 'Blizzard off' : 'Blizzard mode!')
  })

  useEffect(() => {
    if (!toast) return
    const timer = setTimeout(() => setToast(null), 2500)
    return () => clearTimeout(timer)
  }, [toast])

  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>
        <a
          href="#main"
          className="fixed top-3 left-3 z-50 -translate-y-24 bg-ice px-4 py-3 font-pixel text-xs text-on-accent focus:translate-y-0"
        >
          Skip to content
        </a>

        <Navbar items={navItems} />

        <main id="main">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Publications />
          <Contact />
        </main>

        <Footer />

        {blizzard && (
          <div className="pointer-events-none fixed inset-0 z-30">
            <PixelSnow density={6} />
          </div>
        )}

        <AnimatePresence>
          {toast && (
            <m.div
              role="status"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 border-3 border-shadow bg-gold px-5 py-3 font-pixel text-xs text-on-accent shadow-[4px_4px_0_0_var(--shadow)]"
            >
              {toast}
            </m.div>
          )}
        </AnimatePresence>
      </LazyMotion>
    </MotionConfig>
  )
}
