"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Hall } from '@/lib/types';

export const FloatingCards = ({ halls }: { halls: Hall[] }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (halls.length <= 1) return;

        const timer = setInterval(() => {
            setActiveIndex((current) => (current + 1) % halls.length);
        }, 4000); // 4 seconds interval for a premium feel

        return () => clearInterval(timer);
    }, [halls.length]);

    return (
        <div
            className="hidden lg:block lg:col-span-5 relative perspective-1000 h-[600px]"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured Venues"
        >
            <ul className="relative h-full w-full">
                {halls.map((hall, idx) => {
                    // Calculate position relative to activeIndex (0 is front)
                    const relativeIndex = (idx - activeIndex + halls.length) % halls.length;

                    // Stack depth limit for visual clarity
                    const isVisible = relativeIndex < 5;
                    const zIndex = 30 - relativeIndex;

                    // Transition the opacity and scale based on depth
                    const depthOpacity = relativeIndex === 0 ? 1 : Math.max(0, 0.7 - (relativeIndex * 0.15));
                    const scale = 1 - (relativeIndex * 0.08);

                    return (
                        <li
                            key={hall.name}
                            className="absolute inset-0 list-none"
                            aria-hidden={relativeIndex !== 0}
                        >
                            <Link
                                href="/halls"
                                aria-label={`View details for ${hall.name}`}
                                className={`
                                    absolute w-72 aspect-[3/4] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white/10
                                    transition-all duration-1000 ease-in-out hover:!z-50 hover:!scale-105 cursor-pointer
                                    bg-neutral-800 group
                                `}
                                style={{
                                    top: `${relativeIndex * 45}px`,
                                    left: `${relativeIndex * 65}px`,
                                    transform: `rotateY(-15deg) rotateZ(${relativeIndex * -6}deg) translateZ(${relativeIndex * -60}px) scale(${scale})`,
                                    zIndex: zIndex,
                                    opacity: isVisible ? depthOpacity : 0,
                                    visibility: isVisible ? 'visible' : 'hidden',
                                    pointerEvents: relativeIndex === 0 ? 'auto' : 'none' // Only top card is clickable to avoid mis-clicks
                                }}
                            >
                                <Image
                                    src={hall.image || ""}
                                    alt={hall.name}
                                    title={`${hall.name} - Featured Venue`}
                                    width={400}
                                    height={533}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                                    priority={idx === 0}
                                    sizes="(max-width: 768px) 300px, 400px"
                                />
                                {/* Overlay with subtle blur */}
                                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"></div>

                                <div className="absolute bottom-0 inset-x-0 p-8 bg-gradient-to-t from-black/95 via-black/40 to-transparent z-10">
                                    <p className="text-white font-serif text-2xl mb-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">{hall.name}</p>
                                    <div className="flex items-center gap-2 text-convention-light text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="w-1.5 h-1.5 rounded-full bg-convention animate-pulse"></div>
                                        {hall.capacity || hall.capacity_range} Guests
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};
