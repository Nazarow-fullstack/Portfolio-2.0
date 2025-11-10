"use client";
import { motion } from "framer-motion";
import { BrainCircuit, Code, Zap, ShieldCheck } from "lucide-react";
import { cn } from "@/lib/utils";

const techStack = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  "Backend": ["Python", "FastAPI", "Django", "Node.js"],
  "Databases & Cloud": ["PostgreSQL", "Firebase", "Azure"],
  "Tools": ["Git", "Docker", "Figma", "Vercel"],
};

const strengths = [
  { icon: <BrainCircuit className="h-8 w-8" />, title: "Full-Stack Vision", desc: "End-to-end architecture" },
  { icon: <Code className="h-8 w-8" />, title: "Clean Architecture", desc: "Scalable & maintainable" },
  { icon: <Zap className="h-8 w-8" />, title: "API Design", desc: "Efficient & secure" },
  { icon: <ShieldCheck className="h-8 w-8" />, title: "Problem Solver", desc: "Complex challenges" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-32">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          <motion.div 
            className="space-y-12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div>
              <h2 className="text-4xl font-bold tracking-tight text-foreground mb-6 relative inline-block">
                About Me
                <span className="absolute -bottom-2 left-0 w-2/3 h-1 bg-primary rounded-full" />
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg leading-relaxed mt-8">
                <p>
                  As a Full-Stack Engineer, I architect and build complete digital solutions. My expertise spans from robust Python backends (FastAPI, Django) to intuitive, high-performance user interfaces with React and Next.js.
                </p>
                <p>
                  I'm passionate about clean architecture, scalable systems, and exploring new frontiers in AI and 3D to create products that are truly exceptional.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">Tech Arsenal</h3>
              <div className="flex flex-wrap gap-3">
                {Object.values(techStack).flat().map((tech) => (
                  <div key={tech} className="px-4 py-2 bg-secondary text-secondary-foreground rounded-md text-sm font-semibold transition-all duration-300 hover:bg-primary hover:text-primary-foreground cursor-default shadow-md">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">Core Strengths</h3>
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
              {strengths.map((item, index) => (
                <motion.div
                  key={item.title}
                  className={cn(
                    "p-6 rounded-xl bg-card/50 backdrop-blur-lg border border-border/20 shadow-lg flex flex-col justify-center items-center text-center space-y-3 transition-all duration-300",
                    "hover:border-primary hover:shadow-primary/20 hover:-translate-y-2"
                  )}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                >
                  <div className="p-3 bg-secondary rounded-full">
                    {item.icon}
                  </div>
                  <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}   