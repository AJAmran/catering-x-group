"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { SITE_DATA } from '@/lib/constants';
import { Container, Button } from '@/components/UI';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export const Header = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = SITE_DATA.site.navigation.filter(item => item !== "Return X-Group");

    const getPath = (item: string) => {
        switch (item) {
            case 'Home': return '/';
            case 'About Us': return '/about';
            case 'Menu': return '/menu';
            case 'Halls': return '/halls';
            case 'Gallery': return '/gallery';
            case 'Contact Us': return '/contact';
            case 'Book Hall': return '/book-hall';
            default: return '/';
        }
    };

    const isActive = (item: string) => {
        const path = getPath(item);
        if (path === '/' && pathname === '/') return true;
        if (path !== '/' && pathname?.startsWith(path)) return true;
        return false;
    };

    const isTransparent = (pathname === '/' || pathname?.includes('/halls/')) && !scrolled && !mobileOpen;

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled || mobileOpen
                    ? 'bg-neutral-100/80 backdrop-blur-xl border-b border-white/20 py-4'
                    : 'bg-transparent py-6'
                    }`}
            >
                <Container className="flex justify-between items-center">
                    {/* Logo Area */}
                    <Link
                        href="/"
                        className="flex items-center gap-3 cursor-pointer group"
                        aria-label="X-Group Catering Home"
                    >
                        <div className="p-[3px] rounded-xl bg-white shadow-md transition-all duration-300">
                            <Image
                                src={SITE_DATA.site.assets.logo.url}
                                alt={SITE_DATA.site.name}
                                title={`${SITE_DATA.site.name} Logo`}
                                width={SITE_DATA.site.assets.logo.width}
                                height={SITE_DATA.site.assets.logo.height}
                                className="h-12 w-auto md:h-14 lg:h-16 object-contain"
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden lg:flex items-center gap-1 p-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10" aria-label="Main navigation">
                        {navItems.map((item) => (
                            <Link
                                key={item}
                                href={getPath(item)}
                                aria-current={isActive(item) ? "page" : undefined}
                                className={`
                                    px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300
                                    ${isActive(item)
                                        ? 'bg-convention text-white shadow-lg shadow-convention/20'
                                        : (isTransparent ? 'text-white/80 hover:bg-white/10 hover:text-white' : 'text-neutral-600 hover:bg-neutral-200/50 hover:text-neutral-900')
                                    }
                                `}
                            >
                                {item}
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden lg:flex gap-3">
                        <Button
                            href="/book-hall"
                            variant={isTransparent ? 'white' : 'secondary'}
                            className="px-6 py-2.5 text-xs h-auto"
                            label="Book an event now"
                        >
                            Book Now
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`
                            lg:hidden p-3 rounded-full transition-colors
                            ${isTransparent ? 'text-white bg-white/10' : 'text-neutral-900 bg-neutral-200'}
                        `}
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label={mobileOpen ? "Close main menu" : "Open main menu"}
                        aria-expanded={mobileOpen ? "true" : "false"}
                        aria-controls="mobile-navigation"
                    >
                        {mobileOpen ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
                    </button>
                </Container>
            </header>

            {/* Mobile Menu */}
            <div
                id="mobile-navigation"
                className={`fixed inset-0 z-40 bg-neutral-100 transform transition-transform duration-500 lg:hidden flex flex-col pt-24 pb-10 px-6 overflow-y-auto ${mobileOpen ? 'translate-x-0' : 'translate-x-full'}`}
                aria-hidden={mobileOpen ? "false" : "true"}
            >
                <nav className="flex flex-col gap-2 min-h-0" aria-label="Mobile navigation">
                    {navItems.map((item, idx) => (
                        <Link
                            key={item}
                            href={getPath(item)}
                            onClick={() => setMobileOpen(false)}
                            aria-current={isActive(item) ? "page" : undefined}
                            className={`
                                text-2xl font-serif font-medium text-left py-4 border-b border-neutral-200
                                flex justify-between items-center group
                                ${isActive(item) ? 'text-convention' : 'text-neutral-900'}
                            `}
                            style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                            {item}
                            <ArrowRight size={20} aria-hidden="true" className="opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                    ))}
                    <div className="mt-6 pb-8">
                        <Button href="/book-hall" onClick={() => setMobileOpen(false)} fullWidth variant="secondary" label="Book your hall or catering event">Book Your Event</Button>
                    </div>
                </nav>
            </div>
        </>
    );
};
