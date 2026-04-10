// ─── Navigation ───
export const navLinks = [
  { label: "Work", href: "/work", active: true },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/about#contact" },
  { label: "Resume", href: "#" },
] as const;

// ─── Hero ───
export const heroContent = {
  tagline: "UX Design & Strategy",
  headline: "Crafting intuitive digital experiences that",
  headlineAccent: "bridge the gap",
  headlineSuffix: "between users and technology.",
  description:
    "Currently leading design systems at a global fintech startup, focusing on human-centric complexity.",
};

// ─── Featured Project ───
export const featuredProject = {
  title: "Nexus: Simplifying Wealth Management",
  description:
    "A complete overhaul of the investment journey, reducing user friction by 40% through intuitive data visualization and predictive AI insights.",
  categories: ["Mobile App", "Fintech"],
  image:
    "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200&h=800&fit=crop",
  imageAlt:
    "Minimalist mobile app interface displayed on a sleek smartphone",
  slug: "nexus-wealth-management",
  cta: "View Case Study",
};

// ─── Bento Grid ───
export const designPhilosophy = {
  title: "Design Philosophy",
  quote:
    '"Good design is invisible. It anticipates the user\'s next move before they\'ve even thought to make it."',
  keywords: ["Empathy", "Clarity", "Precision"],
};

export const experienceStat = {
  value: "8+",
  label: "Years of Experience",
  icon: "deployed_code",
};

export const toolboxItems = [
  "Figma Prototyping",
  "Motion Design",
  "User Research",
];

export const trustedByLogos = ["TECHNO", "SOLVE", "URBAN_", "Global."];

// ─── Case Studies ───
export interface CaseStudy {
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly imageAlt: string;
  readonly categories: readonly string[];
  readonly slug: string;
  readonly index?: string;
  readonly size: "large" | "medium" | "small";
}

export const caseStudies: readonly CaseStudy[] = [
  {
    title: "Lumina Financial",
    description:
      "Reimagining the wealth management experience for a new generation of conscious investors.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    imageAlt: "Lumina Financial mobile app interface",
    categories: ["Mobile App"],
    slug: "lumina-financial",
    index: "01 / Case Study",
    size: "large",
  },
  {
    title: "Nexus CRM",
    description:
      "A centralized intelligence hub for global enterprise",
    image:
      "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&h=800&fit=crop",
    imageAlt: "Nexus CRM web platform dashboard",
    categories: ["Web Platform"],
    slug: "nexus-crm",
    size: "medium",
  },
  {
    title: "The Core System",
    description:
      "Standardizing visual language across 14 product verticals for a unified brand voice.",
    image:
      "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&h=800&fit=crop",
    imageAlt: "Design system research documents on table",
    categories: ["Research"],
    slug: "core-system",
    size: "small",
  },
  {
    title: "Aura Health",
    description:
      "Designing for mindfulness: a biometric-driven wellness companion for everyday focus.",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&h=800&fit=crop",
    imageAlt: "Aura Health wearable device on wrist",
    categories: ["Mobile App"],
    slug: "aura-health",
    size: "small",
  },
] as const;

export const featuredCaseStudy = {
  label: "Featured Project",
  title: "Vanguard E-Commerce Rebrand",
  description:
    "A comprehensive digital transformation for a heritage fashion label, blending archival aesthetics with cutting-edge headless commerce technology.",
  image:
    "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=800&fit=crop",
  imageAlt: "Fashion professional portrait for Vanguard rebrand",
  slug: "vanguard-rebrand",
  cta: "View Case Study",
};

// ─── About Page ───
export const aboutHero = {
  headline: "The Story Behind The Craft.",
  subtitle: "Designer & Researcher",
  portrait:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop&q=80",
  portraitAlt: "Designer portrait in black and white",
};

export const aboutQuote =
  '"I believe that the most powerful digital experiences aren\'t just seen—they are felt. My work sits at the intersection of human psychology and technical precision."';

export const aboutSections = [
  {
    title: "The Approach",
    body: "Design is often mistaken for decoration. To me, it's a rigorous process of interrogation. I peel back the layers of business requirements to find the core human need that hasn't been met yet.",
  },
  {
    title: "The Background",
    body: "With a decade of experience across fintech, healthcare, and luxury e-commerce, I've learned that complexity is the enemy of delight. I strive to create \"silent\" interfaces that guide users with effortless clarity.",
  },
] as const;

export const capabilities = [
  "UX Research",
  "Visual Design",
  "Motion Prototyping",
  "Design Systems",
  "User Testing",
  "Brand Identity",
  "Strategy",
] as const;

// ─── Contact ───
export const contactContent = {
  headline: "Get in Touch.",
  description:
    "Available for select collaborations and advisory roles. Let's build something meaningful.",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Read.cv", href: "#" },
  ],
  email: "hello@curatedgallery.design",
};

// ─── Project Detail ───
export const projectDetail = {
  label: "UX Case Study",
  title: "Reimagining the Digital Archive.",
  description:
    "A deep-dive into modular information architecture, for curated museum collections.",
  metadata: [
    { label: "Role", value: "Lead Product Designer" },
    { label: "Timeline", value: "12 Weeks (Q3 2023)" },
    { label: "Tools", value: "Figma, Framer, Principle" },
    { label: "Focus", value: "DYNAMIC  SPATIAL" },
  ],
  challenge: {
    title: "The Challenge",
    paragraphs: [
      "Museum archives are often impenetrable. The sheer volume of data overwhelms the casual visitor, while the lack of visual hierarchy makes discovery difficult. How do we create a digital experience that feels as curated as a physical gallery?",
      "Our goal was to bridge the gap between technical metadata and visual storytelling, ensuring that every artifact has the space to tell its unique story.",
    ],
    image:
      "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=1200&h=800&fit=crop",
    imageAlt: "Museum gallery hallway with dramatic lighting",
  },
  process: [
    {
      step: "01. Research & Discovery",
      description:
        "We interviewed 15 curators and 30 frequent museum-goers. The findings were clear: people don't want to search for art, they want to stumble upon connections between unexpected eras and genres.",
      quotes: ['"Discovery over search."', '"Visual hierarchy."'],
      substeps: ["CONTEXTUAL INQUIRY", "COMPETITIVE AUDIT"],
    },
    {
      step: "02. Wireframing Content Clusters",
      images: [
        "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1581291518633-83b4eef1d2fa?w=600&h=400&fit=crop",
        "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&h=400&fit=crop",
      ],
    },
  ],
  solution: {
    title: "The Solution.",
    description:
      "A dynamic grid system that adapts to the content density, creating a rhythmic visual experience.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1400&h=900&fit=crop",
    imageAlt: "Laptop showing the digital archive interface",
  },
  designDetails: [
    {
      title: "Tactile Navigation",
      description:
        "A curated navigation that mirrors turning the pages of an art book, providing haptic feedback on every interaction.",
      image:
        "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=800&h=600&fit=crop",
    },
    {
      title: "Semantic Scale",
      description:
        "A responsive typography system that prioritizes legibility across all content sizes without losing its editorial voice.",
      image:
        "https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&h=600&fit=crop",
    },
  ],
  outcomes: [
    { value: "+140%", label: "Avg. Session Duration" },
    { value: "2.4M", label: "Monthly Active Engagements" },
    { value: "-45%", label: "Bounce Rate on Mobile" },
    { value: "12k+", label: "Shared Collections" },
  ],
  nextProject: {
    label: "Next Project",
    title: "Fluid Motion Systems",
    slug: "fluid-motion-systems",
  },
};

// ─── Footer ───
export const footerContent = {
  brand: "The Editorial Portfolio",
  copyright: "© 2024 The Curated Gallery",
  socials: [
    { label: "LinkedIn", href: "#" },
    { label: "Dribbble", href: "#" },
    { label: "Read.cv", href: "#" },
  ],
};
