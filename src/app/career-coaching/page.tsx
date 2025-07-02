
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Clock, IndianRupee, Video, ArrowLeft, Mail } from 'lucide-react';
import Link from 'next/link';

export default function CareerCoachingPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container mx-auto max-w-4xl px-4 py-16">
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
                        <CardDescription className="text-lg pt-2 max-w-2xl mx-auto">
                            Book a personalized session with me to accelerate your tech career, whether you're a beginner or an experienced developer.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="grid md:grid-cols-2 gap-8 md:gap-12 p-8">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-2xl font-bold">What you'll get:</h3>
                            <ul className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>Personalized resume and portfolio review.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>Actionable feedback on your projects and code.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>Guidance on job search strategies and interview preparation.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                                    <span>Answers to your specific career questions.</span>
                                </li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-6 p-6 bg-card/20 rounded-lg border border-border/10">
                            <h3 className="text-2xl font-bold">Session Details</h3>
                             <div className="flex items-center gap-4 text-lg">
                                <Clock className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">Duration</p>
                                    <p className="text-muted-foreground">30 Minutes</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-lg">
                                <IndianRupee className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">Price</p>
                                    <p className="text-muted-foreground">₹299</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 text-lg">
                                <Video className="h-6 w-6 text-primary" />
                                <div>
                                    <p className="font-semibold">Format</p>
                                    <p className="text-muted-foreground">1:1 Video Call (Google Meet)</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-4 p-8 border-t border-border/10 mt-8">
                        <Button asChild size="lg" className="w-full max-w-xs">
                           <Link href="mailto:princekr2840@gmail.com?subject=Career%20Coaching%20Session%20Booking">
                                <Mail className="mr-2 h-4 w-4" /> Book Your Session
                            </Link>
                        </Button>
                        <p className="text-sm text-muted-foreground text-center max-w-md mx-auto">
                            Clicking the button will open your default email app. After you send the email, I'll reply to schedule a convenient time.
                        </p>
                    </CardFooter>
                </Card>
            </main>
            <Footer />
        </div>
    );
}
