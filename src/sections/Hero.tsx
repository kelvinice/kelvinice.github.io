import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react'
import { Snowflake } from '@/components/Logo'
import { Picture } from '@/components/Picture'
import { SocialIcon } from '@/components/SocialIcon'
import { profile } from '@/data/profile'
import { buttonClass } from '@/lib/button'

export function Hero() {
  const links = profile.socials.filter((social) => social.icon !== 'email')

  return (
    <section id="top" className="relative overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 pt-32 pb-20 sm:px-6 md:pt-40 md:pb-28 lg:grid-cols-[1fr_auto]">
        {/* min-w-0: let this grid column shrink below its content on narrow screens. */}
        <div className="max-w-2xl min-w-0">
          <h1 className="text-sm font-medium text-muted">
            <span className="text-ink">{profile.name}</span>
            <span aria-hidden> · </span>
            <span className="sr-only">, </span>
            {profile.role}
          </h1>

          <p className="mt-4 font-display text-4xl leading-[1.1] font-semibold tracking-tight text-balance text-ink sm:text-5xl md:text-6xl">
            {profile.headline}
          </p>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            {profile.intro}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="#work" className={buttonClass({ size: 'lg' })}>
              View selected work
              <ArrowDown aria-hidden />
            </a>
            <a href="#contact" className={buttonClass({ variant: 'secondary', size: 'lg' })}>
              Start a project
              <ArrowUpRight aria-hidden />
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
        </div>

        <figure className="relative mx-auto w-56 sm:w-64 lg:mx-0 lg:w-72">
          {/* A soft accent halo lifts the portrait off the grid. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[8%] rounded-full bg-accent-soft"
          />
          {/* Signature: the snowflake as a badge on a slow orbit around the portrait. */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-[14%] animate-spin-slow rounded-full border border-dashed border-accent/35"
          >
            <span className="absolute top-[14.64%] left-[85.36%] grid size-10 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-line bg-surface text-accent shadow-md sm:size-11">
              <Snowflake className="size-5 sm:size-6" />
            </span>
          </div>
          <Picture
            picture={profile.photo}
            alt={`Portrait of ${profile.name}`}
            sizes="(min-width: 1024px) 288px, 256px"
            eager
            className="relative aspect-square w-full rounded-full object-cover shadow-xl ring-4 shadow-black/10 ring-surface"
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
