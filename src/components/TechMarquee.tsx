import { skillGroups } from '@/data/skills'

const items = skillGroups.filter((group) => group.title !== 'Also').flatMap((group) => group.skills)

/** Endless strip of the tech stack under the hero. Decorative: the Stack section lists it properly. */
export function TechMarquee() {
  return (
    <div
      aria-hidden
      className="relative border-y border-line bg-bg-2/60 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] py-4"
    >
      <div className="flex w-max animate-marquee gap-10 hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-sm whitespace-nowrap text-muted"
          >
            {item}
            <span className="size-1 rounded-full bg-line" />
          </span>
        ))}
      </div>
    </div>
  )
}
