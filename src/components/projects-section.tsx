'use client';

import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';
import { Button } from '@/components/ui/button';

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
    category: 'web-development',
  },
  {
    title: 'CI/CD Pipeline Automation',
    company: 'DevOps Solutions',
    year: '2022',
    achievements: [
      'Automated deployment pipelines, reducing release times by 60%.',
      'Implemented containerization with Docker for consistent environments.',
      'Set up comprehensive monitoring with Prometheus and Grafana.',
    ],
    live: '#',
    category: 'devops',
  },
  {
    title: 'Customer Churn Prediction',
    company: 'Insight AI',
    year: '2023',
    achievements: [
      'Developed a machine learning model to predict customer churn with 92% accuracy.',
      'Used scikit-learn for model training and evaluation.',
      'Created an API with Flask to serve predictions in real-time.',
    ],
    live: '#',
    category: 'ai-ml',
  },
  {
    title: 'Open Source Contribution',
    company: 'Community Project',
    year: '2024',
    achievements: [
      'Contributed features and bug fixes to a popular open-source library.',
      'Improved documentation, making it more accessible to new users.',
      'Collaborated with a global team of developers to enhance project quality.',
    ],
    live: '#',
    category: 'others',
  },
  {
    title: 'Another Web Project',
    company: 'Web Wizards',
    year: '2024',
    achievements: [
      'Built a highly interactive single-page application using React and Redux.',
      'Integrated with various third-party APIs for extended functionality.',
      'Achieved a Lighthouse performance score of 95+.',
    ],
    live: '#',
    category: 'web-development',
  },
];

const categories = ['all', 'web-development', 'devops', 'ai-ml', 'others'];

export function ProjectsSection() {
  const [filter, setFilter] = useState('all');

  const filteredProjects = useMemo(() => {
    if (filter === 'all') {
      return projects;
    }
    return projects.filter((project) => project.category === filter);
  }, [filter]);

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

        <div className="flex justify-center items-center gap-2 md:gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'ghost'}
              onClick={() => setFilter(category)}
              className="capitalize rounded-full px-6 transition-all duration-300"
            >
              {category.replace('-', ' ')}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
