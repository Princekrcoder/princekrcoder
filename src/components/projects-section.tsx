
'use client';

import React from 'react';
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
    image: 'https://placehold.co/800x600.png',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'e-commerce website'
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
    image: 'https://picsum.photos/seed/social/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'social network'
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
    image: 'https://picsum.photos/seed/task/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'project management'
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
    image: 'https://picsum.photos/seed/blog/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'writing reading'
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
    image: 'https://picsum.photos/seed/portfolio/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'web design'
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
    image: 'https://picsum.photos/seed/weather/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'weather forecast'
  },
];


export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">My Projects</h2>
          <p className="mt-2 text-lg text-muted-foreground">Here are some of the projects I've worked on.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                />
            ))}
        </div>
      </div>
    </section>
  );
}
