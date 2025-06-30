
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CodeXml, Github, Linkedin, ArrowUpRight, BrainCircuit, Briefcase, LayoutTemplate, ServerCog, Rocket, Lightbulb, Mail, Handshake } from 'lucide-react';
import { SkillsSection } from '@/components/skills-section';
import { DeveloperAnimation } from '@/components/developer-animation';
import { ProjectsSection } from '@/components/projects-section';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { DiscordIcon } from '@/components/icons/discord-icon';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
             <Link href="https://discord.gg/vnD58kAN" target="_blank" rel="noopener noreferrer" aria-label="Join my Discord" className="fixed bottom-8 right-8 z-50 text-primary transition-transform duration-300 hover:scale-125 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring">
              <DiscordIcon className="h-10 w-10" />
            </Link>
          </TooltipTrigger>
          <TooltipContent side="left" sideOffset={10}>
            <p>Join my Discord</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="font-headline text-xl font-bold text-primary">
          Princefolio
        </Link>
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <Link href="#about" className="transition-colors hover:text-primary">About</Link>
          <Link href="#services" className="transition-colors hover:text-primary">Services</Link>
          <Link href="#skills" className="transition-colors hover:text-primary">Skills</Link>
          <Link href="#projects" className="transition-colors hover:text-primary">Projects</Link>
          <Link href="#contact" className="transition-colors hover:text-primary">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="container mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-20 text-center md:py-32">
      <DeveloperAnimation />
      <div className="flex flex-col gap-2">
        <h1 className="font-headline text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">
            Hi, I'm Prince Kumar
          </span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          I create stellar web experiences with modern technologies. Specializing in front-end development, I build interfaces that are both beautiful and functional.
        </p>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="https://github.com/Princekrcoder" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="https://www.linkedin.com/in/princekrcoder" target="_blank" rel="noopener noreferrer">
            <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
          </Link>
        </Button>
      </div>
    </section>
  );
}

function AboutSection() {
    return (
        <section id="about" className="py-20 md:py-32">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="text-center mb-16">
                    <h2 className="font-headline text-4xl font-bold tracking-tight">
                        About <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Me</span>
                    </h2>
                </div>
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="flex flex-col gap-6">
                        <h3 className="font-headline text-2xl font-bold">Passionate Web Developer & Tech Creator</h3>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            With 2 years of freelancing experience in web development, I specialize in building responsive and high-performance web applications using modern technologies.
                        </p>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I’ve completed 20+ diverse projects, and I’m passionate about solving real-world problems through clean and efficient code. I continuously enhance my skills to stay current in the ever-evolving tech landscape.
                        </p>
                        <div className="flex gap-4 mt-4">
                            <Button asChild size="lg">
                                <Link href="#contact">Get In Touch</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">Download CV</Link>
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8">
                        <div className="flex items-start gap-4 p-6 bg-card/50 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300">
                            <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                                <CodeXml className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Web Development</h4>
                                <p className="text-muted-foreground mt-1">Creating responsive websites and web applications with modern frameworks.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-card/50 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300">
                            <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                                <BrainCircuit className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Problem Solving (DSA)</h4>
                                <p className="text-muted-foreground mt-1">Solved 600+ DSA problems in C++, showcasing strong algorithmic and logical thinking.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 p-6 bg-card/50 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300">
                            <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold">Freelance Project Delivery</h4>
                                <p className="text-muted-foreground mt-1">Successfully delivered 20+ client projects, managing everything from development to deployment.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-card/20">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="text-center mb-16">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            My <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">What I can do for you.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center p-8 bg-card/50 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <LayoutTemplate className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Frontend Development</h3>
            <p className="text-muted-foreground">
              Crafting beautiful and responsive user interfaces with modern technologies like React, Next.js, and Tailwind CSS.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-card/50 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <ServerCog className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Backend Development</h3>
            <p className="text-muted-foreground">
              Building robust, scalable server-side logic and APIs using Node.js, Express, and databases like MongoDB and Firebase.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-card/50 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <Rocket className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Full-Stack Solutions</h3>
            <p className="text-muted-foreground">
              Providing end-to-end development services, from concept and design to deployment and maintenance.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-card/50 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <Lightbulb className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Career Coach</h3>
            <p className="text-muted-foreground">
              Providing guidance and mentorship to aspiring developers, helping them navigate their career path and land their dream job.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-card/50 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <Briefcase className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Portfolio or Resume Website</h3>
            <p className="text-muted-foreground">
              Personal branding websites to showcase your skills, resume, and projects. I build SEO-optimized developer portfolios and freelancer resume websites.
            </p>
          </div>
          <div className="flex flex-col items-center text-center p-8 bg-card/50 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2">
            <div className="p-4 bg-primary/10 rounded-full mb-4">
              <Handshake className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Open Source Contribution Help</h3>
            <p className="text-muted-foreground">
              I help projects grow by contributing clean code, fixing bugs, and documenting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t py-12">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 text-center md:flex-row md:items-start">
        <div className="flex flex-col items-center md:items-start">
            <h3 className="font-headline text-2xl font-bold">Get in Touch</h3>
            <p className="text-muted-foreground mt-1 max-w-sm">
                I'm always open to discussing new projects or opportunities. Feel free to reach out.
            </p>
             <div className="flex items-center gap-2 mt-4">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <a href="mailto:princekr2840@gmail.com" className="font-medium hover:text-primary transition-colors">
                    princekr2840@gmail.com
                </a>
            </div>
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
        </div>
      </div>
       <div className="container mx-auto mt-8 max-w-7xl px-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Prince Kumar. All Rights Reserved.
      </div>
    </footer>
  );
}

    