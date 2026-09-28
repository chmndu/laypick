import type { DirectionId, DesignTokens } from "@/types/design"
import type {
  ContentState,
  AssetState,
} from "@/types/content"
import type { HistoryState } from "@/types/history"
import type { MotionPresetId } from "@/types/motion"
import type {
  Project,
  ProjectType,
} from "@/types/project"
import type { SectionInstance } from "@/types/section"

export type CreateProjectOptions = {
  name: string
  type: ProjectType
  directionId: DirectionId
  tokens: DesignTokens
  sections: SectionInstance[]
  content?: ContentState
  assets?: AssetState
  motion?: MotionPresetId
}

const createEmptyContent = (): ContentState => ({
  sections: {},
})

const createEmptyAssets = (): AssetState => ({
  sections: {},
})

const createEmptyHistory = (): HistoryState => ({
  past: [],
  future: [],
})

export function createProject({
  name,
  type,
  directionId,
  tokens,
  sections,
  content = createEmptyContent(),
  assets = createEmptyAssets(),
  motion = "subtle",
}: CreateProjectOptions): Project {
  return {
    id: crypto.randomUUID(),
    name,
    type,
    directionId,
    tokens,
    sections,
    content,
    assets,
    motion,
    viewport: "desktop",
    status: "draft",
    history: createEmptyHistory(),
  }
}