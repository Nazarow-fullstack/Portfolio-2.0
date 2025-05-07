"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { socialLinks } from "@/lib/constants";
import { Mail, MessageSquare, Send } from "lucide-react";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export function ContactSection() {
  const [formState, setFormState] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({ name: "", email: "", message: "" });
      
      // Reset submission state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            className="text-center mb-12 space-y-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tight">Let's Connect</h2>
            <p className="text-muted-foreground">
              Let's build something cool together. Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="border border-border/50 bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Mail className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Contact Information</h3>
                  </div>

                  <div className="space-y-4">
                    {socialLinks.map((link, index) => (
                      <motion.div 
                        key={link.name} 
                        className="flex flex-col space-y-1"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="text-sm text-muted-foreground">
                          {link.name}
                        </span>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-foreground hover:text-primary transition-colors"
                        >
                          {link.value}
                        </a>
                      </motion.div>
                    ))}
                  </div>

                  <div className="h-px bg-border my-6" />

                  <div className="flex items-center gap-3 mb-4">
                    <MessageSquare className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold">Let's Chat</h3>
                  </div>
                  
                  <p className="text-muted-foreground text-sm mb-6">
                    I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4">
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                  
                  <motion.div 
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={isSubmitting || isSubmitted}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : isSubmitted ? (
                      "Message Sent!"
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" /> Send Message
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}