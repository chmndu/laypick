import type { ContentState } from "@/types/content"

export const saasContent: ContentState = {
    navbar: {
        brand: "Flowline",
    },

    hero: {
        eyebrow: "Workflow platform",
        heading: "Make complex work feel simple.",
        description:
            "Flowline brings projects, tasks, and teams into one focused workspace built for modern businesses.",
        supportingPoints: [
            "Projects",
            "Automation",
            "Team Collaboration",
        ],
        images: [],
    },

    services: {
        eyebrow: "Services",
        items: [
            {
                title: "Project Management",
                description: "Keep projects, tasks, and deadlines in one place.",
            },
            {
                title: "Automation",
                description: "Remove repetitive work from your team's workflow.",
            },
            {
                title: "Team Collaboration",
                description: "Give everyone a clear view of what needs to happen next.",
            },
        ],
    },

    cta: {
        eyebrow: "Get started",
        heading: "A clearer way to work.",
        buttonLabel: "Try Flowline",
    },

    footer: {
        brand: "Flowline",
        copyright: "© 2026 Flowline. All rights reserved.",
    },
}