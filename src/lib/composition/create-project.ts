import { directionPresets } from "@/data/presets"
import type { ProjectType } from "@/types/project"
import { createProject } from "./project"

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
    content: structuredClone(preset.content),
  })
}