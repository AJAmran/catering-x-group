"use client";

import React, { useState } from 'react';
import { MapPin, Phone, Clock, CheckCircle2, Mail } from 'lucide-react';
import { SITE_DATA } from '@/lib/constants';
import { Container, Section, SectionHeading, Button, Input, Select, TextArea } from '@/components/UI';

export default function ContactClient() {
    const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('sending');
        setTimeout(() => {
            setFormStatus('success');
        }, 1500);
    };

    return (
        <div className="pt-24 min-h-screen">
            <Section>
                <Container>
                    <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 max-w-6xl mx-auto">
                        {/* Info Side */}
                        <div className="flex flex-col justify-center">
                            <SectionHeading title="Get in Touch" subtitle="We're Here for You" />

                            <div className="space-y-10">
                                {[
                                    { icon: MapPin, title: "Visit Our Office", content: SITE_DATA.site.contact.address },
                                    {
                                        icon: Phone,
                                        title: "Call Us",
                                        content: (
                                            <div className="flex flex-col gap-1">
                                                {SITE_DATA.site.contact.phone.map(phone => (
                                                    <a key={phone} href={`tel:${phone}`} className="hover:text-convention transition-colors">{phone}</a>
                                                ))}
                                            </div>
                                        )
                                    },
                                    {
                                        icon: Mail,
                                        title: "Email Us",
                                        content: <a href={`mailto:${SITE_DATA.site.contact.email}`} className="hover:text-convention transition-colors">{SITE_DATA.site.contact.email}</a>
                                    },
                                    { icon: Clock, title: "Business Hours", content: SITE_DATA.site.business_hours }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-6 items-start group p-6 rounded-3xl bg-neutral-50/50 hover:bg-white border border-transparent hover:border-neutral-100 hover:shadow-xl transition-all duration-300">
                                        <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-convention group-hover:bg-convention group-hover:text-white transition-colors duration-300 shadow-md">
                                            <item.icon size={26} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-serif font-medium text-neutral-900 mb-2">{item.title}</h4>
                                            <div className="text-neutral-600 leading-relaxed font-light">{item.content}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Side */}
                        <div className="bg-white p-8 md:p-12 rounded-[3rem] shadow-2xl shadow-convention/5 border border-gray-100">
                            {formStatus === 'success' ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in">
                                    <div className="w-20 h-20 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-4">Message Sent</h3>
                                    <p className="text-gray-600 mb-8">We'll get back to you shortly.</p>
                                    <Button variant="outline" onClick={() => setFormStatus('idle')}>Send Another</Button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <h3 className="text-2xl font-serif font-medium mb-6">Send us a Message</h3>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <Input label="Name" placeholder="John Doe" required />
                                        <Input label="Phone" placeholder="017..." type="tel" required />
                                    </div>
                                    <Input label="Email" placeholder="hello@example.com" type="email" />
                                    <Select label="Subject">
                                        <option>General Inquiry</option>
                                        <option>Catering Service</option>
                                        <option>Hall Booking</option>
                                    </Select>
                                    <TextArea label="Message" placeholder="How can we help you?" rows={4} required />

                                    <Button type="submit" fullWidth disabled={formStatus === 'sending'} className="mt-4">
                                        {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                                    </Button>
                                </form>
                            )}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
