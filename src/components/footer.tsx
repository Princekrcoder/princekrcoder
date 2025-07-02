
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail } from 'lucide-react';
import { DiscordIcon } from '@/components/icons/discord-icon';

export function Footer() {
  return (
    <footer id="contact" className="border-t py-12">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center md:flex-row md:items-start">
        <div className="flex flex-col items-center md:items-start">
            <h3 className="font-headline text-2xl font-bold">Get in Touch</h3>
            <p className="text-muted-foreground mt-1 max-w-sm">
                I'm always open to discussing new projects or opportunities. Feel free to reach out.
            </p>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com/Princekrcoder" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://www.linkedin.com/in/princekrcoder" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
            </Link>
          </Button>
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://discord.gg/vnD58kAN" target="_blank" rel="noopener noreferrer" aria-label="Discord">
              <DiscordIcon className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="mailto:princekr2840@gmail.com" aria-label="Email">
              <Mail className="h-6 w-6" />
            </Link>
          </Button>
        </div>
      </div>
       <div className="container mx-auto mt-8 max-w-7xl px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Prince Kumar. All Rights Reserved.
      </div>
    </footer>
  );
}
