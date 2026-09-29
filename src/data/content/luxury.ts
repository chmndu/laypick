import type { ContentState } from "@/types/content"

export const luxuryContent: ContentState = {
    navbar: {
        brand: "Maison",
    },

    hero: {
        eyebrow: "Independent creative house",
        heading: "Quietly distinctive.",
        description:
            "Maison creates refined identities and digital experiences for brands that value detail, restraint, and lasting character.",
        supportingPoints: [
            "Identity",
            "Digital",
            "Direction",
        ],
        images: [],
    },

    services: [
        {
            title: "Creative Direction",
            description: "Establishing a considered visual language with purpose.",
        },
        {
            title: "Brand Identity",
            description: "Crafting identities designed to endure beyond trends.",
        },
        {
            title: "Digital Experiences",
            description: "Translating character into refined digital spaces.",
        },
    ],

    cta: {
        eyebrow: "Private commissions",
        heading: "Create something with lasting presence.",
        buttonLabel: "Make an enquiry",
    },

    footer: {
        brand: "Maison",
        copyright: "© 2026 Maison. All rights reserved.",
    },
}