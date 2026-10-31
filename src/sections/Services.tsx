import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { services } from '@/data/services'

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="Services"
      title="What I can build for you"
      intro="Full-stack, from database schema to deployed UI, or just the part you need."
      tinted
    >
      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ title, description, icon: Icon }, index) => (
          <Reveal as="li" key={title} delay={(index % 3) * 0.06} className="bg-surface p-7">
            <span className="inline-flex size-10 items-center justify-center rounded-lg border border-line bg-bg-2 text-accent">
              <Icon aria-hidden className="size-5" />
            </span>
            <h3 className="mt-5 font-semibold text-ink">{title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  )
}
