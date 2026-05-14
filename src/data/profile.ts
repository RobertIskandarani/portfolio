export const SITE_URL = "https://robertiskandarani.com";

export const profile = {
  name: "Robert Iskandarani",
  givenName: "Robert",
  familyName: "Iskandarani",
  jobTitle: "COO & CTO @ Yuppie · FullStack Developer",
  headline: "Ingeniero Informático · FullStack Developer · COO & CTO",
  description:
    "Ingeniero Informático argentino. COO & CTO en Yuppie (plataforma de CX) y FullStack Developer especializado en React, TypeScript, Node.js y Astro. Interesado en IA aplicada, producto y experiencias web performantes.",
  url: SITE_URL,
  email: "",
  locale: "es-AR",
  linkedin: "https://www.linkedin.com/in/robertiskandarani/",
  github: "https://github.com/RobertIskandarani",
  image: `${SITE_URL}/profile/profile.webp`,
  cvUrl: `${SITE_URL}/profile/Profile-ES.pdf`,
  cvUrlEn: `${SITE_URL}/profile/Profile-EN.pdf`,
  knowsAbout: [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Astro",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Python",
    "MongoDB",
    "Git",
    "GitHub",
    "GitLab",
    "Figma",
    "Postman",
    "OpenAI API",
    "Anthropic Claude",
    "Operaciones y estrategia de producto",
    "Customer Experience",
  ],
} as const;

export type Experience = {
  company: string;
  role: string;
  roleEn: string;
  logo?: string;
  logoAlt: string;
  start: string;
  startEn: string;
  end: string;
  endEn: string;
  startISO: string;
  endISO?: string;
  url?: string;
  location?: string;
  locationEn?: string;
  description: string;
  descriptionEn: string;
  highlights?: string[];
  tags?: string[];
};

export const experiences: Experience[] = [
  {
    company: "Yuppie",
    role: "COO & CTO",
    roleEn: "COO & CTO",
    logo: "/experience/yuppie.png",
    logoAlt: "Logo de Yuppie, plataforma de Customer Experience basada en QR y NFC",
    start: "Abril 2025",
    startEn: "April 2025",
    end: "Mayo 2026",
    endEn: "May 2026",
    startISO: "2025-04",
    endISO: "2026-05",
    url: "https://yuppiecx.com",
    location: "Argentina · Remoto",
    locationEn: "Argentina · Remote",
    description:
      "Me sumé al equipo fundador (2 socios) en una plataforma de Customer Experience que convierte feedback en datos accionables vía QR/NFC, y tomé la posta de la mejora técnica y operativa del producto. Como COO participé de las decisiones de marketing, diseño, pricing y del playbook de onboarding para locales. Como CTO mejoré la arquitectura existente, ayudé en la elección y consolidación del stack (Astro + React + TypeScript), lideré el rediseño de la landing para comunicar mejor la propuesta de valor, y trabajé hands-on en UX/UI, optimización de performance e integraciones (encuestas, reseñas, analytics, deploy en Vercel/Railway).",
    descriptionEn:
      "Joined the founding team (2 partners already on board) at a Customer Experience platform that turns feedback into actionable data via QR/NFC, and stepped up to drive the technical and operational improvements. As COO I took part in marketing, design, pricing and the onboarding playbook for locations. As CTO I improved the existing architecture, helped choose and consolidate the stack (Astro + React + TypeScript), led the landing redesign to better showcase the value proposition, and worked hands-on on UX/UI, performance optimization and integrations (surveys, reviews, analytics, deployment on Vercel/Railway).",
    highlights: [
      "Mejora de arquitectura existente y consolidación del stack",
      "UX/UI, performance e integraciones hands-on",
      "Participación en marketing, diseño, pricing y onboarding",
    ],
    tags: ["Astro", "React", "TypeScript", "Tailwind", "UX/UI", "Ops"],
  },
  {
    company: "Código",
    role: "Software Developer",
    roleEn: "Software Developer",
    logo: "/experience/codigo.svg",
    logoAlt: "Logo de Código, plataforma de automatización del ciclo de vida de dApps",
    start: "Octubre 2024",
    startEn: "October 2024",
    end: "Actualidad",
    endEn: "Present",
    startISO: "2024-10",
    description:
      "Desarrollador en una plataforma que automatiza el ciclo de vida de aplicaciones descentralizadas (dApps). Hoy mi foco está en autenticación, servidores MCP (Model Context Protocol) y el desarrollo del SDK que consumen los clientes para integrarse con la plataforma. También trabajo en la generación automática de contratos inteligentes, bibliotecas cliente y documentación técnica, aplicando principios de inversión de dependencias y arquitectura limpia. Participo en dailies, reviews y plannings para alinear objetivos y asegurar la calidad del producto.",
    descriptionEn:
      "Developer at a platform that automates the lifecycle of decentralized applications (dApps). My current focus is on authentication, MCP (Model Context Protocol) servers and the SDK that clients consume to integrate with the platform. I also work on automatic generation of smart contracts, client libraries and technical documentation, applying dependency inversion and clean architecture principles. I participate in dailies, reviews and plannings to align goals and ensure product quality.",
    tags: [
      "Authentication",
      "MCP Servers",
      "SDK",
      "TypeScript",
      "Clean Architecture",
      "Smart Contracts",
    ],
  },
  {
    company: "Botmaker",
    role: "Software Developer",
    roleEn: "Software Developer",
    logo: "/experience/botmaker.png",
    logoAlt: "Logo de Botmaker, plataforma SaaS de chatbots conversacionales",
    start: "Enero 2021",
    startEn: "January 2021",
    end: "Octubre 2024",
    endEn: "October 2024",
    startISO: "2021-01",
    endISO: "2024-10",
    description:
      "Desarrollador especializado en la creación y soporte de chatbots para diversas empresas. Experto en la integración de chatbots con múltiples APIs y servicios externos, asegurando una comunicación fluida y efectiva. Encargado del mantenimiento y mejora continua de la página web de la empresa, abordando la corrección de errores y la implementación de innovaciones visuales. Participación activa en reuniones con clientes, incluyendo sesiones diarias (dailies), revisiones (reviews) y planificaciones (plannings), entre otras cosas, para asegurar la alineación y satisfacción del cliente.",
    descriptionEn:
      "Developer specialized in building and supporting chatbots for diverse companies. Expert in integrating chatbots with multiple APIs and external services, ensuring smooth and effective communication. Responsible for the maintenance and continuous improvement of the company website, fixing bugs and shipping visual enhancements. Active participation in client meetings — dailies, reviews and plannings — to ensure alignment and customer satisfaction.",
    tags: ["JavaScript", "Node.js", "Chatbots", "APIs", "SaaS"],
  },
  {
    company: "Autónomo",
    role: "Desarrollador Full Stack / Autónomo",
    roleEn: "Full Stack Developer / Freelance",
    logo: "/experience/autonomo.svg",
    logoAlt: "Icono de developer freelance",
    start: "Enero 2021",
    startEn: "January 2021",
    end: "Actualidad",
    endEn: "Present",
    startISO: "2021-01",
    description:
      "Desarrollador Full Stack tomando proyectos propios y para clientes: frontend (React, Astro, Tailwind), backend (Node.js, MongoDB, APIs REST), integraciones con IA (OpenAI, Anthropic Claude) y automatizaciones para acelerar procesos repetitivos. Diseño, implementación y mantenimiento end-to-end de aplicaciones web y móviles, con foco en performance, UX y soluciones que resuelvan un problema concreto.",
    descriptionEn:
      "Full Stack Developer taking on my own and client projects: frontend (React, Astro, Tailwind), backend (Node.js, MongoDB, REST APIs), AI integrations (OpenAI, Anthropic Claude) and automations to accelerate repetitive workflows. End-to-end design, implementation and maintenance of web and mobile apps, focused on performance, UX and solving a concrete problem.",
    tags: [
      "Frontend",
      "Backend",
      "AI Integrations",
      "Automatización",
      "React",
      "Node.js",
    ],
  },
  {
    company: "Macabi",
    role: "Coordinador de educación no formal",
    roleEn: "Non-formal education coordinator",
    logo: "/experience/macabi.svg",
    logoAlt: "Logo de Macabi, comunidad de educación no formal",
    start: "Marzo 2017",
    startEn: "March 2017",
    end: "Enero 2024",
    endEn: "January 2024",
    startISO: "2017-03",
    endISO: "2024-01",
    description:
      "Líder de equipos de 30 jóvenes de 17 a 21 años, centrados en la educación no formal y la transmisión de valores mediante actividades lúdicas.",
    descriptionEn:
      "Leader of teams of 30 young people aged 17-21, focused on non-formal education and transmitting values through playful activities.",
    tags: ["Liderazgo", "Educación", "Comunicación"],
  },
  {
    company: "Cryptonite",
    role: "Desarrollador Frontend",
    roleEn: "Frontend Developer",
    logo: "/experience/cryptonite.webp",
    logoAlt: "Logo de Cryptonite, startup de aplicaciones web y móviles",
    start: "Marzo 2022",
    startEn: "March 2022",
    end: "Febrero 2023",
    endEn: "February 2023",
    startISO: "2022-03",
    endISO: "2023-02",
    description:
      "Desarrollo, mantenimiento y evolución de aplicaciones web y móviles. Especializado en React y React Native, con nociones básicas de diseño UX/UI.",
    descriptionEn:
      "Development, maintenance and iteration of web and mobile apps. Specialized in React and React Native, with basic UX/UI design notions.",
    tags: ["React", "React Native", "UX/UI"],
  },
];

export type ProjectTech = {
  name: string;
  icon: "react" | "typescript" | "astro" | "google-analytics" | "thirdweb" | "tailwind";
  bg: string;
  text: string;
};

export type Project = {
  name: string;
  slug: string;
  url: string;
  repo?: string;
  description: string;
  descriptionEn: string;
  image: string;
  imageAlt: string;
  tech: ProjectTech[];
};

const tech = {
  react: { name: "React", icon: "react", bg: "bg-[#1E5265]", text: "text-[#78D3FA]" },
  typescript: { name: "Typescript", icon: "typescript", bg: "bg-[#021531]", text: "text-[#4182D8]" },
  astro: { name: "Astro", icon: "astro", bg: "bg-[#421800]", text: "text-[#FF5D01]" },
  googleAnalytics: {
    name: "Google Analytics",
    icon: "google-analytics",
    bg: "bg-[#531300]",
    text: "text-[#EEAE3C]",
  },
  thirdweb: { name: "Thirdweb", icon: "thirdweb", bg: "bg-[#220833]", text: "text-[#B32AA7]" },
  tailwind: { name: "Tailwind CSS", icon: "tailwind", bg: "bg-[#0c2733]", text: "text-[#38BDF8]" },
} as const satisfies Record<string, ProjectTech>;

export const projects: Project[] = [
  {
    name: "NU World",
    slug: "nu-world",
    url: "https://nu-world.vercel.app/",
    repo: "https://github.com/RobertIskandarani/NUWorld",
    description:
      "Web sencilla y directa para explorar y adquirir NFTs exclusivos. Presenta las obras de arte digital de manera clara y permite compras directas en la página.",
    descriptionEn:
      "Simple, direct site to explore and buy exclusive NFTs. Showcases the digital artworks clearly and supports direct on-page purchases.",
    image: "/projects/NUWD.svg",
    imageAlt: "Captura de pantalla del marketplace NU World",
    tech: [tech.react, tech.googleAnalytics, tech.thirdweb],
  },
  {
    name: "Yuppie",
    slug: "yuppie",
    url: "https://yuppiecx.com",
    description:
      "Landing y plataforma de Yuppie, la solución de Customer Experience que convierte feedback en tiempo real en data accionable. Encuestas vía QR/NFC, gestión de reseñas y dashboard de analytics para que cada negocio mejore la experiencia de sus clientes con decisiones basadas en datos.",
    descriptionEn:
      "Landing page and platform for Yuppie, the Customer Experience solution that turns real-time feedback into actionable data. QR/NFC surveys, review management and an analytics dashboard so every business can improve customer experience with data-driven decisions.",
    image: "/projects/yuppie.svg",
    imageAlt: "Captura de pantalla de la landing de Yuppie",
    tech: [tech.astro, tech.react, tech.typescript, tech.tailwind],
  },
  {
    name: "Sordo Pero No Mudo",
    slug: "sordo-pero-no-mudo",
    url: "https://sordoperonomudo.com/",
    repo: "https://github.com/RobertIskandarani/sordoperonomudo/tree/main",
    description:
      "Sitio web oficial del podcast “Sordo pero no mudo”. Diseñado para visibilizar la hipoacusia a través de episodios, testimonios e información accesible. Incluye integración con plataformas externas como Spotify y YouTube, y fomenta la participación de la comunidad.",
    descriptionEn:
      "Official website for the \"Sordo pero no mudo\" podcast. Designed to raise awareness about hearing loss through episodes, testimonials and accessible information. Integrates with external platforms like Spotify and YouTube, encouraging community participation.",
    image: "/projects/sordo-pero-no-mudo.png",
    imageAlt: "Captura de pantalla del podcast Sordo Pero No Mudo",
    tech: [tech.astro, tech.typescript],
  },
  {
    name: "Iom ha Madrij/a",
    slug: "iomha",
    url: "https://iomha.vercel.app/",
    repo: "https://github.com/RobertIskandarani/Iomha",
    description:
      "Web de registro para un evento. Esta plataforma permite a los usuarios completar fácilmente sus datos para asistir al evento, y al finalizar, genera automáticamente un PDF personalizado con la información proporcionada.",
    descriptionEn:
      "Event registration site. The platform lets users easily fill in their data to attend the event and, once finished, automatically generates a personalized PDF with the submitted information.",
    image: "/projects/Iomha.svg",
    imageAlt: "Captura de pantalla del registro de Iom ha Madrij/a",
    tech: [tech.react, tech.typescript],
  },
];

export const skills = {
  frontend: ["React", "Astro", "HTML5", "CSS3", "Tailwind CSS"],
  languages: ["JavaScript", "TypeScript", "Python"],
  backend: ["Node.js", "MongoDB"],
  ai: ["OpenAI API", "Anthropic Claude"],
  tools: ["Git", "GitHub", "GitLab", "Figma", "Photoshop", "Postman"],
} as const;

export const education = [
  {
    institution: "Universidad",
    area: "Ingeniería Informática",
    studyType: "Grado",
    startISO: "",
    endISO: "",
  },
];

export const languages = [
  { language: "Español", fluency: "Nativo" },
  { language: "Inglés", fluency: "Profesional" },
];
