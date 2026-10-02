"use client"

import { useState } from "react"
import { WebsitePreview } from "@/components/preview/WebsitePreview"
import { createProjectFromPreset } from "@/lib/composition"

const initialProject = createProjectFromPreset(
  "Laypick Demo",
  "portfolio",
  "luxury",
)

export default function Home() {
  const [project, setProject] = useState(initialProject)

  return (
    <WebsitePreview
      project={project}
      onProjectChange={setProject}
    />
  )
}