'use client'

import * as React from 'react'
import {
  BrainCircuitIcon,
  DatabaseZapIcon,
  FormInputIcon,
  MessageSquareIcon,
  type LucideIcon,
} from 'lucide-react'

import { cn } from '@/lib/utils'

type Step = {
  id: string
  label: string
  sub: string
  icon: LucideIcon
  log: string
}

const steps: Step[] = [
  {
    id: 'webform',
    label: 'Webform',
    sub: 'trigger',
    icon: FormInputIcon,
    log: 'trigger: inbound lead — "Northwind Logistics" captured in 0.4s',
  },
  {
    id: 'qualify',
    label: 'AI Qualification',
    sub: 'gpt agent',
    icon: BrainCircuitIcon,
    log: 'agent: intent=high · budget=confirmed · score 92/100',
  },
  {
    id: 'crm',
    label: 'CRM Sync',
    sub: 'hubspot',
    icon: DatabaseZapIcon,
    log: 'crm: deal created · owner assigned · 14 fields mapped',
  },
  {
    id: 'slack',
    label: 'Slack Alert',
    sub: '#revenue',
    icon: MessageSquareIcon,
    log: 'slack: #revenue notified · call booked for 09:30 · total 28s',
  },
]

export function PipelineVisualizer() {
  const [active, setActive] = React.useState(0)
  const [cycle, setCycle] = React.useState(0)

  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((prev) => {
        if (prev === steps.length - 1) {
          setCycle((c) => c + 1)
          return 0
        }
        return prev + 1
      })
    }, 1900)
    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="relative overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-56 w-[26rem] -translate-x-1/2 rounded-full bg-primary/20 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative flex items-center gap-2 border-b px-4 py-3">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
          <span className="size-2.5 rounded-full bg-foreground/15" />
        </span>
        <p className="ml-2 truncate font-mono text-xs text-muted-foreground">
          precision-ai / speed-to-lead.n8n
        </p>
        <span className="ml-auto flex items-center gap-2 font-mono text-[0.7rem] tracking-wide text-primary">
          <span className="relative flex size-2">
            <span
              className="absolute inset-0 rounded-full bg-primary"
              style={{ animation: 'pulse-ring 1.6s ease-in-out infinite' }}
            />
            <span className="relative size-2 rounded-full bg-primary" />
          </span>
          LIVE
        </span>
      </div>

      <div className="relative flex flex-col gap-3 p-4 sm:flex-row sm:items-stretch">
        {steps.map((step, index) => {
          const isActive = index === active
          const isDone = index < active
          return (
            <React.Fragment key={step.id}>
              <div
                className={cn(
                  'flex flex-1 items-center gap-3 rounded-lg border p-3 transition-all duration-500 sm:flex-col sm:items-start sm:gap-2',
                  isActive
                    ? 'border-primary/40 bg-primary/10 shadow-[0_0_32px_-12px_var(--primary)]'
                    : isDone
                      ? 'border-primary/20 bg-secondary/40'
                      : 'border-border bg-secondary/20',
                )}
                aria-current={isActive ? 'step' : undefined}
              >
                <step.icon
                  className={cn(
                    'size-5 shrink-0 transition-colors duration-500',
                    isActive || isDone ? 'text-primary' : 'text-muted-foreground',
                  )}
                  aria-hidden="true"
                />
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{step.label}</p>
                  <p className="truncate font-mono text-[0.7rem] text-muted-foreground">
                    {step.sub}
                  </p>
                </div>
              </div>
              {index < steps.length - 1 && (
                <div
                  className="flex items-center justify-center sm:w-6"
                  aria-hidden="true"
                >
                  <svg
                    viewBox="0 0 24 8"
                    className="h-2 w-6 rotate-90 sm:rotate-0"
                    fill="none"
                  >
                    <line
                      x1="0"
                      y1="4"
                      x2="24"
                      y2="4"
                      stroke={
                        index < active
                          ? 'var(--primary)'
                          : 'color-mix(in oklab, var(--foreground) 20%, transparent)'
                      }
                      strokeWidth="1.5"
                      strokeDasharray="4 4"
                      style={
                        index === active
                          ? { animation: 'flow-dash 0.9s linear infinite' }
                          : undefined
                      }
                    />
                  </svg>
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>

      <div className="relative border-t bg-background/40 p-4">
        <ul className="flex flex-col gap-1.5 font-mono text-xs leading-relaxed">
          {steps.map((step, index) => (
            <li
              key={`${cycle}-${step.id}`}
              className={cn(
                'flex gap-2 transition-opacity duration-500',
                index <= active ? 'opacity-100' : 'opacity-0',
              )}
            >
              <span className="text-primary">→</span>
              <span
                className={
                  index === active ? 'text-foreground' : 'text-muted-foreground'
                }
              >
                {step.log}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative grid grid-cols-3 border-t">
        {[
          { value: '28s', label: 'lead response' },
          { value: '99.8%', label: 'sync accuracy' },
          { value: '0', label: 'manual touches' },
        ].map((stat) => (
          <div
            key={stat.label}
            className="flex flex-col gap-0.5 border-r px-4 py-3 last:border-r-0"
          >
            <p className="font-mono text-base text-foreground">{stat.value}</p>
            <p className="text-xs text-muted-foreground">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
