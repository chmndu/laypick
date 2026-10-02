import type { CTAContent } from "@/types/content"

type CTA01Props = {
  content: CTAContent
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
            className="mb-6 uppercase"
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

          <h2
            style={{
              fontFamily: "var(--lp-type-headingLarge-font)",
              fontSize: "var(--lp-type-headingLarge-size)",
              lineHeight: "var(--lp-type-headingLarge-line-height)",
              fontWeight: "var(--lp-type-headingLarge-weight)",
              letterSpacing: "var(--lp-type-headingLarge-tracking)",
            }}
          >
            {content.heading}
          </h2>

          <button
            className="mt-10 px-6 py-3"
            style={{
              backgroundColor: "var(--lp-foreground)",
              color: "var(--lp-background)",
              borderRadius: "var(--lp-radius)",
              fontFamily: "var(--lp-type-button-font)",
              fontSize: "var(--lp-type-button-size)",
              lineHeight: "var(--lp-type-button-line-height)",
              fontWeight: "var(--lp-type-button-weight)",
              letterSpacing: "var(--lp-type-button-tracking)",
            }}
          >
            {content.buttonLabel}
          </button>
        </div>
      </div>
    </section>
  )
}