import type {
    DesignTokens,
    TypographyRoleId,
} from "@/types/design"

const fontVariableMap = {
    inter: "var(--lp-font-inter)",
    "ibm-plex-sans": "var(--lp-font-ibm-plex-sans)",
    "playfair-display": "var(--lp-font-playfair-display)",
    "cormorant-garamond": "var(--lp-font-cormorant-garamond)",
} as const

const spacingMap = {
    compact: "4rem",
    comfortable: "6rem",
    generous: "8rem",
} as const

const contentWidthMap = {
    narrow: "48rem",
    balanced: "64rem",
    wide: "80rem",
} as const

const maxWidthMap = {
    narrow: "56rem",
    standard: "72rem",
    wide: "90rem",
} as const

const radiusMap = {
    none: "0",
    small: "0.5rem",
    medium: "0.75rem",
    large: "1rem",
} as const

export function getDesignTokenStyles(
    tokens: DesignTokens,
): React.CSSProperties {
    const styles: Record<string, string> = {
        "--lp-background": tokens.colors.background,
        "--lp-foreground": tokens.colors.foreground,
        "--lp-muted": tokens.colors.muted,
        "--lp-accent": tokens.colors.accent,
        "--lp-border": tokens.colors.border,

        "--lp-section-spacing":
            spacingMap[tokens.spacing.section],

        "--lp-content-width":
            contentWidthMap[tokens.spacing.content],

        "--lp-radius":
            radiusMap[tokens.radius],

        "--lp-max-width":
            maxWidthMap[tokens.layout.maxWidth],
    }

    for (const [roleId, role] of Object.entries(
        tokens.typography.roles,
    ) as [
        TypographyRoleId,
        DesignTokens["typography"]["roles"][TypographyRoleId],
    ][]) {
        const prefix = `--lp-type-${roleId}`

        styles[`${prefix}-font`] =
            role.font === "heading"
                ? fontVariableMap[tokens.typography.headingFont]
                : fontVariableMap[tokens.typography.bodyFont]

        styles[`${prefix}-size`] = role.size
        styles[`${prefix}-line-height`] = role.lineHeight
        styles[`${prefix}-weight`] = String(role.weight)
        styles[`${prefix}-tracking`] = role.letterSpacing
    }

    return styles as React.CSSProperties
}