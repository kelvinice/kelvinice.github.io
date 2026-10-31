import { Check, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { practices, processSteps } from '@/data/process'

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="How I work"
      title="Scrum, sprint by sprint"
      intro="You see working software every two weeks, and every release is tested before it reaches your users."
    >
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {processSteps.map((step, index) => (
          <Reveal
            as="li"
            key={step.title}
            delay={(index % 3) * 0.06}
            className="relative rounded-2xl border border-line bg-surface p-6"
          >
            <span className="font-mono text-xs text-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </Reveal>
        ))}
      </ol>

      <Reveal className="mt-10 grid gap-8 rounded-2xl border border-line bg-bg-2 p-7 md:grid-cols-[1fr_auto] md:items-center">
        <ul className="grid gap-x-6 gap-y-3 text-sm text-ink sm:grid-cols-2">
          {practices.map((practice) => (
            <li key={practice} className="flex items-start gap-2.5">
              <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-ok" />
              {practice}
            </li>
          ))}
        </ul>
        <p className="flex max-w-xs items-start gap-3 border-line text-sm leading-relaxed text-muted md:border-l md:pl-8">
          <GraduationCap aria-hidden className="mt-0.5 size-5 shrink-0 text-accent" />
          <span>
            I also <span className="text-ink">teach Scrum and software testing</span> at BINUS
            University, so the process isn’t a buzzword here.
          </span>
        </p>
      </Reveal>
    </Section>
  )
}
