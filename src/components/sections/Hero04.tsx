import type { HeroContent } from "@/types/content"

type Hero04Props = {
    content: HeroContent
}

export function Hero04({
    content,
}: Hero04Props) {
    return (
        <section
            style={{
                paddingBlock: "var(--lp-section-spacing)",
            }}
        >
            <div
                className="mx-auto px-6"
                style={{
                    maxWidth: "var(--lp-max-width)",
                }}
            >
                <div
                    className="border-t pt-8"
                    style={{ borderColor: "var(--lp-border)" }}
                >
                    <p
                        className="mb-8 text-sm uppercase tracking-[0.2em]"
                        style={{ color: "var(--lp-muted)" }}
                    >
                        {content.eyebrow}
                    </p>

                    <h1 className="max-w-5xl text-6xl leading-[0.9] tracking-tight md:text-8xl">
                        {content.heading}
                    </h1>

                    <div className="mt-10 flex justify-end">
                        <p
                            className="max-w-md text-lg leading-8"
                            style={{ color: "var(--lp-muted)" }}
                        >
                            {content.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}