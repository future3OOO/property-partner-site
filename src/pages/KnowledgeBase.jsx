import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import {
    Search, ChevronRight, Menu, X, Database, Shield, HelpCircle,
    DollarSign, UserCheck, AlertTriangle, Check, ArrowRight, ArrowUpRight
} from "lucide-react";
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- DATA STRUCTURE: STRICT SEPARATION ---

const LANDLORD_DATABASE = [
    {
        id: "landlord-core",
        title: "Core Protocols",
        icon: Shield,
        items: [
            {
                id: "tenant-selection",
                question: "Tenant Selection Protocol",
                content: (
                    <div className="space-y-4">
                        <p className="font-bold text-navy">Our 4-Point Verification System:</p>
                        <ul className="space-y-2 text-sm font-mono text-ink-light">
                            <li className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                                <span><strong>Component 01:</strong> Credit Check (Multi-bureau analysis)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                                <span><strong>Component 02:</strong> Tenancy Tribunal Search (Legal history scan)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                                <span><strong>Component 03:</strong> Employer Verification (Income stability)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Check className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                                <span><strong>Component 04:</strong> Landlord References (Verified verbal checks)</span>
                            </li>
                        </ul>
                        <div className="bg-wash p-4 border-l-4 border-teal text-sm">
                            <span className="font-bold text-teal block mb-1">Standard:</span>
                            We do not approve applications without a solid previous rental reference.
                        </div>
                        <Link to="/services/landlords" className="inline-flex items-center gap-2 text-xs font-bold font-mono text-navy border-b-2 border-teal hover:bg-teal hover:text-white transition-colors px-1 mt-2">
                            VIEW FULL LANDLORD SERVICES <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                )
            },
            {
                id: "rent-payments",
                question: "Rent Payment Cycle",
                content: (
                    <div className="space-y-4">
                        <p className="text-sm">We pay landlords <strong>WEEKLY</strong>, not monthly.</p>
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="border border-navy/10 p-4">
                                <div className="font-mono text-xs font-bold text-navy uppercase mb-2">Processing Time</div>
                                <div className="text-sm">Processed every Monday evening</div>
                            </div>
                            <div className="border border-navy/10 p-4">
                                <div className="font-mono text-xs font-bold text-navy uppercase mb-2">Clearance</div>
                                <div className="text-sm">Funds available Tuesday morning</div>
                            </div>
                        </div>
                        <p className="text-xs text-ink-light italic">Includes automated statement generation.</p>
                    </div>
                )
            },
            {
                id: "maintenance-protocol",
                question: "Maintenance & Approvals",
                content: (
                    <div className="space-y-4">
                        <p className="text-sm">Managed via <strong>Tapi System</strong>. You receive notifications for all requests.</p>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-start gap-3 p-3 bg-white border border-navy/10">
                                <Check className="w-4 h-4 text-teal mt-1" />
                                <div className="text-sm"><strong>Standard:</strong> Approval requested before work order issued.</div>
                            </div>
                            <div className="flex items-start gap-3 p-3 bg-white border border-navy/10">
                                <AlertTriangle className="w-4 h-4 text-orange-500 mt-1" />
                                <div className="text-sm"><strong>Urgent:</strong> Immediate dispatch for health/safety/leak issues to minimise damage.</div>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: "inspections-landlord",
                question: "Inspection Cycle",
                content: (
                    <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-navy text-white p-3 text-center">
                                <div className="text-2xl font-black">90</div>
                                <div className="text-[10px] font-mono uppercase tracking-widest">Days</div>
                            </div>
                            <div className="flex items-center text-sm font-bold text-navy">
                                Quarterly Cycle (Insurance Compliant)
                            </div>
                        </div>
                        <ul className="text-sm space-y-2 list-disc pl-4 text-ink-light">
                            <li>Full photo documentation</li>
                            <li>Maintenance flagging</li>
                            <li>Tenant compliance check</li>
                            <li>Sent to both Owner & Tenant</li>
                        </ul>
                    </div>
                )
            },
            {
                id: "switching-protocol",
                question: "Switching Protocol",
                content: (
                    <div className="space-y-4">
                        <p className="text-sm">We handle the entire takeover process.</p>
                        <ol className="list-decimal pl-4 space-y-2 text-sm font-mono">
                            <li><strong>Step 01:</strong> You email termination to current PM.</li>
                            <li><strong>Step 02:</strong> Sign Authority to Act with us.</li>
                            <li><strong>Step 03:</strong> We uplift keys and files.</li>
                        </ol>
                        <div className="bg-teal/10 p-3 text-xs text-navy font-bold border border-teal">
                            No awkward conversations required. We handle the breakup.
                        </div>
                    </div>
                )
            }
        ]
    },
    {
        id: "landlord-financials",
        title: "Financials & Pricing",
        icon: DollarSign,
        items: [
            {
                id: "core-fees",
                question: "Management Fee Structure",
                content: (
                    <div className="space-y-4">
                        <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-black text-navy">8%</span>
                            <span className="font-mono text-sm text-ink-light transform uppercase">+ GST</span>
                        </div>
                        <p className="font-bold text-sm text-navy uppercase tracking-widest border-b border-navy/10 pb-2">Includes:</p>
                        <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                            <span>[x] Advertising</span>
                            <span>[x] Inspections</span>
                            <span>[x] Maintenance Admin</span>
                            <span>[x] Tribunal Time</span>
                            <span>[x] Credit Checks</span>
                            <span>[x] Rent Collection</span>
                        </div>
                        <div className="text-xs text-teal font-bold pt-2">ZERO HIDDEN FEES.</div>
                        <Link to="/pricing" className="inline-flex items-center gap-2 text-xs font-bold font-mono text-navy border-b-2 border-teal hover:bg-teal hover:text-white transition-colors px-1 mt-2">
                            VIEW FULL PRICING PAGE <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                )
            },
            {
                id: "optional-costs",
                question: "Excluded / Optional Costs",
                content: (
                    <div className="space-y-4">
                        <div className="border border-navy/10 p-3 hover:border-navy transition-colors">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-navy text-sm">Meth Testing</span>
                                <span className="font-mono text-xs text-ink-light">~$199 + GST</span>
                            </div>
                            <p className="text-xs text-ink-light">Third-party contractor. Upon request only. Not included by default.</p>
                        </div>
                        <div className="border border-navy/10 p-3 hover:border-navy transition-colors">
                            <div className="flex justify-between items-center mb-1">
                                <span className="font-bold text-navy text-sm">Smoke Alarm Testing</span>
                                <span className="font-mono text-xs text-ink-light">$116 + GST / yr</span>
                            </div>
                            <p className="text-xs text-ink-light">Strongly recommended. Includes yearly checks and replacements.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "market-matrix",
                question: "Value Comparison Matrix",
                content: (
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs font-mono border-collapse border border-navy/20">
                            <thead className="bg-navy text-white">
                                <tr>
                                    <th className="p-2 border border-navy/20">Service</th>
                                    <th className="p-2 border border-navy/20 opacity-70">Others</th>
                                    <th className="p-2 border border-navy/20 text-teal">Us</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white">
                                <tr className="border-b border-navy/10">
                                    <td className="p-2 font-bold">Marketing & Photos</td>
                                    <td className="p-2 text-ink-light">~$500</td>
                                    <td className="p-2 font-bold text-navy">INCLUDED</td>
                                </tr>
                                <tr className="border-b border-navy/10">
                                    <td className="p-2 font-bold">Inspections</td>
                                    <td className="p-2 text-ink-light">~$65 ea</td>
                                    <td className="p-2 font-bold text-navy">INCLUDED</td>
                                </tr>
                                <tr className="border-b border-navy/10">
                                    <td className="p-2 font-bold">Maintenance Admin</td>
                                    <td className="p-2 text-ink-light">10% Markup</td>
                                    <td className="p-2 font-bold text-navy">0% Markup</td>
                                </tr>
                                <tr className="border-b border-navy/10">
                                    <td className="p-2 font-bold">Admin/Postage</td>
                                    <td className="p-2 text-ink-light">$5 - $10/mo</td>
                                    <td className="p-2 font-bold text-navy">$0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )
            },
            {
                id: "guarantee",
                question: "Service Guarantee",
                content: (
                    <div className="bg-white border-2 border-navy p-4 shadow-[4px_4px_0px_#00D2C1]">
                        <h4 className="font-black text-navy uppercase italic mb-2">"Make It Right" Protocol</h4>
                        <p className="text-sm leading-relaxed mb-3">
                            If we mess up, we fix it. If you're not happy, we provide <strong>3 months of management at 0% fee</strong>.
                        </p>
                        <div className="font-mono text-[10px] text-navy/50 uppercase">Terms apply. Valid for active managements.</div>
                    </div>
                )
            }
        ]
    },
    {
        id: "landlord-support",
        title: "Common Questions",
        icon: HelpCircle,
        items: [
            {
                id: "landlord-faq",
                question: "Service Clarifications",
                content: (
                    <div className="space-y-6">
                        <div className="border-l-2 border-teal pl-4">
                            <h4 className="font-bold text-navy text-sm mb-1">Is advertising & screening included?</h4>
                            <p className="text-xs text-ink-light"><strong>YES.</strong> We cover professional photography, TradeMe marketing, and all background checks. No extra bills.</p>
                        </div>

                        <div className="border-l-2 border-teal pl-4">
                            <h4 className="font-bold text-navy text-sm mb-1">Are inspections extra?</h4>
                            <p className="text-xs text-ink-light"><strong>NO.</strong> Quarterly inspections and reports are fully covered by the 8% fee.</p>
                        </div>

                        <div className="border-l-2 border-teal pl-4">
                            <h4 className="font-bold text-navy text-sm mb-1">Do you charge for maintenance coordination?</h4>
                            <p className="text-xs text-ink-light"><strong>NEVER.</strong> We do not add a markup to contractor invoices. This ensures we are incentivized to find the best value, not the most expensive.</p>
                        </div>

                        <div className="border-l-2 border-teal pl-4">
                            <h4 className="font-bold text-navy text-sm mb-1">What happens if a tenant stops paying?</h4>
                            <p className="text-xs text-ink-light">Zero-tolerance arrears policy. Automated alerts on Day 1. Formal 14-day notice on Day 3. We handle all Tribunal mediation.</p>
                        </div>

                        <div className="border-l-2 border-teal pl-4">
                            <h4 className="font-bold text-navy text-sm mb-1">Can I use my own tradespeople?</h4>
                            <p className="text-xs text-ink-light"><strong>YES.</strong> You can nominate preferred contractors, provided they are licensed and insured (Health & Safety requirement).</p>
                        </div>
                        <p className="text-xs text-ink-light italic pt-4">Data extracted from Pricing Protocol.</p>
                    </div>
                )
            }
        ]
    }
];

const TENANT_DATABASE = [
    {
        id: "tenant-protocols",
        title: "Tenant Protocols",
        icon: UserCheck,
        items: [
            {
                id: "move-in-payments",
                question: "Rent Payment Account",
                content: (
                    <div className="space-y-4">
                        <div className="bg-navy text-white p-4">
                            <div className="font-mono text-teal text-xs uppercase tracking-widest mb-2 border-b border-white/20 pb-1">Payment Coordinates</div>
                            <div className="space-y-2 font-mono text-sm">
                                <div className="flex justify-between"><span className="opacity-60">Account:</span> <span>Strathmore Property Ltd</span></div>
                                <div className="flex justify-between"><span className="opacity-60">Number:</span> <span className="text-teal font-bold">06-0807-0355603-00</span></div>
                                <div className="flex justify-between"><span className="opacity-60">Ref:</span> <span className="bg-white/10 px-1">Your 'T-Number'</span></div>
                            </div>
                        </div>
                        <p className="text-xs text-red-600 font-bold flex items-center gap-2">
                            <AlertTriangle className="w-3 h-3" />
                            Reference number is mandatory for tracking.
                        </p>
                        <Link to="/tenant-resources" className="inline-flex items-center gap-2 text-xs font-bold font-mono text-navy border-b-2 border-teal hover:bg-teal hover:text-white transition-colors px-1 mt-2">
                            VIEW FULL RESOURCES <ArrowUpRight className="w-3 h-3" />
                        </Link>
                    </div>
                )
            },
            {
                id: "pest-matrix",
                question: "Pest Responsibility Matrix",
                content: (
                    <div className="space-y-4">
                        <p className="text-sm mb-2">Liability follows the <span className="font-mono text-xs bg-navy/10 px-1">source of origination</span> principle.</p>
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs font-mono border-2 border-navy">
                                <thead className="bg-navy text-white">
                                    <tr>
                                        <th className="p-2">Type</th>
                                        <th className="p-2">Responsibility</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-navy/10">
                                    <tr><td className="p-2 font-bold">Fleas (No Pets)</td><td className="p-2">Landlord</td></tr>
                                    <tr><td className="p-2 font-bold">Fleas (With Pets)</td><td className="p-2">Tenant</td></tr>
                                    <tr><td className="p-2 font-bold">Ants</td><td className="p-2">Tenant (Seasonal/Hygiene)</td></tr>
                                    <tr><td className="p-2 font-bold">Mice/Rats</td><td className="p-2">LL (Structural) vs Tenant (Hygiene)</td></tr>
                                    <tr><td className="p-2 font-bold">Wasps/Bees</td><td className="p-2">Landlord (Nests)</td></tr>
                                    <tr><td className="p-2 font-bold">Spiders</td><td className="p-2">Tenant (General Cleaning)</td></tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="bg-wash p-3 text-xs italic border-l-2 border-teal">
                            Report infestations within 30 days of move-in for Landlord coverage.
                        </div>
                    </div>
                )
            },
            {
                id: "pet-policy",
                question: "Pet Policy & Application",
                content: (
                    <div className="space-y-4">
                        <div className="bg-teal/10 p-3 border-l-4 border-teal text-xs">
                            <span className="font-bold text-navy block mb-1">New 2025 Regulations:</span>
                            Residential Tenancies Amendment Act 2024 provisions now apply.
                        </div>
                        <div className="space-y-2 text-sm text-ink-light">
                            <p><strong>Consent:</strong> You must request written consent. Landlord must respond within 21 days.</p>
                            <p><strong>Refusal:</strong> Can only be declined on reasonable grounds (e.g., unsuitable property, body corporate rules, dangerous breed).</p>
                            <p><strong>Pet Bond:</strong> A bond of up to 2 weeks' rent may be required (in addition to normal bond).</p>
                            <p><strong>Liability:</strong> Tenants are fully liable for pet damage beyond fair wear and tear.</p>
                        </div>
                    </div>
                )
            },
            {
                id: "ending-tenancy",
                question: "Ending a Tenancy",
                content: (
                    <div className="space-y-4">
                        <div className="grid gap-3">
                            <div className="border border-navy/10 p-3 bg-white">
                                <h4 className="font-bold text-navy text-xs uppercase mb-1">Periodic Tenancy</h4>
                                <p className="text-xs text-ink-light">Minimum <strong>21 days notice</strong> required in writing.</p>
                            </div>
                            <div className="border border-navy/10 p-3 bg-white">
                                <h4 className="font-bold text-navy text-xs uppercase mb-1">Fixed Term Tenancy</h4>
                                <p className="text-xs text-ink-light">Cannot be ended early without mutual consent (break fees apply). Notice to end must be given between 90 and 21 days before expiry.</p>
                            </div>
                        </div>
                        <div className="bg-navy text-white p-3 text-sm font-mono">
                            <span className="text-teal font-bold uppercase mr-2">&gt; PROTOCOL:</span>
                            Email notice to <a href="mailto:mckenzie@propertypartner.co.nz" className="underline hover:text-teal truncate">mckenzie@propertypartner.co.nz</a>
                        </div>
                    </div>
                )
            },
            {
                id: "cleaning-standards",
                question: "Cleaning Standards",
                content: (
                    <div className="space-y-3">
                        <h4 className="font-bold text-navy text-sm uppercase">Routine Inspection (Quarterly)</h4>
                        <p className="text-xs text-ink-light">Reasonably clean and tidy. Lived-in condition acceptable. No deep clean required.</p>

                        <h4 className="font-bold text-teal text-sm uppercase mt-4 pt-4 border-t border-navy/10">Move-Out (Final)</h4>
                        <p className="text-xs text-ink-light">Professional standard. Oven, rangehood, windows, skirting boards, all surfaces spotless.</p>

                        <div className="grid grid-cols-2 gap-2 mt-2">
                            <Link to="/check-list" className="bg-navy text-white text-xs font-mono font-bold py-2 px-3 text-center hover:bg-teal hover:text-navy transition-colors">
                                View Checklist
                            </Link>
                        </div>
                    </div>
                )
            },
            {
                id: "contractors",
                question: "Preferred Contractors",
                content: (
                    <div className="space-y-3">
                        <p className="text-sm font-bold text-navy uppercase tracking-widest border-b border-navy/10 pb-2">For Move-Out Services</p>
                        <div className="grid gap-2 text-xs font-mono">
                            <div className="flex justify-between items-center p-2 border border-navy/10">
                                <span>Carpet Cleaning</span>
                                <span className="font-bold">Aakland (03 388 3314)</span>
                            </div>
                            <div className="flex justify-between items-center p-2 border border-navy/10">
                                <span>General Cleaning</span>
                                <span className="font-bold">Jim's (021 113 2037)</span>
                            </div>
                            <div className="flex justify-between items-center p-2 border border-navy/10">
                                <span>Painting</span>
                                <span className="font-bold">Amico (0210 859 9679)</span>
                            </div>
                            <div className="flex justify-between items-center p-2 border border-navy/10">
                                <span>Gardens</span>
                                <span className="font-bold">Dave (022 628 6047)</span>
                            </div>
                        </div>
                        <p className="text-[10px] text-ink-light italic text-center mt-2">Mention "Property Partner" for verified service.</p>
                    </div>
                )
            }
        ]
    },
    {
        id: "tenant-support",
        title: "Common Questions",
        icon: HelpCircle,
        items: [
            {
                id: "tenant-faq",
                question: "Service Clarifications",
                content: (
                    <div className="space-y-6">
                        <div className="border-l-2 border-teal pl-4">
                            <h4 className="font-bold text-navy text-sm mb-1">How can I apply for a property?</h4>
                            <p className="text-xs text-ink-light">You can apply online via our <Link to="/rental-application" className="underline hover:text-teal font-bold">Application Page</Link>. Ensure you have references ready.</p>
                        </div>

                        <div className="border-l-2 border-teal pl-4">
                            <h4 className="font-bold text-navy text-sm mb-1">How do I report maintenance issues?</h4>
                            <p className="text-xs text-ink-light">All non-urgent issues must be logged via the <Link to="/services/maintenance" className="underline hover:text-teal font-bold">Maintenance Request Portal</Link>. Include photos for faster approval.</p>
                        </div>

                        <div className="border-l-2 border-teal pl-4">
                            <h4 className="font-bold text-navy text-sm mb-1">Do I need professional carpet cleaning?</h4>
                            <p className="text-xs text-ink-light">Generally, yes, if directed in your tenancy agreement or if there are stains. We recommend Aakland Cleaning (03 388 3314).</p>
                        </div>
                        <p className="text-xs text-ink-light italic pt-4">Data extracted from Tenant Service Matrix.</p>
                    </div>
                )
            }
        ]
    }
];

// --- COMPONENT ---

const KnowledgeBase = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [activeSection, setActiveSection] = useState(LANDLORD_DATABASE[0].id);
    const [searchQuery, setSearchQuery] = useState("");
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Combine for search
    const ALL_DATA = [...LANDLORD_DATABASE, ...TENANT_DATABASE];

    // Logic: 
    // If Search is active -> Show all matching items from all sections.
    // If Search is inactive -> Show ONLY the active section (Tabbed View).

    const getRenderContent = () => {
        if (searchQuery.trim().length > 0) {
            // Search Mode: Filter everything
            return ALL_DATA.map(section => ({
                ...section,
                items: section.items.filter(item =>
                    item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    (typeof item.content === 'string' && item.content.toLowerCase().includes(searchQuery.toLowerCase()))
                )
            })).filter(section => section.items.length > 0);
        } else {
            // Standard Mode: Show active section only
            return ALL_DATA.filter(s => s.id === activeSection);
        }
    };

    const currentContent = getRenderContent();

    const handleNavClick = (id) => {
        setActiveSection(id);
        setSearchQuery(""); // Clear search on nav click to return to tab view
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="flex flex-col min-h-screen bg-wash font-sans selection:bg-teal selection:text-navy">
            <Helmet>
                <title>Central Knowledge Base | Property Partner Protocol</title>
                <meta name="description" content="Access full operational data: Landlord protocols, Tenant responsibilities, Pricing matrices, and Contractor contacts." />
            </Helmet>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <main className="flex-grow pt-24 h-full flex flex-col">

                {/* HERO HEADER */}
                <section className="bg-navy py-12 border-b-8 border-teal relative overflow-hidden shrink-0">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                            <div>
                                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block border border-teal/30 inline-block px-3 py-1 bg-teal/10">
                                    ACCESSING_DATABANK...
                                </span>
                                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-none">
                                    KNOWLEDGE BASE
                                </h1>
                            </div>

                            {/* SEARCH BAR */}
                            <div className="w-full md:w-96 relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-teal" />
                                <input
                                    type="text"
                                    placeholder="SEARCH PROTOCOLS..."
                                    className="w-full h-14 pl-12 pr-4 bg-navy-light border-2 border-white/20 text-white font-mono text-sm uppercase focus:border-teal focus:outline-none transition-colors placeholder-white/30"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* MAIN LAYOUT */}
                <div className="flex-grow container mx-auto px-4 md:px-6 py-8 md:py-12 relative">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                        {/* SIDEBAR NAVIGATION (DESKTOP) */}
                        <aside className="hidden lg:block w-72 shrink-0 sticky top-32 self-start overflow-y-auto max-h-[80vh] pr-2">
                            <div className="bg-white border-2 border-navy shadow-[4px_4px_0px_#0F172A] p-6">

                                {/* LANDLORD NAV */}
                                <div className="mb-8">
                                    <div className="font-mono text-xs font-bold text-navy uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-navy/10 pb-2">
                                        <Shield className="w-3 h-3 text-teal" /> Landlord DB
                                    </div>
                                    <nav className="space-y-1">
                                        {LANDLORD_DATABASE.map((section) => (
                                            <button
                                                key={section.id}
                                                onClick={() => handleNavClick(section.id)}
                                                className={`w-full flex items-center gap-3 p-2 text-xs font-bold uppercase tracking-tight transition-all border-l-2 text-left ${activeSection === section.id && !searchQuery
                                                    ? 'bg-navy text-white border-teal pl-3'
                                                    : 'text-navy/70 border-transparent hover:bg-wash hover:text-navy pl-2'
                                                    }`}
                                            >
                                                {section.title}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                {/* TENANT NAV */}
                                <div className="mb-8">
                                    <div className="font-mono text-xs font-bold text-navy uppercase tracking-widest mb-4 flex items-center gap-2 border-b border-navy/10 pb-2">
                                        <UserCheck className="w-3 h-3 text-teal" /> Tenant DB
                                    </div>
                                    <nav className="space-y-1">
                                        {TENANT_DATABASE.map((section) => (
                                            <button
                                                key={section.id}
                                                onClick={() => handleNavClick(section.id)}
                                                className={`w-full flex items-center gap-3 p-2 text-xs font-bold uppercase tracking-tight transition-all border-l-2 text-left ${activeSection === section.id && !searchQuery
                                                    ? 'bg-navy text-white border-teal pl-3'
                                                    : 'text-navy/70 border-transparent hover:bg-wash hover:text-navy pl-2'
                                                    }`}
                                            >
                                                {section.title}
                                            </button>
                                        ))}
                                    </nav>
                                </div>

                                <div className="pt-6 border-t-2 border-navy/10">
                                    <div className="font-mono text-xs font-bold text-navy/40 uppercase tracking-widest mb-4">Quick Links</div>
                                    <div className="space-y-2">
                                        <Link to="/contact" className="flex items-center gap-2 text-xs font-mono text-navy hover:text-teal font-bold group">
                                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Contact Support
                                        </Link>
                                        <a href="https://client.propertytree.com/login" target="_blank" className="flex items-center gap-2 text-xs font-mono text-navy hover:text-teal font-bold group">
                                            <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" /> Portal Login
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* MOBILE NAVIGATION TRIGGER */}
                        <div className="lg:hidden mb-6">
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="w-full bg-navy text-white p-4 font-bold uppercase tracking-widest flex justify-between items-center border-2 border-navy relative z-50"
                            >
                                <span className="flex items-center gap-2"><Menu className="w-5 h-5 text-teal" /> Navigate Database</span>
                                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                            </button>

                            {isMobileMenuOpen && (
                                <div className="bg-white border-2 border-t-0 border-navy p-4 absolute left-4 right-4 z-40 shadow-xl max-h-[60vh] overflow-y-auto">
                                    <div className="font-bold text-xs uppercase text-teal mb-2">Landlord Database</div>
                                    {LANDLORD_DATABASE.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => handleNavClick(section.id)}
                                            className="w-full text-left py-3 px-2 border-b border-navy/10 font-bold text-navy uppercase flex items-center gap-3"
                                        >
                                            <section.icon className="w-4 h-4 text-navy" />
                                            {section.title}
                                        </button>
                                    ))}
                                    <div className="font-bold text-xs uppercase text-teal mb-2 mt-6">Tenant Database</div>
                                    {TENANT_DATABASE.map((section) => (
                                        <button
                                            key={section.id}
                                            onClick={() => handleNavClick(section.id)}
                                            className="w-full text-left py-3 px-2 border-b border-navy/10 font-bold text-navy uppercase flex items-center gap-3"
                                        >
                                            <section.icon className="w-4 h-4 text-navy" />
                                            {section.title}
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* CONTENT AREA */}
                        <div className="flex-grow space-y-12 min-h-[60vh]">
                            {currentContent.map((section) => (
                                <section key={section.id} className="animate-fade-in-up">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className={`p-2 text-white shadow-hard aspect-square flex items-center justify-center border-2 border-navy ${LANDLORD_DATABASE.find(s => s.id === section.id) ? 'bg-navy' : 'bg-teal text-navy'}`}>
                                            <section.icon className={`w-8 h-8 ${LANDLORD_DATABASE.find(s => s.id === section.id) ? 'text-teal' : 'text-navy'}`} />
                                        </div>
                                        <div>
                                            <span className="font-mono text-xs font-bold text-navy/50 uppercase tracking-widest block mb-1">
                                                {LANDLORD_DATABASE.find(s => s.id === section.id) ? 'LANDLORD PROTOCOL' : 'TENANT PROTOCOL'}
                                            </span>
                                            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tighter leading-none">
                                                {section.title}
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {section.items.map((item) => (
                                            <div key={item.id} className="bg-white border-2 border-navy/10 hover:border-navy transition-all duration-300 group flex flex-col">
                                                <div className="bg-wash p-4 border-b border-navy/10 group-hover:bg-navy group-hover:text-white transition-colors">
                                                    <h3 className="font-bold font-mono text-sm uppercase tracking-wide flex items-center justify-between">
                                                        {item.question}
                                                        <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 text-teal transition-opacity transform group-hover:translate-x-1" />
                                                    </h3>
                                                </div>
                                                <div className="p-6 flex-grow">
                                                    {item.content}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            ))}

                            {currentContent.length === 0 && (
                                <div className="text-center py-20 border-2 border-dashed border-navy/20 bg-white">
                                    <Database className="w-12 h-12 text-navy/20 mx-auto mb-4" />
                                    <p className="font-mono text-ink-light font-bold">DATA_NOT_FOUND</p>
                                    <p className="text-sm text-navy mt-2">Adjust search parameters.</p>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default KnowledgeBase;
