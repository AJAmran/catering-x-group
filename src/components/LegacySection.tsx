import React from 'react';
import Image from 'next/image';
import { Container, Section, SectionHeading } from '@/components/UI';

export const LegacySection = () => {
    return (
        <Section className="bg-white">
            <Container>
                <SectionHeading title="Our Legacy" subtitle="Sine 1992" center />

                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Image Side */}
                    <div className="relative order-2 md:order-1 h-[500px] w-full">
                        <div className="absolute -top-6 -left-6 w-32 h-32 border-t-4 border-l-4 border-catering rounded-tl-[3rem] z-0"></div>
                        <div className="relative w-full h-full z-10 rounded-[3rem] overflow-hidden shadow-2xl">
                            <Image
                                src="https://admin.x-grouprestaurant.com/uploads/06121823e79e0a2001601361a6c4b887.jpg"
                                alt="X-Group Legacy"
                                title="The Legacy and Heritage of X-Group"
                                width={1200}
                                height={800}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-convention rounded-br-[3rem] z-0"></div>

                        {/* Highlights Badge */}
                        <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl z-20 border border-white/20">
                            <div className="flex flex-col">
                                <span className="text-4xl font-serif font-bold text-convention">20+</span>
                                <span className="text-xs uppercase tracking-wider text-gray-500 font-bold">Outlets in Dhaka</span>
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="order-1 md:order-2">
                        <h3 className="text-3xl lg:text-4xl font-serif font-medium mb-8 text-convention-dark leading-tight">
                            A Legacy of Excellence & Hospitality
                        </h3>

                        <div className="space-y-6 text-neutral-600 text-lg leading-relaxed font-light text-justify">
                            <p>
                                X-group Chain Restaurant today symbolizes a name – a state of mind.
                                Its journey to growth and prosperity began in <span className="text-catering font-bold">1992</span>. Today, X-group is one of the country's largest and leading restaurant service providers in Bangladesh, specializing in <span className="font-medium text-neutral-800">Thai, Chinese, and Traditional Cuisine</span>.
                            </p>
                            <p>
                                We have created strong differentiation by offering quality foods, the best possible services, and authenticity to guests which are difficult to imitate. This reputation has enabled us to sustain leadership with <span className="font-bold text-convention-dark">20 outlets</span> in prime locations of Dhaka city.
                            </p>
                            <p>
                                <strong>X-group Catering</strong> is a sister concern, launched on 1st October 2021 to provide the same trusted quality for your indoor and outdoor events. It's X-group Chain Restaurant and Hospitality Management Catering.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-neutral-100 flex items-center justify-between">
                            <div className="text-xs text-neutral-400 font-mono">
                                Trade Licence: Trade/DSCC/018115/2021
                            </div>
                            <div className="flex gap-2">
                                {[1, 2, 3].map(i => <div key={i} className="w-2 h-2 rounded-full bg-convention/20"></div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
