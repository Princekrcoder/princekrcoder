'use client';

import React from 'react';
import { ProjectCard } from './project-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'NexusPay - Global E-commerce Platform',
    company: 'Retail Co.',
    year: '2023',
    achievements: [
      'Led frontend development for a redesign, boosting page load speed by 40% and conversion rates by 15%.',
      'Architected a scalable state management solution using Redux Toolkit for complex user session and cart logic.',
      'Integrated Stripe API for secure, multi-currency payment processing across 50+ countries.',
    ],
    live: 'https://github.com/Princekrcoder',
    category: 'web-development',
  },
  {
    title: 'InsightHub - Dynamic Blogging & CMS',
    company: 'NextGen Media',
    year: '2023',
    achievements: [
        'Built a high-performance, SEO-optimized blog platform with Next.js and a headless CMS (Sanity).',
        'Implemented Incremental Static Regeneration (ISR) to deliver fast page loads with dynamic content.',
        'Designed a custom rich text editor with collaborative features, improving the content creation workflow.',
    ],
    live: 'https://github.com/Princekrcoder',
    category: 'web-development',
  },
    {
    title: 'QuantumLeap - CI/CD & Cloud Infrastructure',
    company: 'DevOps Solutions',
    year: '2022',
    achievements: [
      'Automated build, test, and deployment pipelines with GitHub Actions, cutting manual deployment time by 90%.',
      'Provisioned and managed scalable cloud infrastructure on AWS using Terraform, ensuring 99.9% uptime.',
      'Implemented a containerization strategy with Docker and Kubernetes to streamline development.',
    ],
    live: 'https://github.com/Princekrcoder',
    category: 'devops',
  },
  {
    title: 'Aura - AI-Powered Code Assistant',
    company: 'DevTools Inc.',
    year: '2024',
    achievements: [
      'Engineered a real-time code completion engine using a fine-tuned LLM, increasing developer productivity by 25%.',
      'Built a scalable WebSocket architecture for low-latency suggestions directly in VS Code.',
      'Designed a secure authentication system with NextAuth.js to protect user data and codebase access.',
    ],
    live: 'https://github.com/Princekrcoder',
    category: 'ai-ml',
  },
  {
    title: 'AlgoVisualizer - DSA Learning Tool',
    company: 'Open Source',
    year: '2022',
    achievements: [
        'Created an interactive educational tool to visualize complex algorithms like pathfinding and sorting.',
        'Engineered with React for a dynamic UI and C++ for core logic, compiled to WebAssembly for performance.',
        'Attracted over 10,000 users in its first month and grew a community of open-source contributors.',
    ],
    live: 'https://github.com/Princekrcoder',
    category: 'others',
  },
];


export function ProjectsSection() {
    return (
        <section id="projects" className="py-20 md:py-32">
             <div className="container mx-auto max-w-7xl px-4">
                <div className="mb-16 text-center">
                    <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground">
                        Featured Projects
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground">
                        See how I transformed concepts into engaging digital experiences.
                    </p>
                </div>
            </div>
            <div className="container mx-auto max-w-3xl px-4 flex flex-col items-center gap-10 pb-[50vh]">
              {projects.map((project, i) => (
                  <ProjectCard i={i} {...project} key={i} />
              ))}
            </div>
            <div className="container mx-auto flex justify-center -mt-48">
              <Button asChild size="lg">
                <Link href="https://github.com/Princekrcoder?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  View More Projects
                </Link>
              </Button>
            </div>
        </section>
    );
}
