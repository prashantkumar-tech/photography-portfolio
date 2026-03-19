"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { siteConfig } from "@/data/site"

const stats = [
  { value: "8+", label: "Years Experience" },
  { value: "500+", label: "Sessions Completed" },
  { value: "12", label: "Awards Won" },
]

export default function AboutSection() {
  return (
    <section className="py-24 px-6 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">

        {/* Top: Image + Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[3/4] bg-[#141414] overflow-hidden"
          >
            <Image
              src="/images/about/portrait.jpg"
              alt={`${siteConfig.name} — photographer`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Accent border */}
            <div className="absolute bottom-0 left-0 w-16 h-1 bg-[#c9a96e]" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">About Me</p>
            <h2 className="font-heading text-4xl md:text-5xl text-[#f5f5f5] mb-6 leading-tight">
              I tell stories <br />
              <span className="italic">through portraits.</span>
            </h2>
            <div className="space-y-4 text-[#a0a0a0] leading-relaxed mb-8">
              <p>
                I'm {siteConfig.name}, a portrait photographer based in {siteConfig.location}.
                For over eight years, I've dedicated my craft to capturing the quiet power and
                authentic emotion that lives in every face.
              </p>
              <p>
                My work spans studio portraiture, outdoor sessions, and editorial projects —
                each approached with the same intention: to create an image that feels genuinely,
                unmistakably you.
              </p>
              <p>
                Whether you're looking for a professional headshot, a personal portrait, or a
                creative editorial session, I'd love to work with you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="px-8 py-3 bg-[#c9a96e] text-[#0a0a0a] text-sm tracking-widest uppercase font-medium hover:bg-[#b8935a] transition-colors text-center"
              >
                Book a Session
              </Link>
              <Link
                href="/portfolio"
                className="px-8 py-3 border border-[#2a2a2a] text-[#f5f5f5] text-sm tracking-widest uppercase hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors text-center"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-8 border-t border-b border-[#2a2a2a] py-12 mb-24"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-4xl md:text-5xl text-[#c9a96e] mb-2">{stat.value}</p>
              <p className="text-[#a0a0a0] text-sm tracking-widest uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-6">My Philosophy</p>
          <blockquote className="font-heading text-2xl md:text-3xl text-[#f5f5f5] leading-relaxed italic mb-6">
            "A great portrait doesn't just show what someone looks like —
            it reveals who they are."
          </blockquote>
          <p className="text-[#a0a0a0] leading-relaxed">
            Every session begins with a conversation. I believe the best portraits come from
            genuine connection — when you feel at ease, it shows. My approach is calm, collaborative,
            and always centered on making you feel confident in front of the lens.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
