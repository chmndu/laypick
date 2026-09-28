const services = [
  "Web Design",
  "Development",
  "Digital Experiences",
]

export function Services01() {
  return (
    <section className="border-t border-black/10">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-black/50">
              Services
            </p>
          </div>

          <div className="divide-y divide-black/10 border-t border-black/10">
            {services.map((service) => (
              <div
                key={service}
                className="flex items-center justify-between py-6"
              >
                <span className="text-xl font-medium">
                  {service}
                </span>

                <span className="text-black/40">↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}