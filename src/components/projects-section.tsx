
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';

const projects = [
  {
    title: 'E-commerce Platform',
    company: 'Retail Co.',
    year: '2023',
    features: [
      'Built with Next.js for high performance.',
      'Integrated Stripe for secure payments.',
      'Deployed on Vercel with CI/CD.',
    ],
    live: '#',
  },
  {
    title: 'Social Media App',
    company: 'Connect Inc.',
    year: '2023',
    features: [
      'Real-time feed updates with WebSockets.',
      'Secure user authentication via JWT.',
      'Image and video uploads to cloud storage.',
    ],
    live: '#',
  },
    {
    title: 'Task Management Tool',
    company: 'Productive Solutions',
    year: '2022',
    features: [
      'Drag-and-drop Kanban board functionality.',
      'Team collaboration features.',
      'Customizable notifications and alerts.',
    ],
    live: '#',
  },
  {
    title: 'Blogging Platform',
    company: 'Writers Guild',
    year: '2022',
    features: [
      'Markdown editor for creating posts.',
      'SEO-friendly article structure.',
      'Comment and discussion threads.',
    ],
    live: '#',
  },
];


export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-black">
        <div className="container mx-auto max-w-7xl px-4 text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                See how I transformed concepts into engaging digital experiences.
            </p>
        </div>
        <div className="container mx-auto max-w-3xl px-4 mt-12 space-y-[-22rem] md:space-y-[-24rem] pb-24">
          {projects.map((project, i) => {
            return (
              <motion.div
                key={project.title}
                className="sticky w-full"
                style={{
                  top: `calc(10vh + ${i * 2}rem)`,
                  zIndex: i + 1,
                }}
                 initial={{ opacity: 0.5, y: 50, scale: 0.95 }}
                 whileInView={{ opacity: 1, y: 0, scale: 1 }}
                 viewport={{ once: true, amount: 0.3 }}
                 transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>
    </section>
  );
}
