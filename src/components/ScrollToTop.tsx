"use client";

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className={`
                fixed bottom-8 right-8 z-[100] sm:bottom-12 sm:right-12
                p-3 md:p-4 rounded-full shadow-xl shadow-convention/20 
                bg-convention text-white border border-white/20
                hover:bg-convention-dark hover:scale-110 active:scale-95
                transition-all duration-300 ease-out
                flex items-center justify-center
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}
            `}
        >
            <ArrowUp size={20} absoluteStrokeWidth strokeWidth={2.5} />
        </button>
    );
};
