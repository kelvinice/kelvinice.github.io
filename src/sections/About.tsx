import avatar from '@/assets/images/profile.jpg?avatar'
import { Picture } from '@/components/Picture'
import { SectionHeader } from '@/components/SectionHeader'
import { profile } from '@/data/profile'
import { cn } from '@/lib/cn'

export function About() {
  return (
    <section id="about" className="border-t border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-4 pt-20 pb-14 sm:px-6">
        <SectionHeader index="04" kicker="Background" title="About" />

        <div className="grid items-start gap-10 lg:grid-cols-12">
          <div className="space-y-5 text-base leading-[1.75] sm:text-[1.05rem] lg:col-span-7">
            {profile.bio.map((paragraph, index) => (
              <p
                key={paragraph.slice(0, 32)}
                className={cn(index === 0 ? 'text-ink' : 'text-muted')}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <aside className="rounded-sm border border-line bg-surface p-6 lg:col-span-5">
            <div className="flex items-center gap-4 border-b border-line pb-5">
              <div className="shrink-0 overflow-hidden rounded-sm border border-line bg-bg-2">
                <Picture
                  picture={avatar}
                  alt="Kelvin's avatar"
                  sizes="64px"
                  className="size-16 object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="font-display text-lg font-semibold text-ink">{profile.name}</p>
                <p className="font-mono text-xs text-muted">@{profile.handle.toLowerCase()}</p>
              </div>
            </div>

            <dl className="divide-y divide-line">
              {profile.stats.map(({ label, value }) => (
                <div
                  key={label}
                  className="grid grid-cols-[7.5rem_1fr] items-baseline gap-3 py-3 text-sm"
                >
                  <dt className="font-mono text-xs text-subtle uppercase">{label}</dt>
                  <dd className="text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  )
}
