import { Check, GraduationCap, RefreshCw } from 'lucide-react'
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
      <Reveal as="ol" className="relative grid gap-8 lg:grid-cols-6 lg:gap-x-0">
        {/* Connecting line: horizontal between node centres on desktop, vertical on mobile. */}
        <span
          aria-hidden
          className="absolute top-5 right-[8.33%] left-[8.33%] hidden h-px bg-line lg:block"
        >
          <span className="step-line absolute inset-0 bg-accent" />
        </span>
        <span aria-hidden className="absolute top-5 bottom-5 left-5 w-px bg-line lg:hidden" />

        {processSteps.map((step, index) => (
          <li
            key={step.title}
            className="group relative flex gap-5 lg:flex-col lg:items-center lg:gap-0 lg:px-3 lg:text-center"
          >
            <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-full border border-line bg-surface font-mono text-sm text-accent transition-colors duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-on-accent">
              {String(index + 1).padStart(2, '0')}
            </span>
            <div className="pt-1.5 lg:pt-5">
              <h3 className="font-semibold text-ink">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
            </div>
          </li>
        ))}
      </Reveal>

      <p className="mt-8 flex items-center gap-2 font-mono text-xs text-muted lg:justify-center">
        <RefreshCw aria-hidden className="size-3.5 text-accent" />
        Steps 03–05 repeat every sprint until it’s done.
      </p>

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
