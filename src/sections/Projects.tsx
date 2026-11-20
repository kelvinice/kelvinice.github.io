import {
  ArrowUpRight,
  BookOpen,
  Gamepad2,
  Image as ImageIcon,
  Lock,
  Monitor,
  Server,
  ZoomIn,
} from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { useState } from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { Button, ButtonLink } from '@/components/Button'
import type { LightboxItem } from '@/components/Lightbox'
import { Picture } from '@/components/Picture'
import { SectionHeader } from '@/components/SectionHeader'
import {
  categoryLabels,
  projects,
  type Project,
  type ProjectCategory,
  type ProjectLink,
} from '@/data/projects'
import { cn } from '@/lib/cn'

type Filter = 'all' | ProjectCategory

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  ...(Object.keys(categoryLabels) as ProjectCategory[]).map((value) => ({
    value,
    label: categoryLabels[value],
  })),
]

const singleCategoryLabel: Record<ProjectCategory, string> = {
  game: 'Game',
  app: 'App',
  tool: 'Tool',
}

const linkMeta: Record<
  ProjectLink['kind'],
  { label: string; icon: ComponentType<SVGProps<SVGSVGElement>> }
> = {
  play: { label: 'Play', icon: Gamepad2 },
  demo: { label: 'Live demo', icon: ArrowUpRight },
  source: { label: 'Source', icon: TbBrandGithub },
  frontend: { label: 'Frontend', icon: Monitor },
  backend: { label: 'Backend', icon: Server },
  reference: { label: 'Inspired by', icon: BookOpen },
}

const SPRITE_FRAME = 64
const SPRITE_SCALE = 2

function Sprite({ src }: { src: string }) {
  return (
    <div
      aria-hidden
      className="animate-float [image-rendering:pixelated]"
      style={{
        width: SPRITE_FRAME * SPRITE_SCALE,
        height: SPRITE_FRAME * SPRITE_SCALE,
        backgroundImage: `url(${src})`,
        backgroundSize: `${832 * SPRITE_SCALE}px ${1344 * SPRITE_SCALE}px`,
        backgroundPosition: `0 -${10 * SPRITE_FRAME * SPRITE_SCALE}px`,
      }}
    />
  )
}

function readInitialFilter(): Filter {
  if (typeof window === 'undefined') return 'all'
  const param = new URLSearchParams(window.location.search).get('category')
  return param === 'game' || param === 'app' || param === 'tool' ? param : 'all'
}

function ProjectActions({ project }: { project: Project }) {
  if (project.links.length === 0) {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-xs text-subtle">
        <Lock className="size-3.5" aria-hidden />
        {project.badge === 'Prototype' ? 'In development' : 'Internal campus system'}
      </span>
    )
  }

  return (
    <>
      {project.links.map((link, index) => {
        const { label, icon: Icon } = linkMeta[link.kind]
        const variant = index === 0 ? (link.kind === 'play' ? 'signal' : 'primary') : 'secondary'
        return (
          <ButtonLink
            key={link.href}
            href={link.href}
            size="sm"
            variant={variant}
            aria-label={`${label}: ${project.title}`}
          >
            <Icon aria-hidden />
            {label}
          </ButtonLink>
        )
      })}
    </>
  )
}

export function Projects({ onInspectImage }: { onInspectImage?: (item: LightboxItem) => void }) {
  const [filter, setFilter] = useState<Filter>(readInitialFilter)

  const selectFilter = (next: Filter) => {
    setFilter(next)
    const url = new URL(window.location.href)
    if (next === 'all') url.searchParams.delete('category')
    else url.searchParams.set('category', next)
    window.history.replaceState(null, '', url.toString())
  }

  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)
  const featured = visible.filter((p) => p.tier === 'featured')
  const arcade = visible.filter((p) => p.tier === 'arcade')
  const archive = visible.filter((p) => p.tier === 'archive')

  const inspect = (project: Project) => {
    if (!project.image) return
    onInspectImage?.({
      title: project.title,
      image: project.image,
      badge: project.badge,
      highlight: project.highlight,
    })
  }

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeader index="01" kicker="Selected Work" title="Projects">
        Campus automation tools, playable browser games, and production web apps.
      </SectionHeader>

      <div
        role="group"
        aria-label="Filter projects by category"
        className="mb-10 flex flex-wrap gap-2"
      >
        {filters.map(({ value, label }) => {
          const total =
            value === 'all' ? projects.length : projects.filter((p) => p.category === value).length
          const selected = filter === value
          return (
            <button
              key={value}
              type="button"
              aria-pressed={selected}
              onClick={() => selectFilter(value)}
              className={cn(
                'inline-flex cursor-pointer items-center gap-2 rounded-sm border px-3.5 py-2 text-sm font-medium transition-colors',
                selected
                  ? 'border-ink bg-ink text-bg'
                  : 'border-line bg-surface text-muted hover:border-line-strong hover:text-ink',
              )}
            >
              {label}
              <span className={cn('font-mono text-xs', selected ? 'text-bg/75' : 'text-subtle')}>
                {total}
              </span>
            </button>
          )
        })}
      </div>

      {/* Tier 1: Featured case studies */}
      {featured.length > 0 && (
        <div className="divide-y divide-line">
          {featured.map((project, index) => {
            const mediaRight = index % 2 === 1
            return (
              <article
                key={project.slug}
                id={`project-${project.slug}`}
                className={cn(
                  'grid items-center gap-7 lg:grid-cols-12 lg:gap-10',
                  index === 0 ? 'pb-12' : 'py-12',
                )}
              >
                <div className={cn('lg:col-span-7', mediaRight && 'lg:order-2')}>
                  {project.image && (
                    <button
                      type="button"
                      onClick={() => inspect(project)}
                      aria-label={`Inspect ${project.title} screenshot`}
                      className="group relative block w-full cursor-zoom-in rounded-sm border border-line bg-bg-2 p-2.5 text-left transition-colors hover:border-line-strong sm:p-3.5"
                    >
                      <div className="overflow-hidden border border-line/80 bg-surface">
                        <Picture
                          picture={project.image}
                          alt={`Screenshot of ${project.title}`}
                          sizes="(min-width: 1024px) 640px, 100vw"
                          className="aspect-[16/10] w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.015]"
                        />
                      </div>
                      <span className="pointer-events-none absolute right-5 bottom-5 inline-flex items-center gap-1 rounded-sm border border-line bg-surface/92 px-2.5 py-1 font-mono text-xs text-ink opacity-0 backdrop-blur-xs transition-opacity group-hover:opacity-100">
                        <ZoomIn className="size-3.5" aria-hidden />
                        Inspect
                      </span>
                    </button>
                  )}
                </div>

                <div className={cn('space-y-4 lg:col-span-5', mediaRight && 'lg:order-1')}>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="text-subtle">0{index + 1}</span>
                    <span aria-hidden className="text-line-strong">
                      /
                    </span>
                    <span className="text-muted uppercase">
                      {singleCategoryLabel[project.category]}
                    </span>
                    {project.badge && (
                      <span className="rounded-sm bg-accent-soft px-2 py-0.5 font-medium text-accent">
                        {project.badge}
                      </span>
                    )}
                    {project.featured && (
                      <span className="rounded-sm bg-signal-soft px-2 py-0.5 font-medium text-signal">
                        Live
                      </span>
                    )}
                  </div>

                  <h3 className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
                    {project.title}
                  </h3>

                  {project.highlight && (
                    <p className="border-l-2 border-accent pl-3 font-mono text-xs leading-relaxed text-ink">
                      {project.highlight}
                    </p>
                  )}

                  <p className="text-sm leading-relaxed text-muted sm:text-[0.95rem]">
                    {project.description}
                  </p>

                  <ul className="flex flex-wrap gap-1.5" aria-label="Built with">
                    {project.tech.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-sm border border-line bg-bg-2 px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap items-center gap-2.5 pt-1">
                    <ProjectActions project={project} />
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      )}

      {/* Tier 2: Playable arcade & prototypes */}
      {arcade.length > 0 && (
        <div className={cn(featured.length > 0 && 'mt-4 border-t border-line pt-12')}>
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-semibold text-ink">
              Playable Arcade &amp; Prototypes
            </h3>
            <p className="font-mono text-xs text-subtle">
              HTML Canvas games hosted on this site &amp; works in progress
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {arcade.map((project) => {
              const Icon = project.cover?.icon
              return (
                <li key={project.slug}>
                  <article className="flex h-full flex-col overflow-hidden rounded-sm border border-line bg-surface transition-colors hover:border-line-strong">
                    <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-[#141922]">
                      {project.image ? (
                        <button
                          type="button"
                          onClick={() => inspect(project)}
                          aria-label={`Inspect ${project.title} screenshot`}
                          className="group relative block size-full cursor-zoom-in"
                        >
                          <Picture
                            picture={project.image}
                            alt={`Screenshot of ${project.title}`}
                            sizes="(min-width: 1024px) 280px, (min-width: 640px) 50vw, 100vw"
                            className="size-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                          />
                        </button>
                      ) : project.cover?.sprites ? (
                        <div className="flex size-full items-center justify-center -space-x-10">
                          {project.cover.sprites.map((src) => (
                            <Sprite key={src} src={src} />
                          ))}
                        </div>
                      ) : (
                        Icon && (
                          <div className="flex size-full items-center justify-center bg-bg-2 text-accent">
                            <Icon className="size-10" strokeWidth={1.6} aria-hidden />
                          </div>
                        )
                      )}

                      {project.badge && (
                        <span className="absolute top-2.5 left-2.5 rounded-sm border border-line bg-surface/92 px-2 py-0.5 font-mono text-[0.68rem] font-medium text-ink">
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <div className="flex flex-1 flex-col gap-2.5 p-4">
                      <h4 className="font-display text-base font-semibold text-ink">
                        {project.title}
                      </h4>
                      <p className="flex-1 text-sm leading-relaxed text-muted">
                        {project.description}
                      </p>
                      <p className="font-mono text-[0.7rem] text-subtle">
                        {project.tech.join(' · ')}
                      </p>
                      <div className="flex flex-wrap items-center gap-2 pt-1">
                        <ProjectActions project={project} />
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {/* Tier 3: Scannable archive index */}
      {archive.length > 0 && (
        <div
          className={cn(
            (featured.length > 0 || arcade.length > 0) && 'mt-14 border-t border-line pt-12',
          )}
        >
          <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
            <h3 className="font-display text-xl font-semibold text-ink">
              More Projects &amp; Archive
            </h3>
            <p className="font-mono text-xs text-subtle">
              Supporting platforms, hackathon builds &amp; utilities
            </p>
          </div>

          <ul className="divide-y divide-line border-y border-line">
            {archive.map((project) => (
              <li
                key={project.slug}
                className="grid gap-3 py-5 md:grid-cols-[minmax(0,13.5rem)_1fr_auto] md:items-start md:gap-6"
              >
                <div className="space-y-1">
                  <h4 className="font-display text-base font-semibold text-ink">{project.title}</h4>
                  <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
                    <span className="text-subtle uppercase">
                      {singleCategoryLabel[project.category]}
                    </span>
                    {project.badge && (
                      <span className="rounded-sm bg-accent-soft px-1.5 py-0.5 text-accent">
                        {project.badge}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <p className="text-sm leading-relaxed text-muted">{project.description}</p>
                  {project.highlight && (
                    <p className="font-mono text-xs text-ink">{project.highlight}</p>
                  )}
                  <p className="font-mono text-xs text-subtle">{project.tech.join(' · ')}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2 md:justify-end">
                  {project.image && (
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => inspect(project)}
                      aria-label={`Preview screenshot of ${project.title}`}
                    >
                      <ImageIcon aria-hidden />
                      Preview
                    </Button>
                  )}
                  <ProjectActions project={project} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
