import React, { useState, useEffect } from 'react';
import { Send, AlertTriangle, Hammer, Home, Clock, CheckCircle, AlertCircle, Phone, ArrowRight, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from "sonner";
import { Link } from 'react-router-dom';

const InputField = ({ label, type = "text", placeholder }) => (
  <div className="mb-6">
    <label className="block font-mono text-xs uppercase tracking-widest text-navy mb-2 font-bold">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full bg-wash border-2 border-navy h-12 px-4 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors rounded-none"
    />
  </div>
);

const TextAreaField = ({ label, placeholder }) => (
  <div className="mb-6">
    <label className="block font-mono text-xs uppercase tracking-widest text-navy mb-2 font-bold">{label}</label>
    <textarea
      rows="4"
      placeholder={placeholder}
      className="w-full bg-wash border-2 border-navy p-4 font-mono text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors rounded-none resize-none"
    />
  </div>
);

const MaintenanceRequest = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("TICKET_LOGGED: DISPATCHING PROTOCOLS");
  };

  useEffect(() => {
    // Tapi Integration Script
    const scriptId = 'tapi-embed-js';
    if (!document.getElementById(scriptId)) {
      const js = document.createElement('script');
      js.id = scriptId;
      js.src = '//tapi.app/js/embed.js';
      document.head.appendChild(js);
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-wash">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="bg-navy text-white py-24 border-b-8 border-teal relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; TENANT_SERVICES // MAINTENANCE</span>
              <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                REPORT AN <br /> ISSUE
              </h1>
              <p className="text-xl text-white/60 max-w-2xl font-mono border-l-4 border-teal pl-6">
                Submit maintenance requests directly through our system. Track progress in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* INTRO SECTION */}
        <section className="py-24 bg-white relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <div>
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; SYSTEM: TAPI</span>
                <p className="text-lg text-ink leading-relaxed mb-6 font-medium">
                  We use a maintenance platform called Tapi to manage all repair requests. It keeps you informed at every stage—from submission through to completion—with automatic progress updates sent directly to you.
                </p>
                <p className="text-lg text-ink leading-relaxed font-light">
                  Use the Tenant Concierge below to describe your issue. The system will help us understand what's needed and route your request to the right contractor as quickly as possible.
                </p>
              </div>
              <div className="bg-wash border-2 border-navy p-8">
                <div className="flex items-center gap-4 mb-4">
                  <AlertCircle className="w-6 h-6 text-teal" />
                  <h3 className="text-xl font-black text-navy uppercase">Important</h3>
                </div>
                <p className="font-mono text-sm text-ink-light">
                  Emergency issues (fire, flood, gas) should still be reported immediately by phone to 111 and our 24/7 hotline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CHATBOT SECTION */}
        <section className="py-12 bg-wash border-t-2 border-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-black text-navy uppercase tracking-tight">TENANT CONCIERGE</h2>
              </div>
              <div className="bg-white border-2 border-navy min-h-[600px] shadow-hard p-4">
                {/* Tapi Container */}
                <div className="tapi-embedded-request" data-company="31b929db-5a73-412b-81ea-c1f4fcf4fc4e" data-type="bot"></div>
              </div>
            </div>
          </div>
        </section>

        {/* WORKFLOW PROTOCOL */}
        <section className="py-24 bg-navy text-white border-y-8 border-teal relative overflow-hidden">
          <div className="container mx-auto px-6 relative z-10">
            <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-8 block">&gt; WORKFLOW_PROTOCOL</span>
            <h2 className="text-5xl font-black mb-16 uppercase tracking-tighter">AFTER YOU SUBMIT</h2>

            <div className="grid md:grid-cols-3 gap-12">
              <div className="group">
                <div className="w-16 h-16 bg-teal text-navy flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-white transition-colors">1</div>
                <h3 className="text-2xl font-bold mb-4 uppercase">Confirmation</h3>
                <p className="font-mono text-sm text-white/70 leading-relaxed border-l-2 border-teal/30 pl-4">
                  You'll receive an email confirmation with a link to track your request.
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-teal text-navy flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-white transition-colors">2</div>
                <h3 className="text-2xl font-bold mb-4 uppercase">Assignment</h3>
                <p className="font-mono text-sm text-white/70 leading-relaxed border-l-2 border-teal/30 pl-4">
                  You can see when your property manager has actioned the request and which contractor has been assigned.
                </p>
              </div>
              <div className="group">
                <div className="w-16 h-16 bg-teal text-navy flex items-center justify-center text-2xl font-black mb-6 group-hover:bg-white transition-colors">3</div>
                <h3 className="text-2xl font-bold mb-4 uppercase">Scheduling</h3>
                <p className="font-mono text-sm text-white/70 leading-relaxed border-l-2 border-teal/30 pl-4">
                  The contractor will contact you directly to arrange a repair time that works for both of you. They'll be provided with your contact details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* RESPONSE TIMES */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; RESPONSE_TIMEFRAMES</span>
              <h2 className="text-4xl font-black text-navy mb-8 uppercase tracking-tighter">EXPECTED CONTRACTOR CONTACT</h2>

              <div className="mb-12">
                <p className="text-lg text-ink leading-relaxed mb-6">
                  We aim to action all maintenance requests the same day they're reported—provided they're submitted before 5pm and don't require landlord approval. Requests made after 5pm are processed the following morning.
                </p>
                <p className="text-lg text-ink leading-relaxed">
                  Once actioned, here are our target timeframes for contractor contact:
                </p>
              </div>

              <div className="border-2 border-navy">
                <div className="grid grid-cols-[2fr_1fr] border-b-2 border-navy bg-navy text-white font-mono text-xs uppercase font-bold tracking-widest">
                  <div className="p-4 border-r-2 border-white/20">Issue Type</div>
                  <div className="p-4">Target Contact Time</div>
                </div>
                {[
                  { type: "Urgent plumbing (burst main, no hot water)", time: "Same day" },
                  { type: "Urgent electrical (power outage)", time: "Same day" },
                  { type: "Appliance faults (oven, dishwasher)", time: "Within 24 hours" },
                  { type: "General plumbing", time: "Within 48 hours" },
                  { type: "General electrical", time: "Within 48 hours" },
                  { type: "Heat pump faults", time: "Within 48 hours" },
                  { type: "Roof leaks", time: "Within 48 hours" },
                  { type: "Heat pump servicing", time: "Within 7 days" },
                  { type: "Garage door faults", time: "Within 7 days" },
                  { type: "Non-urgent general maintenance", time: "Within 7 days of landlord approval" },
                ].map((item, idx) => (
                  <div key={idx} className={`grid grid-cols-[2fr_1fr] border-b border-black/10 hover:bg-wash transition-colors ${idx === 9 ? 'border-b-0' : ''}`}>
                    <div className="p-4 border-r border-black/10 font-medium text-navy">{item.type}</div>
                    <div className="p-4 font-mono text-sm text-teal font-bold">{item.time}</div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center gap-2 font-mono text-xs text-orange-600 font-bold uppercase tracking-widest">
                <AlertTriangle className="w-4 h-4" />
                PRIORITY: URGENT ISSUES ESCALATED AUTOMATICALLY
              </div>

            </div>
          </div>
        </section>

        {/* DELAYS */}
        <section className="py-24 bg-wash border-t-2 border-navy">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; EXCEPTION_HANDLING</span>
                <h2 className="text-4xl font-black text-navy mb-8 uppercase tracking-tighter">HAVEN'T HEARD BACK?</h2>
                <p className="text-lg text-ink leading-relaxed mb-6">
                  We work with a roster of trusted contractors—many of whom are self-employed tradespeople with busy schedules. Occasionally, these timeframes may not be met due to high demand or availability.
                </p>
                <p className="text-lg text-ink leading-relaxed mb-8">
                  If you haven't been contacted within the expected timeframe, follow the "track your repair request" link in your confirmation email and send a reply to your property manager. We'll follow up immediately.
                </p>
                <div className="flex items-center gap-2 font-mono text-xs text-navy font-bold uppercase tracking-widest bg-white inline-block px-4 py-2 border border-navy">
                  <Clock className="w-4 h-4 text-teal" /> ESCALATION: VIA TRACKING LINK
                </div>

                <div className="mt-12 pt-12 border-t-2 border-navy/10">
                  <h3 className="font-bold text-navy text-lg mb-4">Need to report something else or have a question?</h3>
                  <Link to="/contact">
                    <Button className="h-12 bg-navy text-white font-mono text-xs font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy border-2 border-navy transition-all">
                      Contact Us <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="hidden md:block relative h-full min-h-[400px]">
                <div className="absolute inset-0 bg-navy/5 border-2 border-navy/20 p-2">
                  <div className="h-full w-full border border-navy/10 bg-[url('https://images.unsplash.com/photo-1581094794329-cd1361dca687?auto=format&fit=crop&q=80')] bg-cover bg-center grayscale opacity-50 mix-blend-multiply"></div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* BACKUP PROTOCOL (EXISTING FORM) */}
        <section className="py-24 bg-navy relative border-t-8 border-teal">

          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto mb-16 text-center">
              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; BACKUP_SYSTEM</span>
              <h2 className="text-3xl font-black text-white uppercase tracking-tighter mb-4">LEGACY REPORTING FORM</h2>
              <p className="text-white/60 font-mono text-sm max-w-2xl mx-auto">
                Use this form only if the Tenant Concierge above is offline or non-responsive.
              </p>
            </div>

            <div className="max-w-2xl mx-auto border-4 border-white/20 bg-white p-8 md:p-12 shadow-[8px_8px_0_0_rgba(255,255,255,0.1)] relative">
              {/* Warning Strip */}
              <div className="bg-orange-500/10 border-l-4 border-orange-500 p-4 mb-8 flex items-start gap-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 shrink-0" />
                <div>
                  <h3 className="font-black text-navy uppercase text-sm mb-1">Emergency Protocol</h3>
                  <p className="font-mono text-xs text-ink-light leading-relaxed">
                    For flooding, fire, or gas leaks, do not complete this form. Call 111 immediately, then call our Emergency Hotline: 0800-URGENT.
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>

                <div className="mb-8 border-b-2 border-navy/10 pb-8">
                  <h2 className="text-xl font-black text-navy uppercase mb-6 flex items-center gap-2">
                    <Home className="w-5 h-5" /> Location Data
                  </h2>
                  <InputField label="Property Address" placeholder="ENTER_FULL_ADDRESS" />
                  <InputField label="Unit / Apartment No." placeholder="OPTIONAL" />
                </div>

                <div className="mb-8 border-b-2 border-navy/10 pb-8">
                  <h2 className="text-xl font-black text-navy uppercase mb-6 flex items-center gap-2">
                    <Hammer className="w-5 h-5" /> Issue Details
                  </h2>
                  <InputField label="Issue Category" placeholder="PLUMBING / ELECTRICAL / STRUCTURAL" />
                  <TextAreaField label="Description" placeholder="DESCRIBE_ISSUE_IN_DETAIL..." />

                  <div className="bg-wash border-2 border-navy border-dashed p-8 text-center cursor-pointer hover:bg-teal/10 transition-colors">
                    <span className="font-mono text-xs font-bold text-navy uppercase tracking-widest block mb-2">Upload Evidence</span>
                    <span className="font-mono text-[10px] text-ink-light block">JPG / PNG / MP4 (MAX 10MB)</span>
                  </div>
                </div>

                <Button className="w-full h-16 bg-navy text-white font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy hover:shadow-hard transition-all border-2 border-navy">
                  Submit Ticket <Send className="ml-2 h-5 w-5" />
                </Button>

              </form>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MaintenanceRequest;