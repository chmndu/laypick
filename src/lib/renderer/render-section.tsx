import { sectionDefinitions } from "@/data/sections"
import type { ContentState } from "@/types/content"
import type { SectionInstance } from "@/types/section"

import { Navbar01 } from "@/components/sections/Navbar01"
import { Hero01 } from "@/components/sections/Hero01"
import { Hero03 } from "@/components/sections/Hero03"
import { Hero04 } from "@/components/sections/Hero04"
import { Services01 } from "@/components/sections/Services01"
import { CTA01 } from "@/components/sections/CTA01"
import { Footer01 } from "@/components/sections/Footer01"

type RenderSectionProps = {
  section: SectionInstance
  content: ContentState
}

export function RenderSection({
  section,
  content,
}: RenderSectionProps) {
  const definition = sectionDefinitions.find(
    (item) => item.id === section.definitionId,
  )

  if (!definition) return null

  switch (definition.component) {
    case "Navbar01":
      return content.navbar ? (
        <Navbar01 content={content.navbar} />
      ) : null

    case "Hero01":
      return content.hero ? (
        <Hero01 content={content.hero} />
      ) : null

    case "Hero03":
      return content.hero ? (
        <Hero03 content={content.hero} />
      ) : null

    case "Hero04":
      return content.hero ? (
        <Hero04 content={content.hero} />
      ) : null

    case "Services01":
      return content.services ? (
        <Services01 content={content.services} />
      ) : null

    case "CTA01":
      return content.cta ? (
        <CTA01 content={content.cta} />
      ) : null

    case "Footer01":
      return content.footer ? (
        <Footer01 content={content.footer} />
      ) : null

    default:
      return null
  }
}