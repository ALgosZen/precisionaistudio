'use client'

import * as React from 'react'
import { CheckIcon } from 'lucide-react'

import { cn } from '@/lib/utils'
import { AuditDialog } from '@/components/audit-dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

type Tier = {
  id: string
  name: string
  price: string
  cadence: string
  description: string
  features: string[]
  cta: string
  featured?: boolean
}

const tiers: Tier[] = [
  {
    id: 'audit',
    name: 'Audit & Blueprint',
    price: '$1,500',
    cadence: 'one-time',
    description: 'Find the leaks before spending a dollar on build.',
    features: [
      'Full operational audit of current processes',
      'End-to-end workflow mapping',
      'Architecture blueprint you own outright',
      '90-minute findings walkthrough',
    ],
    cta: 'Book the audit',
  },
  {
    id: 'growth',
    name: 'Growth System',
    price: '$6,000',
    cadence: 'setup + $1,500/mo retainer',
    description: 'The full automation layer, built and actively maintained.',
    features: [
      '3–5 interconnected custom workflows',
      'Active maintenance and monitoring',
      'Model and prompt optimization cycles',
      'Priority Slack channel with your architect',
    ],
    cta: 'Start the build',
    featured: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise Agent Stack',
    price: 'Custom',
    cadence: 'scoped per engagement',
    description: 'Private infrastructure for regulated and high-volume teams.',
    features: [
      'Full RAG vector setup on your corpus',
      'Dedicated server deployment',
      'Custom SLA and incident response',
      'Team enablement and internal documentation',
    ],
    cta: 'Talk to an architect',
  },
]

export function Pricing() {
  const [selected, setSelected] = React.useState('growth')

  return (
    <section
      id="pricing"
      className="mx-auto w-full max-w-6xl scroll-mt-20 px-5 py-20"
    >
      <div className="flex max-w-2xl flex-col gap-4">
        <p className="font-mono text-xs tracking-widest text-primary uppercase">
          Engagement tiers
        </p>
        <h2 className="text-3xl font-medium tracking-tight text-balance sm:text-4xl">
          Priced like infrastructure, not like an agency.
        </h2>
        <p className="text-base leading-relaxed text-muted-foreground">
          Every engagement starts with the audit. Its fee is credited toward your
          build if you continue within 30 days.
        </p>
      </div>

      <div className="mt-10 grid items-start gap-5 lg:grid-cols-3">
        {tiers.map((tier) => {
          const isSelected = selected === tier.id
          return (
            <Card
              key={tier.id}
              onMouseEnter={() => setSelected(tier.id)}
              onFocus={() => setSelected(tier.id)}
              className={cn(
                'h-full [--card-spacing:--spacing(6)] transition-all duration-300',
                isSelected
                  ? 'ring-2 ring-primary/50 lg:-translate-y-1'
                  : 'ring-foreground/10',
              )}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <CardTitle className="text-base">{tier.name}</CardTitle>
                  {tier.featured && <Badge>Most chosen</Badge>}
                </div>
                <CardDescription>{tier.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col gap-6">
                <div className="flex flex-col gap-1 border-b pb-5">
                  <p className="text-3xl font-medium tracking-tight">
                    {tier.price}
                  </p>
                  <p className="font-mono text-xs text-muted-foreground">
                    {tier.cadence}
                  </p>
                </div>
                <ul className="flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-2.5 text-sm leading-relaxed"
                    >
                      <CheckIcon
                        className={cn(
                          'mt-0.5 size-4 shrink-0',
                          isSelected ? 'text-primary' : 'text-muted-foreground',
                        )}
                        aria-hidden="true"
                      />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                {tier.id === 'enterprise' ? (
                  <Button
                    variant={isSelected ? 'default' : 'outline'}
                    size="lg"
                    className="h-11 w-full px-5"
                    nativeButton={false}
                    render={<a href="#contact" />}
                  >
                    {tier.cta}
                  </Button>
                ) : (
                  <AuditDialog>
                    <Button
                      variant={isSelected ? 'default' : 'outline'}
                      size="lg"
                      className="h-11 w-full px-5"
                    >
                      {tier.cta}
                    </Button>
                  </AuditDialog>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
