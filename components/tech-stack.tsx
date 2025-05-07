import React from "react";
import { cn } from "@/lib/utils";

interface TechItem {
  name: string;
  category: string;
}

const techStack: TechItem[] = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "Python", category: "Backend" },
  { name: "Git & GitHub", category: "Tools" },
  { name: "Azure", category: "Cloud" },
  { name: "APIs & DB", category: "Backend" },
];

const categories = ["Frontend", "Backend", "Tools", "Cloud"];

export function TechStack() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      {categories.map((category) => (
        <div key={category} className="space-y-3">
          <h3 className="text-lg font-medium">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {techStack
              .filter((tech) => tech.category === category)
              .map((tech, index) => (
                <TechBadge 
                  key={tech.name} 
                  name={tech.name} 
                  delay={index * 0.1} 
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function TechBadge({ name, delay }: { name: string; delay: number }) {
  return (
    <div 
      className={cn(
        "px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm",
        "hover:bg-primary hover:text-primary-foreground transition-all duration-300",
        "animate-fadeIn"
      )}
      style={{ animationDelay: `${delay}s` }}
    >
      {name}
    </div>
  );
}