import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CodeXml, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { SkillsSection } from '@/components/skills-section';
import { DeveloperAnimation } from '@/components/developer-animation';
import { ProjectCard } from '@/components/project-card';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce website with product listings, shopping cart, and payment integration.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Next.js', 'React', 'Node.js', 'MongoDB'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'online shopping'
  },
  {
    title: 'Social Media App',
    description: 'A social networking application where users can post updates, follow others, and interact with content.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React Native', 'Firebase', 'Express'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'social network'
  },
  {
    title: 'Task Management Tool',
    description: 'A Kanban-style task manager to help teams organize their workflow and track progress.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'Redux', 'Tailwind CSS'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'project management'
  },
  {
    title: 'Blogging Platform',
    description: 'A simple and elegant platform for writers to publish their articles and reach a wider audience.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Gatsby', 'GraphQL', 'Markdown'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'writing reading'
  },
  {
    title: 'Portfolio Generator',
    description: 'An AI-powered tool that helps developers create a professional portfolio in minutes.',
    image: 'https://placehold.co/600x400.png',
    tags: ['AI', 'Next.js', 'Vercel'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'web design'
  },
  {
    title: 'Weather App',
    description: 'A clean weather application that provides real-time forecasts using a third-party API.',
    image: 'https://placehold.co/600x400.png',
    tags: ['React', 'API', 'CSS Modules'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'weather forecast'
  },
    {
    title: 'Recipe Finder',
    description: 'Find thousands of recipes based on ingredients you have at home.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Vue.js', 'API', 'Spoonacular'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'cooking food'
  },
  {
    title: 'URL Shortener',
    description: 'A microservice to create shortened URLs, similar to Bitly.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Node.js', 'Express', 'SQLite'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'internet technology'
  },
  {
    title: 'Chat Application',
    description: 'A real-time chat application using WebSockets for instant messaging.',
    image: 'https://placehold.co/600x400.png',
    tags: ['Socket.IO', 'React', 'Node.js'],
    github: 'https://github.com',
    live: '#',
    aiHint: 'communication chat'
  },
  {
    title: 'Fitness Tracker',
    description: 'An app to log workouts, track progress, and set fitness goals.',
    image: 'https://placehold.co/600x400.png',
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
          Prince Kumar
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground">
          Full Stack Developer & Problem Solver. Pursuing BCA at Patliputra University (2022-2025).
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
        <section id="about" className="py-16 md:py-24">
            <div className="container mx-auto max-w-7xl px-4">
                <div className="grid md:grid-cols-3 gap-12 items-center">
                    <div className="md:col-span-1">
                        <Card className="overflow-hidden shadow-lg">
                            <CardContent className="p-8 text-center bg-card">
                                <CodeXml className="mx-auto h-16 w-16 text-primary mb-4" />
                                <h3 className="font-headline text-5xl font-bold">600+</h3>
                                <p className="text-muted-foreground">DSA Problems Solved in C++</p>
                            </CardContent>
                        </Card>
                    </div>
                    <div className="md:col-span-2">
                        <h2 className="font-headline text-3xl font-bold tracking-tight mb-4">About Me</h2>
                        <p className="text-muted-foreground text-lg leading-relaxed">
                            I am a passionate and dedicated full-stack developer with a strong foundation in computer science. My journey in technology is driven by a love for problem-solving and building efficient, scalable applications. I thrive on challenges and have honed my analytical skills by solving over 600 Data Structures and Algorithms problems using C++.
                        </p>
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
