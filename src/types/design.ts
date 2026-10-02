export type DirectionId = "minimal" | "editorial" | "luxury"

export type FontId =
  | "inter"
  | "ibm-plex-sans"
  | "playfair-display"
  | "cormorant-garamond"

export type TypographyRoleId =
  | "display"
  | "headingLarge"
  | "headingMedium"
  | "bodyLarge"
  | "body"
  | "eyebrow"
  | "navigation"
  | "button"
  | "caption"

export type TypographyRole = {
  font: "heading" | "body"
  size: string
  lineHeight: string
  weight: number
  letterSpacing: string
}

export type TypographySystem = {
  headingFont: FontId
  bodyFont: FontId

  roles: Record<TypographyRoleId, TypographyRole>
}

export type DesignTokens = {
  colors: {
    background: string
    foreground: string
    muted: string
    accent: string
    border: string
  }

  typography: TypographySystem

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