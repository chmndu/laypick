import type { DirectionId, DesignTokens } from "./design"
import type { SectionInstance } from "./section"
import type { ContentState } from "./content"
import type { AssetState } from "./asset"
import type { MotionPresetId } from "./motion"
import type { ProjectType } from "./project"

export type BuildBlueprint = {
    projectName: string
    projectType: ProjectType
    directionId: DirectionId

    tokens: DesignTokens
    sections: SectionInstance[]

    content: ContentState
    assets: AssetState

    motion: MotionPresetId

    responsive: {
        desktop: string
        tablet: string
        mobile: string
    }
}