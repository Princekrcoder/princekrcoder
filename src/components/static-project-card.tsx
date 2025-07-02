
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, ArrowUpRight } from 'lucide-react';

interface StaticProjectCardProps {
    title: string;
    achievements: string[];
    live: string;
}

export function StaticProjectCard({ title, achievements, live }: StaticProjectCardProps) {
    return (
        <Card className="flex flex-col h-full bg-card/50 border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2">
            <CardHeader>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow">
                 <ul className="space-y-3">
                    {achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                            <span className="text-muted-foreground">{achievement}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
            <CardFooter>
                 <Button asChild variant="outline" className="bg-transparent border-muted-foreground/50 hover:bg-card/60 hover:text-foreground mt-auto w-full">
                    <Link href={live} target="_blank" rel="noopener noreferrer">
                        Visit Live Site
                        <ArrowUpRight className="h-4 w-4 ml-2" />
                    </Link>
                </Button>
            </CardFooter>
        </Card>
    );
}
