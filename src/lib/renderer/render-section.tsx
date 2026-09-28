import type { SectionInstance } from "@/types/section"
import { sectionDefinitions } from "@/data/sections"
import { sectionComponents } from "./component-registry"

type RenderSectionProps = {
  section: SectionInstance
}

export function RenderSection({
  section,
}: RenderSectionProps) {
  const definition = sectionDefinitions.find(
    (item) => item.id === section.definitionId,
  )

  if (!definition) {
    return null
  }

  const Component =
    sectionComponents[
      definition.component as keyof typeof sectionComponents
    ]

  if (!Component) {
    return null
  }

  return <Component />
}