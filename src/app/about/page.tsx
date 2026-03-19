import type { Metadata } from "next"
import AboutSection from "@/components/about/AboutSection"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}, portrait photographer based in ${siteConfig.location}.`,
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-20">
      <AboutSection />
    </div>
  )
}
