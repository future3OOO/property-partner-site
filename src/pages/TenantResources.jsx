import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Key, Package, ClipboardList, Sparkles, Bug, ArrowRight, CheckCircle, AlertCircle, Shield, MessageSquare, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ResourceCard = ({ icon: Icon, title, tag, desc, action, onClick }) => (
    <div onClick={onClick} className="bg-white border-2 border-navy p-8 flex flex-col justify-between group hover:shadow-hard-teal hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full cursor-pointer">
        <div className="relative z-10">
            <div className="flex justify-between items-start mb-6">
                <div className="w-14 h-14 bg-navy text-white flex items-center justify-center border-2 border-navy group-hover:bg-teal group-hover:text-navy group-hover:border-navy transition-colors">
                    <Icon className="w-7 h-7" />
                </div>
                <span className="font-mono text-[10px] font-bold text-teal uppercase tracking-widest bg-navy/5 px-2 py-1">{tag}</span>
            </div>
            <h3 className="text-2xl font-black text-navy mb-4 uppercase tracking-tighter">{title}</h3>
            <p className="font-mono text-xs text-ink mb-6 leading-relaxed border-l-2 border-teal/30 pl-4">{desc}</p>
        </div>

        <Button className="w-full h-12 bg-navy text-white font-mono text-xs font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy border-2 border-navy transition-all flex items-center justify-between px-6 mt-auto relative z-10">
            {action} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>

        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-teal/5 rounded-full blur-3xl group-hover:bg-teal/10 transition-colors pointer-events-none" />
    </div>
);

const ProtocolSection = ({ id, tag, title, children, status }) => (
    <section id={id} className="py-24 border-t-2 border-navy scroll-mt-24">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_3fr] gap-12">
                <div>
                    <div className="sticky top-32">
                        <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; {tag}</span>
                        <h2 className="text-4xl md:text-5xl font-black text-navy mb-8 tracking-tighter uppercase leading-none">{title}</h2>
                        {status && (
                            <div className="font-mono text-[10px] text-white bg-navy inline-block px-3 py-1 uppercase tracking-widest">
                                &gt; {status}
                            </div>
                        )}
                    </div>
                </div>
                <div className="prose prose-lg prose-headings:font-black prose-headings:text-navy prose-headings:uppercase prose-p:text-ink prose-p:font-medium prose-li:text-ink prose-li:font-mono prose-li:text-sm max-w-none">
                    {children}
                </div>
            </div>
        </div>
    </section>
);

const TenantResources = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-wash">
      <Helmet>
        <title>Tenant Resources | Property Partner Christchurch | Property Partner</title>
        <meta name="description" content="Helpful resources for tenants in Christchurch. Guides, forms, and information for renters managed by Property Partner." />
        <meta name="keywords" content="tenant resources Christchurch, renter guides NZ, tenant information Canterbury" />
        <link rel="canonical" href="https://propertypartner.co.nz/tenant-resources" />
        <meta property="og:title" content="Tenant Resources | Property Partner Christchurch | Property Partner" />
        <meta property="og:description" content="Helpful resources for tenants in Christchurch. Guides, forms, and information for renters managed by Property Partner." />
        <meta property="og:url" content="https://propertypartner.co.nz/tenant-resources" />
      </Helmet>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <main className="flex-grow pt-24">
                {/* HERO SECTION */}
                <section className="bg-navy text-white py-20 md:py-32 border-b-8 border-teal relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-6 block">&gt; TENANT_KNOWLEDGE_BASE</span>
                            <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
                                TENANT <br /> RESOURCES
                            </h1>
                            <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-mono border-l-4 border-teal pl-8 leading-relaxed">
                                Guides, checklists, and protocols for a smooth tenancy from move-in to move-out.
                            </p>
                        </div>
                    </div>
                </section>

                {/* RESOURCE CARDS */}
                <section className="py-24 -mt-16 relative z-20">
                    <div className="container mx-auto px-6">
                        <span className="font-mono text-xs font-bold text-navy bg-white px-2 py-1 mb-4 inline-block border-2 border-navy uppercase tracking-widest mb-12">&gt; QUICK_ACCESS</span>
                        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                            <ResourceCard
                                icon={Key}
                                title="Moving In"
                                tag="START"
                                desc="Everything you need to know before collecting keys and settling into your new home."
                                action="View Guide"
                                onClick={() => scrollToSection('moving-in')}
                            />
                            <ResourceCard
                                icon={Package}
                                title="Moving Out"
                                tag="END"
                                desc="Step-by-step handover protocol for ending your tenancy and securing your full bond refund."
                                action="View Guide"
                                onClick={() => scrollToSection('moving-out')}
                            />
                            <ResourceCard
                                icon={ClipboardList}
                                title="Checklist"
                                tag="tasks"
                                desc="Interactive checklist covering preparation, cleaning, repairs, and final handover tasks."
                                action="View Checklist"
                                onClick={() => scrollToSection('checklist')}
                            />
                            <ResourceCard
                                icon={Sparkles}
                                title="Cleaning"
                                tag="guide"
                                desc="Key areas to focus on during routine inspections to keep your tenancy on track."
                                action="View Guide"
                                onClick={() => scrollToSection('cleaning')}
                            />
                            <ResourceCard
                                icon={Bug}
                                title="Pests"
                                tag="info"
                                desc="How to handle pest issues and understand your responsibilities."
                                action="View Guide"
                                onClick={() => scrollToSection('pests')}
                            />
                        </div>
                    </div>
                </section>

                {/* MOVING IN PROTOCOL */}
                <ProtocolSection
                    id="moving-in"
                    tag="PROTOCOL_001"
                    title="Moving In"
                    status="STATUS: TENANCY INITIATED"
                >
                    <p className="lead">Starting your tenancy on the right foot sets the tone for everything that follows.</p>

                    <h3 className="flex items-center gap-3 text-xl bg-navy text-white p-3 mt-8 mb-4">
                        Before you move in:
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li>Sign your tenancy agreement via tenant.co.nz</li>
                        <li>Pay your bond and first week's rent ASAP (must be cleared before key release)</li>
                        <li>
                            Set up electricity, gas, and internet<br />
                            <span className="text-xs text-ink-light font-bold text-teal block mt-1">
                                *If you opted for assistance, Moving Hub will contact you to arrange this.
                            </span>
                        </li>
                        <li>Set up your automatic rent payment for ongoing rent (see details below)</li>
                        <li>Arranging contents insurance is recommended for your personal belongings</li>
                    </ul>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-4">Automatic rent payment setup:</h3>
                    <p className="mb-4">
                        Your first week's rent is included in your move-in costs, so that's already sorted. What you need to set up now is the automatic payment for your ongoing rent—starting from your next rent payment date.
                    </p>
                    <p className="mb-8 font-bold text-navy">
                        This is something you set up yourself through your internet banking. It is not something we control.
                    </p>

                    <div className="bg-wash border border-navy p-6 mb-8">
                        <h4 className="font-bold text-navy uppercase text-sm mb-2">When is my next rent payment due?</h4>
                        <p className="text-sm">
                            Your next rent payment date is specified on page 1 of your tenancy agreement under <strong>Next rent payment date</strong>. This is typically one week after your tenancy start date (if paying weekly).
                        </p>
                    </div>

                    <h4 className="font-bold text-navy uppercase text-sm mb-4">How to set up:</h4>
                    <ol className="list-decimal pl-6 space-y-2 mb-8 font-mono text-sm">
                        <li>Log into your internet banking</li>
                        <li>Create a new automatic payment</li>
                        <li>Set the start date as your <strong>Next rent payment date</strong></li>
                        <li>Set the frequency to match your payment schedule (weekly / fortnightly)</li>
                        <li>Enter the payment details exactly as shown below</li>
                    </ol>

                    <div className="bg-navy text-white p-6 mb-8">
                        <h4 className="font-mono text-teal text-xs uppercase tracking-widest mb-4 border-b border-white/20 pb-2">Payment Details</h4>
                        <div className="grid gap-4 font-mono text-sm">
                            <div className="flex flex-col md:flex-row justify-between border-b border-white/10 pb-2">
                                <span className="text-white/60 uppercase text-xs">Account Name</span>
                                <span className="font-bold">Strathmore Property Ltd</span>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between border-b border-white/10 pb-2">
                                <span className="text-white/60 uppercase text-xs">Account Number</span>
                                <span className="font-bold text-teal text-lg">06-0807-0355603-00</span>
                            </div>
                            <div className="flex flex-col md:flex-row justify-between">
                                <span className="text-white/60 uppercase text-xs">Reference</span>
                                <span className="font-bold text-white bg-teal/20 px-2">TXXXXXX (refer to page 1 of your agreement)</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 bg-teal/10 border border-teal p-4 mb-12">
                        <AlertCircle className="w-5 h-5 text-teal shrink-0 mt-0.5" />
                        <p className="text-xs text-navy"><strong>Important:</strong> You must include your unique reference number (e.g., T123456) in the reference field. This allows us to match your payments to your tenancy. Payments without the correct reference may not be allocated correctly.</p>
                    </div>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-2">Key collection:</h3>
                    <p className="mb-8">Details for key collection will be sent out at 7am on the morning of your move-in date, along with the in-going condition report.</p>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-2">In-going inspection:</h3>
                    <p className="mb-4">Every tenancy begins with a comprehensive in-going inspection conducted using both traditional photography and 360-degree imaging. This creates a detailed record of the property's condition before you move in.</p>
                    <div className="bg-wash border border-navy p-6 mb-8">
                        <p className="text-sm">You'll receive an interactive inspection report to review. You have a set number of days to add any comments or note anything we may have missed. This report becomes the benchmark for your bond inspection when you move out—so review it carefully.</p>
                    </div>

                    <h3 className="flex items-center gap-3 text-xl bg-navy text-white p-3 mb-4">
                        First few days:
                    </h3>
                    <p className="mb-4">Use this time to test everything and ensure the property is up to standard.</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li>Test all appliances and fixtures</li>
                        <li>Check hot water availability</li>
                        <li>Ensure all keys and remotes work correctly</li>
                        <li>Locate the meter box, fuse box, and hot water cylinder</li>
                        <li>Familiarise yourself with rubbish and recycling collection days</li>
                    </ul>

                    <p className="font-bold text-navy mb-8">
                        If you notice any issues, report them immediately via our <Link to="/services/maintenance" className="text-teal underline">maintenance page</Link>.
                    </p>

                    <span className="font-mono text-[10px] font-bold text-teal uppercase tracking-widest bg-navy px-2 py-1">
                        &gt; RENT PAYMENT: AUTOMATIC | REFERENCE: REQUIRED
                    </span>


                </ProtocolSection>

                {/* MOVING OUT PROTOCOL */}
                <ProtocolSection
                    id="moving-out"
                    tag="PROTOCOL_002"
                    title="Moving Out"
                    status="STATUS: TENANCY TERMINATED"
                >
                    <p className="lead border-l-4 border-teal pl-6 py-2 font-bold text-navy">
                        Adherence to the move-out protocol is essential for a compliant tenancy verification and efficient bond refund.
                    </p>

                    <div className="space-y-8 mt-8">
                        <div className="bg-white border-l-4 border-navy pl-6 py-2">
                            <h3 className="text-xl font-bold mb-2">Phase 01 — Preparation & Logistics (2–3 weeks before)</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Walk through the property to identify any damage beyond fair wear and tear</li>
                                <li>Remove all picture hooks, mounts, and temporary fixings—if plastering or touch-up painting is needed, do it early</li>
                                <li>Book professional services (carpet cleaners, gardeners, painters) well in advance to secure your dates</li>
                                <li>Contact your power provider to schedule a final meter reading—ask to close your account only, do not disconnect the supply</li>
                            </ul>
                        </div>

                        <div className="bg-white border-l-4 border-teal pl-6 py-2">
                            <h3 className="text-xl font-bold mb-2">Phase 02 — Clear & Restore (moving week)</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Remove all furniture, personal belongings, and rubbish</li>
                                <li>Ensure council bins are emptied and cleaned</li>
                                <li>Mow lawns, weed garden beds, and clear driveways and pathways</li>
                                <li>Complete all cleaning tasks from the move-out checklist, or oversee your hired professionals</li>
                            </ul>
                        </div>

                        <div className="bg-white border-l-4 border-navy pl-6 py-2">
                            <h3 className="text-xl font-bold mb-2">Phase 03 — Handover Day</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Do a final self-walkthrough: check every room, cupboard, drawer, and garage</li>
                                <li>Text or email your property manager to confirm you have vacated</li>
                                <li>Return all keys, remotes, and swipe cards as instructed</li>
                            </ul>
                        </div>
                    </div>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mt-8 mb-2">Arranging the final inspection:</h3>
                    <p className="mb-4">Email your property manager to arrange a time. If we don't hear from you, our standard practice is to conduct the inspection on the business day following your tenancy end date. You do not need to be present—any issues will be documented and communicated to you immediately via email.</p>

                    <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 mb-8">
                        <AlertCircle className="w-6 h-6 text-red-600 shrink-0" />
                        <p className="text-sm text-red-800"><strong>Important:</strong> Once you've handed over the keys, you won't be able to re-enter. If anything is left unfinished, we'll arrange contractors to complete it and the cost will come from your bond.</p>
                    </div>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-2">Bond refund process:</h3>
                    <p className="mb-8">All tenants listed on the bond record need to sign the bond refund form. This will be emailed to you for digital signature after the final inspection is completed and any issues have been agreed upon or resolved. Tenancy Services refunds may take up to 10 working days.</p>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-4">Recommended contractors:</h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-8">
                        <div className="border border-navy/20 p-4 hover:border-teal transition-colors">
                            <h4 className="font-bold text-navy uppercase text-sm">Carpet Cleaning</h4>
                            <p className="text-sm mt-1">Aakland Commercial Cleaning</p>
                            <p className="font-mono text-xs text-teal mt-1">03 388 3314</p>
                        </div>
                        <div className="border border-navy/20 p-4 hover:border-teal transition-colors">
                            <h4 className="font-bold text-navy uppercase text-sm">General & Deep Cleaning</h4>
                            <p className="text-sm mt-1">Jim's Cleaning</p>
                            <p className="font-mono text-xs text-teal mt-1">021 113 2037</p>
                        </div>
                        <div className="border border-navy/20 p-4 hover:border-teal transition-colors">
                            <h4 className="font-bold text-navy uppercase text-sm">Painting & Plastering</h4>
                            <p className="text-sm mt-1">Amico Painters</p>
                            <p className="font-mono text-xs text-teal mt-1">0210 859 9679</p>
                        </div>
                        <div className="border border-navy/20 p-4 hover:border-teal transition-colors">
                            <h4 className="font-bold text-navy uppercase text-sm">Garden Maintenance</h4>
                            <p className="text-sm mt-1">Dave — Green Fingers</p>
                            <p className="font-mono text-xs text-teal mt-1">022 628 6047</p>
                        </div>
                    </div>

                    <Button className="bg-navy text-white font-mono uppercase tracking-widest text-sm h-14 px-8 rounded-none w-full md:w-auto">
                        [ View Full Handover Protocol ]
                    </Button>
                </ProtocolSection>

                {/* MOVE-OUT CHECKLIST */}
                <section id="checklist" className="py-24 bg-navy text-white scroll-mt-24 border-t-8 border-teal relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <ClipboardList className="w-96 h-96" />
                    </div>
                    <div className="container mx-auto px-6 relative z-10">
                        <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; CHECKLIST_001</span>
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter uppercase leading-none">MOVE-OUT CHECKLIST</h2>
                        <p className="text-white/80 max-w-2xl mb-12 text-lg">
                            Use our <Link to="/check-list" className="text-teal underline font-bold">full interactive checklist</Link> to track your progress and ensure nothing is missed before your final inspection.
                        </p>

                        <div className="grid md:grid-cols-2 gap-x-12 gap-y-12">
                            <div>
                                <h3 className="text-teal font-black uppercase text-xl mb-6 flex items-center gap-2 border-b border-teal/30 pb-2">
                                    <span className="text-white">01.</span> Preparation & Damage Control
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Plan ahead—dedicate 1–2 full days for deep cleaning after your belongings are cleared out",
                                        "Inspect the property for any damage or maintenance issues and report them before you leave",
                                        "Consider hiring professionals for cleaning and painting to ensure quality and avoid bond deductions"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 group cursor-pointer hover:bg-white/5 p-2 transition-colors">
                                            <div className="w-5 h-5 border-2 border-teal rounded-none flex items-center justify-center shrink-0 mt-1">
                                                <div className="w-2.5 h-2.5 bg-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="font-mono text-sm text-white/90 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-teal font-black uppercase text-xl mb-6 flex items-center gap-2 border-b border-teal/30 pb-2">
                                    <span className="text-white">02.</span> Cleaning Essentials
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Kitchen: Thoroughly clean oven, stovetop, and rangehood filters. All surfaces, cupboards, and drawers spotless",
                                        "Bathrooms: Remove soap scum, mineral buildup, and residue. Clear all drains of hair and debris",
                                        "Walls & Ceilings: Vacuum cobwebs, clean marks with sugar soap. Engage a professional painter for anything beyond scuff marks",
                                        "Floors & Carpets: Vacuum and wash all hard floors thoroughly. Carpets must be clean and stain-free",
                                        "Odours: All cooking, hygiene, and pet odours must be fully removed"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 group cursor-pointer hover:bg-white/5 p-2 transition-colors">
                                            <div className="w-5 h-5 border-2 border-teal rounded-none flex items-center justify-center shrink-0 mt-1">
                                                <div className="w-2.5 h-2.5 bg-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="font-mono text-sm text-white/90 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-teal font-black uppercase text-xl mb-6 flex items-center gap-2 border-b border-teal/30 pb-2">
                                    <span className="text-white">03.</span> Outdoor & Finishing Touches
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "Mow lawns, trim edges, weed gardens, and remove all garden waste (if applicable)",
                                        "Clean garage and driveway—remove any new stains",
                                        "Clean windows inside and out, including frames and tracks",
                                        "Wipe down skirting boards, doors, and door frames",
                                        "Cold wash curtains if dirty or showing mould/pet hair. Clean all blinds"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 group cursor-pointer hover:bg-white/5 p-2 transition-colors">
                                            <div className="w-5 h-5 border-2 border-teal rounded-none flex items-center justify-center shrink-0 mt-1">
                                                <div className="w-2.5 h-2.5 bg-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="font-mono text-sm text-white/90 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-teal font-black uppercase text-xl mb-6 flex items-center gap-2 border-b border-teal/30 pb-2">
                                    <span className="text-white">04.</span> Final Checks
                                </h3>
                                <ul className="space-y-4">
                                    {[
                                        "All light fixtures working—replace any blown bulbs",
                                        "All chattels and furnishings listed in your agreement present and in good condition",
                                        "Whiteware cleaned—run dishwasher on empty cycle, clean filters",
                                        "Heat pump filters cleaned, vents dusted",
                                        "All rubbish removed, council bins empty",
                                        "All keys and remotes returned"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 group cursor-pointer hover:bg-white/5 p-2 transition-colors">
                                            <div className="w-5 h-5 border-2 border-teal rounded-none flex items-center justify-center shrink-0 mt-1">
                                                <div className="w-2.5 h-2.5 bg-teal opacity-0 group-hover:opacity-100 transition-opacity" />
                                            </div>
                                            <span className="font-mono text-sm text-white/90 leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        </div>

                        <div className="mt-16 bg-white/5 p-8 border border-white/10">
                            <h4 className="font-black text-teal uppercase mb-4">PRO TIPS:</h4>
                            <div className="grid md:grid-cols-3 gap-6 font-mono text-sm">
                                <div className="flex items-center gap-3">
                                    <ArrowRight className="text-teal w-4 h-4" /> Work top to bottom, room by room
                                </div>
                                <div className="flex items-center gap-3">
                                    <ArrowRight className="text-teal w-4 h-4" /> Take photos of your completed work
                                </div>
                                <div className="flex items-center gap-3">
                                    <ArrowRight className="text-teal w-4 h-4" /> Do your own walkthrough before the official inspection
                                </div>
                            </div>
                        </div>

                        <div className="font-mono text-[10px] text-navy bg-teal inline-block px-3 py-1 uppercase tracking-widest mt-12 font-bold">
                            &gt; COMPLETION: REQUIRED BEFORE FINAL INSPECTION
                        </div>
                    </div>
                </section>

                {/* CLEANING GUIDELINES */}
                <ProtocolSection
                    id="cleaning"
                    tag="PROTOCOL_003"
                    title="Cleaning Guidelines"
                    status="STANDARD: REASONABLE MAINTENANCE"
                >
                    <p className="lead">Routine inspections are conducted quarterly to ensure the property is being maintained to a reasonable standard. Because the property is being lived in, the expectations are more lenient than at move-out—we're not expecting a deep clean, just evidence that the home is being looked after.</p>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mt-8 mb-6">Key areas we focus on:</h3>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h4 className="font-black text-navy uppercase text-lg mb-3">Kitchen</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Oven cleaned and free of built-up grease and food residue</li>
                                <li>Cooktop wiped down and free of spills and grime</li>
                                <li>Rangehood and filters reasonably clean</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black text-navy uppercase text-lg mb-3">Bathrooms</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Shower tray, lining, and glass free of soap scum and mould build-up</li>
                                <li>Toilet clean</li>
                                <li>Vanity and sink areas tidy</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black text-navy uppercase text-lg mb-3">Outdoor areas</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Lawns mowed</li>
                                <li>Gardens weeded</li>
                                <li>Paths and driveways reasonably clear</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-black text-navy uppercase text-lg mb-3">General</h4>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>Property tidy and liveable</li>
                                <li>No excessive clutter or rubbish build-up</li>
                                <li>Ventilation adequate to prevent moisture and mould issues</li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-wash p-6 border-l-4 border-navy mb-8">
                        <h4 className="font-bold text-navy uppercase text-sm mb-2">What we're not expecting:</h4>
                        <p className="text-sm">Routine inspections don't require professional cleaning, carpet cleaning, or the kind of comprehensive deep clean you'd do at move-out. We understand the property is your home—we just want to see it's being cared for.</p>
                    </div>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-2">Why it matters:</h3>
                    <p className="mb-6">Staying on top of these key areas during your tenancy prevents issues from becoming bigger problems. Built-up grease in ovens, mould in showers, and overgrown lawns are much harder (and more expensive) to address if left until move-out.</p>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-2">Tips:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Wipe down the oven and cooktop regularly after use</li>
                        <li>Squeegee shower glass after each use to prevent build-up</li>
                        <li>Run the rangehood when cooking to reduce grease accumulation</li>
                        <li>Ventilate bathrooms to reduce moisture and mould</li>
                        <li>Keep on top of lawns and gardens throughout the year</li>
                    </ul>
                </ProtocolSection>

                {/* PESTS & VERMIN */}
                <ProtocolSection
                    id="pests"
                    tag="PROTOCOL_004"
                    title="Pests & Vermin"
                    status="RESPONSE: REPORT PROMPTLY | DIY FIRST FOR MINOR ISSUES"
                >
                    <p className="lead border-l-4 border-teal pl-6 py-2 font-bold text-navy">
                        Pest issues can arise in any property—it's a normal part of living in New Zealand.
                    </p>
                    <p className="text-lg mt-4 mb-4">
                        During summer you might see ants, and at other times of the year the odd mouse or spider may find its way inside.
                        Most of the time, DIY treatments are effective solutions for these common issues.
                        Understanding your responsibilities helps ensure problems are dealt with quickly when they do occur.
                    </p>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mt-8 mb-4">The first 30 days:</h3>
                    <p className="mb-4">
                        The landlord will ensure the property is free from fleas, rats, mice, cockroaches, ants, and flies at the start of your tenancy.
                    </p>
                    <div className="bg-white border-l-4 border-navy pl-6 py-4 mb-6">
                        <p className="font-bold text-navy mb-2">If you notice any vermin within the first 30 days of taking possession:</p>
                        <p>You must contact us in writing immediately. After this 30-day period, liability for pest control generally transfers to the tenant.</p>
                    </div>

                    <h4 className="font-black text-navy uppercase text-sm mb-2">Shared liability exception:</h4>
                    <p className="mb-8 text-sm">
                        If you can demonstrate that you've taken all reasonable steps to maintain cleanliness and the presence of vermin was beyond your control
                        (e.g., structural issues, neighbouring properties), then liability for treatment may be shared between landlord and tenant.
                    </p>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-4">Landlord responsibilities:</h3>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li>Ensuring the property is reasonably free of pests at the start of the tenancy</li>
                        <li>Addressing pest problems caused by structural issues (gaps in walls, damaged seals, subfloor access points)</li>
                        <li>Treating infestations that are clearly beyond the tenant's control</li>
                    </ul>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-4">Tenant responsibilities:</h3>
                    <p className="mb-4">During the tenancy, you are responsible for keeping the property clean and tidy in a way that doesn't attract pests. This includes:</p>
                    <ul className="list-disc pl-6 space-y-2 mb-8">
                        <li>Storing food in sealed containers</li>
                        <li>Disposing of rubbish regularly</li>
                        <li>Keeping kitchen and dining areas clean</li>
                        <li>Not leaving pet food out overnight</li>
                        <li>Reporting any pest issues promptly</li>
                        <li>Taking reasonable steps to address minor pest issues (DIY treatments)</li>
                    </ul>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-6">Typical responsibility by pest type:</h3>
                    <div className="overflow-x-auto mb-12">
                        <table className="w-full text-left text-sm font-mono border-collapse border border-navy">
                            <thead className="bg-navy text-white">
                                <tr>
                                    <th className="p-3 border border-navy w-1/3">Pest</th>
                                    <th className="p-3 border border-navy">Typical Responsibility</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border border-navy/20"><td className="p-3 font-bold">Fleas (no pets)</td><td className="p-3">Landlord</td></tr>
                                <tr className="bg-wash border border-navy/20"><td className="p-3 font-bold">Fleas (with pets)</td><td className="p-3">Tenant</td></tr>
                                <tr className="border border-navy/20"><td className="p-3 font-bold">Cockroaches</td><td className="p-3">Depends on cause</td></tr>
                                <tr className="bg-wash border border-navy/20"><td className="p-3 font-bold">Ants</td><td className="p-3">Tenant (common/seasonal)</td></tr>
                                <tr className="border border-navy/20"><td className="p-3 font-bold">Rodents (mice, rats)</td><td className="p-3">Often landlord if structural access points</td></tr>
                                <tr className="bg-wash border border-navy/20"><td className="p-3 font-bold">Wasps / bees (nests)</td><td className="p-3">Landlord</td></tr>
                                <tr className="border border-navy/20"><td className="p-3 font-bold">Spiders</td><td className="p-3">Tenant (general maintenance)</td></tr>
                                <tr className="bg-wash border border-navy/20"><td className="p-3 font-bold">Bed bugs</td><td className="p-3">Depends on cause</td></tr>
                            </tbody>
                        </table>
                    </div>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-4">DIY treatments that usually work:</h3>
                    <p className="mb-6">For common, minor pest issues, store-bought treatments are often effective:</p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white border border-navy/20 p-4">
                            <h4 className="font-bold text-navy uppercase text-sm mb-2">Ants</h4>
                            <p className="text-sm">Ant bait stations or surface spray around entry points</p>
                        </div>
                        <div className="bg-white border border-navy/20 p-4">
                            <h4 className="font-bold text-navy uppercase text-sm mb-2">Spiders</h4>
                            <p className="text-sm">Surface spray around windows, doors, and corners</p>
                        </div>
                        <div className="bg-white border border-navy/20 p-4">
                            <h4 className="font-bold text-navy uppercase text-sm mb-2">Flies</h4>
                            <p className="text-sm">Fly spray, keeping bins sealed, and removing food waste promptly</p>
                        </div>
                        <div className="bg-white border border-navy/20 p-4">
                            <h4 className="font-bold text-navy uppercase text-sm mb-2">Mice (occasional)</h4>
                            <p className="text-sm">Snap traps or bait stations from the supermarket</p>
                        </div>
                    </div>
                    <p className="mb-12 font-bold text-navy text-sm bg-wash p-4 border border-navy">
                        If DIY treatments don't resolve the issue, or if you're dealing with a more significant infestation, report it via our maintenance page and we'll assess next steps.
                    </p>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-4">How to report a pest issue:</h3>
                    <p className="mb-4">
                        If you notice pests in the property that require professional treatment or landlord involvement, report it via our <Link to="/services/maintenance" className="text-teal underline font-bold">maintenance page</Link>. Include:
                    </p>
                    <ul className="list-disc pl-6 space-y-1 mb-6">
                        <li>The type of pest (if known)</li>
                        <li>Where you've seen them</li>
                        <li>How long the issue has been present</li>
                        <li>What DIY treatments you've tried (if any)</li>
                        <li>Any relevant photos</li>
                    </ul>
                    <p className="mb-8">We'll assess the situation and advise on next steps. If responsibility falls to you, we'll let you know before any costs are incurred.</p>

                    <h3 className="text-xl font-bold border-l-4 border-teal pl-4 mb-4">Prevention tips:</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Seal gaps around doors and windows where possible</li>
                        <li>Don't leave food scraps in the sink or on benches</li>
                        <li>Empty bins regularly and keep outdoor areas tidy</li>
                        <li>Trim vegetation away from the house</li>
                        <li>Clean up fallen fruit from trees (if applicable)</li>
                        <li>Report any cracks, holes, or structural gaps that could allow pest entry</li>
                    </ul>
                </ProtocolSection>

                {/* CTA SECTION */}
                <section className="bg-navy text-white py-16">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                            <div>
                                <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal mb-2 block">&gt; SUPPORT_ACCESS</span>
                                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Have a question not covered here?</h2>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                                <Link to="/contact">
                                    <Button className="h-16 px-8 bg-transparent text-white font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-white hover:text-navy border-2 border-white/20 hover:border-white transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                                        <Phone className="w-5 h-5" /> [ CONTACT US ]
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default TenantResources;
