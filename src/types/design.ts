export type FontId =
  | "inter"
  | "ibm-plex-sans"
  | "playfair-display"
  | "cormorant-garamond"

export type DirectionId = "minimal" | "editorial" | "luxury"

export type DesignTokens = {
  colors: {
    background: string
    foreground: string
    muted: string
    accent: string
    border: string
  }

  typography: {
    headingFont: FontId
    bodyFont: FontId
    headingWeight: number
    bodyWeight: number
    headingScale: "compact" | "balanced" | "dramatic"
  }

  spacing: {
    section: "compact" | "comfortable" | "generous"
    content: "narrow" | "balanced" | "wide"
  }

  radius: "none" | "small" | "medium" | "large"

  layout: {
    maxWidth: "narrow" | "standard" | "wide"
  }
}

export type Direction = {
  id: DirectionId
  name: string
  description: string
  recommendedSections: string[]
}