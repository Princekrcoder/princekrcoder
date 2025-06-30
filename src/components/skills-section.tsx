"use client"

import React, { useState, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const skillsData = [
  { name: 'HTML/CSS', level: 95, category: 'frontend' },
  { name: 'JavaScript', level: 90, category: 'frontend' },
  { name: 'React', level: 90, category: 'frontend' },
  { name: 'TypeScript', level: 85, category: 'frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'frontend' },
  { name: 'Next.js', level: 80, category: 'frontend' },
  { name: 'Redux', level: 75, category: 'frontend' },
  { name: 'Node.js', level: 80, category: 'backend' },
  { name: 'Express', level: 75, category: 'backend' },
  { name: 'MongoDB', level: 70, category: 'backend' },
  { name: 'Firebase', level: 70, category: 'backend' },
  { name: 'PostgreSQL', level: 65, category: 'backend' },
  { name: 'GraphQL', level: 60, category: 'tools' },
  { name: 'Git/GitHub', level: 90, category: 'tools' },
  { name: 'C++', level: 95, category: 'tools' },
  { name: 'Data Structures', level: 90, category: 'tools' },
  { name: 'Algorithms', level: 90, category: 'tools' },
  { name: 'Vercel', level: 85, category: 'tools' },
];

const categories = ['all', 'frontend', 'backend', 'tools'];

export function SkillsSection() {
  const [filter, setFilter] = useState('all');

  const filteredSkills = useMemo(() => {
    if (filter === 'all') {
      return skillsData;
    }
    return skillsData.filter((skill) => skill.category === filter);
  }, [filter]);

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">
            My <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="mt-2 text-lg text-muted-foreground">A showcase of my technical abilities and expertise.</p>
        </div>

        <div className="flex justify-center items-center gap-2 md:gap-4 mb-12 flex-wrap">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'default' : 'ghost'}
              onClick={() => setFilter(category)}
              className="capitalize rounded-full px-6 transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="bg-card/50 p-6 rounded-lg border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-lg text-foreground">{skill.name}</h3>
                <span className="text-primary font-mono font-semibold">{skill.level}%</span>
              </div>
              <div className="w-full bg-muted/50 rounded-full h-2 overflow-hidden">
                <motion.div
                  className="bg-gradient-to-r from-primary via-accent to-primary h-2 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, ease: "circOut" }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
