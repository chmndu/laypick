"use client"

import { Separator } from "@/components/ui/separator"
import { colorPalettes } from "@/data/design/palettes"
import { typographyPairs } from "@/data/design/typography"
import type { DesignTokens, FontId } from "@/types/design"
import type { Project } from "@/types/project"

type DesignSystemPanelProps = {
    project: Project
    onProjectChange?: (project: Project) => void
}

const colorFields: {
    key: keyof DesignTokens["colors"]
    label: string
}[] = [
        { key: "background", label: "Background" },
        { key: "foreground", label: "Foreground" },
        { key: "muted", label: "Muted" },
        { key: "accent", label: "Accent" },
        { key: "border", label: "Border" },
    ]

const fontOptions: {
    id: FontId
    label: string
}[] = [
        { id: "inter", label: "Inter" },
        { id: "ibm-plex-sans", label: "IBM Plex Sans" },
        { id: "playfair-display", label: "Playfair Display" },
        { id: "cormorant-garamond", label: "Cormorant Garamond" },
    ]

function updateTokens(
    project: Project,
    onProjectChange: ((project: Project) => void) | undefined,
    tokens: DesignTokens,
) {
    if (!onProjectChange) return

    onProjectChange({
        ...project,
        tokens,
    })
}

export function DesignSystemPanel({
    project,
    onProjectChange,
}: DesignSystemPanelProps) {
    const { tokens } = project

    const updateColors = (
        colors: DesignTokens["colors"],
    ) => {
        updateTokens(
            project,
            onProjectChange,
            {
                ...tokens,
                colors,
            },
        )
    }

    const updateTypography = (
        typography: DesignTokens["typography"],
    ) => {
        updateTokens(
            project,
            onProjectChange,
            {
                ...tokens,
                typography,
            },
        )
    }

    const updateSpacing = (
        spacing: DesignTokens["spacing"],
    ) => {
        updateTokens(
            project,
            onProjectChange,
            {
                ...tokens,
                spacing,
            },
        )
    }

    return (
        <div className="space-y-6">
            {/* Colors */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-sm font-medium">
                        Colors
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                        Start with a palette, then fine-tune individual colors.
                    </p>
                </div>

                <div className="grid gap-2">
                    {colorPalettes.map((palette) => {
                        const isCurrent =
                            palette.colors.background === tokens.colors.background &&
                            palette.colors.foreground === tokens.colors.foreground &&
                            palette.colors.muted === tokens.colors.muted &&
                            palette.colors.accent === tokens.colors.accent &&
                            palette.colors.border === tokens.colors.border

                        return (
                            <button
                                key={palette.id}
                                type="button"
                                className={[
                                    "flex items-center gap-3 rounded-lg border p-3 text-left transition",
                                    isCurrent
                                        ? "border-foreground ring-1 ring-foreground"
                                        : "hover:border-foreground/40",
                                ].join(" ")}
                                onClick={() =>
                                    updateColors(palette.colors)
                                }
                            >
                                <div className="flex shrink-0">
                                    {Object.entries(palette.colors).map(
                                        ([key, color]) => (
                                            <span
                                                key={`${palette.id}-${key}`}
                                                className="h-6 w-6 border border-black/10 first:rounded-l-full last:rounded-r-full"
                                                style={{
                                                    backgroundColor: color,
                                                }}
                                            />
                                        ),
                                    )}
                                </div>

                                <span className="text-sm">
                                    {palette.name}
                                </span>
                            </button>
                        )
                    })}
                </div>

                <div className="space-y-3">
                    {colorFields.map(({ key, label }) => (
                        <label
                            key={key}
                            className="flex items-center justify-between gap-4"
                        >
                            <span className="text-xs">
                                {label}
                            </span>

                            <div className="flex items-center gap-2">
                                <input
                                    type="color"
                                    value={tokens.colors[key]}
                                    onChange={(event) =>
                                        updateColors({
                                            ...tokens.colors,
                                            [key]: event.target.value,
                                        })
                                    }
                                    className="h-7 w-9 cursor-pointer rounded border bg-transparent p-0.5"
                                />

                                <span className="w-16 text-right font-mono text-[10px] uppercase text-muted-foreground">
                                    {tokens.colors[key]}
                                </span>
                            </div>
                        </label>
                    ))}
                </div>
            </section>

            <Separator />

            {/* Typography */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-sm font-medium">
                        Typography
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                        Choose a type pairing or customize the fonts individually.
                    </p>
                </div>

                <div className="grid gap-2">
                    {typographyPairs.map((pair) => {
                        const isCurrent =
                            pair.headingFont === tokens.typography.headingFont &&
                            pair.bodyFont === tokens.typography.bodyFont

                        return (
                            <button
                                key={pair.id}
                                type="button"
                                className={[
                                    "flex items-center justify-between rounded-lg border p-3 text-left transition",
                                    isCurrent
                                        ? "border-foreground ring-1 ring-foreground"
                                        : "hover:border-foreground/40",
                                ].join(" ")}
                                onClick={() =>
                                    updateTypography({
                                        ...tokens.typography,
                                        headingFont: pair.headingFont,
                                        bodyFont: pair.bodyFont,
                                        roles: structuredClone(pair.system.roles),
                                    })
                                }
                            >
                                <span className="text-sm">
                                    {pair.name}
                                </span>

                                <span className="text-[10px] text-muted-foreground">
                                    {pair.headingFont} / {pair.bodyFont}
                                </span>
                            </button>
                        )
                    })}
                </div>

                <div className="grid gap-3">
                    <label className="grid gap-2">
                        <span className="text-xs">
                            Heading font
                        </span>

                        <select
                            value={tokens.typography.headingFont}
                            onChange={(event) =>
                                updateTypography({
                                    ...tokens.typography,
                                    headingFont:
                                        event.target.value as FontId,
                                })
                            }
                            className="h-9 rounded-md border bg-background px-3 text-xs"
                        >
                            {fontOptions.map((font) => (
                                <option
                                    key={font.id}
                                    value={font.id}
                                >
                                    {font.label}
                                </option>
                            ))}
                        </select>
                    </label>

                    <label className="grid gap-2">
                        <span className="text-xs">
                            Body font
                        </span>

                        <select
                            value={tokens.typography.bodyFont}
                            onChange={(event) =>
                                updateTypography({
                                    ...tokens.typography,
                                    bodyFont:
                                        event.target.value as FontId,
                                })
                            }
                            className="h-9 rounded-md border bg-background px-3 text-xs"
                        >
                            {fontOptions.map((font) => (
                                <option
                                    key={font.id}
                                    value={font.id}
                                >
                                    {font.label}
                                </option>
                            ))}
                        </select>
                    </label>
                </div>
            </section>

            <Separator />

            {/* Spacing */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-sm font-medium">
                        Spacing
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                        Control the overall density of the website.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {(
                        [
                            "compact",
                            "comfortable",
                            "generous",
                        ] as const
                    ).map((value) => (
                        <button
                            key={value}
                            type="button"
                            className={[
                                "rounded-md border px-2 py-2 text-xs capitalize transition",
                                tokens.spacing.section === value
                                    ? "border-foreground bg-foreground text-background"
                                    : "hover:border-foreground/40",
                            ].join(" ")}
                            onClick={() =>
                                updateSpacing({
                                    ...tokens.spacing,
                                    section: value,
                                })
                            }
                        >
                            {value}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {(
                        [
                            "narrow",
                            "balanced",
                            "wide",
                        ] as const
                    ).map((value) => (
                        <button
                            key={value}
                            type="button"
                            className={[
                                "rounded-md border px-2 py-2 text-xs capitalize transition",
                                tokens.spacing.content === value
                                    ? "border-foreground bg-foreground text-background"
                                    : "hover:border-foreground/40",
                            ].join(" ")}
                            onClick={() =>
                                updateSpacing({
                                    ...tokens.spacing,
                                    content: value,
                                })
                            }
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </section>

            <Separator />

            {/* Shape */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-sm font-medium">
                        Shape
                    </h3>
                </div>

                <div className="grid grid-cols-4 gap-2">
                    {(
                        [
                            "none",
                            "small",
                            "medium",
                            "large",
                        ] as const
                    ).map((value) => (
                        <button
                            key={value}
                            type="button"
                            className={[
                                "rounded-md border px-2 py-2 text-xs capitalize transition",
                                tokens.radius === value
                                    ? "border-foreground bg-foreground text-background"
                                    : "hover:border-foreground/40",
                            ].join(" ")}
                            onClick={() =>
                                updateTokens(
                                    project,
                                    onProjectChange,
                                    {
                                        ...tokens,
                                        radius: value,
                                    },
                                )
                            }
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </section>

            <Separator />

            {/* Layout */}
            <section className="space-y-4">
                <div>
                    <h3 className="text-sm font-medium">
                        Layout
                    </h3>

                    <p className="mt-1 text-xs text-muted-foreground">
                        Set the maximum width of the website content.
                    </p>
                </div>

                <div className="grid grid-cols-3 gap-2">
                    {(
                        [
                            "narrow",
                            "standard",
                            "wide",
                        ] as const
                    ).map((value) => (
                        <button
                            key={value}
                            type="button"
                            className={[
                                "rounded-md border px-2 py-2 text-xs capitalize transition",
                                tokens.layout.maxWidth === value
                                    ? "border-foreground bg-foreground text-background"
                                    : "hover:border-foreground/40",
                            ].join(" ")}
                            onClick={() =>
                                updateTokens(
                                    project,
                                    onProjectChange,
                                    {
                                        ...tokens,
                                        layout: {
                                            ...tokens.layout,
                                            maxWidth: value,
                                        },
                                    },
                                )
                            }
                        >
                            {value}
                        </button>
                    ))}
                </div>
            </section>
        </div>
    )
}