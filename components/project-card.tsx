"use client";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { type Project } from "@/lib/constants";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card 
      className={cn(
        "overflow-hidden group border border-border/50 bg-card transition-all duration-500 h-full flex flex-col",
        "hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-2",
        "opacity-0 animate-fadeIn"
      )}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
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