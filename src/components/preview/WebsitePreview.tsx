import { useState } from "react"
import { getDesignTokenStyles } from "@/lib/renderer/design-tokens"
import { RenderSection } from "@/lib/renderer/render-section"
import { ControlBar } from "@/components/controls/ControlBar"
import { ControlDrawer } from "@/components/controls/ControlDrawer"
import { DesignSystemPanel } from "@/components/controls/DesignSystemPanel"
import { SectionsPanel } from "@/components/controls/SectionsPanel"
import type { ControlPanel } from "@/types/controls"
import type { Project } from "@/types/project"

type WebsitePreviewProps = {
    project: Project
    onProjectChange?: (project: Project) => void
}

export function WebsitePreview({
    project,
    onProjectChange,
}: WebsitePreviewProps) {
    const [activePanel, setActivePanel] = useState<ControlPanel | null>(null)

    return (
        <div
            className="lp-preview min-h-screen"
            style={getDesignTokenStyles(project.tokens)}
        >
            {project.sections.map((section) => (
                <div key={section.id}>
                    <RenderSection
                        section={section}
                        content={project.content}
                    />
                </div>
            ))}

            <ControlBar
                activePanel={activePanel}
                onPanelChange={(panel) => {
                    setActivePanel(panel)
                }}
            />

            <ControlDrawer
                activePanel={activePanel}
                onClose={() => setActivePanel(null)}
            >
                {activePanel === "design" ? (
                    <DesignSystemPanel
                        project={project}
                        onProjectChange={onProjectChange}
                    />
                ) : null}

                {activePanel === "sections" ? (
                    <SectionsPanel
                        project={project}
                        onProjectChange={onProjectChange}
                    />
                ) : null}

                {activePanel === "responsive" ? (
                    <div>Responsive</div>
                ) : null}
            </ControlDrawer>
        </div>
    )
}