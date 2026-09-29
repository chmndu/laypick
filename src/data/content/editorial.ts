import type { ContentState } from "@/types/content"

export const editorialContent: ContentState = {
    navbar: {
        brand: "Atelier",
    },

    hero: {
        eyebrow: "Creative practice · Colombo",
        heading: "Ideas made visible.",
        description:
            "Atelier works across identity, digital design, and visual direction to give ambitious ideas a distinct presence.",
        supportingPoints: [
            "Identity",
            "Editorial",
            "Digital",
        ],
        images: [],
    },

    services: [
        {
            title: "Brand Direction",
            description: "Defining the visual language behind a growing idea.",
        },
        {
            title: "Digital Design",
            description: "Building expressive digital experiences with intention.",
        },
        {
            title: "Creative Development",
            description: "Bringing visual concepts to life through the web.",
        },
    ],

    cta: {
        eyebrow: "A new collaboration",
        heading: "Let's make something worth remembering.",
        buttonLabel: "Begin a conversation",
    },

    footer: {
        brand: "Atelier",
        copyright: "© 2026 Atelier. All rights reserved.",
    },
}