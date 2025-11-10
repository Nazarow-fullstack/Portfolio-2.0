import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Particles } from '@/components/magicui/particles';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Yusuf Nazarov | Full-Stack Engineer",
  description: "Full-Stack Engineer crafting modern, responsive, and high-performance web applications from concept to deployment.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, "antialiased")}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative w-full h-full">
            <Particles className="absolute inset-0 -z-10" quantity={100} ease={80} color="#ffffff" />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}