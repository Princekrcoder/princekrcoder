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
        <link rel="icon" href="data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='32' height='32' rx='6' fill='%232A2A2A'/%3E%3Cpath d='M18 6L12 16H17L16 26L22 14H17L18 6Z' stroke='url(%23paint0_linear_1_2)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear_1_2' x1='12' y1='6' x2='22' y2='26' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FBBF24'/%3E%3Cstop offset='1' stop-color='%23F472B6'/%3E%3C/linearGradient%3E%3C/defs%3E%3C/svg%3E" />
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
