'use client';

import React from 'react';
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
    title: 'Social Media App',
    company: 'Connect Inc.',
    year: '2023',
    achievements: [
      'Increased user engagement by 25% with real-time chat and notifications.',
      'Implemented secure authentication, protecting over 10,000 user accounts.',
      'Managed scalable media uploads using cloud storage solutions.',
    ],
    live: '#',
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
  },
];


export function ProjectsSection() {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="projects" className="relative pb-20 md:pb-32">
      <div className="container mx-auto max-w-7xl px-4 text-center py-20 md:py-32">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground">Featured Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      {/* Increased height to allow for more scroll distance for the animation */}
      <div ref={ref} className="container mx-auto max-w-3xl relative h-[300vh]">
        {projects.map((project, i) => {
          // Cards at the back of the stack are smaller and scale up as they come to the front.
          const targetScale = 1 - (projects.length - i - 1) * 0.05;
          const scale = useTransform(scrollYProgress, [0, 1], [targetScale, 1]);

          // Animate the vertical position to create the initial distance and then overlap.
          const initialSeparation = 12; // rem
          const finalOverlap = 4; // rem
          const top = useTransform(
            scrollYProgress,
            [0, 1],
            [`${i * initialSeparation}rem`, `${i * finalOverlap}rem`]
          );

          return (
            <motion.div
              key={project.title}
              style={{
                position: 'sticky',
                top: top,
                scale,
              }}
              className="w-full origin-top"
            >
              <ProjectCard project={project} />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
