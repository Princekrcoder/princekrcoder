"use client"

import React, { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Card, CardContent } from "@/components/ui/card"

const skillsData = {
  frontend: [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'TypeScript', level: 80 },
    { name: 'HTML5 & CSS3', level: 98 },
  ],
  backend: [
    { name: 'Node.js', level: 80 },
    { name: 'Express.js', level: 85 },
    { name: 'MongoDB', level: 75 },
    { name: 'Firebase', level: 70 },
  ],
  tools: [
    { name: 'Git & GitHub', level: 90 },
    { name: 'C++', level: 95 },
    { name: 'Data Structures', level: 90 },
    { name: 'Algorithms', level: 90 },
  ],
};

const SkillProgressBar = ({ level }: { level: number }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Animate the progress bar on mount
    const timer = setTimeout(() => {
      setProgress(level);
    }, 100);
    return () => clearTimeout(timer);
  }, [level]);

  return <Progress value={progress} className="h-2 w-full bg-secondary dark:bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-accent" />;
};

const SkillsContent = ({ skills }: { skills: { name: string; level: number }[] }) => (
    <Card className="border-2 border-primary/10 shadow-lg">
        <CardContent className="pt-6">
            <div className="space-y-6">
                {skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col gap-2">
                        <div className="flex justify-between items-center">
                            <p className="font-medium text-base text-foreground">{skill.name}</p>
                            <p className="text-sm text-muted-foreground">{skill.level}%</p>
                        </div>
                        <SkillProgressBar level={skill.level} />
                    </div>
                ))}
            </div>
        </CardContent>
    </Card>
);

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="font-headline text-4xl font-bold tracking-tight">Technical Proficiency</h2>
          <p className="mt-2 text-lg text-muted-foreground">My expertise across the stack.</p>
        </div>
        
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 mb-8 h-auto">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="tools">Tools & Concepts</TabsTrigger>
          </TabsList>
          
          <TabsContent value="frontend">
            <SkillsContent skills={skillsData.frontend} />
          </TabsContent>
          
          <TabsContent value="backend">
            <SkillsContent skills={skillsData.backend} />
          </TabsContent>

          <TabsContent value="tools">
            <SkillsContent skills={skillsData.tools} />
          </TabsContent>

        </Tabs>
      </div>
    </section>
  );
}
