import { Check, Copy, FileDown, Mail } from 'lucide-react'
import { useEffect, useState } from 'react'
import { PixelButton, PixelLink } from '@/components/PixelButton'
import { PixelSnowflake } from '@/components/PixelSnowflake'
import { Reveal } from '@/components/Reveal'
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
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <Reveal className="relative mx-auto max-w-3xl overflow-hidden pixel-box px-6 py-14 text-center sm:px-12">
        <PixelSnowflake className="absolute -top-6 -right-6 size-32 rotate-12 text-ice/10" />
        <PixelSnowflake className="absolute -bottom-8 -left-8 size-28 -rotate-12 text-pink/10" />

        <p className="font-mono text-xs font-semibold tracking-[0.3em] text-pink uppercase">
          ▶ Stage 06 · Contact
        </p>
        <h2 className="mt-4 font-pixel text-xl leading-snug text-ink text-glow sm:text-3xl">
          Continue?
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-lg text-muted">
          Have a project, a role, or just want to talk games? My inbox is open, so insert coin
          below.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <PixelLink href={`mailto:${profile.email}`} size="lg">
            <Mail aria-hidden />
            Say hello
          </PixelLink>
          <PixelButton variant="secondary" size="lg" onClick={copyEmail}>
            {copied ? <Check aria-hidden /> : <Copy aria-hidden />}
            <span aria-live="polite">{copied ? 'Copied!' : 'Copy email'}</span>
          </PixelButton>
          {profile.resumeUrl && (
            <PixelLink href={profile.resumeUrl} size="lg" variant="secondary" download>
              <FileDown aria-hidden />
              Download CV
            </PixelLink>
          )}
        </div>

        <p className="mt-6 font-mono text-sm text-ice">{profile.email}</p>

        <ul className="mt-8 flex justify-center gap-3" aria-label="Elsewhere">
          {profile.socials
            .filter((social) => social.icon !== 'email')
            .map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 border-2 border-line px-3 py-2 font-mono text-sm text-muted transition-colors hover:border-ice hover:text-ice"
                >
                  <SocialIcon icon={social.icon} className="size-4" />
                  {social.label}
                </a>
              </li>
            ))}
        </ul>
      </Reveal>
    </section>
  )
}
