'use client'

import * as React from 'react'
import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { IntakeForm } from '@/components/intake-form'

export function AuditDialog({
  label,
  variant = 'default',
  className,
  withArrow = false,
  onOpen,
}: {
  label: string
  variant?: 'default' | 'outline' | 'secondary' | 'ghost'
  className?: string
  withArrow?: boolean
  onOpen?: () => void
}) {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button
        variant={variant}
        size="lg"
        className={className}
        onClick={() => {
          onOpen?.()
          setOpen(true)
        }}
      >
        {label}
        {withArrow && <ArrowRightIcon data-icon="inline-end" />}
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-lg">
              Book your $1,500 AI Audit
            </DialogTitle>
            <DialogDescription>
              A two-week deep dive into your operations, ending with a workflow
              map and an implementation blueprint you own outright.
            </DialogDescription>
          </DialogHeader>
          <IntakeForm idPrefix="audit" />
        </DialogContent>
      </Dialog>
    </>
  )
}
