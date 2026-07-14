import { ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'

const projects = [
  {
    title: 'This Portfolio',
    description:
      'Highly optimized, open-source portfolio designed with clean structure, accessible markup, and fast loading times.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    links: { demo: '#', source: '#' },
  },
]

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Featured Work"
        title="Selected projects"
        description="A few case studies showing how I approach problems, architecture, and delivery."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-colors hover:border-white/20"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-medium leading-snug text-foreground">
                {project.title}
              </h3>
              <div className="flex shrink-0 items-center gap-1">
                <a
                  href={project.links.source}
                  aria-label={`${project.title} source code`}
                  className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <GithubIcon className="h-4 w-4" />
                </a>
                <a
                  href={project.links.demo}
                  aria-label={`${project.title} live demo`}
                  className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-border bg-secondary/50 px-2 py-1 font-mono text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
