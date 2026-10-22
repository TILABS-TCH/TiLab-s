# TILABS — Personal Portfolio Website

**Ogunpitan Oluwatimileyin Samuel (Timi)**  
*Digital products, websites & experiences.*

This repository contains the source code for the **TILABS** personal portfolio website, designed and built to showcase high-level frontend craftsmanship, micro-interactions, responsive architecture, and software development growth.

---

## 🚀 Tech Stack

- **Framework:** [Next.js 15 (App Router)](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + Custom CSS Design Tokens
- **Motion & Physics:** [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Icons:** [Lucide Icons](https://lucide.dev/)
- **SEO & Metadata:** Native Next.js Metadata API + Dynamic Sitemap (`sitemap.ts`) & Robots (`robots.ts`)

---

## 📁 Project Structure

```text
TILABS/
├── app/
│   ├── layout.tsx                 # Root layout with fonts, metadata, Lenis & Cursor
│   ├── page.tsx                   # Main Landing Page
│   ├── projects/
│   │   ├── page.tsx               # Projects Archive Overview
│   │   └── [slug]/
│   │       └── page.tsx           # Dynamic Project Detail Route
│   ├── not-found.tsx              # Custom 404 Page
│   ├── sitemap.ts                 # Dynamic sitemap generator
│   └── robots.ts                  # SEO robots configuration
├── components/
│   ├── navigation/
│   │   ├── Navbar.tsx             # Floating navbar & fullscreen mobile menu
│   │   └── Footer.tsx             # Brand footer with social channels & back-to-top
│   ├── hero/
│   │   ├── Hero.tsx               # Main hero section & availability badge
│   │   └── HeroBackground.tsx     # Technical grid canvas backdrop
│   ├── about/
│   │   └── About.tsx              # Story & focus areas grid
│   ├── projects/
│   │   ├── SelectedWork.tsx       # 6 bento-inspired project showcase cards
│   │   ├── ProjectCard.tsx        # Individual interactive card component
│   │   └── ProjectDetailView.tsx  # Dynamic layout view for case studies
│   ├── skills/
│   │   └── SkillsStack.tsx        # Categorized tech stack (no fake % bars)
│   ├── journey/
│   │   └── JourneyTimeline.tsx    # "The Journey" progression timeline
│   ├── process/
│   │   └── ProcessSection.tsx     # 01 Discover -> 02 Design -> 03 Build -> 04 Refine
│   ├── contact/
│   │   └── ContactForm.tsx        # Interactive contact form with validation
│   └── ui/
│       ├── CustomCursor.tsx       # Lerp mouse follower with context labels
│       ├── MagneticButton.tsx     # Magnetic hover wrapper
│       ├── SmoothScrollProvider.tsx# Lenis smooth scroll wrapper
│       └── ImagePlaceholder.tsx   # Aspect-ratio safe local SVG image wrapper
├── data/
│   └── content.ts                 # Centralized content & project store
├── lib/
│   ├── utils.ts                   # Class merging helpers
│   └── useReducedMotion.ts        # Accessibility reduced motion hook
└── public/
    ├── favicon.svg                # TILABS brand favicon
    └── images/
        ├── profile/
        │   └── avatar.svg         # Profile image placeholder
        └── projects/
            ├── moodtrace.svg      # Project preview SVG
            ├── flowcraft.svg      # Project preview SVG
            ├── veloce.svg         # Project preview SVG
            ├── pulse.svg          # Project preview SVG
            ├── kroma.svg          # Project preview SVG
            └── zenith.svg         # Project preview SVG
```

---

## 🛠️ Local Development & Setup

### Prerequisites
- Node.js 18.x or higher
- npm 9.x or higher

### Steps

1. **Clone & Install Dependencies:**
   ```bash
   git clone https://github.com/tilabs-dev/tilabs.git
   cd TILABS
   npm install
   ```

2. **Run Local Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

3. **Production Build:**
   ```bash
   npm run build
   npm start
   ```

---

## 📝 How to Edit Content

All text copy, projects, skills, journey stages, process steps, and social links are centralized in:

📂 `data/content.ts`

### 1. Updating Personal Info & Positioning:
Edit `siteConfig` at the top of `data/content.ts`:
```ts
export const siteConfig = {
  name: "Timi",
  fullName: "Ogunpitan Oluwatimileyin Samuel",
  brandName: "TILABS",
  status: "Available for freelance projects",
   email: "your.email@example.com",
  github: "https://github.com/your-username",
  ...
}
```

### 2. Setting Up Web3Forms
1. Go to [web3forms.com](https://web3forms.com), enter the inbox where you want to receive messages, and create an access key.
2. In the project root, copy `.env.example` to `.env.local`.
3. Replace the placeholder with your access key:
   ```dotenv
   WEB3FORMS_ACCESS_KEY=paste_your_access_key_here
   ```
4. Restart the development server after changing the environment file. The contact form submits to the site's server route, which forwards the message to Web3Forms without exposing the access key to the browser.
5. For production, add `WEB3FORMS_ACCESS_KEY` in your hosting provider's environment-variable settings and redeploy. Do not add the `NEXT_PUBLIC_` prefix, commit `.env.local`, or paste the key into `data/content.ts`.

If the key is missing, the server rejects submissions and the form displays a direct email fallback.

### 3. Adding or Editing Projects:
Modify the `projects` array in `data/content.ts`:
```ts
{
  id: "my-new-project",
  slug: "my-new-project",
  title: "Project Title",
  tagline: "Short tagline",
  description: "Brief summary...",
  category: "Web Application",
  year: "2026",
  role: "Lead Frontend Engineer",
  featured: true,
  image: "/images/projects/my-new-project.webp", // or .png/.jpg
  technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
  liveUrl: "https://example.com",
  githubUrl: "https://github.com/example/repo",
  overview: "Deep overview...",
  problem: "The problem statement...",
  approach: "Engineering approach...",
  features: ["Feature 1", "Feature 2"],
  designDecisions: ["Decision 1", "Decision 2"],
  results: ["Metric or outcome 1", "Metric 2"],
}
```

---

## 🖼️ How to Replace Images

1. Place your real images inside `public/images/`:
   - Profile picture: `public/images/profile/avatar.webp` (or `.png`/`.jpg`)
   - Project screenshots: `public/images/projects/moodtrace.webp`, `flowcraft.webp`, etc.

2. Update the image paths in `data/content.ts`:
   ```ts
   image: "/images/projects/moodtrace.webp"
   ```

The `ImagePlaceholder` component automatically handles aspect ratios, loading skeletons, and fallback states smoothly.

---

## ☁️ Deploying to Vercel

1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of TILABS portfolio"
   git branch -M main
   git remote add origin https://github.com/your-username/tilabs.git
   git push -u origin main
   ```

2. Go to [Vercel](https://vercel.com/) -> **Add New Project**.
3. Import your `tilabs` repository.
4. Framework Preset: **Next.js**.
5. Click **Deploy**. Vercel will automatically build and deploy your site with zero extra configuration.

---

## ⚡ Performance & Quality Checklist

- [x] Next.js 15 App Router architecture with strict TypeScript types
- [x] Zero external broken images — fallback local SVGs provided
- [x] Smooth Lenis scrolling & Customlerp desktop cursor
- [x] Accessibility compliant (`prefers-reduced-motion` support, keyboard focus outlines)
- [x] Dynamic openGraph, twitter cards, sitemap, and robots setup
- [x] Responsive layout across 320px to 4K displays
