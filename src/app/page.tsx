"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Moon, Sun, Laptop, ShieldCheck, Zap, Layers, Sparkles, ChevronDown } from "lucide-react";

// Multi-language UI translation dictionary
const uiTranslations = {
  sv: {
    works: "OPERO",
    worksCount: "5 PROJEKT",
    workLink: "Verk",
    faqLink: "FAQ",
    infoLink: "Om",
    tagline: "MINIMALISTISK DESIGN & AEO/SEO-OPTIMERAT REGISTER",
    desc: "En showcase av Operos senaste specialdesignade hemsidor. Konstruerade för maximal hastighet, designskärpa och AEO/SEO-synlighet.",
    aeoWhat: "Vad är AEO?",
    aeoDesc: "Svarsmotoroptimering (Answer Engine Optimization) ser till att ditt innehåll är perfekt strukturerat så att AI-system (som Gemini, ChatGPT och Perplexity) enkelt kan läsa, sammanfatta och rekommendera din verksamhet i direkta AI-svar.",
    viewDetails: "Visa detaljer",
    launchSite: "Besök hemsidan",
    designDirection: "Designinriktning",
    coreTechStack: "Teknisk plattform",
    specialFeatures: "Specialfunktioner",
    colorIdentity: "Grafisk färgprofil",
    qualityMetrics: "Kvalitetsmått",
    performanceScore: "Prestandabetyg",
    accessibility: "Tillgänglighet (a11y)",
    footerDescription: "Ren webbdesign och AEO/SEO-synliga hemsidor för moderna företag.",
    footerTitle: "OPERO REGISTER",
    faqTitle: "Vanliga Frågor (FAQ)",
    faqSubtitle: "Lär dig hur modern webbdesign och AEO hjälper din verksamhet att synas.",
    whyWebsiteTitle: "Varför en ny hemsida?",
    whyWebsiteDesc: "Snabba laddningstider och ren källkod är helt avgörande för att moderna AI-sökmotorer ska indexera och rekommendera din hemsida.",
    langLabel: "Språk"
  },
  en: {
    works: "OPERO",
    worksCount: "5 PROJECTS",
    workLink: "Work",
    faqLink: "FAQ",
    infoLink: "Info",
    tagline: "MINIMALIST DESIGN & AEO/SEO OPTIMIZED DIRECTORY",
    desc: "A showcase of Opero's latest custom designed websites. Engineered for ultimate speed, design clarity, and AEO/SEO discoverability.",
    aeoWhat: "What is AEO?",
    aeoDesc: "Answer Engine Optimization ensures your content is structured for AI systems (like Gemini, ChatGPT, and Perplexity) to synthesize, recommend, and quote your business directly.",
    viewDetails: "View Details",
    launchSite: "Launch Live Site",
    designDirection: "Design Direction",
    coreTechStack: "Core Tech Stack",
    specialFeatures: "Special Features",
    colorIdentity: "Color Identity",
    qualityMetrics: "Quality Metrics",
    performanceScore: "Performance Score",
    accessibility: "Accessibility (a11y)",
    footerDescription: "Clean web design and AEO/SEO discoverable websites for modern businesses.",
    footerTitle: "OPERO DIRECTORY",
    faqTitle: "Frequently Asked Questions",
    faqSubtitle: "Learn how modern web design and AEO help your business grow.",
    whyWebsiteTitle: "Why a new website?",
    whyWebsiteDesc: "Lightning-fast loading speeds and clean markup are critical for modern AI answer engines to index and recommend your page.",
    langLabel: "Language"
  }
};

// 5 FAQ Questions explaining AEO and new website importance in SV and EN
const faqs = {
  sv: [
    {
      id: "faq-1",
      q: "Vad är AEO (Answer Engine Optimization) och varför är det viktigt?",
      a: "AEO (svarsmotoroptimering) handlar om att optimera din hemsidas struktur och innehåll så att AI-tjänster (som Gemini, ChatGPT och Perplexity) enkelt kan läsa av den. Istället för att bara ranka en länk på Google (som traditionell SEO gör), ser AEO till att AI-modellerna sammanfattar och rekommenderar ditt företag direkt i sina chattsvar."
    },
    {
      id: "faq-2",
      q: "Varför är det viktigt att ha en ny och modern hemsida?",
      a: "Moderna hemsidor byggs med semantisk HTML5, ren CSS och blixtsnabba tekniker som Next.js. AI-sökmotorer och Google prioriterar prestanda och välstrukturerad kod. En gammal, trög hemsida med rörig kod blir svår för AI-sökrobotar att tolka, vilket leder till förlorad synlighet."
    },
    {
      id: "faq-3",
      q: "Hur skiljer sig AEO från vanlig SEO?",
      a: "Klassisk SEO (Search Engine Optimization) optimerar för traditionella sökresultat med blå länkar. AEO (Answer Engine Optimization) optimerar för direkta svar och rekommendationer genererade av stora språkmodeller (LLM). Hemsidan behöver båda för att nå alla typer av sökningar."
    },
    {
      id: "faq-4",
      q: "Behöver jag både en ny hemsida och AEO för min städfirma?",
      a: "Ja. Ditt städföretag vill synas när kunder söker på traditionella sätt ('flyttstädning Lund' på Google) samt när de frågar en AI ('Hitta den bäst rekommenderade städfirman i Malmö med RUT-avdrag'). En ny prestandaoptimerad hemsida är grunden som gör AEO-funktionen möjlig."
    },
    {
      id: "faq-5",
      q: "Hur gör Opero mina hemsidor AEO- och SEO-klara?",
      a: "Vi implementerar semantiskt källkodsschema (JSON-LD), blixtsnabb prestanda (100/100 på Lighthouse-tester) och bygger med Next.js. Detta gör sidan helt transparent för AI-robotar att läsa in, analysera och rekommendera dina tjänster på ett säkert sätt."
    }
  ],
  en: [
    {
      id: "faq-1",
      q: "What is AEO (Answer Engine Optimization) and why does it matter?",
      a: "AEO is the process of optimizing your website's content and structure so conversational AI tools (like Gemini, ChatGPT, and Perplexity) can synthesize and quote your business. Traditional SEO ranks links on standard search engines; AEO directly gets your brand recommended inside AI chat answers."
    },
    {
      id: "faq-2",
      q: "Why is it critical to have a new and modern website?",
      a: "Modern websites are built with semantic HTML5 markup, clean CSS, and fast technologies like Next.js. Both Google and AI systems heavily prioritize loading speed and structured data. Old, slow, and messy websites are hard for AI agents to index, resulting in poor ranking."
    },
    {
      id: "faq-3",
      q: "How does AEO differ from traditional SEO?",
      a: "SEO optimizes for high-ranking links on search engines. AEO optimizes for direct summaries and mentions generated by Large Language Models (LLMs). An optimized website uses both strategies to capture all traffic sources."
    },
    {
      id: "faq-4",
      q: "Do I need both a new website and AEO for my cleaning business?",
      a: "Yes. Your cleaning business needs to be visible for classic searches ('home cleaning Lund' on Google) and AI prompts ('Recommend a highly-rated Malmö cleaning service with RUT-discount'). A modern, fast website is the absolute foundation required for AEO."
    },
    {
      id: "faq-5",
      q: "How does Opero make my websites AEO and SEO ready?",
      a: "We implement custom JSON-LD schema markup, optimize for perfect Lighthouse performance scores (100/100), and build with next-gen Next.js modules. This allows AI crawler agents to seamlessly synthesize and index your services."
    }
  ]
};

// Project Details Data with SV and EN translations
const projects = [
  {
    id: "01",
    slug: "stadproffsen-lund",
    url: "https://stadproffsen-lund.vercel.app",
    cover: "/assets/stadproffsen-cover.png",
    logo: "/assets/stadproffsen-logo.jpg",
    colors: ["#B85C38", "#FCFBF9", "#252525"],
    tech: ["Next.js 16", "Tailwind CSS v4", "Lucide React", "Framer Motion"],
    sv: {
      name: "Stadproffsen Lund",
      description: "Premiumhemsida för hem- och kontorsstädning. Designad med varma jordtoner, en interaktiv före/efter-slider och automatisk RUT-avdragsberäkning.",
      longDescription: "Stadproffsen Lund är byggd som en modern webbupplevelse för städtjänster. Vi valde en färgpalett av terracotta och sand för att skapa en varm, organisk och pålitlig känsla. Sidan har en specialbyggd interaktiv före/efter-slider, prissättningsmoduler och ett strömlinjeformat offertformulär för maximal konvertering.",
      tags: ["Premium UI", "Next.js", "Interaktion"],
      features: ["Interaktiv före/efter-slider", "Direkt RUT-avdragsberäkning", "Smidigt bokningsformulär", "Fullt mobilanpassad"]
    },
    en: {
      name: "Stadproffsen Lund",
      description: "Premium home and office cleaning service website designed with warm earthy tones, an interactive before-after slider, and direct RUT discount calculation.",
      longDescription: "Stadproffsen Lund is built as a high-end web experience for local cleaning services. Moving away from standard clinical blues, we crafted a terracotta-and-sand palette to feel warm, organic, and trustworthy. We implemented custom interactive before/after sliders, responsive pricing widgets, and a streamlined multi-step quote form to increase conversion rates.",
      tags: ["Premium UI", "Next.js", "Interaction"],
      features: ["Interactive Before/After Slider", "Instant RUT-avdrag Calculator", "Multi-step Booking System", "Fully Responsive Layout"]
    }
  },
  {
    id: "02",
    slug: "skanested-ab",
    url: "https://skanested-ab.vercel.app",
    cover: "/assets/skanested-cover.png",
    logo: "/assets/skanested-logo.webp",
    colors: ["#111827", "#3B82F6", "#F9FAFB"],
    tech: ["Next.js 16", "Tailwind CSS v4", "Framer Motion", "Typescript"],
    sv: {
      name: "Skanested AB",
      description: "Stilren och modern hemsida för ett av Skånes ledande städföretag. Karaktäriseras av en mörkare designestetik, hög kontrast och strukturerade tjänsteöversikter.",
      longDescription: "Skanested AB har en modern, högkontrastig och tidningsinspirerad layout. För att understryka företagets precision använde vi djup stålblå, mörka kolfiberblock och rena vita ytor. Tjänsterna presenteras i ett bento-rutnät med mikrointeraktioner, vilket leder besökaren till ett effektivt offertformulär.",
      tags: ["Minimalism", "UI/UX", "Tailwind v4"],
      features: ["Bento-Grid tjänsteöversikt", "Kontextbaserat offertformulär", "Skräddarsydda vektoranimationer", "SEO-optimerad struktur"]
    },
    en: {
      name: "Skanested AB",
      description: "Sleek, modern design for a leading cleaning brand in Skåne. Features a dark-mode-leaning aesthetic, high contrast layout, and structured services list.",
      longDescription: "Skanested AB features a modern, high-contrast, editorial layout. Built on a theme of precision, we utilized deep steel blues, dark carbon blocks, and pure whites to highlight the brand's attention to detail. Services are structured inside intuitive grids with micro-interactions, leading to a high-converting quote intake flow.",
      tags: ["Minimalism", "UI/UX", "Tailwind v4"],
      features: ["Bento-Grid Services Layout", "Context-based Booking Form", "Custom Vector Animations", "SEO Optimized Pages"]
    }
  },
  {
    id: "03",
    slug: "homemaid-lund",
    url: "https://homemaid-lund.vercel.app",
    cover: "/assets/homemaid-cover.png",
    logo: "/assets/homemaid-logo.jpg",
    colors: ["#1E3A8A", "#10B981", "#FCFBF9"],
    tech: ["Next.js 16", "Tailwind CSS v4", "Lucide Icons", "PostCSS"],
    sv: {
      name: "HomeMaid Lund",
      description: "Välkomnande och användarvänligt gränssnitt som presenterar hem-, fönster- och kontorsstädning. Optimerad för snabb konvertering och enkel navigering.",
      longDescription: "HomeMaid Lund designades för att förmedla trygghet och absolut pålitlighet. Genom mjuka rundade kort, hemtrevliga färger och ren typografi skapade vi en upplevelse som tilltalar barnfamiljer och privatpersoner. Sidan innehåller tydliga städrutiner, checklistor och smidig kontaktintegration.",
      tags: ["Mjuk UI", "Företag", "Konvertering"],
      features: ["Hemtrevlig färgpalett", "Tydliga städchecklistor", "Dynamiska call-to-action block", "Direktkontakt via telefon/epost"]
    },
    en: {
      name: "HomeMaid Lund",
      description: "Cozy and user-friendly web interface showcasing home, window, and office cleaning services. Structured for fast conversion and easy navigation.",
      longDescription: "HomeMaid Lund was designed to convey comfort and absolute reliability. By using soft rounded cards, warm inviting colors, and a clean hierarchical typography system, we made the service offerings feel accessible to families. The site includes step-by-step cleaning routines, detailed service checklists, and a direct contact integration.",
      tags: ["Cozy UI", "Corporate", "Conversion"],
      features: ["Family-centric Warm Palette", "Detailed Service Checklists", "Dynamic Call-To-Action Banners", "Instant Contact Integration"]
    }
  },
  {
    id: "04",
    slug: "fivestar-stad",
    url: "https://fivestar-stad.vercel.app",
    cover: "/assets/fivestar-cover.png",
    logo: "/assets/fivestar-logo.png",
    colors: ["#D4AF37", "#1A1A1A", "#FFFFFF"],
    tech: ["Next.js 16", "Tailwind CSS v4", "React 19", "Framer Motion"],
    sv: {
      name: "FiveStar Städ",
      description: "Exklusiv och lyxig hemsida för städtjänster med fokus på premiumsegmentet för både hem och företag.",
      longDescription: "FiveStar Städ förmedlar känslan av en femstjärnig hotellservice för exklusiva hem och kontor. Designen använder sofistikerade guldaccenter mot en djup kolfibersvart bakgrund för att kommunicera kvalitet och premiumstandard. Sidan har interaktiva före/efter-gallerier och direktbokning.",
      tags: ["Premium", "Lyx", "React 19"],
      features: ["Lyxigt mörkt guldtema", "Interaktivt före/efter-galleri", "Företagsinriktad presentation", "Blixtsnabb laddningtid"]
    },
    en: {
      name: "FiveStar Städ",
      description: "Executive premium cleaning website presenting domestic and commercial services with a luxury hotel-level aesthetic.",
      longDescription: "FiveStar Städ brings a luxury, high-end hotel service feel to home and commercial cleaning. The design utilizes premium gold accents against dark carbon background blocks to convey exclusivity and elite service standards. The portfolio includes high-end before/after showcases, customer trust badges, and custom quote requests.",
      tags: ["Executive", "Luxury", "React 19"],
      features: ["Luxury Dark-and-Gold Theme", "Interactive Before/After Carousel", "Corporate Services Presentation", "Fast-loading Static Pages"]
    }
  },
  {
    id: "05",
    slug: "lunds-stadsservice",
    url: "https://lunds-stadsservice.vercel.app",
    cover: "/assets/lunds-cover.png",
    logo: "/assets/lunds-logo.png",
    colors: ["#064E3B", "#F3F4F6", "#111827"],
    tech: ["Next.js 16", "Tailwind CSS v4", "TypeScript", "Lucide Icons"],
    sv: {
      name: "Lunds Stadsservice",
      description: "Professionell och strukturerad tjänsteplattform byggd för Lunds boende och lokala företag.",
      longDescription: "Lunds Stadsservice är en ren, funktionell och SEO-förberedd hemsida utformad för att ge maximal laddningshastighet och snabba offertförfrågningar. Hemsidan använder skogsgröna accenter, tunna skiljelinjer och rymliga informationsboxar.",
      tags: ["Struktur", "SEO-klar", "Responsiv"],
      features: ["Miljövänligt grönt tema", "Snabbt offertformulär", "Inbyggd integritetspolicy", "Maximerad webbprestanda"]
    },
    en: {
      name: "Lunds Stadsservice",
      description: "A professional and structured service platform built for Lund's residential and commercial cleaning needs.",
      longDescription: "Lunds Stadsservice is a clean, structured cleaning business page designed for maximum speed and conversion. It utilizes rich forest-greens, thin divider lines, and precise layout boxes. Focused heavily on local SEO parameters, it loads instantly and offers frictionless paths for requesting services.",
      tags: ["Tech Clean", "SEO-ready", "Responsive"],
      features: ["Green Eco-Branding Theme", "Frictionless Offer Request", "Built-in Integrity Policy Page", "Optimized Web Vitals"]
    }
  }
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [darkMode, setDarkMode] = useState(false);
  const [lang, setLang] = useState<"sv" | "en">("sv");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  // Active translation set
  const text = uiTranslations[lang];

  // Initialize theme and language
  useEffect(() => {
    const isDark = localStorage.getItem("theme") === "dark";
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    // Default language is Swedish, load if user saved preference
    const savedLang = localStorage.getItem("lang") as "sv" | "en";
    if (savedLang) {
      setLang(savedLang);
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

  const handleLanguageChange = (newLang: "sv" | "en") => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#FCFBF9] text-[#252525] dark:bg-[#121212] dark:text-[#FCFBF9] transition-colors duration-300">
      
      {/* Header / Navigation */}
      <header className="max-w-7xl mx-auto px-6 py-8 flex justify-between items-center minimal-border-b dark:border-white/10">
        <div className="flex items-center gap-3">
          <div className="relative w-5 h-5 rounded overflow-hidden dark:invert transition-all">
            <Image
              src="/assets/opero-logo.png"
              alt="OPERO logo"
              fill
              className="object-contain"
            />
          </div>
          <span className="font-display font-black text-sm tracking-[0.2em] uppercase">{text.works}</span>
          <span className="text-[10px] tracking-widest text-[#252525]/60 dark:text-[#FCFBF9]/60 font-semibold uppercase">/ {text.worksCount}</span>
        </div>
        
        <nav className="flex items-center gap-3 sm:gap-4">
          <a href="#work" className="capsule-link">{text.workLink}</a>
          <a href="#faq" className="capsule-link">{text.faqLink}</a>
          <a href="#info" className="capsule-link">{text.infoLink}</a>

          {/* Bilingual Language Selector */}
          <div className="flex border border-[#252525] dark:border-[#FCFBF9] rounded-full overflow-hidden text-[9px] font-bold tracking-wider uppercase font-display select-none">
            <button
              onClick={() => handleLanguageChange("sv")}
              className={`px-2 py-1.5 transition-colors cursor-pointer ${lang === "sv" ? "bg-[#252525] text-[#FCFBF9] dark:bg-[#FCFBF9] dark:text-[#121212]" : "hover:bg-[#252525]/5 dark:hover:bg-white/5"}`}
            >
              SV
            </button>
            <button
              onClick={() => handleLanguageChange("en")}
              className={`px-2 py-1.5 transition-colors cursor-pointer ${lang === "en" ? "bg-[#252525] text-[#FCFBF9] dark:bg-[#FCFBF9] dark:text-[#121212]" : "hover:bg-[#252525]/5 dark:hover:bg-white/5"}`}
            >
              EN
            </button>
          </div>

          <button 
            onClick={toggleDarkMode}
            className="w-8 h-8 rounded-full border border-[#252525] dark:border-[#FCFBF9] flex items-center justify-center hover:bg-[#252525] hover:text-[#FCFBF9] dark:hover:bg-[#FCFBF9] dark:hover:text-[#121212] transition-colors cursor-pointer shrink-0"
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
            {text.works}
          </h1>
          <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#252525]/60 dark:text-[#FCFBF9]/60">
            {text.tagline}
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
              {text.desc}
            </p>
            <p className="text-xs sm:text-sm text-[#252525]/60 dark:text-[#FCFBF9]/60 max-w-lg mx-auto leading-relaxed border-t border-[#252525]/10 dark:border-white/10 pt-4">
              <strong>{text.aeoWhat}</strong> {text.aeoDesc}
            </p>
          </div>
        </motion.div>
      </section>

      {/* Grid list of projects */}
      <section id="work" className="max-w-7xl mx-auto px-6 py-12 minimal-border-t dark:border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {projects.map((project, index) => {
            const content = project[lang];
            return (
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
                      alt={content.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Absolute Logo overlay */}
                    <div className="absolute top-4 left-4 bg-white/90 dark:bg-black/90 p-1.5 rounded-lg border border-[#252525]/10 dark:border-white/10 shadow-sm flex items-center justify-center">
                      <div className="relative w-8 h-8 rounded overflow-hidden">
                        <Image
                          src={project.logo}
                          alt={`${content.name} logo`}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="mt-6 space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="font-display font-black text-sm tracking-widest text-[#252525]/40 dark:text-[#FCFBF9]/40">{project.id}</span>
                      <div className="flex gap-2">
                        {content.tags.map((tag) => (
                          <span key={tag} className="px-2.5 py-0.5 border border-[#252525]/20 dark:border-white/20 rounded-full font-display text-[9px] font-bold uppercase tracking-wider">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl font-bold uppercase tracking-tight group-hover:text-accent-light dark:group-hover:text-white transition-colors">
                      {content.name}
                    </h3>

                    <p className="text-sm text-[#252525]/70 dark:text-[#FCFBF9]/70 leading-relaxed font-medium line-clamp-3">
                      {content.description}
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 pt-6 minimal-border-t dark:border-white/10 flex justify-between items-center">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="capsule-link flex items-center gap-1.5 cursor-pointer text-xs"
                  >
                    {text.viewDetails}
                  </button>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full border border-[#252525]/10 dark:border-white/10 flex items-center justify-center hover:bg-[#252525] hover:text-[#FCFBF9] dark:hover:bg-[#FCFBF9] dark:hover:text-[#121212] transition-all cursor-pointer"
                    title={text.launchSite}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Accordion FAQ Section */}
      <section id="faq" className="max-w-4xl mx-auto px-6 py-20 minimal-border-t dark:border-white/10 scroll-mt-12">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <span className="font-display font-black text-xs tracking-[0.2em] uppercase text-[#252525]/50 dark:text-[#FCFBF9]/50">FAQ</span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight uppercase leading-[0.9]">
            {text.faqTitle}
          </h2>
          <p className="text-sm text-[#252525]/70 dark:text-[#FCFBF9]/70 font-medium">
            {text.faqSubtitle}
          </p>
        </div>

        <div className="space-y-4 minimal-border dark:border-white/10 rounded-2xl p-6 bg-[#FCFBF9] dark:bg-[#1E1E1E]">
          {faqs[lang].map((item) => {
            const isOpened = openFaq === item.id;
            return (
              <div 
                key={item.id}
                className="border-b border-[#252525]/10 dark:border-white/10 last:border-b-0 pb-4 pt-4 first:pt-0"
              >
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="w-full flex justify-between items-center text-left py-2 font-display text-base sm:text-lg font-bold uppercase tracking-tight text-[#252525] dark:text-[#FCFBF9] hover:opacity-85 cursor-pointer"
                >
                  <span>{item.q}</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform duration-300 shrink-0 ml-4 ${isOpened ? "rotate-180" : ""}`} 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpened && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="pt-3 text-sm text-[#252525]/75 dark:text-[#FCFBF9]/75 leading-relaxed font-medium">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-20 mt-12 minimal-border-t dark:border-white/10 text-center md:text-left grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="relative w-4 h-4 rounded overflow-hidden dark:invert transition-all">
              <Image
                src="/assets/opero-logo.png"
                alt="OPERO logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-display font-black text-sm tracking-[0.2em] uppercase">{text.footerTitle}</span>
            <span className="w-1 h-1 rounded-full bg-[#252525] dark:bg-[#FCFBF9]" />
            <span className="text-[10px] tracking-widest text-[#252525]/60 dark:text-[#FCFBF9]/60 font-semibold uppercase">DIRECTORY</span>
          </div>
          <p className="mt-3 text-xs text-[#252525]/50 dark:text-[#FCFBF9]/50 font-medium">
            © 2026 Opero. {text.footerDescription}
          </p>
        </div>
        
        <div className="flex justify-center md:justify-end gap-6 text-xs font-bold uppercase tracking-wider">
          <a href="#work" className="hover:underline">{text.workLink}</a>
          <span className="text-gray-300 dark:text-zinc-800">|</span>
          <a href="#faq" className="hover:underline">{text.faqLink}</a>
          <span className="text-gray-300 dark:text-zinc-800">|</span>
          <a href="#info" className="hover:underline">{text.infoLink}</a>
          <span className="text-gray-300 dark:text-zinc-800">|</span>
          <a href="mailto:hello@example.com" className="hover:underline">Contact</a>
        </div>
      </footer>

      {/* Project Detail View Modal Drawer */}
      <AnimatePresence>
        {selectedProject && (() => {
          const content = selectedProject[lang];
          return (
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
                        alt={content.name}
                        fill
                        className="object-cover"
                        sizes="32px"
                      />
                    </div>
                    <div>
                      <h2 className="font-display text-xl font-bold uppercase tracking-tight">
                        {content.name}
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
                      alt={content.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 600px"
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
                      <span>{text.launchSite}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Project Description */}
                  <div className="space-y-3">
                    <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#252525]/60 dark:text-[#FCFBF9]/60">{text.designDirection}</h3>
                    <p className="text-base text-[#252525]/80 dark:text-[#FCFBF9]/80 font-medium leading-relaxed">
                      {content.longDescription}
                    </p>
                  </div>

                  {/* Metadata Columns */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-[#252525]/10 dark:border-white/10">
                    {/* Left Column: Tech Stack & Features */}
                    <div className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-display text-xs font-bold uppercase tracking-wider text-[#252525]/60 dark:text-[#FCFBF9]/60 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5" />
                          <span>{text.coreTechStack}</span>
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
                          <span>{text.specialFeatures}</span>
                        </h4>
                        <ul className="space-y-1 text-sm font-medium">
                          {content.features.map((item) => (
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
                          <span>{text.colorIdentity}</span>
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
                          <span>{text.qualityMetrics}</span>
                        </h4>
                        <div className="space-y-2 text-xs font-semibold text-[#252525]/70 dark:text-[#FCFBF9]/70">
                          <div className="flex justify-between p-2.5 rounded-lg border border-[#252525]/5 dark:border-white/5">
                            <span>{text.performanceScore}</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">100/100</span>
                          </div>
                          <div className="flex justify-between p-2.5 rounded-lg border border-[#252525]/5 dark:border-white/5">
                            <span>{text.accessibility}</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold">100/100</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </>
          );
        })()}
      </AnimatePresence>
    </div>
  );
}
