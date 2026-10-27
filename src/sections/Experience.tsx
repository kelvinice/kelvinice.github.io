import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { experience } from '@/data/experience'

export function Experience() {
  if (experience.length === 0) return null

  return (
    <section id="experience" className="border-y-3 border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading kicker="Stage 04 · Experience" title="Quest log" />

        <ol className="relative space-y-8 border-l-3 border-dashed border-line pl-8 sm:pl-10">
          {experience.map((job, index) => (
            <li key={job.role} className="relative">
              <span
                aria-hidden
                className="absolute top-6 -left-[calc(2rem+9px)] size-4 rotate-45 border-3 border-bg-2 bg-pink sm:-left-[calc(2.5rem+9px)]"
              />
              <Reveal delay={index * 0.05} className="pixel-box p-5 sm:p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                  <h3 className="text-xl font-semibold text-ink">
                    {job.role}{' '}
                    <span className="text-muted">
                      @{' '}
                      {job.companyUrl ? (
                        <a
                          href={job.companyUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-ice underline-offset-4 hover:underline"
                        >
                          {job.company}
                        </a>
                      ) : (
                        <span className="text-ice">{job.company}</span>
                      )}
                    </span>
                  </h3>
                  {job.start && (
                    <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-sm text-gold">
                      <span>
                        {job.start} — {job.end ?? 'Present'}
                        {job.location && <span className="text-muted"> · {job.location}</span>}
                      </span>
                      {!job.end && (
                        <span className="bg-lime px-2 py-1 font-pixel text-[0.5rem] text-on-accent uppercase">
                          Now
                        </span>
                      )}
                    </p>
                  )}
                </div>

                {job.placeholder && (
                  <p className="mt-3 inline-block bg-gold px-2 py-1 font-pixel text-[0.5rem] text-on-accent">
                    PLACEHOLDER · edit src/data/experience.ts (hidden in production)
                  </p>
                )}

                <ul className="mt-4 space-y-2 text-muted">
                  {job.highlights.map((line) => (
                    <li key={line} className="flex gap-3">
                      <span aria-hidden className="text-pink">
                        ▸
                      </span>
                      {line}
                    </li>
                  ))}
                </ul>

                {job.tech && (
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Tech used">
                    {job.tech.map((tech) => (
                      <li
                        key={tech}
                        className="border border-line bg-bg-2 px-2 py-0.5 font-mono text-xs text-ink/80"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
