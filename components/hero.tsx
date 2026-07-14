import Image from 'next/image'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section
      id="top"
      className="relative mx-auto max-w-6xl px-6 pt-36 pb-20 md:pt-44 md:pb-28"
    >
      {/* subtle radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[500px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.55_0.14_264/0.10),transparent)]"
      />

      <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Available for new projects
          </div>

          <div className="mt-6 space-y-3">
            <p className="text-sm font-medium uppercase tracking-[0.28em] text-muted-foreground/80">
              Santiago Lorenzo
            </p>
            <h1 className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Full Stack Software Engineer
            </h1>
          </div>

          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            I build robust backend systems, clean modern web applications, and help companies maintain, debug, and safely evolve their existing production systems.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              View Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-lg border border-border bg-transparent px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Get in Touch
            </a>
          </div>
        </div>

        <div className="mx-auto w-full max-w-xs md:max-w-none">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
            <Image
              src="/profile.png"
              alt="Portrait of Santiago Lorenzo"
              fill
              priority
              sizes="(max-width: 768px) 20rem, 24rem"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
          </div>
        </div>
      </div>
    </section>
  )
}
