"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Code, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-500",
      isScrolled 
        ? "bg-background/80 backdrop-blur-md border-b shadow-sm py-3" 
        : "bg-transparent py-5"
    )}>
      <div className="container mx-auto flex items-center justify-between">
        <Link 
          href="#home" 
          className="flex items-center gap-2 font-bold text-xl group"
        >
          <Code className="h-6 w-6 transition-transform group-hover:rotate-12" />
          <span className="relative">
            Yusuf
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={cn(
          "md:hidden fixed inset-x-0 top-[57px] bg-background/95 backdrop-blur-md border-b transition-all duration-300 transform",
          mobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        )}
      >
        <nav className="container mx-auto py-4">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <li 
                key={link.name}
                className="transform transition-transform"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link 
                  href={link.href}
                  className="block py-2 text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}