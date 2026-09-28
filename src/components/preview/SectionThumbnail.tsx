import type { SectionThumbnail as SectionThumbnailType } from "@/types/section"

type SectionThumbnailProps = {
  type: SectionThumbnailType
}

const shortLine =
  "h-2 w-1/3 rounded-full bg-black/15"

const mediumLine =
  "h-2 w-2/3 rounded-full bg-black/15"

export function SectionThumbnail({
  type,
}: SectionThumbnailProps) {
  switch (type) {
    case "navbar-simple":
      return (
        <div className="flex h-full flex-col p-5">
          <div className="flex items-center justify-between">
            <div className="h-3 w-16 rounded-full bg-black/25" />
            <div className="flex gap-2">
              <div className="h-2 w-8 rounded-full bg-black/15" />
              <div className="h-2 w-8 rounded-full bg-black/15" />
              <div className="h-2 w-8 rounded-full bg-black/15" />
            </div>
          </div>
        </div>
      )

    case "hero-left":
      return (
        <div className="flex h-full flex-col justify-center gap-4 p-6">
          <div className={shortLine} />
          <div className="h-7 w-4/5 rounded-sm bg-black/20" />
          <div className="h-7 w-3/5 rounded-sm bg-black/20" />
          <div className={`${mediumLine} mt-2`} />
          <div className="h-2 w-1/2 rounded-full bg-black/10" />
        </div>
      )

    case "hero-split":
      return (
        <div className="grid h-full grid-cols-[1.4fr_1fr] gap-6 p-6">
          <div className="flex flex-col justify-center gap-4">
            <div className={shortLine} />
            <div className="h-7 w-full rounded-sm bg-black/20" />
            <div className="h-7 w-4/5 rounded-sm bg-black/20" />
          </div>

          <div className="flex items-end">
            <div className="h-2 w-full rounded-full bg-black/10" />
          </div>
        </div>
      )

    case "hero-bottom":
      return (
        <div className="flex h-full flex-col justify-between p-6">
          <div className={shortLine} />

          <div className="space-y-3">
            <div className="h-7 w-full rounded-sm bg-black/20" />
            <div className="h-7 w-4/5 rounded-sm bg-black/20" />
          </div>

          <div className="flex justify-end">
            <div className="h-2 w-1/3 rounded-full bg-black/10" />
          </div>
        </div>
      )

    case "services-list":
      return (
        <div className="grid h-full grid-cols-[1fr_2fr] gap-6 p-6">
          <div className="flex items-start">
            <div className={shortLine} />
          </div>

          <div className="space-y-4">
            <div className="border-t border-black/10 pt-4">
              <div className="flex justify-between">
                <div className="h-3 w-1/3 rounded-full bg-black/20" />
                <div className="h-3 w-3 rounded-full bg-black/10" />
              </div>
            </div>

            <div className="border-t border-black/10 pt-4">
              <div className="flex justify-between">
                <div className="h-3 w-2/5 rounded-full bg-black/20" />
                <div className="h-3 w-3 rounded-full bg-black/10" />
              </div>
            </div>

            <div className="border-t border-black/10 pt-4">
              <div className="flex justify-between">
                <div className="h-3 w-1/4 rounded-full bg-black/20" />
                <div className="h-3 w-3 rounded-full bg-black/10" />
              </div>
            </div>
          </div>
        </div>
      )

    case "cta-simple":
      return (
        <div className="flex h-full flex-col justify-center gap-5 p-6">
          <div className={shortLine} />
          <div className="h-7 w-4/5 rounded-sm bg-black/20" />
          <div className="h-7 w-3/5 rounded-sm bg-black/20" />
          <div className="mt-2 h-8 w-20 rounded-md bg-black/20" />
        </div>
      )

    case "footer-simple":
      return (
        <div className="flex h-full items-end p-6">
          <div className="flex w-full items-center justify-between border-t border-black/10 pt-4">
            <div className="h-2 w-16 rounded-full bg-black/15" />
            <div className="h-2 w-24 rounded-full bg-black/10" />
          </div>
        </div>
      )
  }
}