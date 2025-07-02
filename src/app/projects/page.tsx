
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { projects } from '@/lib/projects';
import { StaticProjectCard } from '@/components/static-project-card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function ProjectsPage() {
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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <StaticProjectCard key={index} {...project} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}
