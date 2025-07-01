
'use client';

import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
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
    category: 'web-development',
  },
  {
    title: 'Content-Rich Blog Platform',
    company: 'NextGen Media',
    year: '2023',
    achievements: [
        'Built a dynamic blogging platform with Next.js and a headless CMS.',
        'Implemented server-side rendering (SSR) for optimal SEO performance.',
        'Designed a modular architecture for easy content updates.',
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
    title: 'Personal Portfolio Website',
    company: 'Freelance',
    year: '2024',
    achievements: [
        'Designed and developed a personal portfolio with Next.js and Tailwind CSS.',
        'Integrated a fully functional contact form using Nodemailer.',
        'Deployed on Vercel with a CI/CD pipeline for seamless updates.',
    ],
    live: '#',
    category: 'web-development',
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
];

export function ProjectsSection() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

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
            </div>
            <div ref={container} className="relative h-[250vh] -mt-20">
                <div className="sticky top-20 md:top-32 h-screen flex flex-col items-center">
                    {[...projects].reverse().map((project, i) => {
                        const targetScale = 1 - ((projects.length - i) * 0.05);
                        const range: [number, number] = [i * 0.15, 1];
                        return <ProjectCard key={`p_${projects.length - 1 - i}`} i={i} {...project} progress={scrollYProgress} range={range} targetScale={targetScale} projectsLength={projects.length} />;
                    })}
                </div>
            </div>
        </section>
    );
}
