import type { ContentState } from "@/types/content"

export const agencyContent: ContentState = {
    navbar: {
        brand: "North Studio",
    },

    hero: {
        eyebrow: "Independent creative studio",
        heading: "Ideas made for the real world.",
        description:
            "We create identities, websites, and digital experiences for ambitious brands ready to move forward.",
        supportingPoints: [
            "Strategy",
            "Identity",
            "Digital",
        ],
        images: [],
    },

    services: {
        eyebrow: "Services",
        items: [
            {
                title: "Brand Strategy",
                description: "Finding the clearest direction for your brand.",
            },
            {
                title: "Web Design",
                description: "Creating distinctive and purposeful digital experiences.",
            },
            {
                title: "Development",
                description: "Turning considered designs into reliable websites.",
            },
        ],
    },

    cta: {
        eyebrow: "Start a project",
        heading: "Let's build something worth remembering.",
        buttonLabel: "Start a conversation",
    },

    footer: {
        brand: "North Studio",
        copyright: "© 2026 North Studio. All rights reserved.",
    },
}