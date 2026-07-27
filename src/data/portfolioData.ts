// ─────────────────────────────────────────────────────────────
// Centralized portfolio data — single source of truth.
// All content derived from Shahroz Allauddin's CV (2026).
// ─────────────────────────────────────────────────────────────

export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: string;
  yearsExperience: number;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyDescription: string;
  period: string;
  location: string;
  current?: boolean;
  highlights: string[];
  stack: string[];
}

export type ProjectCategory = "AI & Agentic" | "SaaS Platform" | "Enterprise" | "Media";

export interface Project {
  id: string;
  name: string;
  category: ProjectCategory;
  description: string;
  highlights: string[];
  stack: string[];
  featured?: boolean;
}

export interface TechCategory {
  id: string;
  label: string;
  icon: string; // lucide icon name (mapped in component)
  skills: string[];
}

export const profile: Profile = {
  name: "Shahroz Allauddin",
  title: "Expert Full Stack & Agentic AI Developer",
  tagline: "Senior Development Manager bridging LLM orchestration with production-grade full-stack architecture.",
  location: "Karachi, Pakistan",
  email: "smshahroz.allauddin@gmail.com",
  phone: "+92-323-3361729",
  linkedin: "https://linkedin.com/in/shahroz-allauddin",
  github: "https://github.com/Shahroz",
  summary:
    "Results-driven Senior Development Manager and Agentic AI Engineer with 11+ years of experience architecting and shipping full-stack web applications and cloud infrastructure at scale — including 3 years building AI-powered products and 2 years developing agentic, multi-agent SaaS systems. Proven track record leading cross-functional engineering teams, delivering 30+ projects from scratch, and integrating cutting-edge LLMs (Gemini, Claude, ChatGPT) into production-grade systems. Deep expertise spanning Rust backends, React/Angular frontends, AWS/GCP infrastructure, and real-time workflow automation.",
  yearsExperience: 11,
};

export const metrics: Metric[] = [
  { value: "11+", label: "Years of Experience" },
  { value: "3", label: "Years in AI Development" },
  { value: "2", label: "Years in Agentic AI & Multi-Agent SaaS" },
  { value: "30+", label: "Apps Shipped from Scratch" },
  { value: "250+", label: "Third-Party Integrations" },
  { value: "40%", label: "Load-Time Reduction (SSR)" },
  { value: "30%", label: "Team Efficiency Gain" },
  { value: "20+", label: "Concurrent Features Delivered" },
];

export const achievements: string[] = [
  "Built and shipped production AI tools using Gemini, Claude & ChatGPT integrated into live SaaS products",
  "Architected full-stack applications in Rust + React — a modern, high-performance production stack",
  "Migrated production DB from MySQL v5 to AWS Aurora with zero data loss",
  "Rated Excellent in final performance review — highest rating across all evaluation periods",
  "8 years working remotely with international teams across the USA, UK, and UAE",
];

export const experiences: Experience[] = [
  {
    id: "gridizen",
    role: "Team Lead & Agentic AI Developer",
    company: "Gridizen",
    companyDescription:
      "UK PropTech SaaS for residential property management — plus outsourced Agentic AI development for a US-based SaaS client",
    period: "Aug 2023 – Present",
    location: "UK · Remote from Pakistan",
    current: true,
    highlights: [
      "Architected a node-based visual AI workflow builder (React Flow + Ant Design) enabling non-technical users to build AI automations without code — including dynamic component rendering and a custom React JSON Schema Form engine (US client engagement, Sep 2024 – Present)",
      "Owned full-stack delivery of an ICP-driven lead search engine — workflow engine, search results, and subscription management — while mentoring the frontend team through end-to-end delivery",
      "Built an AI-powered website builder (v1 & v2) with inline editing, workflow API integration, Rust backend, Docker builds, and Playwright E2E testing",
      "Shipped AI tools using Gemini, Claude, and ChatGPT tightly integrated into live SaaS workflows — reducing manual effort for sales and marketing teams",
      "Integrated 250+ third-party services (messaging, cloud storage, CRM, design, and industry data providers) into the client's AI platform",
      "Migrated full production infrastructure to AWS Control Tower (Staging, QA, LIVE) with a Jenkins-based DevOps pipeline and zero downtime",
      "Upgraded MySQL v5 → AWS Aurora, migrating all data including Metabase analytics — significantly reduced query latency and infrastructure costs",
      "Led end-to-end delivery of 20+ concurrent portal features: advanced permissions, facility management, ESG reports, contract renewal, and a Stripe pricing overhaul",
      "Implemented Dubai & Abu Dhabi regional features: Ejari tenancy contracts (Eversign), advance cheques, and UAE-specific onboarding",
      "Managed and mentored the internal frontend team and an external vendor; performance rating progressed Satisfactory → Good → Excellent",
    ],
    stack: ["React", "Rust", "React Flow", "Angular", "Node.js", "TypeScript", "LLMs", "Docker", "Playwright", "PostgreSQL", "AWS Aurora", "MySQL", "Jenkins", "Stripe", "GCP"],
  },
  {
    id: "freelance",
    role: "Freelance Full Stack Developer",
    company: "Independent",
    companyDescription:
      "Part-time freelance web development for international clients alongside full-time roles",
    period: "2020 – Present",
    location: "Remote",
    highlights: [
      "Delivered full-stack projects across Angular, React, Vue, and Laravel/Lumen + Node.js stacks for international clients",
      "Built custom canvas tooling with Fabric.js and responsive UIs with TailwindCSS and Bootstrap",
      "Designed and worked across MySQL, PostgreSQL, and MongoDB databases",
    ],
    stack: ["Angular", "React", "Vue", "Next.js", "Nest.js", "Laravel", "Node.js", "Fabric.js", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    id: "ideatolife-lead",
    role: "Technical Team Lead",
    company: "IdeatoLife",
    companyDescription:
      "Full-service digital product agency — enterprise web apps, CRMs, ERPs, and e-commerce platforms",
    period: "Aug 2020 – Jun 2023",
    location: "UAE · Remote from Pakistan",
    highlights: [
      "Led the Angular front-end team as Scrum Master; participated in business planning and product roadmap meetings with stakeholders",
      "Architected and delivered custom CRM, ERP, admin panels, and multi-version e-commerce platforms from scratch for enterprise clients",
      "Implemented WebGL (Fabric.js) canvas tooling and D3.js / Leaflet Map data visualisation for geospatial enterprise dashboards",
      "Configured Angular SSR with SEO optimisation, lazy loading, and code splitting — reduced page load times by 40%",
      "Mentored mid-level and junior developers on architectural patterns and coding standards",
    ],
    stack: ["Angular", "Nest.js", "Fabric.js", "D3.js", "Leaflet", "Socket.io", "AWS S3", "MySQL"],
  },
  {
    id: "ideatolife-fs",
    role: "Full Stack Developer",
    company: "IdeatoLife",
    companyDescription: "Enterprise SPA and microservices development",
    period: "Aug 2018 – Aug 2020",
    location: "UAE · Remote from Pakistan",
    highlights: [
      "Developed SPA applications using Angular 5+; created microservices and REST APIs with Lumen and Spring Boot",
      "Designed MySQL database architecture for multi-tenant enterprise applications",
      "Built REST APIs using LoopBack; managed SEO configurations in Angular SSR",
    ],
    stack: ["Angular", "Lumen", "Spring Boot", "LoopBack", "MySQL"],
  },
  {
    id: "skynews",
    role: "Sr. Angular Developer",
    company: "Sky News Arabia",
    companyDescription: "Major regional Arabic-language news broadcast and digital media platform",
    period: "May 2018 – Aug 2018",
    location: "Abu Dhabi, UAE",
    highlights: [
      "Revamped legacy Angular.js components for one of the region's largest news platforms",
      "Implemented Google AMP to improve mobile performance scores and organic SEO rankings",
    ],
    stack: ["Angular.js", "Google AMP", "HTML5", "CSS3"],
  },
  {
    id: "cooperative",
    role: "Full Stack Developer",
    company: "Cooperative Computing",
    companyDescription: "Web applications and REST services",
    period: "Jan 2017 – Feb 2018",
    location: "Karachi, Pakistan",
    highlights: [
      "Designed ERDs and application architecture; built web apps and REST services in Laravel and Node.js",
      "Deployed on AWS; integrated Stripe, eBay, and Fitbit APIs; implemented FFmpeg for video merging and live streaming",
    ],
    stack: ["Laravel", "Node.js", "AWS", "Stripe", "FFmpeg"],
  },
  {
    id: "maven",
    role: "Software Engineer",
    company: "Maven Solutions",
    companyDescription: "CRM and cross-platform mobile development",
    period: "Jul 2015 – Jan 2017",
    location: "Karachi, Pakistan",
    highlights: [
      "Developed and maintained Vtiger CRM; built web applications using Django, Frappe Framework, and PHP",
      "Created cross-platform mobile apps using Xamarin and Ionic; integrated SMS gateway interfaces",
    ],
    stack: ["Django", "Frappe", "PHP", "Xamarin", "Ionic"],
  },
  {
    id: "super",
    role: "Junior Software Engineer",
    company: "Super Technologies",
    companyDescription: "Web and hybrid mobile applications",
    period: "Mar 2014 – Jan 2015",
    location: "Karachi, Pakistan",
    highlights: [
      "Built web applications using HTML, CSS, JavaScript, and PHP",
      "Developed hybrid mobile applications using PhoneGap and jQuery Mobile",
    ],
    stack: ["PHP", "JavaScript", "PhoneGap", "jQuery Mobile"],
  },
];

export const projects: Project[] = [
  {
    id: "ai-os",
    name: "AI Operating System — US SaaS Client",
    category: "AI & Agentic",
    description:
      "AI operating system built for a US-based client — calendar management, lead pipeline automation, marketing asset generation, SOP creation, and 250+ integrations.",
    highlights: ["250+ third-party integrations", "Autonomous lead pipeline automation", "LLM-driven marketing asset generation"],
    stack: ["React", "Node.js", "LLMs", "Google Cloud"],
    featured: true,
  },
  {
    id: "workflow-builder",
    name: "Visual AI Workflow Builder",
    category: "AI & Agentic",
    description:
      "Node-based visual workflow automation UI for AI pipelines with dynamic JSON schema rendering and a custom form system — no-code AI automation for non-technical users.",
    highlights: ["Visual drag-and-drop workflow builder", "Custom React JSON Schema Form engine", "Dynamic component rendering"],
    stack: ["React Flow", "Ant Design", "Rust", "PostgreSQL"],
    featured: true,
  },
  {
    id: "lead-search",
    name: "AI Lead Search Engine",
    category: "AI & Agentic",
    description:
      "ICP-driven lead search engine with subscription management and deep workflow-engine integration.",
    highlights: ["ICP workflow engine", "Subscription management", "Workflow API integration"],
    stack: ["React", "TypeScript", "Node.js", "REST APIs"],
    featured: true,
  },
  {
    id: "ai-website-builder",
    name: "AI Website Builder",
    category: "AI & Agentic",
    description:
      "AI website builder (v1 & v2) with inline HTML/image editing, workflow API integration, a Rust backend, Docker builds, and Playwright E2E testing.",
    highlights: ["Inline visual editing engine", "Rust backend + Docker pipeline", "Playwright E2E coverage"],
    stack: ["React", "Rust", "Docker", "Playwright", "Gemini"],
    featured: true,
  },
  {
    id: "personality-ai",
    name: "AI Personality Assessment Platform",
    category: "AI & Agentic",
    description:
      "AI personality assessment and team collaboration report platform designed to improve communication across personality types.",
    highlights: ["LLM-generated personality reports", "Team collaboration insights"],
    stack: ["LLMs", "Rust", "React", "TailwindCSS"],
  },
  {
    id: "gridizen-portal",
    name: "Gridizen Portal",
    category: "SaaS Platform",
    description:
      "PropTech SaaS for end-to-end property management across UK & UAE — tenancy, finance, compliance, and maintenance.",
    highlights: ["20+ concurrent features delivered", "AWS Aurora migration, zero data loss", "UK & UAE regional compliance"],
    stack: ["Angular", "Node.js", "AWS Aurora", "MySQL"],
  },
  {
    id: "thya-technology",
    name: "Thya Technology",
    category: "AI & Agentic",
    description:
      "AI platform with an image annotation tool for object detection and labeling — full ownership of the website, customer portal, and admin panel, from architecture to end-to-end feature delivery.",
    highlights: [
      "Image annotation tool for object detection & labeling",
      "Dataset modeling, prediction & inferencing workflows",
      "Led team end-to-end: releases, code review, critical issues",
    ],
    stack: ["Angular", "AWS S3", "AI", "Dataset Modeling", "Inferencing"],
  },
  {
    id: "pwc-asat",
    name: "PwC ASAT / Quads",
    category: "Enterprise",
    description:
      "Trainings and auditing admin panel for PwC — architected, designed, and built with full project ownership, leading the team on end-to-end feature delivery and reporting directly to PMO.",
    highlights: [
      "Custom plugin development & RESTful API integration",
      "Owned releases, code review & task assessment",
      "Handled complex tasks, bugs & critical issues",
    ],
    stack: ["Angular", "Bootstrap", "REST APIs", "Custom Plugins"],
  },
  {
    id: "enterprise-crm",
    name: "Enterprise CRM / ERP Suite",
    category: "Enterprise",
    description:
      "Custom-built CRM, ERP, and admin panels with WebGL canvas tooling, D3.js data visualisation, and Leaflet maps for enterprise clients.",
    highlights: ["WebGL (Fabric.js) canvas tooling", "Geospatial dashboards with D3 + Leaflet"],
    stack: ["Angular", "Nest.js", "Fabric.js", "D3.js", "MySQL"],
  },
  {
    id: "skynews-arabia",
    name: "Sky News Arabia",
    category: "Media",
    description:
      "Revamped digital news platform with Google AMP, Angular.js modernisation, and SEO improvements for one of the region's largest media outlets.",
    highlights: ["Google AMP implementation", "Organic SEO ranking improvements"],
    stack: ["Angular.js", "Google AMP", "HTML5", "CSS3"],
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "AI & Agentic",
  "SaaS Platform",
  "Enterprise",
  "Media",
];

export const techStack: TechCategory[] = [
  {
    id: "ai",
    label: "AI & Automation",
    icon: "BrainCircuit",
    skills: [
      "Agentic AI", "LLM Integration", "Gemini", "Claude", "ChatGPT",
      "Prompt Engineering", "Workflow Automation", "Cursor AI", "React Flow", "JSON Schema Engines",
    ],
  },
  {
    id: "frontend",
    label: "Frontend",
    icon: "Layout",
    skills: [
      "React", "Next.js", "Angular", "Vue.js", "TypeScript",
      "RxJS", "NgRx", "Angular Material", "TailwindCSS", "Bootstrap", "SCSS/Sass",
      "Ant Design", "Remix", "Gatsby", "Framer Motion", "D3.js", "Chart.js", "ApexCharts", "Fabric.js",
    ],
  },
  {
    id: "backend",
    label: "Backend & Languages",
    icon: "Server",
    skills: [
      "Rust", "Node.js", "Nest.js", "Laravel", "Django",
      "Spring Boot", "REST APIs", "Microservices", "Socket.io", "PHP", "Python",
    ],
  },
  {
    id: "data",
    label: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "AWS Aurora", "MongoDB", "Redis"],
  },
  {
    id: "cloud",
    label: "Cloud & DevOps",
    icon: "Cloud",
    skills: [
      "AWS", "GCP", "Docker", "Jenkins", "RabbitMQ",
      "AWS Control Tower", "S3", "EC2", "CI/CD", "Playwright E2E",
      "Git", "Webpack", "Vite", "Vercel",
    ],
  },
  {
    id: "leadership",
    label: "Leadership & Methods",
    icon: "Users",
    skills: [
      "Team Leadership", "Scrum Master", "Agile", "Jira", "Code Review",
      "Mentoring", "Sprint Planning", "Stakeholder Management", "TDD",
    ],
  },
];

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export const siteConfig = {
  url: "https://shahroz.dev",
  // Get a free access key at https://web3forms.com and paste it here:
  web3formsAccessKey: "YOUR_WEB3FORMS_ACCESS_KEY",
};
