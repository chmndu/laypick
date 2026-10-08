"use client"

import { useState } from "react"
import { ArrowDown, ArrowLeft, ArrowUp, Plus, Trash2 } from "lucide-react"

import { sectionDefinitions } from "@/data/sections"
import {
    addSection,
    getCompatibleSections,
    moveSection,
    removeSection,
    replaceSection,
} from "@/lib/composition"
import type { Project } from "@/types/project"
import type { SectionDefinition } from "@/types/section"
import { SectionThumbnail } from "@/components/preview/SectionThumbnail"
import { Button } from "@/components/ui/button"

type SectionsPanelProps = {
    project: Project
    onProjectChange?: (project: Project) => void
}

type SectionActionMode = {
    type: "replace" | "add"
    sectionId?: string
}

const protectedSectionTypes = new Set(["navbar", "footer"])

export function SectionsPanel({
    project,
    onProjectChange,
}: SectionsPanelProps) {
    const [action, setAction] =
        useState<SectionActionMode | null>(null)

    if (!onProjectChange) {
        return null
    }

    const getDefinition = (definitionId: string) =>
        sectionDefinitions.find(
            (definition) => definition.id === definitionId,
        )

    const handleReplace = (
        sectionId: string,
        definition: SectionDefinition,
    ) => {
        const section = project.sections.find(
            (item) => item.id === sectionId,
        )

        if (!section) return

        onProjectChange({
            ...project,
            sections: replaceSection(
                project.sections,
                sectionId,
                {
                    ...section,
                    definitionId: definition.id,
                },
            ),
        })

        setAction(null)
    }

    const handleAdd = (definition: SectionDefinition) => {
        const section = {
            id: crypto.randomUUID(),
            definitionId: definition.id,
        }

        const footerIndex = project.sections.findIndex((item) => {
            const currentDefinition = getDefinition(item.definitionId)

            return currentDefinition?.type === "footer"
        })

        const insertIndex =
            footerIndex === -1
                ? project.sections.length
                : footerIndex

        onProjectChange({
            ...project,
            sections: addSection(
                project.sections,
                section,
                insertIndex,
            ),
        })

        setAction(null)
    }

    const handleRemove = (sectionId: string) => {
        const section = project.sections.find(
            (item) => item.id === sectionId,
        )

        if (!section) return

        const definition = getDefinition(section.definitionId)

        if (!definition) return

        if (protectedSectionTypes.has(definition.type)) {
            return
        }

        onProjectChange({
            ...project,
            sections: removeSection(
                project.sections,
                sectionId,
            ),
        })

        setAction(null)
    }

    const handleMove = (
        sectionId: string,
        direction: "up" | "down",
    ) => {
        const section = project.sections.find(
            (item) => item.id === sectionId,
        )

        if (!section) return

        const definition = getDefinition(section.definitionId)

        if (!definition) return

        if (protectedSectionTypes.has(definition.type)) {
            return
        }

        const currentIndex = project.sections.findIndex(
            (item) => item.id === sectionId,
        )

        const targetIndex =
            direction === "up"
                ? currentIndex - 1
                : currentIndex + 1

        if (
            targetIndex < 0 ||
            targetIndex >= project.sections.length
        ) {
            return
        }

        const targetSection = project.sections[targetIndex]
        const targetDefinition = getDefinition(
            targetSection.definitionId,
        )

        if (
            targetDefinition &&
            protectedSectionTypes.has(targetDefinition.type)
        ) {
            return
        }

        onProjectChange({
            ...project,
            sections: moveSection(
                project.sections,
                sectionId,
                direction,
            ),
        })
    }

    if (action?.type === "replace" && action.sectionId) {
        const section = project.sections.find(
            (item) => item.id === action.sectionId,
        )

        if (!section) {
            setAction(null)
            return null
        }

        const currentDefinition = getDefinition(
            section.definitionId,
        )

        if (!currentDefinition) {
            setAction(null)
            return null
        }

        const variants = getCompatibleSections(
            project,
            currentDefinition.type,
        )

        return (
            <div className="space-y-5">
                <div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="-ml-2"
                        onClick={() => setAction(null)}
                    >
                        <ArrowLeft />
                        Back
                    </Button>

                    <div className="mt-4">
                        <p className="text-sm font-medium">
                            Replace {currentDefinition.name}
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                            Choose another compatible variant.
                        </p>
                    </div>
                </div>

                <div className="grid gap-3">
                    {variants.map((definition) => {
                        const isCurrent =
                            definition.id ===
                            currentDefinition.id

                        return (
                            <button
                                key={definition.id}
                                type="button"
                                disabled={isCurrent}
                                className={[
                                    "overflow-hidden rounded-lg border text-left transition",
                                    isCurrent
                                        ? "border-foreground ring-2 ring-foreground/10"
                                        : "border-border hover:border-foreground/40",
                                ].join(" ")}
                                onClick={() =>
                                    handleReplace(
                                        section.id,
                                        definition,
                                    )
                                }
                            >
                                <div className="h-32 overflow-hidden bg-muted">
                                    <SectionThumbnail
                                        type={definition.thumbnail}
                                    />
                                </div>

                                <div className="flex items-center justify-between px-3 py-2.5">
                                    <span className="text-sm">
                                        {definition.name}
                                    </span>

                                    {isCurrent && (
                                        <span className="text-xs text-muted-foreground">
                                            Current
                                        </span>
                                    )}
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        )
    }

    if (action?.type === "add") {
        const availableDefinitions = sectionDefinitions.filter(
            (definition) => {
                const compatible =
                    definition.compatibleProjectTypes.includes(
                        project.type,
                    ) &&
                    definition.compatibleDirections.includes(
                        project.directionId,
                    )

                const canBeAdded =
                    definition.type !== "navbar" &&
                    definition.type !== "footer"

                return compatible && canBeAdded
            },
        )

        return (
            <div className="space-y-5">
                <div>
                    <Button
                        variant="ghost"
                        size="sm"
                        className="-ml-2"
                        onClick={() => setAction(null)}
                    >
                        <ArrowLeft />
                        Back
                    </Button>

                    <div className="mt-4">
                        <p className="text-sm font-medium">
                            Add section
                        </p>

                        <p className="mt-1 text-xs text-muted-foreground">
                            Choose a compatible section for this
                            project.
                        </p>
                    </div>
                </div>

                <div className="grid gap-3">
                    {availableDefinitions.map((definition) => (
                        <button
                            key={definition.id}
                            type="button"
                            className="overflow-hidden rounded-lg border border-border text-left transition hover:border-foreground/40"
                            onClick={() =>
                                handleAdd(definition)
                            }
                        >
                            <div className="h-32 overflow-hidden bg-muted">
                                <SectionThumbnail
                                    type={definition.thumbnail}
                                />
                            </div>

                            <div className="px-3 py-2.5">
                                <p className="text-sm">
                                    {definition.name}
                                </p>

                                <p className="mt-0.5 text-xs text-muted-foreground">
                                    {formatSectionType(
                                        definition.type,
                                    )}
                                </p>
                            </div>
                        </button>
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-6">
            <div>
                <p className="text-sm font-medium">
                    Current page
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                    Arrange the sections that make up this website.
                </p>
            </div>

            <div className="space-y-2">
                {project.sections.map((section, index) => {
                    const definition = getDefinition(
                        section.definitionId,
                    )

                    if (!definition) return null

                    const isProtected =
                        protectedSectionTypes.has(
                            definition.type,
                        )

                    const canMoveUp =
                        !isProtected &&
                        index > 0 &&
                        !isProtectedDefinition(
                            project.sections[index - 1],
                            getDefinition,
                        )

                    const canMoveDown =
                        !isProtected &&
                        index <
                        project.sections.length - 1 &&
                        !isProtectedDefinition(
                            project.sections[index + 1],
                            getDefinition,
                        )

                    return (
                        <div
                            key={section.id}
                            className="rounded-lg border border-border"
                        >
                            <div className="flex items-center gap-3 p-3">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-xs font-medium">
                                    {index + 1}
                                </div>

                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-sm font-medium">
                                        {definition.name}
                                    </p>

                                    <p className="mt-0.5 text-xs text-muted-foreground">
                                        {formatSectionType(
                                            definition.type,
                                        )}
                                    </p>
                                </div>

                                <div className="flex shrink-0 items-center">
                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        disabled={!canMoveUp}
                                        aria-label={`Move ${definition.name} up`}
                                        onClick={() =>
                                            handleMove(
                                                section.id,
                                                "up",
                                            )
                                        }
                                    >
                                        <ArrowUp />
                                    </Button>

                                    <Button
                                        variant="ghost"
                                        size="icon-sm"
                                        disabled={!canMoveDown}
                                        aria-label={`Move ${definition.name} down`}
                                        onClick={() =>
                                            handleMove(
                                                section.id,
                                                "down",
                                            )
                                        }
                                    >
                                        <ArrowDown />
                                    </Button>
                                </div>
                            </div>

                            <div className="flex items-center border-t border-border px-3 py-2">
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() =>
                                        setAction({
                                            type: "replace",
                                            sectionId:
                                                section.id,
                                        })
                                    }
                                >
                                    Replace
                                </Button>

                                {!isProtected && (
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        className="ml-auto text-destructive hover:text-destructive"
                                        onClick={() =>
                                            handleRemove(
                                                section.id,
                                            )
                                        }
                                    >
                                        <Trash2 />
                                        Remove
                                    </Button>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>

            <Button
                className="w-full"
                onClick={() => setAction({ type: "add" })}
            >
                <Plus />
                Add section
            </Button>
        </div>
    )
}

function formatSectionType(type: string) {
    return type.charAt(0).toUpperCase() + type.slice(1)
}

function isProtectedDefinition(
    section: Project["sections"][number],
    getDefinition: (
        definitionId: string,
    ) => SectionDefinition | undefined,
) {
    const definition = getDefinition(section.definitionId)

    return definition
        ? protectedSectionTypes.has(definition.type)
        : false
}