'use client';

import React from 'react';
import { ProjectCard } from './project-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'LearnSphere - Online Learning Management System',
    achievements: [
      'Developed a full-featured LMS with Next.js, enabling course creation, student enrollment, and progress tracking.',
      'Built a secure MERN stack backend with user authentication and role-based access control (students, instructors).',
      'Designed a responsive and intuitive UI with Tailwind CSS for a seamless learning experience across devices.',
    ],
    live: 'https://github.com/Princekrcoder',
    category: 'web-development',
  },
  {
    title: 'NexusAdmin - Comprehensive Admin Dashboard',
    achievements: [
        'Architected a powerful admin panel for data visualization and content management using Next.js.',
        'Implemented secure RESTful APIs on a Node.js/Express backend to manage users, products, and site analytics.',
        'Utilized Tailwind CSS to create a clean, data-driven interface with customizable widgets and reports.',
    ],
    live: 'https://github.com/Princekrcoder',
    category: 'web-development',
  },
    {
    title: 'TaskFlow - Collaborative Project Management Tool',
    achievements: [
      'Created a Kanban-style project management tool with drag-and-drop functionality using React and Next.js.',
      'Developed real-time collaboration features with a MERN stack backend for assignments and comments.',
      'Ensured a responsive and user-friendly design with Tailwind CSS to improve team productivity.',
    ],
    live: 'https://github.com/Princekrcoder',
    category: 'web-development',
  },
  {
    title: 'ShopWise - Modern E-commerce Platform',
    achievements: [
      'Built a complete MERN stack e-commerce site with product catalogs, shopping cart, and secure checkout.',
      'Leveraged Next.js for server-side rendering (SSR) to enhance SEO and initial page load performance.',
      'Styled the entire application with Tailwind CSS for a pixel-perfect and fully responsive online store.',
    ],
    live: 'https://github.com/Princekrcoder',
    category: 'web-development',
  },
  {
    title: 'RealtyConnect - Real Estate Marketplace',
    achievements: [
        'Developed a Next.js real estate app with advanced property search, filtering, and map integration.',
        'Engineered a robust MERN stack backend to manage property listings, user profiles, and inquiries.',
        'Designed an elegant and responsive interface with Tailwind CSS for an optimal property viewing experience.',
    ],
    live: 'https://github.com/Princekrcoder',
    category: 'web-development',
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
