
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

    const PEEK_HEIGHT = -48; // Negative value to stack cards on top of each other.

  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-black">
        <div className="container mx-auto max-w-3xl px-4 text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                A selection of my work that showcases my skills and passion for development.
            </p>
        </div>
        <div ref={containerRef} className="container mx-auto max-w-3xl px-4 mt-12 relative h-[500vh]">
          {/* By reversing the projects array, the last project becomes the first one to be mapped.
              This allows us to give it the highest z-index, placing it on top of the stack. */}
          {projects.slice().reverse().map((project, i) => {
            
            // The transform maps scroll progress (0 to 1) to a Y translation.
            // Each card starts stacked on top of the previous one (due to negative PEEK_HEIGHT).
            // As you scroll, each card moves up and away, with the top card moving the fastest.
            const y = useTransform(
                scrollYProgress,
                [0, 1],
                [`${i * PEEK_HEIGHT}px`, `-${(projects.length - i) * 200}px`]
            );
            
            return (
              <motion.div
                key={project.title}
                style={{
                  y,
                  zIndex: projects.length - i,
                }}
                className="sticky top-28 md:top-36 w-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>
    </section>
  );
}
