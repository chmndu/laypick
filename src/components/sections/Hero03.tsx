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
            className="mb-8 uppercase"
            style={{
              color: "var(--lp-muted)",
              fontFamily: "var(--lp-type-eyebrow-font)",
              fontSize: "var(--lp-type-eyebrow-size)",
              lineHeight: "var(--lp-type-eyebrow-line-height)",
              fontWeight: "var(--lp-type-eyebrow-weight)",
              letterSpacing: "var(--lp-type-eyebrow-tracking)",
            }}
          >
            {content.eyebrow}
          </p>

          <h1
            className="max-w-3xl"
            style={{
              fontFamily: "var(--lp-type-display-font)",
              fontSize: "var(--lp-type-display-size)",
              lineHeight: "var(--lp-type-display-line-height)",
              fontWeight: "var(--lp-type-display-weight)",
              letterSpacing: "var(--lp-type-display-tracking)",
            }}
          >
            {content.heading}
          </h1>
        </div>

        <div className="flex items-end">
          <p
            className="max-w-md"
            style={{
              color: "var(--lp-muted)",
              fontFamily: "var(--lp-type-bodyLarge-font)",
              fontSize: "var(--lp-type-bodyLarge-size)",
              lineHeight: "var(--lp-type-bodyLarge-line-height)",
              fontWeight: "var(--lp-type-bodyLarge-weight)",
              letterSpacing: "var(--lp-type-bodyLarge-tracking)",
            }}
          >
            {content.description}
          </p>
        </div>
      </div>
    </section>
  )
}