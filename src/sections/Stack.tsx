import { Reveal } from '@/components/Reveal'
import { skillGroups } from '@/data/skills'

/**
 * The tech stack as a compact list, shown at the end of Experience. Keeps the #stack anchor
 * so older links still land here.
 */
export function StackList() {
  return (
    <Reveal id="stack" className="mt-16">
      <h3 className="text-xl font-semibold tracking-tight text-ink">Tools I use most</h3>
      <dl className="mt-6 grid gap-x-10 border-t border-line sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.title}
            className="grid grid-cols-[7.5rem_1fr] gap-4 border-b border-line py-3.5 text-sm"
          >
            <dt className="pt-px font-mono text-xs tracking-[0.12em] text-muted uppercase">
              {group.title}
            </dt>
            <dd className="leading-relaxed text-ink">{group.skills.join(', ')}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  )
}
