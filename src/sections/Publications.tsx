import { ArrowUpRight } from 'lucide-react'
import { Snowflake } from '@/components/Logo'
import { Picture } from '@/components/Picture'
import { Reveal } from '@/components/Reveal'
import { profile } from '@/data/profile'
import { publications } from '@/data/publications'

/** Co-authors in plain English: "A", "A and B", "A, B and C". */
function listNames(names: string[]) {
  if (names.length <= 1) return names.join('')
  return `${names.slice(0, -1).join(', ')} and ${names.at(-1)}`
}

/** The books, as a slim band near the bottom of the page (not a main section, no nav item). */
export function Publications() {
  if (publications.length === 0) return null

  return (
    <section id="writing" aria-labelledby="writing-title" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 sm:px-6 md:grid-cols-[12rem_1fr] md:gap-10">
        <div>
          <p className="flex items-center gap-2 font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
            <Snowflake className="size-3.5" />
            Writing
          </p>
          <h2 id="writing-title" className="mt-2 text-xl font-semibold tracking-tight text-ink">
            Books
          </h2>
        </div>

        <Reveal as="ul" className="grid gap-6 sm:grid-cols-2">
          {publications.map((book) => {
            const coauthors = book.authors.filter((author) => author !== profile.name)
            return (
              <li key={book.title} className="flex gap-4">
                <Picture
                  picture={book.cover}
                  alt={`Cover of ${book.title}`}
                  sizes="64px"
                  className="aspect-[2/3] w-16 shrink-0 rounded border border-line object-cover shadow-sm"
                />
                <div className="min-w-0">
                  <a
                    href={book.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${book.title} on Google Play Books`}
                    className="font-medium text-ink hover:text-accent"
                  >
                    {book.title}
                    <ArrowUpRight aria-hidden className="ml-1 inline size-3.5 align-[-0.1em]" />
                  </a>
                  {coauthors.length > 0 && (
                    <p className="mt-1 text-sm text-muted">With {listNames(coauthors)}</p>
                  )}
                  <p className="mt-1 font-mono text-xs text-muted">
                    {book.date} · {book.language}
                    {book.isbn && ` · ISBN ${book.isbn}`}
                  </p>
                </div>
              </li>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
