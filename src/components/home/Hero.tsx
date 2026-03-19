"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { siteConfig } from "@/data/site"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0a0a]/30 to-[#0a0a0a]" />

      {/* Placeholder background — replace with your hero image */}
      <div className="absolute inset-0 bg-[#141414]">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_#c9a96e_0%,_transparent_70%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-6"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-6xl md:text-8xl text-[#f5f5f5] mb-6 leading-tight"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-[#a0a0a0] text-lg max-w-md mx-auto mb-10"
        >
          {siteConfig.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/portfolio"
            className="px-8 py-3 bg-[#c9a96e] text-[#0a0a0a] text-sm tracking-widest uppercase font-medium hover:bg-[#b8935a] transition-colors"
          >
            View Portfolio
          </Link>
          <Link
            href="/contact"
            className="px-8 py-3 border border-[#2a2a2a] text-[#f5f5f5] text-sm tracking-widest uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
          >
            Book a Session
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[#a0a0a0] text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#c9a96e] to-transparent"
        />
      </motion.div>
    </section>
  )
}
