import { ArrowUpRight } from 'lucide-react'
import { useCallback, useState } from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import { Lightbox, type LightboxItem } from '@/components/Lightbox'
import { Reveal } from '@/components/Reveal'
import { Screenshot } from '@/components/Screenshot'
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
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors duration-300 hover:border-line-strong">
      {image ? (
        <Screenshot
          image={image}
          title={project.title}
          alt={`Screenshot of ${project.title}`}
          badge={project.context}
          sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
          onPreview={onPreview}
          className="border-b border-line"
        />
      ) : (
        Icon && (
          <div className="flex aspect-[16/10] items-center justify-center border-b border-line bg-bg-2 bg-grid">
            <span className="flex size-16 items-center justify-center rounded-2xl border border-line bg-surface text-accent shadow-sm">
              <Icon aria-hidden className="size-7" />
            </span>
          </div>
        )
      )}
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
