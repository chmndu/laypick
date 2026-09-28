const services = [
  "Web Design",
  "Development",
  "Digital Experiences",
]

export function Services01() {
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
        style={{
          maxWidth: "var(--lp-max-width)",
        }}
      >
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p
              className="text-sm uppercase tracking-[0.2em]"
              style={{
                color: "var(--lp-muted)",
              }}
            >
              Services
            </p>
          </div>

          <div
            className="divide-y border-t"
            style={{
              borderColor: "var(--lp-border)",
            }}
          >
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center justify-between py-6"
              >
                <span className="text-xl">
                  {service}
                </span>

                <span
                  style={{
                    color: "var(--lp-muted)",
                  }}
                >
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