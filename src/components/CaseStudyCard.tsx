import { ArrowUpRight, ChevronDown, FlaskConical, Lock } from 'lucide-react'
import type { CaseStudy } from '@/data/work'
import { buttonClass } from '@/lib/button'
import { Picture } from './Picture'
import { Tag } from './Tag'
import { UiIllustration } from './UiIllustration'

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const { visual } = study

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-colors hover:border-muted/50">
      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-bg-2">
        {'image' in visual ? (
          <Picture
            picture={visual.image}
            alt={visual.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        ) : (
          <UiIllustration
            kind={visual.illustration}
            className="size-full transition-transform duration-500 group-hover:scale-[1.02]"
          />
        )}
        {study.confidential && (
          <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full border border-line bg-surface/90 px-2.5 py-1 text-[0.7rem] font-medium text-muted backdrop-blur">
            <Lock aria-hidden className="size-3" />
            Under NDA
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="font-mono text-xs text-accent">{study.industry}</p>
        <h3 className="mt-2 text-xl font-semibold tracking-tight text-ink">{study.client}</h3>
        <p className="mt-1 text-sm text-muted">
          {study.scope} · {study.role}
        </p>
        <p className="mt-4 leading-relaxed text-pretty text-muted">{study.summary}</p>

        <details className="group/details mt-5 border-t border-line pt-4">
          <summary className="flex cursor-pointer list-none items-center justify-between text-sm font-medium text-ink select-none [&::-webkit-details-marker]:hidden">
            What I delivered
            <ChevronDown
              aria-hidden
              className="size-4 text-muted transition-transform group-open/details:rotate-180"
            />
          </summary>
          <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-muted">
            {study.built.map((item) => (
              <li key={item} className="flex gap-3">
                <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {item}
              </li>
            ))}
            {study.tested?.map((item) => (
              <li key={item} className="flex gap-3">
                <FlaskConical aria-hidden className="mt-0.5 size-4 shrink-0 text-ok" />
                {item}
              </li>
            ))}
          </ul>
        </details>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
          {study.stack?.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
          {study.link && (
            <a
              href={study.link.href}
              target="_blank"
              rel="noreferrer"
              className={buttonClass({ variant: 'secondary', size: 'sm', className: 'ml-auto' })}
              aria-label={`${study.link.label}: ${study.client}`}
            >
              {study.link.label}
              <ArrowUpRight aria-hidden />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
