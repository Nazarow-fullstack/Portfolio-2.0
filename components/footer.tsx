import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUp, Code, Github, Linkedin, Mail, MessageSquare } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t py-12">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <Code className="h-5 w-5" />
            <span className="font-semibold">Yusuf</span>
            <span className="text-muted-foreground text-sm">
              &copy; {new Date().getFullYear()}
            </span>
          </div>

          <div className="flex space-x-4 mb-4 md:mb-0">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:your@email.com" aria-label="Email">
                <Mail className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://t.me/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <MessageSquare className="h-5 w-5" />
              </Link>
            </Button>
          </div>

          <Button variant="outline" size="icon" asChild>
            <Link href="#home" aria-label="Back to top">
              <ArrowUp className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}