import { Mail, Briefcase, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

const contactLinks = [
  { label: 'Email', href: 'mailto:hello@santiagolorenzo.dev', icon: Mail },
  { label: 'Upwork', href: 'https://upwork.com', icon: Briefcase },
  { label: 'GitHub', href: 'https://github.com', icon: GithubIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedinIcon },
]

export function ContactFooter() {
  return (
    <footer id="contact" className="relative border-t border-border">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_50%_60%_at_50%_0%,oklch(0.55_0.14_264/0.10),transparent)]"
      />

      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Let&apos;s build something scalable together.
          </h2>
          <p className="mt-5 text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            Have a project in mind or a legacy system that needs a second life?
            I&apos;m always open to a conversation.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            {contactLinks.map((link) => {
              const Icon = link.icon
              const isPrimary = link.label === 'Email'
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className={
                    isPrimary
                      ? 'group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90'
                      : 'group inline-flex items-center gap-2 rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary'
                  }
                >
                  <Icon className="h-4 w-4" />
                  {link.label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              )
            })}
          </div>
        </div>

        <div className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>
            Designed &amp; Coded by Santiago Lorenzo{' '}
            <span className="text-border">•</span> Open Source
          </p>
          <p className="font-mono">© {new Date().getFullYear()}</p>
        </div>
      </div>
    </footer>
  )
}
