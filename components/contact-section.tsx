"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/lib/constants";
import { Github, Linkedin, Send, Mail, MessageSquare } from "lucide-react";

const socialIcons: { [key: string]: React.ReactNode } = {
  GitHub: <Github className="h-8 w-8" />,
  LinkedIn: <Linkedin className="h-8 w-8" />,
  Telegram: <MessageSquare className="h-8 w-8" />,
  Email: <Mail className="h-8 w-8" />,
};

export function ContactSection() {
  return (
    <section id="contact" className="py-32">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground relative inline-block">
            Let's Connect
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full" />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-lg">
            Have a project in mind or just want to say hello? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Bento Grid for Social Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <Link
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-6 rounded-2xl bg-card/50 backdrop-blur-lg border border-border/20 shadow-lg text-center transition-all duration-300 hover:border-primary hover:shadow-primary/20 hover:-translate-y-2"
                >
                  <div className="flex justify-center mb-3 text-primary">
                    {socialIcons[link.name]}
                  </div>
                  <h4 className="font-semibold text-foreground">{link.name}</h4>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            className="p-8 rounded-2xl bg-card/50 backdrop-blur-lg border border-border/20 shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-center mb-6 text-foreground">Or Send Me a Direct Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input placeholder="Your Name" className="bg-background/50 border-border/30" />
                <Input type="email" placeholder="Your Email" className="bg-background/50 border-border/30" />
              </div>
              <Textarea placeholder="Your Message" rows={5} className="bg-background/50 border-border/30" />
              <Button type="submit" size="lg" className="w-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90">
                <Send className="mr-2 h-5 w-5" /> Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}