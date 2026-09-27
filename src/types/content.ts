export type ContentValue = string

export type ContentState = {
  sections: Record<string, Record<string, ContentValue>>
}

export type Asset = {
  id: string
  type: "image"
  source: "preset" | "upload"
  src: string
  alt?: string
}

export type AssetState = {
  sections: Record<string, Asset[]>
}