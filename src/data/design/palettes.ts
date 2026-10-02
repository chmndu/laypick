import type { DesignTokens } from "@/types/design"

export type ColorPalette = {
    id: string
    name: string
    colors: DesignTokens["colors"]
}

export const colorPalettes: ColorPalette[] = [
    {
        id: "neutral-light",
        name: "Neutral Light",
        colors: {
            background: "#F8F8F6",
            foreground: "#171717",
            muted: "#6F6F6A",
            accent: "#171717",
            border: "#E4E4DF",
        },
    },
    {
        id: "warm-editorial",
        name: "Warm Editorial",
        colors: {
            background: "#F3F0EA",
            foreground: "#1C1A17",
            muted: "#716B62",
            accent: "#8A4B32",
            border: "#D8D0C4",
        },
    },
    {
        id: "dark-luxury",
        name: "Dark Luxury",
        colors: {
            background: "#11110F",
            foreground: "#F2EFE7",
            muted: "#AAA59A",
            accent: "#C9B27C",
            border: "#302F2A",
        },
    },
    {
        id: "cool-neutral",
        name: "Cool Neutral",
        colors: {
            background: "#F4F5F7",
            foreground: "#17191D",
            muted: "#686D76",
            accent: "#465B76",
            border: "#D9DDE3",
        },
    },
]