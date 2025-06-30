
'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ProjectCard } from './project-card';

const projects = [
  {
    title: 'E-commerce Platform',
    company: 'Retail Co.',
    year: '2023',
    features: [
      'Enhanced user experience by 40%',
      'Improved site speed by 50%',
      'Increased mobile traffic by 35%',
    ],
    live: '#',
  },
  {
    title: 'Social Media App',
    company: 'Connect Inc.',
    year: '2023',
    features: [
      'Real-time feed updates',
      'Secure user authentication',
      'Image and video uploads',
    ],
    live: '#',
  },
    {
    title: 'Task Management Tool',
    company: 'Productive Solutions',
    year: '2022',
    features: [
      'Drag-and-drop Kanban board',
      'Team collaboration features',
      'Customizable notifications',
    ],
    live: '#',
  },
  {
    title: 'Blogging Platform',
    company: 'Writers Guild',
    year: '2022',
    features: [
      'Markdown editor for posts',
      'SEO-friendly article structure',
      'Comment and discussion threads',
    ],
    live: '#',
  },
  {
    title: 'Portfolio Generator',
    company: 'DevFolio AI',
    year: '2024',
    features: [
      'AI-powered content suggestions',
      'Multiple modern templates',
      'One-click deployment',
    ],
    live: '#',
  },
  {
    title: 'Weather App',
    company: 'AtmoCast',
    year: '2021',
    features: [
      'Real-time weather data',
      '7-day forecast view',
      'Geolocation for local weather',
    ],
    live: '#',
  },
];


export function ProjectsSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"],
    });

    const PEEK_HEIGHT = 64;

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-black">
        <div className="container mx-auto max-w-3xl px-4 text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                A selection of my work that showcases my skills and passion for development.
            </p>
        </div>
        <div ref={containerRef} className="container mx-auto max-w-3xl px-4 mt-12 relative h-[400vh]">
          {projects.map((project, i) => {
            const y = useTransform(
                scrollYProgress,
                [0, 1],
                [`${i * PEEK_HEIGHT}px`, `${(i - projects.length) * PEEK_HEIGHT}px`]
            );
            
            return (
              <motion.div
                key={project.title}
                style={{
                  y,
                  zIndex: projects.length - i,
                }}
                className="sticky top-28 md:top-36"
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>
    </section>
  );
}
