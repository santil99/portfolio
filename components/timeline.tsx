import { SectionHeading } from '@/components/section-heading'

const experience = [
  {
    role: 'Full Stack Web Developer',
    company: 'Getronics',
    location: 'Spain',
    period: '2023 — 2026',
    highlights: [
      'Built and maintained REST APIs powering critical enterprise workflows.',
      'Led legacy modernization efforts, refactoring monoliths into modular architectures.',
      'Owned database modeling and asynchronous processing pipelines.',
    ],
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Connectis',
    location: 'Argentina',
    period: '2021 — 2023',
    highlights: [
      'Developed internal tools that improved team productivity.',
      'Integrated authentication providers and secured application access.',
      'Set up CI/CD pipelines and worked within Agile / Scrum teams.',
    ],
  },
]

export function Timeline() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Professional timeline"
        description="Where I've been building and the impact I've made along the way."
      />

      <div className="mt-6">
        <p className="text-sm font-medium text-foreground">
          Over +5 years of hands-on experience working across backend systems, modern web apps, legacy maintenance, and safe product evolution.
        </p>
      </div>

      <div className="mt-8 space-y-px overflow-hidden rounded-2xl border border-border bg-border">
        {experience.map((item) => (
          <div
            key={item.company}
            className="grid gap-4 bg-card p-6 md:grid-cols-[1fr_2fr] md:p-8"
          >
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-300">
                {item.period}
              </p>
              <h3 className="mt-3 text-base font-medium text-foreground">
                {item.role}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {item.company} · {item.location}
              </p>
            </div>
            <ul className="space-y-2.5">
              {item.highlights.map((h) => (
                <li
                  key={h}
                  className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
