import type { DesignTokens } from "@/types/design"
import type { Project, Viewport } from "@/types/project"
import type { SectionInstance } from "@/types/section"

export function updateProjectTokens(
  project: Project,
  tokens: DesignTokens,
): Project {
  return {
    ...project,
    tokens,
  }
}

export function updateProjectSections(
  project: Project,
  sections: SectionInstance[],
): Project {
  return {
    ...project,
    sections,
  }
}

export function updateProjectViewport(
  project: Project,
  viewport: Viewport,
): Project {
  return {
    ...project,
    viewport,
  }
}