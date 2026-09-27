import type { DesignTokens, DirectionId } from "./design"
import type { SectionInstance } from "./section"
import type { ContentState, AssetState } from "./content"
import type { MotionPresetId } from "./motion"
import type { HistoryState } from "./history"

export type ProjectType =
    | "business"
    | "agency"
    | "portfolio"
    | "saas"
    | "other"

export type Viewport = "desktop" | "tablet" | "mobile"

export type ProjectStatus = "draft" | "locked"

export type Project = {
    id: string
    name: string

    type: ProjectType
    directionId: DirectionId

    tokens: DesignTokens
    sections: SectionInstance[]

    content: ContentState
    assets: AssetState

    motion: MotionPresetId
    viewport: Viewport

    status: ProjectStatus

    history: HistoryState
}