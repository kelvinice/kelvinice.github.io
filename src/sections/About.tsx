import avatar from '@/assets/images/profile.jpg?avatar'
import { Picture } from '@/components/Picture'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { profile } from '@/data/profile'

const level = new Date().getFullYear() - profile.codingSince

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading kicker="Stage 01 · About" title="Select your player" />

      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <Reveal className="pixel-box p-5">
          <div className="flex items-center gap-4">
            <div className="shrink-0 border-3 border-ice bg-bg-2 p-1 shadow-[3px_3px_0_0_var(--shadow)]">
              <Picture
                picture={avatar}
                alt="A glowing ice-blue snowflake, Kelvin's avatar"
                sizes="80px"
                className="size-20 object-cover"
              />
            </div>
            <div className="min-w-0">
              <p className="font-pixel text-sm text-ink">{profile.name}</p>
              <p className="mt-1.5 font-mono text-sm text-muted">@{profile.handle.toLowerCase()}</p>
              <p className="mt-2 inline-block bg-lime px-2 py-1 font-pixel text-[0.55rem] text-on-accent">
                LV {level}
              </p>
            </div>
          </div>

          <dl className="mt-6 space-y-3 border-t-2 border-dashed border-line pt-5">
            {profile.stats.map(({ label, value }) => (
              <div key={label} className="grid grid-cols-[7.5rem_1fr] gap-3 text-sm">
                <dt className="font-mono text-xs tracking-wider text-pink uppercase">{label}</dt>
                <dd className="text-ink">{value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1} className="space-y-5 text-lg leading-relaxed text-muted">
          {profile.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
          <p className="font-mono text-sm text-ice">
            <span aria-hidden>&gt; </span>
            currently: shipping more games
            <span
              aria-hidden
              className="ml-1 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-ice"
            />
          </p>
        </Reveal>
      </div>
    </section>
  )
}
