import { useState } from "react"
import { sectionDefinitions } from "@/data/sections"
import {
    getCompatibleSections,
    getDefaultSectionContent,
    replaceSection,
    setSectionContent,
} from "@/lib/composition"
import { getDesignTokenStyles } from "@/lib/renderer/design-tokens"
import { RenderSection } from "@/lib/renderer/render-section"
import { SectionThumbnail } from "./SectionThumbnail"
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

                        <RenderSection
                            section={section}
                            content={project.content.sections[section.id]}
                        />
                    </div>
                )
            })}

            {selectedSection && selectedDefinition.length > 0 && (
                <div className="fixed bottom-6 left-1/2 z-50 w-[min(90vw,32rem)] -translate-x-1/2 rounded-xl border border-black/10 bg-white p-4 shadow-xl">
                    <div className="mb-4 flex items-start justify-between gap-4">
                        <div>
                            <p className="text-sm font-medium">
                                Replace section
                            </p>

                            <p className="mt-1 text-xs text-black/50">
                                Choose a different section variant.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="shrink-0 text-xs text-black/50 transition hover:text-black"
                            onClick={() => setSelectedSectionId(null)}
                        >
                            Close
                        </button>
                    </div>

                    <div className="grid gap-3">
                        {selectedDefinition.map((definition) => {
                            const isCurrent =
                                definition.id === selectedSection.definitionId

                            return (
                                <div
                                    key={definition.id}
                                    role="button"
                                    tabIndex={isCurrent ? -1 : 0}
                                    aria-disabled={isCurrent}
                                    className={[
                                        "overflow-hidden rounded-lg border text-left transition",
                                        isCurrent
                                            ? "border-black ring-2 ring-black/10"
                                            : "border-black/10 hover:border-black/30",
                                    ].join(" ")}
                                    onClick={(event) => {
                                        event.stopPropagation()

                                        if (isCurrent || !onProjectChange) return

                                        const replacement = {
                                            ...selectedSection,
                                            definitionId: definition.id,
                                        }

                                        const nextContent = setSectionContent(
                                            project.content,
                                            selectedSection.id,
                                            getDefaultSectionContent(replacement.definitionId),
                                        )

                                        onProjectChange({
                                            ...project,
                                            sections: replaceSection(
                                                project.sections,
                                                selectedSection.id,
                                                replacement,
                                            ),
                                            content: nextContent,
                                        })
                                    }}
                                    onKeyDown={(event) => {
                                        if (
                                            !isCurrent &&
                                            (event.key === "Enter" || event.key === " ")
                                        ) {
                                            event.preventDefault()

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
                                        }
                                    }}
                                >
                                    <div className="h-40 overflow-hidden bg-neutral-100">
                                        <SectionThumbnail type={definition.thumbnail} />
                                    </div>

                                    <div className="flex items-center justify-between px-3 py-2">
                                        <span className="text-sm">
                                            {definition.name}
                                        </span>

                                        {isCurrent && (
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] text-white">
                                                ✓
                                            </span>
                                        )}
                                    </div>
                                </div>
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