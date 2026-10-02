import type {
  FontId,
  TypographyRoleId,
  TypographySystem,
} from "@/types/design"

export type TypographyPair = {
  id: string
  name: string
  headingFont: FontId
  bodyFont: FontId
  system: TypographySystem
}

const createTypographySystem = (
  headingFont: FontId,
  bodyFont: FontId,
  roles: Record<
    TypographyRoleId,
    Omit<import("@/types/design").TypographyRole, "font">
  >,
): TypographySystem => ({
  headingFont,
  bodyFont,

  roles: Object.fromEntries(
    Object.entries(roles).map(([id, role]) => [
      id,
      {
        ...role,
        font:
          id === "display" ||
          id === "headingLarge" ||
          id === "headingMedium"
            ? "heading"
            : "body",
      },
    ]),
  ) as TypographySystem["roles"],
})

export const typographyPairs: TypographyPair[] = [
  {
    id: "modern",
    name: "Modern",
    headingFont: "inter",
    bodyFont: "inter",

    system: createTypographySystem("inter", "inter", {
      display: {
        size: "clamp(3rem, 7vw, 7rem)",
        lineHeight: "0.95",
        weight: 600,
        letterSpacing: "-0.04em",
      },
      headingLarge: {
        size: "clamp(2.5rem, 5vw, 4.5rem)",
        lineHeight: "1",
        weight: 600,
        letterSpacing: "-0.03em",
      },
      headingMedium: {
        size: "1.5rem",
        lineHeight: "1.2",
        weight: 500,
        letterSpacing: "-0.02em",
      },
      bodyLarge: {
        size: "1.125rem",
        lineHeight: "1.75",
        weight: 400,
        letterSpacing: "0",
      },
      body: {
        size: "1rem",
        lineHeight: "1.6",
        weight: 400,
        letterSpacing: "0",
      },
      eyebrow: {
        size: "0.75rem",
        lineHeight: "1",
        weight: 500,
        letterSpacing: "0.2em",
      },
      navigation: {
        size: "0.875rem",
        lineHeight: "1.2",
        weight: 400,
        letterSpacing: "0",
      },
      button: {
        size: "0.875rem",
        lineHeight: "1.2",
        weight: 500,
        letterSpacing: "0",
      },
      caption: {
        size: "0.875rem",
        lineHeight: "1.4",
        weight: 400,
        letterSpacing: "0",
      },
    }),
  },

  {
    id: "editorial",
    name: "Editorial",
    headingFont: "playfair-display",
    bodyFont: "ibm-plex-sans",

    system: createTypographySystem(
      "playfair-display",
      "ibm-plex-sans",
      {
        display: {
          size: "clamp(3.5rem, 8vw, 8rem)",
          lineHeight: "0.9",
          weight: 500,
          letterSpacing: "-0.035em",
        },
        headingLarge: {
          size: "clamp(2.75rem, 5.5vw, 5rem)",
          lineHeight: "0.95",
          weight: 500,
          letterSpacing: "-0.025em",
        },
        headingMedium: {
          size: "1.75rem",
          lineHeight: "1.15",
          weight: 500,
          letterSpacing: "-0.015em",
        },
        bodyLarge: {
          size: "1.125rem",
          lineHeight: "1.75",
          weight: 400,
          letterSpacing: "0",
        },
        body: {
          size: "1rem",
          lineHeight: "1.65",
          weight: 400,
          letterSpacing: "0",
        },
        eyebrow: {
          size: "0.75rem",
          lineHeight: "1",
          weight: 500,
          letterSpacing: "0.2em",
        },
        navigation: {
          size: "0.875rem",
          lineHeight: "1.2",
          weight: 400,
          letterSpacing: "0.01em",
        },
        button: {
          size: "0.875rem",
          lineHeight: "1.2",
          weight: 500,
          letterSpacing: "0.01em",
        },
        caption: {
          size: "0.875rem",
          lineHeight: "1.4",
          weight: 400,
          letterSpacing: "0.01em",
        },
      },
    ),
  },

  {
    id: "luxury",
    name: "Luxury",
    headingFont: "cormorant-garamond",
    bodyFont: "ibm-plex-sans",

    system: createTypographySystem(
      "cormorant-garamond",
      "ibm-plex-sans",
      {
        display: {
          size: "clamp(4rem, 8vw, 8rem)",
          lineHeight: "0.85",
          weight: 500,
          letterSpacing: "-0.035em",
        },
        headingLarge: {
          size: "clamp(3rem, 5.5vw, 5rem)",
          lineHeight: "0.9",
          weight: 500,
          letterSpacing: "-0.025em",
        },
        headingMedium: {
          size: "1.875rem",
          lineHeight: "1.1",
          weight: 500,
          letterSpacing: "-0.015em",
        },
        bodyLarge: {
          size: "1.125rem",
          lineHeight: "1.75",
          weight: 400,
          letterSpacing: "0",
        },
        body: {
          size: "1rem",
          lineHeight: "1.65",
          weight: 400,
          letterSpacing: "0",
        },
        eyebrow: {
          size: "0.75rem",
          lineHeight: "1",
          weight: 500,
          letterSpacing: "0.22em",
        },
        navigation: {
          size: "0.875rem",
          lineHeight: "1.2",
          weight: 400,
          letterSpacing: "0.02em",
        },
        button: {
          size: "0.875rem",
          lineHeight: "1.2",
          weight: 500,
          letterSpacing: "0.02em",
        },
        caption: {
          size: "0.875rem",
          lineHeight: "1.4",
          weight: 400,
          letterSpacing: "0.01em",
        },
      },
    ),
  },

  {
    id: "structured",
    name: "Structured",
    headingFont: "ibm-plex-sans",
    bodyFont: "inter",

    system: createTypographySystem(
      "ibm-plex-sans",
      "inter",
      {
        display: {
          size: "clamp(3rem, 7vw, 7rem)",
          lineHeight: "0.95",
          weight: 600,
          letterSpacing: "-0.035em",
        },
        headingLarge: {
          size: "clamp(2.5rem, 5vw, 4.5rem)",
          lineHeight: "1",
          weight: 600,
          letterSpacing: "-0.025em",
        },
        headingMedium: {
          size: "1.5rem",
          lineHeight: "1.2",
          weight: 500,
          letterSpacing: "-0.015em",
        },
        bodyLarge: {
          size: "1.125rem",
          lineHeight: "1.75",
          weight: 400,
          letterSpacing: "0",
        },
        body: {
          size: "1rem",
          lineHeight: "1.6",
          weight: 400,
          letterSpacing: "0",
        },
        eyebrow: {
          size: "0.75rem",
          lineHeight: "1",
          weight: 500,
          letterSpacing: "0.2em",
        },
        navigation: {
          size: "0.875rem",
          lineHeight: "1.2",
          weight: 400,
          letterSpacing: "0",
        },
        button: {
          size: "0.875rem",
          lineHeight: "1.2",
          weight: 500,
          letterSpacing: "0",
        },
        caption: {
          size: "0.875rem",
          lineHeight: "1.4",
          weight: 400,
          letterSpacing: "0",
        },
      },
    ),
  },
]