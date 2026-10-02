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
                    style={{
                        borderColor: "var(--lp-border)",
                    }}
                >
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
                        className="max-w-5xl"
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

                    <div className="mt-10 flex justify-end">
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
            </div>
        </section>
    )
}