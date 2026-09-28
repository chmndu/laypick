import type { SectionInstance } from "@/types/section"

export function addSection(
  sections: SectionInstance[],
  section: SectionInstance,
  index?: number,
): SectionInstance[] {
  if (index === undefined) {
    return [...sections, section]
  }

  const nextSections = [...sections]

  nextSections.splice(index, 0, section)

  return nextSections
}

export function removeSection(
  sections: SectionInstance[],
  sectionId: string,
): SectionInstance[] {
  return sections.filter((section) => section.id !== sectionId)
}

export function replaceSection(
  sections: SectionInstance[],
  sectionId: string,
  replacement: SectionInstance,
): SectionInstance[] {
  return sections.map((section) =>
    section.id === sectionId ? replacement : section,
  )
}

export function moveSection(
  sections: SectionInstance[],
  sectionId: string,
  direction: "up" | "down",
): SectionInstance[] {
  const index = sections.findIndex(
    (section) => section.id === sectionId,
  )

  if (index === -1) {
    return sections
  }

  const targetIndex =
    direction === "up" ? index - 1 : index + 1

  if (targetIndex < 0 || targetIndex >= sections.length) {
    return sections
  }

  const nextSections = [...sections]

  const [section] = nextSections.splice(index, 1)

  nextSections.splice(targetIndex, 0, section)

  return nextSections
}