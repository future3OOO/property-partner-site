import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Award, Users, ShieldCheck, ArrowRight, UserCheck, Handshake, HeartHandshake, Rocket, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TimelineEvent = ({ year, title, desc, tag, meta }) => (
  <div className="relative pl-8 pb-12 border-l-2 border-navy last:border-0 last:pb-0">
    <div className="absolute top-0 left-[-9px] w-4 h-4 bg-teal border-2 border-navy" />
    <div className="flex items-center gap-3 mb-2">
      <div className="font-mono text-xs uppercase tracking-widest text-teal font-bold">{year}</div>
      <div className="font-mono text-[10px] text-navy/40 border border-navy/20 px-1">{tag}</div>
    </div>
    <h3 className="text-xl font-black text-navy uppercase tracking-tight mb-2">{title}</h3>
    <div className="font-mono text-sm text-ink-light leading-relaxed mb-4 text-pretty whitespace-pre-line">{desc}</div>
    {meta && (
      <div className="text-[10px] font-mono font-bold text-teal uppercase tracking-widest border-l-2 border-teal pl-2">
        {meta}
      </div>
    )}
  </div>
);

const PrincipleCard = ({ icon: Icon, number, title, desc }) => (
  <div className="bg-wash border-2 border-navy p-8 group hover:bg-navy hover:text-white transition-all duration-300 relative overflow-hidden">
    <div className="absolute top-0 right-0 p-4 font-mono text-6xl font-black text-navy/5 group-hover:text-white/5 pointer-events-none select-none">
      {number}
    </div>
    <div className="relative z-10">
      <Icon className="w-10 h-10 text-teal mb-6" />
      <h3 className="font-black text-xl uppercase mb-4 tracking-tight">{title}</h3>
      <p className="font-mono text-sm leading-relaxed text-ink-light group-hover:text-white/70 text-pretty">{desc}</p>
    </div>
  </div>
);

const About = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-wash font-sans selection:bg-teal selection:text-navy">
      <Helmet>
        <title>About Us | Property Partner Christchurch | Property Partner</title>
        <meta name="description" content="Learn about Property Partner, Christchurch trusted property management company. Our team, values, and commitment to landlords and tenants across Canterbury." />
        <meta name="keywords" content="about Property Partner, Christchurch property managers, Canterbury property management team" />
        <link rel="canonical" href="https://propertypartner.co.nz/about" />
        <meta property="og:title" content="About Us | Property Partner Christchurch | Property Partner" />
        <meta property="og:description" content="Learn about Property Partner, Christchurch trusted property management company. Our team, values, and commitment to landlords and tenants across Canterbury." />
        <meta property="og:url" content="https://propertypartner.co.nz/about" />
      </Helmet>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="flex-grow pt-24">
        {/* HERO */}
        <section className="bg-navy py-24 md:py-32 text-white relative overflow-hidden text-center border-b-2 border-teal">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-6 block border border-teal/30 inline-block px-3 py-1 bg-teal/10">
                {'>'} SYSTEM_ORIGIN
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
                OUR<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal/60">STORY</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
                One of Christchurch's longest-standing property management firms you've probably never heard of. Established in the late 1980s. Still owner-operated today.
              </p>
            </div>
          </div>
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </section>

        {/* INTRO: HONEST DISCLOSURE */}
        <section className="py-20 md:py-24 bg-white border-b-2 border-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="font-mono text-xs font-bold text-navy/40 uppercase tracking-widest mb-6 block">
                {'>'} HONEST_DISCLOSURE
              </span>
              <p className="text-xl md:text-3xl font-black text-navy leading-tight tracking-tight mb-8">
                We've never been the biggest. We've never chased growth for growth's sake. We've never plastered our name across bus stops or sponsored a stadium.
              </p>
              <div className="font-mono text-sm md:text-base text-ink-light leading-relaxed max-w-2xl mx-auto border-l-4 border-teal pl-6 text-left">
                <p className="mb-4">
                  What we have done is quietly manage properties in Christchurch for over 35 years—and the original founder is still a principal of the business.
                </p>
                <p className="font-bold text-navy">
                  Not many firms can say that.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTENT GRID: TIMELINE & PRINCIPLES */}
        <section className="py-24 bg-wash">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

              {/* TIMELINE */}
              <div>
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-2 block">{'>'} HISTORY_LOG</span>
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-12 tracking-tighter">
                  TIMELINE
                </h2>
                <div className="pl-4">
                  <TimelineEvent
                    year="1980s"
                    tag="#ERA_001"
                    title="FOUNDATION"
                    desc="Established as David Lawrence Real Estate, laying the foundation for what would become one of Christchurch's oldest property management firms."
                    meta="> STATUS: OPERATIONAL"
                  />
                  <TimelineEvent
                    year="1990s–2000s"
                    tag="#ERA_002"
                    title="REPUTATION"
                    desc="Built lasting relationships with landlords—some of whom have trusted us with their properties for over three decades. Through economic shifts, market changes, and the Canterbury earthquakes, we kept managing, kept communicating, and kept delivering. No fanfare. Just consistency."
                    meta="> CLIENT RETENTION: MULTI-GENERATIONAL"
                  />
                  <TimelineEvent
                    year="2015"
                    tag="#ERA_003"
                    title="REBRAND"
                    desc="Restructured and rebranded as Property Partner to better represent our ethos: true partnership with landlords and tenants. New name. Same principles."
                    meta="> IDENTITY: UPDATED | OWNERSHIP: CONTINUOUS"
                  />
                  <TimelineEvent
                    year="PRESENT"
                    tag="#ERA_004"
                    title="INNOVATION"
                    desc={`We're not interested in doing things the way they've always been done. Traditional property management is overdue for a shake-up—and we're building the tools to make that happen.\n\nWe've developed our own in-house rental appraisal and valuation platform at valua.co.nz—giving landlords and property managers instant, data-driven insights into their property's rental potential.\n\nModern systems. Cloud-based reporting. Streamlined processes. Property management that actually feels like it belongs in 2025.`}
                    meta="> STATUS: ACTIVE | MODE: INNOVATION"
                  />
                  <TimelineEvent
                    year="FUTURE"
                    tag="#ERA_005"
                    title="WHAT WE'RE BUILDING"
                    desc={`We're developing a full-suite property management platform designed to give landlords real choice.\n\nFor DIY landlords: All the tools you need to manage your own property—tenant applications, lease generation, rent tracking, maintenance logging, compliance checklists—without paying full management fees.\n\nFor hands-off landlords: The same platform, but with full-service management layered on top. We handle everything. You just log in when you want to see how things are going.\n\nOne platform. Two options. You decide how involved you want to be.`}
                    meta="> STATUS: IN DEVELOPMENT | RELEASE: COMING SOON"
                  />
                </div>
              </div>

              {/* PRINCIPLES */}
              <div>
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-2 block">{'>'} CORE_VALUES</span>
                <h2 className="text-4xl md:text-5xl font-black text-navy mb-12 tracking-tighter">
                  WHAT WE STAND FOR
                </h2>
                <div className="grid gap-6">
                  <PrincipleCard
                    number="01"
                    icon={UserCheck}
                    title="TENANT SELECTION FIRST"
                    desc="Good property management starts with the right tenant. We invest heavily in screening, verification, and reference checks because getting this right from day one prevents problems down the track."
                  />
                  <PrincipleCard
                    number="02"
                    icon={HeartHandshake}
                    title="RELATIONSHIP MANAGEMENT"
                    desc="Property management is really relationship management. We sit in the middle—between landlord and tenant—making sure both parties are heard, informed, and happy. When that balance is right, tenancies run smoothly and everyone wins."
                  />
                  <PrincipleCard
                    number="03"
                    icon={Zap} // Using Zap for Innovation
                    title="INNOVATION OVER TRADITION"
                    desc="The property management industry has been doing the same thing for decades. We're not here to preserve the old way—we're here to build something better. Better systems, better communication, better outcomes."
                  />
                </div>
              </div>

            </div>

            {/* CLOSING / MISSION */}
            <div className="mt-24 md:mt-32 text-center border-t-2 border-navy pt-20 max-w-4xl mx-auto">
              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-6 block border border-teal inline-block px-2 py-1">
                {'>'} MISSION_STATEMENT
              </span>
              <h3 className="text-3xl md:text-5xl font-black text-navy italic tracking-tight mb-10 leading-tight">
                "Think of us as your Property Partner—because when we work together, everybody wins."
              </h3>
              <p className="font-mono text-base md:text-lg text-ink-light mb-12 max-w-2xl mx-auto">
                We're not for everyone. But if you value experience, innovation, and a property manager who actually picks up the phone—we might be exactly what you're looking for.
              </p>
              <Button className="h-16 px-12 bg-navy text-white font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy hover:shadow-[4px_4px_0_0_#0F172A] transition-all border-2 border-navy">
                [ JOIN THE NETWORK ] <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default About;