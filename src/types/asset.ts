export type Asset = {
  id: string
  type: "image"
  source: "preset" | "upload"
  src: string
  alt?: string
}

export type AssetState = {
  items: Asset[]
}