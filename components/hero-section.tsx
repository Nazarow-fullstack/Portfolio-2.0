"use client";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative overflow-hidden"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          

          {/* Леваяколонка: Основной текст */}
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <p className="text-base text-primary font-semibold tracking-wider uppercase">
                Full-Stack Engineer
              </p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                Yusuf Nazarov
              </h1>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-muted-foreground to-foreground">
                — Architecting Digital Experiences
              </h2>
              <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
                I build robust, scalable, and beautiful web applications from end to end. From designing RESTful APIs with Python to crafting pixel-perfect UIs with Next.js, I bring ideas to life with clean and efficient code.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-8 justify-center lg:justify-start">
              <Button size="lg" className="shadow-lg shadow-primary/20" asChild>
                <Link href="#projects">See My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </motion.div>


          {/* Правая  колонка: Голографическая консоль */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="hidden lg:block p-6 rounded-2xl bg-card/50 backdrop-blur-lg border border-border/20 shadow-lg"
          >
            <div className="w-full bg-black/50 rounded-lg p-4 font-mono text-sm text-primary min-h-[250px]">
              <TypeAnimation
                sequence={[
                  '// Yusuf Nazarov: Engineer\'s Log\n\nconst mission = {\n  goal: "Build Exceptional Web Experiences",\n  stack: ["Next.js", "Python", "Three.js"],\n  focus: "Clean, Scalable Architecture"\n};\n\nfunction createSolution(idea) {\n  if (idea.isValid) {\n    return new FullStackApp(idea);\n  }\n}\n\n// Ready to build something amazing.',
                  5000,
                  ''
                ]}
                wrapper="span"
                speed={80}
                repeat={Infinity}
                cursor={true}
                style={{ whiteSpace: 'pre-wrap', display: 'block' }}
              />
            </div>
          </motion.div>

        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center animate-bounce">
        <Link href="#about" aria-label="Scroll to about section">
          <ArrowDownCircle className="h-10 w-10 text-muted-foreground/50 hover:text-primary transition-colors" />
        </Link>
      </div>
    </section>
  );
}