import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { Tag } from '@/components/Tag'
import { practices, processSteps } from '@/data/process'
import { services } from '@/data/services'

/** What clients can hire me for, and how a project runs once they do. */
export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I build, and how a project runs"
      intro="A whole system, or just the part you need."
      tinted
    >
      <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <Reveal as="dl" className="divide-y divide-line border-y border-line">
          {services.map((service) => (
            <div key={service.title} className="py-5">
              <dt className="font-semibold text-ink">{service.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted">{service.description}</dd>
            </div>
          ))}
        </Reveal>

        {/* Kept as #process so older links to the Process section still land here. */}
        <Reveal id="process" className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h3 className="text-xl font-semibold tracking-tight text-ink">How a project runs</h3>
          <ol className="mt-6 space-y-5">
            {processSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4">
                <span className="mt-0.5 font-mono text-sm text-accent">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="font-medium text-ink">{step.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-7 flex flex-wrap gap-1.5 border-t border-line pt-6">
            {practices.map((practice) => (
              <Tag key={practice}>{practice}</Tag>
            ))}
          </div>

          <p className="mt-6 flex items-start gap-3 text-sm leading-relaxed text-muted">
            <GraduationCap aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
            <span>
              I also <span className="text-ink">teach Scrum and software testing</span> at BINUS
              University, and I run client projects the same way.
            </span>
          </p>
        </Reveal>
      </div>
    </Section>
  )
}
