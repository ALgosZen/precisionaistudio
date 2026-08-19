'use client'

import * as React from 'react'
import { AlertCircleIcon, ArrowRightIcon, CheckIcon, LoaderIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type Status = 'idle' | 'submitting' | 'done' | 'error'

export function IntakeForm({ idPrefix = 'intake' }: { idPrefix?: string }) {
  const [status, setStatus] = React.useState<Status>('idle')
  const [errorMessage, setErrorMessage] = React.useState<string | null>(null)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('submitting')
    setErrorMessage(null)

    const formData = new FormData(event.currentTarget)
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      bottleneck: formData.get('bottleneck'),
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form.')
      }

      setStatus('done')
    } catch (err) {
      console.error('Form submission error:', err)
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      )
      setStatus('error')
    }
  }

  if (status === 'done') {
    return (
      <div className="flex flex-col items-start gap-3 py-6">
        <span className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary ring-1 ring-primary/30">
          <CheckIcon className="size-5" />
        </span>
        <p className="text-base font-medium">Blueprint request received.</p>
        <p className="text-sm leading-relaxed text-muted-foreground">
          An automation architect will reply within one business day with a
          proposed audit window and a short pre-call questionnaire.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-5">
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field>
            <FieldLabel htmlFor={`${idPrefix}-name`}>Name</FieldLabel>
            <Input
              id={`${idPrefix}-name`}
              name="name"
              placeholder="Jordan Reyes"
              autoComplete="name"
              required
            />
          </Field>
          <Field>
            <FieldLabel htmlFor={`${idPrefix}-email`}>Work email</FieldLabel>
            <Input
              id={`${idPrefix}-email`}
              name="email"
              type="email"
              placeholder="jordan@company.com"
              autoComplete="email"
              required
            />
          </Field>
        </div>
        <Field>
          <FieldLabel htmlFor={`${idPrefix}-company`}>Company name</FieldLabel>
          <Input
            id={`${idPrefix}-company`}
            name="company"
            placeholder="Northwind Logistics"
            autoComplete="organization"
            required
          />
        </Field>
        <Field>
          <FieldLabel htmlFor={`${idPrefix}-bottleneck`}>
            {"What's your biggest manual bottleneck?"}
          </FieldLabel>
          <Textarea
            id={`${idPrefix}-bottleneck`}
            name="bottleneck"
            rows={4}
            placeholder="Our sales reps re-type every inbound form into HubSpot and follow up hours later."
          />
          <FieldDescription>
            The more specific, the sharper your blueprint.
          </FieldDescription>
        </Field>
      </FieldGroup>

      {errorMessage && (
        <div className="flex items-center gap-2 rounded-lg border border-destructive/30 bg-destructive/10 p-3 text-xs text-destructive">
          <AlertCircleIcon className="size-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="h-11 w-full px-5"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? (
          <>
            <LoaderIcon data-icon="inline-start" className="animate-spin" />
            Sending
          </>
        ) : (
          <>
            Request my blueprint
            <ArrowRightIcon data-icon="inline-end" />
          </>
        )}
      </Button>
      <p className="text-xs text-muted-foreground">
        No spam, no sequences. One human reply.
      </p>
    </form>
  )
}

