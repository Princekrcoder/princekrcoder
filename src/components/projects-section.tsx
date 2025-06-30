
'use client';

import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
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
    {
    title: 'Recipe Finder',
    company: 'Cuisine Finder',
    year: '2022',
    features: [
      'Search recipes by ingredients',
      'Save favorite recipes',
      'Nutritional information display',
    ],
    image: 'https://picsum.photos/seed/recipe/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'cooking food'
  },
  {
    title: 'URL Shortener',
    company: 'Linkly',
    year: '2021',
    features: [
      'Custom short URLs',
      'Link click analytics',
      'API for integration',
    ],
    image: 'https://picsum.photos/seed/url/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'internet technology'
  },
  {
    title: 'Chat Application',
    company: 'QuickChat',
    year: '2023',
    features: [
      'Real-time messaging with WebSockets',
      'Group chat functionality',
      'Typing indicators and read receipts',
    ],
    image: 'https://picsum.photos/seed/chat/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'communication chat'
  },
  {
    title: 'Fitness Tracker',
    company: 'FitTrack',
    year: '2022',
    features: [
      'Log workouts and exercises',
      'Track personal records',
      'Progress charts and visualizations',
    ],
    image: 'https://picsum.photos/seed/fitness/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'health fitness'
  },
  {
    title: 'Crypto Tracker',
    company: 'CoinWatch',
    year: '2023',
    features: [
      'Live cryptocurrency prices',
      'Portfolio value tracking',
      'Historical price charts',
    ],
    image: 'https://picsum.photos/seed/crypto/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'cryptocurrency investment'
  },
  {
    title: 'Learning Platform',
    company: 'EduPro',
    year: '2024',
    features: [
      'Video course streaming',
      'Interactive quizzes and assignments',
      'Student progress tracking',
    ],
    image: 'https://picsum.photos/seed/learn/800/600',
    github: 'https://github.com/Princekrcoder',
    live: '#',
    aiHint: 'education online'
  },
];


export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">My Projects</h2>
          <p className="mt-2 text-lg text-muted-foreground">Here are some of the projects I've worked on.</p>
        </div>
      </div>
      <div ref={containerRef} className="relative" style={{ height: `${projects.length * 100}vh` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
            {projects.map((project, index) => {
              const targetScale = 1 - ((projects.length - index) * 0.05);
              return (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  progress={scrollYProgress}
                  range={[index / projects.length, (index + 1) / projects.length]}
                  targetScale={targetScale}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
}
