import { ArrowUpRight } from 'lucide-react'
import { SectionHeader } from '@/components/SectionHeader'
import { experience, type Experience as ExperienceEntry } from '@/data/experience'
import { cn } from '@/lib/cn'

type CompanyGroup = {
  company: string
  companyUrl?: string
  location?: string
  roles: ExperienceEntry[]
}

function groupByCompany(items: ExperienceEntry[]): CompanyGroup[] {
  const groups: CompanyGroup[] = []
  for (const entry of items) {
    const last = groups[groups.length - 1]
    if (last && last.company === entry.company) {
      last.roles.push(entry)
    } else {
      groups.push({
        company: entry.company,
        companyUrl: entry.companyUrl,
        location: entry.location,
        roles: [entry],
      })
    }
  }
  return groups
}

function formatGroupSpan(roles: ExperienceEntry[]) {
  const earliest = roles[roles.length - 1]?.start
  const latestEnd = roles.some((role) => role.start && !role.end)
    ? 'Present'
    : (roles[0]?.end ?? roles[0]?.start)
  if (!earliest) return null
  return latestEnd && latestEnd !== earliest ? `${earliest} — ${latestEnd}` : earliest
}

export function Experience() {
  if (experience.length === 0) return null
  const groups = groupByCompany(experience)

  return (
    <section id="experience" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeader index="03" kicker="Career" title="Experience">
        Teaching, research &amp; development, and academic leadership.
      </SectionHeader>

      <div className="divide-y divide-line">
        {groups.map((group, groupIndex) => {
          const span = formatGroupSpan(group.roles)
          return (
            <div
              key={`${group.company}-${groupIndex}`}
              className={cn(
                'grid gap-8 lg:grid-cols-12 lg:gap-10',
                groupIndex > 0 && 'pt-12',
                groupIndex < groups.length - 1 && 'pb-12',
              )}
            >
              <div className="space-y-2 lg:col-span-4">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {group.companyUrl ? (
                    <a
                      href={group.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
                    >
                      {group.company}
                      <ArrowUpRight className="size-4 text-subtle" aria-hidden />
                    </a>
                  ) : (
                    group.company
                  )}
                </h3>

                {span && <p className="font-mono text-xs text-muted">{span}</p>}
                {group.location && <p className="text-sm text-subtle">{group.location}</p>}
                <p className="pt-1 font-mono text-xs text-subtle">
                  {group.roles.length} {group.roles.length === 1 ? 'role' : 'roles'}
                </p>
              </div>

              <ol className="space-y-8 border-l border-line pl-6 sm:pl-8 lg:col-span-8">
                {group.roles.map((job) => {
                  const isCurrent = Boolean(job.start && !job.end)
                  return (
                    <li key={`${job.role}-${job.start ?? ''}`} className="relative">
                      <span
                        aria-hidden
                        className={cn(
                          'absolute top-1.5 -left-[calc(1.5rem+5px)] size-2.5 rounded-full border sm:-left-[calc(2rem+5px)]',
                          isCurrent ? 'border-accent bg-accent' : 'border-line-strong bg-bg',
                        )}
                      />

                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="font-display text-lg font-semibold text-ink">{job.role}</h4>

                        {job.start && (
                          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-muted">
                            <span>
                              {job.start} — {job.end ?? 'Present'}
                            </span>
                            {isCurrent && (
                              <span className="rounded-sm bg-accent-soft px-2 py-0.5 font-medium text-accent">
                                Current
                              </span>
                            )}
                          </div>
                        )}
                      </div>

                      {job.placeholder && (
                        <p className="mt-2 inline-block rounded-sm bg-signal-soft px-2 py-0.5 font-mono text-[0.7rem] text-signal">
                          PLACEHOLDER · hidden in production
                        </p>
                      )}

                      <ul className="mt-3 space-y-1.5 text-sm leading-relaxed text-muted">
                        {job.highlights.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>

                      {job.tech && (
                        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Tech used">
                          {job.tech.map((tech) => (
                            <li
                              key={tech}
                              className="rounded-sm border border-line bg-bg-2 px-2 py-0.5 font-mono text-xs text-muted"
                            >
                              {tech}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                })}
              </ol>
            </div>
          )
        })}
      </div>
    </section>
  )
}
