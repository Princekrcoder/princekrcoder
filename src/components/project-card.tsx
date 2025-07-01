'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

interface ProjectCardProps {
    i: number;
    title: string;
    company: string;
    year: string;
    achievements: string[];
    live: string;
    category: string;
}

export function ProjectCard({ i, title, company, year, achievements, live }: ProjectCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
                top: `calc(5rem + ${i * 2}rem)`, // Each card sticks 2rem lower than the last
                zIndex: i + 1, // Ensure cards stack correctly
            }}
            className="group sticky w-full max-w-3xl"
        >
            <div className="rounded-2xl bg-card/30 backdrop-blur-lg text-card-foreground shadow-2xl shadow-black/40 overflow-hidden p-8 h-[30rem] flex flex-col">
                <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-primary/60 via-accent/60 to-primary/60 opacity-20 blur-lg transition-opacity duration-500 group-hover:opacity-70" />
                <div className="absolute inset-0 rounded-2xl border border-primary/20 transition-colors group-hover:border-primary/40" />
                <div className="relative z-10 flex flex-col flex-grow">
                    <p className="text-sm font-semibold text-accent mb-2 uppercase tracking-wider">
                        {company} &bull; {year}
                    </p>
                    <h3 className="font-headline text-3xl font-bold text-foreground mb-6">
                        {title}
                    </h3>
                    <ul className="space-y-3 mb-6 flex-grow">
                        {achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                <span className="text-muted-foreground">{achievement}</span>
                            </li>
                        ))}
                    </ul>
                    <Button asChild variant="outline" className="bg-transparent border-muted-foreground/50 hover:bg-card/60 hover:text-foreground mt-auto">
                        <Link href={live} target="_blank" rel="noopener noreferrer">
                            Visit Live Site
                            <ArrowUpRight className="h-4 w-4 ml-2" />
                        </Link>
                    </Button>
                </div>
            </div>
        </motion.div>
    );
}
