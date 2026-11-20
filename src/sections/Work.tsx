import { ArrowUpRight } from 'lucide-react'
import { useCallback, useState } from 'react'
import { CaseStudyCard } from '@/components/CaseStudyCard'
import { Lightbox, type LightboxItem } from '@/components/Lightbox'
import { Reveal } from '@/components/Reveal'
import { Screenshot } from '@/components/Screenshot'
import { Section } from '@/components/Section'
import { Tag } from '@/components/Tag'
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
        <ul className="mt-6 grid gap-x-10 gap-y-10 border-t border-line pt-8 md:grid-cols-2 lg:grid-cols-3">
          {moreWork.map((item) => (
            <li
              key={item.slug}
              id={`work-${item.slug}`}
              className={item.shot ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : undefined}
            >
              {item.shot && (
                <Screenshot
                  image={item.shot.image}
                  title={item.title}
                  alt={item.shot.alt}
                  badge={item.context}
                  sizes="(min-width: 1024px) 370px, (min-width: 768px) 700px, 100vw"
                  onPreview={setPreview}
                  className="mb-5 rounded-xl border border-line"
                />
              )}
              <p className="font-mono text-xs text-muted">{item.context}</p>
              <h4 className="mt-1 font-semibold text-ink">{item.title}</h4>
              <p className="text-sm text-muted">{item.role}</p>
              <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
              {(item.stack || item.link) && (
                <div className="mt-3 flex flex-wrap items-center gap-1.5">
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
