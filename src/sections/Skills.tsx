import { skillGroups } from '@/data/skills'
import { cn } from '@/lib/cn'

export function Skills() {
  return (
    <section id="skills" className="border-b border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-4 pt-2 pb-20 sm:px-6">
        <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2 border-t border-line pt-12">
          <h3 className="font-display text-xl font-semibold text-ink">Technical Stack</h3>
          <p className="font-mono text-xs text-subtle">Highlighted items are daily drivers.</p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-sm border border-line bg-line sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.title} className="bg-surface p-5 sm:p-6">
              <h4 className="mb-4 font-mono text-xs tracking-wider text-subtle uppercase">
                {group.title}
              </h4>

              <ul className="flex flex-wrap gap-2">
                {group.skills.map(({ name, icon: Icon, primary }) => (
                  <li
                    key={name}
                    className={cn(
                      'inline-flex items-center gap-2 rounded-sm border px-2.5 py-1.5 text-xs transition-colors',
                      primary
                        ? 'border-accent/35 bg-accent-soft/75 font-medium text-ink'
                        : 'border-line bg-bg text-muted',
                    )}
                  >
                    <Icon
                      aria-hidden
                      className={cn('size-3.5 shrink-0', primary ? 'text-accent' : 'text-subtle')}
                    />
                    <span>{name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
