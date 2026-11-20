import { ArrowUpRight, Expand } from 'lucide-react'
import { useCallback, useState } from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { Lightbox, type LightboxItem } from '@/components/Lightbox'
import { Picture } from '@/components/Picture'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { Tag } from '@/components/Tag'
import { projects, type Project } from '@/data/projects'

type CardProps = {
  project: Project
  onPreview: (item: LightboxItem) => void
}

function ProjectCard({ project, onPreview }: CardProps) {
  const Icon = project.icon
  const image = project.image

  return (
    <article className="group spotlight flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,translate,box-shadow] duration-300 hover:-translate-y-1 hover:border-line-strong hover:shadow-xl hover:shadow-black/10">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-line bg-bg-2">
        {image ? (
          <button
            type="button"
            onClick={() => onPreview({ title: project.title, image, badge: project.context })}
            aria-label={`Enlarge screenshot of ${project.title}`}
            className="group/shot relative z-[2] block size-full cursor-zoom-in"
          >
            <Picture
              picture={image}
              alt={`Screenshot of ${project.title}`}
              sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
              className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span
              aria-hidden
              className="absolute right-3 bottom-3 flex size-8 items-center justify-center rounded-lg border border-line bg-surface/90 text-muted opacity-0 shadow-sm backdrop-blur transition-opacity group-hover/shot:opacity-100 group-focus-visible/shot:opacity-100"
            >
              <Expand className="size-4" />
            </span>
          </button>
        ) : (
          Icon && (
            <div className="flex size-full items-center justify-center bg-grid">
              <span className="flex size-16 items-center justify-center rounded-2xl border border-line bg-surface text-accent shadow-sm">
                <Icon aria-hidden className="size-7" />
              </span>
            </div>
          )
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-semibold text-ink">{project.title}</h3>
          <span className="shrink-0 font-mono text-[0.7rem] text-muted">{project.context}</span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{project.description}</p>
        {project.tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <Tag key={tech}>{tech}</Tag>
            ))}
          </div>
        )}
        {project.links.length > 0 && (
          <div className="mt-4 flex gap-4 border-t border-line pt-4 text-sm">
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`${link.kind === 'live' ? 'Open' : 'Source code of'} ${project.title}`}
                className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-accent"
              >
                {link.kind === 'live' ? (
                  <>
                    Open <ArrowUpRight aria-hidden className="size-4" />
                  </>
                ) : (
                  <>
                    <TbBrandGithub aria-hidden className="size-4" /> Source
                  </>
                )}
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export function Projects() {
  const [preview, setPreview] = useState<LightboxItem | null>(null)
  // Stable, so the Lightbox's focus/scroll-lock effect only runs on open and close.
  const closePreview = useCallback(() => setPreview(null), [])

  return (
    <Section
      id="projects"
      index={6}
      backdrop="grid"
      glow="left"
      eyebrow="Products & side projects"
      title="Beyond client work"
      intro="Internal tools for BINUS labs and divisions, a hackathon platform, and apps I design, build and run end to end."
      tinted
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 0.06} className="h-full">
            <ProjectCard project={project} onPreview={setPreview} />
          </Reveal>
        ))}
      </div>

      <Lightbox item={preview} onClose={closePreview} />
    </Section>
  )
}
