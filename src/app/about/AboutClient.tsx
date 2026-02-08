"use client";

import React from 'react';
import { ChefHat, MapPin, Award, ArrowRight, Target, Users, BookOpen, Clock, Heart, Building2, UtensilsCrossed } from 'lucide-react';
import { Container, Section, SectionHeading, FadeIn, Badge, Button } from '@/components/UI';
import { LegacySection } from '@/components/LegacySection';
import Image from 'next/image';
import { SITE_DATA } from '@/lib/constants';

export default function AboutClient() {
    return (
        <div className="pt-24 min-h-screen bg-neutral-50 selection:bg-convention/20">
            {/* 1. Brand Legacy Section */}
            <LegacySection />

            {/* 2. Philosophy & Vision (Editorial Layout) */}


            {/* 3. Core Pillars - Visual Grid */}
            <Section className="bg-white">
                <Container>
                    <SectionHeading
                        title="Our Pillars of Excellence"
                        subtitle="The Standard"
                        isH1
                        center
                    />

                    <div className="grid md:grid-cols-3 gap-12 mt-20">
                        {SITE_DATA.about.pillars.map((pillar, i) => {
                            const Icon = { ChefHat, Building2, Award }[pillar.icon] || ChefHat;
                            return (
                                <FadeIn key={i} delay={i * 200} className="group cursor-default">
                                    <div className={`w-20 h-20 rounded-3xl ${pillar.color} border flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-all duration-500 shadow-xl shadow-transparent group-hover:shadow-current/10`}>
                                        <Icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-2xl font-serif font-bold mb-4 text-neutral-900">{pillar.title}</h4>
                                    <p className="text-neutral-500 leading-relaxed font-light text-lg italic">{pillar.desc}</p>
                                    <div className="mt-6 flex items-center gap-2 text-neutral-300 group-hover:text-neutral-900 transition-colors">
                                        <div className="w-6 h-px bg-current"></div>
                                        <span className="text-[10px] uppercase font-bold tracking-[0.2em]">{pillar.title.split(' ')[0]}</span>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>
                </Container>
            </Section>

            {/* 4. Timeline / Historical Context (Professional Vertical Path) */}
            <Section className="bg-white overflow-hidden relative py-32">
                {/* Abstract Background Elements */}
                <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-convention/5 rounded-full blur-[150px]"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-catering/5 rounded-full blur-[120px]"></div>
                </div>

                <Container>
                    <SectionHeading
                        title="Decades of Dedication"
                        subtitle="The Evolutionary Path"
                        center
                    />

                    <div className="mt-40 relative">
                        {/* The Professional Architectural Track */}
                        <div className="absolute left-[20px] lg:left-1/2 top-0 bottom-0 w-[2px] bg-neutral-100 transform -translate-x-1/2">
                            <div className="absolute top-0 bottom-0 w-full bg-gradient-to-b from-catering via-convention to-catering opacity-30"></div>
                        </div>

                        <div className="space-y-12 lg:space-y-0 relative z-10">
                            {SITE_DATA.about.timeline.map((milestone, idx) => (
                                <FadeIn key={idx} delay={idx * 50} className={`relative lg:h-64 group flex flex-col lg:block`}>
                                    {/* Central Marker (Logo Pin) */}
                                    <div className="absolute left-[20px] lg:left-1/2 top-0 transform -translate-x-1/2 z-30">
                                        <div className="w-14 h-14 rounded-full bg-white border-2 border-neutral-100 p-2 flex items-center justify-center group-hover:border-catering group-hover:shadow-[0_0_30px_rgba(239,68,68,0.2)] transition-all duration-500 overflow-hidden bg-white/80 backdrop-blur-sm">
                                            <div className="relative w-full h-full">
                                                <Image
                                                    src="/catering-logo.png"
                                                    alt="X-Group"
                                                    title="X-Group Concern Marker"
                                                    fill
                                                    className="object-contain"
                                                    sizes="50px"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Trendy Horizontal Connector (Highly Visible Architectural Line) */}
                                    <div className={`
                                        hidden lg:block absolute top-7 h-[2px] transition-all duration-700
                                        ${idx % 2 === 0
                                            ? 'right-1/2 w-[8%] group-hover:w-[15%] bg-gradient-to-l from-catering via-catering/40 to-transparent shadow-[0_0_15px_rgba(239,68,68,0.3)]'
                                            : 'left-1/2 w-[8%] group-hover:w-[15%] bg-gradient-to-r from-convention via-convention/40 to-transparent shadow-[0_0_15px_rgba(30,58,102,0.3)]'}
                                    `}>
                                        {/* End Node on Line */}
                                        <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-white shadow-lg transition-all duration-500
                                            ${idx % 2 === 0 ? 'left-0 bg-catering' : 'right-0 bg-convention'} animate-pulse`}></div>
                                    </div>

                                    {/* Content Card - High Fidelity Trendy Design */}
                                    <div className={`
                                        pl-16 lg:pl-0 lg:absolute lg:top-0 lg:w-[42%]
                                        ${idx % 2 === 0 ? 'lg:right-[58%] lg:text-right' : 'lg:left-[58%] lg:text-left'}
                                    `}>
                                        <div className={`
                                            relative group/card perspective-1000
                                        `}>
                                            {/* Glow Backdrop */}
                                            <div className="absolute -inset-1 bg-gradient-to-r from-catering/20 via-convention/20 to-catering/20 rounded-[2.6rem] blur-xl opacity-0 group-hover/card:opacity-100 transition-opacity duration-700"></div>

                                            <div className={`
                                                relative bg-white/80 backdrop-blur-md border border-white p-1 rounded-[2.5rem] 
                                                shadow-[0_8px_32px_rgba(0,0,0,0.04)] hover:shadow-[0_32px_64px_rgba(0,0,0,0.08)]
                                                transition-all duration-700 group-hover/card:-translate-y-4
                                            `}>
                                                {/* Inner Content Layer with subtle grain/pattern */}
                                                <div className="relative bg-white rounded-[2.3rem] p-8 overflow-hidden h-full">
                                                    {/* Brand Accent Bar */}
                                                    <div className={`absolute top-0 bottom-0 w-1.5 ${idx % 2 === 0 ? 'right-0 bg-catering' : 'left-0 bg-convention'}`}></div>

                                                    {/* Header: Year & Type Badge */}
                                                    <div className={`flex items-center justify-between mb-6 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                                                        <div className="flex flex-col">
                                                            <span className="text-4xl font-serif font-black text-neutral-900 leading-none tracking-tighter mb-1">
                                                                {milestone.year}
                                                            </span>
                                                            <div className={`h-1 w-12 rounded-full ${idx % 2 === 0 ? 'bg-catering ml-auto' : 'bg-convention'}`}></div>
                                                        </div>
                                                        <div className="px-4 py-1.5 rounded-full bg-neutral-50 border border-neutral-100 text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                                                            {idx < 10 ? 'Restaurant' : idx < 14 ? 'Venue' : 'Division'}
                                                        </div>
                                                    </div>

                                                    {/* Body: Title & Description */}
                                                    <h4 className="text-2xl font-serif font-bold text-neutral-800 mb-3 group-hover/card:text-catering transition-colors tracking-tight">
                                                        {milestone.event}
                                                    </h4>
                                                    <p className="text-neutral-500 font-light leading-relaxed text-sm max-w-sm">
                                                        {milestone.desc}
                                                    </p>

                                                    {/* Interactive Footer */}
                                                    <div className={`mt-8 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-300 group-hover/card:text-neutral-500 transition-colors ${idx % 2 === 0 ? 'justify-end' : ''}`}>
                                                        <span>Established</span>
                                                        <div className="w-8 h-px bg-current"></div>
                                                        <span className="text-catering">{milestone.year.slice(-2)}'</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
