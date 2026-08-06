import { Button } from '@/components/ui/button'
import { GithubMark, LinkedinMark, XMark } from '@/components/brand-icons'

const socials = [
  { label: 'LinkedIn', href: '#', icon: LinkedinMark },
  { label: 'X (Twitter)', href: '#', icon: XMark },
  { label: 'GitHub', href: '#', icon: GithubMark },
]

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-secondary/20">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-5 py-10 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-2">
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative flex size-2.5" aria-hidden="true">
              <span className="absolute inset-0 rounded-full bg-primary blur-[3px]" />
              <span className="relative size-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-sm font-medium tracking-tight">
              Precision AI Studio
            </span>
          </a>
          <p className="text-xs text-muted-foreground">
            AI automation, n8n workflows and custom LLM pipelines for growing
            businesses.
          </p>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-6">
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-xs text-muted-foreground transition-colors hover:text-foreground"
          >
            Terms of Service
          </a>
        </nav>

        <div className="flex items-center gap-1">
          {socials.map((social) => (
            <Button
              key={social.label}
              variant="ghost"
              size="icon"
              nativeButton={false}
              render={<a href={social.href} />}
            >
              <social.icon />
              <span className="sr-only">{social.label}</span>
            </Button>
          ))}
        </div>
      </div>
      <div className="border-t border-border/70">
        <p className="mx-auto w-full max-w-6xl px-5 py-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Precision AI Studio. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
