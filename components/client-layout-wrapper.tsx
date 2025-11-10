"use client";

import { ThemeProvider } from '@/components/theme-provider';
import { Particles } from '@/components/magicui/particles';
import { useIsMobile } from '@/hooks/useIsMobile';

export function ClientLayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useIsMobile();

  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className="relative w-full h-full">
        <Particles 
          className="absolute inset-0 -z-10" 
          quantity={isMobile ? 30 : 100} 
          ease={80} 
          color="#ffffff" 
        />
        {children}
      </div>
    </ThemeProvider>
  );
}