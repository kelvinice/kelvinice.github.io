import { ArrowUpRight, Check, Copy, Mail } from 'lucide-react'
import { useState } from 'react'
import { Reveal } from '@/components/Reveal'
import { SocialIcon } from '@/components/SocialIcon'
import { profile } from '@/data/profile'
import { buttonClass } from '@/lib/button'

const briefChecklist = [
  'What the system should do, and for whom',
  'What exists today (spreadsheets, an old app, nothing)',
  'Your timeline and a rough budget range',
]

export function Contact() {
  const [copied, setCopied] = useState(false)
  const links = profile.socials.filter((social) => social.icon !== 'email')

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard can be blocked; the mailto link still works.
    }
  }

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 md:py-28">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 sm:p-12 md:p-16">
          <div aria-hidden className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
          <div
            aria-hidden
            className="pointer-events-none absolute -right-24 -bottom-32 size-96 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="mb-3 font-mono text-xs font-medium tracking-[0.18em] text-accent uppercase">
                Contact
              </p>
              <h2
                id="contact-title"
                className="text-3xl font-semibold tracking-tight text-balance text-ink md:text-5xl"
              >
                Have a project in mind?
              </h2>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted">
                I take on freelance projects, from a new business system to rescuing an existing
                one. Tell me what you’re building and I’ll get back to you.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a href={`mailto:${profile.email}`} className={buttonClass({ size: 'lg' })}>
                  <Mail aria-hidden />
                  {profile.email}
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className={buttonClass({ variant: 'secondary', size: 'lg' })}
                >
                  {copied ? <Check aria-hidden className="text-ok" /> : <Copy aria-hidden />}
                  {copied ? 'Copied' : 'Copy email'}
                </button>
                <span role="status" className="sr-only">
                  {copied ? 'Email address copied' : ''}
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-5 text-sm">
                {links.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 font-medium text-muted hover:text-ink"
                  >
                    <SocialIcon icon={social.icon} className="size-4.5" />
                    {social.label}
                    <ArrowUpRight aria-hidden className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-bg-2 p-6">
              <p className="text-sm font-medium text-ink">A good first message includes</p>
              <ul className="mt-4 space-y-3 text-sm text-muted">
                {briefChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check aria-hidden className="mt-0.5 size-4 shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
