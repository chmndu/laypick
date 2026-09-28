import { useState } from "react"
import { sectionDefinitions } from "@/data/sections"
import { getCompatibleSections, replaceSection } from "@/lib/composition"
import { sectionComponents } from "@/lib/renderer/component-registry"
import { getDesignTokenStyles } from "@/lib/renderer/design-tokens"
import { RenderSection } from "@/lib/renderer/render-section"
import type { Project } from "@/types/project"

type WebsitePreviewProps = {
    project: Project
    onProjectChange?: (project: Project) => void
}

export function WebsitePreview({
    project,
    onProjectChange,
}: WebsitePreviewProps) {
    const [selectedSectionId, setSelectedSectionId] = useState<string | null>(
        null,
    )

    const selectedSection = project.sections.find(
        (section) => section.id === selectedSectionId,
    )

    const selectedDefinition = selectedSection
        ? getCompatibleSections(
            project,
            getSectionType(selectedSection.definitionId),
        )
        : []

    return (
        <div
            className="lp-preview min-h-screen"
            style={getDesignTokenStyles(project.tokens)}
        >
            {project.sections.map((section) => {
                const isSelected = section.id === selectedSectionId

                return (
                    <div
                        key={section.id}
                        className="relative"
                        onClick={() => setSelectedSectionId(section.id)}
                    >
                        {isSelected && (
                            <div className="pointer-events-none absolute inset-0 z-10 border-2 border-dashed border-[var(--lp-accent)]" />
                        )}

                        <RenderSection section={section} />
                    </div>
                )
            })}

            {selectedSection && selectedDefinition.length > 0 && (
                <div className="fixed bottom-6 left-1/2 z-50 w-[min(90vw,32rem)] -translate-x-1/2 rounded-xl border border-black/10 bg-white p-4 shadow-xl">
                    <div className="mb-3 flex items-center justify-between">
                        <span className="text-sm font-medium">
                            Replace section
                        </span>

                        <button
                            type="button"
                            className="text-sm text-black/50"
                            onClick={() => setSelectedSectionId(null)}
                        >
                            Close
                        </button>
                    </div>

                    <div className="grid gap-2">
                        {selectedDefinition.map((definition) => {
                            const Component =
                                sectionComponents[
                                definition.component as keyof typeof sectionComponents
                                ]

                            if (!Component) return null

                            const isCurrent =
                                definition.id === selectedSection.definitionId

                            return (
                                <button
                                    key={definition.id}
                                    type="button"
                                    disabled={isCurrent}
                                    className="flex items-center justify-between rounded-lg border border-black/10 px-3 py-2 text-left text-sm disabled:opacity-40"
                                    onClick={(event) => {
                                        event.stopPropagation()

                                        if (!onProjectChange) return

                                        const replacement = {
                                            ...selectedSection,
                                            definitionId: definition.id,
                                        }

                                        onProjectChange({
                                            ...project,
                                            sections: replaceSection(
                                                project.sections,
                                                selectedSection.id,
                                                replacement,
                                            ),
                                        })
                                    }}
                                >
                                    <span>{definition.name}</span>
                                    <span className="text-black/40">
                                        {isCurrent ? "Current" : "Use"}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}

function getSectionType(definitionId: string) {
    const definition = sectionDefinitions.find(
        (item) => item.id === definitionId,
    )

    if (!definition) {
        throw new Error(
            `No section definition found for: ${definitionId}`,
        )
    }

    return definition.type
}