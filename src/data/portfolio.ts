// ─────────────────────────────────────────────────────────────
// All portfolio content lives here. Edit this file to update
// the site — no component changes needed.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Kalyan Naskar",
  role: "Full Stack Developer",
  typedRoles: [
    "Full Stack Developer",
    "PERN Stack Engineer",
    "MERN Stack Engineer",
    "React Developer",
    "Node.js Backend Developer",
  ],
  location: "Kolkata, West Bengal, India",
  email: "naskarkalyan2000@gmail.com",
  phone: "+91-9875638109",
  github: "https://github.com/Kalyan0101",
  linkedin: "https://linkedin.com/in/kaiyan-naskar",
  tagline:
    "I build complex, scalable SaaS applications with the PERN stack — from optimized PostgreSQL schemas to responsive, state-driven React frontends.",
  about: [
    "I'm a Full Stack Developer with 1+ years of production experience building multi-tenant SaaS platforms. I've architected systems with role-based access control (RBAC), subscription models, and real-time features like live chat and video calling.",
    "I enjoy owning features end-to-end: designing the database schema, building the REST APIs, and shipping the UI. Recently I've been leading frontend and full-stack work on supply-chain and manufacturing products, where I've built 40+ API endpoints, automated background jobs, and cut average API response times by 30% through query optimization and caching.",
  ],
} as const;

export const skills = [
  { group: "Languages", items: ["JavaScript", "TypeScript", "SQL"] },
  {
    group: "Frontend",
    items: [
      "React.js",
      "Redux",
      "TanStack Query",
      "Tailwind CSS",
      "React Hook Form",
      "Axios",
      "HTML/CSS",
    ],
  },
  {
    group: "Backend & Databases",
    items: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MySQL",
      "MariaDB",
      "MongoDB",
      "Prisma",
      "Sequelize",
    ],
  },
  {
    group: "Tools & Others",
    items: [
      "Git & GitHub",
      "Linux",
      "Postman",
      "Bun",
      "REST APIs",
      "Socket.io",
    ],
  },
] as const;

export const experience = [
  {
    company: "Code Of Dolphins",
    role: "Software Engineer (Node.js Developer)",
    period: "July 2025 – Present",
    location: "Kolkata, India",
    points: [
      "Designed and implemented RESTful APIs using Node.js/Express, integrated with PostgreSQL via Sequelize ORM.",
      "Developed responsive React components and managed global application state with Redux for customer dashboards.",
      "Optimized PostgreSQL queries, reducing average API response time by 30%, and implemented caching strategies.",
    ],
  },
  {
    company: "Vyrazu Labs",
    role: "Trainee Associate Software Developer",
    period: "April 2025 – June 2025",
    location: "Kolkata, India",
    points: [
      "Built full-stack applications integrating RESTful APIs and designing responsive UIs with Tailwind CSS.",
      "Collaborated in an Agile team following version-control best practices with Git and GitHub.",
    ],
  },
] as const;

export const projects = [
  {
    name: "Astro Raju Maharaj Ji",
    subtitle: "Enterprise Spiritual-Services Platform (Monorepo)",
    period: "July,2026 – Present",
    role: "Lead Frontend Developer",
    tech: [
      "React 19",
      "Vite",
      "TypeScript",
      "Tailwind CSS v4",
      "TanStack Query",
      "Zustand",
      "React Router v7",
      "Express (BFF)",
      "Socket.io",
      "Razorpay",
      "VideoSDK",
      "pnpm + Turborepo",
    ],
    points: [
      "Owned the entire frontend across a 5-app pnpm/Turborepo monorepo (Website, Jyotish, Shop, Education, Auth BFF) sharing one design system, API layer, and SSO across subdomains.",
      "Built Website and Jyotish flows — landing pages, astro tools, astrologer listings, consultations/bookings, and live sessions via VideoSDK.",
      "Built Shop e-commerce flows — product details with pooja/energization add-ons, cart, wishlist, and Razorpay checkout — on TanStack Query and a shared Zustand cart store.",
      "Built Education/LMS flows — instructor course management and live classes via VideoSDK — reusing shared academy components across the workspace.",
      "Consumed a centralized Express BFF that proxies the Laravel API and manages encrypted, httpOnly session cookies for silent single sign-on across every subdomain.",
    ],
    links: [
      { label: "Website", url: "https://vedicastral.in" },
      { label: "Jyotish", url: "https://jyotish.vedicastral.in" },
      { label: "Shop", url: "https://shop.vedicastral.in" },
      { label: "Education", url: "https://education.vedicastral.in" },
    ],
    aiAssisted: true,
  },
  {
    name: "MYWMS",
    subtitle: "Warehouse & Supply Chain Management SaaS",
    period: "2025 – Present",
    role: "Lead Full Stack Developer",
    tech: [
      "React",
      "Redux",
      "TanStack Query",
      "Tailwind",
      "Node.js",
      "PostgreSQL",
      "Sequelize",
    ],
    points: [
      "Owned architecture, schema design, API development, and frontend end-to-end.",
      "Engineered supply chain (RFQ lifecycles) and manufacturing modules covering raw materials, WIP, and GRN flows.",
      "Built 40+ REST API endpoints and automated background tasks via scheduled CRON jobs.",
      "Implemented multi-tenant isolation, subscription models, and multi-layered RBAC for admins, buyers, and suppliers.",
    ],
    links: [],
    aiAssisted: false,
  },
  {
    name: "TMG 180",
    subtitle: "High-performance Web Application",
    period: "2026 – Present",
    role: "Lead Frontend Developer",
    tech: ["React", "Redux", "TanStack Query", "Axios", "Tailwind CSS"],
    points: [
      "Architecting a high-performance web application from the ground up.",
      "Advanced state management and server-state caching with Redux and TanStack Query.",
      "Complex, scalable forms with React Hook Form and fully responsive, accessible UI with Tailwind CSS.",
    ],
    links: [],
    aiAssisted: false,
  },
  {
    name: "Desi Couplez",
    subtitle: "Real-time Social Platform",
    period: "2025 – 2026",
    role: "Associate Frontend Developer",
    tech: ["React", "Socket.io", "VideoSDK", "React Router v7"],
    points: [
      "Integrated video/audio calling and live streaming using Video SDK, managing session lifecycles and token auth.",
      "Built live bi-directional chat with instant delivery and presence indicators using WebSockets (Socket.io).",
    ],
    links: [],
    aiAssisted: false,
  },
] as const;

export const education = [
  {
    school: "RCCIIT, Kolkata",
    degree: "MCA — Master of Computer Applications",
    period: "July 2023 – July 2025",
    score: "CGPA: 8.8",
  },
  {
    school: "DAITM, Kolkata",
    degree: "BCA — Bachelor of Computer Applications",
    period: "June 2020 – June 2023",
    score: "CGPA: 9.02",
  },
] as const;

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
] as const;
