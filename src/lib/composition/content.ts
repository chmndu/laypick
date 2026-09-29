import type { ContentState } from "@/types/content"

export function cloneContent(
  content: ContentState,
): ContentState {
  return structuredClone(content)
}