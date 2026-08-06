import { CheckIcon, XIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

const oldWay = [
  'Inbound leads sit unread for hours while your best reps are on calls',
  'Someone copies the same 14 fields from a form into the CRM, by hand',
  'Six disconnected tools, none of which agree on the source of truth',
  'Reporting is a Friday afternoon spreadsheet ritual',
]

const newWay = [
  'Every lead gets a qualified, personalised response in under 30 seconds',
  'Hands-off CRM sync — records created, enriched and assigned automatically',
  'One orchestration layer in n8n wiring your whole stack together',
  '99.8% data accuracy with self-healing retries and audit logs',
]

export function ProblemSolution() {
  return (
    <section
      id="process"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20"
    >
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="font-mono text-xs tracking-widest text-primary uppercase">
          The delta
        </p>
        <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl">
          Same team. Same tools. Completely different throughput.
        </h2>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-2">
        <ComparisonCard
          title="The Old Way"
          description="Manual handoffs, human latency, invisible leaks."
          items={oldWay}
          tone="negative"
        />
        <ComparisonCard
          title="The Precision AI Way"
          description="Deterministic pipelines with AI judgement where it matters."
          items={newWay}
          tone="positive"
        />
      </div>
    </section>
  )
}

function ComparisonCard({
  title,
  description,
  items,
  tone,
}: {
  title: string
  description: string
  items: string[]
  tone: 'negative' | 'positive'
}) {
  const positive = tone === 'positive'
  const Icon = positive ? CheckIcon : XIcon

  return (
    <Card
      className={cn(
        'h-full [--card-spacing:--spacing(6)]',
        positive && 'bg-card ring-primary/25',
      )}
    >
      <CardHeader>
        <CardTitle
          className={cn('text-lg', positive ? 'text-foreground' : 'text-muted-foreground')}
        >
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <li key={item} className="flex gap-3">
              <span
                className={cn(
                  'mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full',
                  positive
                    ? 'bg-primary/15 text-primary'
                    : 'bg-muted text-muted-foreground',
                )}
                aria-hidden="true"
              >
                <Icon className="size-3" />
              </span>
              <span
                className={cn(
                  'text-sm leading-relaxed',
                  positive ? 'text-foreground' : 'text-muted-foreground',
                )}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
