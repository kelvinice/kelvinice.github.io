import { ChevronDown, FileDown, Play } from 'lucide-react'
import { m } from 'motion/react'
import { PixelLink } from '@/components/PixelButton'
import { PixelSnow } from '@/components/PixelSnow'
import { SocialIcon } from '@/components/SocialIcon'
import { profile } from '@/data/profile'
import { projects } from '@/data/projects'

const count = (category: string) =>
  String(projects.filter((p) => p.category === category).length).padStart(2, '0')

const hud = [
  { label: 'GAMES', value: count('game') },
  { label: 'APPS', value: count('app') },
  { label: 'TOOLS', value: count('tool') },
  { label: 'SINCE', value: String(profile.codingSince) },
]

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate flex min-h-svh items-center overflow-hidden bg-linear-to-b from-bg via-bg-2 to-bg pt-16"
    >
      {/* Horizon: pixel sun + grid floor */}
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-[42%]">
        <div className="absolute bottom-full left-1/2 aspect-square w-[min(70vw,460px)] -translate-x-1/2 translate-y-1/2 rounded-full bg-linear-to-b from-gold via-pink to-pink/0 [mask-image:repeating-linear-gradient(to_bottom,black_0_14px,transparent_14px_20px)] opacity-20 [clip-path:inset(0_0_50%_0)] dark:opacity-25" />
        <div className="absolute inset-x-[-50%] top-0 h-full grid-floor" />
        <div className="absolute inset-x-0 top-0 h-px bg-ice/50 shadow-[0_0_24px_4px_var(--ice)]" />
      </div>
      <PixelSnow className="-z-10" />

      <div className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6">
        <m.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mx-auto flex max-w-3xl flex-col items-center text-center"
        >
          <p className="mb-6 inline-flex items-center gap-2 border-2 border-line bg-surface/70 px-3 py-1.5 font-mono text-xs tracking-widest text-muted uppercase backdrop-blur">
            <span className="size-2 animate-blink bg-lime" aria-hidden />
            Player 1 · ready
          </p>

          <h1 className="font-pixel text-[clamp(1.9rem,8.5vw,4.5rem)] leading-tight text-ice text-glow">
            {profile.handle.toUpperCase()}
          </h1>

          <p className="mt-6 font-mono text-sm text-pink sm:text-base">
            {profile.name} · {profile.role}
          </p>
          <p className="mt-3 max-w-xl text-xl text-balance text-ink sm:text-2xl">
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <PixelLink href="#projects" size="lg">
              <Play aria-hidden />
              Press start
            </PixelLink>
            <PixelLink href="#contact" size="lg" variant="secondary">
              Contact
            </PixelLink>
            {profile.resumeUrl && (
              <PixelLink href={profile.resumeUrl} size="lg" variant="secondary" download>
                <FileDown aria-hidden />
                CV
              </PixelLink>
            )}
          </div>

          <dl className="mt-12 grid grid-cols-4 gap-x-4 gap-y-1 border-y-2 border-line/70 px-2 py-3 font-pixel sm:gap-x-10">
            {hud.map(({ label, value }) => (
              <div key={label} className="flex flex-col-reverse items-center gap-2">
                <dt className="text-[0.5rem] text-muted sm:text-[0.55rem]">{label}</dt>
                <dd className="text-xs text-gold sm:text-sm">{value}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-8 flex gap-3" aria-label="Find me on">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(social.href.startsWith('http')
                    ? { target: '_blank', rel: 'noreferrer' }
                    : {})}
                  aria-label={social.label}
                  title={social.label}
                  className="flex size-11 items-center justify-center border-2 border-line bg-surface/70 text-muted backdrop-blur transition-colors hover:border-ice hover:text-ice"
                >
                  <SocialIcon icon={social.icon} className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </m.div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 font-pixel text-[0.55rem] text-muted transition-colors hover:text-ice"
      >
        <span className="animate-blink">Scroll</span>
        <ChevronDown className="size-4 animate-float" aria-hidden />
      </a>
    </section>
  )
}
