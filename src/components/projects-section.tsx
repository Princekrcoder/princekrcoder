'use client';

import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';
import { Button } from './ui/button';

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
    title: 'Project Management Tool',
    company: 'Productive Solutions',
    year: '2022',
    achievements: [
      'Improved team productivity by 30% with an intuitive drag-and-drop interface.',
      'Enabled seamless collaboration with real-time updates and commenting.',
      'Delivered critical reminders with a customizable notification system.',
    ],
    live: '#',
    category: 'web-development',
  },
  {
    title: 'CI/CD Pipeline Automation',
    company: 'DevOps Solutions',
    year: '2023',
    achievements: [
      'Automated deployment process, reducing deployment time by 80%.',
      'Integrated automated testing to ensure code quality before release.',
      'Set up monitoring and logging for production environments.',
    ],
    live: '#',
    category: 'devops',
  },
  {
    title: 'Real-Time Chat Application',
    company: 'Instant Messenger',
    year: '2022',
    achievements: [
      'Implemented WebSocket for instant message delivery and real-time updates.',
      'Ensured end-to-end encryption for secure private conversations.',
      'Developed a user-friendly interface with support for group chats and media sharing.',
    ],
    live: '#',
    category: 'web-development',
  },
  {
    title: 'Image Recognition API',
    company: 'AI Vision Inc.',
    year: '2024',
    achievements: [
      'Developed a REST API for image classification using TensorFlow and Keras.',
      'Achieved 95% accuracy on the test dataset for object detection.',
      'Containerized the model and API using Docker for easy deployment.',
    ],
    live: '#',
    category: 'ai-ml',
  },
  {
    title: 'Infrastructure as Code Setup',
    company: 'CloudWorks',
    year: '2022',
    achievements: [
      'Managed cloud infrastructure using Terraform for AWS.',
      'Automated server provisioning and configuration management.',
      'Implemented cost-saving strategies by optimizing cloud resources.',
    ],
    live: '#',
    category: 'devops',
  },
  {
    title: 'Sentiment Analysis Tool',
    company: 'Data Insights',
    year: '2023',
    achievements: [
      'Built a tool to analyze customer feedback from social media using NLP.',
      'Visualized sentiment trends with interactive charts and graphs.',
      'Used Python, NLTK, and Scikit-learn for the analysis model.',
    ],
    live: '#',
    category: 'ai-ml',
  },
  {
    title: 'Open Source CLI Tool',
    company: 'Community Project',
    year: '2021',
    achievements: [
      'Developed a command-line tool to scaffold new projects with boilerplate code.',
      'Published the tool on npm, receiving over 1,000 downloads.',
      'Maintained the project and onboarded new contributors.',
    ],
    live: '#',
    category: 'others',
  },
  {
    title: 'DSA Problem Solving',
    company: 'Competitive Programming',
    year: 'Ongoing',
    achievements: [
      'Solved over 600+ problems on platforms like LeetCode and GeeksforGeeks.',
      'Strong proficiency in C++ for algorithmic problem-solving.',
      'Deep understanding of data structures like trees, graphs, and heaps.',
    ],
    live: '#',
    category: 'others',
  },
];

const categories = ['all', 'web-development', 'devops', 'ai-ml', 'others'];
const categoryLabels: { [key: string]: string } = {
  'all': 'All',
  'web-development': 'Web Development',
  'devops': 'DevOps',
  'ai-ml': 'AI/ML',
  'others': 'Others'
};

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
          <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground">Featured Projects</h2>
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
              {categoryLabels[category]}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
