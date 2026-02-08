import React from 'react';
import { Container, Section, SectionHeading, FadeIn, Button } from '@/components/UI';
import { Info, MapPin, Clock, MessageSquare, Truck } from 'lucide-react';

export const metadata = {
    title: 'Delivery Policy | X-Group Catering',
    description: 'Read our food delivery policy. We provide fresh catering and restaurant food delivery across Dhaka city with estimated times of 35-60 minutes.',
};

const policies = [
    {
        id: 1,
        title: "General Information",
        icon: Info,
        content: "All food orders are subject to availability. If an item is not in stock at the time you place your order, we will notify you and refund you the total amount of your order, using the original method of payment."
    },
    {
        id: 2,
        title: "Delivery Location",
        icon: MapPin,
        content: "Food items offered on our website are only available for delivery covering Dhaka city only."
    },
    {
        id: 3,
        title: "Delivery Time",
        icon: Clock,
        content: "An estimated delivery time will be provided to you once your order is placed. Delivery times are to be used as a guide only and are subject to the acceptance and approval of your order.",
        extra: "Unless there are exceptional circumstances, we make every effort to fulfill and deliver your order within 35 to 60 minutes of your order. Delivery may vary due to delivery location, traffic, strike and weather condition."
    },
    {
        id: 4,
        title: "Delivery Instructions",
        icon: MessageSquare,
        content: "You can provide special delivery instructions on our online apps while placing your order to help our riders find you easily."
    },
    {
        id: 5,
        title: "Delivery Costs",
        icon: Truck,
        content: "We provide free home delivery within our restaurant location of 5 kilometers. Additional delivery charges may apply to remote areas or more than 5 kilometers of distance."
    }
];

export default function DeliveryPolicyPage() {
    return (
        <main className="min-h-screen pt-24">
            <Section className="bg-neutral-50/50">
                <Container>
                    <SectionHeading
                        title="Delivery Policy"
                        subtitle="Logistics & Excellence"
                        center
                    />

                    <div className="max-w-5xl mx-auto grid gap-6 md:gap-8">
                        {policies.map((policy, idx) => (
                            <FadeIn key={policy.id} delay={idx * 100}>
                                <div className="bg-white rounded-[3.5rem] p-10 md:p-14 shadow-[0_4px_30px_-15px_rgba(0,0,0,0.05)] border border-neutral-100/80 group hover:shadow-2xl hover:shadow-black/[0.03] transition-all duration-700 relative overflow-hidden">
                                    {/* Background Accent */}
                                    <div className="absolute -top-12 -right-12 w-32 h-32 bg-convention/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start relative z-10">
                                        <div className="w-20 h-20 rounded-[2rem] bg-convention-dark text-white flex items-center justify-center shrink-0 shadow-xl shadow-black/10 group-hover:bg-convention transition-colors duration-500">
                                            <policy.icon size={36} strokeWidth={1.25} />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-6">
                                                <span className="text-[10px] font-black text-convention uppercase tracking-[0.3em] bg-convention/10 px-3 py-1 rounded-full">Section 0{policy.id}</span>
                                            </div>
                                            <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-neutral-900 leading-[1.2] mb-6">
                                                {policy.title}
                                            </h3>
                                            <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light mb-8 max-w-3xl">
                                                {policy.content}
                                            </p>
                                            {policy.extra && (
                                                <div className="p-8 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 relative overflow-hidden group/extra">
                                                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-convention"></div>
                                                    <p className="text-base md:text-lg text-neutral-500 leading-relaxed italic font-light relative z-10">
                                                        {policy.extra}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={600} className="mt-32">
                        <div className="bg-convention-dark rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-black/20">
                            {/* Decorative Blobs */}
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-convention/20 rounded-full blur-[100px]"></div>
                            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-catering/10 rounded-full blur-[100px]"></div>

                            <div className="relative z-10 max-w-2xl mx-auto">
                                <h4 className="text-3xl md:text-4xl font-serif text-white mb-6">Need priority assistance?</h4>
                                <p className="text-neutral-400 text-lg font-light leading-relaxed mb-10">
                                    Our logistics team is available 24/7 to ensure your order arrives in peak condition. For immediate help, reach out to our concierge.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                                    <Button variant="primary" href="mailto:catering@x-grouprestaurant.com" className="">
                                        Email Support
                                    </Button>
                                    <div className="flex flex-col items-center sm:items-start text-left">
                                        <p className="text-white/40 text-[10px] font-bold uppercase tracking-[0.3em] mb-1">
                                            Priority Channel
                                        </p>
                                        <p className="text-white text-xs font-bold uppercase tracking-widest">
                                            Response &lt; 15 mins
                                        </p>
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
