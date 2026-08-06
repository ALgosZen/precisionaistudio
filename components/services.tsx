import {
  BrainCircuitIcon,
  GaugeIcon,
  WorkflowIcon,
  type LucideIcon,
} from 'lucide-react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Service = {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

const services: Service[] = [
  {
    icon: GaugeIcon,
    title: 'Speed-to-Lead Pipelines',
    description:
      'Contact a lead before your competitor even opens their inbox.',
    points: [
      'Instant auto-response across email and SMS',
      'AI lead scoring against your ICP',
      'Direct calendar booking with round-robin routing',
    ],
  },
  {
    icon: WorkflowIcon,
    title: 'Autonomous Ops & n8n Workflows',
    description:
      'The orchestration layer that runs the boring half of your company.',
    points: [
      'Custom multi-agent workflows with human checkpoints',
      'API integrations across your existing stack',
      'Two-way database sync with retry and audit logging',
    ],
  },
  {
    icon: BrainCircuitIcon,
    title: 'Custom AI Knowledge Brains',
    description:
      'A private model that actually knows how your business works.',
    points: [
      'RAG and vector systems trained on internal data',
      'Document parsing for contracts, invoices and SOPs',
      'Grounded client support with citations, not guesses',
    ],
  },
]

export function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-20 border-y border-border/70 bg-secondary/20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            Core services
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Three systems that compound on each other.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="h-full [--card-spacing:--spacing(6)] transition-colors hover:ring-primary/30"
            >
              <CardHeader>
                <span
                  className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25"
                  aria-hidden="true"
                >
                  <service.icon className="size-5" />
                </span>
                <CardTitle className="text-lg">{service.title}</CardTitle>
                <CardDescription className="leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="flex flex-col gap-3 border-t pt-4">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
