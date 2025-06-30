'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  project: {
    title: string;
    company: string;
    year: string;
    achievements: string[];
    live: string;
    imageSrc: string;
    imageHint: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="group relative rounded-2xl bg-slate-900/80 backdrop-blur-sm text-card-foreground shadow-2xl shadow-black/40 overflow-hidden">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 opacity-0 blur-lg transition-opacity duration-500 group-hover:opacity-70" />
      <div className="absolute inset-0 rounded-2xl border border-primary/20 transition-colors group-hover:border-primary/40" />
      <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
        <div className="p-8">
            <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
            {project.company} &bull; {project.year}
            </p>
            <h3 className="font-headline text-3xl font-bold text-foreground mb-6">
            {project.title}
            </h3>
            <ul className="space-y-3 mb-6">
            {project.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{achievement}</span>
                </li>
            ))}
            </ul>
            <Button asChild variant="outline" className="bg-transparent border-muted-foreground/50 hover:bg-slate-800 hover:text-foreground">
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
                Visit Live Site
                <ArrowUpRight className="h-4 w-4 ml-2" />
            </Link>
            </Button>
        </div>
        <div className="relative h-64 md:h-full w-full">
            <Image 
                src={project.imageSrc}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                data-ai-hint={project.imageHint}
            />
        </div>
      </div>
    </div>
  );
}
