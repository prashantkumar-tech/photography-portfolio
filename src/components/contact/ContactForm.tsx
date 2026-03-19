"use client"

import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useSearchParams } from "next/navigation"

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  sessionType: z.string().min(1, "Please select a session type"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormData = z.infer<typeof schema>

const sessionTypes = [
  "Studio Portrait",
  "Outdoor Portrait",
  "Editorial",
  "Corporate / Headshot",
  "Custom Package",
  "Other",
]

export default function ContactForm() {
  const searchParams = useSearchParams()
  const packageParam = searchParams.get("package")

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  // Pre-fill session type if coming from pricing page
  useEffect(() => {
    if (packageParam === "signature") setValue("sessionType", "Studio Portrait")
    if (packageParam === "essential") setValue("sessionType", "Studio Portrait")
    if (packageParam === "premium") setValue("sessionType", "Editorial")
  }, [packageParam, setValue])

  const onSubmit = async (data: FormData) => {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
    if (!res.ok) throw new Error("Failed to send message")
  }

  if (isSubmitSuccessful) {
    return (
      <div className="text-center py-16 px-6 border border-[#2a2a2a] bg-[#141414]">
        <div className="w-12 h-12 rounded-full bg-[#c9a96e]/10 border border-[#c9a96e] flex items-center justify-center mx-auto mb-6">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#c9a96e" strokeWidth="2">
            <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-[#f5f5f5] mb-3">Message Sent</h3>
        <p className="text-[#a0a0a0] mb-8">
          Thank you for reaching out. I'll be in touch within 1–2 business days.
        </p>
        <button
          onClick={() => reset()}
          className="text-sm tracking-widest uppercase text-[#c9a96e] hover:text-[#b8935a] transition-colors"
        >
          Send Another Message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#a0a0a0] mb-2">
            Full Name <span className="text-[#c9a96e]">*</span>
          </label>
          <input
            {...register("name")}
            placeholder="Jane Smith"
            className="w-full bg-[#141414] border border-[#2a2a2a] text-[#f5f5f5] px-4 py-3 text-sm placeholder:text-[#555] focus:outline-none focus:border-[#c9a96e] transition-colors"
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-xs tracking-widest uppercase text-[#a0a0a0] mb-2">
            Email Address <span className="text-[#c9a96e]">*</span>
          </label>
          <input
            {...register("email")}
            type="email"
            placeholder="jane@example.com"
            className="w-full bg-[#141414] border border-[#2a2a2a] text-[#f5f5f5] px-4 py-3 text-sm placeholder:text-[#555] focus:outline-none focus:border-[#c9a96e] transition-colors"
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone + Session Type */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#a0a0a0] mb-2">
            Phone <span className="text-[#555] text-[10px] normal-case tracking-normal">(optional)</span>
          </label>
          <input
            {...register("phone")}
            type="tel"
            placeholder="+1 (555) 000-0000"
            className="w-full bg-[#141414] border border-[#2a2a2a] text-[#f5f5f5] px-4 py-3 text-sm placeholder:text-[#555] focus:outline-none focus:border-[#c9a96e] transition-colors"
          />
        </div>

        <div>
          <label className="block text-xs tracking-widest uppercase text-[#a0a0a0] mb-2">
            Session Type <span className="text-[#c9a96e]">*</span>
          </label>
          <select
            {...register("sessionType")}
            defaultValue=""
            className="w-full bg-[#141414] border border-[#2a2a2a] text-[#f5f5f5] px-4 py-3 text-sm focus:outline-none focus:border-[#c9a96e] transition-colors appearance-none"
          >
            <option value="" disabled className="text-[#555]">Select a session type</option>
            {sessionTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
          {errors.sessionType && (
            <p className="mt-1 text-xs text-red-400">{errors.sessionType.message}</p>
          )}
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs tracking-widest uppercase text-[#a0a0a0] mb-2">
          Message <span className="text-[#c9a96e]">*</span>
        </label>
        <textarea
          {...register("message")}
          rows={6}
          placeholder="Tell me about yourself and what you have in mind for the session..."
          className="w-full bg-[#141414] border border-[#2a2a2a] text-[#f5f5f5] px-4 py-3 text-sm placeholder:text-[#555] focus:outline-none focus:border-[#c9a96e] transition-colors resize-none"
        />
        {errors.message && (
          <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto px-10 py-3 bg-[#c9a96e] text-[#0a0a0a] text-sm tracking-widest uppercase font-medium hover:bg-[#b8935a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
