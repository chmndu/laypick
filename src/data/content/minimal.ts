import type { ContentState } from "@/types/content"

export const minimalContent: ContentState = {
  navbar: {
    brand: "North",
  },

  hero: {
    eyebrow: "Independent design studio",
    heading: "Clear ideas. Thoughtful digital work.",
    description:
      "We help ambitious brands turn strong ideas into simple, useful, and memorable digital experiences.",
    supportingPoints: [
      "Strategy",
      "Design",
      "Development",
    ],
    images: [],
  },

  services: [
    {
      title: "Strategy",
      description: "Clarifying what to build and why.",
    },
    {
      title: "Web Design",
      description: "Creating clear and purposeful digital experiences.",
    },
    {
      title: "Development",
      description: "Turning considered designs into reliable products.",
    },
  ],

  cta: {
    eyebrow: "Start a project",
    heading: "Have something worth building?",
    buttonLabel: "Get in touch",
  },

  footer: {
    brand: "North",
    copyright: "© 2026 North Studio. All rights reserved.",
  },
}