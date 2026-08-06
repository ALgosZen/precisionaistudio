import { CalendarClockIcon, MapPinIcon, ShieldCheckIcon } from 'lucide-react'

import { IntakeForm } from '@/components/intake-form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const assurances = [
  {
    icon: CalendarClockIcon,
    title: 'Audit slots open weekly',
    body: 'We take three new audits per month so every engagement gets a senior architect.',
  },
  {
    icon: ShieldCheckIcon,
    title: 'Your data stays yours',
    body: 'NDA-first, self-hosted n8n where required, and no training on your corpus.',
  },
  {
    icon: MapPinIcon,
    title: 'Remote, timezone-aligned',
    body: 'Working hours overlap with EU and US teams, with async updates in Slack.',
  },
]

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20"
    >
      <div className="grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-start lg:gap-14">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-xs tracking-widest text-primary uppercase">
              Get started
            </p>
            <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl">
              Tell us where the manual work lives.
            </h2>
            <p className="text-base leading-relaxed text-muted-foreground">
              Send the form and we will map your highest-leverage automation
              before the first call — so the call is about the plan, not
              discovery.
            </p>
          </div>
          <ul className="flex flex-col gap-6">
            {assurances.map((item) => (
              <li key={item.title} className="flex gap-4">
                <span
                  className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary ring-1 ring-primary/25"
                  aria-hidden="true"
                >
                  <item.icon className="size-4" />
                </span>
                <div className="flex flex-col gap-1">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Card className="[--card-spacing:--spacing(6)] ring-primary/20">
          <CardHeader>
            <CardTitle className="text-lg">
              Request Your Custom Blueprint
            </CardTitle>
            <CardDescription>
              Four fields. One human reply within a business day.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <IntakeForm idPrefix="contact" />
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
