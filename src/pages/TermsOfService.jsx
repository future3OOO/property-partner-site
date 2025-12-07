import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Shield, ArrowRight, Activity, Globe, Lock, Scale, AlertTriangle, HelpCircle } from "lucide-react";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const TermSection = ({ tag, title, children, meta }) => (
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
                <title>Terms of Service | Property Partner Protocol</title>
                <meta name="description" content="Terms and conditions governing the use of Property Partner's digital services." />
            </Helmet>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <main className="flex-grow pt-24 h-full flex flex-col">

                {/* HERO HEADER */}
                <section className="bg-navy py-20 border-b-8 border-teal relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    <div className="container mx-auto px-6 relative z-10">
                        <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block border border-teal/30 inline-block px-3 py-1 bg-teal/10">
                            {'>'} LEGAL_PROTOCOL // TERMS
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none mb-6">
                            TERMS OF<br />SERVICE
                        </h1>
                        <p className="font-mono text-white/60 max-w-2xl border-l-2 border-teal pl-6 text-sm md:text-base">
                            The terms and conditions governing your use of our website and services.<br />
                            <span className="opacity-50 mt-2 block">Last updated: December 2025</span>
                        </p>
                    </div>
                </section>

                {/* MAIN CONTENT */}
                <div className="container mx-auto px-6 py-12">
                    <div className="bg-white border-2 border-navy shadow-hard p-6 md:p-12 max-w-5xl mx-auto -mt-24 relative z-20">

                        <TermSection
                            tag="> PROTOCOL_001"
                            title="ACCEPTANCE OF TERMS"
                            meta="> AGREEMENT: BINDING ON USE"
                        >
                            <p>By accessing or using the Property Partner website (propertypartner.co.nz), related platforms (including valua.co.nz), or any of our services, you agree to be bound by these Terms of Service.</p>
                            <p>If you do not agree to these terms, do not use our website or services.</p>
                            <p>These terms apply to all visitors, users, landlords, tenants, and others who access or use our services.</p>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_002"
                            title="OUR SERVICES"
                            meta="> SCOPE: WEBSITE | DIGITAL PLATFORMS | INFORMATION SERVICES"
                        >
                            <p>Property Partner provides property management services including, but not limited to:</p>
                            <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                                <li>Residential property management</li>
                                <li>Tenant sourcing and screening</li>
                                <li>Rent collection and disbursement</li>
                                <li>Property inspections and reporting</li>
                                <li>Maintenance coordination</li>
                                <li>Tenancy agreement administration</li>
                                <li>Rental appraisals and valuations (via valua.co.nz)</li>
                            </ul>
                            <p>Our services are governed by separate management agreements between Property Partner and our clients. These Terms of Service apply to your use of our website and digital platforms.</p>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_003"
                            title="USER RESPONSIBILITIES"
                            meta="> CONDUCT: LAWFUL | ACCURATE | RESPECTFUL"
                        >
                            <p>When using our website and services, you agree to:</p>
                            <div className="space-y-4">
                                <div>
                                    <strong className="block text-navy font-bold uppercase text-xs mb-1">Provide accurate information:</strong>
                                    All information you submit must be true, accurate, and complete. You are responsible for keeping your information up to date.
                                </div>
                                <div>
                                    <strong className="block text-navy font-bold uppercase text-xs mb-1">Use services lawfully:</strong>
                                    You will not use our services for any unlawful purpose or in violation of any applicable laws or regulations.
                                </div>
                                <div>
                                    <strong className="block text-navy font-bold uppercase text-xs mb-1">Respect intellectual property:</strong>
                                    You will not copy, reproduce, or distribute any content from our website without permission.
                                </div>
                                <div>
                                    <strong className="block text-navy font-bold uppercase text-xs mb-1">Maintain account security:</strong>
                                    If you have an account with us, you are responsible for maintaining the confidentiality of your login credentials.
                                </div>
                                <div>
                                    <strong className="block text-navy font-bold uppercase text-xs mb-1">Prohibited conduct:</strong>
                                    <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                                        <li>Submitting false or misleading information</li>
                                        <li>Impersonating any person or entity</li>
                                        <li>Interfering with or disrupting our services</li>
                                        <li>Attempting to gain unauthorised access to our systems</li>
                                        <li>Using automated tools to scrape or extract data</li>
                                        <li>Transmitting malware or harmful code</li>
                                    </ul>
                                </div>
                            </div>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_004"
                            title="INTELLECTUAL PROPERTY"
                            meta="> OWNERSHIP: PROPERTY PARTNER | PROTECTION: COPYRIGHT & TRADEMARK"
                        >
                            <p>All content on the Property Partner website—including text, graphics, logos, images, software, and design—is the property of Property Partner or our licensors and is protected by copyright and intellectual property laws.</p>
                            <p><strong>You may:</strong> View and print content for personal, non-commercial use; Share links to our website.</p>
                            <p><strong>You may not:</strong> Reproduce, distribute, or modify our content without permission; Use our trademarks or branding without authorisation; Remove any copyright or proprietary notices.</p>
                            <p className="text-xs italic bg-wash p-2">The Property Partner name, logo, and all related marks are trademarks of Strathmore Property Ltd.</p>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_005"
                            title="PROPERTY LISTINGS"
                            meta="> LISTINGS: INDICATIVE | VERIFICATION REQUIRED"
                        >
                            <p>Property listings on our website are provided for informational purposes. While we endeavour to ensure accuracy, we do not guarantee that all information is complete, current, or error-free.</p>
                            <div className="bg-navy/5 p-4 border border-navy/10">
                                <h4 className="font-bold text-xs uppercase mb-2 text-navy">Disclaimer:</h4>
                                <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                                    <li>Listing details may change without notice</li>
                                    <li>Availability is not guaranteed</li>
                                    <li>Photos and descriptions are indicative only</li>
                                    <li>Rental prices are subject to change</li>
                                </ul>
                            </div>
                            <p>You should verify all information directly with us before making any decisions based on listing content.</p>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_006"
                            title="VALUA.CO.NZ"
                            meta="> VALUA: ESTIMATES ONLY | NOT FORMAL APPRAISAL"
                        >
                            <p>Our rental appraisal and valuation platform (valua.co.nz) provides estimated rental values based on available market data and algorithms.</p>
                            <div className="flex items-start gap-3 bg-teal/10 p-3 border-l-4 border-teal">
                                <AlertTriangle className="w-5 h-5 text-teal shrink-0" />
                                <div className="text-xs">
                                    <strong className="block text-navy font-bold uppercase mb-1">Important:</strong>
                                    Valuations are estimates only and not guaranteed. Results should not be relied upon as formal appraisals. Market conditions change and may affect accuracy. For formal valuations, consult a registered valuer.
                                </div>
                            </div>
                            <p>Use of the Valua platform is subject to these Terms of Service and any additional terms specified on that platform.</p>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_007"
                            title="THIRD-PARTY LINKS"
                            meta="> EXTERNAL LINKS: NOT ENDORSED | USER DISCRETION"
                        >
                            <p>Our website may contain links to third-party websites or services that are not owned or controlled by Property Partner.</p>
                            <p>We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites or services. You access third-party links at your own risk.</p>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_008"
                            title="LIMITATION OF LIABILITY"
                            meta="> LIABILITY: LIMITED | SUBJECT TO NZ LAW"
                        >
                            <p>To the maximum extent permitted by law:</p>
                            <ul className="space-y-4">
                                <li>
                                    <strong className="uppercase text-xs font-bold text-navy">Website provided "as is":</strong><br />
                                    Our website and digital platforms are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.
                                </li>
                                <li>
                                    <strong className="uppercase text-xs font-bold text-navy">No guarantee of availability:</strong><br />
                                    We do not guarantee that our website will be uninterrupted, secure, or error-free.
                                </li>
                                <li>
                                    <strong className="uppercase text-xs font-bold text-navy">Limitation of damages:</strong><br />
                                    Property Partner, its directors, employees, and agents shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services.
                                </li>
                                <li>
                                    <strong className="uppercase text-xs font-bold text-navy">Maximum liability:</strong><br />
                                    Our total liability to you for any claim arising from these terms or your use of the website shall not exceed the amount you have paid us (if any) in the 12 months preceding the claim.
                                </li>
                            </ul>
                            <p className="text-xs italic mt-2">Nothing in these terms excludes or limits liability that cannot be excluded under New Zealand law, including under the Consumer Guarantees Act 1993.</p>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_009"
                            title="INDEMNIFICATION"
                            meta="> INDEMNITY: USER RESPONSIBILITY"
                        >
                            <p>You agree to indemnify, defend, and hold harmless Property Partner, its directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from:</p>
                            <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                                <li>Your use of our website or services</li>
                                <li>Your breach of these terms</li>
                                <li>Your violation of any third-party rights</li>
                                <li>Any content you submit to us</li>
                            </ul>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_010"
                            title="TERMINATION"
                            meta="> TERMINATION: AT DISCRETION | IMMEDIATE EFFECT"
                        >
                            <p>We may terminate or suspend your access to our website and services immediately, without prior notice, for any reason, including if you breach these Terms of Service.</p>
                            <p>Upon termination:</p>
                            <ul className="list-disc pl-5 space-y-1 font-mono text-xs">
                                <li>Your right to use our website ceases immediately</li>
                                <li>Provisions that by their nature should survive (intellectual property, limitation of liability, indemnification) will continue to apply</li>
                            </ul>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_011"
                            title="GOVERNING LAW"
                            meta="> JURISDICTION: NEW ZEALAND"
                        >
                            <p>These Terms of Service are governed by and construed in accordance with the laws of New Zealand.</p>
                            <p>Any disputes arising from these terms or your use of our website shall be subject to the exclusive jurisdiction of the courts of New Zealand.</p>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_012"
                            title="CHANGES TO TERMS"
                            meta="> UPDATES: EFFECTIVE ON POSTING | REVIEW RECOMMENDED"
                        >
                            <p>We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website.</p>
                            <p>Your continued use of our website after changes are posted constitutes your acceptance of the revised terms.</p>
                            <p>We encourage you to review these terms periodically.</p>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_013"
                            title="SEVERABILITY"
                            meta="> VALIDITY: PARTIAL ENFORCEABILITY PRESERVED"
                        >
                            <p>If any provision of these terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.</p>
                        </TermSection>

                        <TermSection
                            tag="> PROTOCOL_014"
                            title="CONTACT US"
                            meta="> SUPPORT: AVAILABLE"
                        >
                            <p>If you have any questions about these Terms of Service, please contact us:</p>
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
                        </TermSection>

                    </div>
                </div>

            </main>
            <Footer />
        </div>
    );
};

export default TermsOfService;
