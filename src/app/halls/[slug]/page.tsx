import React from 'react';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
    MapPin, Users, Maximize2, Calendar, Car, ShieldCheck, Music,
    Building2, ArrowLeft, ChevronRight, Layout, Table, UserCheck,
    Monitor, Users2, Briefcase, Square, Info
} from 'lucide-react';
import { SITE_DATA } from '@/lib/constants';
import { Container, Section, SectionHeading, Button, Badge, FadeIn } from '@/components/UI';
import type { Hall, HallConfiguration } from '@/lib/types';


// Configuration Icons mapping
const CONFIG_ICONS: Record<string, any> = {
    banquet: Users,
    cabinet: Layout,
    hollow_square: Square,
    theater: Monitor,
    classroom: Briefcase,
    boardroom: Users2,
    u_shape: UserCheck,
    t_shape: Table,
    i_shape: Table,
    l_shape: Table
};

// Generate static params for all halls
export async function generateStaticParams() {
    return SITE_DATA.halls.map((hall) => ({
        slug: hall.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')
    }));
}

// Generate metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const hall = SITE_DATA.halls.find(
        h => h.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
    );

    if (!hall) {
        return {
            title: 'Hall Not Found | X-Group Catering'
        };
    }

    return {
        title: `${hall.name} | X-Group Catering`,
        description: hall.description || `Explore ${hall.name} - Premium convention hall and event space in ${hall.location || 'Dhaka'}.`
    };
}

export default async function HallDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const hall = SITE_DATA.halls.find(
        h => h.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === slug
    );

    if (!hall) {
        notFound();
    }

    const hallImage = hall.image || SITE_DATA.site.assets.hero_bg;

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section - Full Screen Impact */}
            <div className="relative h-[90vh] min-h-[700px] w-full overflow-hidden">
                <Image
                    src={hallImage}
                    alt={hall.name}
                    fill
                    sizes="100vw"
                    className="object-cover animate-hero-pulse"
                    priority
                />
                {/* Professional Multi-layered Overlay */}
                <div className="absolute inset-0 bg-neutral-950/20"></div> {/* Base tint */}
                <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/80 via-transparent to-neutral-950/90"></div> {/* Top/Bottom readability */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div> {/* Cinematic spotlight */}

                {/* Floating Navigation Breadcrumb */}
                <div className="absolute top-32 inset-x-0 z-20">
                    <Container>
                        <FadeIn>
                            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-white/70">
                                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                                <span className="w-4 h-[1px] bg-white/30"></span>
                                <Link href="/halls" className="hover:text-white transition-colors">Halls</Link>
                                <span className="w-4 h-[1px] bg-white/30"></span>
                                <span className="text-white">{hall.name}</span>
                            </div>
                        </FadeIn>
                    </Container>
                </div>

                {/* Hero Content */}
                <div className="absolute inset-0 flex items-center justify-center pt-20">
                    <Container>
                        <div className="flex flex-col items-center text-center text-white max-w-5xl mx-auto">
                            <FadeIn>
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                                    <MapPin size={14} className="text-convention-light" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">{hall.location || 'Dhaka'}</span>
                                </div>
                            </FadeIn>
                            <FadeIn delay={200}>
                                <h1 className="text-4xl md:text-5xl font-serif leading-[1.1] mb-8">
                                    {hall.name}
                                </h1>
                            </FadeIn>
                            <FadeIn delay={400}>
                                <div className="flex flex-wrap justify-center gap-12 text-white/80 border-t border-white/20 pt-10">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 mb-2">Capacity</span>
                                        <span className="text-3xl font-serif text-white">{hall.capacity || hall.capacity_range}</span>
                                    </div>
                                    <div className="flex flex-col items-center border-l border-white/10 pl-12">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 mb-2">Area</span>
                                        <span className="text-3xl font-serif text-white">{hall.size_sqft ? `${hall.size_sqft.toLocaleString()} ft²` : 'N/A'}</span>
                                    </div>
                                    <div className="flex flex-col items-center border-l border-white/10 pl-12">
                                        <span className="text-[10px] uppercase tracking-[0.2em] font-black text-white/40 mb-2">Status</span>
                                        <span className="text-3xl font-serif text-white">Premium</span>
                                    </div>
                                </div>
                            </FadeIn>
                        </div>
                    </Container>
                </div>
            </div>

            {/* Overlapping Info Section */}
            <Section className="-mt-32 relative z-30 pt-0">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Description Card */}
                        <div className="lg:col-span-2">
                            <FadeIn>
                                <div className="bg-white rounded-[3rem] p-12 md:p-16 shadow-2xl shadow-black/[0.03] border border-neutral-100">
                                    <div className="flex items-center gap-4 mb-10">
                                        <span className="w-16 h-[2px] bg-convention"></span>
                                        <h2 className="text-4xl font-serif font-medium text-neutral-900">The Experience</h2>
                                    </div>
                                    <div className="prose prose-xl max-w-none">
                                        <p className="text-neutral-600 leading-[1.8] text-xl font-light text-justify">
                                            {hall.description}
                                        </p>
                                    </div>

                                    {/* Features Bento */}
                                    <div className="grid md:grid-cols-2 gap-6 mt-20">
                                        {[
                                            { icon: Car, label: "Valet Parking", desc: "Professional valet and secure parking for all guests." },
                                            { icon: ShieldCheck, label: "VIP Security", desc: "Discreet and professional security including CCTV surveillance." },
                                            { icon: Music, label: "Concert Grade Audio", desc: "Advanced acoustic treatment and hi-fidelity Bose systems." },
                                            { icon: Building2, label: "Architectural Grandeur", desc: "Modern interiors designed by leading hospitality architects." }
                                        ].map((amenity, i) => (
                                            <div key={i} className="group p-8 rounded-3xl bg-neutral-50/50 hover:bg-white border border-transparent hover:border-neutral-100 transition-all duration-500 hover:shadow-xl hover:shadow-black/[0.02]">
                                                <div className="w-14 h-14 rounded-2xl bg-white text-convention shadow-sm flex items-center justify-center mb-6 group-hover:bg-convention group-hover:text-white transition-all duration-500">
                                                    <amenity.icon size={26} />
                                                </div>
                                                <h3 className="text-xl font-bold text-neutral-900 mb-2">{amenity.label}</h3>
                                                <p className="text-neutral-500 text-sm leading-relaxed">{amenity.desc}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>

                            {/* Seating Capacities Grid */}
                            {hall.configurations && (
                                <FadeIn className="mt-20">
                                    <div className="flex items-center gap-4 mb-12">
                                        <span className="w-16 h-[2px] bg-convention"></span>
                                        <h2 className="text-4xl font-serif font-medium text-neutral-900">Spatial Versatility</h2>
                                    </div>
                                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                        {Object.entries(hall.configurations).map(([key, value]) => (
                                            <div key={key} className="bg-neutral-50 rounded-[2rem] p-8 border border-neutral-100 flex flex-col items-center text-center group transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-black/5">
                                                <div className="w-14 h-14 rounded-full bg-white text-convention mb-6 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500">
                                                    {React.createElement(CONFIG_ICONS[key] || Users, { size: 24 })}
                                                </div>
                                                <p className="text-3xl font-serif font-bold text-neutral-900 mb-1">{value}</p>
                                                <p className="text-[10px] uppercase tracking-widest text-neutral-400 font-black">
                                                    {key.replace(/_/g, ' ')}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </FadeIn>
                            )}

                            {/* Signature Spaces / Sub-halls */}
                            {hall.halls && hall.halls.length > 0 && (
                                <div className="mt-32">
                                    <div className="flex items-baseline justify-between mb-16">
                                        <div className="flex items-center gap-4">
                                            <span className="w-16 h-[2px] bg-convention"></span>
                                            <h2 className="text-4xl font-serif font-medium text-neutral-900">Exclusive Wings</h2>
                                        </div>
                                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-300">{hall.halls.length} Curated Venues</span>
                                    </div>
                                    <div className="grid md:grid-cols-2 gap-10">
                                        {hall.halls.map((subHall, idx) => (
                                            <FadeIn key={idx} delay={idx * 100}>
                                                <div className="bg-white rounded-[3.5rem] p-12 border border-neutral-100 group hover:shadow-2xl hover:shadow-black/[0.05] transition-all duration-700 relative overflow-hidden group">
                                                    <div className="absolute top-0 right-0 w-32 h-32 bg-neutral-50 rounded-bl-full translate-x-16 -translate-y-16 group-hover:translate-x-10 group-hover:-translate-y-10 transition-transform duration-700"></div>

                                                    <div className="relative z-10 mb-12">
                                                        <h3 className="text-3xl font-serif font-medium text-neutral-900 mb-2 group-hover:text-convention transition-colors duration-500">{subHall.name}</h3>
                                                        <p className="text-[10px] text-convention font-black uppercase tracking-[0.2em]">Signature Space</p>
                                                    </div>

                                                    <div className="grid grid-cols-2 gap-8 mb-12">
                                                        <div>
                                                            <p className="text-[10px] text-neutral-400 font-black uppercase tracking-widest mb-2">Total Area</p>
                                                            <p className="text-2xl font-serif text-neutral-900 font-bold">{subHall.size_sqft.toLocaleString()} <span className="text-xs font-sans text-neutral-300">sq ft</span></p>
                                                        </div>
                                                        <div>
                                                            <p className="text-[10px] text-neutral-400 font-black uppercase tracking-widest mb-2">Capacity</p>
                                                            <p className="text-2xl font-serif text-neutral-900 font-bold">{subHall.capacity} <span className="text-xs font-sans text-neutral-300">guests</span></p>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-4 pt-8 border-t border-neutral-100">
                                                        {Object.entries(subHall.configurations).slice(0, 3).map(([key, value]) => (
                                                            <div key={key} className="flex justify-between items-center group/item text-sm">
                                                                <span className="text-neutral-500 font-medium capitalize">{key.replace(/_/g, ' ')}</span>
                                                                <span className="font-serif font-bold text-neutral-900">{value as number}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </FadeIn>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Sidebar - Sticky Action */}
                        <div className="lg:col-span-1">
                            <div className="lg:sticky lg:top-32 space-y-8">
                                <FadeIn delay={600}>
                                    <div className="bg-neutral-900 text-white rounded-[3.5rem] p-12 relative overflow-hidden group shadow-2xl shadow-black/20">
                                        <div className="absolute inset-0 bg-neutral-800 opacity-50 group-hover:scale-110 transition-transform duration-700"></div>
                                        <div className="absolute top-0 right-0 w-48 h-48 bg-convention/20 rounded-full blur-[80px] -mr-24 -mt-24 pointer-events-none"></div>

                                        <div className="relative z-10">
                                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 border border-white/20 text-[8px] font-black uppercase tracking-[0.3em] mb-8">Reservation</span>
                                            <h3 className="text-4xl font-serif mb-6 leading-tight">Host Your Royal Event</h3>
                                            <p className="text-white/50 text-base mb-10 leading-relaxed font-light">
                                                Our dedicated associates are available to consult on your bespoke event requirements.
                                            </p>

                                            <div className="space-y-6 mb-12">
                                                <div className="flex items-center gap-5 p-5 rounded-3xl bg-white/5 border border-white/10">
                                                    <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-neutral-900 shadow-xl">
                                                        <Calendar size={20} />
                                                    </div>
                                                    <div>
                                                        <p className="text-[10px] text-white/40 font-black uppercase tracking-widest mb-1">Status</p>
                                                        <p className="text-sm font-bold text-white tracking-wide">Prime Availability 2026</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <Button href="/book-hall" fullWidth variant="white" className="py-6 text-sm font-black uppercase tracking-widest shadow-2xl">
                                                Request Application
                                            </Button>

                                            <div className="mt-8 flex items-center justify-center gap-2">
                                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                                                <span className="text-[10px] font-bold text-white/30 uppercase tracking-widest">Global Service Excellence</span>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>

                                {/* Quick Contact */}
                                <FadeIn delay={800}>
                                    <div className="bg-white rounded-[3rem] p-10 border border-neutral-100 shadow-xl shadow-black/[0.02]">
                                        <p className="text-[10px] font-black text-neutral-400 uppercase tracking-[0.2em] mb-8">Concerige Assistance</p>
                                        <a href={`tel:${SITE_DATA.site.contact.phone[0]}`} className="block group mb-8">
                                            <p className="text-xs text-neutral-400 font-bold mb-1 transition-colors group-hover:text-convention">Direct Line</p>
                                            <p className="text-2xl font-serif text-neutral-900 group-hover:translate-x-2 transition-transform duration-500 underline decoration-neutral-100 underline-offset-8 decoration-2">{SITE_DATA.site.contact.phone[0]}</p>
                                        </a>
                                        <a href={`mailto:${SITE_DATA.site.contact.email}`} className="block group">
                                            <p className="text-xs text-neutral-400 font-bold mb-1 transition-colors group-hover:text-convention">Inquiries</p>
                                            <p className="text-xl font-serif text-neutral-900 break-all group-hover:translate-x-2 transition-transform duration-500">{SITE_DATA.site.contact.email}</p>
                                        </a>
                                    </div>
                                </FadeIn>
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>

            {/* Bottom Navigation */}
            <Section className="pb-32">
                <Container>
                    <div className="pt-24 border-t border-neutral-100 flex flex-col md:flex-row items-center justify-between gap-8">
                        <Link href="/halls" className="group flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full border border-neutral-200 flex items-center justify-center group-hover:bg-neutral-900 group-hover:text-white transition-all duration-500 group-hover:-translate-x-2">
                                <ArrowLeft size={20} />
                            </div>
                            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-neutral-400 group-hover:text-neutral-900 transition-colors">Return to Collection</span>
                        </Link>

                        <div className="flex items-center gap-12">
                            <div className="text-right hidden md:block">
                                <p className="text-[10px] font-black text-neutral-300 uppercase tracking-widest mb-1">Social</p>
                                <div className="flex gap-4">
                                    <span className="text-xs font-bold text-neutral-400 hover:text-neutral-900 cursor-pointer">Instagram</span>
                                    <span className="text-xs font-bold text-neutral-400 hover:text-neutral-900 cursor-pointer">LinkedIn</span>
                                </div>
                            </div>
                            <Button href="/contact" variant="secondary" className="px-12 py-5 rounded-full shadow-2xl">
                                Global Inquiries
                            </Button>
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
