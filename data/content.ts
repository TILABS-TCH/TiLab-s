export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  year: string;
  role: string;
  featured: boolean;
  image: string;
  aspectRatio?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  overview: string;
  problem: string;
  approach: string;
  features: string[];
  designDecisions: string[];
  results: string[];
  color?: string;
  lightColor?: string;
  badgeBg?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level: string;
    description: string;
    highlight?: boolean;
  }[];
}

export interface JourneyMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  badge: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export const siteConfig = {
  name: "Timi",
  fullName: "Ogunpitan Oluwatimileyin Samuel",
  brandName: "TILABS",
  brandTagline: "Digital products, websites & experiences.",
  role: "Frontend Developer",
  status: "Available for freelance & full-time projects",
  location: "Lagos, Nigeria (Remote)",
  email: "timi.tilabs@gmail.com",
  github: "https://github.com/tilabs-dev",
  linkedin: "https://linkedin.com/in/tilabs",
  twitter: "https://x.com/tilabs_dev",
  positioning: "I build modern digital experiences that turn ideas into products people actually want to use.",
  subPositioning:
    "Specialized in engineering crisp interfaces, fluid web applications, and performance-focused frontend architectures with high visual precision.",
  bio: [
    "My journey into software engineering started with a fascination for how design meets code to shape human behavior. I view web development not just as writing code, but as crafting intuitive digital environments.",
    "I focus heavily on frontend craftsmanship: responsive layouts, micro-interactions, typed data structures, and optimized page loads. Every pixel and motion choice serves a purpose.",
    "While I am continuously pushing my technical boundaries—expanding into full-stack Next.js and advanced graphics—I bring an obsessive attention to detail and a problem-solving mindset to every product I build."
  ],
};

export const navLinks = [
  { name: "About", href: "/#about" },
  { name: "Work", href: "/#work" },
  { name: "Lab", href: "/#lab" },
  { name: "Stack", href: "/#stack" },
  { name: "Journey", href: "/#journey" },
  { name: "Process", href: "/#process" },
  { name: "Contact", href: "/#contact" },
];

export const projects: Project[] = [
  {
    id: "moodtrace",
    slug: "moodtrace",
    title: "MoodTrace",
    tagline: "Intelligent Daily Emotional Tracking & Mindful Analytics",
    description:
      "A distraction-free web application designed for daily mood tracking, journal reflection, and visual sentiment analysis.",
    category: "Web Application",
    year: "2026",
    role: "Lead Frontend Engineer & UI Designer",
    featured: true,
    image: "/images/projects/moodtrace.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Recharts"],
    liveUrl: "https://moodtrace.vercel.app",
    githubUrl: "https://github.com/tilabs-dev/moodtrace",
    overview:
      "MoodTrace is a mindfulness dashboard crafted to help users log daily emotional states, note triggers, and visualize behavioral trends over time without numerical anxiety.",
    problem:
      "Most habit and mood tracking apps suffer from dense UI clutter, intrusive popups, and clinical charts that feel clinical rather than reflective.",
    approach:
      "Designed a minimalist dark canvas with calm ambient feedback, fluid micro-interactions, and accessible chart visualizations using Framer Motion and custom Recharts components.",
    features:
      ["One-tap mood logging with tactile spring animations", "Interactive weekly & monthly emotional heatmaps", "Private local-first data storage with export capabilities", "Custom color themes tuned for dark mode readability"],
    designDecisions:
      ["Monochrome layout with subtle pastel accents for emotional states", "Smooth keyboard shortcuts for rapid daily entry", "Strict 60fps frame rate during chart filter transitions"],
    results:
      ["Sub-100ms entry logging latency", "100% WCAG AA contrast compliance across night themes", "Built with 0 external UI library dependencies for core components"],
    color: "#EA580C",
    lightColor: "#FFF7ED",
    badgeBg: "#FED7AA",
  },
  {
    id: "flowcraft",
    slug: "flowcraft",
    title: "FlowCraft",
    tagline: "Interactive Canvas & Node Workflow Planner",
    description:
      "A high-performance visual node workflow canvas for mapping user journeys and system logic.",
    category: "Developer Tool",
    year: "2025",
    role: "Frontend Developer",
    featured: true,
    image: "/images/projects/flowcraft.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Zustand", "HTML5 Canvas"],
    liveUrl: "https://flowcraft.vercel.app",
    githubUrl: "https://github.com/tilabs-dev/flowcraft",
    overview:
      "FlowCraft provides product managers and engineers with a lightweight infinite canvas to build, connect, and export complex operational diagrams.",
    problem:
      "Existing flowchart software is heavy, expensive, and bloated with enterprise features when teams just need fast, intuitive node connection.",
    approach:
      "Engineered an optimized React canvas rendering engine using directional vectors, custom node state management via Zustand, and SVG curved connectors.",
    features:
      ["Infinite pannable & zoomable canvas", "Custom node drag-and-drop snapping", "SVG path curve auto-routing", "Export diagrams to clean SVG & PNG formats"],
    designDecisions:
      ["Minimal grid mesh background with dynamic viewport scaling", "Contextual floating toolbar to maximize canvas real estate"],
    results:
      ["Maintained smooth 60fps canvas panning under 500+ nodes", "Zero layout shift during node dragging"],
    color: "#7C3AED",
    lightColor: "#F5F3FF",
    badgeBg: "#DDD6FE",
  },
  {
    id: "veloce",
    slug: "veloce-commerce",
    title: "Veloce Commerce",
    tagline: "Headless E-Commerce Interface for Minimalist Goods",
    description:
      "A lightning-fast storefront interface focused on high-conversion product presentation and zero-friction navigation.",
    category: "E-Commerce",
    year: "2025",
    role: "Frontend Developer",
    featured: true,
    image: "/images/projects/veloce.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Stripe API"],
    liveUrl: "https://veloce-store.vercel.app",
    githubUrl: "https://github.com/tilabs-dev/veloce-commerce",
    overview:
      "Veloce Commerce is a proof-of-concept luxury storefront built to demonstrate modern web performance standards in high-end retail.",
    problem:
      "Traditional e-commerce stores reload entire pages on cart edits, leading to jarring experience drop-offs and low retention.",
    approach:
      "Implemented seamless slide-over cart drawers, instant optimistic state updates, and dynamic image preview transitions.",
    features:
      ["Instant slide-out cart drawer with live subtotal math", "Dynamic product image zoom and interactive variant switching", "Optimized image loading pipeline with Next.js Image", "Clean checkout step flow mockup"],
    designDecisions:
      ["High-contrast editorial typography", "Subtle border lighting on product hover cards"],
    results:
      ["Lighthouse performance score of 98/100", "Instant client-side route transitions under 50ms"],
    color: "#059669",
    lightColor: "#ECFDF5",
    badgeBg: "#A7F3D0",
  },
  {
    id: "pulse-analytics",
    slug: "pulse-analytics",
    title: "Pulse Analytics",
    tagline: "Real-time Metrics Dashboard for SaaS Products",
    description:
      "An executive analytics dashboard delivering real-time telemetry, server telemetry, and user event monitoring.",
    category: "Dashboard",
    year: "2025",
    role: "Frontend Developer",
    featured: true,
    image: "/images/projects/pulse.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Lucide Icons"],
    liveUrl: "https://pulse-dash.vercel.app",
    githubUrl: "https://github.com/tilabs-dev/pulse-analytics",
    overview:
      "Pulse Analytics simplifies monitoring for indie hackers and small dev teams by presenting core metrics in a clean, legible control panel.",
    problem:
      "Data dashboards often overload users with dense tables and unreadable colored badges, creating fatigue instead of clarity.",
    approach:
      "Created a modular widget layout with dark-surfaced cards, streamlined data filtering, and custom SVG status indicators.",
    features:
      ["Live latency and traffic throughput indicators", "Time-range filter toggle (24h, 7d, 30d, 1y)", "Responsive sidebar with collapsed icon state", "Data table with client-side search and sorting"],
    designDecisions:
      ["Deep obsidian card containers with 1px translucent borders", "Status pill indicators with micro ambient glows"],
    results:
      ["Fully responsive layout from 320px mobile to 4K displays", "Clean component separation for rapid widget addition"],
    color: "#0052FF",
    lightColor: "#EFF6FF",
    badgeBg: "#BFDBFE",
  },
  {
    id: "kroma-studio",
    slug: "kroma-studio",
    title: "Kroma Studio",
    tagline: "Generative Palette & Brand System Generator",
    description:
      "A creative web app for generating harmonized color palettes, testing WCAG contrast ratios, and exporting Tailwind config files.",
    category: "Design Tool",
    year: "2024",
    role: "Creator & Developer",
    featured: false,
    image: "/images/projects/kroma.svg",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Chroma.js"],
    liveUrl: "https://kroma-studio.vercel.app",
    githubUrl: "https://github.com/tilabs-dev/kroma-studio",
    overview:
      "Kroma Studio bridges design and code by allowing developers to generate color palettes and immediately copy ready-to-use CSS & Tailwind tokens.",
    problem:
      "Selecting palette shades that pass accessibility contrast standards is tedious without dynamic contrast feedback.",
    approach:
      "Built color calculation math based on perceptual lightness algorithms and integrated real-time contrast ratio indicators.",
    features:
      ["Spacebar instant palette generation", "Lockable color slots", "Live contrast checker against text & background colors", "One-click copy for Tailwind CSS config code"],
    designDecisions:
      ["Full-height color swatch layout with smooth spring animations", "Clean overlay modal for export settings"],
    results:
      ["Accelerated palette generation time for developers", "Zero external UI dependencies"],
    color: "#D97706",
    lightColor: "#FFFBEB",
    badgeBg: "#FDE68A",
  },
  {
    id: "zenith-os",
    slug: "zenith-os",
    title: "Zenith OS",
    tagline: "Browser-based Desktop Interface Mockup",
    description:
      "An experimental web desktop interface built to explore window management, draggable UI layers, and web audio interactions.",
    category: "Experimental UI",
    year: "2024",
    role: "Frontend Developer",
    featured: false,
    image: "/images/projects/zenith.svg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://zenith-os.vercel.app",
    githubUrl: "https://github.com/tilabs-dev/zenith-os",
    overview:
      "Zenith OS is a creative sandbox project exploring how desktop UI conventions translate to modern web browsers.",
    problem:
      "Web applications often limit themselves to static vertical layouts rather than fluid windowed interfaces.",
    approach:
      "Utilized Framer Motion drag physics and React context to control z-index layering, window minimizing, and taskbar docks.",
    features:
      ["Draggable and resizable window frames", "Taskbar application dock with active indicators", "Built-in mini apps (Notes, Calculator, Terminal)", "Customizable desktop wallpaper ambient filters"],
    designDecisions:
      ["Glassmorphic window headers with translucent borders", "Smooth window open/close scaling animations"],
    results:
      ["Deep dive into Framer Motion layout animations and React DOM node state management"],
    color: "#E11D48",
    lightColor: "#FFF1F2",
    badgeBg: "#FECDD3",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Core Technologies",
    description: "The foundational web languages and runtime environments I build with every day.",
    skills: [
      { name: "TypeScript", level: "Advanced", description: "Strict typing, generics, interfaces, and custom utility types.", highlight: true },
      { name: "JavaScript (ES6+)", level: "Advanced", description: "Async/Await, DOM architecture, ES modules, closures, and performance.", highlight: true },
      { name: "HTML5", level: "Expert", description: "Semantic markup, accessibility landmarks, and SEO structured data.", highlight: false },
      { name: "CSS3", level: "Expert", description: "Flexbox, Grid, CSS variables, keyframes, and custom layout algorithms.", highlight: false },
    ],
  },
  {
    title: "Frameworks & State",
    description: "Modern component architectures for scalable, high-performance applications.",
    skills: [
      { name: "React 19 / 18", level: "Advanced", description: "Custom hooks, context patterns, server components, and render optimization.", highlight: true },
      { name: "Next.js (App Router)", level: "Advanced", description: "SSR, SSG, Route Handlers, SEO metadata, and dynamic routing.", highlight: true },
      { name: "Zustand / Context", level: "Intermediate", description: "Clean client-side state management without boilerplate density.", highlight: false },
    ],
  },
  {
    title: "Styling & Motion",
    description: "Tools for crafting responsive layouts and fluid, high-fps micro-interactions.",
    skills: [
      { name: "Tailwind CSS", level: "Expert", description: "Custom design tokens, responsive systems, and utility orchestration.", highlight: true },
      { name: "Framer Motion", level: "Advanced", description: "Layout animations, gesture controls, page transitions, and spring physics.", highlight: true },
      { name: "Lenis", level: "Intermediate", description: "Performance-tuned smooth scrolling integration for modern layouts.", highlight: false },
      { name: "GSAP", level: "Intermediate", description: "Targeted timeline animations for complex creative web moments.", highlight: false },
    ],
  },
  {
    title: "Tools & Ecosystem",
    description: "Workflow tools that ensure code quality, version control, and rapid deployment.",
    skills: [
      { name: "Git & GitHub", level: "Advanced", description: "Branching strategies, code reviews, and version history management.", highlight: true },
      { name: "Vercel", level: "Advanced", description: "Continuous integration, domain management, and performance monitoring.", highlight: true },
      { name: "Figma", level: "Intermediate", description: "Extracting design tokens, inspecting layouts, and component prototyping.", highlight: false },
      { name: "VS Code", level: "Advanced", description: "Tailored dev environment with strict linting and formatting setups.", highlight: false },
    ],
  },
];

export const journeyMilestones: JourneyMilestone[] = [
  {
    year: "Phase 01",
    title: "Learning the Fundamentals",
    subtitle: "Mastering the Building Blocks of the Web",
    description:
      "Diving deep into semantic HTML, CSS layouts, and core JavaScript. Built dozens of static websites, focused on understanding browser rendering, responsive design, and CSS Grid/Flexbox mechanics.",
    highlights: ["Semantic HTML structure", "CSS Grid & Flexbox layouts", "DOM Manipulation & ES6 JavaScript", "Clean responsive design patterns"],
    badge: "Foundation",
  },
  {
    year: "Phase 02",
    title: "Building Real Interfaces",
    subtitle: "Focusing on Precision & Accessibility",
    description:
      "Elevated design implementation skills by recreating complex real-world web applications and landing pages. Implemented strict accessibility standards, reusable component structures, and responsive cross-browser testing.",
    highlights: ["Pixel-perfect UI implementation", "WCAG accessibility standards", "CSS custom properties & theme tokens", "Git version control workflows"],
    badge: "Craftsmanship",
  },
  {
    year: "Phase 03",
    title: "Building Applications",
    subtitle: "Adopting React & Dynamic Component Architecture",
    description:
      "Transitioned from static websites to dynamic React web applications. Mastered component lifecycles, state management, custom hooks, and integrating external REST APIs with smooth user feedback.",
    highlights: ["React SPA architecture", "State management & custom hooks", "REST API integration & async state", "Client-side routing & dynamic views"],
    badge: "Interactivity",
  },
  {
    year: "Phase 04",
    title: "Going Further",
    subtitle: "Next.js, TypeScript & Advanced Motion Engineering",
    description:
      "Current focus on building full-scale digital products with Next.js App Router, strict TypeScript safety, Framer Motion animations, and performance optimization for production deployment.",
    highlights: ["Next.js App Router & SSR", "Strict end-to-end TypeScript", "Framer Motion gesture & scroll physics", "Lighthouse 95+ performance optimization"],
    badge: "Present & Future",
  },
];

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    subtitle: "Understand the Idea, Audience & Objectives",
    description:
      "Before writing a single line of code, I analyze the core purpose of the project. I outline target user needs, key functional requirements, and establish clear technical scope.",
    deliverables: ["Requirement Breakdown", "Technical Stack Selection", "Information Architecture", "Content Structure Plan"],
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Define Structure, Visual Direction & User Experience",
    description:
      "I map out component hierarchies, define color systems, establish typography scales, and plan smooth interaction patterns so the end experience feels cohesive and intuitive.",
    deliverables: ["Visual Token System", "Layout Wireframes", "Component Hierarchy Map", "Motion & Transition Specs"],
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Develop the Interface with Clean, Maintainable Code",
    description:
      "Engineering the application using TypeScript and Next.js. I prioritize reusable component design, strict typing, responsive Tailwind layout systems, and clean file separation.",
    deliverables: ["Production TypeScript Code", "Responsive Tailwind Layouts", "State Architecture", "Accessible Form & Button Controls"],
  },
  {
    number: "04",
    title: "Refine",
    subtitle: "Test, Optimize, Polish Animations & Prepare Deployment",
    description:
      "The difference between good and exceptional lies in the polish. I audit Lighthouse performance scores, check cross-browser responsiveness, tweak spring animations, and deploy cleanly.",
    deliverables: ["Lighthouse Performance Audit", "Cross-Device Testing", "60fps Animation Polish", "Vercel Production Deployment"],
  },
];
