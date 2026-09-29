import { defaultContent } from "@/data/content/defaults"
import type {
    ContentState,
    ContentValue,
} from "@/types/content"

export function getDefaultSectionContent(
    definitionId: string,
): Record<string, ContentValue> {
    return defaultContent.sections[definitionId] ?? {}
}

export function setSectionContent(
    content: ContentState,
    sectionId: string,
    sectionContent: Record<string, ContentValue>,
): ContentState {
    return {
        ...content,
        sections: {
            ...content.sections,
            [sectionId]: sectionContent,
        },
    }
}