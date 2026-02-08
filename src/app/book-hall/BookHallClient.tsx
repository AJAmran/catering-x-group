"use client";

import React, { useState } from 'react';
import { CheckCircle2, Star, Calendar } from 'lucide-react';
import { SITE_DATA } from '@/lib/constants';
import { Container, Button, Input, Select, Section } from '@/components/UI';

export default function BookHallClient() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        hall: '',
        date: '',
        guests: '',
        type: 'Wedding',
        menu: '',
        name: '',
        phone: '',
        email: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="pt-32 min-h-screen bg-neutral-100">
            <Section className="py-0 pb-20">
                <Container>
                    <div className="max-w-6xl mx-auto bg-white rounded-[3rem] shadow-2xl shadow-neutral-200 overflow-hidden flex flex-col md:flex-row min-h-[700px] border border-white">

                        {/* Sidebar Visual - Refined Brand Gradient */}
                        <div className="md:w-5/12 bg-gradient-to-br from-neutral-900 to-convention-dark text-white p-12 lg:p-16 flex flex-col justify-between relative overflow-hidden shadow-2xl">
                            <div className="relative z-10">
                                <span className="text-convention-light font-bold tracking-widest uppercase text-xs mb-4 block">Reservation</span>
                                <h2 className="text-5xl font-serif mb-6 leading-tight">Start Your <br />Journey</h2>
                                <p className="text-white/60 mb-12 text-lg font-light leading-relaxed">
                                    Secure your date at X-Group. Our team will provide a custom quote within 24 hours.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 transition-colors group-hover:bg-convention group-hover:text-white">
                                            <Calendar size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Check Availability</h4>
                                            <p className="text-sm text-white/40">Real-time booking status.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4 group">
                                        <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0 border border-white/10 transition-colors group-hover:bg-catering group-hover:text-white">
                                            <Star size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">Premium Service</h4>
                                            <p className="text-sm text-white/40">Dedicated event manager.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Abstract Background Noise & Gradient */}
                            <div className="absolute inset-0 bg-noise opacity-20"></div>
                            <div className="absolute bottom-0 right-0 w-96 h-96 bg-convention rounded-full blur-[150px] opacity-20 translate-x-1/2 translate-y-1/2"></div>
                        </div>

                        {/* Form Content - Paper texture feel */}
                        <div className="md:w-7/12 p-10 md:p-16 relative bg-[#fffcf8]">
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="space-y-8 animate-fade-up">
                                    <div>
                                        <h3 className="text-2xl font-serif text-neutral-900 mb-6">Event Details</h3>
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <Select label="Event Type" name="type" value={formData.type} onChange={handleChange}>
                                                <option>Wedding</option>
                                                <option>Reception</option>
                                                <option>Corporate Seminar</option>
                                                <option>Birthday</option>
                                                <option>Other</option>
                                            </Select>
                                            <Select label="Venue" name="hall" required onChange={handleChange} value={formData.hall}>
                                                <option value="">Select Venue</option>
                                                {SITE_DATA.halls.map((h) =>
                                                    h.halls ? h.halls.map(sub => <option key={sub.name} value={`${sub.name} (${h.name})`}>{sub.name} - {h.name}</option>)
                                                        : <option key={h.name} value={h.name}>{h.name}</option>
                                                )}
                                            </Select>
                                        </div>
                                        <div className="grid md:grid-cols-2 gap-6 mt-6">
                                            <Input label="Date" name="date" type="date" required onChange={handleChange} value={formData.date} />
                                            <Input label="Guests" name="guests" type="number" required placeholder="500" onChange={handleChange} value={formData.guests} />
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-2xl font-serif text-neutral-900 mb-6">Culinary Preference</h3>
                                        <Select label="Select Menu (Optional)" name="menu" onChange={handleChange} value={formData.menu}>
                                            <option value="">Decide Later</option>
                                            <optgroup label="Buffet Packages">
                                                {SITE_DATA.menu.buffet_menu.map((m, i) => <option key={i} value={m.name}>{m.name}</option>)}
                                            </optgroup>
                                            <optgroup label="Set Menu Packages">
                                                {Object.entries(SITE_DATA.menu.set_menu).map(([key, packages]) => (
                                                    packages.map((pkg, idx) => (
                                                        <option key={`${key}-${idx}`} value={pkg.name}>{pkg.name}</option>
                                                    ))
                                                ))}
                                            </optgroup>
                                            <option value="Custom">Custom / À La Carte Menu</option>
                                        </Select>
                                    </div>

                                    <div className="pt-4 border-t border-neutral-200">
                                        <h3 className="text-2xl font-serif text-neutral-900 mb-6">Contact Info</h3>
                                        <div className="space-y-6">
                                            <Input label="Full Name" name="name" type="text" required onChange={handleChange} value={formData.name} />
                                            <div className="grid md:grid-cols-2 gap-6">
                                                <Input label="Phone" name="phone" type="tel" required onChange={handleChange} value={formData.phone} />
                                                <Input label="Email (Optional)" name="email" type="email" onChange={handleChange} value={formData.email} />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <Button type="submit" variant="secondary" fullWidth className="py-5 text-lg shadow-xl shadow-catering/20">
                                            Request Booking Quote
                                        </Button>
                                        <p className="text-center text-xs text-neutral-400 mt-4">We respect your privacy. No spam.</p>
                                    </div>
                                </form>
                            ) : (
                                <div className="text-center py-20 h-full flex flex-col justify-center items-center animate-scale-in">
                                    <div className="w-24 h-24 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-8 mx-auto shadow-lg shadow-green-100">
                                        <CheckCircle2 size={48} />
                                    </div>
                                    <h3 className="text-4xl font-serif font-bold text-neutral-900 mb-4">Request Received</h3>
                                    <p className="text-neutral-500 mb-10 max-w-md mx-auto leading-relaxed text-lg">
                                        Thank you, <strong>{formData.name}</strong>. We are checking availability for <strong>{formData.hall}</strong> and will call you at <strong>{formData.phone}</strong> within 24 hours.
                                    </p>
                                    <Button onClick={() => window.location.reload()} variant="outline">Start New Request</Button>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </Section>
        </div>
    );
}
