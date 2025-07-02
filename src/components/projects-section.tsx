
'use client';

import React from 'react';
import { ProjectCard } from './project-card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects';

export function ProjectsSection() {
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
            <div className="container mx-auto max-w-3xl px-4 flex flex-col items-center gap-10 pb-[50vh]">
              {projects.map((project, i) => (
                  <ProjectCard i={i} {...project} key={i} />
              ))}
            </div>
            <div className="container mx-auto flex justify-center -mt-48">
              <Button asChild size="lg">
                <Link href="/projects">
                  View All Projects
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
        </section>
    );
}
