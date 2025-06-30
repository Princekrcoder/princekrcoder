'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    image: string;
    tags: string[];
    github: string;
    live: string;
    aiHint: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / -10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = 'rotateX(0deg) rotateY(0deg)';
    }
  };

  return (
    <div className="perspective-[1000px]">
      <div
        ref={cardRef}
        className="group transform-style-3d will-change-transform bg-card border border-border rounded-xl text-card-foreground shadow-lg transition-transform duration-300 ease-out hover:shadow-primary/20 hover:shadow-2xl"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="transform-style-3d p-1 flex flex-col h-full">
            <div className="aspect-video overflow-hidden border-b rounded-t-lg [transform:translateZ(20px)]">
              <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="h-full w-full object-cover rounded-t-lg"
                  data-ai-hint={project.aiHint}
              />
           </div>
           <div className="p-6 flex-grow flex flex-col [transform:translateZ(40px)]">
              <h3 className="text-xl font-bold font-headline transition-all duration-300 ease-out hover:-translate-y-0.5 hover:text-primary [text-shadow:0_0_16px_hsl(var(--primary))]">{project.title}</h3>
              <div className="mt-2 flex flex-wrap gap-2">
                {project.tags.map(tag => <Badge key={tag} variant="outline" className="transition-transform duration-300 ease-out hover:-translate-y-0.5">{tag}</Badge>)}
              </div>
              <div className="flex-grow mt-4">
                <p className="text-muted-foreground text-sm transition-transform duration-300 ease-out hover:-translate-y-0.5">{project.description}</p>
              </div>
           </div>
           <div className="px-6 pb-4 flex justify-end gap-2 [transform:translateZ(50px)]">
            <div className="transition-transform duration-300 ease-out hover:-translate-y-0.5">
              <Button variant="outline" size="sm" asChild>
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-1 h-4 w-4" />
                  GitHub
                </Link>
              </Button>
            </div>
            <div className="transition-transform duration-300 ease-out hover:-translate-y-0.5">
              <Button size="sm" asChild>
                <Link href={project.live} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
}
