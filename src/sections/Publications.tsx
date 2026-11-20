import { ArrowUpRight } from 'lucide-react'
import { ButtonLink } from '@/components/Button'
import { Picture } from '@/components/Picture'
import { SectionHeader } from '@/components/SectionHeader'
import { profile } from '@/data/profile'
import { publications } from '@/data/publications'

export function Publications() {
  if (publications.length === 0) return null

  return (
    <section id="books" className="border-y border-line bg-bg-2">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeader index="02" kicker="Writing" title="Books">
          Co-authored books with colleagues at BINUS University.
        </SectionHeader>

        <div className="grid gap-6 lg:grid-cols-2">
          {publications.map((book) => (
            <article
              key={book.title}
              className="flex h-full flex-col gap-6 rounded-sm border border-line bg-surface p-6 sm:flex-row sm:p-7"
            >
              <a
                href={book.href}
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                aria-hidden
                className="mx-auto w-32 shrink-0 self-start overflow-hidden rounded-[2px] border border-line shadow-[0_12px_24px_-10px_rgb(17_22_31/0.28)] transition-transform duration-300 hover:-translate-y-1 sm:mx-0 sm:w-36"
              >
                <Picture
                  picture={book.cover}
                  alt=""
                  sizes="144px"
                  className="aspect-[2/3] w-full object-cover"
                />
              </a>

              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <p className="font-mono text-xs text-subtle">
                  {book.date} · {book.language}
                </p>

                <div>
                  <h3 className="font-display text-xl leading-snug font-semibold text-ink">
                    {book.title}
                  </h3>
                  {book.subtitle && (
                    <p className="mt-1.5 text-sm text-pretty text-muted italic">{book.subtitle}</p>
                  )}
                </div>

                <p className="text-sm text-muted">
                  by{' '}
                  {book.authors.map((author, i) => (
                    <span key={author}>
                      {i > 0 && (i === book.authors.length - 1 ? ' & ' : ', ')}
                      <span
                        className={
                          author === profile.name ? 'font-semibold text-ink' : 'text-muted'
                        }
                      >
                        {author}
                      </span>
                    </span>
                  ))}
                </p>

                <p className="flex-1 text-sm leading-relaxed text-muted">{book.description}</p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                  <ButtonLink
                    href={book.href}
                    size="sm"
                    variant="secondary"
                    aria-label={`${book.title} on Google Play Books`}
                  >
                    Google Play Books
                    <ArrowUpRight aria-hidden />
                  </ButtonLink>
                  {book.isbn && (
                    <span className="font-mono text-xs text-subtle">ISBN {book.isbn}</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
