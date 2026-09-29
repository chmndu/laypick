import type { DirectionId, DesignTokens } from "@/types/design"
import type { SectionInstance } from "@/types/section"
import type { ContentState } from "@/types/content"

import { minimalContent } from "@/data/content/minimal"
import { editorialContent } from "@/data/content/editorial"
import { luxuryContent } from "@/data/content/luxury"

import { minimalSections } from "./minimal"
import { editorialSections } from "./editorial"
import { luxurySections } from "./luxury"

const minimalTokens: DesignTokens = {
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
}

const editorialTokens: DesignTokens = {
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
}

const luxuryTokens: DesignTokens = {
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
}

export type DirectionPreset = {
  directionId: DirectionId
  tokens: DesignTokens
  sections: SectionInstance[]
  content: ContentState
}

export const directionPresets: DirectionPreset[] = [
  {
    directionId: "minimal",
    tokens: minimalTokens,
    sections: minimalSections,
    content: minimalContent,
  },

  {
    directionId: "editorial",
    tokens: editorialTokens,
    sections: editorialSections,
    content: editorialContent,
  },

  {
    directionId: "luxury",
    tokens: luxuryTokens,
    sections: luxurySections,
    content: luxuryContent,
  },
]