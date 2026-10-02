import type { DesignTokens, DirectionId } from "@/types/design"
import type { SectionInstance } from "@/types/section"
import { typographyPairs } from "@/data/design/typography"

export type DirectionPreset = {
  directionId: DirectionId
  tokens: DesignTokens
  sections: SectionInstance[]
}

const minimalTypography = typographyPairs.find(
  (pair) => pair.id === "modern",
)!.system

const editorialTypography = typographyPairs.find(
  (pair) => pair.id === "editorial",
)!.system

const luxuryTypography = typographyPairs.find(
  (pair) => pair.id === "luxury",
)!.system

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

      typography: minimalTypography,

      spacing: {
        section: "comfortable",
        content: "balanced",
      },

      radius: "small",

      layout: {
        maxWidth: "standard",
      },
    },

    sections: [
      {
        id: crypto.randomUUID(),
        definitionId: "navbar-01",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "hero-01",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "services-01",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "cta-01",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "footer-01",
      },
    ],
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

      typography: editorialTypography,

      spacing: {
        section: "generous",
        content: "wide",
      },

      radius: "none",

      layout: {
        maxWidth: "wide",
      },
    },

    sections: [
      {
        id: crypto.randomUUID(),
        definitionId: "navbar-01",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "hero-03",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "services-01",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "cta-01",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "footer-01",
      },
    ],
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

      typography: luxuryTypography,

      spacing: {
        section: "generous",
        content: "balanced",
      },

      radius: "none",

      layout: {
        maxWidth: "standard",
      },
    },

    sections: [
      {
        id: crypto.randomUUID(),
        definitionId: "navbar-01",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "hero-04",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "services-01",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "cta-01",
      },
      {
        id: crypto.randomUUID(),
        definitionId: "footer-01",
      },
    ],
  },
]