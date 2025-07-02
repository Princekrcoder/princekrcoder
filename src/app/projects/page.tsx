
'use client';

import React, { useState, useMemo } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { projects } from '@/lib/projects';
import { StaticProjectCard } from '@/components/static-project-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const categories = ['all', 'web-development', 'devops', 'blockchain', 'ai/ml', 'others'];
const categoryDisplayNames: { [key: string]: string } = {
    'all': 'All',
    'web-development': 'Web Development',
    'devops': 'DevOps',
    'blockchain': 'Blockchain',
    'ai/ml': 'AI / ML',
    'others': 'Others'
};


export default function ProjectsPage() {
    const [filter, setFilter] = useState('all');

    const filteredProjects = useMemo(() => {
        if (filter === 'all') {
            return projects;
        }
        return projects.filter((project) => project.category === filter);
    }, [filter]);

    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto max-w-7xl px-4 py-16">
                <div className="mb-16">
                    <Button asChild variant="ghost" className="mb-8 -ml-4">
                        <Link href="/">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Home
                        </Link>
                    </Button>
                    <div className="text-center">
                        <h1 className="font-headline text-4xl font-bold tracking-tight">
                            All <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Projects</span>
                        </h1>
                        <p className="mt-4 text-lg text-muted-foreground">
                            Here's a collection of my work. Feel free to explore.
                        </p>
                    </div>
                </div>

                <div className="flex justify-center items-center gap-2 md:gap-4 mb-12 flex-wrap">
                    {categories.map((category) => (
                        <Button
                            key={category}
                            variant={filter === category ? 'default' : 'ghost'}
                            onClick={() => setFilter(category)}
                            className="capitalize rounded-full px-6 transition-all duration-300"
                        >
                            {categoryDisplayNames[category]}
                        </Button>
                    ))}
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.title}
                            layout
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="h-full [perspective:1200px]"
                        >
                            <StaticProjectCard {...project} />
                        </motion.div>
                    ))}
                </motion.div>
                
                {filteredProjects.length === 0 && (
                    <div className="text-center text-muted-foreground py-16">
                        <p className="text-lg">No projects in this category yet. Stay tuned!</p>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
