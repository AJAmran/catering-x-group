"use client";

import React, { useState } from 'react';
import { Download, Filter, ChevronDown } from 'lucide-react';
import { SITE_DATA } from '@/lib/constants';
import { Container, Section, SectionHeading, Button, BentoGrid, BentoCard, Badge } from '@/components/UI';

export default function MenuClient() {
    const [activeTab, setActiveTab] = useState<'carte' | 'set' | 'buffet'>('carte');
    const [activeCategory, setActiveCategory] = useState<string>('APPETIZER');
    const categories = SITE_DATA.menu.a_la_carte_menu.categories;

    // Helper to parse comma-separated strings into arrays
    const parseList = (text: string) => text.split(',').map(item => item.trim());

    return (
        <div className="pt-20 md:pt-24 min-h-screen bg-neutral-50">
            <Section className="pb-12 pt-10 md:pt-20">
                <Container>
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-16 gap-6">
                        <SectionHeading title="Culinary Collections" subtitle="Discover Flavors" className="mb-0" />
                        <div className="flex gap-2 w-full md:w-auto">
                            <Button variant="outline" icon={<Download size={18} />} className="w-full md:w-auto text-xs py-3 px-6">Download PDF</Button>
                        </div>
                    </div>

                    {/* Tab Navigation (Pill Design) - Scrollable on mobile */}
                    <nav className="w-full overflow-x-auto no-scrollbar mb-8 md:mb-12" aria-label="Menu categories">
                        <div className="bg-white p-1 md:p-1.5 rounded-full shadow-sm border border-neutral-200 inline-flex min-w-full md:min-w-0" role="tablist">
                            {[
                                { id: 'carte', label: 'À La Carte' },
                                { id: 'set', label: 'Set Menus' },
                                { id: 'buffet', label: 'Buffet Packages' },
                            ].map((tab) => (
                                <button
                                    key={tab.id}
                                    role="tab"
                                    aria-selected={activeTab === tab.id ? "true" : "false"}
                                    aria-controls={`${tab.id}-panel`}
                                    id={`${tab.id}-tab`}
                                    onClick={() => setActiveTab(tab.id as any)}
                                    className={`
                                         px-6 md:px-8 py-2.5 md:py-3 rounded-full text-xs md:text-sm font-sans font-bold transition-all duration-300 whitespace-nowrap flex-1 md:flex-none
                                         ${activeTab === tab.id
                                            ? 'bg-convention text-white shadow-lg'
                                            : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100'}
                                     `}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </nav>

                    <div className="animate-fade-in">
                        {activeTab === 'carte' && (
                            <div className="flex flex-col lg:flex-row gap-8 md:gap-12" id="carte-panel" role="tabpanel" aria-labelledby="carte-tab">
                                {/* Categories - Vertical scroll on mobile and desktop */}
                                <div className="lg:w-1/4">
                                    <div className="relative group">
                                        <div className="bg-white rounded-[2rem] p-5 md:p-6 shadow-sm border border-neutral-200 lg:sticky lg:top-32 h-auto max-h-[280px] lg:max-h-[80vh] overflow-y-auto no-scrollbar scroll-smooth">
                                            <div className="flex items-center gap-2 mb-6 text-neutral-600">
                                                <Filter size={16} aria-hidden="true" /> <span className="text-xs font-bold uppercase tracking-widest">Filter by</span>
                                            </div>

                                            <ul className="flex flex-col gap-2" role="list" aria-label="Food categories">
                                                {categories.map((cat, idx) => (
                                                    <li key={idx}>
                                                        <button
                                                            onClick={() => setActiveCategory(cat.name)}
                                                            aria-current={activeCategory === cat.name ? "true" : "false"}
                                                            className={`
                                                                 w-full text-left px-5 py-3 lg:py-4 rounded-xl text-xs lg:text-sm font-sans font-bold transition-all duration-300 border
                                                                 ${activeCategory === cat.name
                                                                    ? 'bg-convention text-white border-convention shadow-md'
                                                                    : 'bg-transparent text-neutral-700 border-transparent hover:bg-neutral-50/50'}
                                                             `}
                                                        >
                                                            {cat.name}
                                                        </button>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Scroll Hint Arrow for Mobile */}
                                        <div className="lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 bg-convention text-white rounded-full p-2 shadow-xl border-4 border-neutral-50 z-20 animate-bounce" aria-hidden="true">
                                            <ChevronDown size={14} />
                                        </div>

                                        {/* Fade effect at bottom of scrollable area on mobile */}
                                        <div className="lg:hidden absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none rounded-b-[2rem] z-10" aria-hidden="true"></div>
                                    </div>
                                </div>

                                {/* Items Grid */}
                                <div className="lg:w-3/4 mt-12 lg:mt-0">
                                    <div className="mb-6 md:mb-8 flex justify-between items-end border-b border-neutral-200 pb-4 md:pb-6">
                                        <h3 className="text-2xl md:text-3xl font-serif text-neutral-900 border-l-4 border-convention pl-4 leading-none">{activeCategory}</h3>
                                        <p className="text-[10px] md:text-xs text-neutral-600 font-bold uppercase tracking-widest">Excl. VAT</p>
                                    </div>

                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                        {categories.find(c => c.name === activeCategory)?.items.map((item) => (
                                            <li key={item.id}>
                                                <div className="bg-white rounded-2xl p-5 md:p-6 flex justify-between items-center border border-neutral-100 hover:border-convention/20 hover:shadow-lg transition-all duration-300 group cursor-default">
                                                    <div className="flex flex-col pr-4">
                                                        <span className="font-bold text-neutral-900 text-base md:text-lg group-hover:text-convention transition-colors leading-tight">{item.name}</span>
                                                        <p className="text-[10px] md:text-xs text-neutral-500 mt-1 italic line-clamp-1">Freshly prepared masterwork.</p>
                                                    </div>
                                                    <div className="text-right shrink-0">
                                                        <span className="font-serif font-bold text-xl md:text-2xl text-neutral-900 group-hover:scale-110 transition-transform block" aria-label={`Price: ${item.price} Taka`}>৳{item.price}</span>
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        )}

                        {activeTab === 'set' && (
                            <div className="space-y-12 md:space-y-20" id="set-panel" role="tabpanel" aria-labelledby="set-tab">
                                {Object.entries(SITE_DATA.menu.set_menu).map(([key, packages]) => (
                                    <section key={key} aria-labelledby={`heading-${key}`}>
                                        <div className="flex items-center gap-4 md:gap-6 mb-6 md:mb-10">
                                            <span className="w-8 md:w-12 h-1 bg-convention" aria-hidden="true"></span>
                                            <h3 id={`heading-${key}`} className="text-xl md:text-3xl font-serif text-neutral-900 uppercase tracking-tight">
                                                {key.replace(/_/g, ' ')}
                                            </h3>
                                        </div>
                                        <BentoGrid className="!grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 gap-6">
                                            {packages.map((pkg, idx) => (
                                                <BentoCard key={idx} span={1} className="flex flex-col justify-between group h-full">
                                                    <div>
                                                        <div className="flex justify-between items-start mb-6">
                                                            <Badge color="blue">Set Menu</Badge>
                                                            <span className="text-xl md:text-2xl font-serif font-bold text-convention" aria-label={`Price: ${pkg.price} Taka`}>৳ {pkg.price}</span>
                                                        </div>
                                                        <h4 className="font-bold text-lg md:text-xl text-neutral-900 mb-4">{pkg.name}</h4>
                                                        <ul className="space-y-3 mb-8">
                                                            {parseList(pkg.description).map((item, i) => (
                                                                <li key={i} className="flex gap-3 text-xs md:text-sm text-neutral-600 leading-relaxed items-start">
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-convention/40 mt-1.5 shrink-0" aria-hidden="true"></div>
                                                                    <span>{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    <Button variant="outline" fullWidth className="mt-auto group-hover:bg-convention group-hover:text-white group-hover:border-convention text-xs py-3" href="/book-hall" label={`Select ${pkg.name} package`}>
                                                        Select Package
                                                    </Button>
                                                </BentoCard>
                                            ))}
                                        </BentoGrid>
                                    </section>
                                ))}
                            </div>
                        )}

                        {activeTab === 'buffet' && (
                            <div className="space-y-8 md:space-y-12" id="buffet-panel" role="tabpanel" aria-labelledby="buffet-tab">
                                {SITE_DATA.menu.buffet_menu.map((buffet, idx) => (
                                    <section key={idx} className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-xl shadow-black/5 border border-neutral-100 group transition-all duration-500 hover:shadow-2xl hover:border-convention/20" aria-labelledby={`buffet-name-${idx}`}>
                                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 pb-10 border-b border-neutral-100 gap-6">
                                            <div className="space-y-3">
                                                <Badge color="blue" className="w-fit">Premium Selection</Badge>
                                                <h3 id={`buffet-name-${idx}`} className="text-3xl md:text-4xl lg:text-5xl font-serif text-neutral-900 leading-tight">{buffet.name}</h3>
                                            </div>
                                            <div className="flex flex-col md:items-end text-left md:text-right bg-neutral-50 md:bg-transparent p-4 md:p-0 rounded-2xl w-full md:w-auto mt-4 md:mt-0">
                                                <p className="text-neutral-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-1">Per Person Rate</p>
                                                <p className="text-4xl md:text-5xl font-serif text-convention font-bold leading-none" aria-label={`Price: ${buffet.price} Taka per person`}>৳{buffet.price}</p>
                                                <p className="text-neutral-400 text-[10px] md:text-xs mt-2 font-medium">All Inclusive (Excl. VAT)</p>
                                            </div>
                                        </div>

                                        <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
                                            <div className="lg:col-span-8">
                                                <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 mb-8 flex items-center gap-4">
                                                    Menu Highlights <span className="flex-grow h-px bg-neutral-100" aria-hidden="true"></span>
                                                </h4>
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                                    {parseList(buffet.description).map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 group/item">
                                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-convention/40 group-hover/item:bg-convention transition-colors shrink-0" aria-hidden="true" />
                                                            <span className="text-neutral-600 text-sm md:text-base group-hover/item:text-neutral-900 transition-colors leading-relaxed">{item}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="lg:col-span-4">
                                                <div className="bg-neutral-50/80 backdrop-blur-sm rounded-[2rem] p-8 border border-neutral-100 sticky top-32">
                                                    <div className="text-center mb-8">
                                                        <div className="w-16 h-16 rounded-full bg-white shadow-lg text-convention mx-auto flex items-center justify-center font-bold text-2xl mb-4 border border-neutral-100" aria-hidden="true">
                                                            {parseList(buffet.description).length}
                                                        </div>
                                                        <div className="font-serif font-bold text-xl text-neutral-900">Variety Dishes</div>
                                                        <p className="text-neutral-500 text-sm mt-2 leading-relaxed px-4">
                                                            Curated specifically for this package to offer a complete dining experience.
                                                        </p>
                                                    </div>

                                                    <div className="space-y-3">
                                                        <Button href="/book-hall" variant="secondary" fullWidth className="py-4 shadow-lg hover:shadow-xl hover:-translate-y-0.5" label={`Check availability for ${buffet.name} buffet`}>
                                                            Check Availability
                                                        </Button>
                                                        <p className="text-[10px] text-neutral-400 text-center leading-relaxed">
                                                            * Customization available upon request for large gatherings.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                ))}
                            </div>
                        )}
                    </div>
                </Container>
            </Section>
        </div>
    );
}
