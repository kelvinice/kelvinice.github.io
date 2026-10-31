import { ArrowDown, ArrowUpRight, CircleCheck, MapPin } from 'lucide-react'
import { Picture } from '@/components/Picture'
import { SocialIcon } from '@/components/SocialIcon'
import { TechMarquee } from '@/components/TechMarquee'
import { profile } from '@/data/profile'
import { useTypewriter } from '@/hooks/useTypewriter'
import { buttonClass } from '@/lib/button'

export function Hero() {
  const links = profile.socials.filter((social) => social.icon !== 'email')
  const typed = useTypewriter(profile.buildWords)

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-48 left-[10%] size-[32rem] animate-drift rounded-full bg-accent/12 blur-3xl" />
        <div className="absolute top-1/3 right-[-8rem] size-[26rem] animate-drift rounded-full bg-ok/8 blur-3xl [animation-delay:-9s]" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-32 pb-16 sm:px-6 md:pt-40 md:pb-24 lg:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <p aria-hidden className="mb-5 font-mono text-sm text-muted">
            <span className="text-accent">~/jakarta</span> $ whoami
          </p>

          <h1 className="text-sm font-medium text-muted">
            <span className="text-ink">{profile.name}</span>
            <span aria-hidden> · </span>
            <span className="sr-only">, </span>
            {profile.role}
          </h1>

          <p className="mt-4 text-4xl leading-[1.1] font-semibold tracking-tight text-ink sm:text-5xl md:text-6xl">
            <span className="sr-only">
              I build {profile.buildWords.join(', ')} that teams rely on.
            </span>
            <span aria-hidden>
              I build
              <span className="block min-h-[1.1em] whitespace-nowrap text-accent">
                {typed}
                <span className="ml-1 inline-block h-[0.85em] w-[0.08em] translate-y-[0.1em] animate-caret bg-accent" />
              </span>
              that teams rely on.
            </span>
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#contact" className={buttonClass({ size: 'lg' })}>
              Start a project
              <ArrowUpRight aria-hidden />
            </a>
            <a href="#work" className={buttonClass({ variant: 'secondary', size: 'lg' })}>
              View selected work
              <ArrowDown aria-hidden />
            </a>
            <div className="flex items-center gap-1 sm:ml-2">
              {links.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.label}
                  title={social.label}
                  className={buttonClass({
                    variant: 'ghost',
                    size: 'icon',
                    className: 'size-11 [&_svg]:size-5',
                  })}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-line pt-8">
            {profile.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse justify-end">
                <dt className="mt-1 text-sm leading-snug text-muted">{stat.label}</dt>
                <dd className="text-3xl font-semibold tracking-tight text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <figure className="relative mx-auto w-56 sm:w-64 lg:mx-0 lg:w-72">
          <div
            aria-hidden
            className="absolute -inset-3 rotate-3 rounded-[2rem] border border-line bg-surface/60"
          />
          <Picture
            picture={profile.photo}
            alt={`Portrait of ${profile.name}`}
            sizes="(min-width: 1024px) 288px, 256px"
            eager
            className="relative aspect-square w-full rounded-3xl object-cover"
          />

          {/* Floating "dev UI" chips; decorative. */}
          <span
            aria-hidden
            className="absolute top-6 -left-10 flex animate-float items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium whitespace-nowrap text-ink shadow-lg shadow-black/10 sm:-left-14"
          >
            <CircleCheck className="size-3.5 text-ok" />
            tests passing
          </span>
          <span
            aria-hidden
            className="absolute -right-4 bottom-8 animate-float rounded-lg border border-line bg-surface px-3 py-2 font-mono text-[0.7rem] leading-relaxed whitespace-nowrap text-muted shadow-lg shadow-black/10 [animation-delay:-3s] sm:-right-6 sm:-right-12 sm:bottom-20"
          >
            <span className="text-accent">const</span> stack = [<br />
            &nbsp;&nbsp;<span className="text-ok">'laravel'</span>,{' '}
            <span className="text-ok">'nestjs'</span>,<br />
            &nbsp;&nbsp;<span className="text-ok">'react'</span>]
          </span>

          <figcaption className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs whitespace-nowrap text-muted shadow-sm">
            <MapPin aria-hidden className="size-3.5 text-accent" />
            {profile.location}
          </figcaption>
        </figure>
      </div>

      <TechMarquee />
    </section>
  )
}
