"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { photos } from "@/data/portfolio"
import CategoryFilter from "./CategoryFilter"
import type { Photo } from "@/types"

type Category = "all" | "studio" | "outdoor" | "editorial"

export default function PortfolioGrid() {
  const [active, setActive] = useState<Category>("all")

  const filtered = useMemo(() => {
    if (active === "all") return photos
    return photos.filter((p) => p.category === active)
  }, [active])

  const counts = useMemo(() => ({
    all: photos.length,
    studio: photos.filter((p) => p.category === "studio").length,
    outdoor: photos.filter((p) => p.category === "outdoor").length,
    editorial: photos.filter((p) => p.category === "editorial").length,
  }), [])

  return (
    <div>
      {/* Filter Tabs */}
      <div className="mb-12">
        <CategoryFilter active={active} onChange={setActive} counts={counts} />
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {filtered.map((photo: Photo) => (
            <motion.div
              key={photo.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="group relative overflow-hidden bg-[#141414] aspect-[3/4]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[#c9a96e] text-[10px] tracking-widest uppercase mb-1">
                  {photo.category}
                </p>
                <p className="font-heading text-lg text-[#f5f5f5]">{photo.title}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Empty state */}
      {filtered.length === 0 && (
        <div className="text-center py-24 text-[#a0a0a0]">
          No photos in this category yet.
        </div>
      )}
    </div>
  )
}
