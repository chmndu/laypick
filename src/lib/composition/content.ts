import { defaultContent } from "@/data/content/defaults"
import type { ContentState } from "@/types/content"

export function getDefaultSectionContent(
    definitionId: string,
): Record<string, string> {
    return defaultContent.sections[definitionId] ?? {}
}

export function setSectionContent(
    content: ContentState,
    sectionId: string,
    sectionContent: Record<string, string>,
): ContentState {
    return {
        ...content,
        sections: {
            ...content.sections,
            [sectionId]: sectionContent,
        },
    }
}