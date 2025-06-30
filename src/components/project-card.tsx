
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
    <div className="bg-card/10 backdrop-blur-sm border border-border/20 rounded-xl text-card-foreground shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-primary/20">
      <div className="grid md:grid-cols-2 items-center">
        <div className="p-8 md:p-12 order-2 md:order-1">
          <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
            {project.company} &bull; {project.year}
          </p>
          <h3 className="font-headline text-3xl md:text-4xl font-bold text-foreground mb-6">
            {project.title}
          </h3>
          <ul className="space-y-4 mb-8">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>
          <Button asChild size="lg">
            <Link href={project.live} target="_blank" rel="noopener noreferrer">
              Visit Live Site
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
        <div className="aspect-video md:aspect-auto order-1 md:order-2 h-full w-full">
          <Image
            src={project.image}
            alt={project.title}
            width={800}
            height={600}
            className="h-full w-full object-cover"
            data-ai-hint={project.aiHint}
          />
        </div>
      </div>
    </div>
  );
}
