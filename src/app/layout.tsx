import type {Metadata} from 'next';
import './globals.css';
import { cn } from '@/lib/utils';
import { Toaster } from "@/components/ui/toaster";
import { SpaceAnimation } from '@/components/space-animation';

export const metadata: Metadata = {
  title: 'Prince Kumar | Developer & DSA Enthusiast',
  description: "Prince Kumar's personal portfolio. A full stack developer and problem solver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark !scroll-smooth">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg viewBox='0 0 48 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3ClinearGradient id='logoGradient' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop offset='0%25' stop-color='%23a855f7' /%3E%3Cstop offset='100%25' stop-color='%236d28d9' /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='48' height='48' rx='8' fill='url(%23logoGradient)' /%3E%3Ctext x='50%25' y='52%25' dominant-baseline='middle' text-anchor='middle' font-size='24' font-weight='bold' fill='white' font-family='sans-serif'%3EPK%3C/text%3E%3C/svg%3E" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={cn('font-body antialiased min-h-screen bg-background')}>
        <SpaceAnimation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
