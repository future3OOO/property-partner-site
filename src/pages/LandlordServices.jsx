import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  UserCheckIcon, DollarSignIcon, WrenchIcon, FileTextIcon, CameraIcon, HandshakeIcon, CloudIcon,
  ArrowLeftRightIcon, CheckIcon, ChevronDownIcon, PhoneIcon, MailIcon, ArrowRightIcon, ClockIcon, DivideIcon, LinkIcon, Calendar
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// --- VISUAL SYSTEM: "2026 INNOVATIVE" (MATCHING PRICING/INDEX) ---
// Tokens: Navy (#0F172A), Teal (#00D2C1), Wash (#F8FAFC)
// Micro-interactions: shadow-hard, border-2 border-navy

const Reveal = ({ children, delay = 0, width = "100%", center = false }) => (
  <div style={{ position: "relative", width, overflow: "hidden", display: center ? "flex" : "block", justifyContent: center ? "center" : "initial" }}>
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, margin: "-10%" }}
    >
      {children}
    </motion.div>
  </div>
);

const Tag = ({ children, className = "" }) => (
  <div className={`inline-flex items-center gap-3 mb-6 px-3 py-1 border-[1.5px] border-navy/10 bg-white shadow-[2px_2px_0px_#0F172A] ${className}`}>
    <div className="w-1.5 h-1.5 bg-teal rounded-full" />
    <span className="font-mono text-[10px] uppercase tracking-widest text-navy font-bold leading-none mt-[1px]">
      {children}
    </span>
  </div>
);

const Container = ({ children, className = "" }) => (
  <div className={`container mx-auto px-6 md:px-12 max-w-screen-2xl ${className}`}>
    {children}
  </div>
);

// OPTIMIZED SPACING: Reduced vertically on mobile (py-12) vs desktop (py-32)
const Section = ({ children, className = "bg-white", id }) => (
  <section id={id} className={`py-12 md:py-32 relative ${className}`}>
    {children}
  </section>
);

const Heading = ({ children, className = "" }) => (
  <h2 className={`text-4xl md:text-6xl lg:text-7xl font-black text-navy tracking-tighter leading-[0.9] ${className}`}>
    {children}
  </h2>
);

const SubHeading = ({ children, className = "" }) => (
  <h3 className={`text-2xl md:text-3xl font-black text-navy mb-4 tracking-tight ${className}`}>
    {children}
  </h3>
);

const BodyText = ({ children, className = "" }) => (
  <div className={`text-[0.95rem] md:text-lg leading-relaxed text-navy/80 font-medium ${className}`}>
    {children}
  </div>
);

// --- MODULES ---

const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById('core-services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 bg-wash overflow-hidden border-b-2 border-navy">
      <Helmet>
        <title>Landlord Services Christchurch | Property Partner</title>
        <meta name="description" content="Complete property management services for Christchurch landlords. Tenant finding, rent collection, maintenance coordination, and property inspections. 8% + GST flat rate." />
        <meta name="keywords" content="landlord services Christchurch, property management for landlords, tenant finding NZ, rent collection Canterbury" />
        <link rel="canonical" href="https://propertypartner.co.nz/landlord-services" />
        <meta property="og:title" content="Landlord Services Christchurch | Property Partner" />
        <meta property="og:description" content="Complete property management services for Christchurch landlords. Tenant finding, rent collection, maintenance coordination, and property inspections. 8% + GST flat rate." />
        <meta property="og:url" content="https://propertypartner.co.nz/landlord-services" />
      </Helmet>
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal center>
          <Tag>LANDLORD_SERVICES // V2.0</Tag>
        </Reveal>

        <Reveal delay={0.1} center>
          {/* OPTIMIZED TYPOGRAPHY: 5xl on mobile (prevents breaking), 11xl on desktop */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[11rem] font-black text-navy tracking-tighter mb-8 md:mb-10 leading-none md:leading-[0.85]">
            COMPLETE PROPERTY<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal/60">PARTNER</span>
          </h1>
        </Reveal>

        <Reveal delay={0.2} center>
          <div className="flex flex-col items-center">
            <p className="text-lg md:text-3xl font-bold text-navy max-w-sm md:max-w-3xl leading-tight mb-8 md:mb-12 text-balance">
              Full-spectrum property management engineered for hands-off ownership and optimized returns.
            </p>
            <div className="h-2 w-16 md:w-24 bg-teal shadow-[4px_4px_0px_#0F172A] mb-12 md:mb-20" />

            <motion.button
              onClick={scrollToContent}
              whileHover={{ y: 5 }}
              className="flex flex-col items-center gap-2 text-navy/40 hover:text-teal transition-colors group cursor-pointer"
            >
              <span className="font-mono text-[10px] uppercase tracking-widest font-bold">Scroll to Explore</span>
              <ChevronDownIcon className="w-6 h-6 animate-bounce" />
            </motion.button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

const ServiceModule = ({ number, title, icon: Icon, children, id_string }) => (
  // OPTIMIZED SPACING: Reduced py-12 on mobile
  <div className="group border-b border-navy/10 py-12 md:py-28 last:border-0 relative">
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">
      {/* Left Column: Header */}
      <div className="lg:col-span-4 lg:sticky lg:top-10 lg:self-start">
        <div className="flex items-center gap-6 mb-6 md:mb-8">
          <span className="font-mono text-4xl md:text-6xl font-black text-navy/5 select-none transition-colors group-hover:text-teal/20">{number}</span>
          <div className={`p-3 md:p-4 border-2 border-navy shadow-[4px_4px_0px_#0F172A] transition-all group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none ${id_string.includes("PRICING") ? 'bg-teal text-navy' : 'bg-white text-navy'}`}>
            <Icon className="w-6 h-6 md:w-8 md:h-8" />
          </div>
        </div>
        {/* OPTIMIZED HEADINGS: 3xl/4xl on mobile */}
        <h3 className="text-3xl md:text-5xl font-black text-navy uppercase tracking-tighter mb-4 md:mb-6 leading-[0.9]">{title}</h3>
        {id_string && (
          <div className="hidden lg:block border-l-2 border-teal pl-4 py-2 bg-teal/5 mt-8">
            {id_string.split('|').map((part, i) => (
              <div key={i} className="font-mono text-[10px] font-bold text-navy/60 uppercase tracking-widest mb-1">
                {part.trim()}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right Column: Content */}
      <div className="lg:col-span-8">
        {children}
        {/* Mobile ID String */}
        {id_string && (
          <div className="lg:hidden mt-8 pt-8 border-t border-navy/10">
            {id_string.split('|').map((part, i) => (
              <span key={i} className="inline-block mr-4 font-mono text-[10px] font-bold text-navy/60 uppercase tracking-widest mb-2">
                {part.trim()}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);

const CoreServices = () => (
  <Section id="core-services">
    <Container>
      <div className="mb-12 md:mb-24 flex justify-between items-end border-b-2 border-navy pb-4 md:pb-8">
        <div>
          <Tag>SYSTEM_MODULES</Tag>
          <Heading>CORE SERVICES</Heading>
        </div>
        <div className="hidden md:block text-right font-mono text-xs font-bold text-navy uppercase tracking-widest">
          Modules: 9<br />Status: Active
        </div>
      </div>

      {/* 01 - Tenant Selection */}
      <ServiceModule number="01" title="Tenant Selection" icon={UserCheckIcon} id_string="APPROVAL_CRITERIA: STRICT | DEFAULT_RATE: <2%">
        <SubHeading>Good management starts at application.</SubHeading>
        <BodyText className="mb-8 md:mb-10 text-base md:text-xl text-pretty">
          The primary component of a successful tenancy is selecting the right tenant from day one. We invest heavily in this phase because it determines everything that follows.
        </BodyText>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="bg-wash p-6 md:p-8 border-2 border-navy/5 hover:border-navy transition-colors">
            <h4 className="font-black text-navy uppercase text-sm mb-4 tracking-wide flex items-center gap-2">
              Marketing protocol
            </h4>
            {/* TEXT OPTIMIZATION: text-pretty ensures better line breaking */}
            <BodyText className="text-[0.9rem] md:text-sm text-pretty">
              Your property is listed on Trademe—which has a monopoly on the New Zealand rental market and accounts for roughly 90% of tenant enquiries. We also list on OneRoof, which is gaining traction as a secondary channel. Platforms like RealEstate.co.nz have become largely inactive for rental listings.
            </BodyText>
          </div>
          <div className="bg-wash p-6 md:p-8 border-2 border-navy/5 hover:border-navy transition-colors">
            <h4 className="font-black text-navy uppercase text-sm mb-4 tracking-wide flex items-center gap-2">
              Screening protocol
            </h4>
            <ul className="space-y-3 mb-6">
              {[
                "Previous landlord references verified (critical)",
                "Multi-bureau credit check",
                "Background database scan",
                "Employment and income verification"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-navy font-medium text-pretty">
                  <div className="w-1.5 h-1.5 bg-teal mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="text-[0.85rem] md:text-sm italic pl-4 border-l-4 border-teal bg-white p-4 shadow-sm text-pretty">
              <span className="font-bold text-teal block mb-1">Our Standard:</span>
              We won't approve an application unless the tenant has a solid previous tenancy reference, a clean background check, and a decent credit score. Those references must be verified—not just provided.
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-10 p-6 bg-navy text-white">
          <h4 className="font-mono text-teal uppercase text-xs mb-2 tracking-widest">The experience factor</h4>
          <p className="text-white/80 leading-relaxed text-sm md:text-base text-pretty">
            Part of selecting a good tenant is intuition. An experienced property manager has conducted thousands of viewings and interacted with tens of thousands of prospective tenants. Pattern recognition kicks in. We know what to look for—and what to avoid.
          </p>
        </div>
      </ServiceModule>

      {/* 02 - Transparent Pricing */}
      <ServiceModule number="02" title="Transparent Pricing" icon={DollarSignIcon} id_string="COMPARE_RATES: VIEW FULL BREAKDOWN">
        <div className="bg-navy text-white p-6 md:p-12 relative overflow-hidden shadow-[8px_8px_0px_#00D2C1]">
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem]" />

          <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h3 className="text-6xl md:text-8xl font-black mb-4 tracking-tighter text-white">8% <span className="text-3xl font-bold tracking-normal text-teal">+ GST</span></h3>
              <div className="font-mono text-sm uppercase tracking-widest text-teal mb-8">No exceptions. No extras.</div>
              <p className="text-lg text-white/80 leading-relaxed mb-8 font-medium text-balance">
                Our Complete Property Partner service operates on a flat rate calculated on rent collected—nothing else. No letting fees. No admin charges. No inspection fees. No statement fees.
              </p>

              {/* PRICING LINK ADDITION */}
              <Link to="/pricing">
                <Button className="bg-teal text-navy hover:bg-white hover:text-navy font-mono text-xs uppercase tracking-widest border-2 border-teal mb-6 w-full md:w-auto">
                  View Full Pricing Details <ArrowRightIcon className="ml-2 w-4 h-4" />
                </Button>
              </Link>

              <div className="p-4 border border-teal/30 bg-teal/10 text-teal italic text-sm text-pretty mt-4">
                "Other firms layer on charges landlords don't see coming. We built our model to eliminate that."
              </div>
            </div>

            <div className="bg-white text-navy p-6 md:p-8 border-4 border-teal shadow-hard">
              <div className="font-black text-navy uppercase tracking-wider mb-6 border-b-2 border-navy pb-4">What's included at 8%</div>
              <ul className="space-y-3">
                {[
                  "All advertising and marketing costs",
                  "Tenant sourcing and screening",
                  "In-going and quarterly inspections",
                  "Maintenance coordination",
                  "Arrears management",
                  "Tribunal representation",
                  "EOFY summary statements",
                  "Rates and insurance payments"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm font-bold">
                    <CheckIcon className="w-4 h-4 text-teal mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ServiceModule>

      {/* 03 - Rent Payments & Statements */}
      <ServiceModule number="03" title="Rent Payments & Statements" icon={Calendar} id_string="PAYMENT_CYCLE: WEEKLY | STATEMENTS: AUTOMATED">
        <SubHeading>Weekly payments. Faster cashflow.</SubHeading>
        <BodyText className="mb-8 md:mb-10 text-base md:text-xl text-pretty">
          Most property management firms pay landlords fortnightly or monthly. We pay weekly—because it's your money and you shouldn't have to wait for it.
        </BodyText>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <div className="bg-wash p-6 md:p-8 border-2 border-navy/5 hover:border-navy transition-colors">
            <h4 className="font-black text-navy uppercase text-sm mb-4 tracking-wide flex items-center gap-2">
              Payment schedule
            </h4>
            <BodyText className="text-sm text-balance mb-4">
              Landlord payments are processed every Monday evening and should be in your account by Tuesday. Each payment includes rent collected, less any invoices paid on your behalf (e.g., maintenance, rates, insurance).
            </BodyText>
            <div className="text-xs bg-white p-3 border-l-2 border-teal italic">
              <strong>Note:</strong> If your tenant pays rent fortnightly, your payments will also be fortnightly rather than weekly—aligned with when rent is actually received.
            </div>
          </div>

          <div className="bg-wash p-6 md:p-8 border-2 border-navy/5 hover:border-navy transition-colors">
            <h4 className="font-black text-navy uppercase text-sm mb-4 tracking-wide flex items-center gap-2">
              Weekly statements
            </h4>
            <p className="text-sm text-navy mb-4 font-medium">A statement is sent with every payment, showing:</p>
            <ul className="space-y-3">
              {[
                "Rent received",
                "Any invoices paid on your behalf",
                "Net amount deposited",
                "Copies of maintenance invoices (if applicable)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-navy font-bold">
                  <div className="w-1.5 h-1.5 bg-teal mt-1.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-navy text-white p-6 md:p-8 border-2 border-navy shadow-[4px_4px_0px_#00D2C1] mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="font-mono text-teal uppercase text-xs mb-2 tracking-widest font-bold">Portal Access</h4>
              <p className="text-white/80 leading-relaxed text-sm md:text-base max-w-xl">
                If you have an account through our landlord portal (Property Tree), you can access all statements, invoices, and financial records at any time.
              </p>
            </div>
            <a href="https://client.propertytree.com/login" target="_blank" rel="noopener noreferrer">
              <Button className="bg-teal text-navy hover:bg-white hover:text-navy font-mono text-xs uppercase tracking-widest border-2 border-teal min-w-[160px]">
                [ ACCESS PORTAL ]
              </Button>
            </a>
          </div>
        </div>

        <div className="border-t border-navy/10 pt-6">
          <h4 className="font-bold text-navy mb-2 uppercase text-sm">End of financial year</h4>
          <BodyText className="text-sm text-pretty">
            At the end of each financial year, we send you a summary statement showing all income and expenses for the year. Pass this directly to your accountant for simplified tax processing—no chasing paperwork.
          </BodyText>
          <div className="mt-4 font-mono text-[10px] font-bold text-navy/40 uppercase tracking-widest">
            &gt; STATEMENTS: WEEKLY | EOFY SUMMARY: INCLUDED
          </div>
        </div>
      </ServiceModule>

      {/* 04 - Maintenance */}
      <ServiceModule number="04" title="Maintenance" icon={WrenchIcon} id_string="SYSTEM: TAPI | NOTIFICATIONS: REAL-TIME">
        <SubHeading>Full visibility. Controlled approvals. Fast response.</SubHeading>
        <BodyText className="mb-8 md:mb-10 text-base md:text-xl text-pretty">
          Maintenance is managed through Tapi—a system that keeps you informed at every stage. When a tenant submits a maintenance request, you're notified. When a work order is dispatched, you're notified.
        </BodyText>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <div className="border-2 border-navy p-6 md:p-8 shadow-[4px_4px_0px_#0F172A] bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-teal text-navy p-2"><CheckIcon className="w-4 h-4" /></div>
              <h4 className="font-black text-navy uppercase text-sm tracking-wide">Approval protocol</h4>
            </div>
            <BodyText className="text-sm text-balance">
              For most jobs, you'll be sent an approval request before any work order is issued to a contractor. You stay in control of spend.
            </BodyText>
          </div>
          <div className="border-2 border-navy p-6 md:p-8 shadow-[4px_4px_0px_#0F172A] bg-white">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-navy text-white p-2"><ClockIcon className="w-4 h-4" /></div>
              <h4 className="font-black text-navy uppercase text-sm tracking-wide">Exception—urgent works</h4>
            </div>
            <BodyText className="text-sm text-balance">
              If a job requires immediate action (like plumbing leaks), we'll dispatch a contractor without waiting for approval. Delay causes more damage and higher costs.
            </BodyText>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-navy/10">
          <h4 className="font-bold text-navy mb-2">Contractor network</h4>
          <BodyText className="text-sm text-pretty">
            We work with multiple tradespeople in each field, selected based on the urgency and nature of the job. This gives us flexibility to respond quickly when needed and source competitive quotes when time allows.
          </BodyText>
        </div>
      </ServiceModule>

      {/* 05 - Inspections */}
      <ServiceModule number="05" title="Inspections" icon={FileTextIcon} id_string="SYSTEM: INSPECTION EXPRESS | CYCLE: 90 DAYS">
        <SubHeading>Documented oversight. Insurance compliance.</SubHeading>

        <div className="space-y-8 md:space-y-12">
          <div className="bg-wash p-6 md:p-8 border-l-4 border-navy">
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-xl font-black text-navy uppercase tracking-tight">In-going inspections</h4>
            </div>
            <div className="space-y-4">
              <BodyText className="text-pretty">
                Every tenancy starts with a comprehensive in-going inspection using both traditional photography and 360-degree imaging. This provides a complete baseline.
              </BodyText>
              <BodyText className="text-pretty">
                Tenants receive an interactive report to add comments. This report serves as the absolute benchmark for the out-going bond inspection.
              </BodyText>
              <BodyText className="font-bold text-navy border-t border-navy/10 pt-4 mt-4 text-pretty">
                This step is crucial. A thorough in-going condition report protects your interests when it comes time to assess bond claims. It cannot be overlooked.
              </BodyText>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-6">
              <h4 className="text-xl font-black text-navy uppercase tracking-tight">Quarterly inspections</h4>
              <div className="h-px flex-1 bg-navy/10" />
            </div>
            <BodyText className="mb-8 text-pretty">
              We inspect every property quarterly to maintain your insurance obligations. Following each inspection, both you and the tenant receive a detailed report with photos.
            </BodyText>

            <div className="border-2 border-navy p-6 md:p-8 bg-white shadow-sm">
              <div className="font-mono text-xs uppercase font-bold text-teal mb-4 tracking-widest border-b border-navy/10 pb-2">Report includes:</div>
              <ul className="grid sm:grid-cols-2 gap-4">
                {["Current property condition assessment", "Photo documentation of all rooms", "Immediate maintenance items flagged", "Recommended maintenance for budgeting", "Tenant compliance notes"].map((item, i) => (
                  <li key={i} className="text-sm font-bold text-navy flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-navy rounded-full mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </ServiceModule>

      {/* 06 - Professional Media */}
      <ServiceModule number="06" title="Professional Media" icon={CameraIcon} id_string="FORMAT: FLAMBIENT PHOTOGRAPHY + 360 CAPTURE">
        <SubHeading>Listings that outperform.</SubHeading>
        <BodyText className="mb-8 text-base md:text-xl text-pretty">
          First impressions matter. We photograph every property using professional-grade equipment and technique.
        </BodyText>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="group">
            <h4 className="font-black text-navy mb-4 text-xl group-hover:text-teal transition-colors">Flambient photography</h4>
            <BodyText className="text-sm mb-6 text-pretty">
              Each listing photo is a blend of 5–6 exposures shot with flash at different settings—the same technique used by professional real estate photographers. This produces clean, well-lit images.
            </BodyText>
            <Button variant="outline" className="border-2 border-navy text-navy hover:bg-navy hover:text-white rounded-none font-mono text-xs uppercase tracking-widest">
              View Examples <ArrowRightIcon className="ml-2 w-4 h-4" />
            </Button>
          </div>
          <div>
            <h4 className="font-black text-navy mb-4 text-xl">360 walkthroughs</h4>
            <BodyText className="text-sm mb-4 text-pretty">
              We also provide a 360-degree walkthrough. This gives prospective tenants—especially those from out of town—a complete first-person perspective, increasing the likelihood of commitment sight unseen.
            </BodyText>
          </div>
        </div>
        <div className="p-4 md:p-6 bg-teal text-navy font-black text-lg md:text-xl uppercase tracking-tight text-center">Quality media attracts quality tenants.</div>
      </ServiceModule>

      {/* 07 - Owner Operated */}
      <ServiceModule number="07" title="Owner Operated" icon={HandshakeIcon} id_string="CONTACT_PROTOCOL: DIRECT TO OWNERSHIP">
        <SubHeading>You deal with principals. Always.</SubHeading>
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <div className="flex-1">
            <BodyText className="mb-8 text-pretty">
              We're not a franchise. We're not a large chain with rotating staff. When you work with us, you're dealing directly with an owner of the business—someone with skin in the game.
            </BodyText>
            <div className="font-black text-navy text-xl uppercase border-l-4 border-teal pl-6 py-2">
              We work with you, not for someone else.
            </div>
          </div>

          <div className="bg-navy text-white p-6 md:p-8 shadow-[8px_8px_0px_#F8FAFC] border-2 border-navy flex-1 w-full">
            <h4 className="font-mono text-teal mb-6 text-sm uppercase tracking-widest font-bold">What this means:</h4>
            <ul className="space-y-4">
              {[
                "Decisions made by people accountable to you",
                "No explaining yourself to a new PM every six months",
                "Direct access to decision-makers",
                "Management philosophy aligned with ownership"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-white font-medium">
                  <div className="bg-teal p-1 rounded-full"><CheckIcon className="w-3 h-3 text-navy" /></div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ServiceModule>

      {/* 08 - Cloud Access */}
      <ServiceModule number="08" title="Cloud Access" icon={CloudIcon} id_string="ACCESS_PROTOCOL: ENCRYPTED | UPTIME: 99.9%">
        <SubHeading>Property documentation on demand.</SubHeading>
        <BodyText className="mb-8 text-pretty">
          Our management system runs on Property Tree—a cloud-based platform that gives you portal access to all documentation we create for your property: agreements, inspection reports, invoices, statements, and correspondence.
        </BodyText>

        <div className="bg-wash border-2 border-navy p-6 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-2 bg-navy text-white font-mono text-xs font-bold uppercase tracking-widest">Client Portal</div>
          <h4 className="font-black text-navy text-xl mb-8 uppercase tracking-tight">Portal capabilities:</h4>
          <div className="grid md:grid-cols-2 gap-4 relative z-10">
            {[
              "View all property documentation instantly",
              "Track rent payments and arrears",
              "Download statements and tax records",
              "Access inspection reports and photos"
            ].map((item, i) => (
              <div key={i} className="bg-white p-4 md:p-6 border border-navy/10 flex items-center gap-4 font-bold text-navy shadow-sm hover:shadow-md transition-shadow">
                <CloudIcon className="w-5 h-5 text-teal shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </ServiceModule>

      {/* 09 - Switching */}
      <ServiceModule number="09" title="Switching to Us" icon={ArrowLeftRightIcon} id_string="AVAILABILITY: WAITLIST ACTIVE">
        <SubHeading>We're selective—but we make it simple.</SubHeading>
        <BodyText className="mb-6 text-pretty">
          We cap the number of properties under management to maintain service quality, which means we typically operate a waiting list for new landlords.
        </BodyText>
        <div className="p-6 bg-teal/10 border border-teal text-navy font-medium italic mb-10 text-pretty">
          If you're looking to switch from your current property manager, we'll consider taking on your property—but only if you have a genuine reason for wanting to change. We're not interested in poaching for the sake of growth.
        </div>

        <div className="relative border-l-2 border-navy/20 pl-8 ml-4 space-y-8">
          {[
            { step: "STEP_01", text: "Email your existing PM to terminate your management agreement" },
            { step: "STEP_02", text: "Complete a new management agreement with us" },
            { step: "STEP_03", text: "We liaise with your current manager and existing tenants" }
          ].map((item, i) => (
            <div key={i} className="relative">
              <span className="absolute -left-[45px] top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-navy text-white font-mono text-xs flex items-center justify-center border-4 border-white font-bold">{i + 1}</span>
              <div className="bg-white p-6 border-2 border-navy shadow-[4px_4px_0px_#00D2C1]">
                <span className="font-black text-navy uppercase text-lg">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
        <BodyText className="text-sm mt-8 text-navy/60 text-center font-mono">
                    // We handle documentation transfer, tenant introductions, and system onboarding.
        </BodyText>
      </ServiceModule>
    </Container>
  </Section>
);

const OngoingSupport = () => (
  <section className="py-20 md:py-32 bg-navy text-white relative border-t-8 border-teal">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem]" />
    <Container className="relative z-10">
      <div className="flex flex-col lg:flex-row justify-between lg:items-end mb-16 md:mb-20 gap-10">
        <div>
          <Tag className="bg-teal border-teal text-navy shadow-none">LIFECYCLE_SERVICES</Tag>
          <Heading className="text-white mt-6">CONTINUOUS<br />OPTIMIZATION</Heading>
        </div>
        <p className="text-teal font-mono max-w-xl text-lg leading-relaxed border-l-2 border-teal pl-6">
          Property management doesn't stop at tenant placement. We actively manage your asset throughout the tenancy lifecycle.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { label: "Rental price reviews", freq: "Every 12 months" },
          { label: "Property inspections", freq: "Quarterly" },
          { label: "Rates/insurance payments", freq: "As scheduled" },
          { label: "EOFY summary statements", freq: "Annually" },
          { label: "Arrears follow-up", freq: "Automated + manual" },
          { label: "Lease renewals", freq: "As required" },
        ].map((item, i) => (
          <div key={i} className="p-8 border-2 border-white/10 hover:border-teal hover:bg-white/5 transition-all group">
            <div className="font-mono text-xs text-teal/50 group-hover:text-teal uppercase tracking-widest mb-4 transition-colors">{item.freq}</div>
            <div className="text-2xl font-black text-white">{item.label}</div>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-8 justify-between items-center mt-20 pt-8 border-t border-white/10">
        <span className="text-white/40 font-mono text-sm">All included. No additional fees.</span>
        <span className="text-teal font-mono text-sm uppercase tracking-widest font-bold border px-3 py-1 border-teal">SUPPORT_STATUS: ALWAYS ACTIVE</span>
      </div>
    </Container>
  </section>
);

const LandlordServices = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans selection:bg-teal selection:text-navy">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <HeroSection />
      <CoreServices />
      <OngoingSupport />

      <section className="py-32 bg-wash border-t-2 border-navy">
        <Container className="text-center">
          <Tag>INITIATE_SEQUENCE</Tag>
          <Heading className="mb-12">Ready to optimize your<br />property performance?</Heading>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button className="h-20 px-12 bg-navy text-white font-mono text-sm font-bold uppercase tracking-[0.2em] rounded-none hover:bg-teal hover:text-navy hover:shadow-[4px_4px_0px_#0F172A] transition-all w-full sm:w-auto border-2 border-navy">
              [ Get Started ]
            </Button>
            <Button variant="outline" className="h-20 px-12 border-2 border-navy text-navy bg-transparent font-mono text-sm font-bold uppercase tracking-[0.2em] rounded-none hover:bg-navy hover:text-white transition-all w-full sm:w-auto">
              [ Contact Us ]
            </Button>
          </div>
        </Container>
      </section>

      <Footer />
    </div>
  );
};

export default LandlordServices;