import type { ContentState } from "@/types/content"

export const defaultContent: ContentState = {
  sections: {
    "navbar-01": {
      brand: "Studio",
    },

    "hero-01": {
      eyebrow: "Independent creative studio",
      heading: "Ideas made tangible.",
      description:
        "We create thoughtful digital experiences for brands, products, and people with something worth saying.",
    },

    "hero-03": {
      eyebrow: "Independent creative studio",
      heading: "Digital work with a point of view.",
      description:
        "We shape identities, websites, and digital experiences for ambitious brands and people.",
    },

    "hero-04": {
      eyebrow: "Digital studio",
      heading: "We make digital work that gets remembered.",
      description:
        "Strategy, identity, and digital experiences for brands moving with intention.",
    },

    "services-01": {
      services: [
        "Web Design",
        "Development",
        "Digital Experiences",
      ],
    },

    "cta-01": {
      eyebrow: "Start a project",
      heading: "Have something worth building?",
      buttonLabel: "Get in touch",
    },

    "footer-01": {
      brand: "Studio",
      copyright: "© 2026 All rights reserved.",
    },
  },
}