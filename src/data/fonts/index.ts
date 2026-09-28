import {
  Cormorant_Garamond,
  IBM_Plex_Sans,
  Inter,
  Playfair_Display,
} from "next/font/google"

const inter = Inter({
  variable: "--lp-font-inter",
  subsets: ["latin"],
  display: "swap",
})

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--lp-font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const playfairDisplay = Playfair_Display({
  variable: "--lp-font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

const cormorantGaramond = Cormorant_Garamond({
  variable: "--lp-font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
})

export const websiteFonts = {
  inter,
  ibmPlexSans,
  playfairDisplay,
  cormorantGaramond,
}