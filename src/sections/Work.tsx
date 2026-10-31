import { CaseStudyCard } from '@/components/CaseStudyCard'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { Tag } from '@/components/Tag'
import { caseStudies, moreWork } from '@/data/work'

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected work"
      title="Systems businesses run on"
      intro="ERP, HR, procurement, content and reporting platforms for real companies. Much of it is under NDA, so those projects are described without names and shown as illustrations."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {caseStudies.map((study, index) => (
          <Reveal key={study.slug} delay={(index % 2) * 0.08} className="h-full">
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <h3 className="text-sm font-medium text-ink">More work</h3>
        <ul className="mt-5 grid gap-x-8 gap-y-6 border-t border-line pt-6 sm:grid-cols-2 lg:grid-cols-3">
          {moreWork.map((item) => (
            <li key={item.title}>
              <p className="font-mono text-xs text-muted">{item.context}</p>
              <p className="mt-1 font-medium text-ink">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">{item.description}</p>
              {item.stack && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.stack.map((tech) => (
                    <Tag key={tech}>{tech}</Tag>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  )
}
