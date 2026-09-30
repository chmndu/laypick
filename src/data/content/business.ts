import type { ContentState } from "@/types/content"

export const businessContent: ContentState = {
    navbar: {
        brand: "Oak & Form",
    },

    hero: {
        eyebrow: "Furniture & interiors",
        heading: "Made for the way you live.",
        description:
            "Thoughtfully crafted furniture designed to bring comfort, character, and lasting quality into your space.",
        supportingPoints: [
            "Custom Design",
            "Quality Materials",
            "Islandwide Delivery",
        ],
        images: [],
    },

    services: [
        {
            title: "Custom Design",
            description: "Furniture shaped around your space and needs.",
        },
        {
            title: "Fabric Selection",
            description: "Choose materials and finishes that feel like yours.",
        },
        {
            title: "Delivery",
            description: "Careful delivery from our showroom to your home.",
        },
    ],

    cta: {
        eyebrow: "Visit our showroom",
        heading: "Find something made for your space.",
        buttonLabel: "Explore the collection",
    },

    footer: {
        brand: "Oak & Form",
        copyright: "© 2026 Oak & Form. All rights reserved.",
    },
}