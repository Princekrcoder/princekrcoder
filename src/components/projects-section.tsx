
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
  return (
    <section id="projects" className="py-20 md:py-32 bg-gradient-to-b from-slate-950 to-black">
        <div className="container mx-auto max-w-3xl px-4 text-center mb-16">
            <h2 className="font-headline text-4xl font-bold tracking-tight">Featured Projects</h2>
            <p className="mt-4 text-lg text-muted-foreground">
                See how I transformed concepts into engaging digital experiences.
            </p>
        </div>
        <div className="container mx-auto max-w-3xl px-4 mt-12 space-y-[-22rem]">
          {projects.map((project, i) => {
            return (
              <motion.div
                key={project.title}
                style={{
                  zIndex: projects.length - i,
                  transformOrigin: 'top center',
                  top: `calc(${i * 3}rem)`,
                }}
                animate={{ 
                  scale: `calc(1 - ${0.1 * (projects.length - 1 - i)})`,
                  y: `calc(${i * -1}rem)`,
                }}
                className="sticky w-full"
              >
                <ProjectCard project={project} />
              </motion.div>
            );
          })}
        </div>
    </section>
  );
}
