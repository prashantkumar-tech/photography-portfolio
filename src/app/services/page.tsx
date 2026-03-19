import type { Metadata } from "next"
import Link from "next/link"
import PricingCard from "@/components/services/PricingCard"
import { packages } from "@/data/services"

export const metadata: Metadata = {
  title: "Services & Pricing",
  description: "Portrait photography packages and pricing. Choose the session that's right for you.",
}

const faqs = [
  {
    q: "Where do sessions take place?",
    a: "Sessions can be held at my studio, an outdoor location of your choice, or we can scout a location together. Travel within 30 miles is included.",
  },
  {
    q: "How long until I receive my photos?",
    a: "Edited images are delivered via an online gallery within 2–3 weeks. Rush delivery (5–7 days) is available for Premium package clients.",
  },
  {
    q: "What should I wear?",
    a: "I send a detailed style guide after booking. In general, solid colors and timeless styles photograph best. We'll discuss this during our pre-session consultation.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes — a 50% deposit is required to secure your date, with the remainder due on the day of the session.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] pt-28 pb-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-20">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">Investment</p>
          <h1 className="font-heading text-5xl md:text-6xl text-[#f5f5f5] mb-6">Services & Pricing</h1>
          <p className="text-[#a0a0a0] max-w-lg mx-auto">
            Every session is tailored to you. Choose the package that fits your needs,
            or reach out for a custom quote.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
          {packages.map((pkg, i) => (
            <PricingCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Custom quote banner */}
        <div className="border border-[#2a2a2a] p-10 text-center mb-24">
          <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-3">Need Something Different?</p>
          <h2 className="font-heading text-3xl text-[#f5f5f5] mb-4">Let's build a custom package.</h2>
          <p className="text-[#a0a0a0] max-w-md mx-auto mb-8">
            Corporate headshots, events, ongoing brand work — if your needs don't fit a standard package,
            get in touch and we'll put something together.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-[#c9a96e] text-[#0a0a0a] text-sm tracking-widest uppercase font-medium hover:bg-[#b8935a] transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#c9a96e] text-xs tracking-[0.4em] uppercase mb-4">FAQ</p>
            <h2 className="font-heading text-3xl text-[#f5f5f5]">Common Questions</h2>
          </div>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#2a2a2a] pb-6">
                <p className="font-heading text-lg text-[#f5f5f5] mb-2">{faq.q}</p>
                <p className="text-[#a0a0a0] leading-relaxed text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
