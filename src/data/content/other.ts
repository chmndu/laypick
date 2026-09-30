import type { ContentState } from "@/types/content"

export const otherContent: ContentState = {
    navbar: {
        brand: "Common Ground",
    },

    hero: {
        eyebrow: "Independent project",
        heading: "Something worth exploring.",
        description:
            "A flexible starting point for projects that don't fit neatly into a predefined category.",
        supportingPoints: [
            "Ideas",
            "Design",
            "Experience",
        ],
        images: [],
    },

    services: [
        {
            title: "Planning",
            description: "Turning an idea into a clear direction.",
        },
        {
            title: "Design",
            description: "Creating an experience with purpose and character.",
        },
        {
            title: "Build",
            description: "Bringing the final direction to life.",
        },
    ],

    cta: {
        eyebrow: "Have an idea?",
        heading: "Let's see where it could go.",
        buttonLabel: "Get in touch",
    },

    footer: {
        brand: "Common Ground",
        copyright: "© 2026 Common Ground. All rights reserved.",
    },
}