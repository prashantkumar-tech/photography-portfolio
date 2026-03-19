# Photography Portfolio — Build Progress

## Project
- **Location:** `/Users/prashantkumar/projects/photography-portfolio/`
- **Stack:** Next.js 16 (App Router, Turbopack), TypeScript, Tailwind CSS v4, Framer Motion
- **Purpose:** Portrait photography showcase + future print sales

---

## Completed

### Foundation
- [x] Project scaffold (`create-next-app`)
- [x] Packages installed: `framer-motion`, `react-hook-form`, `@hookform/resolvers`, `zod`
- [x] Folder structure created
- [x] Design system — colors, fonts (Playfair Display + Inter), scrollbar (`globals.css`)

### Data & Types
- [x] `src/types/index.ts` — `Photo`, `ServicePackage`, `NavLink` types
- [x] `src/data/site.ts` — name, tagline, description, email, phone, location, social, nav
- [x] `src/data/portfolio.ts` — 6 placeholder photos (studio / outdoor / editorial categories)
- [x] `src/data/services.ts` — 3 pricing packages (Essential $250, Signature $450, Premium $750)

### Layout
- [x] `src/app/layout.tsx` — root layout with Header + Footer
- [x] `src/app/globals.css` — design tokens + global styles
- [x] `src/components/layout/Header.tsx` — sticky nav, transparent-to-solid on scroll, mobile hamburger menu, active link highlight
- [x] `src/components/layout/Footer.tsx` — nav links + copyright

### Pages
- [x] **Home** (`src/app/page.tsx`)
  - [x] `Hero.tsx` — full-screen, animated (Framer Motion), tagline + name + CTA buttons + scroll indicator
  - [x] `FeaturedWork.tsx` — 3-column featured photo grid with hover reveal

---

## To Do (in order)

- [x] **Portfolio page** (`src/app/portfolio/page.tsx`)
  - Category filter tabs (All / Studio / Outdoor / Editorial)
  - Uniform grid with animated filter transitions (Framer Motion AnimatePresence)
  - Hover overlay with category + title reveal

- [x] **Gallery page** (`src/app/gallery/page.tsx`)
  - Masonry grid layout with scroll-triggered animations
  - Lightbox component (fullscreen viewer, arrow key nav, ESC to close, swipe on mobile, caption + counter)

- [x] **About page** (`src/app/about/page.tsx`)
  - Split layout: image left, bio + CTAs right
  - Stats bar (years experience, sessions, awards)
  - Philosophy quote section

- [x] **Services & Pricing page** (`src/app/services/page.tsx`)
  - 3 pricing cards (Essential / Signature / Premium) with animated entrance
  - "Most Popular" highlight on Signature
  - Custom quote banner with CTA
  - FAQ section (4 questions)

- [x] **Contact page** (`src/app/contact/page.tsx`)
  - Form: name, email, phone, session type, message (react-hook-form + zod validation)
  - Pre-fills session type when coming from pricing page (?package=)
  - Success state with reset option
  - Contact details + Instagram link sidebar
  - API route at `/api/contact` (ready for Resend integration)

- [ ] **Polish & Deploy**
  - Add real photos to `public/images/portfolio/` and update `src/data/portfolio.ts`
  - Update personal info in `src/data/site.ts`
  - SEO metadata per page
  - Deploy to Vercel

---

## Design Tokens (quick reference)
| Token | Value |
|-------|-------|
| Background | `#0a0a0a` |
| Surface | `#141414` |
| Border | `#2a2a2a` |
| Text Primary | `#f5f5f5` |
| Text Secondary | `#a0a0a0` |
| Accent (gold) | `#c9a96e` |
| Heading font | Playfair Display |
| Body font | Inter |

---

## How to Run Locally
```bash
cd /Users/prashantkumar/projects/photography-portfolio
npm run dev
```
Then open [http://localhost:3000](http://localhost:3000)
