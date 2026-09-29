import type { ContentValue } from "@/types/content"

type CTA01Props = {
  content: Record<string, ContentValue>
}

export function CTA01({
  content,
}: CTA01Props) {
  return (
    <section
      className="border-t"
      style={{
        borderColor: "var(--lp-border)",
        paddingBlock: "var(--lp-section-spacing)",
      }}
    >
      <div
        className="mx-auto px-6"
        style={{ maxWidth: "var(--lp-max-width)" }}
      >
        <div style={{ maxWidth: "48rem" }}>
          <p
            className="mb-6 text-sm uppercase tracking-[0.2em]"
            style={{ color: "var(--lp-muted)" }}
          >
            {content.eyebrow}
          </p>

          <h2 className="text-4xl tracking-tight md:text-6xl">
            {content.heading}
          </h2>

          <button
            className="mt-10 px-6 py-3 text-sm"
            style={{
              backgroundColor: "var(--lp-foreground)",
              color: "var(--lp-background)",
              borderRadius: "var(--lp-radius)",
            }}
          >
            {content.buttonLabel}
          </button>
        </div>
      </div>
    </section>
  )
}