
import type { ServicesContent } from "@/types/content"

type Services01Props = {
  content: ServicesContent
}

export function Services01({ content }: Services01Props) {
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
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p
              className="uppercase"
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
          </div>

          <div
            className="divide-y border-t"
            style={{ borderColor: "var(--lp-border)" }}
          >
            {content.items.map((service, index) => (
              <div
                key={service.id ?? `${service.title}-${index}`}
                className="flex items-center justify-between py-6"
              >
                <span
                  style={{
                    fontFamily: "var(--lp-type-headingMedium-font)",
                    fontSize: "var(--lp-type-headingMedium-size)",
                    lineHeight: "var(--lp-type-headingMedium-line-height)",
                    fontWeight: "var(--lp-type-headingMedium-weight)",
                    letterSpacing: "var(--lp-type-headingMedium-tracking)",
                  }}
                >
                  {service.title}
                </span>

                <span style={{ color: "var(--lp-muted)" }}>
                  ↗
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
