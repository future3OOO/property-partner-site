import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Terminal, CheckCircle2, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-[100dvh] pt-36 pb-12 lg:pt-48 lg:pb-24 relative overflow-hidden flex items-center w-full max-w-[100vw]">
      {/* Background Gradients (Retained) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-teal/5 to-transparent -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-navy/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 relative z-10 w-full">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left: Content */}
          <div className="lg:col-span-7 relative z-20">
            <div className="inline-block bg-teal text-navy px-2 py-1 font-mono text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4 md:mb-6 border-2 border-navy shadow-hard-sm">
              Transform Your Property Management
            </div>

            {/* STRICT TYPOGRAPHY IMPLEMENTATION */}
            <h1 className="anti-h1 text-navy mb-6 md:mb-8 tracking-tighter uppercase">
              SIMPLIFIED<br />
              <span className="text-teal">PROPERTY</span><br />
              MANAGEMENT
            </h1>

            <p className="font-sans text-base md:text-xl text-ink-light mb-8 md:mb-10 max-w-lg border-l-4 border-teal pl-4 md:pl-6 py-2 leading-relaxed font-medium">
              Your Partner in Stress-Free and Transparent Rental Property Management, Ensuring Positive Experiences for All
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-8 md:mb-10">
              <button className="anti-btn shadow-hard w-full sm:w-auto h-14 md:h-16 flex items-center justify-center text-sm md:text-base">
                Get Started Now
              </button>
              <button className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-navy hover:text-teal underline decoration-2 underline-offset-4 decoration-teal h-14 md:h-16 flex items-center justify-center sm:justify-start">
                Contact Us
              </button>
            </div>

            <div className="flex flex-wrap gap-4 md:gap-8 pt-4 border-t-2 border-navy/10">
              {["Smart Management"].map((badge, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="bg-teal/20 p-1 border border-navy">
                    <CheckCircle2 className="w-3 h-3 md:w-4 md:h-4 text-navy" />
                  </div>
                  <span className="text-xs md:text-sm font-bold text-navy font-mono uppercase tracking-tight">{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Weekly Payouts Terminal */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0 px-2 lg:px-0">
            {/* Decorative Grid - Hidden on mobile to prevent overflow */}
            <div className="hidden md:block absolute -top-12 -right-12 w-full h-full border-2 border-navy/10 bg-[linear-gradient(45deg,#020817_1px,transparent_1px)] [background-size:20px_20px] opacity-20 -z-10" />

            <div className="bg-white border-4 border-navy shadow-hard p-2 relative max-w-full">
              {/* Terminal Header */}
              <div className="bg-navy text-white p-2 md:p-3 flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-3 h-3 md:w-4 md:h-4 text-teal" />
                  <span className="font-mono text-[10px] md:text-xs uppercase tracking-widest leading-none truncate max-w-[150px]">WEEKLY_PAYOUTS.EXE</span>
                </div>
                <div className="flex gap-1 shrink-0">
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-teal" />
                  <div className="w-2 h-2 md:w-3 md:h-3 bg-white" />
                </div>
              </div>

              {/* Terminal Content */}
              <div className="p-4 md:p-6">
                <div className="mb-4 md:mb-6 flex justify-between items-end border-b-2 border-navy pb-3 md:pb-4">
                  <div>
                    <div className="text-[10px] md:text-xs font-mono text-ink-light uppercase mb-1">Payout Frequency</div>
                    <div className="font-black text-lg md:text-2xl text-navy uppercase">Weekly</div>
                  </div>
                  <div className="bg-teal text-navy px-2 py-1 text-[10px] md:text-xs font-mono font-bold uppercase shrink-0">Active</div>
                </div>

                <div className="space-y-2 md:space-y-3 font-mono text-[10px] md:text-sm">
                  {[
                    { date: 'NOV 24', amount: '$650.00', status: 'SENT' },
                    { date: 'NOV 17', amount: '$650.00', status: 'SENT' },
                    { date: 'NOV 10', amount: '$650.00', status: 'SENT' },
                  ].map((payout, i) => (
                    <div key={i} className="flex justify-between items-center p-2 md:p-3 bg-wash border-2 border-transparent hover:border-navy transition-all group">
                      <div className="flex items-center gap-2 md:gap-3">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal rounded-none shrink-0" />
                        <span className="font-bold text-navy whitespace-nowrap">{payout.date}</span>
                      </div>
                      <div className="flex items-center gap-2 md:gap-4">
                        <span className="font-bold text-navy whitespace-nowrap">{payout.amount}</span>
                        <span className="text-[10px] bg-navy/10 text-navy px-1 py-0.5">{payout.status}</span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between items-center p-2 md:p-3 bg-navy text-white border-2 border-navy">
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-teal animate-pulse shrink-0" />
                      <span className="font-bold whitespace-nowrap">NOV 01</span>
                    </div>
                    <div className="flex items-center gap-2 md:gap-4">
                      <span className="font-bold whitespace-nowrap">$650.00</span>
                      <span className="text-[10px] bg-teal text-navy px-1 py-0.5">PROC</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Element - Positioned INSIDE to prevent page break overlap */}
            <div className="absolute bottom-8 left-0 right-0 mx-auto w-max md:bottom-12 md:left-6 md:right-auto bg-teal text-navy p-2 md:p-4 border-2 border-navy shadow-hard-sm z-20">
              <div className="font-black text-sm md:text-lg leading-tight text-center md:text-left">
                CASH FLOW <br /> OPTIMIZED
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;