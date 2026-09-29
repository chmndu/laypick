import { defaultContent } from "@/data/content/defaults"
import { directionPresets } from "@/data/presets"
import type { ContentState } from "@/types/content"
import type { ProjectType } from "@/types/project"
import { createProject } from "./project"

function createPresetContent(
  sections: Parameters<typeof createProject>[0]["sections"],
): ContentState {
  return {
    sections: Object.fromEntries(
      sections.map((section) => [
        section.id,
        defaultContent.sections[section.definitionId] ?? {},
      ]),
    ),
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
    content: createPresetContent(preset.sections),
  })
}