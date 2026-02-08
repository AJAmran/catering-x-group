"use client";

import React from 'react';
import { Loader2 } from 'lucide-react';
import { Container } from '@/components/UI';

export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white">
            <Container className="flex flex-col items-center">
                <div className="relative">
                    {/* Animated Outer Ring */}
                    <div className="w-20 h-20 rounded-full border-2 border-neutral-100 border-t-catering animate-spin"></div>

                    {/* Inner Pulse Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-catering/10 flex items-center justify-center text-catering animate-pulse">
                            <Loader2 size={20} className="animate-spin" style={{ animationDuration: '3s' }} />
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center space-y-2">
                    <h2 className="text-xl font-serif font-bold text-neutral-900 tracking-tight">Preparing Excellence</h2>
                    <p className="text-sm text-neutral-400 font-light uppercase tracking-[0.2em] animate-pulse">X-Group Hospitality</p>
                </div>

                {/* Subtle Skeleton Preview (Optional/Abstract) */}
                <div className="mt-16 w-full max-w-sm space-y-4 opacity-20">
                    <div className="h-4 bg-neutral-100 rounded-full w-3/4 mx-auto"></div>
                    <div className="h-4 bg-neutral-100 rounded-full w-full mx-auto"></div>
                    <div className="h-4 bg-neutral-100 rounded-full w-1/2 mx-auto"></div>
                </div>
            </Container>
        </div>
    );
}
