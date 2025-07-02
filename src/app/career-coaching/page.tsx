
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, IndianRupee, Mail, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const tiers = [
    {
        name: 'Beginner',
        price: '₹499',
        description: "For students, freshers, or those confused about their career path. We'll build a solid foundation for your tech journey.",
        mailto: 'mailto:princekr2840@gmail.com?subject=Beginner%20Career%20Coaching%20Booking'
    },
    {
        name: 'Intermediate',
        price: '₹999',
        description: 'For candidates with 6-24 months of experience or those switching careers. We will focus on leveling up your skills and navigating the job market.',
        mailto: 'mailto:princekr2840@gmail.com?subject=Intermediate%20Career%20Coaching%20Booking'
    },
    {
        name: 'Advanced',
        price: '₹1999',
        description: 'For experienced professionals (2+ years) targeting FAANG, remote jobs, or international roles. We will strategize for high-impact opportunities.',
        mailto: 'mailto:princekr2840@gmail.com?subject=Advanced%20Career%20Coaching%20Booking'
    }
];

const benefits = [
    'Personalized resume and portfolio review.',
    'Actionable feedback on your projects and code.',
    'Guidance on job search strategies and interview preparation.',
    'Answers to your specific career questions and roadmap building.'
];

export default function CareerCoachingPage() {
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
                            1:1 <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Career Coaching</span> Session
                        </h1>
                        <CardDescription className="text-lg pt-2 max-w-3xl mx-auto">
                            Each session is 30-60 minutes, tailored to your level. Accelerate your tech career with personalized guidance.
                        </CardDescription>
                    </CardHeader>
                     <CardContent className="p-8">
                        <div className="text-center mb-12 max-w-2xl mx-auto">
                             <h2 className="font-headline text-3xl font-bold tracking-tight mb-4">
                                What You'll Get
                            </h2>
                            <ul className="space-y-3 text-muted-foreground">
                                {benefits.map((benefit, index) => (
                                    <li key={index} className="flex items-start gap-3 justify-center text-left md:justify-start">
                                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        <Separator className="my-12 bg-border/20" />


                        <div className="text-center mb-12">
                             <h2 className="font-headline text-3xl font-bold tracking-tight">
                                Choose Your <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Level</span>
                            </h2>
                            <p className="mt-2 text-muted-foreground">Select the tier that best matches your experience.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {tiers.map((tier) => (
                                <div key={tier.name} className="h-full rounded-lg p-px bg-border/10 hover:bg-gradient-to-r from-accent/60 to-primary/60 transition-all duration-300">
                                    <Card className="flex flex-col bg-card/20 border-0 h-full">
                                        <CardHeader>
                                            <CardTitle className="text-2xl">{tier.name}</CardTitle>
                                            <div className="flex items-center gap-2 text-3xl font-bold text-primary">
                                                <IndianRupee className="h-7 w-7" />
                                                <span>{tier.price}</span>
                                            </div>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-muted-foreground">{tier.description}</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild className="w-full">
                                                <Link href={tier.mailto}>
                                                    <Mail className="mr-2 h-4 w-4" /> Book Session
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </div>
                            ))}
                        </div>

                         <p className="text-sm text-muted-foreground text-center max-w-md mx-auto mt-12">
                            Clicking a button will open your default email app. After you send the email, I'll reply to schedule a convenient time.
                        </p>

                    </CardContent>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
