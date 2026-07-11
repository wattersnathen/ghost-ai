import { BrainCircuit, Share2, ScrollText } from "lucide-react"

const features = [
  {
    icon: BrainCircuit,
    title: "AI Architecture Generation",
    description: "Describe your system, AI maps it to nodes and edges on a live canvas.",
  },
  {
    icon: Share2,
    title: "Real-time Collaboration",
    description: "Live cursors, presence indicators, and shared node editing across your team.",
  },
  {
    icon: ScrollText,
    title: "Instant Spec Generation",
    description: "Export a complete Markdown technical spec directly from the canvas graph.",
  },
]

export function AuthMarketingPanel() {
  return (
    <div className="hidden w-1/2 flex-col justify-between border-r border-surface-border-subtle bg-base px-16 py-12 lg:flex">
      <div className="flex items-center gap-3">
        <div className="flex size-9 items-center justify-center rounded-full bg-brand text-sm font-bold text-base">
          G
        </div>
        <span className="text-sm font-semibold text-copy-primary">
          Ghost AI
        </span>
      </div>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-6">
          <h1 className="max-w-md text-4xl font-bold leading-tight text-copy-primary">
            Design systems at the speed of thought.
          </h1>
          <p className="max-w-sm text-sm leading-relaxed text-copy-muted">
            Describe your architecture in plain English. Ghost AI maps it to a
            shared canvas your whole team can refine in real time.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {features.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-2xl bg-elevated text-brand">
                <Icon className="size-5" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-sm font-semibold text-copy-primary">
                  {title}
                </span>
                <span className="text-sm text-copy-muted">{description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-copy-faint">
        © {new Date().getFullYear()} Ghost AI. All rights reserved.
      </p>
    </div>
  )
}
