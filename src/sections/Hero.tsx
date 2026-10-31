import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { Picture } from '@/components/Picture'
import { SocialIcon } from '@/components/SocialIcon'
import { profile } from '@/data/profile'
import { buttonClass } from '@/lib/button'

export function Hero() {
  const links = profile.socials.filter((social) => social.icon !== 'email')

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-96 w-[48rem] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pt-32 pb-20 sm:px-6 md:pt-40 md:pb-28 lg:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 text-xs font-medium text-muted">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-ok opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-ok" />
            </span>
            {profile.availability}
          </p>

          <h1 className="text-sm font-medium text-muted">
            <span className="text-ink">{profile.name}</span>
            <span aria-hidden> · </span>
            <span className="sr-only">, </span>
            {profile.role}
          </h1>

          <p className="mt-4 text-4xl leading-[1.08] font-semibold tracking-tight text-balance text-ink sm:text-5xl md:text-6xl">
            {profile.headline}
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
            className="absolute -inset-3 rounded-[2rem] border border-line bg-surface/60"
          />
          <Picture
            picture={profile.photo}
            alt={`Portrait of ${profile.name}`}
            sizes="(min-width: 1024px) 288px, 256px"
            eager
            className="relative aspect-square w-full rounded-3xl object-cover"
          />
          <figcaption className="absolute -bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-line bg-surface px-3 py-1.5 text-xs whitespace-nowrap text-muted shadow-sm">
            <MapPin aria-hidden className="size-3.5 text-accent" />
            {profile.location}
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
