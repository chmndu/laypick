import type { HeroContent } from "@/types/content"

type Hero03Props = {
  content: HeroContent
}

export function Hero03({
  content,
}: Hero03Props) {
  return (
    <section
      style={{
        paddingBlock: "var(--lp-section-spacing)",
      }}
    >
      <div
        className="mx-auto grid gap-12 px-6 md:grid-cols-[1.4fr_1fr]"
        style={{
          maxWidth: "var(--lp-max-width)",
        }}
      >
        <div>
          <p
            className="mb-8 text-sm uppercase tracking-[0.2em]"
            style={{ color: "var(--lp-muted)" }}
          >
            {content.eyebrow}
          </p>

          <h1 className="max-w-3xl text-6xl leading-[0.95] tracking-tight md:text-8xl">
            {content.heading}
          </h1>
        </div>

        <div className="flex items-end">
          <p
            className="max-w-md text-lg leading-8"
            style={{ color: "var(--lp-muted)" }}
          >
            {content.description}
          </p>
        </div>
      </div>
    </section>
  )
}