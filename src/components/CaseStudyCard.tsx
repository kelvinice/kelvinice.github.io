import { ArrowUpRight, FlaskConical, Lock } from 'lucide-react'
import type { CaseStudy } from '@/data/work'
import { buttonClass } from '@/lib/button'
import { cn } from '@/lib/cn'
import type { LightboxItem } from './Lightbox'
import { Screenshot } from './Screenshot'
import { Tag } from './Tag'

type Props = { study: CaseStudy; onPreview: (item: LightboxItem) => void }

/**
 * A featured case study with everything on its face: role, what was built, how it was tested
 * and the one result to remember. Public work shows a screenshot; NDA work is text-led.
 */
export function CaseStudyCard({ study, onPreview }: Props) {
  const { shot } = study

  return (
    <article
      id={`work-${study.slug}`}
      aria-labelledby={`work-${study.slug}-title`}
      className={cn(
        'grid overflow-hidden rounded-2xl border border-line bg-surface',
        shot && 'lg:grid-cols-[1.05fr_1fr]',
      )}
    >
      {shot && (
        // The screenshot keeps its 16:10 frame (never stretched or side-cropped) on a tinted panel.
        <div className="border-b border-line bg-bg-2 p-4 sm:p-6 lg:border-r lg:border-b-0">
          <Screenshot
            image={shot.image}
            title={study.client}
            alt={shot.alt}
            badge={study.credit ?? study.industry}
            sizes="(min-width: 1024px) 540px, 100vw"
            onPreview={onPreview}
            className="rounded-lg border border-line shadow-sm"
          />
        </div>
      )}

      <div className="flex flex-col p-6 sm:p-8">
        <p className="flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-accent">
          {study.credit ? `${study.credit} · ${study.industry}` : study.industry}
          {study.confidential && (
            <span className="inline-flex items-center gap-1 text-muted">
              <Lock aria-hidden className="size-3 text-signal" />
              Under NDA
            </span>
          )}
        </p>
        <h3
          id={`work-${study.slug}-title`}
          className="mt-2 text-2xl font-semibold tracking-tight text-ink"
        >
          {study.client}
        </h3>
        <p className="mt-1 text-sm text-muted">
          {study.scope} · {study.role}
        </p>
        <p className="mt-4 leading-relaxed text-pretty text-muted">{study.summary}</p>

        {study.evidence && (
          <p className="mt-5 border-l-2 border-accent pl-4 text-[0.95rem] leading-relaxed font-medium text-ink">
            {study.evidence}
          </p>
        )}

        <div className={cn('mt-6 grid gap-6', !shot && 'md:grid-cols-2')}>
          <div>
            <h4 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
              What I built
            </h4>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
              {study.built.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {study.tested && (
            <div>
              <h4 className="font-mono text-xs tracking-[0.14em] text-muted uppercase">
                How it was tested
              </h4>
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                {study.tested.map((item) => (
                  <li key={item} className="flex gap-3">
                    <FlaskConical aria-hidden className="mt-0.5 size-4 shrink-0 text-ok" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-7">
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
