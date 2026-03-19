import { ServicePackage } from "@/types"

export const packages: ServicePackage[] = [
  {
    id: "essential",
    name: "Essential",
    price: "$250",
    duration: "1 hour",
    description: "Perfect for individuals looking for a clean, professional portrait session.",
    features: [
      "1-hour session",
      "1 location",
      "15 edited digital images",
      "Online gallery delivery",
      "Personal use license",
    ],
  },
  {
    id: "signature",
    name: "Signature",
    price: "$450",
    duration: "2 hours",
    description: "Our most popular package — ideal for those who want variety and depth.",
    features: [
      "2-hour session",
      "Up to 2 locations",
      "30 edited digital images",
      "Online gallery delivery",
      "Personal use license",
      "1 outfit change",
      "Print release included",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: "$750",
    duration: "Half day",
    description: "A full creative experience for editorial, brand, or personal branding needs.",
    features: [
      "4-hour session",
      "Multiple locations",
      "60 edited digital images",
      "Online gallery delivery",
      "Commercial use license",
      "Multiple outfit changes",
      "Styling consultation",
      "Rush delivery available",
    ],
  },
]
