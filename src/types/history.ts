import type { DesignTokens } from "./design"
import type { SectionInstance } from "./section"
import type { ContentState } from "./content"
import type { AssetState } from "./asset"
import type { MotionPresetId } from "./motion"

export type ProjectSnapshot = {
  tokens: DesignTokens
  sections: SectionInstance[]
  content: ContentState
  assets: AssetState
  motion: MotionPresetId
}

export type HistoryState = {
  past: ProjectSnapshot[]
  future: ProjectSnapshot[]
}