import type { ContentValue } from "@/types/content"

type Hero01Props = {
  content: Record<string, ContentValue>
}

export function Hero01({
  content,
}: Hero01Props) {
  return (
    <section
      style={{
        paddingBlock: "var(--lp-section-spacing)",
      }}
    >
      <div
        className="mx-auto w-full px-6"
        style={{
          maxWidth: "var(--lp-max-width)",
        }}
      >
        <p
          className="mb-6 text-sm uppercase tracking-[0.2em]"
          style={{ color: "var(--lp-muted)" }}
        >
          {content.eyebrow}
        </p>

        <h1 className="max-w-4xl text-5xl tracking-tight md:text-7xl">
          {content.heading}
        </h1>

        <p
          className="mt-8 max-w-2xl text-lg leading-8"
          style={{ color: "var(--lp-muted)" }}
        >
          {content.description}
        </p>
      </div>
    </section>
  )
}