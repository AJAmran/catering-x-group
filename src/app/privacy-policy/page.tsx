import React from 'react';
import { Container, Section, SectionHeading, FadeIn, Button } from '@/components/UI';
import { Shield, Database, Cookie, FileText, Users, Lock, ExternalLink } from 'lucide-react';

export const metadata = {
    title: 'Privacy Policy | X-Group Catering',
    description: 'Learn how X-Group Catering protects your personal information and privacy as an online visitor to our website.',
};

const sections = [
    {
        id: "commitment",
        title: "Our Commitment",
        icon: Shield,
        content: "At X-group chain Restaurant, we are committed to protecting your privacy as an online visitor to our website. We use the information we collect about you to maximize the services that we provide to you. We respect the privacy and confidentiality of the information provided by you."
    },
    {
        id: "storage",
        title: "Storage and Security",
        icon: Database,
        content: "We receive and store information you enter on our website or give us in any other way from time to time. You may provide basic contact information such as your name, date of birth, phone number, address, and email address to enable us to send information or process your product order.",
        extra: "All information we receive from our customers is protected by our secure server. Credit card information is not stored by us on our servers."
    },
    {
        id: "cookies",
        title: "Cookies",
        icon: Cookie,
        content: "A cookie is a small file placed in your web browser that collects information about your web browsing behavior. Use of cookies allows a website to tailor its configuration to your needs and preferences. Cookies do not access information stored on your computer or any personal information."
    },
    {
        id: "disclosure",
        title: "Disclosure of Information",
        icon: FileText,
        content: "We may from time to time need to disclose certain information, which may include your Personal Data, to comply with a legal requirement, such as a law, regulation, court order, or in response to a law enforcement agency request."
    },
    {
        id: "third-parties",
        title: "Third Parties",
        icon: Users,
        content: "We do not and will not sell or deal in personal or customer information. We will never disclose your personal details to a third party except the necessary information required by providers of products or services you have purchased."
    },
    {
        id: "security",
        title: "Security Measures",
        icon: Lock,
        content: "We strive to ensure the security, integrity and privacy of personal information submitted to our website, and we periodically update our security measures in light of current technologies."
    },
    {
        id: "links",
        title: "External Links",
        icon: ExternalLink,
        content: "This website may contain links to other websites. These links are meant for your convenience only. Please be aware that we are not responsible for the privacy practices of such other websites."
    }
];

export default function PrivacyPolicyPage() {
    return (
        <main className="min-h-screen pt-24">
            <Section className="bg-neutral-50">
                <Container>
                    <SectionHeading
                        title="Privacy Policy"
                        subtitle="Data Protection"
                        center
                    />

                    <div className="max-w-5xl mx-auto">
                        <FadeIn delay={100} className="mb-20">
                            <div className="bg-white rounded-[4rem] p-10 md:p-16 shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.03)] border border-neutral-100 text-center relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-convention to-transparent opacity-20"></div>
                                <p className="text-xl md:text-2xl lg:text-3xl text-neutral-600 font-serif leading-[1.6] max-w-3xl mx-auto italic">
                                    &ldquo;Your privacy is our highest priority. We handle every piece of data with the same care and excellence we bring to our catering.&rdquo;
                                </p>
                            </div>
                        </FadeIn>

                        <div className="grid gap-8 md:gap-12">
                            {sections.map((section, idx) => (
                                <FadeIn key={section.id} delay={idx * 100 + 200}>
                                    <div className="bg-white rounded-[3.5rem] p-10 md:p-14 border border-neutral-100/80 shadow-[0_4px_30px_-15px_rgba(0,0,0,0.05)] group hover:shadow-2xl hover:shadow-black/[0.03] transition-all duration-700">
                                        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
                                            <div className="w-20 h-20 rounded-[2rem] bg-convention-dark text-white flex items-center justify-center shrink-0 group-hover:bg-convention transition-all duration-500 shadow-xl shadow-black/10">
                                                <section.icon size={36} strokeWidth={1.25} />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl md:text-3xl font-serif font-medium text-neutral-900 mb-6 leading-tight">
                                                    {section.title}
                                                </h3>
                                                <div className="space-y-6">
                                                    <p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-light">
                                                        {section.content}
                                                    </p>
                                                    {section.extra && (
                                                        <div className="mt-8 p-8 rounded-[2.5rem] bg-neutral-50 border border-neutral-100 relative overflow-hidden group/extra">
                                                            <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-convention"></div>
                                                            <p className="text-base md:text-lg text-neutral-500 leading-relaxed italic font-light relative z-10">
                                                                {section.extra}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn delay={900} className="mt-32 p-12 md:p-20 bg-convention-dark rounded-[4rem] text-white overflow-hidden relative shadow-2xl shadow-black/20">
                            <div className="absolute top-0 right-0 p-12 opacity-5">
                                <Shield size={220} />
                            </div>
                            {/* Decorative Blobs */}
                            <div className="absolute -top-24 -left-24 w-64 h-64 bg-convention/20 rounded-full blur-[100px]"></div>

                            <div className="relative z-10 text-center max-w-2xl mx-auto">
                                <h4 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-8 leading-tight">Questions regarding your data?</h4>
                                <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed mb-12">
                                    Our Data Protection Officer is available to discuss our privacy standards or help with data requests.
                                </p>
                                <div className="flex flex-col sm:flex-row items-center justify-center gap-12">
                                    <div className="flex flex-col items-center">
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-6">Privacy Concierge</span>
                                        <Button variant="primary" href="mailto:catering@x-grouprestaurant.com" className="">
                                            Request Data Audit
                                        </Button>
                                    </div>
                                    <div className="w-px h-16 bg-white/10 hidden sm:block"></div>
                                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                                        <span className="text-[10px] font-bold text-white/40 uppercase tracking-[0.4em] mb-4">Official Governance</span>
                                        <p className="text-white font-serif text-xl md:text-2xl mb-1">catering@x-grouprestaurant.com</p>
                                        <p className="text-white/40 text-xs font-medium uppercase tracking-[0.2em]">Confidential Shield Policy</p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                        <p className="text-neutral-400 text-[10px] font-bold uppercase tracking-[0.3em] text-center mt-12 pb-20">
                            Last Revised: February 7, 2026 • © X-Group Catering & Convention
                        </p>
                    </div>
                </Container>
            </Section>
        </main>
    );
}
