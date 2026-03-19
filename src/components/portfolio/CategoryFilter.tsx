"use client"

type Category = "all" | "studio" | "outdoor" | "editorial"

const categories: { label: string; value: Category }[] = [
  { label: "All", value: "all" },
  { label: "Studio", value: "studio" },
  { label: "Outdoor", value: "outdoor" },
  { label: "Editorial", value: "editorial" },
]

type Props = {
  active: Category
  onChange: (category: Category) => void
  counts: Record<Category, number>
}

export default function CategoryFilter({ active, onChange, counts }: Props) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat.value}
          onClick={() => onChange(cat.value)}
          className={`px-6 py-2 text-xs tracking-widest uppercase transition-all duration-200 border ${
            active === cat.value
              ? "border-[#c9a96e] text-[#c9a96e] bg-[#c9a96e]/10"
              : "border-[#2a2a2a] text-[#a0a0a0] hover:border-[#f5f5f5] hover:text-[#f5f5f5]"
          }`}
        >
          {cat.label}
          <span className="ml-2 text-[10px] opacity-60">({counts[cat.value]})</span>
        </button>
      ))}
    </div>
  )
}
