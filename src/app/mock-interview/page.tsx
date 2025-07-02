
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
        price: '₹399',
        description: 'Perfect for students and freshers. This session focuses on core CS fundamentals, basic data structures, algorithms, and typical entry-level developer questions.',
        mailto: 'mailto:princekr2840@gmail.com?subject=Beginner%20Mock%20Interview%20Booking'
    },
    {
        name: 'Intermediate',
        price: '₹799',
        description: 'Designed for developers with 6-18 months of experience. We will tackle intermediate DSA problems and introduce basic system design principles.',
        mailto: 'mailto:princekr2840@gmail.com?subject=Intermediate%20Mock%20Interview%20Booking'
    },
    {
        name: 'Advanced',
        price: '₹1499',
        description: 'For experienced candidates preparing for senior roles at top MNCs. This session dives deep into advanced algorithms and complex system design scenarios.',
        mailto: 'mailto:princekr2840@gmail.com?subject=Advanced%20Mock%20Interview%20Booking'
    }
];

const benefits = [
    'Realistic technical interview simulation (DSA & System Design relevant to your level).',
    'In-depth feedback on problem-solving, coding style, and communication.',
    'Strategies to handle behavioral questions effectively.',
    'A recording of the session for your review.'
];


export default function MockInterviewPage() {
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
                            1:1 <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Mock Interview</span> Session
                        </h1>
                        <CardDescription className="text-lg pt-2 max-w-3xl mx-auto">
                            Prepare to ace your technical interviews with a realistic, personalized mock interview session. Each session lasts 30-60 minutes, according to your level.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="text-center mb-12">
                             <h2 className="font-headline text-3xl font-bold tracking-tight">
                                Choose Your <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Level</span>
                            </h2>
                            <p className="mt-2 text-muted-foreground">Select the tier that best matches your experience. All tiers include the benefits listed below.</p>
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
                                            <p className="text-muted-foreground mb-6">{tier.description}</p>
                                            <Separator className="my-4 bg-border/20" />
                                            <ul className="space-y-3 text-muted-foreground text-sm">
                                                {benefits.map((benefit, index) => (
                                                    <li key={index} className="flex items-start gap-3">
                                                        <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                                                        <span>{benefit}</span>
                                                    </li>
                                                ))}
                                            </ul>
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
