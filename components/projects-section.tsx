"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/constants";
import { Github } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export function ProjectsSection() {
  // Выделяем первый проект как главный
  const featuredProject = projects[0];
  const otherProjects = projects.slice(1, 4); // Берем следующие 3 проекта

  return (
    <section id="projects" className="py-32">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground relative inline-block">
            Project Showcase
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
            A selection of projects where I've architected and built complete web applications from end to end.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Featured Project */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="group relative w-full h-full p-6 rounded-2xl bg-card/50 backdrop-blur-lg border border-border/20 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-primary/20">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-2xl font-bold text-foreground">{featuredProject.title}</h3>
                <p className="text-muted-foreground mt-2">{featuredProject.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {featuredProject.techStack.map(tech => (
                    <div key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-semibold">
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative w-full h-full p-4 rounded-2xl bg-card/50 backdrop-blur-lg border border-border/20 shadow-lg transition-all duration-300 hover:border-primary hover:shadow-primary/20 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="relative aspect-video overflow-hidden rounded-md mb-4">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h4 className="font-bold text-foreground">{project.title}</h4>
                <div className="flex flex-wrap gap-1 mt-2">
                  {project.techStack.slice(0, 3).map(tech => (
                     <div key={tech} className="px-2 py-0.5 bg-secondary text-secondary-foreground rounded-full text-[10px] font-semibold">
                       {tech}
                     </div>
                  ))}
                </div>
              </motion.div>
            ))}
             {/* GitHub Call to Action Card */}
             <motion.div
              className="md:col-span-2 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-card/50 backdrop-blur-lg border border-dashed border-border/30 transition-all duration-300 hover:border-primary hover:shadow-primary/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
             >
                <h4 className="font-bold text-foreground mb-3">Explore More Projects</h4>
                <Button asChild>
                  <Link href="https://github.com/Nazarow-fullstack" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-5 w-5" />
                    View on GitHub
                  </Link>
                </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}