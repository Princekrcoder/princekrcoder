
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Github, Linkedin, ArrowUpRight, BrainCircuit, Briefcase, MessageSquare } from 'lucide-react';
import { SkillsSection } from '@/components/skills-section';
import { DeveloperAnimation } from '@/components/developer-animation';
import { ProjectCard } from '@/components/project-card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, shopping cart, and payment integration.',
    image: 'https://picsum.photos/seed/ecommerce/600/400',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'e-commerce website'
  },
  {
    title: 'Social Media App',
    description: 'A social networking application where users can post updates, follow others, and interact with content.',
    image: 'https://picsum.photos/seed/social/600/400',
    tags: ['React Native', 'Firebase', 'Express'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'social network'
  },
  {
    title: 'Task Management Tool',
    description: 'A Kanban-style task manager to help teams organize their workflow and track progress.',
    image: 'https://picsum.photos/seed/task/600/400',
    tags: ['React', 'Redux', 'Tailwind CSS'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'project management'
  },
  {
    title: 'Blogging Platform',
    description: 'A simple and elegant platform for writers to publish their articles and reach a wider audience.',
    image: 'https://picsum.photos/seed/blog/600/400',
    tags: ['Gatsby', 'GraphQL', 'Markdown'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'writing reading'
  },
  {
    title: 'Portfolio Generator',
    description: 'An AI-powered tool that helps developers create a professional portfolio in minutes.',
    image: 'https://picsum.photos/seed/portfolio/600/400',
    tags: ['AI', 'Next.js', 'Vercel'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'web design'
  },
  {
    title: 'Weather App',
    description: 'A clean weather application that provides real-time forecasts using a third-party API.',
    image: 'https://picsum.photos/seed/weather/600/400',
    tags: ['React', 'API', 'CSS Modules'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'weather forecast'
  },
    {
    title: 'Recipe Finder',
    description: 'Find thousands of recipes based on ingredients you have at home.',
    image: 'https://picsum.photos/seed/recipe/600/400',
    tags: ['Vue.js', 'API', 'Spoonacular'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'cooking food'
  },
  {
    title: 'URL Shortener',
    description: 'A microservice to create shortened URLs, similar to Bitly.',
    image: 'https://picsum.photos/seed/url/600/400',
    tags: ['Node.js', 'Express', 'SQLite'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'internet technology'
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application using WebSockets for instant messaging.',
    image: 'https://picsum.photos/seed/chat/600/400',
    tags: ['Socket.IO', 'React', 'Node.js'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'communication chat'
  },
  {
    title: 'Fitness Tracker',
    description: 'An app to log workouts, track progress, and set fitness goals.',
    image: 'https://picsum.photos/seed/fitness/600/400',
    tags: ['JavaScript', 'HTML5', 'Chart.js'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'health fitness'
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
      </main>
      <Footer />
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button asChild className="fixed bottom-8 right-8 z-50 h-16 w-16 rounded-full shadow-lg transition-transform hover:scale-110" size="icon">
              <Link href="#contact" aria-label="Get in touch">
                <MessageSquare className="h-8 w-8" />
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Get in touch</p>
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
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className="mr-2 h-4 w-4" /> GitHub
          </Link>
        </Button>
        <Button variant="secondary" asChild>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
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

function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">My Projects</h2>
          <p className="mt-2 text-lg text-muted-foreground">Here are some of the projects I've worked on.</p>
        </div>
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t py-12">
      <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center md:flex-row">
        <div className="flex flex-col items-center md:items-start">
            <h3 className="font-headline text-2xl font-bold">Get in Touch</h3>
            <p className="text-muted-foreground mt-1">
                Let's build something amazing together.
            </p>
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-6 w-6" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-6 w-6" />
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
