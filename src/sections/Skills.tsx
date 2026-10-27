import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { skillGroups } from '@/data/skills'

export function Skills() {
  return (
    <section id="skills" className="border-y-3 border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading kicker="Stage 02 · Skills" title="Inventory">
          The gear I reach for most often.
        </SectionHeading>

        <div className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <Reveal key={group.title} delay={index * 0.05} className="pixel-box p-5">
              <h3 className="mb-4 font-pixel text-[0.65rem] text-gold uppercase">{group.title}</h3>
              <ul className="grid grid-cols-[repeat(auto-fill,minmax(5.5rem,1fr))] gap-2">
                {group.skills.map(({ name, icon: Icon }) => (
                  <li
                    key={name}
                    className="group flex aspect-square flex-col items-center justify-center gap-2 border-2 border-line bg-bg-2 p-2 text-center transition-colors hover:border-ice hover:bg-surface-2"
                  >
                    <Icon
                      aria-hidden
                      className="size-7 text-muted transition-[color,transform] group-hover:scale-110 group-hover:text-ice"
                    />
                    <span className="font-mono text-[0.7rem] leading-tight text-ink">{name}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
