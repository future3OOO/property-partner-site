import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, ArrowRight, Activity, Globe, Lock, Eye, AlertTriangle } from "lucide-react";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const PolicySection = ({ tag, title, children, meta }) => (
        <div className="group border-b border-navy/10 py-12 last:border-b-0">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4 shrink-0">
                    <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-2 block bg-teal/10 w-fit px-2 py-1">
                        {tag}
                    </span>
                    <h2 className="text-2xl font-black text-navy uppercase tracking-tight leading-none mb-4 group-hover:text-teal transition-colors">
                        {title}
                    </h2>
                </div>
                <div className="md:w-3/4">
                    <div className="prose prose-sm prose-navy max-w-none font-sans text-navy/80 leading-relaxed space-y-4">
                        {children}
                    </div>
                    {meta && (
                        <div className="mt-6 pt-4 border-t border-navy/5 font-mono text-[10px] text-navy/40 uppercase tracking-widest flex flex-wrap gap-4">
                            {meta}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col min-h-screen bg-wash font-sans selection:bg-teal selection:text-navy">
            <Helmet>
                <title>Privacy Policy | Property Partner Protocol</title>
                <meta name="description" content="Property Partner privacy policy: How we collect, use, and protect your personal information." />
            </Helmet>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <main className="flex-grow pt-24 h-full flex flex-col">

                {/* HERO HEADER */}
                <section className="bg-navy py-20 border-b-8 border-teal relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    <div className="container mx-auto px-6 relative z-10">
                        <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block border border-teal/30 inline-block px-3 py-1 bg-teal/10">
                            {'>'} LEGAL_PROTOCOL // PRIVACY
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
                            PRIVACY<br />POLICY
                        </h1>
                        <p className="font-mono text-white/60 max-w-2xl border-l-2 border-teal pl-6 text-sm md:text-base">
                            How we collect, use, and protect your personal information.<br />
                            <span className="opacity-50 mt-2 block">Last updated: December 2025</span>
                        </p>
                    </div>
                </section>

                {/* MAIN CONTENT */}
                <div className="container mx-auto px-6 py-12">
                    <div className="bg-white border-2 border-navy shadow-hard p-6 md:p-12 max-w-5xl mx-auto -mt-24 relative z-20">

                        <PolicySection
                            tag="> PROTOCOL_001"
                            title="OVERVIEW"
                            meta="> JURISDICTION: NEW ZEALAND | COMPLIANCE: PRIVACY ACT 2020"
                        >
                            <p className="font-bold text-navy">Property Partner is committed to protecting your privacy.</p>
                            <p>This policy explains how we collect, use, store, and share your personal information in accordance with the Privacy Act 2020 (New Zealand).</p>
                            <p>By using our website, services, or providing us with your personal information, you agree to the terms of this policy.</p>
                        </PolicySection>

                        <PolicySection
                            tag="> PROTOCOL_002"
                            title="INFORMATION WE COLLECT"
                            meta="> DATA_COLLECTION: DIRECT | AUTOMATIC | THIRD-PARTY"
                        >
                            <p>We collect personal information that you provide directly to us, as well as information generated through your use of our services.</p>

                            <div className="grid md:grid-cols-2 gap-6 mt-4">
                                <div className="bg-wash p-4 border-l-4 border-navy">
                                    <h3 className="font-bold font-mono text-xs uppercase mb-2">Information you provide:</h3>
                                    <ul className="list-disc pl-5 space-y-1 text-xs">
                                        <li>Name and contact details (email, phone, address)</li>
                                        <li>Identification documents (for tenancy applications)</li>
                                        <li>Financial information (for rent payments, bond lodgement)</li>
                                        <li>Employment and income details</li>
                                        <li>References (landlord, employer, personal)</li>
                                        <li>Property details (for landlords)</li>
                                        <li>Communications with us</li>
                                    </ul>
                                </div>
                                <div className="space-y-4">
                                    <div className="bg-wash p-4 border-l-4 border-teal">
                                        <h3 className="font-bold font-mono text-xs uppercase mb-2">Collected automatically:</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-xs">
                                            <li>IP address and browser type</li>
                                            <li>Device information</li>
                                            <li>Pages visited and interactions</li>
                                            <li>Cookies and tracking technologies</li>
                                        </ul>
                                    </div>
                                    <div className="bg-wash p-4 border-l-4 border-navy/20">
                                        <h3 className="font-bold font-mono text-xs uppercase mb-2">From third parties:</h3>
                                        <ul className="list-disc pl-5 space-y-1 text-xs">
                                            <li>Credit reporting agencies</li>
                                            <li>Background check providers</li>
                                            <li>Previous landlords and referees</li>
                                            <li>Government agencies (Tenancy Services)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </PolicySection>

                        <PolicySection
                            tag="> PROTOCOL_003"
                            title="HOW WE USE YOUR INFORMATION"
                            meta="> PURPOSE: SERVICE DELIVERY | OPERATIONS | MARKETING"
                        >
                            <p>We use your personal information for the following purposes:</p>
                            <div className="space-y-4">
                                <div>
                                    <strong className="block text-navy font-bold uppercase text-xs mb-1">Service delivery:</strong>
                                    <ul className="list-disc pl-5 space-y-1 text-xs font-mono">
                                        <li>Processing tenancy applications</li>
                                        <li>Managing rental properties</li>
                                        <li>Coordinating maintenance requests</li>
                                        <li>Processing rent payments and bond lodgements</li>
                                        <li>Conducting property inspections</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong className="block text-navy font-bold uppercase text-xs mb-1">Business operations:</strong>
                                    <ul className="list-disc pl-5 space-y-1 text-xs font-mono">
                                        <li>Improving our services and customer experience</li>
                                        <li>Responding to enquiries and support requests</li>
                                        <li>Complying with legal obligations</li>
                                    </ul>
                                </div>
                                <div>
                                    <strong className="block text-navy font-bold uppercase text-xs mb-1">Marketing (with consent):</strong>
                                    <ul className="list-disc pl-5 space-y-1 text-xs font-mono">
                                        <li>Sending property listings and market updates</li>
                                        <li>Newsletters and promotional content</li>
                                        <li>You can opt out at any time</li>
                                    </ul>
                                </div>
                            </div>
                        </PolicySection>

                        <PolicySection
                            tag="> PROTOCOL_004"
                            title="INFORMATION SHARING"
                            meta="> SHARING: CONSENT-BASED | SERVICE PROVIDERS | LEGAL COMPLIANCE"
                        >
                            <p className="font-bold">We do not sell your personal information.</p>
                            <p>We only share your information in the following circumstances:</p>
                            <ul className="space-y-2">
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-teal mt-1 shrink-0" />
                                    <span><strong>With your consent:</strong> Sharing tenant applications with landlords; Providing references.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-teal mt-1 shrink-0" />
                                    <span><strong>Service providers:</strong> Credit check agencies, payment processors, maintenance contractors.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-teal mt-1 shrink-0" />
                                    <span><strong>Legal requirements:</strong> Tenancy Services, Government agencies, Courts/Tribunals.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <ArrowRight className="w-4 h-4 text-teal mt-1 shrink-0" />
                                    <span><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of assets.</span>
                                </li>
                            </ul>
                            <p className="text-xs italic mt-2">All third parties are required to protect your information and use it only for the purposes we specify.</p>
                        </PolicySection>

                        <PolicySection
                            tag="> PROTOCOL_005"
                            title="DATA RETENTION"
                            meta="> RETENTION: PURPOSE-LIMITED | SECURE DESTRUCTION"
                        >
                            <p>We retain your personal information only for as long as necessary to fulfil the purposes for which it was collected.</p>
                            <div className="overflow-x-auto mt-4">
                                <table className="w-full text-left text-xs font-mono border border-navy/20">
                                    <thead className="bg-navy text-white">
                                        <tr>
                                            <th className="p-2 border border-white/10">Data Type</th>
                                            <th className="p-2 border border-white/10">Retention Period</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-navy/10">
                                        <tr><td className="p-2 font-bold">Tenancy records</td><td className="p-2">7 years after tenancy ends</td></tr>
                                        <tr><td className="p-2 font-bold">Financial records</td><td className="p-2">7 years (tax compliance)</td></tr>
                                        <tr><td className="p-2 font-bold">Unsuccessful applications</td><td className="p-2">12 months</td></tr>
                                        <tr><td className="p-2 font-bold">Marketing contacts</td><td className="p-2">Until consent withdrawn</td></tr>
                                        <tr><td className="p-2 font-bold">Website analytics</td><td className="p-2">2 years</td></tr>
                                        <tr><td className="p-2 font-bold">General enquiries</td><td className="p-2">5 years</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <p className="mt-4">After the retention period expires, we securely destroy your information by permanent deletion from our systems.</p>
                        </PolicySection>

                        <PolicySection
                            tag="> PROTOCOL_006"
                            title="DATA SECURITY"
                            meta="> SECURITY: ENCRYPTED | ACCESS-CONTROLLED | MONITORED"
                        >
                            <p>We implement appropriate technical and organisational measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction.</p>
                            <div className="flex items-center gap-4 bg-teal/10 p-4 border border-teal">
                                <Lock className="w-6 h-6 text-teal" />
                                <div className="text-xs font-mono">
                                    <strong>Security measures include:</strong> Encrypted transmission (SSL/TLS), Secure cloud storage, Regular audits, Staff training, MFA, Access limitation.
                                </div>
                            </div>
                            <p className="text-xs text-navy/60 mt-2">No method of transmission is 100% secure. If you become aware of any security breach, please contact us immediately.</p>
                        </PolicySection>

                        <PolicySection
                            tag="> PROTOCOL_007"
                            title="COOKIES & TRACKING"
                            meta="> TRACKING: ANALYTICS | PREFERENCES | ESSENTIAL ONLY"
                        >
                            <p>Our website uses cookies and similar technologies to improve your experience and analyse site usage.</p>
                            <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                                <li><strong>Essential:</strong> Required for website functionality</li>
                                <li><strong>Analytics:</strong> Understanding how visitors use our site</li>
                                <li><strong>Preferences:</strong> Remembering your settings</li>
                            </ul>
                            <p>You can control cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
                        </PolicySection>

                        <PolicySection
                            tag="> PROTOCOL_008"
                            title="YOUR RIGHTS"
                            meta="> RIGHTS: ACCESS | CORRECTION | DELETION | OBJECTION"
                        >
                            <p>Under the Privacy Act 2020, you have the right to:</p>
                            <div className="grid md:grid-cols-2 gap-4">
                                <div className="border border-navy/10 p-3">
                                    <strong className="block text-teal font-bold text-xs uppercase mb-1">Access</strong>
                                    Request a copy of the personal information we hold about you.
                                </div>
                                <div className="border border-navy/10 p-3">
                                    <strong className="block text-teal font-bold text-xs uppercase mb-1">Correction</strong>
                                    Ask us to correct any information that is inaccurate or incomplete.
                                </div>
                                <div className="border border-navy/10 p-3">
                                    <strong className="block text-teal font-bold text-xs uppercase mb-1">Deletion</strong>
                                    Request deletion where there is no legitimate reason to hold it.
                                </div>
                                <div className="border border-navy/10 p-3">
                                    <strong className="block text-teal font-bold text-xs uppercase mb-1">Objection</strong>
                                    Object to processing or withdraw consent for marketing.
                                </div>
                            </div>
                            <p className="mt-2 text-sm italic">To exercise any of these rights, contact us at the details below. We will respond within 20 working days.</p>
                        </PolicySection>

                        <PolicySection
                            tag="> PROTOCOL_009"
                            title="CHANGES TO THIS POLICY"
                            meta="> UPDATES: POSTED ON WEBSITE | NOTIFICATION FOR SIGNIFICANT CHANGES"
                        >
                            <p>We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We will notify you of any significant changes by posting the updated policy on our website with a new "last updated" date.</p>
                        </PolicySection>

                        <PolicySection
                            tag="> PROTOCOL_010"
                            title="CONTACT US"
                            meta="> SUPPORT: AVAILABLE | ESCALATION: PRIVACY COMMISSIONER"
                        >
                            <p>If you have any questions about this privacy policy, want to exercise your rights, or have a complaint about how we handle your personal information, please contact us:</p>
                            <div className="font-mono text-xs bg-navy/5 p-4 mt-2 space-y-2">
                                <div className="flex justify-between border-b border-navy/10 pb-2">
                                    <span className="font-bold">EMAIL:</span>
                                    <a href="mailto:support@propertypartner.co.nz" className="hover:text-teal font-bold">support@propertypartner.co.nz</a>
                                </div>
                                <div className="flex justify-between border-b border-navy/10 pb-2">
                                    <span className="font-bold">PHONE:</span>
                                    <span>03 385 4888</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-bold">ADDRESS:</span>
                                    <span>Property Partner, Christchurch, NZ</span>
                                </div>
                            </div>
                            <p className="text-xs mt-4">If you are not satisfied with our response, you can contact the Office of the Privacy Commissioner at <a href="https://privacy.org.nz" target="_blank" className="underline hover:text-teal">privacy.org.nz</a>.</p>
                        </PolicySection>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
