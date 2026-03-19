import type { Metadata } from "next"
import { Suspense } from "react"
import ContactForm from "@/components/contact/ContactForm"
import { siteConfig } from "@/data/site"

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a portrait session or get in touch to discuss your photography needs.",
}

const details = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
  },
  {
    label: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone}`,
  },
  {
    label: "Location",
    value: siteConfig.location,
    href: null,
  },
  {
    label: "Response Time",
    value: "Within 1–2 business days",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">Get in Touch</p>
          <h1 className="font-heading text-5xl md:text-6xl text-[#f5f5f5] mb-6">Contact</h1>
          <p className="text-[#a0a0a0] max-w-md mx-auto">
            Ready to book a session or have a question? Fill out the form and I'll get back to you shortly.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left: contact details */}
          <div className="lg:col-span-1 space-y-10">
            <div>
              <h2 className="font-heading text-2xl text-[#f5f5f5] mb-6">Let's connect.</h2>
              <p className="text-[#a0a0a0] leading-relaxed text-sm">
                Whether you're ready to book or just exploring your options, I'd love to hear from you.
                Every great portrait starts with a conversation.
              </p>
            </div>

            {/* Details */}
            <ul className="space-y-6">
              {details.map((item) => (
                <li key={item.label}>
                  <p className="text-[#c9a96e] text-[10px] tracking-widest uppercase mb-1">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-[#f5f5f5] text-sm hover:text-[#c9a96e] transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-[#f5f5f5] text-sm">{item.value}</p>
                  )}
                </li>
              ))}
            </ul>

            {/* Social */}
            {siteConfig.social.instagram && (
              <div>
                <p className="text-[#c9a96e] text-[10px] tracking-widest uppercase mb-3">Follow Along</p>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#a0a0a0] hover:text-[#f5f5f5] transition-colors text-sm"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                  Instagram
                </a>
              </div>
            )}
          </div>

          {/* Right: form */}
          <div className="lg:col-span-2">
            <Suspense fallback={<div className="text-[#a0a0a0] text-sm">Loading form...</div>}>
              <ContactForm />
            </Suspense>
          </div>

        </div>
      </div>
    </div>
  )
}
