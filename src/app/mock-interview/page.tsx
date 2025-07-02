
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, IndianRupee, Video, ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';
import { Separator } from '@/components/ui/separator';

const tiers = [
    {
        name: 'Beginner',
        price: '₹399',
        description: 'For students with basic knowledge (development , basic DSA, fresher-level CS questions).',
        mailto: 'mailto:princekr2840@gmail.com?subject=Beginner%20Mock%20Interview%20Booking'
    },
    {
        name: 'Intermediate',
        price: '₹799',
        description: 'For those who have 6–18 months experience or decent DSA + basic system design knowledge.',
        mailto: 'mailto:princekr2840@gmail.com?subject=Intermediate%20Mock%20Interview%20Booking'
    },
    {
        name: 'Advanced',
        price: '₹1499',
        description: 'For candidates preparing for top MNCs like Google, Amazon, Atlassian, or with 2+ years experience.',
        mailto: 'mailto:princekr2840@gmail.com?subject=Advanced%20Mock%20Interview%20Booking'
    }
]

export default function MockInterviewPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto max-w-5xl px-4 py-16">
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
                            Prepare to ace your technical interviews with a realistic, personalized mock interview session. Each session lasts between 45-60 minutes.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="p-8">
                        <div className="flex flex-col gap-6 max-w-2xl mx-auto mb-12">
                            <h3 className="text-2xl font-bold text-center">What you'll get in every session:</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>Realistic technical interview simulation (DSA & System Design relevant to your level).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>In-depth feedback on problem-solving, coding style, and communication.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>Strategies to handle behavioral questions effectively.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>A recording of the session for your review.</span>
                                </li>
                            </ul>
                        </div>
                        
                        <Separator className="my-8 bg-border/20" />

                        <div className="text-center mb-12">
                             <h2 className="font-headline text-3xl font-bold tracking-tight">
                                Choose Your <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Level</span>
                            </h2>
                            <p className="mt-2 text-muted-foreground">Select the tier that best matches your experience.</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {tiers.map((tier) => (
                                <Card key={tier.name} className="flex flex-col bg-card/20 border-border/10 hover:border-primary/20 transition-colors duration-300">
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
