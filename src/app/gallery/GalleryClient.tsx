"use client";

import React, { useState } from 'react';
import { Container, Section, SectionHeading, FadeIn } from '@/components/UI';
import Image from 'next/image';
import { SITE_DATA } from '@/lib/constants';

export default function GalleryClient() {
    const categories = ['All', ...new Set(SITE_DATA.gallery.map(img => img.category))];
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredImages = activeFilter === 'All'
        ? SITE_DATA.gallery
        : SITE_DATA.gallery.filter(img => img.category === activeFilter);

    return (
        <div className="pt-24 min-h-screen bg-neutral-100">
            <Section>
                <Container>
                    <FadeIn>
                        <SectionHeading
                            title="The Visual Archive"
                            subtitle="Moments of Excellence"
                            center
                        />
                    </FadeIn>

                    {/* Enhanced Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-20">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveFilter(cat)}
                                className={`
                                    px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-500
                                    ${activeFilter === cat
                                        ? 'bg-neutral-900 text-white shadow-xl scale-105'
                                        : 'bg-white text-neutral-400 hover:text-neutral-900 shadow-sm border border-neutral-200'}
                                `}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Professional Masonry-style Grid */}
                    <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8 animate-fade-in font-sans">
                        {filteredImages.map((img, idx) => (
                            <div
                                key={idx}
                                className="break-inside-avoid group relative rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl shadow-neutral-200 border-8 border-white group"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.title}
                                    width={1000}
                                    height={1200}
                                    className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-110"
                                />

                                {/* Refined Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <span className="inline-block px-3 py-1 rounded-full bg-catering text-[10px] font-bold text-white uppercase tracking-widest mb-3">
                                            {img.category}
                                        </span>
                                        <h3 className="text-2xl font-serif text-white leading-tight">
                                            {img.title}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredImages.length === 0 && (
                        <div className="py-32 text-center text-neutral-400">
                            <p className="text-lg font-light">No captured moments found in this category.</p>
                        </div>
                    )}
                </Container>
            </Section>
        </div>
    );
}
