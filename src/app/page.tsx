import { WebsitePreview } from "@/components/preview/WebsitePreview"
import { createProjectFromPreset } from "@/lib/composition"

const project = createProjectFromPreset(
  "Laypick Demo",
  "agency",
  "minimal",
)

export default function Home() {
  return <WebsitePreview project={project} />
}