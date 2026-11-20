import { ArrowUpRight, Check, Copy, FileDown, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button, ButtonLink } from '@/components/Button'
import { SectionHeader } from '@/components/SectionHeader'
import { SocialIcon } from '@/components/SocialIcon'
import { profile } from '@/data/profile'

export function Contact() {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (!copied) return
    const timer = setTimeout(() => setCopied(false), 2000)
    return () => clearTimeout(timer)
  }, [copied])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
    } catch {
      window.location.href = `mailto:${profile.email}`
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeader index="05" kicker="Contact" title="Get in touch" />

      <div className="grid items-start gap-10 lg:grid-cols-12">
        <div className="space-y-6 lg:col-span-7">
          <p className="max-w-xl font-display text-xl leading-snug font-medium text-ink sm:text-2xl">
            Have a software problem, research idea, teaching question, or game to talk over?
          </p>
          <p className="max-w-lg text-base leading-relaxed text-muted">
            My inbox is always open. Reach out directly by email or connect on GitHub and LinkedIn.
          </p>

          <div className="flex flex-wrap gap-3 pt-1">
            <ButtonLink href={`mailto:${profile.email}`} size="lg">
              <Mail aria-hidden />
              Say hello
            </ButtonLink>
            <Button variant="secondary" size="lg" onClick={copyEmail}>
              {copied ? <Check aria-hidden /> : <Copy aria-hidden />}
              <span aria-live="polite">{copied ? 'Copied' : 'Copy email'}</span>
            </Button>
            {profile.resumeUrl && (
              <ButtonLink href={profile.resumeUrl} size="lg" variant="secondary" download>
                <FileDown aria-hidden />
                Download CV
              </ButtonLink>
            )}
          </div>
        </div>

        <ul
          aria-label="Direct channels"
          className="divide-y divide-line rounded-sm border border-line bg-surface lg:col-span-5"
        >
          {profile.socials.map((social) => {
            const external = social.href.startsWith('http')
            const detail =
              social.icon === 'email'
                ? profile.email
                : social.href.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
            return (
              <li key={social.label}>
                <a
                  href={social.href}
                  {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
                  className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-bg-2"
                >
                  <span className="flex items-center gap-3 text-sm font-medium text-ink">
                    <SocialIcon
                      icon={social.icon}
                      className="size-4 text-muted group-hover:text-accent"
                    />
                    {social.label}
                  </span>
                  <span className="flex min-w-0 items-center gap-1.5 font-mono text-xs text-muted group-hover:text-ink">
                    <span className="truncate">{detail}</span>
                    <ArrowUpRight className="size-3.5 shrink-0 text-subtle" aria-hidden />
                  </span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
