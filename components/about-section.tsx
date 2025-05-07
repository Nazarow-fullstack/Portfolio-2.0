"use client";

import { motion } from "framer-motion";
import { TechStack } from "./tech-stack";

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                I'm Yusuf, a 16-year-old frontend developer. I specialize in creating 
                responsive, fast, and modern web apps. I've completed a full Frontend 
                Developer course, and now I'm diving into backend stuff and AI integration.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                I'm super passionate about design (especially dark UI), 3D experiences, 
                and making things that just feel good to use. When I'm not coding, I'm 
                probably playing Valorant, Fortnite, or cooking up ideas for my next side project.
              </motion.p>
            </div>

            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <div className="inline-block">
                <h3 className="text-xl font-semibold mb-2">My Tech Stack</h3>
                <div className="h-1 w-1/3 bg-primary rounded-full"></div>
              </div>
              <TechStack />
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative flex items-center justify-center rounded-xl overflow-hidden group"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 opacity-70 rounded-xl group-hover:opacity-90 transition-opacity duration-500"></div>
            <div className="relative space-y-8 p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold">Why Work With Me?</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { title: "Clean Code", desc: "Well-structured & maintainable" },
                  { title: "Modern Design", desc: "Sleek UI/UX principles" },
                  { title: "Fast Learner", desc: "Quick to pick up new tech" },
                  { title: "Detail Oriented", desc: "Pixel-perfect implementation" },
                ].map((item, index) => (
                  <motion.div 
                    key={item.title} 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                  >
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              <motion.div 
                className="relative mt-6 inline-flex items-center justify-center overflow-hidden rounded-full p-[1px]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,theme(colors.primary.DEFAULT)_0%,theme(colors.secondary.DEFAULT)_50%,theme(colors.primary.DEFAULT)_100%)]" />
                <div className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-background px-6 py-2 text-sm font-medium backdrop-blur-3xl">
                  Always improving
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}