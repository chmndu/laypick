import type { ContentState } from "@/types/content"

export const defaultContent: ContentState = {
  navbar: {
    brand: "Studio",
  },

  hero: {
    eyebrow: "Independent creative studio",
    heading: "Digital work with a point of view.",
    description:
      "We shape identities, websites, and digital experiences for ambitious brands and people.",
    supportingPoints: [
      "Strategy",
      "Identity",
      "Digital",
    ],
    images: [],
  },

  services: [
    {
      title: "Web Design",
    },
    {
      title: "Development",
    },
    {
      title: "Digital Experiences",
    },
  ],

  cta: {
    eyebrow: "Start a project",
    heading: "Have something worth building?",
    buttonLabel: "Get in touch",
  },

  footer: {
    brand: "Studio",
    copyright: "© 2026 All rights reserved.",
  },
}