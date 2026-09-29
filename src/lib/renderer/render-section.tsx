import { sectionDefinitions } from "@/data/sections"
import type { ContentValue } from "@/types/content"
import type { SectionInstance } from "@/types/section"
import { sectionComponents } from "./component-registry"

type RenderSectionProps = {
  section: SectionInstance
  content?: Record<string, ContentValue>
}

export function RenderSection({
  section,
  content = {},
}: RenderSectionProps) {
  const definition = sectionDefinitions.find(
    (item) => item.id === section.definitionId,
  )

  if (!definition) return null

  const Component =
    sectionComponents[
      definition.component as keyof typeof sectionComponents
    ]

  if (!Component) return null

  return <Component content={content} />
}