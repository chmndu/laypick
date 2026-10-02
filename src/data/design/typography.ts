import type { DesignTokens } from "@/types/design"

export type TypographyPair = {
    id: string
    name: string
    headingFont: DesignTokens["typography"]["headingFont"]
    bodyFont: DesignTokens["typography"]["bodyFont"]
}

export const typographyPairs: TypographyPair[] = [
    {
        id: "modern",
        name: "Modern",
        headingFont: "inter",
        bodyFont: "inter",
    },
    {
        id: "editorial",
        name: "Editorial",
        headingFont: "playfair-display",
        bodyFont: "ibm-plex-sans",
    },
    {
        id: "luxury",
        name: "Luxury",
        headingFont: "cormorant-garamond",
        bodyFont: "ibm-plex-sans",
    },
    {
        id: "structured",
        name: "Structured",
        headingFont: "ibm-plex-sans",
        bodyFont: "inter",
    },
]