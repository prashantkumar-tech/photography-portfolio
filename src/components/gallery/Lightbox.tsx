"use client"

import { useEffect, useCallback } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import type { Photo } from "@/types"

type Props = {
  photos: Photo[]
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export default function Lightbox({ photos, currentIndex, onClose, onNext, onPrev }: Props) {
  const photo = photos[currentIndex]

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      if (e.key === "ArrowRight") onNext()
      if (e.key === "ArrowLeft") onPrev()
    }
    window.addEventListener("keydown", handleKey)
    return () => window.removeEventListener("keydown", handleKey)
  }, [onClose, onNext, onPrev])

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  // Touch / swipe support
  let touchStartX = 0
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX = e.touches[0].clientX
  }
  const handleTouchEnd = (e: React.TouchEvent) => {
    const delta = touchStartX - e.changedTouches[0].clientX
    if (delta > 50) onNext()
    if (delta < -50) onPrev()
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm flex items-center justify-center"
        onClick={onClose}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-[#a0a0a0] hover:text-[#f5f5f5] transition-colors z-10"
          aria-label="Close"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
          </svg>
        </button>

        {/* Prev button */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 md:left-8 text-[#a0a0a0] hover:text-[#f5f5f5] transition-colors z-10 p-2"
          aria-label="Previous photo"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Next button */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 md:right-8 text-[#a0a0a0] hover:text-[#f5f5f5] transition-colors z-10 p-2"
          aria-label="Next photo"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {/* Image */}
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative max-h-[85vh] max-w-[90vw] w-full h-full flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="relative w-full h-[85vh]">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>
        </motion.div>

        {/* Caption + Counter */}
        <div className="absolute bottom-6 left-0 right-0 flex flex-col items-center gap-1 pointer-events-none">
          <p className="font-heading text-lg text-[#f5f5f5]">{photo.title}</p>
          <p className="text-[#a0a0a0] text-xs tracking-widest uppercase">
            {photo.category} &nbsp;·&nbsp; {currentIndex + 1} / {photos.length}
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
