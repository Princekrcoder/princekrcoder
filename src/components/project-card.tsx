
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-slate-900/95 backdrop-blur-sm border border-slate-700/50 rounded-2xl text-card-foreground shadow-2xl shadow-black/30 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-primary/20 hover:border-primary/20 transform hover:-translate-y-2">
      <div className="relative h-56 w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          data-ai-hint={project.aiHint}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm font-semibold text-accent mb-1 uppercase tracking-wider">
          {project.company} &bull; {project.year}
        </p>
        <h3 className="font-headline text-2xl font-bold text-foreground mb-4">
          {project.title}
        </h3>
        <ul className="space-y-3 mb-6">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <span className="text-muted-foreground text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto pt-4">
          <Button asChild className="w-full">
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              Visit Live Site
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
