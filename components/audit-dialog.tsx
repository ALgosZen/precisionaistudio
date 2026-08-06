'use client'

import * as React from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { IntakeForm } from '@/components/intake-form'

export function AuditDialog({
  children,
  idPrefix = 'audit',
}: {
  children: React.ReactElement
  idPrefix?: string
}) {
  return (
    <Dialog>
      <DialogTrigger render={children} />
      <DialogContent className="max-h-[90svh] overflow-y-auto sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-lg">
            Book your $1,500 AI Audit
          </DialogTitle>
          <DialogDescription>
            A two-week deep dive into your operations, ending with a workflow map
            and an implementation blueprint you own outright.
          </DialogDescription>
        </DialogHeader>
        <IntakeForm idPrefix={idPrefix} />
      </DialogContent>
    </Dialog>
  )
}
