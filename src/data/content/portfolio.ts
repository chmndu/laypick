import type { ContentState } from "@/types/content"

export const portfolioContent: ContentState = {
    navbar: {
        brand: "Studio",
    },

    hero: {
        eyebrow: "Independent designer & developer",
        heading: "Digital work with a point of view.",
        description:
            "I design and build thoughtful digital experiences for brands, products, and people.",
        supportingPoints: [
            "Web Design",
            "Development",
            "Creative Direction",
        ],
        images: [],
    },

    services: {
        eyebrow: "Services",
        items: [
            {
                title: "Web Design",
                description: "Clear, purposeful interfaces for modern brands.",
            },
            {
                title: "Development",
                description: "Fast, responsive websites built with modern technology.",
            },
            {
                title: "Creative Direction",
                description: "Visual systems that give digital products a distinct character.",
            },
        ],
    },

    cta: {
        eyebrow: "Start a project",
        heading: "Have something worth building?",
        buttonLabel: "Get in touch",
    },

    footer: {
        brand: "Studio",
        copyright: "© 2026 Studio. All rights reserved.",
    },
}