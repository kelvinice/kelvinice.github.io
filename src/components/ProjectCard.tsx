import { BookOpen, ExternalLink, Gamepad2, Lock, Monitor, Server } from 'lucide-react'
import type { ComponentType, SVGProps } from 'react'
import { TbBrandGithub } from 'react-icons/tb'
import type { Project, ProjectCategory, ProjectLink } from '@/data/projects'
import { cn } from '@/lib/cn'
import { CoverArt } from './CoverArt'
import { PixelLink } from './PixelButton'
import { Picture } from './Picture'

const linkMeta: Record<
  ProjectLink['kind'],
  { label: string; icon: ComponentType<SVGProps<SVGSVGElement>> }
> = {
  play: { label: 'Play', icon: Gamepad2 },
  demo: { label: 'Live demo', icon: ExternalLink },
  source: { label: 'Source', icon: TbBrandGithub },
  frontend: { label: 'Frontend', icon: Monitor },
  backend: { label: 'Backend', icon: Server },
  reference: { label: 'Inspired by', icon: BookOpen },
}

const categoryStyle: Record<ProjectCategory, { label: string; className: string }> = {
  game: { label: 'Game', className: 'bg-pink text-on-accent' },
  app: { label: 'App', className: 'bg-ice text-on-accent' },
  tool: { label: 'Tool', className: 'bg-gold text-on-accent' },
}

export function ProjectCard({ project }: { project: Project }) {
  const category = categoryStyle[project.category]
  const [primary, ...secondary] = project.links

  return (
    <article
      className={cn(
        'group flex h-full flex-col pixel-box transition-[transform,box-shadow,border-color] duration-200',
        'hover:-translate-y-1 hover:border-ice hover:shadow-[6px_10px_0_0_var(--shadow)]',
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b-3 border-line bg-surface-2">
        {project.image ? (
          <Picture
            picture={project.image}
            alt={`Screenshot of ${project.title}`}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          project.cover && <CoverArt cover={project.cover} title={project.title} />
        )}
        <div className="pointer-events-none absolute inset-0 scanlines opacity-0 transition-opacity group-hover:opacity-100" />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <span
            className={cn(
              'px-2 py-1 font-pixel text-[0.55rem] uppercase shadow-[2px_2px_0_0_var(--shadow)]',
              category.className,
            )}
          >
            {category.label}
          </span>
          {project.featured && (
            <span className="bg-gold px-2 py-1 font-pixel text-[0.55rem] text-on-accent uppercase shadow-[2px_2px_0_0_var(--shadow)]">
              ★ New
            </span>
          )}
          {project.badge && (
            <span className="border-2 border-current bg-surface px-2 py-0.5 font-pixel text-[0.55rem] text-ink uppercase shadow-[2px_2px_0_0_var(--shadow)]">
              {project.badge}
            </span>
          )}
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="font-pixel text-sm leading-relaxed text-ink">{project.title}</h3>
        <p className="flex-1 leading-relaxed text-muted">{project.description}</p>

        <ul className="flex flex-wrap gap-1.5" aria-label="Built with">
          {project.tech.map((tech) => (
            <li
              key={tech}
              className="border border-line bg-bg-2 px-2 py-0.5 font-mono text-xs text-ink/80"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 pt-1">
          {primary ? (
            [primary, ...secondary].map((link, index) => {
              const { label, icon: Icon } = linkMeta[link.kind]
              return (
                <PixelLink
                  key={link.href}
                  href={link.href}
                  size="sm"
                  variant={index === 0 ? 'primary' : 'secondary'}
                  aria-label={`${label}: ${project.title}`}
                >
                  <Icon aria-hidden />
                  {label}
                </PixelLink>
              )
            })
          ) : (
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted">
              <Lock className="size-3.5" aria-hidden />
              {project.badge === 'Prototype' ? 'In development' : 'No public demo'}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
