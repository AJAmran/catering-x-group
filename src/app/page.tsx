import React from 'react';
import { Star, Calendar, Utensils, Users, ArrowRight, MapPin, ChefHat, Play, PartyPopper, Handshake, Cake, ChessQueen } from 'lucide-react';
import { Container, FadeIn, Button, Section, SectionHeading, BentoGrid, BentoCard, Badge } from '@/components/UI';
import { SITE_DATA } from '@/lib/constants';
import Image from 'next/image';
import Link from 'next/link';

import { FloatingCards } from '@/components/FloatingCards';

import { LegacySection } from '@/components/LegacySection';
import { AppPromotion } from '@/components/AppPromotion';

export const metadata = {
  title: "X-Group Chain Restaurant & Hospitality Management | Premier Event Services in Dhaka",
  description: "Experience architectural grandeur & culinary excellence with X-Group Chain Restaurant & Hospitality Management. Premier catering services in Dhaka since 1992.",
  alternates: {
    canonical: 'https://x-group-catering.com',
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Immersive 3D Hero Section */}
      <div className="relative min-h-[100svh] flex items-center overflow-hidden bg-convention-dark">
        {/* Background Parallax Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src={SITE_DATA.site.assets.hero_bg}
            alt="Luxury Catering"
            title="X-Group Luxury Catering Experience"
            width={1920}
            height={1080}
            className="w-full h-full object-cover opacity-60 animate-hero-pulse"
            priority
            sizes="100vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-convention-dark/25"></div> {/* Base cinematic tint */}
          <div className="absolute inset-0 bg-gradient-to-b from-convention-dark/60 via-transparent to-convention-dark/80"></div> {/* Depth & Contrast */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_25%,_rgba(30,58,102,0.4)_100%)]"></div> {/* Vignette Spotlight */}
          <div className="absolute inset-0 bg-noise opacity-[0.03]"></div> {/* Micro-texture refine */}
        </div>

        <Container className="relative z-10 w-full pt-20">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Text Content */}
            <div className="lg:col-span-7 text-white">
              <FadeIn delay={100}>
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 mb-8">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map(i => <div key={i} className="w-6 h-6 rounded-full bg-neutral-200 border-2 border-neutral-900"></div>)}
                  </div>
                  <span className="text-xs font-bold tracking-widest uppercase pr-2">Serving {SITE_DATA.legacy_section.subtitle.toLowerCase()}</span>
                </div>
              </FadeIn>

              <FadeIn delay={200}>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium mb-6 md:mb-8 leading-[0.9] tracking-tighter">
                  Taste the Artistry of <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-catering-light to-white italic pr-4">X-Group Catering</span>
                </h1>
              </FadeIn>

              <FadeIn delay={300}>
                <p className="text-lg md:text-xl lg:text-2xl text-neutral-300 mb-8 md:mb-10 max-w-xl font-light leading-relaxed border-l-4 md:border-l-8 border-convention pl-4 md:pl-6">
                  Dhaka&apos;s premier chain restaurant, hospitality & catering services.
                  Where culinary excellence meets architectural grandeur.
                </p>
              </FadeIn>

              <FadeIn delay={400} className="flex flex-wrap gap-4">
                <Button variant="primary" href="/halls">Know More</Button>
                <Button variant="secondary" href="/book-hall">Book Now</Button>
              </FadeIn>
            </div>

            {/* Floating 3D Cards (Automated Slider) */}
            <FloatingCards halls={SITE_DATA.halls} />
          </div>
        </Container>
      </div>

      {/* 2. Legacy Section */}
      <LegacySection />

      <Section className="bg-neutral-50">
        <Container>
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <SectionHeading title="Hospitality Redefined" subtitle="Holistic Management" className="mb-0" />
            <div className="flex items-center gap-6">
              <div className="hidden lg:block text-right">
                <p className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-1">Explore</p>
                <Link href="/about" className="text-sm font-serif font-medium text-neutral-900 hover:text-convention transition-colors">Our Legacy Since 1992</Link>
              </div>
              <Button variant="outline" href="/about">Corporate Profile</Button>
            </div>
          </div>

          <BentoGrid aria-label="Our core services and venues">
            {/* 1. Grand Weddings - Cinematic Hero Card */}
            <BentoCard span={2} href="/halls" aria-label="Explore our grand wedding venues" className="min-h-[350px] md:min-h-[480px] text-white flex flex-col justify-end group p-6 md:p-12 overflow-hidden border-0 bg-convention-dark shadow-2xl">
              <div className="absolute inset-0 z-0" aria-hidden="true">
                <Image
                  src={SITE_DATA.site.assets.wedding_img}
                  alt="Elegant wedding ballroom setup with floral grandeur"
                  title="Grand Wedding Venue by X-Group"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover opacity-70 group-hover:scale-110 transition-transform duration-1000 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 66vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-convention-dark via-convention-dark/40 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Badge color="blue" className="bg-white/10 text-white border border-white/20 backdrop-blur-md">Premium Occasion</Badge>
                  <span className="w-12 h-[1px] bg-white/30" aria-hidden="true"></span>
                </div>
                <h3 className="text-4xl md:text-5xl font-serif mb-4 leading-tight">Grand <br />Weddings</h3>
                <p className="text-white/80 mb-8 max-w-sm text-lg font-light leading-relaxed">
                  Transforming your vision into royal reality. From architectural splendor to curated culinary journeys.
                </p>
                <div className="flex items-center gap-4 group/btn">
                  <div className="w-14 h-14 rounded-full bg-white text-neutral-900 flex items-center justify-center group-hover/btn:bg-convention group-hover/btn:text-white transition-all duration-500 shadow-xl" aria-hidden="true">
                    <ArrowRight size={24} />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-widest text-white/90 group-hover/btn:text-white transition-colors">Discover Venues</span>
                </div>
              </div>
            </BentoCard>

            {/* 2. Premium Catering - Editorial Style */}
            <BentoCard span={1} href="/menu" className="bg-white min-h-[350px] md:min-h-[480px] flex flex-col group p-6 md:p-10 border-neutral-100 shadow-xl hover:shadow-2xl hover:shadow-catering/5 transition-all">
              <div className="flex-1">
                <div className="inline-flex items-center justify-center p-4 rounded-2xl bg-catering/5 text-catering mb-8 group-hover:bg-catering group-hover:text-white transition-all duration-500" aria-hidden="true">
                  <Utensils size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-3xl font-serif text-neutral-900 mb-4 group-hover:text-catering transition-colors">Exquisite Catering</h3>
                <p className="text-neutral-700 leading-relaxed font-light">
                  A legacy of taste spanning three decades. Our master chefs craft custom menus that honor tradition and embrace modernity.
                </p>

                <ul className="mt-8 space-y-3" aria-label="Catering specialities">
                  {['Traditional Bengali', 'Continental Fusion', 'Mughlai Excellence'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-xs font-bold text-neutral-600 uppercase tracking-widest">
                      <span className="w-1.5 h-1.5 rounded-full bg-catering/30" aria-hidden="true"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-8 pt-8 border-t border-neutral-50 flex items-center justify-between text-catering font-bold text-sm tracking-widest uppercase">
                Explore Menu <ArrowRight size={18} aria-hidden="true" />
              </div>
            </BentoCard>

            {/* 3. Corporate & Governance */}
            <BentoCard span={1} href="/halls" className="bg-[#111d31] text-white min-h-[350px] md:min-h-[480px] flex flex-col justify-between group p-6 md:p-10 relative overflow-hidden border-0 shadow-2xl">
              {/* Decorative Subtle Background Pattern */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_#2f528f_0%,_transparent_60%)]"></div>
              </div>

              <div className="absolute top-0 right-0 p-12 opacity-[0.08] scale-150 rotate-12 transition-transform duration-1000 group-hover:rotate-0 group-hover:scale-125" aria-hidden="true">
                <Users size={200} />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6 backdrop-blur-md">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" aria-hidden="true"></div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white">Business Solutions</span>
                </div>
                <h3 className="text-3xl font-serif mb-4 leading-tight text-white font-medium">Corporate <br />Excellence</h3>
                <p className="text-white/90 font-light leading-relaxed mb-6 italic">
                  State-of-the-art facilities for high-stakes conferences, seminars, and organizational summits.
                </p>
              </div>

              <div className="relative z-10">
                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-end border-b border-white/20 pb-2">
                    <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Service Tier</span>
                    <span className="text-sm font-serif text-blue-400 font-bold">Premier</span>
                  </div>
                  <div className="flex justify-between items-end border-b border-white/20 pb-2">
                    <span className="text-xs font-bold text-white/70 uppercase tracking-widest">Tech Ready</span>
                    <span className="text-sm font-serif text-blue-400 font-bold">Yes</span>
                  </div>
                </div>
                <div className="w-full py-4 bg-white text-neutral-900 rounded-2xl flex items-center justify-center gap-3 font-bold text-xs uppercase tracking-[0.2em] transform transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white shadow-xl">
                  MICE Services <ArrowRight size={16} aria-hidden="true" />
                </div>
              </div>
            </BentoCard>

            {/* 4. Statistics - Premium Visual */}
            <BentoCard span={1} className="bg-white flex flex-col justify-center items-center text-center p-10 border-neutral-100 shadow-lg" aria-label={`${SITE_DATA.legacy_section.stats.value} prime locations across Dhaka`}>
              <div className="relative mb-4">
                <span className="text-8xl md:text-9xl font-serif font-medium text-catering/10 absolute -inset-12 flex items-center justify-center select-none" aria-hidden="true">{parseInt(SITE_DATA.legacy_section.stats.value)}</span>
                <span className="text-7xl font-serif font-medium text-neutral-900 relative z-10">{SITE_DATA.legacy_section.stats.value}</span>
              </div>
              <div className="w-12 h-[2px] bg-catering/40 mb-4" aria-hidden="true"></div>
              <span className="text-xs font-black tracking-[0.3em] uppercase text-neutral-600">Prime Locations Across Dhaka</span>
            </BentoCard>

            {/* 5. Our Heritage - Wide Editorial */}
            <BentoCard span={3} href="/about" className="bg-white flex flex-col md:flex-row items-stretch group p-0 overflow-hidden border-neutral-100 shadow-xl min-h-[320px]">
              <div className="w-full md:w-1/2 p-12 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-xs font-black text-convention uppercase tracking-[0.3em]">Our Heritage</span>
                  <span className="flex-1 h-[1px] bg-neutral-100" aria-hidden="true"></span>
                </div>
                <h3 className="text-4xl font-serif text-neutral-900 mb-6">{SITE_DATA.legacy_section.subtitle}</h3>
                <p className="text-neutral-600 leading-relaxed font-light mb-8 text-lg italic">
                  &ldquo;A journey of constant evolution, setting the gold standard for hospitality in Bangladesh for over three decades.&rdquo;
                </p>
                <div className="flex items-center gap-3 text-sm font-bold text-neutral-900 group-hover:text-convention transition-colors">
                  Read Our Full Story <ArrowRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-2" />
                </div>
              </div>
              <div className="w-full md:w-1/2 relative min-h-[300px]" aria-hidden="true">
                <Image
                  src={SITE_DATA.site.assets.history_img}
                  alt="Our History"
                  title="X-Group Heritage and History"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </BentoCard>
          </BentoGrid>
        </Container>
      </Section>

      {/* 3. Featured Halls (Horizontal Scroll / Carousel feel) */}
      <Section className="bg-white" id="featured-venues">
        <Container>
          <SectionHeading title="Signature Venues" subtitle="Architectural Elegance" />

          <div className="grid md:grid-cols-2 gap-12" role="list">
            {SITE_DATA.halls.slice(0, 2).map((hall, idx) => (
              <Link key={idx} href="/halls" className="group cursor-pointer" role="listitem" aria-label={`View ${hall.name} details`}>
                <div className="relative rounded-[2.5rem] overflow-hidden aspect-[4/3] mb-8">
                  <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-transparent transition-colors z-10"></div>
                  <Image
                    src={hall.image || ""}
                    alt={hall.name}
                    title={`${hall.name} - Premium Venue`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute top-6 right-6 z-20 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2">
                    <Users size={14} className="text-convention" aria-hidden="true" />
                    {hall.capacity || hall.capacity_range} Guests
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-3xl font-serif text-neutral-900 group-hover:text-convention transition-colors">{hall.name}</h3>
                    <ArrowRight className="text-neutral-300 group-hover:text-convention -translate-x-4 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all" aria-hidden="true" />
                  </div>
                  <p className="text-neutral-600 flex items-center gap-2 text-sm font-medium uppercase tracking-wide">
                    <MapPin size={14} aria-hidden="true" /> {hall.location || 'Dhaka, Bangladesh'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      {/* 4. Menu Teaser - Professional Culinary Showcase */}
      <Section className="bg-neutral-50 relative overflow-hidden" id="menu-teaser">
        {/* Background Decorative Accents */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-catering/5 skew-x-12 transform origin-top translate-x-20 z-0" aria-hidden="true"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-catering/10 rounded-full blur-[100px] animate-pulse z-0" aria-hidden="true"></div>

        <Container className="relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Text Pillar */}
            <div className="lg:w-5/12">
              <FadeIn>
                <SectionHeading title="Culinary Artistry" subtitle="The Menu" className="mb-8" />
              </FadeIn>

              <FadeIn delay={200}>
                <p className="text-xl text-neutral-700 mb-12 leading-relaxed font-light">
                  From traditional Bengali feasts to continental delicacies, our master chefs craft immersive culinary experiences that honor tradition and embrace innovation.
                </p>
              </FadeIn>

              <FadeIn delay={400}>
                <ul className="grid grid-cols-2 gap-4 mb-12" aria-label="Menu categories previews">
                  {['Appetizers', 'Set Menu', 'Buffet', 'Desserts'].map((cat, i) => (
                    <li
                      key={cat}
                      className="group bg-white hover:bg-catering hover:text-white p-5 rounded-3xl flex items-center gap-4 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 cursor-default border border-neutral-100 hover:border-catering"
                    >
                      <div className="w-2.5 h-2.5 rounded-full bg-catering group-hover:bg-white transition-colors" aria-hidden="true"></div>
                      <span className="font-bold text-neutral-800 group-hover:text-white transition-colors">{cat}</span>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <FadeIn delay={600}>
                <Button variant="primary" href="/menu" className="shadow-2xl" label="View our full culinary menu">View Full Menu</Button>
              </FadeIn>
            </div>

            {/* Visual Pillar - Complex Dish Arrangement */}
            <div className="lg:w-7/12 relative min-h-[400px] md:min-h-[500px] w-full mt-12 lg:mt-0">
              {/* Dynamic Abstract Shapes */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] pointer-events-none z-0" aria-hidden="true">
                <div className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-catering/5 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-1/4 right-1/4 w-60 h-60 md:w-80 md:h-80 bg-convention/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
              </div>

              <div className="relative h-full flex items-center justify-center">
                {/* Main Large Dish */}
                <FadeIn delay={400} className="relative z-20 w-3/4 transform -rotate-3 hover:rotate-0 transition-transform duration-700 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border-[12px] border-white rounded-[3rem] overflow-hidden">
                  <Image
                    src="https://res.cloudinary.com/dhukcjdmi/image/upload/v1770523716/WhatsApp_Image_2026-02-08_at_10.02.09_AM_1_ywf8ng.jpg"
                    alt="Signature Dish"
                    title="X-Group Signature Culinary Dish"
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 80vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 pointer-events-none" aria-hidden="true"></div>
                </FadeIn>

                {/* Secondary Floating Dish */}
                <FadeIn delay={700} className="absolute -bottom-10 -left-4 lg:-left-12 z-30 w-1/2 animate-float shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] border-[6px] md:border-[10px] border-white rounded-full overflow-hidden transform hover:scale-105 transition-transform duration-500">
                  <Image
                    src="https://res.cloudinary.com/dhukcjdmi/image/upload/v1770524541/Kofta_polao_1_tprcox.jpg"
                    alt="Specialty Polao"
                    title="X-Group Specialty Polao"
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </FadeIn>

                {/* Third Decorative Element/Badge */}
                <FadeIn delay={900} className="absolute top-0 right-0 z-40 transform translate-x-4 lg:translate-x-12 -translate-y-6">
                  <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] shadow-2xl border border-white/50 flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl bg-catering text-white flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform" aria-hidden="true">
                      <ChefHat size={32} />
                    </div>
                    <div className="text-center">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-catering mb-1">Authentic</p>
                      <p className="font-serif text-lg text-neutral-900 leading-tight">Master <br />Chef Recommended</p>
                    </div>
                  </div>
                </FadeIn>

                {/* Floating Garnish Particles */}
                <div className="absolute top-0 left-1/4 w-3 h-3 bg-catering rounded-full opacity-20 animate-float" style={{ animationDelay: '1.5s' }} aria-hidden="true"></div>
                <div className="absolute bottom-1/4 right-0 w-2 h-2 bg-convention rounded-full opacity-20 animate-float" style={{ animationDelay: '3s' }} aria-hidden="true"></div>
                <div className="absolute top-1/2 left-0 w-4 h-4 border-2 border-catering/20 rounded-full animate-float" style={{ animationDelay: '0.5s' }} aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <AppPromotion />

      {/* 5. Event Types Section */}
      <Section className="bg-neutral-100" id="event-types">
        <Container>
          <SectionHeading title="We Are Ready For" subtitle="Celebrations & Events" center />

          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4" aria-label="Types of events we cater for">
            {[
              { label: 'Wedding', icon: PartyPopper },
              { label: 'Reception', icon: Handshake },
              { label: 'Gaye-Holud', icon: ChessQueen },
              { label: 'Anniversary', icon: Star },
              { label: 'Birthday', icon: Cake },
              { label: 'Corporate', icon: Users },
              { label: 'Meetings', icon: Users },
              { label: 'Get-Togethers', icon: Users },
              { label: 'Conferences', icon: Users },
              { label: 'Parties', icon: PartyPopper }
            ].map((event, idx) => (
              <li
                key={idx}
                className="
                  bg-white rounded-[2rem] p-6 
                  border border-neutral-200/60 
                  shadow-[0_2px_20px_-12px_rgba(0,0,0,0.1)] 
                  hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] 
                  transition-all duration-500 ease-out 
                  hover:-translate-y-1 cursor-default 
                  flex flex-col items-center text-center justify-center gap-4 group h-full min-h-[160px]
                "
              >
                <div className="
                  w-14 h-14 rounded-2xl bg-convention/5 text-convention 
                  flex items-center justify-center 
                  group-hover:bg-convention group-hover:text-white 
                  transition-colors duration-300
                " aria-hidden="true">
                  <event.icon size={24} />
                </div>
                <h3 className="font-serif font-medium text-lg text-neutral-900 group-hover:text-convention transition-colors">
                  {event.label}
                </h3>
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
