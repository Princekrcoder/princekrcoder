
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, Code, Database, Rocket } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const offerings = [
    {
        title: 'End-to-End Development',
        description: 'From initial idea and UI/UX design to backend logic and deployment, I handle the entire development lifecycle.',
    },
    {
        title: 'Scalable Architecture',
        description: 'I build applications with scalability in mind, ensuring they can grow with your business and handle increasing traffic.',
    },
    {
        title: 'API Integration',
        description: 'Seamlessly connect your application with third-party services, payment gateways, and other external APIs.',
    },
    {
        title: 'Database Management',
        description: 'Design and manage efficient databases to store and retrieve your data securely and effectively.',
    },
];

const technologies = {
    frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML5 & CSS3'],
    backend: ['Node.js', 'Express.js', 'Firebase', 'MongoDB', 'SQL'],
};

export default function FullStackSolutionsPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto max-w-7xl px-4 py-16">
                 <div className="mb-12">
                    <Button asChild variant="ghost" className="-ml-4">
                        <Link href="/#services">
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Back to Services
                        </Link>
                    </Button>
                </div>

                <Card className="bg-card/50 border-border/10 shadow-lg">
                    <CardHeader className="text-center p-8">
                        <h1 className="font-headline text-4xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Full-Stack</span> Development Solutions
                        </h1>
                        <CardDescription className="text-lg pt-2 max-w-3xl mx-auto">
                            From concept to code, I build comprehensive, high-performance web applications that deliver tangible results and drive business growth.
                        </CardDescription>
                    </CardHeader>
                     <CardContent className="p-8">
                        <div className="mb-16">
                            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-8">
                                What I <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Offer</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {offerings.map((offering) => (
                                    <div key={offering.title} className="p-6 bg-card/20 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300">
                                        <h3 className="text-xl font-bold mb-2 text-primary">{offering.title}</h3>
                                        <p className="text-muted-foreground">{offering.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <Separator className="my-16 bg-border/20" />

                        <div>
                            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-8">
                                Technology <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Stack</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Card className="bg-card/20 border-border/10">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Code className="h-6 w-6 text-accent" />
                                            Frontend
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {technologies.frontend.map((tech) => (
                                                <li key={tech} className="flex items-center gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                                    <span className="text-muted-foreground">{tech}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                                 <Card className="bg-card/20 border-border/10">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Database className="h-6 w-6 text-accent" />
                                            Backend
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3">
                                            {technologies.backend.map((tech) => (
                                                <li key={tech} className="flex items-center gap-3">
                                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                                    <span className="text-muted-foreground">{tech}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                         <div className="text-center mt-16">
                            <h3 className="text-2xl font-bold mb-4">Ready to build something amazing?</h3>
                            <p className="text-muted-foreground max-w-xl mx-auto mb-6">Let's discuss your project and how I can help bring your vision to life.</p>
                            <Button size="lg" asChild>
                                <Link href="/#contact">
                                    <Rocket className="mr-2 h-5 w-5" />
                                    Discuss Your Project
                                </Link>
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
