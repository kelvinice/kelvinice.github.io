import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { skillGroups } from '@/data/skills'

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Tech stack"
      title="Tools I ship with"
      intro="Comfortable picking up whatever a project already runs on, and at home with these."
    >
      <dl className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.title}
            delay={(index % 3) * 0.06}
            className="border-t border-line pt-5"
          >
            <dt className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
              {group.title}
            </dt>
            <dd className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-line bg-surface px-3 py-1.5 text-sm text-ink"
                >
                  {skill}
                </span>
              ))}
            </dd>
          </Reveal>
        ))}
      </dl>
    </Section>
  )
}
