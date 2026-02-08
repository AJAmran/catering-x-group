"use client";

import React, { useState } from 'react';
import { Container, Section, SectionHeading, FadeIn } from '@/components/UI';
import Image from 'next/image';
import { SITE_DATA } from '@/lib/constants';
import { X } from 'lucide-react';

export default function GalleryClient() {
    const categories = ['All', ...new Set(SITE_DATA.gallery.map(img => img.category))];
    const [activeFilter, setActiveFilter] = useState('All');
    const [selectedImage, setSelectedImage] = useState<typeof SITE_DATA.gallery[0] | null>(null);

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
                                onClick={() => setSelectedImage(img)}
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

            {/* Lightbox / Details Page Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fade-in"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2 z-50 rounded-full bg-white/10"
                        onClick={() => setSelectedImage(null)}
                        aria-label="Close details"
                    >
                        <X size={32} />
                    </button>

                    <div
                        className="relative w-full max-w-5xl max-h-[90vh] flex flex-col md:flex-row bg-white rounded-3xl overflow-hidden shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Side */}
                        <div className="w-full md:w-2/3 bg-black relative min-h-[300px] md:min-h-[500px]">
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                fill
                                className="object-contain"
                                sizes="(max-width: 768px) 100vw, 66vw"
                                priority
                            />
                        </div>

                        {/* Details Side */}
                        <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white">
                            <span className="inline-block self-start px-3 py-1 rounded-full bg-catering/10 text-catering text-[10px] font-bold uppercase tracking-widest mb-6">
                                {selectedImage.category}
                            </span>
                            <h3 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-6 leading-tight">
                                {selectedImage.title}
                            </h3>
                            <div className="w-12 h-[2px] bg-neutral-100 mb-6"></div>
                            <p className="text-neutral-500 font-light leading-relaxed text-sm md:text-base">
                                Experience the visual journey of {selectedImage.title}.
                                Part of our exclusive {selectedImage.category.toLowerCase()} collection.
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
