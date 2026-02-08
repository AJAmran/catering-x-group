import React from 'react';
import { Container, Section, SectionHeading, FadeIn, Badge } from '@/components/UI';
import { FileText, ClipboardCheck, XCircle, AlertTriangle, Truck, ShoppingBag, HeartOff, CheckCircle2 } from 'lucide-react';

export const metadata = {
    title: 'Terms & Conditions | X-Group Catering',
    description: 'Read the official terms and conditions for X-Group Catering & Convention. Information on order policies, cancellations, and service agreements.',
};

const policySections = [
    {
        title: "Order Policy",
        icon: ClipboardCheck,
        items: [
            { label: "Small Events (<100)", value: "Confirm by 12 Noon, day before" },
            { label: "Medium Events (>100)", value: "Confirm 1 day in advance" },
            { label: "Large Events (200+)", value: "Confirm 2 days in advance" },
            { label: "Advance Payment", value: "50% Required for confirmation" }
        ]
    }
];

export default function TermsConditionsPage() {
    return (
        <main className="min-h-screen">
            {/* Header Section */}
            <Section className="bg-neutral-50/50 pb-0">
                <Container>
                    <SectionHeading
                        title="Terms & Conditions"
                        subtitle="Agreement Framework"
                        center
                    />
                </Container>
            </Section>

            <Section className="bg-neutral-50/50 pt-12 text-black/10">
                <Container>
                    <div className="max-w-6xl mx-auto space-y-24">

                        {/* 1. Order Policy Grid */}
                        <FadeIn delay={100}>
                            <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.03)] border border-neutral-100 relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-2 h-full bg-convention"></div>
                                <div className="flex flex-col md:flex-row md:items-center gap-8 mb-14">
                                    <div className="w-16 h-16 rounded-[1.5rem] bg-convention-dark text-white flex items-center justify-center shadow-lg shadow-black/10">
                                        <ClipboardCheck size={32} strokeWidth={1.25} />
                                    </div>
                                    <div>
                                        <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 leading-tight">Order Policy</h2>
                                        <p className="text-neutral-500 font-light mt-2 italic text-sm md:text-base">Strategic scheduling for peak quality assurance.</p>
                                    </div>
                                </div>
                                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                    {policySections[0].items.map((item, i) => (
                                        <div key={i} className="p-8 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 group/item hover:bg-convention-dark transition-all duration-700 hover:-translate-y-1">
                                            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-convention group-hover/item:text-white/40 mb-4">{item.label}</p>
                                            <p className="text-base md:text-lg font-serif font-medium leading-relaxed group-hover/item:text-white transition-colors duration-500">{item.value}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-12 flex items-center gap-4 p-6 rounded-2xl bg-neutral-50/50 border border-neutral-100">
                                    <AlertTriangle size={16} className="text-catering shrink-0" />
                                    <p className="text-xs md:text-sm text-neutral-500 font-light italic">
                                        Menu selections may require additional notice or substitution depending on seasonal availability.
                                    </p>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 2. Cancellation & Logistics */}
                        <div className="grid lg:grid-cols-2 gap-10">
                            <FadeIn delay={200}>
                                <div className="bg-white rounded-[4rem] p-10 md:p-14 shadow-sm border border-neutral-100 h-full flex flex-col group">
                                    <div className="flex items-center gap-6 mb-10">
                                        <div className="w-14 h-14 rounded-2xl bg-catering/10 text-catering flex items-center justify-center shadow-sm group-hover:bg-catering group-hover:text-white transition-colors duration-500">
                                            <XCircle size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 leading-tight">Order Cancellation</h3>
                                    </div>
                                    <div className="p-10 rounded-[3rem] bg-neutral-50 border border-neutral-100 mb-8 relative overflow-hidden">
                                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-catering"></div>
                                        <p className="text-lg md:text-xl text-neutral-600 font-light flex items-center gap-4 relative z-10">
                                            <span className="text-5xl md:text-6xl font-serif text-catering drop-shadow-sm">72</span>
                                            <span className="leading-tight">Hours mandatory notice period for any event cancellation.</span>
                                        </p>
                                    </div>
                                    <p className="text-base md:text-lg text-neutral-500 leading-relaxed font-light mt-auto">
                                        Immediate processing begins upon confirmation. Once logistical arrangements are initiated, cancellations cannot be facilitated.
                                    </p>
                                </div>
                            </FadeIn>

                            <FadeIn delay={300}>
                                <div className="bg-convention-dark rounded-[4rem] p-10 md:p-14 shadow-2xl shadow-black/20 text-white h-full relative overflow-hidden flex flex-col group">
                                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                                        <Truck size={200} />
                                    </div>
                                    <div className="flex items-center gap-6 mb-10 relative z-10">
                                        <div className="w-14 h-14 rounded-2xl bg-white/10 text-white flex items-center justify-center shadow-sm group-hover:bg-white group-hover:text-black transition-colors duration-500">
                                            <ShoppingBag size={28} strokeWidth={1.5} />
                                        </div>
                                        <h3 className="text-2xl md:text-3xl font-serif leading-tight">Third Party Logistics</h3>
                                    </div>
                                    <p className="text-white/80 text-lg md:text-xl leading-relaxed font-light mb-10 relative z-10 pr-6">
                                        Orders executed via Foodpanda, Pathao, or other aggregators are subject to their specific logistics terms. Please contact their concierge directly for status.
                                    </p>
                                    <div className="mt-auto flex flex-wrap gap-3 relative z-10">
                                        {['Foodpanda', 'Pathao', 'HungryNaki'].map(site => (
                                            <Badge key={site} color="blue" className="px-6 py-2 bg-white/10 text-white border border-white/5 hover:bg-white hover:text-black transition-all">
                                                {site}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </FadeIn>
                        </div>

                        {/* 3. Operational Standards */}
                        <FadeIn delay={400}>
                            <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.03)] border border-neutral-100">
                                <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 mb-14 flex items-center gap-4">
                                    <span className="w-12 h-0.5 bg-neutral-200"></span>
                                    Operational Guidelines
                                </h3>
                                <div className="grid md:grid-cols-2 gap-16">
                                    <div className="space-y-12">
                                        <div className="group">
                                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-convention mb-6 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-convention/10 flex items-center justify-center group-hover:bg-convention group-hover:text-white transition-colors duration-500">
                                                    <AlertTriangle size={14} />
                                                </div>
                                                Order Rectification
                                            </h4>
                                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                                If items differ from your receipt, notify us immediately. We will rectify via credit reversal for cards or balance adjustment for cash. Items must be returned in original containers.
                                            </p>
                                        </div>
                                        <div className="group">
                                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-convention mb-6 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-convention/10 flex items-center justify-center group-hover:bg-convention group-hover:text-white transition-colors duration-500">
                                                    <ShoppingBag size={14} />
                                                </div>
                                                Incomplete Delivery
                                            </h4>
                                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                                For missing items, we will refund the specific amount to your credit card or provide store credit. Cash refunds are not available for incomplete deliveries.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-12">
                                        <div className="group">
                                            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-catering mb-6 flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-lg bg-catering/10 flex items-center justify-center group-hover:bg-catering group-hover:text-white transition-colors duration-500">
                                                    <HeartOff size={14} />
                                                </div>
                                                Excellence Standard
                                            </h4>
                                            <p className="text-lg text-neutral-600 leading-relaxed font-light">
                                                Refunds are limited to wrong or omitted items. No refunds for personal taste preferences. If 25% or more is consumed, we cannot issue credit or replacement.
                                            </p>
                                        </div>
                                        <div className="p-10 rounded-[2.5rem] bg-convention-dark text-white relative overflow-hidden shadow-xl">
                                            <div className="absolute top-0 left-0 w-full h-1 bg-catering"></div>
                                            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-white/40 mb-4">Complimentary Clause</h4>
                                            <p className="text-base text-white/80 leading-relaxed italic font-serif">
                                                &ldquo;Complimentary food items hold no cash value and are not eligible for refunds or exchanges.&rdquo;
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* 4. Affirmation Section */}
                        <FadeIn delay={500}>
                            <div className="bg-convention-dark text-white rounded-[5rem] p-16 md:p-24 text-center space-y-12 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.3)] relative overflow-hidden group">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.6)_100%)] z-[1]"></div>
                                <div className="absolute -top-32 -left-32 w-96 h-96 bg-convention/10 rounded-full blur-[120px] pointer-events-none"></div>
                                <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-catering/10 rounded-full blur-[120px] pointer-events-none"></div>

                                <div className="relative z-10 max-w-4xl mx-auto">
                                    <CheckCircle2 className="mx-auto mb-10 text-convention group-hover:scale-110 transition-transform duration-700" size={64} strokeWidth={1} />
                                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-8 leading-[1.1]">
                                        Agreement Acknowledgement
                                    </h2>
                                    <p className="text-white/80 text-xl md:text-2xl lg:text-3xl font-light tracking-wide italic leading-relaxed mb-12">
                                        &ldquo;I have read, understood, and consider this agreement definite and confirmed.&rdquo;
                                    </p>
                                    <div className="flex flex-col items-center gap-6">
                                        <div className="h-px w-24 bg-white/20"></div>
                                        <p className="text-[10px] font-bold uppercase tracking-[0.6em] text-white/40">Official Governance Statement</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={600} className="mt-32 pb-20 text-center max-w-2xl mx-auto">
                        <p className="text-neutral-400 text-sm font-light leading-relaxed">
                            Last Revised: February 7, 2026. Official documentation for
                            <span className="text-neutral-900 font-bold ml-1">X-Group Catering & Convention Services</span>.
                        </p>
                    </FadeIn>
                </Container>
            </Section>
        </main>
    );
}
