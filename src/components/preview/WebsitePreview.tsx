import type { Project } from "@/types/project"
import { RenderSection } from "@/lib/renderer/render-section"

type WebsitePreviewProps = {
  project: Project
}

export function WebsitePreview({
  project,
}: WebsitePreviewProps) {
  return (
    <div
      className="min-h-full"
      style={{
        backgroundColor: project.tokens.colors.background,
        color: project.tokens.colors.foreground,
      }}
    >
      {project.sections.map((section) => (
        <RenderSection
          key={section.id}
          section={section}
        />
      ))}
    </div>
  )
}