import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { Tag } from '@/components/Tag'
import { education, experience } from '@/data/experience'

function dateRange(start?: string, end?: string) {
  if (!start) return null
  return `${start} – ${end ?? 'Present'}`
}

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Eight years of shipping software"
      intro="Client projects alongside a long run at BINUS University, from teaching assistant to Section Head."
      tinted
    >
      <ol className="relative space-y-10 border-l border-line pl-8 md:pl-10">
        {experience.map((job, index) => {
          const dates = dateRange(job.start, job.end)
          return (
            <Reveal as="li" key={`${job.role}-${job.company}`} className="relative">
              <span
                aria-hidden
                className={
                  index === 0
                    ? 'absolute top-1.5 -left-[2.3rem] size-3 rounded-full bg-accent ring-4 ring-bg-2 md:-left-[2.8rem]'
                    : 'absolute top-1.5 -left-[2.3rem] size-3 rounded-full border-2 border-line bg-bg-2 md:-left-[2.8rem]'
                }
              />
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between md:gap-6">
                <h3 className="font-semibold text-ink">
                  {job.role}
                  <span className="font-normal text-muted"> · </span>
                  {job.companyUrl ? (
                    <a
                      href={job.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="font-normal text-muted underline-offset-4 hover:text-accent hover:underline"
                    >
                      {job.company}
                    </a>
                  ) : (
                    <span className="font-normal text-muted">{job.company}</span>
                  )}
                </h3>
                {(dates || job.location) && (
                  <p className="shrink-0 font-mono text-xs text-muted">
                    {[dates, job.location].filter(Boolean).join(' · ')}
                  </p>
                )}
              </div>
              <ul className="mt-3 max-w-3xl space-y-1.5 text-sm leading-relaxed text-muted">
                {job.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              {job.tech && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {job.tech.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              )}
            </Reveal>
          )
        })}
      </ol>

      <Reveal className="mt-14 grid gap-4 sm:grid-cols-2">
        {education.map((item) => (
          <div
            key={item.degree}
            className="flex gap-4 rounded-2xl border border-line bg-surface p-5"
          >
            <GraduationCap aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
            <div>
              <p className="font-medium text-ink">{item.degree}</p>
              <p className="mt-0.5 text-sm text-muted">
                {item.school} · {item.years}
              </p>
              {item.note && <p className="mt-2 text-sm text-muted">{item.note}</p>}
            </div>
          </div>
        ))}
      </Reveal>
    </Section>
  )
}
