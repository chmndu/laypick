import type { DirectionId } from "./design"
import type { ProjectType } from "./project"

export type SectionType =
  | "navbar"
  | "hero"
  | "about"
  | "services"
  | "work"
  | "testimonials"
  | "cta"
  | "footer"

export type SectionCapabilities = {
  images: boolean
  editableContent: boolean
}

export type SectionThumbnail =
  | "navbar-simple"
  | "hero-left"
  | "hero-split"
  | "hero-bottom"
  | "services-list"
  | "cta-simple"
  | "footer-simple"

export type SectionContentField = {
  id: string
  label: string
  type: "text" | "textarea"
}

export type SectionDefinition = {
  id: string
  type: SectionType
  name: string

  component: string
  thumbnail: SectionThumbnail

  compatibleProjectTypes: ProjectType[]
  compatibleDirections: DirectionId[]

  recommendedAfter?: SectionType[]
  recommendedBefore?: SectionType[]

  capabilities: SectionCapabilities
  contentFields: SectionContentField[]
}

export type SectionInstance = {
  id: string
  definitionId: string
}