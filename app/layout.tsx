import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Yusuf | Frontend Developer",
  description: "16-year-old frontend developer crafting modern, responsive, and sleek websites.",
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
         <div classname="p-[20px]">
           {children}
         </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
