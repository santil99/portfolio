import { SiteNav } from '@/components/site-nav'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { TechStack } from '@/components/tech-stack'
import { Timeline } from '@/components/timeline'
import { ContactFooter } from '@/components/contact-footer'

export default function Page() {
  return (
    <div className="min-h-dvh scroll-smooth bg-background">
      <SiteNav />
      <main>
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <Timeline />
      </main>
      <ContactFooter />
    </div>
  )
}
