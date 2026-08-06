import { CaseStudies } from '@/components/case-studies'
import { Contact } from '@/components/contact'
import { Hero } from '@/components/hero'
import { Pricing } from '@/components/pricing'
import { ProblemSolution } from '@/components/problem-solution'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteNav } from '@/components/site-nav'

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteNav />
      <main>
        <Hero />
        <ProblemSolution />
        <Services />
        <Pricing />
        <CaseStudies />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  )
}
