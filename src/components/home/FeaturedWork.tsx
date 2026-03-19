"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { photos } from "@/data/portfolio"

const featured = photos.filter((p) => p.featured).slice(0, 3)

export default function FeaturedWork() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">Selected Work</p>
          <h2 className="font-heading text-4xl md:text-5xl text-[#f5f5f5]">Featured Portraits</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map((photo, i) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group relative overflow-hidden bg-[#141414] aspect-[3/4]"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-[#c9a96e] text-xs tracking-widest uppercase mb-1">{photo.category}</p>
                <p className="font-heading text-xl text-[#f5f5f5]">{photo.title}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/portfolio"
            className="inline-block px-8 py-3 border border-[#2a2a2a] text-[#a0a0a0] text-sm tracking-widest uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors"
          >
            View All Work
          </Link>
        </div>
      </div>
    </section>
  )
}
