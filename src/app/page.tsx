"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Moon, Sun, Laptop, ShieldCheck, Zap, Layers, Sparkles } from "lucide-react";

// Project Details Data
const projects = [
  {
    id: "01",
    name: "Stadproffsen Lund",
    slug: "stadproffsen-lund",
    description: "Premium home and office cleaning service website designed with warm earthy tones, an interactive before-after slider, and direct RUT discount calculation.",
    longDescription: "Stadproffsen Lund is built as a high-end web experience for local cleaning services. Moving away from standard clinical blues, we crafted a terracotta-and-sand palette to feel warm, organic, and trustworthy. We implemented custom interactive before/after sliders, responsive pricing widgets, and a streamlined multi-step quote form to increase conversion rates.",
    tags: ["Premium UI", "Next.js", "Interaction"],
    url: "https://stadproffsen-lund.vercel.app",
    cover: "/assets/stadproffsen-cover.png",
    logo: "/assets/stadproffsen-logo.jpg",
    colors: ["#B85C38", "#FCFBF9", "#252525"],
    tech: ["Next.js 16", "Tailwind CSS v4", "Lucide React", "Framer Motion"],
    features: ["Interactive Before/After Slider", "Instant RUT-avdrag Calculator", "Multi-step Booking System", "Fully Responsive Layout"]
  },
  {
    id: "02",
    name: "Skanested AB",
    slug: "skanested-ab",
    description: "Sleek, modern design for a leading cleaning brand in Skåne. Features a dark-mode-leaning aesthetic, high contrast layout, and structured services list.",
    longDescription: "Skanested AB features a modern, high-contrast, editorial layout. Built on a theme of precision, we utilized deep steel blues, dark carbon blocks, and pure whites to highlight the brand's attention to detail. Services are structured inside intuitive grids with micro-interactions, leading to a high-converting quote intake flow.",
    tags: ["Minimalism", "UI/UX", "Tailwind v4"],
    url: "https://skanested-ab.vercel.app",
    cover: "/assets/skanested-cover.png",
    logo: "/assets/skanested-logo.webp",
    colors: ["#111827", "#3B82F6", "#F9FAFB"],
    tech: ["Next.js 16", "Tailwind CSS v4", "Framer Motion", "Typescript"],
    features: ["Bento-Grid Services Layout", "Context-based Booking Form", "Custom Vector Animations", "SEO Optimized Pages"]
  },
  {
    id: "03",
    name: "HomeMaid Lund",
    slug: "homemaid-lund",
    description: "Cozy and user-friendly web interface showcasing home, window, and office cleaning services. Structured for fast conversion and easy navigation.",
    longDescription: "HomeMaid Lund was designed to convey comfort and absolute reliability. By using soft rounded cards, warm inviting colors, and a clean hierarchical typography system, we made the service offerings feel accessible to families. The site includes step-by-step cleaning routines, detailed service checklists, and a direct contact integration.",
    tags: ["Cozy UI", "Corporate", "Conversion"],
    url: "https://homemaid-lund.vercel.app",
    cover: "/assets/homemaid-cover.png",
    logo: "/assets/homemaid-logo.jpg",
    colors: ["#1E3A8A", "#10B981", "#FCFBF9"],
    tech: ["Next.js 16", "Tailwind CSS v4", "Lucide Icons", "PostCSS"],
    features: ["Family-centric Warm Palette", "Detailed Service Checklists", "Dynamic Call-To-Action Banners", "Instant Contact Integration"]
  },
  {
    id: "04",
    name: "FiveStar Städ",
    slug: "fivestar-stad",
    description: "Executive premium cleaning website presenting domestic and commercial services with a luxury hotel-level aesthetic.",
    longDescription: "FiveStar Städ brings a luxury, high-end hotel service feel to home and commercial cleaning. The design utilizes premium gold accents against dark carbon background blocks to convey exclusivity and elite service standards. The portfolio includes high-end before/after showcases, customer trust badges, and custom quote requests.",
    tags: ["Executive", "Luxury", "React 19"],
    url: "https://fivestar-stad.vercel.app",
    cover: "/assets/fivestar-cover.png",
    logo: "/assets/fivestar-logo.png",
    colors: ["#D4AF37", "#1A1A1A", "#FFFFFF"],
    tech: ["Next.js 16", "Tailwind CSS v4", "React 19", "Framer Motion"],
    features: ["Luxury Dark-and-Gold Theme", "Interactive Before/After Carousel", "Corporate Services Presentation", "Fast-loading Static Pages"]
  },
  {
    id: "05",
    name: "Lunds Stadsservice",
    slug: "lunds-stadsservice",
    description: "A professional and structured service platform built for Lund's residential and commercial cleaning needs.",
    longDescription: "Lunds Stadsservice is a clean, structured cleaning business page designed for maximum speed and conversion. It utilizes rich forest-greens, thin divider lines, and precise layout boxes. Focused heavily on local SEO parameters, it loads instantly and offers frictionless paths for requesting services.",
    tags: ["Tech Clean", "SEO-ready", "Responsive"],
    url: "https://lunds-stadsservice.vercel.app",
    cover: "/assets/lunds-cover.png",
    logo: "/assets/lunds-logo.png",
    colors: ["#064E3B", "#F3F4F6", "#111827"],
    tech: ["Next.js 16", "Tailwind CSS v4", "TypeScript", "Lucide Icons"],
    features: ["Green Eco-Branding Theme", "Frictionless Offer Request", "Built-in Integrity Policy Page", "Optimized Web Vitals"]
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // Initialize theme
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
    if (newMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#252525] dark:bg-[#121212] dark:text-[#FCFBF9] transition-colors duration-300">
      
      {/* Header / Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center minimal-border-b dark:border-white/10">
        <div className="flex items-center gap-2">
          <span className="font-display font-black text-sm tracking-[0.2em] uppercase">OPERO</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#252525] dark:bg-[#FCFBF9]" />
          <span className="text-[10px] tracking-widest text-[#252525]/60 dark:text-[#FCFBF9]/60 font-semibold uppercase">5 WORKS</span>
        </div>
        
        <nav className="flex items-center gap-4">
          <a href="#work" className="capsule-link">Work</a>
          <a href="#info" className="capsule-link">Info</a>
          <button 
            onClick={toggleDarkMode}
            className="w-8 h-8 rounded-full border border-[#252525] dark:border-[#FCFBF9] flex items-center justify-center hover:bg-[#252525] hover:text-[#FCFBF9] dark:hover:bg-[#FCFBF9] dark:hover:text-[#121212] transition-colors cursor-pointer"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="info" className="max-w-3xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-4"
        >
          <h1 className="font-display text-6xl sm:text-8xl lg:text-9xl font-extrabold tracking-tighter uppercase leading-[0.8] select-none">
            OPERO
          </h1>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#252525]/60 dark:text-[#FCFBF9]/60">
            MINIMALIST DESIGN & AEO/SEO OPTIMIZED DIRECTORY
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col items-center space-y-6"
        >
          <span className="font-display font-extrabold text-2xl rotate-90 sm:rotate-0">↘</span>
          <div className="max-w-2xl space-y-4">
            <p className="text-base sm:text-lg md:text-xl text-[#252525]/75 dark:text-[#FCFBF9]/75 font-medium leading-relaxed">
              A showcase of Opero's latest custom designed websites. Engineered for ultimate speed, design clarity, and AEO/SEO discoverability.
            </p>
            <p className="text-xs sm:text-sm text-[#252525]/60 dark:text-[#FCFBF9]/60 max-w-lg mx-auto leading-relaxed border-t border-[#252525]/10 dark:border-white/10 pt-4">
              <strong>What is AEO?</strong> Answer Engine Optimization ensures your content is structured for AI systems (like Gemini, ChatGPT, and Perplexity) to synthesize, recommend, and quote your business directly.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Grid list of projects */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-12 minimal-border-t dark:border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col justify-between minimal-border dark:border-white/10 rounded-2xl overflow-hidden p-6 hover:shadow-xl dark:hover:shadow-white/5 transition-all duration-300 bg-[#FCFBF9] dark:bg-[#1E1E1E]"
            >
              <div>
                {/* Project Image Frame */}
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-gray-100 dark:bg-zinc-800 border border-[#252525]/5 dark:border-white/5">
                  <Image
                    src={project.cover}
                    alt={project.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Absolute Logo overlay */}
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 p-1.5 rounded-lg border border-[#252525]/10 dark:border-white/10 shadow-sm flex items-center justify-center">
                    <div className="relative w-8 h-8 rounded overflow-hidden">
                      <Image
                        src={project.logo}
                        alt={`${project.name} logo`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="mt-6 space-y-4">
                  <div className="flex justify-between items-baseline">
                    <span className="font-display font-black text-sm tracking-widest text-[#252525]/40 dark:text-[#FCFBF9]/40">{project.id}</span>
                    <div className="flex gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-0.5 border border-[#252525]/20 dark:border-white/20 rounded-full font-display text-[9px] font-bold uppercase tracking-wider">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight group-hover:text-accent-light dark:group-hover:text-white transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-sm text-[#252525]/70 dark:text-[#FCFBF9]/70 leading-relaxed font-medium line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 minimal-border-t dark:border-white/10 flex justify-between items-center">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="capsule-link flex items-center gap-1.5 cursor-pointer"
                >
                  View Details
                </button>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[#252525]/10 dark:border-white/10 flex items-center justify-center hover:bg-[#252525] hover:text-[#FCFBF9] dark:hover:bg-[#FCFBF9] dark:hover:text-[#121212] transition-all cursor-pointer"
                  title="Open Live Website"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-20 mt-20 minimal-border-t dark:border-white/10 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="font-display font-black text-sm tracking-[0.2em] uppercase">OPERO</span>
            <span className="w-1 h-1 rounded-full bg-[#252525] dark:bg-[#FCFBF9]" />
            <span className="text-[10px] tracking-widest text-[#252525]/60 dark:text-[#FCFBF9]/60 font-semibold uppercase">DESIGN DIRECTORY</span>
          </div>
          <p className="mt-3 text-xs text-[#252525]/50 dark:text-[#FCFBF9]/50 font-medium">
            © 2026 Opero Directory. Clean web design & development showcases.
          </p>
        </div>
        
        <div className="flex justify-center md:justify-end gap-6 text-xs font-bold uppercase tracking-wider">
          <a href="#work" className="hover:underline">Projects</a>
          <span className="text-gray-300 dark:text-zinc-800">|</span>
          <a href="#info" className="hover:underline">About</a>
          <span className="text-gray-300 dark:text-zinc-800">|</span>
          <a href="mailto:hello@example.com" className="hover:underline">Contact</a>
        </div>
      </footer>

      {/* Project Detail View Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black z-40 cursor-pointer"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full sm:max-w-xl md:max-w-2xl bg-[#FCFBF9] dark:bg-[#1A1A1A] z-50 shadow-2xl overflow-y-auto flex flex-col border-l border-[#252525]/10 dark:border-white/10"
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-[#252525]/10 dark:border-white/10 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded overflow-hidden border border-[#252525]/10 dark:border-white/10">
                    <Image
                      src={selectedProject.logo}
                      alt={selectedProject.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-bold uppercase tracking-tight">
                      {selectedProject.name}
                    </h2>
                    <span className="text-[10px] tracking-widest text-[#252525]/50 dark:text-[#FCFBF9]/50 font-bold uppercase">
                      PROJECT {selectedProject.id}
                    </span>
                  </div>
                </div>
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 rounded-full border border-[#252525]/10 dark:border-white/10 flex items-center justify-center hover:bg-[#252525] hover:text-[#FCFBF9] dark:hover:bg-[#FCFBF9] dark:hover:text-[#121212] transition-colors cursor-pointer"
                  aria-label="Close details"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="flex-grow p-6 md:p-8 space-y-8">
                {/* Large Cover */}
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-[#252525]/10 dark:border-white/10 bg-gray-100 dark:bg-zinc-800">
                  <Image
                    src={selectedProject.cover}
                    alt={selectedProject.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Primary Launch Action */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#F5F3EF] dark:bg-[#252525] border border-[#252525]/5 dark:border-white/5">
                  <div className="space-y-1">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#252525]/60 dark:text-[#FCFBF9]/60">Live URL</h4>
                    <p className="text-sm font-semibold tracking-tight break-all">{selectedProject.url.replace("https://", "")}</p>
                  </div>
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="capsule-link py-3 px-6 bg-[#252525] text-[#FCFBF9] dark:bg-[#FCFBF9] dark:text-[#121212] flex items-center justify-center gap-2 hover:bg-[#444] dark:hover:bg-zinc-200"
                  >
                    <span>Launch Live Site</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Project Description */}
                <div className="space-y-3">
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#252525]/60 dark:text-[#FCFBF9]/60">Design Direction</h3>
                  <p className="text-base text-[#252525]/80 dark:text-[#FCFBF9]/80 font-medium leading-relaxed">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Metadata Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#252525]/10 dark:border-white/10">
                  {/* Left Column: Tech Stack & Features */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#252525]/60 dark:text-[#FCFBF9]/60 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5" />
                        <span>Core Tech Stack</span>
                      </h4>
                      <ul className="space-y-1 text-sm font-medium">
                        {selectedProject.tech.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#252525] dark:bg-[#FCFBF9]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#252525]/60 dark:text-[#FCFBF9]/60 flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Special Features</span>
                      </h4>
                      <ul className="space-y-1 text-sm font-medium">
                        {selectedProject.features.map((item) => (
                          <li key={item} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#252525] dark:bg-[#FCFBF9]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Right Column: Palette & Quality Assurance */}
                  <div className="space-y-6">
                    <div className="space-y-3">
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#252525]/60 dark:text-[#FCFBF9]/60 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5" />
                        <span>Color Identity</span>
                      </h4>
                      <div className="flex gap-2">
                        {selectedProject.colors.map((color) => (
                          <div key={color} className="flex flex-col items-center gap-1">
                            <div
                              className="w-12 h-12 rounded-xl border border-[#252525]/10 dark:border-white/10 shadow-sm"
                              style={{ backgroundColor: color }}
                              title={color}
                            />
                            <span className="text-[10px] font-mono tracking-tight text-[#252525]/50 dark:text-[#FCFBF9]/50 uppercase">{color}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#252525]/60 dark:text-[#FCFBF9]/60 flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Quality Metrics</span>
                      </h4>
                      <div className="space-y-2 text-xs font-semibold text-[#252525]/70 dark:text-[#FCFBF9]/70">
                        <div className="flex justify-between p-2.5 rounded-lg border border-[#252525]/5 dark:border-white/5">
                          <span>Performance Score</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">100/100</span>
                        </div>
                        <div className="flex justify-between p-2.5 rounded-lg border border-[#252525]/5 dark:border-white/5">
                          <span>Accessibility (a11y)</span>
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">100/100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
