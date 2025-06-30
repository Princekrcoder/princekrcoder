
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useTransform, type MotionValue } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    company: string;
    year: string;
    features: string[];
    image: string;
    live: string;
    aiHint: string;
  };
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

export function ProjectCard({ project, index, progress, range, targetScale }: ProjectCardProps) {
  const scale = useTransform(progress, range, [1, targetScale]);
  const opacity = useTransform(progress, [range[0], range[0] + 0.05, range[1] - 0.05, range[1]], [0, 1, 1, 0]);

  return (
    <motion.div
      style={{
        scale,
        opacity,
        top: `calc(2rem + ${index * 2}rem)`,
        zIndex: index,
      }}
      className="absolute flex h-[80vh] w-full items-center justify-center p-4"
    >
      <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-card-foreground shadow-2xl shadow-black/30 overflow-hidden h-full w-full max-w-7xl">
          <div className="grid md:grid-cols-2 items-center h-full">
            <div className="p-8 md:p-12 order-2 md:order-1 flex flex-col justify-center h-full">
              <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                {project.company} &bull; {project.year}
              </p>
              <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
                {project.title}
              </h3>
              <ul className="space-y-4 mb-8">
                {project.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                  <Button asChild size="lg">
                      <Link href={project.live} target="_blank" rel="noopener noreferrer">
                        Visit Live Site
                        <ArrowUpRight className="ml-2 h-5 w-5" />
                      </Link>
                  </Button>
              </div>
            </div>
            <div className="hidden md:block order-1 md:order-2 h-full w-full relative">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                data-ai-hint={project.aiHint}
              />
            </div>
          </div>
      </div>
    </motion.div>
  );
}
