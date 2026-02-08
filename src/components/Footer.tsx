"use client";

import React from 'react';
import { Facebook, Instagram, Linkedin, Youtube, MapPin, Phone, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { SITE_DATA } from '@/lib/constants';
import { Container } from '@/components/UI';
import Link from 'next/link';

export const Footer = () => {
    const getPath = (item: string) => {
        switch (item) {
            case 'Home': return '/';
            case 'About Us': return '/about';
            case 'Menu': return '/menu';
            case 'Heritage': return '/about';
            case 'Halls': return '/halls';
            case 'Gallery': return '/gallery';
            case 'Contact': return '/contact';
            case 'MICE Services': return '/halls';
            case 'Book Hall': return '/book-hall';
            default: return '/';
        }
    };

    const IconMap: { [key: string]: React.ElementType } = {
        Facebook,
        Instagram,
        Linkedin,
        Youtube
    };

    return (
        <footer
            className="bg-[#0f172a] text-neutral-200 pt-24 pb-12 rounded-t-[3rem] md:rounded-t-[5rem] mt-32 relative overflow-hidden font-sans border-t border-white/5"
            aria-label="Site Footer"
        >
            {/* Subtle light effect */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-sky-900/10 blur-[120px] rounded-full pointer-events-none"></div>

            <Container className="relative z-10 px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-8 mb-20">
                    {/* Column 1: Brand & Legacy */}
                    <div className="lg:col-span-4 space-y-8">
                        <Link href="/" className="inline-block bg-white p-[5px] rounded-xl shadow-lg border border-white/10 group overflow-hidden relative">
                            <div className="absolute inset-0 bg-neutral-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <Image
                                src={SITE_DATA.site.assets.logo.url}
                                alt={SITE_DATA.site.name}
                                width={SITE_DATA.site.assets.logo.width}
                                height={SITE_DATA.site.assets.logo.height}
                                className="h-16 md:h-28 w-auto object-contain relative z-10"
                                priority
                            />
                        </Link>
                        <h2 className="text-3xl md:text-4xl font-serif text-white tracking-tight leading-tight">
                            Elevating the art of <br /> hospitality since 1992.
                        </h2>
                        <p className="text-base md:text-lg leading-relaxed max-w-sm font-light text-neutral-300 text-justify">
                            X-Group Chain Restaurant & Hospitality Management is Dhaka's premier event management service, dedicated to architectural grandeur and culinary mastery.
                        </p>
                        <div className="flex gap-4 pt-2">
                            {SITE_DATA.social_links.map(({ platform, url, label }, i) => {
                                const Icon = IconMap[platform] || ArrowRight;
                                return (
                                    <a
                                        key={i}
                                        href={url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visit our ${label} page`}
                                        className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:bg-white hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-lg"
                                    >
                                        <Icon size={20} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Collections */}
                    <nav className="lg:col-span-2 lg:col-start-6" aria-labelledby="footer-portfolio-heading">
                        <h3 id="footer-portfolio-heading" className="text-white font-bold text-xl md:text-2xl uppercase tracking-[0.1em] mb-8">The Portfolio</h3>
                        <ul className="space-y-4 text-base">
                            {SITE_DATA.footer.portfolio.map(item => (
                                <li key={item.name}>
                                    {item.href.startsWith('http') ? (
                                        <a
                                            href={item.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-neutral-300 hover:text-white transition-colors block font-medium group flex items-center gap-2"
                                        >
                                            {item.name}
                                            <ArrowRight size={14} aria-hidden="true" className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                        </a>
                                    ) : (
                                        <Link href={item.href} className="text-neutral-300 hover:text-white transition-colors block font-medium">
                                            {item.name}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Column 3: Corporate */}
                    <nav className="lg:col-span-2" aria-labelledby="footer-links-heading">
                        <h3 id="footer-links-heading" className="text-white font-bold text-xl md:text-2xl uppercase tracking-[0.1em] mb-8">Quick Links</h3>
                        <ul className="space-y-4 text-base">
                            {['Home', 'About Us', 'Heritage', 'Gallery', 'Contact'].map(link => (
                                <li key={link}>
                                    <Link href={getPath(link)} className="text-neutral-300 hover:text-white transition-colors block font-medium">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    {/* Column 4: Newsletter */}
                    <div className="lg:col-span-3">
                        <h3 className="text-white font-bold text-xl md:text-2xl uppercase tracking-[0.1em] mb-8">Newsletter</h3>
                        <p className="text-base mb-6 font-light leading-relaxed text-neutral-300">
                            Subscribe to receive exclusive menus and event insights.
                        </p>
                        <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                            <div className="relative group flex items-center">
                                <input
                                    type="email"
                                    placeholder="your@email.com"
                                    aria-label="Newsletter email address"
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 text-base outline-none focus:bg-white/10 focus:border-white/20 transition-all text-white placeholder:text-neutral-500 font-sans"
                                />
                                <button
                                    className="absolute right-2 bg-white text-black p-2.5 rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer flex items-center justify-center text-black"
                                    aria-label="Subscribe to newsletter"
                                >
                                    <ArrowRight size={20} aria-hidden="true" />
                                </button>
                            </div>
                            <p className="text-xs text-neutral-300 uppercase tracking-widest font-bold">Secure and private.</p>
                        </form>
                    </div>
                </div>

                {/* Bottom Bar: Locations & Contact Detail Row */}
                <div className="pt-12 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <MapPin className="text-white" size={24} aria-hidden="true" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm uppercase tracking-widest mb-2">Visit Us</p>
                            <address className="text-base font-normal leading-relaxed text-neutral-300 font-sans not-italic">{SITE_DATA.site.contact.address}</address>
                        </div>
                    </div>
                    <div className="flex gap-4 items-start">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                            <Phone className="text-white" size={24} aria-hidden="true" />
                        </div>
                        <div>
                            <p className="text-white font-bold text-sm uppercase tracking-widest mb-2">Reservations</p>
                            <div className="flex flex-col text-base font-normal gap-1 text-neutral-300 font-sans">
                                {SITE_DATA.site.contact.phone.map(p => (
                                    <a key={p} href={`tel:${p}`} className="hover:text-white transition-colors">{p}</a>
                                ))}
                                <a href={`mailto:${SITE_DATA.site.contact.email}`} className="mt-2 text-sm text-neutral-400 hover:text-white transition-colors lowercase">
                                    {SITE_DATA.site.contact.email}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center md:items-end gap-3">
                        <div className="flex gap-6 items-center opacity-70 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                            {SITE_DATA.footer.delivery_partners.map(p => (
                                <span key={p} className="text-white font-bold italic text-lg font-sans">{p}</span>
                            ))}
                        </div>
                        <p className="text-xs text-neutral-400 uppercase tracking-[0.2em] font-bold">Our Delivery Partners</p>
                    </div>
                </div>

                {/* Final Credits, Policies & Full Width Payment Image */}
                <div className="space-y-12">
                    <div className="pt-8 border-t border-white/5">
                        <p className="text-center text-[10px] md:text-sm text-neutral-300 uppercase tracking-[0.5em] mb-8 font-bold font-sans">Secure Payment Gateways</p>
                        <div className="relative w-full h-12 md:h-20 transition-all duration-700">
                            <Image
                                src={SITE_DATA.footer.payment_gateway_img}
                                alt="SSLCommerz Official Payment Gateway"
                                title="SSLCommerz - Secure Payment Partner"
                                width={1920}
                                height={73}
                                className="w-full h-auto object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
                                sizes="100vw"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-8">
                        <p className="text-sm font-medium text-neutral-300 font-sans order-2 md:order-1">
                            &copy; {new Date().getFullYear()} X-Group Chain Restaurant & Hospitality Management. All Rights Reserved.
                        </p>

                        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 order-1 md:order-2" aria-label="Policy links">
                            {['Delivery', 'Refund', 'Privacy'].map(policy => (
                                <Link
                                    key={policy}
                                    href={`/${policy.toLowerCase().replace(' ', '-')}-policy`}
                                    className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-white transition-colors font-sans"
                                >
                                    {policy} Policy
                                </Link>
                            ))}
                        </nav>
                    </div>
                </div>
            </Container>
        </footer>
    );
};
