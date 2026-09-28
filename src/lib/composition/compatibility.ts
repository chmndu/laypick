import { sectionDefinitions } from "@/data/sections"
import type { Project } from "@/types/project"
import type { SectionType } from "@/types/section"

export function getCompatibleSections(
  project: Project,
  sectionType: SectionType,
) {
  return sectionDefinitions.filter((definition) => {
    return (
      definition.type === sectionType &&
      definition.compatibleProjectTypes.includes(project.type) &&
      definition.compatibleDirections.includes(project.directionId)
    )
  })
}