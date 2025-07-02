'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowLeft, CheckCircle2, Code, Database, Rocket, Palette, Zap, User, Users, CreditCard, Package, TrendingUp, ShoppingCart, BookOpen, Award, FileText, Search, MessageSquare, Feather, Video, Gamepad2, MessagesSquare } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

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

const portfolioBenefits = [
    {
        icon: Palette,
        title: 'Custom Design',
        description: 'A unique design that reflects your personal brand and style.',
    },
    {
        icon: Zap,
        title: 'Fast & SEO-Friendly',
        description: 'Built with Next.js for optimal performance and search engine visibility.',
    },
    {
        icon: User,
        title: 'Showcase Your Best Work',
        description: 'Highlight your top projects and skills in a compelling way.',
    },
];

const ecommerceBenefits = [
    {
        icon: CreditCard,
        title: 'Secure Payments',
        description: 'Integrate popular and secure payment gateways like Stripe and PayPal.',
    },
    {
        icon: Package,
        title: 'Product Management',
        description: 'Easily manage your products, inventory, and orders through a user-friendly admin panel.',
    },
    {
        icon: TrendingUp,
        title: 'SEO Optimized',
        description: 'Built for visibility on search engines to attract more customers to your store.',
    },
];

const lmsBenefits = [
    {
        icon: BookOpen,
        title: 'Course Management',
        description: 'Easily create, organize, and manage your courses, lessons, and materials in one place.',
    },
    {
        icon: Users,
        title: 'User Enrollment & Tracking',
        description: 'Onboard students, manage user roles, and track their progress with detailed analytics.',
    },
    {
        icon: Award,
        title: 'Interactive Learning',
        description: 'Engage students with quizzes, assignments, and certificates to create a dynamic learning experience.',
    },
];

const blogBenefits = [
    {
        icon: FileText,
        title: 'Content Management',
        description: 'A simple and powerful editor for writing, editing, and organizing your posts and media.',
    },
    {
        icon: Search,
        title: 'SEO-Focused',
        description: 'Built with best practices to help your content rank higher and reach a wider audience.',
    },
    {
        icon: MessageSquare,
        title: 'Reader Engagement',
        description: 'Incorporate comments, social sharing, and subscriptions to build a loyal community around your content.',
    },
];

const elearningBenefits = [
    {
        icon: Video,
        title: 'Live & On-Demand Video',
        description: 'Integrate video streaming for virtual classrooms, webinars, and pre-recorded lessons to engage learners.',
    },
    {
        icon: MessagesSquare,
        title: 'Community & Forums',
        description: 'Build a space for students to connect, discuss topics, and learn from each other with integrated forums.',
    },
    {
        icon: Gamepad2,
        title: 'Gamified Learning',
        description: 'Incorporate points, badges, and leaderboards to motivate students and make learning more interactive.',
    },
];

const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
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
                        <motion.h1 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={sectionVariants}
                            className="font-headline text-4xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">Full-Stack Development</span> Solutions
                        </motion.h1>
                        <motion.div
                             initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={{ ...sectionVariants, visible: { ...sectionVariants.visible, transition: { ...sectionVariants.visible.transition, delay: 0.2 } } }}
                        >
                            <CardDescription className="text-lg pt-2 max-w-3xl mx-auto">
                                From concept to code, I build comprehensive, high-performance web applications that deliver tangible results and drive business growth.
                            </CardDescription>
                        </motion.div>
                    </CardHeader>
                     <CardContent className="p-8">
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={sectionVariants}
                            className="mb-16">
                            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-8">
                                What I <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">Offer</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {offerings.map((offering) => (
                                    <div key={offering.title} className="p-6 bg-card/20 rounded-xl border border-border/10 shadow-lg hover:shadow-primary/20 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2">
                                        <h3 className="text-xl font-bold mb-2 text-primary">{offering.title}</h3>
                                        <p className="text-muted-foreground">{offering.description}</p>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                        
                        <Separator className="my-16 bg-border/20" />

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={sectionVariants}
                        >
                            <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-8">
                                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">Technology Stack</span>
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <Card className="bg-card/20 border-border/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20">
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
                                 <Card className="bg-card/20 border-border/10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20">
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
                        </motion.div>
                        
                        <Separator className="my-16 bg-border/20" />

                        <motion.div
                             initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={sectionVariants}
                        >
                        <Card className="bg-card/20 border-border/10 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-primary/20">
                            <CardContent className="p-8">
                                 <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-8">
                                    Build a <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">Standout Portfolio</span> with Me
                                </h2>
                                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                                    A great portfolio is more than a collection of projects—it's your digital handshake. I can help you build a professional, high-performance portfolio website from scratch that showcases your skills and personality.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {portfolioBenefits.map((benefit) => (
                                         <div key={benefit.title} className="flex flex-col items-center text-center p-6 bg-card/50 rounded-xl border border-border/10">
                                            <div className="p-3 bg-primary/10 rounded-full mb-4">
                                                <benefit.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-bold mb-2 text-primary">{benefit.title}</h3>
                                            <p className="text-muted-foreground text-sm flex-grow">{benefit.description}</p>
                                        </div>
                                    ))}
                                </div>
                                 <div className="text-center">
                                    <Button size="lg" asChild>
                                        <Link href="/#contact">
                                            <Rocket className="mr-2 h-5 w-5" />
                                            Let's Build Your Portfolio
                                        </Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        </motion.div>

                        <Separator className="my-16 bg-border/20" />
                        
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={sectionVariants}
                        >
                        <Card className="bg-card/20 border-border/10 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-primary/20">
                             <CardContent className="p-8">
                                 <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-8">
                                    Launch Your <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">E-commerce Store</span>
                                </h2>
                                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                                    Ready to sell online? I build custom, high-performance e-commerce websites that provide a seamless shopping experience for your customers and are easy for you to manage.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {ecommerceBenefits.map((benefit) => (
                                         <div key={benefit.title} className="flex flex-col items-center text-center p-6 bg-card/50 rounded-xl border border-border/10">
                                            <div className="p-3 bg-primary/10 rounded-full mb-4">
                                                <benefit.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-bold mb-2 text-primary">{benefit.title}</h3>
                                            <p className="text-muted-foreground text-sm flex-grow">{benefit.description}</p>
                                        </div>
                                    ))}
                                </div>
                                 <div className="text-center">
                                    <Button size="lg" asChild>
                                        <Link href="/#contact">
                                            <ShoppingCart className="mr-2 h-5 w-5" />
                                            Start Selling Online
                                        </Link>
                                    </Button>
                                </div>
                             </CardContent>
                        </Card>
                        </motion.div>

                        <Separator className="my-16 bg-border/20" />
                        
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={sectionVariants}
                        >
                        <Card className="bg-card/20 border-border/10 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-primary/20">
                             <CardContent className="p-8">
                                 <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-8">
                                    Develop Your <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">LMS Platform</span>
                                </h2>
                                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                                    Empower educators and learners with a custom Learning Management System. I build scalable and intuitive LMS platforms for schools, companies, and individual creators.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {lmsBenefits.map((benefit) => (
                                         <div key={benefit.title} className="flex flex-col items-center text-center p-6 bg-card/50 rounded-xl border border-border/10">
                                            <div className="p-3 bg-primary/10 rounded-full mb-4">
                                                <benefit.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-bold mb-2 text-primary">{benefit.title}</h3>
                                            <p className="text-muted-foreground text-sm flex-grow">{benefit.description}</p>
                                        </div>
                                    ))}
                                </div>
                                 <div className="text-center">
                                    <Button size="lg" asChild>
                                        <Link href="/#contact">
                                            <BookOpen className="mr-2 h-5 w-5" />
                                            Build Your LMS
                                        </Link>
                                    </Button>
                                </div>
                             </CardContent>
                        </Card>
                        </motion.div>
                        
                        <Separator className="my-16 bg-border/20" />
                        
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={sectionVariants}
                        >
                        <Card className="bg-card/20 border-border/10 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-primary/20">
                             <CardContent className="p-8">
                                 <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-8">
                                    Craft an <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">Interactive E-learning Platform</span>
                                </h2>
                                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                                    Go beyond traditional courses. I create immersive e-learning platforms that foster community, engagement, and dynamic learning experiences.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {elearningBenefits.map((benefit) => (
                                         <div key={benefit.title} className="flex flex-col items-center text-center p-6 bg-card/50 rounded-xl border border-border/10">
                                            <div className="p-3 bg-primary/10 rounded-full mb-4">
                                                <benefit.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-bold mb-2 text-primary">{benefit.title}</h3>
                                            <p className="text-muted-foreground text-sm flex-grow">{benefit.description}</p>
                                        </div>
                                    ))}
                                </div>
                                 <div className="text-center">
                                    <Button size="lg" asChild>
                                        <Link href="/#contact">
                                            <Zap className="mr-2 h-5 w-5" />
                                            Launch Your Platform
                                        </Link>
                                    </Button>
                                </div>
                             </CardContent>
                        </Card>
                        </motion.div>

                        <Separator className="my-16 bg-border/20" />
                        
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            variants={sectionVariants}
                        >
                        <Card className="bg-card/20 border-border/10 shadow-lg transition-all duration-300 transform hover:-translate-y-2 hover:shadow-primary/20">
                             <CardContent className="p-8">
                                 <h2 className="font-headline text-3xl font-bold tracking-tight text-center mb-8">
                                    Create a <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">Modern Blog Platform</span>
                                </h2>
                                <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
                                    Share your voice and build an audience with a custom, high-performance blog. I develop feature-rich blogging platforms that are easy to manage and a pleasure to read.
                                </p>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                                    {blogBenefits.map((benefit) => (
                                         <div key={benefit.title} className="flex flex-col items-center text-center p-6 bg-card/50 rounded-xl border border-border/10">
                                            <div className="p-3 bg-primary/10 rounded-full mb-4">
                                                <benefit.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h3 className="text-lg font-bold mb-2 text-primary">{benefit.title}</h3>
                                            <p className="text-muted-foreground text-sm flex-grow">{benefit.description}</p>
                                        </div>
                                    ))}
                                </div>
                                 <div className="text-center">
                                    <Button size="lg" asChild>
                                        <Link href="/#contact">
                                            <Feather className="mr-2 h-5 w-5" />
                                            Start Your Blog
                                        </Link>
                                    </Button>
                                </div>
                             </CardContent>
                        </Card>
                        </motion.div>

                         <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            variants={sectionVariants}
                            className="text-center mt-16">
                            <h3 className="text-2xl font-bold mb-4">Ready to build something <span className="bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-text-gradient">amazing?</span></h3>
                            <p className="text-muted-foreground max-w-xl mx-auto mb-6">Let's discuss your project and how I can help bring your vision to life.</p>
                            <Button size="lg" asChild>
                                <Link href="/#contact">
                                    <Rocket className="mr-2 h-5 w-5" />
                                    Discuss Your Project
                                </Link>
                            </Button>
                        </motion.div>
                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
