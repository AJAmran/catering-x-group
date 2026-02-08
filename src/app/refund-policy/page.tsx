import React from 'react';
import { Container, Section, SectionHeading, FadeIn, Button } from '@/components/UI';
import { RefreshCcw, XCircle, AlertCircle, Clock, CreditCard, ShieldCheck } from 'lucide-react';

export const metadata = {
    title: 'Refund & Return Policy | X-Group Catering',
    description: 'Our refund and return policy details. Learn about cancellation rules for food orders, table bookings, and event planning at X-Group Catering.',
};

export default function RefundPolicyPage() {
    return (
        <main className="min-h-screen pt-24">
            {/* Header Section */}
            <Section className="bg-neutral-50/50 pb-0">
                <Container>
                    <SectionHeading
                        title="Refund & Return Policy"
                        subtitle="Commitment to Quality"
                        center
                    />
                </Container>
            </Section>

            {/* Quick Cancellation Timelines - The Visual Highlight */}
            <Section className="bg-neutral-50/50 pt-12">
                <Container>
                    <div className="grid md:grid-cols-3 gap-8 mb-24">
                        {[
                            { title: "Online Food", time: "5 Minutes", icon: Clock, color: "blue", desc: "Immediate Cancellation Window" },
                            { title: "Table Booking", time: "3 Hours", icon: RefreshCcw, color: "teal", desc: "Advance Notice Period" },
                            { title: "Party/Events", time: "3 Days", icon: ShieldCheck, color: "green", desc: "Large Scale Event Prep" }
                        ].map((item, idx) => (
                            <FadeIn key={idx} delay={idx * 100}>
                                <div className="bg-white rounded-[3.5rem] p-10 text-center border border-neutral-100 shadow-[0_2px_40px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-2 transition-all duration-500 group relative overflow-hidden">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-neutral-100 group-hover:bg-convention transition-colors duration-500"></div>
                                    <div className={`w-20 h-20 rounded-[2rem] mx-auto mb-8 flex items-center justify-center transition-all duration-500 bg-neutral-50 text-neutral-400 group-hover:bg-convention-dark group-hover:text-white group-hover:scale-110 shadow-sm`}>
                                        <item.icon size={36} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="text-[10px] md:text-xs font-black uppercase tracking-[0.3em] text-convention mb-3">{item.title}</h4>
                                    <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-convention-dark mb-6">{item.time}</div>
                                    <p className="text-[10px] md:text-xs text-neutral-500 leading-relaxed font-bold uppercase tracking-widest px-4">{item.desc}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <div className="max-w-5xl mx-auto space-y-24">
                        {/* 1. Cancellation Policy */}
                        <FadeIn delay={400}>
                            <div className="relative">
                                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-convention-dark text-white flex items-center justify-center shrink-0 shadow-lg shadow-black/10">
                                        <XCircle size={32} strokeWidth={1.5} />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 leading-tight">Cancellation Rules</h2>
                                </div>
                                <div className="bg-white rounded-[4rem] p-10 md:p-16 border border-neutral-100 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.03)] space-y-12">
                                    <div className="prose prose-sm md:prose-lg text-neutral-600 max-w-none font-light leading-relaxed">
                                        <p className="text-lg md:text-xl lg:text-2xl leading-[1.6]">
                                            As a general rule you shall not be entitled to cancel your order once you have received confirmation.
                                            Cancellation is only applicable for <strong>Cash on Delivery (COD)</strong> orders if the processing hasn&apos;t started.
                                            Online payment cancellations are generally not allowed.
                                        </p>
                                        <div className="p-10 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 flex gap-6 mt-10 relative overflow-hidden group">
                                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-catering"></div>
                                            <div className="relative z-10">
                                                <p className="text-base md:text-lg italic text-neutral-500 font-light leading-relaxed">
                                                    *X-group Chain Restaurant reserves the right to cancel orders due to logistical constraints. In such cases, 100% refund will be processed immediately through the original payment method.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid lg:grid-cols-2 gap-10 pt-12 border-t border-neutral-50">
                                        <div>
                                            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-neutral-900 mb-8 flex items-center gap-3 bg-neutral-50 w-fit px-4 py-2 rounded-full">
                                                <AlertCircle size={14} className="text-catering" /> Conditions for Cancellation
                                            </h4>
                                            <ul className="space-y-5">
                                                {[
                                                    "Address falls outside delivery zone",
                                                    "Failure to contact you for confirmation",
                                                    "Incomplete delivery information or direction",
                                                    "Total unavailability of ordered items"
                                                ].map((text, i) => (
                                                    <li key={i} className="flex gap-4 text-base text-neutral-500 font-light items-center">
                                                        <span className="w-2 h-2 rounded-full bg-catering mt-0.5 shrink-0 opacity-40"></span>
                                                        {text}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="bg-convention-dark rounded-[3rem] p-10 md:p-12 text-white relative overflow-hidden group shadow-2xl shadow-black/10">
                                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-12 -mt-12 blur-3xl group-hover:bg-white/10 transition-colors duration-700"></div>
                                            <h4 className="text-xs font-bold uppercase tracking-[0.3em] text-white/50 mb-6 border-b border-white/10 pb-4">Stock Guarantee</h4>
                                            <p className="text-lg text-white/90 leading-relaxed italic font-serif">
                                                &ldquo;In the unlikely event of item unavailability, we will contact you immediately. You are entitled to cancel the entire order with a full refund if alternatives are not preferred.&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 2. Refund Policy */}
                        <FadeIn delay={600}>
                            <div className="relative">
                                <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-neutral-900 text-white flex items-center justify-center shrink-0 shadow-lg shadow-black/10">
                                        <CreditCard size={32} strokeWidth={1.5} />
                                    </div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 leading-tight">Refund Process</h2>
                                </div>
                                <div className="bg-white rounded-[4rem] p-10 md:p-16 border border-neutral-100 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.03)]">
                                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                                        <div className="space-y-8">
                                            <div className="inline-block px-6 py-2 rounded-full border border-green-500/20 bg-green-50 text-green-600 font-bold uppercase tracking-widest text-[10px]">
                                                Verified Eligibility System
                                            </div>
                                            <p className="text-neutral-600 text-lg md:text-xl lg:text-2xl font-light leading-relaxed">
                                                Refunds are processed solely for pre-paid orders where specific quality standards are met:
                                            </p>
                                            <div className="flex gap-6 p-8 rounded-[2rem] bg-convention-dark text-white border border-white/5 shadow-xl group">
                                                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center shadow-sm text-white shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                                    <AlertCircle size={24} />
                                                </div>
                                                <div>
                                                    <p className="text-base md:text-lg text-white/90 font-medium leading-[1.6]">
                                                        Verified packaging tampering or significant damage identified at the exact time of delivery.
                                                    </p>
                                                </div>
                                            </div>
                                            <p className="text-xs text-neutral-400 italic font-medium tracking-tight">
                                                *Decisions on refunds are handled by X-group Senior Management and are considered final and binding.
                                            </p>
                                        </div>
                                        <div className="bg-neutral-50 rounded-[3.5rem] p-12 md:p-16 border border-neutral-100 text-center relative overflow-hidden group">
                                            <div className="absolute inset-0 bg-white scale-0 group-hover:scale-100 transition-transform duration-700 rounded-[3.5rem] opacity-50"></div>
                                            <div className="relative z-10">
                                                <div className="text-4xl md:text-5xl lg:text-6xl font-serif text-neutral-900 mb-6 drop-shadow-xl">10</div>
                                                <div className="text-[12px] font-black uppercase tracking-[0.4em] text-convention mb-8">Working Days</div>
                                                <p className="text-base text-neutral-500 leading-relaxed font-light max-w-xs mx-auto">
                                                    Standard processing timeframe for all credits to successfully appear in your bank statement.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={800} className="mt-32">
                        <div className="bg-convention-dark rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-black/20">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)] z-[1]"></div>
                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8">Dedicated Concierge</h4>
                                <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12">
                                    Our support associates are here to assist with any policy inquiries or specific order discrepancies.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-6">Support Portal</span>
                                        <Button variant="primary" href="mailto:catering@x-grouprestaurant.com" className="">
                                            Reach Out Now
                                        </Button>
                                    </div>
                                    <div className="w-px h-16 bg-white/10 hidden sm:block"></div>
                                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-4">Official Channels</span>
                                        <p className="text-white font-serif text-xl md:text-2xl mb-1">catering@x-grouprestaurant.com</p>
                                        <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em]">24/7 Verified Assistance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.3em] text-center mt-12">
                            Last Revised: February 7, 2026 • © X-Group Catering & Convention
                        </p>
                    </FadeIn>
                </Container>
            </Section>
        </main>
    );
}
