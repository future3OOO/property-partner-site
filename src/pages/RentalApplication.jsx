import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, CheckCircle, AlertCircle, FileText, ArrowRight, Clock, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const RentalApplication = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-wash">
      <Helmet>
        <title>Rental Application | Property Partner Christchurch | Property Partner</title>
        <meta name="description" content="Apply for rental properties in Christchurch. Easy online rental application process with Property Partner." />
        <meta name="keywords" content="rental application Christchurch, apply for rental NZ, tenant application Canterbury" />
        <link rel="canonical" href="https://propertypartner.co.nz/rental-application" />
        <meta property="og:title" content="Rental Application | Property Partner Christchurch | Property Partner" />
        <meta property="og:description" content="Apply for rental properties in Christchurch. Easy online rental application process with Property Partner." />
        <meta property="og:url" content="https://propertypartner.co.nz/rental-application" />
      </Helmet>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="bg-navy text-white py-16 md:py-24 border-b-8 border-teal relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">■ OPEN_APPLICATIONS</span>
              <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                START <br /> APPLICATION
              </h1>
              <p className="text-xl text-white/90 max-w-2xl font-mono border-l-4 border-teal pl-6 mb-10">
                Complete the digital validation form to secure your tenancy.
              </p>
              <Button
                asChild
                className="bg-teal text-navy font-mono text-sm font-bold uppercase tracking-widest h-14 px-8 rounded-none hover:bg-white hover:text-navy border-2 border-teal transition-all"
              >
                <a href="https://apply.tenant.co.nz/tps1205" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                  Start Application <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* PROCESS OVERVIEW */}
        <section className="py-24 bg-white relative z-10">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[1fr_2fr] gap-16">
              <div>
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; APPLICATION_PROTOCOL</span>
                <h2 className="text-4xl font-black text-navy mb-8 tracking-tighter uppercase">HOW IT WORKS</h2>
                <p className="text-lg text-ink leading-relaxed mb-6 font-medium">
                  All tenancy applications are processed through tenant.co.nz—our secure external platform for applications and agreements.
                </p>
                <div className="bg-navy p-6 mt-8">
                  <h3 className="text-white font-bold uppercase mb-2 text-sm flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-teal" /> Secure Platform
                  </h3>
                  <p className="font-mono text-xs text-white/80">
                    Your data is encrypted and handled in accordance with privacy laws.
                  </p>
                </div>
              </div>

              <div className="space-y-12">
                {/* STAGE 01 */}
                <div className="border-l-4 border-navy pl-8 relative">
                  <span className="absolute -left-[14px] top-0 w-6 h-6 bg-navy text-white text-[10px] font-bold flex items-center justify-center rounded-none font-mono">01</span>
                  <h3 className="text-2xl font-black text-navy uppercase mb-4">STAGE 01 — INITIAL SUBMISSION</h3>
                  <p className="text-ink leading-relaxed mb-4">
                    Submit your personal details, references, and supporting documents. All applications are reviewed in the order they're received.
                  </p>
                </div>

                {/* STAGE 02 */}
                <div className="border-l-4 border-teal pl-8 relative">
                  <span className="absolute -left-[14px] top-0 w-6 h-6 bg-teal text-navy text-[10px] font-bold flex items-center justify-center rounded-none font-mono">02</span>
                  <h3 className="text-2xl font-black text-navy uppercase mb-4">STAGE 02 — VERIFICATION</h3>
                  <p className="text-ink leading-relaxed mb-6">
                    If you're shortlisted as a preferred applicant, we'll proceed to stage two. This involves running credit checks and reviewing your uploaded proof of income documentation.
                  </p>

                  <div className="bg-wash border-2 border-navy p-6 mb-6">
                    <div className="flex items-start gap-4 mb-4">
                      <AlertCircle className="w-6 h-6 text-orange-600 shrink-0" />
                      <div>
                        <h4 className="font-bold text-navy uppercase text-sm mb-1">Important Note</h4>
                        <p className="font-mono text-xs text-ink-light leading-relaxed">
                          Being notified as a preferred applicant does not mean your application has been accepted. It means you've been shortlisted alongside other candidates for further review.
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="text-sm font-mono text-ink-light border-l-2 border-teal/30 pl-4 py-2 bg-teal/5">
                    <strong className="text-teal">RECOMMENDATION:</strong> We advise completing both Stage 1 and Stage 2 upfront when you submit your application. This ensures we have all the information required if you're shortlisted—and avoids delays in processing.
                  </p>

                  <div className="mt-6 font-mono text-[10px] text-teal uppercase tracking-widest font-bold">
                    &gt; STATUS: STAGE 02 = SHORTLISTED, NOT CONFIRMED
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* REQUIRED DOCUMENTATION */}
        <section className="py-24 bg-navy text-white border-y-8 border-teal relative overflow-hidden">
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <FileText className="w-96 h-96" />
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-8 block">&gt; SUBMISSION_REQUIREMENTS</span>
            <h2 className="text-white text-4xl md:text-5xl font-black mb-16 uppercase tracking-tighter">REQUIRED DOCUMENTATION</h2>

            <p className="font-mono text-white/80 mb-12 max-w-xl text-lg">
              Have the following ready before you begin:
            </p>

            <div className="grid md:grid-cols-3 gap-8 lead-relaxed">
              <div className="bg-white/10 border border-teal/20 p-8 hover:bg-white/20 transition-colors group relative overflow-hidden">
                <div className="w-12 h-12 bg-teal text-navy flex items-center justify-center mb-6 z-10 relative shadow-hard">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase text-teal group-hover:text-white transition-colors relative z-10">GOVERNMENT ID</h3>
                <p className="font-mono text-sm text-white/90 relative z-10">Valid driver's licence or passport scan</p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/10 rounded-full blur-2xl group-hover:bg-teal/20 transition-all"></div>
              </div>
              <div className="bg-white/10 border border-teal/20 p-8 hover:bg-white/20 transition-colors group relative overflow-hidden">
                <div className="w-12 h-12 bg-teal text-navy flex items-center justify-center mb-6 z-10 relative shadow-hard">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase text-teal group-hover:text-white transition-colors relative z-10">PROOF OF INCOME</h3>
                <p className="font-mono text-sm text-white/90 relative z-10">2x recent payslips or 3 months bank statements</p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/10 rounded-full blur-2xl group-hover:bg-teal/20 transition-all"></div>
              </div>
              <div className="bg-white/10 border border-teal/20 p-8 hover:bg-white/20 transition-colors group relative overflow-hidden">
                <div className="w-12 h-12 bg-teal text-navy flex items-center justify-center mb-6 z-10 relative shadow-hard">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-black text-xl mb-3 uppercase text-teal group-hover:text-white transition-colors relative z-10">REFERENCES</h3>
                <p className="font-mono text-sm text-white/90 relative z-10">Contact details for previous landlord & employer</p>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-teal/10 rounded-full blur-2xl group-hover:bg-teal/20 transition-all"></div>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESSING & SUCCESS */}
        <section className="py-24 bg-wash">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">

              {/* Processing */}
              <div>
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; TIMELINE_NOTICE</span>
                <h2 className="text-3xl font-black text-navy mb-8 uppercase tracking-tighter">WHAT TO EXPECT</h2>
                <p className="text-lg text-ink leading-relaxed mb-6 font-medium">
                  Application processing time varies depending on circumstances—typically anywhere from a few days to a few weeks.
                </p>
                <p className="text-lg text-ink leading-relaxed mb-6">
                  All unsuccessful applicants will be notified in due course. If we require any additional information, we'll be in touch.
                </p>
                <div className="bg-white border text-ink-light p-4 font-mono text-sm border-l-4 border-l-teal shadow-hard-sm">
                  Please be patient while your application is being reviewed.
                </div>
                <div className="mt-4 font-mono text-[10px] text-navy/40 uppercase tracking-widest font-bold">
                  &gt; PROCESSING: VARIABLE | NOTIFICATION: ALL APPLICANTS
                </div>
              </div>

              {/* Successful Applications */}
              <div>
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; ACCEPTANCE_PROTOCOL</span>
                <h2 className="text-3xl font-black text-navy mb-8 uppercase tracking-tighter">IF YOU'RE APPROVED</h2>
                <p className="text-lg text-ink leading-relaxed mb-6 font-medium">
                  Successful applicants will receive an acceptance notification followed by a tenancy agreement to review and sign.
                </p>
                <p className="text-lg text-ink leading-relaxed mb-8">
                  Everything is handled digitally through the same tenant.co.nz platform you applied through—simply log back in to review your agreement and complete the signing process.
                </p>
                <div className="font-mono text-[10px] text-teal uppercase tracking-widest font-bold bg-navy inline-flex px-3 py-1 text-white border border-teal/20">
                  &gt; SIGNING: DIGITAL | PLATFORM: TENANT.CO.NZ
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-white border-t-2 border-navy">
          <div className="container mx-auto px-6 text-center">
            <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-8 block">&gt; EXTERNAL_PORTAL_REDIRECTION</span>
            <h2 className="text-4xl md:text-6xl font-black text-navy mb-12 uppercase tracking-tighter">READY TO PROCEED?</h2>

            <Button
              asChild
              className="bg-navy text-white text-lg md:text-xl font-mono font-bold uppercase tracking-widest h-20 md:h-24 px-12 md:px-24 rounded-none border-2 border-navy hover:bg-teal hover:text-navy hover:shadow-[8px_8px_0_0_#1e293b] transition-all duration-300"
            >
              <a href="https://apply.tenant.co.nz/tps1205" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                [ LAUNCH SECURE FORM ] <ExternalLink className="w-6 h-6 md:w-8 md:h-8" />
              </a>
            </Button>

            <p className="mt-8 font-mono text-xs text-ink-light uppercase">
              Redirects to tenant.co.nz
            </p>

            <div className="mt-24 pt-12 border-t border-navy/10 flex justify-center">
              <p className="font-mono text-xs text-ink-light uppercase flex items-center gap-2">
                <AlertCircle className="w-4 h-4" /> ENCOUNTERING ERRORS? <a href="/contact" className="underline hover:text-teal font-bold text-navy">CONTACT_SUPPORT</a>
              </p>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default RentalApplication;