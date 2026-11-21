import { ArrowUpRight } from 'lucide-react'
import { useCallback, useState } from 'react'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { Lightbox, type LightboxItem } from '@/components/Lightbox'
import { Reveal } from '@/components/Reveal'
import { Screenshot } from '@/components/Screenshot'
import { Section } from '@/components/Section'
import { Tag } from '@/components/Tag'
import { cn } from '@/lib/cn'
import { caseStudies, moreWork } from '@/data/work'

export function Work() {
  const [preview, setPreview] = useState<LightboxItem | null>(null)
  // Stable, so the Lightbox's open/close effect only runs when the preview changes.
  const closePreview = useCallback(() => setPreview(null), [])

  return (
    <Section
      id="work"
      backdrop="dots"
      eyebrow="Selected work"
      title="Systems businesses run on"
      intro="Three projects in detail, then the rest in brief. Work under NDA is described without the client’s name."
    >
      <div className="space-y-8">
        {caseStudies.map((study) => (
          <Reveal key={study.slug}>
            <CaseStudyCard study={study} onPreview={setPreview} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <h3 className="text-xl font-semibold tracking-tight text-ink">More work</h3>
        <ul className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {moreWork.map((item) => (
            <li
              key={item.slug}
              id={`work-${item.slug}`}
              className={cn(
                'flex flex-col rounded-2xl border border-line bg-surface p-5 shadow-sm shadow-black/5 transition-colors duration-150 hover:border-accent/40 sm:p-6',
                item.shot && 'md:col-span-2 lg:col-span-1 lg:row-span-2',
              )}
            >
              {item.shot && (
                <Screenshot
                  image={item.shot.image}
                  title={item.title}
                  alt={item.shot.alt}
                  badge={item.context}
                  highlight={item.shot.note}
                  sizes="(min-width: 1024px) 370px, (min-width: 768px) 700px, 100vw"
                  onPreview={setPreview}
                  className={
                    item.shot.note
                      ? 'rounded-xl border border-line'
                      : 'mb-5 rounded-xl border border-line'
                  }
                />
              )}
              {item.shot?.note && (
                <p className="mt-2 mb-5 text-xs leading-relaxed text-muted italic">
                  {item.shot.note}
                </p>
              )}
              <p className="font-mono text-xs text-muted">{item.context}</p>
              <h4 className="mt-1 font-semibold text-ink">{item.title}</h4>
              <p className="text-sm text-muted">{item.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              {(item.stack || item.link) && (
                <div className="mt-auto flex flex-wrap items-center gap-1.5 pt-4">
                  {item.stack?.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${item.link.label}: ${item.title}`}
                      className="inline-flex items-center gap-1 text-sm font-medium text-ink hover:text-accent"
                    >
                      {item.link.label} <ArrowUpRight aria-hidden className="size-4" />
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </Reveal>

      <Lightbox item={preview} onClose={closePreview} />
    </Section>
  )
}
