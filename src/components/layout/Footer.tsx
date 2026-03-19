import Link from "next/link"
import { siteConfig } from "@/data/site"

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-[#2a2a2a] bg-[#0a0a0a] px-6 py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <p className="font-heading text-lg text-[#f5f5f5]">{siteConfig.name}</p>
          <p className="text-sm text-[#a0a0a0] mt-1">{siteConfig.tagline}</p>
        </div>

        <nav className="flex flex-wrap justify-center gap-6">
          {siteConfig.nav.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#c9a96e] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="text-xs text-[#a0a0a0]">
          © {year} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
