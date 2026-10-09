import type { Asset } from "./asset"

export type HeroContent = {
  eyebrow: string
  heading: string
  description: string
  supportingPoints: string[]
  images: Asset[]
}

export type ServiceItem = {
  id?: string
  title: string
  description?: string
}

export type ServicesContent = {
  eyebrow: string
  items: ServiceItem[]
}

export type WorkItem = {
  title: string
  category: string
  description?: string
  image?: Asset
}

export type TestimonialItem = {
  quote: string
  name: string
  role?: string
  image?: Asset
}

export type CTAContent = {
  eyebrow: string
  heading: string
  buttonLabel: string
}

export type NavbarContent = {
  brand: string
}

export type FooterContent = {
  brand: string
  copyright: string
}

export type ContentState = {
  hero?: HeroContent
  services?: ServicesContent
  work?: WorkItem[]
  testimonials?: TestimonialItem[]
  cta?: CTAContent
  navbar?: NavbarContent
  footer?: FooterContent
}