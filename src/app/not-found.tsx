import React from 'react';
import Link from 'next/link';
import { Container, Button, Section } from '@/components/UI';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <Section className="min-h-screen flex items-center justify-center bg-neutral-50 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-catering/5 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-convention/5 rounded-full blur-[120px]"></div>
            </div>

            <Container className="relative z-10 text-center">
                <div className="space-y-8 max-w-2xl mx-auto">
                    {/* Error Code Branding */}
                    <div className="relative inline-block">
                        <span className="text-[12rem] md:text-[18rem] font-serif font-black text-neutral-100 select-none">404</span>
                        <div className="absolute inset-0 flex items-center justify-center pt-8 md:pt-12">
                            <div className="p-6 bg-white rounded-3xl shadow-2xl border border-neutral-100 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
                                <Search size={48} className="text-catering" strokeWidth={1.5} />
                            </div>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 tracking-tight">
                            A Culinary Road Less Traveled
                        </h1>
                        <p className="text-lg text-neutral-500 font-light leading-relaxed max-w-lg mx-auto">
                            The page you are looking for has been moved or retired. Let us guide you back to our main menu.
                        </p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-4 pt-6">
                        <Button href="/" variant="primary" className="px-8 py-4 flex items-center gap-2">
                            <Home size={18} />
                            Back to Home
                        </Button>
                        <Link
                            href="javascript:history.back()"
                            className="inline-flex items-center gap-2 px-8 py-4 text-neutral-600 font-bold uppercase tracking-widest text-xs hover:text-catering transition-colors"
                        >
                            <ArrowLeft size={16} />
                            Go Back
                        </Link>
                    </div>
                </div>

                {/* Helpful Links */}
                <div className="mt-20 pt-12 border-t border-neutral-200">
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-neutral-400 mb-8">Popular Destinations</p>
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <Link href="/menu" className="group">
                            <span className="text-sm font-serif font-bold text-neutral-900 group-hover:text-catering transition-colors">Our Menu</span>
                            <div className="h-0.5 w-0 group-hover:w-full bg-catering transition-all duration-300 mx-auto"></div>
                        </Link>
                        <Link href="/halls" className="group">
                            <span className="text-sm font-serif font-bold text-neutral-900 group-hover:text-catering transition-colors">Convention Halls</span>
                            <div className="h-0.5 w-0 group-hover:w-full bg-catering transition-all duration-300 mx-auto"></div>
                        </Link>
                        <Link href="/gallery" className="group">
                            <span className="text-sm font-serif font-bold text-neutral-900 group-hover:text-catering transition-colors">Our Gallery</span>
                            <div className="h-0.5 w-0 group-hover:w-full bg-catering transition-all duration-300 mx-auto"></div>
                        </Link>
                    </div>
                </div>
            </Container>
        </Section>
    );
}
