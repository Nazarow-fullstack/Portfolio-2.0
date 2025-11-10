import { cn } from "@/lib/utils";

const techStack = {
  "Frontend": ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  "Backend": ["Python", "FastAPI", "Django", "Node.js"],
  "Databases & Cloud": ["PostgreSQL", "Firebase", "Azure"],
  "Tools": ["Git", "Docker", "Figma", "Vercel"],
};

export function TechStack() {
  return (
    <div className="space-y-6">
      {Object.entries(techStack).map(([category, techs]) => (
        <div key={category}>
          <h4 className="text-md font-semibold mb-3 text-muted-foreground">{category}</h4>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <div key={tech} className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium">
                {tech}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}