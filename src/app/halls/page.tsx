import React from 'react';
import { MapPin, Car, ShieldCheck, Music, Calendar, Users, Maximize2, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '@/lib/constants';
import { Container, Section, SectionHeading, Button, Badge } from '@/components/UI';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
    title: 'Luxury Convention Halls & Event Venues in Dhaka | X-Group Catering',
    description: 'Explore X-Group\'s collection of premium convention halls including Shimanto Convention Center and Zam Zam Convention Halls. Perfect for weddings, corporate events, and grand galas.',
    keywords: ["convention hall dhaka", "mirpur convention hall", "shimanto convention center", "wedding halls dhaka", "premium venues"],
};

export default function HallsPage() {
    return (
        <div className="pt-24 min-h-screen bg-neutral-50">
            <Section>
                <Container>
                    <SectionHeading title="Venues & Spaces" subtitle="Find Your Perfect Setting" center />

                    <div className="space-y-32" aria-label="Available event venues">
                        {SITE_DATA.halls.map((location, idx) => {
                            const slug = location.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');

                            return (
                                <article key={idx} className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center group" aria-labelledby={`hall-name-${idx}`}>
                                    {/* Image Side - Alternating */}
                                    <div className={`lg:w-1/2 relative h-[300px] md:h-[500px] w-full ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                                        <Link href={`/halls/${slug}`} className="block h-full w-full" aria-label={`View details for ${location.name}`}>
                                            <div className="h-full w-full rounded-[3rem] overflow-hidden shadow-2xl relative z-10">
                                                <Image
                                                    src={location.image || ""}
                                                    alt={location.name}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                                                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                                    priority={idx < 2}
                                                />
                                                <div className="absolute top-6 left-6">
                                                    <div className="bg-white/90 backdrop-blur-md px-5 py-3 rounded-2xl shadow-lg flex items-center gap-3 border border-neutral-100">
                                                        <div className="bg-convention/10 p-2 rounded-full text-convention" aria-hidden="true"><MapPin size={18} /></div>
                                                        <span className="text-sm font-bold text-neutral-800">{location.location || "Dhaka, Bangladesh"}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                        {/* Decorative element behind */}
                                        <div className={`absolute -inset-4 bg-convention/5 rounded-[3.5rem] -z-10 transform transition-transform duration-500 ${idx % 2 === 0 ? '-rotate-3 group-hover:-rotate-6' : 'rotate-3 group-hover:rotate-6'}`} aria-hidden="true"></div>
                                    </div>

                                    {/* Content Side */}
                                    <div className="lg:w-1/2">
                                        <Badge color="blue">Available Now</Badge>
                                        <Link href={`/halls/${slug}`}>
                                            <h3 id={`hall-name-${idx}`} className="text-4xl md:text-5xl font-serif text-neutral-900 mt-6 mb-6 leading-tight hover:text-convention transition-colors cursor-pointer">
                                                {location.name}
                                            </h3>
                                        </Link>

                                        {/* Description */}
                                        {location.description && (
                                            <p className="text-neutral-700 leading-relaxed mb-8 text-justify line-clamp-4">
                                                {location.description}
                                            </p>
                                        )}

                                        {/* Stats Grid */}
                                        <div className="grid grid-cols-2 gap-4 mb-10">
                                            <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm text-center group/stat hover:-translate-y-1 transition-transform">
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <Users className="text-convention" size={20} aria-hidden="true" />
                                                    <p className="text-3xl font-serif text-convention" aria-label={`Capacity: ${location.capacity || location.capacity_range} guests`}>
                                                        {location.capacity || location.capacity_range}
                                                    </p>
                                                </div>
                                                <p className="text-xs text-neutral-600 uppercase font-sans font-bold tracking-wider">Guest Capacity</p>
                                            </div>
                                            <div className="bg-white p-6 rounded-3xl border border-neutral-100 shadow-sm text-center group/stat hover:-translate-y-1 transition-transform">
                                                <div className="flex items-center justify-center gap-2 mb-2">
                                                    <Maximize2 className="text-convention" size={20} aria-hidden="true" />
                                                    <p className="text-3xl font-serif text-convention">
                                                        {location.size_sqft ? location.size_sqft.toLocaleString() : 'Var.'}
                                                    </p>
                                                </div>
                                                <p className="text-xs text-neutral-600 uppercase font-sans font-bold tracking-wider">Square Feet</p>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="mb-10 flex flex-wrap gap-4" aria-label="Hall features">
                                            {[
                                                { icon: Car, label: "Parking" },
                                                { icon: ShieldCheck, label: "Security" },
                                                { icon: Music, label: "Audio System" }
                                            ].map((feature, i) => (
                                                <div key={i} className="flex items-center gap-2 bg-neutral-100 px-4 py-2 rounded-full text-xs font-bold text-neutral-700">
                                                    <feature.icon size={14} aria-hidden="true" /> {feature.label}
                                                </div>
                                            ))}
                                        </div>

                                        {/* Sub-halls count badge */}
                                        {location.halls && location.halls.length > 0 && (
                                            <div className="mb-8 inline-flex items-center gap-2 bg-catering/10 text-catering px-4 py-2 rounded-full text-sm font-bold">
                                                <span aria-hidden="true" className="w-1.5 h-1.5 rounded-full bg-catering animate-pulse"></span>
                                                <span>{location.halls.length} Available Halls & Spaces</span>
                                            </div>
                                        )}

                                        <div className="flex gap-4">
                                            <Button href={`/halls/${slug}`} icon={<ArrowRight size={18} />} label={`View details for ${location.name}`}>View Details</Button>
                                            <Button variant="outline" href="/book-hall" icon={<Calendar size={18} />} label={`Book ${location.name} for your event`}>Book Now</Button>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
