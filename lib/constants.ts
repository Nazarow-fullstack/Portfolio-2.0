export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "FixIt – AI-Powered Service Marketplace",
    description: "A web app where users can post problems and pros can offer services. Integrated an AI advisor that helps users describe their problems better using OpenAI API.",
    techStack: ["Next.js", "Tailwind", "OpenAI API", "Zustand"],
    image: "https://images.pexels.com/photos/4963622/pexels-photo-4963622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com/yourusername/fixit",
  },
  {
    id: 2,
    title: "Instagram Forum Clone",
    description: "A forum-like clone of Instagram built with Next.js. Users can post, comment, and view others' posts.",
    techStack: ["Next.js", "Tailwind CSS", "React Router", "Firebase"],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com/yourusername/instagram-clone",
  },
  {
    id: 3,
    title: "Portfolio Landing Page",
    description: "A clean and animated dark-themed portfolio landing page for developers/designers.",
    techStack: ["Next.js", "Tailwind", "Framer Motion"],
    image: "https://images.pexels.com/photos/927629/pexels-photo-927629.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "https://yourportfolio.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    id: 4,
    title: "Telegram Excel Bot + Azure Integration",
    description: "Built a Telegram bot in Python that allows admins to upload Excel files and manage them through Azure Cloud.",
    techStack: ["Python", "Azure Blob Storage", "Telegram Bot API"],
    image: "https://images.pexels.com/photos/7014337/pexels-photo-7014337.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com/yourusername/telegram-excel-bot",
  },
  {
    id: 5,
    title: "3D Product Marketplace (Hackathon Idea)",
    description: "Concept for a realistic marketplace with 3D product viewing. Developed product demo with Three.js and integrated user flows.",
    techStack: ["React", "Three.js", "Zustand"],
    image: "https://images.pexels.com/photos/4464816/pexels-photo-4464816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    github: "https://github.com/yourusername/3d-marketplace",
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