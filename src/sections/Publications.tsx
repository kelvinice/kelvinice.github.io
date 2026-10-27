import { SiGoogleplay } from 'react-icons/si'
import { PixelLink } from '@/components/PixelButton'
import { Picture } from '@/components/Picture'
import { Reveal } from '@/components/Reveal'
import { SectionHeading } from '@/components/SectionHeading'
import { profile } from '@/data/profile'
import { publications } from '@/data/publications'

export function Publications() {
  if (publications.length === 0) return null

  return (
    <section id="books" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading kicker="Stage 05 · Books" title="Spellbooks">
        Books I’ve co-written with colleagues at BINUS.
      </SectionHeading>

      <div className="grid gap-8 lg:grid-cols-2">
        {publications.map((book, index) => (
          <Reveal key={book.title} delay={index * 0.05} className="h-full">
            <article className="flex h-full flex-col gap-6 pixel-box p-5 sm:flex-row sm:p-6">
              <a
                href={book.href}
                target="_blank"
                rel="noreferrer"
                tabIndex={-1}
                aria-hidden
                className="mx-auto w-36 shrink-0 self-start border-3 border-line shadow-[4px_4px_0_0_var(--shadow)] transition-transform hover:-translate-y-1 hover:-rotate-2 sm:mx-0"
              >
                <Picture
                  picture={book.cover}
                  alt=""
                  sizes="144px"
                  className="aspect-[2/3] w-full object-cover"
                />
              </a>

              <div className="flex min-w-0 flex-1 flex-col gap-3">
                <div>
                  <h3 className="font-pixel text-xs leading-relaxed text-ink">{book.title}</h3>
                  {book.subtitle && (
                    <p className="mt-2 text-sm text-pretty text-muted italic">{book.subtitle}</p>
                  )}
                </div>

                <p className="font-mono text-xs text-gold">
                  {book.date} · {book.language}
                </p>

                <p className="text-sm text-muted">
                  by{' '}
                  {book.authors.map((author, i) => (
                    <span key={author}>
                      {i > 0 && (i === book.authors.length - 1 ? ' & ' : ', ')}
                      <span
                        className={author === profile.name ? 'font-semibold text-ice' : 'text-ink'}
                      >
                        {author}
                      </span>
                    </span>
                  ))}
                </p>

                <p className="flex-1 text-sm leading-relaxed text-muted">{book.description}</p>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                  <PixelLink
                    href={book.href}
                    size="sm"
                    aria-label={`${book.title} on Google Play Books`}
                  >
                    <SiGoogleplay aria-hidden />
                    Google Play
                  </PixelLink>
                  {book.isbn && (
                    <span className="font-mono text-xs text-muted">ISBN {book.isbn}</span>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
