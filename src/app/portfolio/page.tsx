import type { Metadata } from "next"
import PortfolioGrid from "@/components/portfolio/PortfolioGrid"

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Browse portrait photography work across studio, outdoor, and editorial categories.",
}

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">My Work</p>
          <h1 className="font-heading text-5xl md:text-6xl text-[#f5f5f5] mb-6">Portfolio</h1>
          <p className="text-[#a0a0a0] max-w-md mx-auto">
            A collection of portrait sessions spanning studio, outdoor, and editorial work.
          </p>
        </div>

        {/* Grid + Filter */}
        <PortfolioGrid />
      </div>
    </div>
  )
}
