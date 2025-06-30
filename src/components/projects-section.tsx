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
    title: 'Real-Time Chat Application',
    company: 'Instant Messenger',
    year: '2022',
    achievements: [
      'Implemented WebSocket for instant message delivery and real-time updates.',
      'Ensured end-to-end encryption for secure private conversations.',
      'Developed a user-friendly interface with support for group chats and media sharing.',
    ],
    live: '#',
  },
  {
    title: 'Comprehensive Job Portal',
    company: 'CareerConnect',
    year: '2121',
    achievements: [
      'Built a powerful job search engine with advanced filtering capabilities.',
      'Enabled employers to post and manage job listings efficiently.',
      'Facilitated thousands of successful job applications through the platform.',
    ],
    live: '#',
  },
  {
    title: 'Personal Portfolio Website',
    company: 'Freelance',
    year: '2024',
    achievements: [
      'Designed a visually appealing and responsive portfolio to showcase skills.',
      'Optimized for performance, achieving high scores on Lighthouse.',
      'Integrated a contact form for seamless communication with potential clients.',
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
    title: 'Real Estate Marketplace',
    company: 'HomeFinder',
    year: '2022',
    achievements: [
      'Developed an advanced property search with filters, improving user experience.',
      'Integrated interactive maps for property location visualization.',
      'Secured user data and listings with robust authentication and validation.',
    ],
    live: '#',
  },
  {
    title: 'Content-Rich Blog Platform',
    company: "Writer's Hub",
    year: '2022',
    achievements: [
      'Engineered a SEO-optimized platform, boosting organic traffic by 50%.',
      'Created a markdown editor for a seamless writing and publishing experience.',
      'Integrated social sharing features, increasing article reach by 20%.',
    ],
    live: '#',
  },
  {
    title: 'Centralized Admin Panel',
    company: 'Data Corp',
    year: '2023',
    achievements: [
      'Built a dynamic dashboard for real-time data visualization and reporting.',
      'Implemented role-based access control for over 500 users.',
      'Streamlined data management tasks, reducing administrative time by 30%.',
    ],
    live: '#',
  },
  {
    title: 'Learning Management System',
    company: 'EduTech Innovators',
    year: '2023',
    achievements: [
      'Developed an interactive course builder, increasing content creation by 40%.',
      'Integrated a real-time progress tracking system for students and instructors.',
      'Achieved a 99.9% platform uptime during peak online learning hours.',
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
    <section id="projects" className="relative pb-32">
      <div className="container mx-auto max-w-7xl px-4 text-center py-20 md:py-32">
        <h2 className="font-headline text-4xl font-bold tracking-tight text-foreground">Featured Projects</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          See how I transformed concepts into engaging digital experiences.
        </p>
      </div>
      <div ref={ref} className="container mx-auto max-w-3xl relative h-[400vh]">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i - 1) * 0.05;
          const scale = useTransform(scrollYProgress, [0, 1], [targetScale, 1]);

          const initialSeparation = 2;
          const finalOverlap = 1;
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
