import { agencyContent } from "@/data/content/agency"
import { businessContent } from "@/data/content/business"
import { otherContent } from "@/data/content/other"
import { portfolioContent } from "@/data/content/portfolio"
import { saasContent } from "@/data/content/saas"
import { directionPresets } from "@/data/presets"
import type { ProjectType } from "@/types/project"
import { createProject } from "./project"

function getContentForProjectType(type: ProjectType) {
  switch (type) {
    case "business":
      return businessContent

    case "agency":
      return agencyContent

    case "portfolio":
      return portfolioContent

    case "saas":
      return saasContent

    case "other":
      return otherContent
  }
}

export function createProjectFromPreset(
  name: string,
  type: ProjectType,
  directionId: (typeof directionPresets)[number]["directionId"],
) {
  const preset = directionPresets.find(
    (preset) => preset.directionId === directionId,
  )

  if (!preset) {
    throw new Error(
      `No preset found for direction: ${directionId}`,
    )
  }

  return createProject({
    name,
    type,
    directionId,
    tokens: preset.tokens,
    sections: preset.sections,
    content: structuredClone(getContentForProjectType(type)),
  })
}