export type Photo = {
  id: string
  title: string
  category: "studio" | "outdoor" | "editorial"
  src: string
  alt: string
  featured: boolean
  width: number
  height: number
}

export type ServicePackage = {
  id: string
  name: string
  price: string
  duration: string
  description: string
  features: string[]
  popular?: boolean
}

export type NavLink = {
  label: string
  href: string
}
