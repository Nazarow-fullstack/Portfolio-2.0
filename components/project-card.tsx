"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { type Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <Card 
      className={cn(
        "overflow-hidden group border border-border/50 bg-card transition-all duration-500 h-full flex flex-col",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        "opacity-0 animate-fadeIn"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={cn(
            "object-cover transition-transform duration-500",
            isHovered ? "scale-110" : "scale-100"
          )}
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex gap-3">
            {project.github && (
              <Button size="sm" variant="secondary" asChild>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-1" />
                  Code
                </a>
              </Button>
            )}
            {project.link && (
              <Button size="sm" asChild>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  Demo
                </a>
              </Button>
            )}
          </div>
        </div>
      </div>
      <CardContent className="flex-1 p-6 space-y-4">
        <h3 className="text-xl font-semibold line-clamp-1">{project.title}</h3>
        <p className="text-muted-foreground text-sm line-clamp-3">
          {project.description}
        </p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-1.5">
        {project.techStack.map((tech) => (
          <Badge key={tech} variant="secondary" className="font-normal">
            {tech}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  );
}