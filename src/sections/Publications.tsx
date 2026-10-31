import { ArrowUpRight } from 'lucide-react'
import { Picture } from '@/components/Picture'
import { Reveal } from '@/components/Reveal'
import { Section } from '@/components/Section'
import { profile } from '@/data/profile'
import { publications } from '@/data/publications'

export function Publications() {
  if (publications.length === 0) return null

  return (
    <Section
      id="writing"
      index={7}
      backdrop="dots"
      glow="right"
      eyebrow="Writing"
      title="Books"
      intro="Co-written with colleagues at BINUS University."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        {publications.map((book, index) => (
          <Reveal key={book.title} delay={index * 0.08} className="h-full">
            <article className="flex h-full flex-col gap-6 rounded-2xl border border-line bg-surface p-6 sm:flex-row">
              <Picture
                picture={book.cover}
                alt={`Cover of ${book.title}`}
                sizes="128px"
                className="aspect-[2/3] w-28 shrink-0 rounded-md border border-line object-cover shadow-sm sm:w-32"
              />
              <div className="flex min-w-0 flex-1 flex-col">
                <p className="font-mono text-xs text-muted">
                  {book.date} · {book.language}
                </p>
                <h3 className="mt-2 text-lg font-semibold tracking-tight text-ink">{book.title}</h3>
                {book.subtitle && (
                  <p className="mt-1 text-sm text-pretty text-muted italic">{book.subtitle}</p>
                )}
                <p className="mt-2 text-sm text-muted">
                  {book.authors.map((author, i) => (
                    <span key={author}>
                      {i > 0 && (i === book.authors.length - 1 ? ' & ' : ', ')}
                      <span
                        className={author === profile.name ? 'font-medium text-ink' : undefined}
                      >
                        {author}
                      </span>
                    </span>
                  ))}
                </p>
                <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-muted">
                  {book.description}
                </p>
                <div className="mt-auto flex flex-wrap items-center gap-x-5 gap-y-2 pt-4 text-sm">
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${book.title} on Google Play Books`}
                    className="inline-flex items-center gap-1.5 font-medium text-ink hover:text-accent"
                  >
                    Google Play Books <ArrowUpRight aria-hidden className="size-4" />
                  </a>
                  {book.isbn && (
                    <span className="font-mono text-xs text-muted">ISBN {book.isbn}</span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
