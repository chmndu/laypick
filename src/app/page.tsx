import { WebsitePreview } from "@/components/preview/WebsitePreview"
import { createProjectFromPreset } from "@/lib/composition"

const project = createProjectFromPreset(
  "Laypick Demo",
  "agency",
  "editorial",
)

export default function Home() {
  return <WebsitePreview project={project} />
}