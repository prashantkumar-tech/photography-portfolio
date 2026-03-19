"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import type { ServicePackage } from "@/types"

type Props = {
  pkg: ServicePackage
  index: number
}

export default function PricingCard({ pkg, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className={`relative flex flex-col p-8 border transition-colors duration-300 ${
        pkg.popular
          ? "border-[#c9a96e] bg-[#141414]"
          : "border-[#2a2a2a] bg-[#141414] hover:border-[#444]"
      }`}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-[#c9a96e] text-[#0a0a0a] text-[10px] tracking-widest uppercase font-medium px-4 py-1">
            Most Popular
          </span>
        </div>
      )}

      {/* Header */}
      <div className="mb-6">
        <p className="text-[#c9a96e] text-xs tracking-[0.3em] uppercase mb-3">{pkg.name}</p>
        <div className="flex items-end gap-2 mb-3">
          <span className="font-heading text-5xl text-[#f5f5f5]">{pkg.price}</span>
          <span className="text-[#a0a0a0] text-sm mb-2">/ session</span>
        </div>
        <p className="text-[#a0a0a0] text-sm leading-relaxed">{pkg.description}</p>
      </div>

      {/* Divider */}
      <div className="h-px bg-[#2a2a2a] mb-6" />

      {/* Duration */}
      <div className="flex items-center gap-2 mb-6">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" strokeLinecap="round" />
        </svg>
        <span className="text-[#a0a0a0] text-sm">{pkg.duration}</span>
      </div>

      {/* Features */}
      <ul className="space-y-3 mb-8 flex-1">
        {pkg.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm text-[#a0a0a0]">
            <svg
              className="mt-0.5 shrink-0"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#c9a96e"
              strokeWidth="2"
            >
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Link
        href={`/contact?package=${pkg.id}`}
        className={`block text-center py-3 text-sm tracking-widest uppercase transition-colors duration-200 ${
          pkg.popular
            ? "bg-[#c9a96e] text-[#0a0a0a] hover:bg-[#b8935a]"
            : "border border-[#2a2a2a] text-[#f5f5f5] hover:border-[#c9a96e] hover:text-[#c9a96e]"
        }`}
      >
        Book Now
      </Link>
    </motion.div>
  )
}
