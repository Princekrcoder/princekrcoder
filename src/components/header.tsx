
import Link from 'next/link';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="font-headline text-xl font-bold text-primary">
          Princefolio
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="/#about" className="transition-colors hover:text-primary">About</Link>
          <Link href="/#services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="/#skills" className="transition-colors hover:text-primary">Skills</Link>
          <Link href="/projects" className="transition-colors hover:text-primary">Projects</Link>
          <Link href="/#contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
