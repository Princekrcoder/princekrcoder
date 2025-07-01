'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
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
  },
  {
    title: 'Project Management Tool',
    company: 'Productive Solutions',
    year: '2022',
    achievements: [
      'Improved team productivity by 30% with an intuitive drag-and-drop interface.',
      'Enabled seamless collaboration with real-time updates and commenting.',
      'Delivered critical reminders with a customizable notification system.',
    ],
    live: '#',
  },
   {
    title: 'Content-Rich Blog Platform',
    company: 'StoryWeave',
    year: '2023',
    achievements: [
      'Engineered a dynamic blog with markdown support for easy content creation.',
      'Optimized for SEO, resulting in a 50% increase in organic traffic.',
      'Integrated a secure user authentication system for writers and editors.',
    ],
    live: '#',
  },
  {
    title: 'Personal Portfolio Website',
    company: 'Freelance',
    year: '2024',
    achievements: [
      'Designed a visually striking portfolio with a fully responsive layout.',
      'Showcased projects with an interactive and engaging user interface.',
      'Built with Next.js for exceptional performance and fast load times.',
    ],
    live: '#',
  },
];

export function ProjectsSection() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="projects" className="py-20 md:py-32">
        <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-16 text-center">
                <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground">Featured Projects</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    See how I transformed concepts into engaging digital experiences.
                </p>
            </div>
        </div>

        <div ref={targetRef} className="relative h-[300vh] w-full">
            <div className="sticky top-20 flex h-screen items-start justify-center">
                {projects.map((project, i) => {
                    const scale = useTransform(
                        scrollYProgress,
                        [i * 0.2, (i + 1) * 0.2],
                        [1, 0.8]
                    );

                    const y = useTransform(
                        scrollYProgress,
                        [i * 0.2, (i + 1) * 0.2],
                        ['0rem', `${i * -2 + 2}rem`]
                    );

                    return (
                        <motion.div
                            key={project.title}
                            style={{
                                position: 'sticky',
                                top: `${10 + i * 2}rem`,
                                zIndex: projects.length - i,
                                scale: scale,
                                y: y,
                            }}
                            className="w-[90vw] max-w-4xl"
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    </section>
  );
}