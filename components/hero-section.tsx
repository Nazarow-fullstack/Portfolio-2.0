import { Button } from "@/components/ui/button";
import { ArrowDownCircle, Github } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center pt-16 relative overflow-hidden"
    >
      {/* Enhanced background elements */}
      <div className="absolute top-40 -left-32 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto z-10">
        <div className="max-w-3xl space-y-8">
          <div className="space-y-2 stagger-animation">
            <p className="text-sm md:text-base text-primary font-medium tracking-wider uppercase animate-slideIn">
              Frontend Developer
            </p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
              Hi, I'm Yusuf
              <span className="block text-primary mt-2">— a 16 y.o Frontend Developer</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
              crafting modern, responsive, and sleek websites.
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl animate-fadeIn" style={{ animationDelay: '0.5s' }}>
            Passionate about building beautiful UI with Tailwind, React, and Next.js. Always learning, always building.
          </p>

          <div className="flex flex-wrap gap-4 pt-4 animate-fadeIn" style={{ animationDelay: '0.7s' }}>
            <Button size="lg" className="group relative overflow-hidden" asChild>
              <Link href="#projects">
                <span className="relative z-10">See My Work</span>
                <div className="absolute inset-0 bg-primary transform transition-transform group-hover:scale-x-[1.1] group-hover:scale-y-[1.2] origin-center" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gradient-border" asChild>
              <Link href="#contact">
                Contact Me
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="ml-1 rounded-full" asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex justify-center animate-float">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDownCircle className="h-10 w-10 text-muted-foreground/50 hover:text-primary transition-colors" />
        </Link>
      </div>
    </section>
  );
}