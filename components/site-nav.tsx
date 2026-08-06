'use client'

import * as React from 'react'
import { MenuIcon, XIcon } from 'lucide-react'

import { AuditDialog } from '@/components/audit-dialog'
import { Button } from '@/components/ui/button'

const links = [
  { href: '#services', label: 'Services' },
  { href: '#process', label: 'Process' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#case-studies', label: 'Case Studies' },
]

export function SiteNav() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/80 backdrop-blur-xl">
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 w-full max-w-6xl items-center gap-6 px-5"
      >
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative flex size-2.5" aria-hidden="true">
            <span className="absolute inset-0 rounded-full bg-primary blur-[3px]" />
            <span className="relative size-2.5 rounded-full bg-primary" />
          </span>
          <span className="text-sm font-medium tracking-tight">
            Precision AI Studio
          </span>
        </a>

        <ul className="ml-auto hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 md:ml-0">
          <AuditDialog>
            <Button size="lg" className="hidden h-9 px-4 sm:inline-flex">
              Book an Audit
            </Button>
          </AuditDialog>
          <Button
            variant="ghost"
            size="icon-lg"
            className="md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <XIcon /> : <MenuIcon />}
            <span className="sr-only">Toggle navigation</span>
          </Button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t md:hidden">
          <ul className="mx-auto flex w-full max-w-6xl flex-col px-5 py-2">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="py-2.5 sm:hidden">
              <AuditDialog>
                <Button size="lg" className="h-9 w-full px-4">
                  Book an Audit
                </Button>
              </AuditDialog>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
