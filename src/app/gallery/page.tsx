import type { Metadata } from "next"
import GalleryGrid from "@/components/gallery/GalleryGrid"

export const metadata: Metadata = {
  title: "Gallery",
  description: "Full portrait photography gallery — click any image to view fullscreen.",
}

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">Browse</p>
          <h1 className="font-heading text-5xl md:text-6xl text-[#f5f5f5] mb-6">Gallery</h1>
          <p className="text-[#a0a0a0] max-w-md mx-auto">
            Click any image to view fullscreen. Use arrow keys or swipe to navigate.
          </p>
        </div>

        {/* Masonry Grid + Lightbox */}
        <GalleryGrid />
      </div>
    </div>
  )
}
