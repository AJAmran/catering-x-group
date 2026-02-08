"use client";

import React from 'react';
import { CheckCircle, Apple, Play, ArrowRight } from 'lucide-react';
import { SITE_DATA, APP_FEATURES } from '@/lib/constants';
import { Button, SectionHeading, Container, FadeIn, Section } from '@/components/UI';
import Image from 'next/image';

export const AppPromotion = () => {
    const appInfo = SITE_DATA.site.apps?.foodbite;

    if (!appInfo) return null;

    return (
        <Section className="bg-white">
            <Container>
                <SectionHeading
                    title="X-Group Flavors, Delivered"
                    subtitle={`Powered by ${appInfo.name}`}
                    center
                />

                <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-center">
                    {/* Content Side */}
                    <div className="lg:col-span-6 space-y-10 order-2 lg:order-1">
                        <FadeIn>
                            <h3 className="text-3xl lg:text-4xl font-serif font-medium text-neutral-900 leading-tight">
                                Experience premium dining <br /> in your living room.
                            </h3>
                            <p className="text-lg text-neutral-600 font-light leading-relaxed mt-6 max-w-xl text-justify">
                                Can't make it to our signature venues? Order our chef-curated specials directly to your home through the
                                <span className="text-catering font-bold mx-1">{appInfo.name}</span> app.
                                We bring the authentic taste of X-Group to your doorstep with zero compromise on quality.
                            </p>
                        </FadeIn>

                        <FadeIn delay={200}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {APP_FEATURES.map((feature, i) => (
                                    <div key={i} className="flex items-center gap-3 group">
                                        <div className="w-6 h-6 rounded-full bg-catering/10 flex items-center justify-center text-catering shrink-0">
                                            <CheckCircle size={14} />
                                        </div>
                                        <span className="text-sm font-bold uppercase tracking-wider text-neutral-500">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>

                        <FadeIn delay={400} className="flex flex-wrap gap-4 pt-4">
                            <a
                                href={appInfo.ios}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[180px] flex items-center gap-4 bg-neutral-900 text-white px-6 py-4 rounded-2xl hover:bg-black transition-all shadow-xl group"
                            >
                                <Apple size={28} className="group-hover:scale-110 transition-transform" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold tracking-widest opacity-60">App Store</div>
                                    <div className="text-lg font-bold leading-none font-serif">Download</div>
                                </div>
                            </a>

                            <a
                                href={appInfo.android}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[180px] flex items-center gap-4 bg-white text-neutral-900 px-6 py-4 rounded-2xl hover:bg-neutral-50 transition-all shadow-lg group border border-neutral-200"
                            >
                                <Play size={28} className="group-hover:scale-110 transition-transform fill-catering text-catering" />
                                <div className="text-left">
                                    <div className="text-[10px] uppercase font-bold tracking-widest text-neutral-400">Google Play</div>
                                    <div className="text-lg font-bold leading-none font-serif">Get It On</div>
                                </div>
                            </a>
                        </FadeIn>
                    </div>

                    {/* Visual Side (Consistent with LegacySection) */}
                    <div className="lg:col-span-6 relative order-1 lg:order-2 flex justify-center">
                        {/* Decorative Corner Borders (Brand Pattern) */}
                        <div className="absolute -top-6 -right-6 lg:-top-10 lg:-right-10 w-32 h-32 border-t-4 border-r-4 border-catering rounded-tr-[3rem] z-0"></div>
                        <div className="absolute -bottom-6 -left-6 lg:-bottom-10 lg:-left-10 w-32 h-32 border-b-4 border-l-4 border-convention rounded-bl-[3rem] z-0"></div>

                        <FadeIn delay={600} className="relative z-10">
                            {/* Phone Mockup with subtle interaction */}
                            <div className="relative w-[300px] h-[600px] bg-neutral-900 rounded-[3.5rem] border-[8px] border-neutral-800 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden group">
                                {/* Notch */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-neutral-900 rounded-b-3xl z-30"></div>

                                <Image
                                    src="https://res.cloudinary.com/dhukcjdmi/image/upload/v1770530254/foodbitebd_n5axe3.jpg"
                                    alt="Foodbitebd App Interface"
                                    title="Order X-Group Catering via Foodbite App"
                                    width={400}
                                    height={892}
                                    className="w-full h-auto opacity-90 group-hover:scale-105 transition-transform duration-[3s]"
                                    sizes="(max-width: 768px) 300px, 400px"
                                />

                                {/* Interactive Overlay */}
                                <div className="absolute bottom-0 w-full bg-white/95 backdrop-blur-xl p-8 rounded-t-[2.5rem] shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
                                    <div className="flex justify-between items-center mb-6">
                                        <div>
                                            <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-1">Status</div>
                                            <div className="font-bold text-neutral-900 text-lg font-serif">Live Orders</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-[10px] text-neutral-400 font-bold uppercase tracking-widest mb-1">Rating</div>
                                            <div className="font-bold text-catering text-lg font-serif">4.9 ★</div>
                                        </div>
                                    </div>
                                    <Button variant="secondary" fullWidth className="py-4 shadow-lg text-sm bg-neutral-900 text-white hover:bg-black border-0">
                                        Order via App <ArrowRight size={16} className="ml-2" />
                                    </Button>
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
