import { Layers, Server, Database, RefreshCw } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'

const services = [
  {
    icon: Layers,
    title: 'SaaS & Web Applications',
    description:
      'Building high-performance, responsive web apps using React, Vue3, and modern frontend tech.',
  },
  {
    icon: Server,
    title: 'Robust Backend & APIs',
    description:
      'Designing scalable REST APIs, microservices, and asynchronous systems.',
  },
  {
    icon: Database,
    title: 'Database Architecture',
    description:
      'Modeling, normalization, and optimization of relational databases (PostgreSQL, MySQL, OracleDB).',
  },
  {
    icon: RefreshCw,
    title: 'Application Evolution & Debugging',
    description:
      'Specialized in jumping into existing codebases to identify bugs, refactor legacy code safely, and implement new features using Clean Architecture principles without breaking production.',
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Services"
        title="What I can help you with"
        description="End-to-end engineering across the stack — from data models to polished interfaces."
      />

      <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {services.map((service) => {
          const Icon = service.icon
          return (
            <div
              key={service.title}
              className="group relative bg-card p-6 transition-colors hover:bg-secondary/40 md:p-8"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-secondary/60 text-foreground transition-colors group-hover:border-accent/50">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-medium text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
