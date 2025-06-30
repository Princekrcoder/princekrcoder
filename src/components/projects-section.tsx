'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';

const projects = [
  {
    title: 'E-commerce Platform',
    company: 'Retail Co.',
    year: '2023',
    achievements: [
      'Boosted conversion rates by 15% with a streamlined checkout process.',
      'Reduced page load times by 40% through server-side rendering with Next.js.',
      'Ensured 99.9% uptime by deploying on a scalable Vercel architecture.',
    ],
    live: '#',
    imageSrc: 'https://placehold.co/800x600.png',
    imageHint: 'e-commerce website',
  },
  {
    title: 'Social Media App',
    company: 'Connect Inc.',
    year: '2023',
    achievements: [
      'Increased user engagement by 25% with real-time chat and notifications.',
      'Implemented secure authentication, protecting over 10,000 user accounts.',
      'Managed scalable media uploads using cloud storage solutions.',
    ],
    live: '#',
    imageSrc: 'https://placehold.co/800x600.png',
    imageHint: 'social media feed',
  },
  {
    title: 'Task Management Tool',
    company: 'Productive Solutions',
    year: '2022',
    achievements: [
      'Improved team productivity by 30% with an intuitive drag-and-drop interface.',
      'Enabled seamless collaboration with real-time updates and commenting.',
      'Delivered critical reminders with a customizable notification system.',
    ],
    live: '#',
    imageSrc: 'https://placehold.co/800x600.png',
    imageHint: 'kanban board',
  },
];


export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-black">
        <div className="container mx-auto max-w-7xl px-4 text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight text-white">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                See how I transformed concepts into engaging digital experiences.
            </p>
        </div>
        <div className="container mx-auto max-w-5xl px-4 mt-12 space-y-16">
          {projects.map((project, i) => {
            return (
              <motion.div
                key={project.title}
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>
    </section>
  );
}
