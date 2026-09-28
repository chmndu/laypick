import type { CSSProperties } from "react"
import type { DesignTokens } from "@/types/design"

type DesignTokenStyles = CSSProperties & {
    "--lp-background": string
    "--lp-foreground": string
    "--lp-muted": string
    "--lp-accent": string
    "--lp-border": string

    "--lp-heading-font": string
    "--lp-body-font": string

    "--lp-heading-weight": number
    "--lp-body-weight": number

    "--lp-section-spacing": string
    "--lp-content-width": string
    "--lp-radius": string
    "--lp-max-width": string
}

export function getDesignTokenStyles(
    tokens: DesignTokens,
): DesignTokenStyles {
    return {
        "--lp-background": tokens.colors.background,
        "--lp-foreground": tokens.colors.foreground,
        "--lp-muted": tokens.colors.muted,
        "--lp-accent": tokens.colors.accent,
        "--lp-border": tokens.colors.border,

        "--lp-heading-font": getFontVariable(
            tokens.typography.headingFont,
        ),
        "--lp-body-font": getFontVariable(
            tokens.typography.bodyFont,
        ),

        "--lp-heading-weight": tokens.typography.headingWeight,
        "--lp-body-weight": tokens.typography.bodyWeight,

        "--lp-section-spacing": getSectionSpacing(
            tokens.spacing.section,
        ),

        "--lp-content-width": getContentWidth(
            tokens.spacing.content,
        ),

        "--lp-radius": getRadius(tokens.radius),

        "--lp-max-width": getMaxWidth(
            tokens.layout.maxWidth,
        ),
    }
}

function getFontVariable(
    font: DesignTokens["typography"]["headingFont"],
) {
    switch (font) {
        case "inter":
            return "var(--lp-font-inter)"

        case "ibm-plex-sans":
            return "var(--lp-font-ibm-plex-sans)"

        case "playfair-display":
            return "var(--lp-font-playfair-display)"

        case "cormorant-garamond":
            return "var(--lp-font-cormorant-garamond)"
    }
}

function getSectionSpacing(
    spacing: DesignTokens["spacing"]["section"],
) {
    switch (spacing) {
        case "compact":
            return "4rem"

        case "comfortable":
            return "6rem"

        case "generous":
            return "9rem"
    }
}

function getContentWidth(
    width: DesignTokens["spacing"]["content"],
) {
    switch (width) {
        case "narrow":
            return "42rem"

        case "balanced":
            return "52rem"

        case "wide":
            return "64rem"
    }
}

function getRadius(
    radius: DesignTokens["radius"],
) {
    switch (radius) {
        case "none":
            return "0"

        case "small":
            return "0.375rem"

        case "medium":
            return "0.75rem"

        case "large":
            return "1.25rem"
    }
}

function getMaxWidth(
    width: DesignTokens["layout"]["maxWidth"],
) {
    switch (width) {
        case "narrow":
            return "64rem"

        case "standard":
            return "80rem"

        case "wide":
            return "90rem"
    }
}