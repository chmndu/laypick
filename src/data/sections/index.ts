import type { SectionDefinition } from "@/types/section"

export const sectionDefinitions: SectionDefinition[] = [
    {
        id: "navbar-01",
        type: "navbar",
        name: "Navbar 01",
        component: "Navbar01",
        thumbnail: "navbar-simple",
        compatibleProjectTypes: [
            "business",
            "agency",
            "portfolio",
            "saas",
            "other",
        ],
        compatibleDirections: ["minimal", "editorial", "luxury"],
        capabilities: {
            images: false,
            editableContent: true,
        },
    },

    {
        id: "navbar-02",
        type: "navbar",
        name: "Navbar 02",
        component: "Navbar02",
        thumbnail: "navbar-simple",
        compatibleProjectTypes: [
            "business",
            "agency",
            "portfolio",
            "saas",
            "other",
        ],
        compatibleDirections: ["minimal", "editorial", "luxury"],
        capabilities: {
            images: false,
            editableContent: true,
        },
    },

    {
        id: "navbar-03",
        type: "navbar",
        name: "Navbar 03",
        component: "Navbar03",
        thumbnail: "navbar-simple",
        compatibleProjectTypes: [
            "business",
            "agency",
            "portfolio",
            "saas",
            "other",
        ],
        compatibleDirections: ["minimal", "editorial", "luxury"],
        capabilities: {
            images: false,
            editableContent: true,
        },
    },

    {
        id: "hero-01",
        type: "hero",
        name: "Hero 01",
        component: "Hero01",
        thumbnail: "hero-left",
        compatibleProjectTypes: [
            "business",
            "agency",
            "portfolio",
            "saas",
            "other",
        ],
        compatibleDirections: ["minimal", "editorial"],
        capabilities: {
            images: true,
            editableContent: true,
        },
    },

    {
        id: "hero-02",
        type: "hero",
        name: "Hero 02",
        component: "Hero02",
        thumbnail: "hero-left",
        compatibleProjectTypes: [
            "business",
            "agency",
            "portfolio",
            "saas",
            "other",
        ],
        compatibleDirections: ["minimal", "luxury"],
        capabilities: {
            images: true,
            editableContent: true,
        },
    },

    {
        id: "hero-03",
        type: "hero",
        name: "Hero 03",
        component: "Hero03",
        thumbnail: "hero-split",
        compatibleProjectTypes: [
            "agency",
            "portfolio",
            "other",
        ],
        compatibleDirections: ["editorial", "luxury"],
        capabilities: {
            images: false,
            editableContent: true,
        },
    },

    {
        id: "hero-04",
        type: "hero",
        name: "Hero 04",
        component: "Hero04",
        thumbnail: "hero-bottom",
        compatibleProjectTypes: [
            "business",
            "agency",
            "portfolio",
            "saas",
        ],
        compatibleDirections: ["editorial", "luxury"],
        capabilities: {
            images: false,
            editableContent: true,
        },
    },

    {
        id: "services-01",
        type: "services",
        name: "Services 01",
        component: "Services01",
        thumbnail: "services-list",
        compatibleProjectTypes: ["business", "agency", "portfolio", "saas", "other"],
        compatibleDirections: ["minimal", "editorial", "luxury"],
        capabilities: {
            images: false,
            editableContent: true,
        },
    },

    {
        id: "work-01",
        type: "work",
        name: "Work 01",
        component: "Work01",
        thumbnail: "hero-split",
        compatibleProjectTypes: ["agency", "portfolio", "other"],
        compatibleDirections: ["minimal", "editorial", "luxury"],
        capabilities: {
            images: true,
            editableContent: true,
        },
    },

    {
        id: "cta-01",
        type: "cta",
        name: "CTA 01",
        component: "CTA01",
        thumbnail: "cta-simple",
        compatibleProjectTypes: [
            "business",
            "agency",
            "portfolio",
            "saas",
            "other",
        ],
        compatibleDirections: ["minimal", "editorial", "luxury"],
        capabilities: {
            images: false,
            editableContent: true,
        },
    },

    {
        id: "footer-01",
        type: "footer",
        name: "Footer 01",
        component: "Footer01",
        thumbnail: "footer-simple",
        compatibleProjectTypes: [
            "business",
            "agency",
            "portfolio",
            "saas",
            "other",
        ],
        compatibleDirections: ["minimal", "editorial", "luxury"],
        capabilities: {
            images: false,
            editableContent: true,
        },
    },
]