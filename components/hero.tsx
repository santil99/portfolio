import Image from 'next/image'
import type { CSSProperties } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  SiSpringboot,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiDocker,
  SiVuedotjs,
  SiMysql,
} from '@icons-pack/react-simple-icons'

  function JavaLogo() {
    return (
      <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path fill="#0074BD" d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753 0 0 1.979 1.237 4.735 2.309-16.836 7.213-38.104-.418-24.881-4.113zm-2.059-9.415s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103 0 0 1.373 1.396 3.536 2.157-20.352 5.954-43.021.469-28.46-4.365z" />
        <path fill="#EA2D2E" d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378.001 0-29.438 7.35-15.379 23.552z" />
        <path fill="#0074BD" d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117-3.066-1.335 2.687-3.187 4.496-3.576 1.887-.409 2.965-.334 2.965-.334-3.412-2.403-22.055 4.719-9.469 6.762 34.324 5.563 62.567-2.506 53.665-6.524zm-35.97-26.134s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225 6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038 7.463-3.611 13.533-3.2 13.533-3.2zM82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345 0 0 .247-.224.322-.425z" />
        <path fill="#EA2D2E" d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498-8.15-7.354-14.128-13.828-10.118-19.852 5.889-8.842 22.204-13.131 18.6-27.328z" />
        <path fill="#0074BD" d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878 0 0-1.082 2.777-12.799 4.981-13.218 2.488-29.523 2.199-39.191.603 0 0 1.98 1.64 12.158 2.294z" />
        <path fill="#EA2D2E" d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329l.001-1.317zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119.432-1.119h.454v1.581h-.302v-1.251zm-44.19 14.79c-1.46 1.266-3.004 1.978-4.391 1.978-1.974 0-3.045-1.186-3.045-3.085 0-2.055 1.146-3.56 5.738-3.56h1.697v4.667h.001zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147 2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723 0 3.479 2.058 5.456 5.933 5.456 2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163v-.001zm13.452 0h-5.027l-6.051-19.689h4.391l3.756 12.099.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688zm19.288-4.548c-1.465 1.266-3.01 1.978-4.392 1.978-1.976 0-3.046-1.186-3.046-3.085 0-2.055 1.149-3.56 5.736-3.56h1.701v4.667h.001zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147 2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723 0 3.479 2.056 5.456 5.93 5.456 2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163v-.001zm-56.693 3.346c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269.532-1.063.753-2.43.753-5.701V92.891h4.284v22.173c0 4.375-.348 6.144-1.5 7.867z" />
      </svg>
    )
  }

  const heroTechnologies = [
    { label: 'Java', Icon: JavaLogo, color: '#0074BD' },
    { label: 'Spring Boot', Icon: SiSpringboot, color: '#6DB33F' },
    { label: 'React', Icon: SiReact, color: '#61DAFB' },
    { label: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
    { label: 'Tailwind CSS', Icon: SiTailwindcss, color: '#06B6D4' },
    { label: 'Docker', Icon: SiDocker, color: '#2496ED' },
    { label: 'Vue.js', Icon: SiVuedotjs, color: '#4FC08D' },
    { label: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  ]
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
              Full Stack Software Developer
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

      <div className="mx-auto w-full max-w-[260px] md:max-w-[300px]">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/40">
            <Image
              src="/profile.png"
              alt="Portrait of Santiago Lorenzo"
              fill
              priority
              sizes="(max-width: 768px) 16rem, 18rem"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/5" />
          </div>
        </div>
      </div>

      <div className="relative mt-24 left-1/2 right-1/2 w-screen -translate-x-1/2 px-6">
        <div className="mx-auto flex w-full max-w-[90rem] flex-row flex-nowrap items-center justify-center gap-x-12 overflow-x-auto text-zinc-400">
          {heroTechnologies.map(({ label, Icon, color }) => (
            <div
              key={label}
              className="group flex h-14 w-14 shrink-0 items-center justify-center transition-all duration-300"
              title={label}
            >
              <Icon
                className="h-10 w-10"
                style={{ color } as CSSProperties}
                aria-hidden="true"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}