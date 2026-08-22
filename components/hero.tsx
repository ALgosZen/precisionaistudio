import { ArrowRightIcon, ZapIcon } from 'lucide-react'

import { AuditDialog } from '@/components/audit-dialog'
import { PipelineVisualizer } from '@/components/pipeline-visualizer'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 grid-backdrop [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-[46rem] -translate-x-1/2 rounded-full bg-primary/15 blur-[100px]"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-14 px-5 pt-20 pb-24 lg:pt-28">
        <div className="flex max-w-3xl flex-col items-start gap-6">
          <span className="animate-rise-in inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary">
            <ZapIcon className="size-3.5" aria-hidden="true" />
            Next-Gen AI &amp; Workflow Automation
          </span>
          <h1 className="animate-rise-in text-4xl leading-[1.05] font-medium tracking-tight text-balance sm:text-5xl lg:text-6xl [animation-delay:80ms]">
            Run Your Business on Autopilot.
            <span className="block text-muted-foreground">
              Get 15+ Hours Back Weekly
            </span>
          </h1>
          <p className="animate-rise-in max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg [animation-delay:160ms]">
            We build autonomous AI agents, intelligent lead pipelines, and custom
            n8n workflows that eliminate manual data entry and scale your
            business.
          </p>
          <div className="animate-rise-in flex w-full flex-col gap-3 pt-2 sm:flex-row sm:items-center [animation-delay:240ms]">
            <AuditDialog>
              <Button size="lg" className="h-11 px-5 sm:w-auto">
                Book $1,500 AI Audit
                <ArrowRightIcon data-icon="inline-end" />
              </Button>
            </AuditDialog>
            <Button
              variant="outline"
              size="lg"
              className="h-11 px-5"
              nativeButton={false}
              render={<a href="#case-studies" />}
            >
              Explore Case Studies
            </Button>
          </div>
        </div>

        <div className="animate-rise-in [animation-delay:320ms]">
          <PipelineVisualizer />
        </div>
      </div>
    </section>
  )
}
