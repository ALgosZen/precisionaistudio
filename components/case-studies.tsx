import { Card, CardContent } from '@/components/ui/card'

const cases = [
  {
    company: 'Northwind Logistics',
    sector: 'Freight brokerage',
    metric: '4h 12m → 28s',
    metricLabel: 'average lead response time',
    summary:
      'A webform-to-CRM pipeline with AI qualification replaced two full-time coordinators worth of triage.',
  },
  {
    company: 'Halden Legal',
    sector: 'Professional services',
    metric: '1,400 hrs',
    metricLabel: 'annual review time removed',
    summary:
      'A RAG knowledge brain over 60k pages of precedent now drafts first-pass clause summaries with citations.',
  },
  {
    company: 'Verdant Home',
    sector: 'DTC retail',
    metric: '99.8%',
    metricLabel: 'order data accuracy',
    summary:
      'Eleven n8n workflows sync inventory, fulfilment and support tickets with self-healing retries.',
  },
]

export function CaseStudies() {
  return (
    <section
      id="case-studies"
      className="relative scroll-mt-20 border-y border-border/70 bg-secondary/20"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-20">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="font-mono text-xs tracking-widest text-primary uppercase">
            Case studies
          </p>
          <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl">
            Outcomes measured in hours, not impressions.
          </h2>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {cases.map((item) => (
            <Card key={item.company} className="h-full [--card-spacing:--spacing(6)]">
              <CardContent className="flex h-full flex-col gap-5">
                <div className="flex flex-col gap-1">
                  <p className="font-mono text-2xl text-primary">
                    {item.metric}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.metricLabel}
                  </p>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {item.summary}
                </p>
                <div className="mt-auto flex flex-col gap-0.5 border-t pt-4">
                  <p className="text-sm font-medium">{item.company}</p>
                  <p className="text-xs text-muted-foreground">{item.sector}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
