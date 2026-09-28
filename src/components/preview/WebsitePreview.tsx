import { RenderSection } from "@/lib/renderer/render-section"
import { getDesignTokenStyles } from "@/lib/renderer/design-tokens"
import type { Project } from "@/types/project"

type WebsitePreviewProps = {
    project: Project
}

export function WebsitePreview({
    project,
}: WebsitePreviewProps) {
    return (
        <div
            className="lp-preview min-h-full"
            style={getDesignTokenStyles(project.tokens)}
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