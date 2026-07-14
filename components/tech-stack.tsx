import { SectionHeading } from '@/components/section-heading'

const categories = [
  {
    label: 'Backend',
    items: ['Java', 'Spring Boot', 'REST APIs', 'ActiveMQ'],
  },
  {
    label: 'Frontend',
    items: ['Vue3 + Vuetify', 'React + Redux', 'Tailwind CSS', 'JavaScript / TypeScript'],
  },
  {
    label: 'Databases & Infra',
    items: ['OracleDB', 'MySQL', 'MariaDB', 'Docker', 'Git', 'GitLab CI/CD'],
  },
  {
    label: 'Architecture',
    items: ['Hexagonal Architecture', 'Microservices', 'Clean Code'],
  },
]

export function TechStack() {
  return (
    <section id="stack" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Toolkit"
        title="Tech stack"
        description="The tools and technologies I reach for to ship reliable, maintainable software."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {categories.map((cat) => (
          <div
            key={cat.label}
            className="rounded-2xl border border-border bg-card p-6 md:p-8"
          >
            <h3 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {cat.label}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {cat.items.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-border bg-secondary/40 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-accent/50"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
