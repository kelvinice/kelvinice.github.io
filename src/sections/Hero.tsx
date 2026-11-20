import { ArrowDownRight, ArrowUpRight, FileDown, ZoomIn } from 'lucide-react'
import { useState } from 'react'
import { ButtonLink } from '@/components/Button'
import type { LightboxItem } from '@/components/Lightbox'
import { Picture } from '@/components/Picture'
import { SocialIcon } from '@/components/SocialIcon'
import { profile } from '@/data/profile'
import { categoryLabels, projects } from '@/data/projects'
import { publications } from '@/data/publications'
import { cn } from '@/lib/cn'

const showcaseSlugs = ['wyndoku', 'plagion', 'docflow'] as const
const showcaseProjects = showcaseSlugs
  .map((slug) => projects.find((project) => project.slug === slug))
  .filter((project): project is NonNullable<typeof project> => Boolean(project?.image))

const summaryStats = [
  { value: `Since ${profile.codingSince}`, label: 'Engineering' },
  { value: `${publications.length} Books`, label: 'Co-authored' },
  { value: `${projects.length} Projects`, label: 'Shipped' },
]

export function Hero({ onInspectImage }: { onInspectImage?: (item: LightboxItem) => void }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const active = showcaseProjects[activeIndex] ?? showcaseProjects[0]
  const activePrimaryLink = active?.links[0]

  return (
    <section id="top" className="bg-bg pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs tracking-wider text-subtle uppercase">
            {profile.location} · BINUS University
          </p>

          <h1 className="mt-4 font-display text-4xl leading-[1.06] font-semibold tracking-[-0.025em] text-ink sm:text-5xl lg:text-[3.35rem]">
            {profile.name} —{' '}
            <span className="font-normal text-muted">
              lecturer, systems builder, and indie game maker.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline} From campus OCR and plagiarism pipelines to co-authored engineering
            books and browser puzzle games.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink href="#projects" size="lg">
              Explore work
              <ArrowDownRight aria-hidden />
            </ButtonLink>
            <ButtonLink href="#contact" size="lg" variant="secondary">
              Get in touch
            </ButtonLink>
            {profile.resumeUrl && (
              <ButtonLink href={profile.resumeUrl} size="lg" variant="secondary" download>
                <FileDown aria-hidden />
                CV
              </ButtonLink>
            )}

            <ul className="flex items-center gap-2 sm:ml-2" aria-label="Social links">
              {profile.socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(social.href.startsWith('http')
                      ? { target: '_blank', rel: 'noreferrer' }
                      : {})}
                    aria-label={social.label}
                    title={social.label}
                    className="flex size-10 items-center justify-center rounded-sm border border-line bg-surface text-muted transition-colors hover:border-line-strong hover:text-ink"
                  >
                    <SocialIcon icon={social.icon} className="size-4" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
            {summaryStats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-mono text-[0.7rem] tracking-wider text-subtle uppercase">
                  {stat.label}
                </dt>
                <dd className="mt-1 font-display text-lg font-semibold text-ink">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        {active && active.image && (
          <div className="overflow-hidden rounded-sm border border-line bg-surface lg:col-span-5">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-line px-4 py-2.5">
              <span className="font-mono text-[0.7rem] tracking-wider text-subtle uppercase">
                Selected work
              </span>
              <div role="tablist" aria-label="Featured projects preview" className="flex gap-1">
                {showcaseProjects.map((project, index) => (
                  <button
                    key={project.slug}
                    type="button"
                    role="tab"
                    aria-selected={index === activeIndex}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'cursor-pointer rounded-sm px-2.5 py-1 font-mono text-xs transition-colors',
                      index === activeIndex
                        ? 'bg-accent-soft font-medium text-accent'
                        : 'text-muted hover:text-ink',
                    )}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                active.image &&
                onInspectImage?.({
                  title: active.title,
                  image: active.image,
                  badge: active.badge,
                  highlight: active.highlight,
                })
              }
              aria-label={`Inspect ${active.title} screenshot`}
              className="group relative block w-full cursor-zoom-in border-b border-line bg-bg-2 p-3 text-left"
            >
              <div className="overflow-hidden border border-line/80 bg-surface">
                <Picture
                  picture={active.image}
                  alt={`Preview of ${active.title}`}
                  sizes="(min-width: 1024px) 440px, 100vw"
                  eager
                  className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.015]"
                />
              </div>
              <span className="pointer-events-none absolute right-5 bottom-5 inline-flex items-center gap-1 rounded-sm border border-line bg-surface/92 px-2 py-1 font-mono text-[0.7rem] text-ink opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                <ZoomIn className="size-3" aria-hidden />
                Inspect
              </span>
            </button>

            <div className="space-y-3 p-4">
              <div className="flex items-baseline justify-between gap-3">
                <p className="font-display text-lg font-semibold text-ink">{active.title}</p>
                <span className="font-mono text-xs text-subtle">
                  {active.badge ?? categoryLabels[active.category]}
                </span>
              </div>

              {active.highlight && <p className="text-sm text-muted">{active.highlight}</p>}

              <div className="flex flex-wrap items-center gap-2 pt-1">
                {activePrimaryLink && (
                  <ButtonLink
                    href={activePrimaryLink.href}
                    variant={activePrimaryLink.kind === 'play' ? 'signal' : 'primary'}
                    size="sm"
                  >
                    {activePrimaryLink.kind === 'play' ? 'Play live' : 'Open demo'}
                    <ArrowUpRight aria-hidden />
                  </ButtonLink>
                )}
                <ButtonLink href={`#project-${active.slug}`} variant="secondary" size="sm">
                  Case notes
                  <ArrowDownRight aria-hidden />
                </ButtonLink>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
