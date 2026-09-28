export function CTA01() {
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
        <div style={{ maxWidth: "48rem" }}>
          <p
            className="mb-6 text-sm uppercase tracking-[0.2em]"
            style={{
              color: "var(--lp-muted)",
            }}
          >
            Start a project
          </p>

          <h2 className="text-4xl tracking-tight md:text-6xl">
            Have something worth building?
          </h2>

          <button
            className="mt-10 px-6 py-3 text-sm"
            style={{
              backgroundColor: "var(--lp-foreground)",
              color: "var(--lp-background)",
              borderRadius: "var(--lp-radius)",
            }}
          >
            Get in touch
          </button>
        </div>
      </div>
    </section>
  )
}