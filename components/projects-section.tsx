"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { projects } from "@/lib/constants";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto">
        <motion.div 
          className="space-y-2 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each one taught me something new and helped me grow as a developer.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}