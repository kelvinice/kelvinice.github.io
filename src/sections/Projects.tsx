import { AnimatePresence, m } from 'motion/react'
import { useState } from 'react'
import { ProjectCard } from '@/components/ProjectCard'
import { SectionHeading } from '@/components/SectionHeading'
import { categoryLabels, projects, type ProjectCategory } from '@/data/projects'
import { cn } from '@/lib/cn'

type Filter = 'all' | ProjectCategory

const filters: { value: Filter; label: string }[] = [
  { value: 'all', label: 'All' },
  ...(Object.keys(categoryLabels) as ProjectCategory[]).map((value) => ({
    value,
    label: categoryLabels[value],
  })),
]

export function Projects() {
  const [filter, setFilter] = useState<Filter>('all')
  const visible = filter === 'all' ? projects : projects.filter((p) => p.category === filter)

  return (
    <section id="projects" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading kicker="Stage 03 · Projects" title="Level select">
        Games you can play right now, apps I use myself, and a few tools. Pick a level.
      </SectionHeading>

      <div role="group" aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2">
        {filters.map(({ value, label }) => {
          const total =
            value === 'all' ? projects.length : projects.filter((p) => p.category === value).length
          return (
            <button
              key={value}
              type="button"
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
              className={cn(
                'flex items-center gap-2 border-2 px-3 py-2 font-pixel text-[0.6rem] uppercase transition-colors',
                filter === value
                  ? 'border-ice bg-ice text-on-accent shadow-[3px_3px_0_0_var(--shadow)]'
                  : 'border-line bg-surface text-muted hover:border-ice hover:text-ink',
              )}
            >
              {label}
              <span className={filter === value ? 'opacity-70' : 'text-gold'}>{total}</span>
            </button>
          )
        })}
      </div>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((project) => (
            <m.li
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <ProjectCard project={project} />
            </m.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  )
}
