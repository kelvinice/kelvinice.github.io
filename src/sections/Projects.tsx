import { ArrowUpRight } from 'lucide-react'
import { TbBrandGithub } from 'react-icons/tb'
import { Picture } from '@/components/Picture'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { Tag } from '@/components/Tag'
import { projects, type Project } from '@/data/projects'

function ProjectCard({ project }: { project: Project }) {
  const Icon = project.icon

  return (
    <article className="group spotlight flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-[border-color,translate,box-shadow] duration-300 hover:-translate-y-1 hover:border-muted/50 hover:shadow-xl hover:shadow-black/10">
      <div className="aspect-[16/9] overflow-hidden border-b border-line bg-bg-2">
        {project.image ? (
          <Picture
            picture={project.image}
            alt={`Screenshot of ${project.title}`}
            sizes="(min-width: 1024px) 370px, (min-width: 640px) 50vw, 100vw"
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
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
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
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
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
