"use client";

import React, { useEffect } from 'react';
import { Container, Button, Section } from '@/components/UI';
import { AlertCircle, RefreshCw, PhoneCall } from 'lucide-react';
import { SITE_DATA } from '@/lib/constants';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error('Application Error:', error);
    }, [error]);

    return (
        <Section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
            {/* Structural Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.03)_0%,_transparent_70%)] pointer-events-none"></div>

            <Container className="relative z-10 text-center">
                <div className="max-w-xl mx-auto space-y-10">
                    {/* Error Icon Hub */}
                    <div className="flex justify-center">
                        <div className="w-24 h-24 rounded-[2.5rem] bg-orange-50 flex items-center justify-center text-orange-500 shadow-2xl shadow-orange-500/10 border border-orange-100 animate-bounce">
                            <AlertCircle size={48} strokeWidth={1.5} />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-3xl md:text-5xl font-serif font-bold text-neutral-900 tracking-tight leading-tight">
                            Something Went Wrong <br /> in Our Kitchen
                        </h1>
                        <p className="text-lg text-neutral-500 font-light leading-relaxed">
                            We encountered an unexpected technical glitch while processing your request. Our digital concierge is investigating.
                        </p>
                    </div>

                    {/* Developer Info (Subtle) */}
                    {process.env.NODE_ENV === 'development' && (
                        <div className="p-4 bg-neutral-50 rounded-2xl border border-neutral-100 text-left overflow-auto max-h-40">
                            <code className="text-xs text-red-500">
                                {error.message || 'Unknown error occurred'}
                                {error.digest && <div className="mt-1 text-neutral-400">Digest: {error.digest}</div>}
                            </code>
                        </div>
                    )}

                    <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
                        <Button
                            onClick={() => reset()}
                            variant="primary"
                            className="px-10 py-5 flex items-center justify-center gap-3 shadow-xl hover:shadow-catering/20"
                        >
                            <RefreshCw size={20} className="group-hover:rotate-180 transition-transform duration-700" />
                            Try Recovery
                        </Button>
                        <Button
                            href={`tel:${SITE_DATA.site.contact.phone[0]}`}
                            variant="outline"
                            className="px-10 py-5 flex items-center justify-center gap-3 border-neutral-200 text-neutral-900 hover:bg-neutral-50"
                        >
                            <PhoneCall size={20} />
                            Contact Support
                        </Button>
                    </div>

                    {/* Meta Info */}
                    <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-neutral-300">
                        X-Group Reliability Engine // 1.0.0
                    </p>
                </div>
            </Container>
        </Section>
    );
}
