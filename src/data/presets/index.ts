import type { DirectionId, DesignTokens } from "@/types/design"
import type { SectionInstance } from "@/types/section"
import { minimalSections } from "./minimal"

const editorialSections: SectionInstance[] = [
  {
    id: "section-navbar-01",
    definitionId: "navbar-01",
  },
  {
    id: "section-hero-03",
    definitionId: "hero-03",
  },
  {
    id: "section-services-01",
    definitionId: "services-01",
  },
  {
    id: "section-cta-01",
    definitionId: "cta-01",
  },
  {
    id: "section-footer-01",
    definitionId: "footer-01",
  },
]

export type DirectionPreset = {
    directionId: DirectionId
    tokens: DesignTokens
    sections: SectionInstance[]
}

export const directionPresets: DirectionPreset[] = [
    {
        directionId: "minimal",
        tokens: {
            colors: {
                background: "#F8F8F6",
                foreground: "#171717",
                muted: "#6F6F6A",
                accent: "#171717",
                border: "#E4E4DF",
            },
            typography: {
                headingFont: "inter",
                bodyFont: "inter",
                headingWeight: 600,
                bodyWeight: 400,
                headingScale: "balanced",
            },
            spacing: {
                section: "comfortable",
                content: "balanced",
            },
            radius: "small",
            layout: {
                maxWidth: "standard",
            },
        },
        sections: minimalSections,
    },
    {
        directionId: "editorial",
        tokens: {
            colors: {
                background: "#F3F0EA",
                foreground: "#1C1A17",
                muted: "#716B62",
                accent: "#8A4B32",
                border: "#D8D0C4",
            },
            typography: {
                headingFont: "playfair-display",
                bodyFont: "ibm-plex-sans",
                headingWeight: 500,
                bodyWeight: 400,
                headingScale: "dramatic",
            },
            spacing: {
                section: "generous",
                content: "wide",
            },
            radius: "none",
            layout: {
                maxWidth: "wide",
            },
        },
        sections: editorialSections,
    },
    {
        directionId: "luxury",
        tokens: {
            colors: {
                background: "#11110F",
                foreground: "#F2EFE7",
                muted: "#AAA59A",
                accent: "#C9B27C",
                border: "#302F2A",
            },
            typography: {
                headingFont: "cormorant-garamond",
                bodyFont: "ibm-plex-sans",
                headingWeight: 500,
                bodyWeight: 400,
                headingScale: "dramatic",
            },
            spacing: {
                section: "generous",
                content: "balanced",
            },
            radius: "none",
            layout: {
                maxWidth: "standard",
            },
        },
        sections: minimalSections,
    },
]