import type { Metadata } from "next"
import { IBM_Plex_Sans, Geist } from "next/font/google"
import "./globals.css"
import { websiteFonts } from "@/data/fonts"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Laypick",
  description: "A pre-build website composition and design-direction tool.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body
        className={[
          ibmPlexSans.variable,
          websiteFonts.inter.variable,
          websiteFonts.ibmPlexSans.variable,
          websiteFonts.playfairDisplay.variable,
          websiteFonts.cormorantGaramond.variable,
        ].join(" ")}
      >
        {children}
      </body>
    </html>
  )
}