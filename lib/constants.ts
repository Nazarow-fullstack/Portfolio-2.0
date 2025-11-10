export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Instagram Clone | Full-Stack Social Media",
    description: "Full-stack replica with a Next.js frontend and a FastAPI & Firebase backend. Features secure auth, real-time chat, and advanced image processing.",
    techStack: ["Next.js", "FastAPI", "Firebase", "WebSockets", "Tailwind"],
    image: "/projects/instagram.png",
  },
  {
    id: 2,
    title: "Handify | Full-Stack Crowdsourcing Platform",
    description: "A problem-solving hub built with a React frontend and a robust Django/DRF backend to manage all user interactions and data.",
    techStack: ["React", "Django", "DRF", "PostgreSQL", "AI"],
    image: "/projects/handify.png",
  },
  {
    id: 3,
    title: "EduFinder | Geospatial Search Application",
    description: "Built an interactive map with React & Leaflet, supported by a high-performance Python backend for complex, location-based queries.",
    techStack: ["React", "Python", "Leaflet", "REST API"],
    image: "/projects/edufinder.png",
  },
  {
    id: 4,
    title: "Alif Shop Clone | E-commerce Application",
    description: "Engineered a complete e-commerce storefront with React and TypeScript, powered by a FastAPI backend to manage products, inventory, and orders.",
    techStack: ["React", "TypeScript", "FastAPI", "SQLAlchemy"],
    image: "/projects/alif.png",
  },
];

export const socialLinks = [
  {
    name: "Email",
    value: "yusufnazarow20090505@gmail.com",
    href: "mailto:yusufnazarow20090505@gmail.com",
  },
  {
    name: "Telegram",
    value: "@Yusuf_Nazar0v",
    href: "https://t.me/Yusuf_Nazar0v",
  },
  {
    name: "GitHub",
    value: "github.com/Nazarow-fullstack",
    href: "https://github.com/Nazarow-fullstack",
  },
  {
    name: "LinkedIn",
    value: "linkedin.com/in/yusuf-nazarov",
    href: "https://www.linkedin.com/in/yusuf-nazarov-7b2872341/",
  },
];