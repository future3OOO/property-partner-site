import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Check, X, Shield, ArrowRight, UserCheck, RefreshCw, HelpCircle, AlertTriangle, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const ComparisonRow = ({ service, other, us, highlight = false }) => (
  <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-b border-navy/10 ${highlight ? 'bg-teal/5' : ''} hover:bg-wash transition-colors`}>
    <div className="font-bold text-navy text-sm md:text-base flex items-center">{service}</div>
    <div className="font-mono text-xs md:text-sm text-ink-light flex items-center md:border-l border-navy/10 md:pl-4">
      <span className="md:hidden font-bold mr-2 text-navy">Other Firms:</span> {other}
    </div>
    <div className="font-mono text-xs md:text-sm text-navy font-bold flex items-center md:border-l border-navy/10 md:pl-4">
      <span className="md:hidden font-bold mr-2 text-teal">Property Partner:</span>
      {us === 'CHECK' ? <Check className="w-5 h-5 text-teal" /> : us}
    </div>
  </div>
);

const SectionHeader = ({ title }) => (
  <div className="bg-navy p-3 text-white font-mono text-xs uppercase tracking-widest font-bold mt-8 mb-4">
    {title}
  </div>
);

const Pricing = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-wash">
      <Helmet>
        <title>Property Management Christchurch fees & costs</title>
        <meta name="description" content="How much does it cost? 8% + GST flatrate. No hidden charges." />
      </Helmet>
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="flex-grow pt-24">
        {/* Header */}
        <section className="bg-navy text-white py-20 border-b-8 border-teal relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 inline-block border border-teal px-2 py-1">Everything included for 8% + GST</span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
              Simple, Transparent <br /> Pricing
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto font-mono mb-8">
              Everything you need for professional property management, without the extra costs.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 font-mono text-sm md:text-base font-bold text-teal tracking-widest uppercase">
              <span className="flex items-center gap-2"><Check className="w-5 h-5" /> No hidden fees</span>
              <span className="hidden md:inline text-white/20">|</span>
              <span className="flex items-center gap-2"><Check className="w-5 h-5" /> No lock-in contracts</span>
              <span className="hidden md:inline text-white/20">|</span>
              <span className="flex items-center gap-2"><Check className="w-5 h-5" /> No BS</span>
            </div>
          </div>
        </section>

        {/* Pricing Card */}
        <section className="py-24 bg-white relative border-b-2 border-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto border-4 border-navy bg-white p-8 md:p-16 relative shadow-hard">
              {/* Decorator */}
              <div className="absolute top-0 right-0 p-4 bg-navy text-white font-mono text-xs uppercase tracking-widest">
                PROFESSIONAL_PACKAGE
              </div>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12 border-b-4 border-navy/10 pb-12">
                <div>
                  <h2 className="text-4xl font-black text-navy uppercase tracking-tighter mb-4">Professional Package</h2>
                  <p className="font-mono text-ink-light max-w-md">Complete management solution for your investment.</p>
                </div>
                <div className="text-right">
                  <div className="text-6xl font-black text-navy tracking-tighter">8%</div>
                  <div className="font-mono text-xs uppercase tracking-widest text-ink-light">+ GST / MONTH</div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Professional listing photos + Trademe base listing</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Tenant background & credit checks</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Healthy homes assessment</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Full Compliance management</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Quarterly property inspections</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Online owner portal access</span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Weekly Landlord payments</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Lease preparation & renewal</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Maintenance coordination (24/7)</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Regular property inspections</span>
                  </li>
                  <li className="flex items-center gap-3 font-mono text-sm text-navy">
                    <Check className="w-5 h-5 text-teal" /> <span>Legal compliance management</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <Button className="h-16 px-12 bg-navy text-white font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy hover:shadow-hard transition-all border-2 border-navy">
                  Get Started Now
                </Button>
              </div>

            </div>
          </div>
        </section>

        {/* COMPARISON TABLE */}
        <section className="py-24 bg-wash border-b-2 border-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-16">
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-2 block">> MARKET_ANALYSIS_MATRIX</span>
                <h2 className="text-4xl font-black text-navy tracking-tighter">VALUE COMPARISON</h2>
              </div>

              <div className="bg-white border-4 border-navy shadow-hard">
                {/* Table Header */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-navy text-white border-b-4 border-teal hidden md:grid">
                  <div className="font-mono font-bold uppercase tracking-widest">Service Protocol</div>
                  <div className="font-mono font-bold uppercase tracking-widest opacity-50">Other Firms</div>
                  <div className="font-mono font-bold uppercase tracking-widest text-teal">Property Partner</div>
                </div>

                {/* Compliance & Legal */}
                <SectionHeader title="Compliance & Legal" />
                <ComparisonRow service="Compliance Management" other="Billable Hour" us="CHECK" />
                <ComparisonRow service="Healthy Homes Assessments" other="~$200" us="CHECK" highlight />
                <ComparisonRow service="Tenancy Tribunal Representation" other="Extra Fees" us="CHECK" />

                {/* Marketing */}
                <SectionHeader title="Marketing & Tenant Placement" />
                <ComparisonRow service="Advertising / TradeMe Listing" other="$300 - $500" us="CHECK" highlight />
                <ComparisonRow service="Professional Photography" other="$200+" us="CHECK" highlight />
                <ComparisonRow service="Tenant Credit Checks" other="~$30 each" us="CHECK" />
                <ComparisonRow service="Letting Fees" other="1 Week Rent" us="CHECK" />

                {/* Financial */}
                <SectionHeader title="Financial Management" />
                <ComparisonRow service="Landlord Payments" other="Bi-Weekly / Monthly" us="Weekly" />
                <ComparisonRow service="Bill Management (Rates/Ins/BodyCorp)" other="Extra Fees" us="CHECK" />
                <ComparisonRow service="Monthly Admin Fees" other="Yes" us="CHECK" />
                <ComparisonRow service="EOFY Summary Statements" other="Extra Fees" us="CHECK" />

                {/* Operations */}
                <SectionHeader title="Property Operations" />
                <ComparisonRow service="Maintenance Coordination" other="7-10% Surcharge" us="CHECK" highlight />
                <ComparisonRow service="Routine Inspections" other="$50 - $100" us="CHECK" highlight />

                {/* Flexible Terms */}
                <SectionHeader title="Flexible Terms" />
                <ComparisonRow service="Lease Preparation / Renewal" other="Admin Fee" us="CHECK" />
                <ComparisonRow service="Fee if selling property" other="Exit Penalty" us="None" />
                <ComparisonRow service="Lock-in Contracts" other="Fixed Term" us="None" />
                <ComparisonRow service="Tenant Lease Change Fees" other="Charged" us="None" />

              </div>

              <div className="mt-8 text-center max-w-3xl mx-auto">
                <p className="font-mono text-sm text-ink-light leading-relaxed">
                  Everything listed is included in our simple 8% + GST management fee. Unlike many other agencies, we don't add extra charges or hidden costs for these essential services – providing you with clear, transparent pricing and exceptional value.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* DEDICATED MANAGER SECTION */}
        <section className="py-24 bg-navy text-white relative">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="bg-teal p-6 shadow-hard shrink-0 text-navy hidden md:block">
                  <UserCheck className="w-16 h-16" />
                </div>
                <div>
                  <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">> SYSTEM_INTEGRITY</span>
                  <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tighter">Your Dedicated Property Manager</h2>

                  <div className="prose prose-invert prose-lg text-white/80 font-mono leading-relaxed space-y-4">
                    <p>
                      At Property Partner, we do things differently. You get a dedicated property manager—the <strong>same person</strong> who held the viewings and selected the tenants is the same person doing routine inspections, reporting, and maintenance coordination.
                    </p>
                    <p>
                      There is <strong>no rotating door</strong> here.
                    </p>
                    <p className="text-white/50 text-base border-l-2 border-white/20 pl-4 mt-8">
                      <em>Contrast this with other firms:</em> Roles are usually split and distributed. You often have one person dealing with landlords and selecting tenants, but someone else entirely doing routine inspections and maintenance.
                    </p>
                    <p className="text-white/50 text-base border-l-2 border-white/20 pl-4">
                      There is also a 'rotating door' of property managers. A common complaint we hear is that landlords don't actually know who their current manager is. You might be happy with the person you started with, but then you're passed through multiple others who don't impress you as much.
                    </p>
                    <p className="text-white/50 text-base border-l-2 border-white/20 pl-4">
                      We don't like to speak negatively about competitors. In fact, we deeply sympathise with them. We understand that those managers are likely underpaid and completely overloaded with responsibilities.
                    </p>
                    <p className="text-white/50 text-base border-l-2 border-white/20 pl-4">
                      The difference with Property Partner is that <strong>our owner has direct involvement in each management</strong>, which ensures that someone knows what's going on at all times and has a relationship with both the tenant and the landlord.
                    </p>
                    <p className="text-white/50 text-base border-l-2 border-white/20 pl-4">
                      However, this also means <strong>we are capped at only managing a certain number of properties.</strong> We do this because it's the only way to maintain a standard of service.
                    </p>
                    <div className="mt-8 p-4 border border-teal/50 bg-teal/10 flex items-start gap-3">
                      <AlertTriangle className="w-5 h-5 text-teal shrink-0 mt-1" />
                      <p className="text-sm">
                        <strong>CAPACITY WARNING:</strong> Unfortunately, this means you may not be able to just "sign up". You may need to go on a waiting list before we have the capacity to manage your properties.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ / TRANSPARENCY SECTION */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-2 block">> PROTOCOL_CLARIFICATION</span>
              <h2 className="text-3xl font-black text-navy tracking-tighter mb-4">You Asked, We Clarified.</h2>
              <p className="font-mono text-ink-light">Just to keep things simple and completely transparent.</p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              <div className="border-l-4 border-navy bg-wash p-6 shadow-sm">
                <h3 className="font-black text-lg text-navy uppercase tracking-tight mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-teal" /> Is advertising and tenant screening really included?
                </h3>
                <p className="font-mono text-sm text-ink-light">
                  <strong>YES.</strong> We cover professional photography, TradeMe Base listings, viewings, background checks, and credit checks. No extra bills.
                </p>
              </div>

              <div className="border-l-4 border-navy bg-wash p-6 shadow-sm">
                <h3 className="font-black text-lg text-navy uppercase tracking-tight mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-teal" /> Are inspections extra?
                </h3>
                <p className="font-mono text-sm text-ink-light">
                  <strong>NO.</strong> Routine quarterly inspections (and the detailed photo reports that come with them) are fully covered by your management fee.
                </p>
              </div>

              <div className="border-l-4 border-navy bg-wash p-6 shadow-sm">
                <h3 className="font-black text-lg text-navy uppercase tracking-tight mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-teal" /> Do you charge for maintenance coordination?
                </h3>
                <div className="font-mono text-sm text-ink-light space-y-3">
                  <p>
                    <strong>NEVER.</strong> Many firms add 10% to every invoice. We believe this creates a fundamental conflict of interest—if we charged a percentage, we'd be incentivized to find you the <em>most expensive</em> plumber, not the best value one.
                  </p>
                  <p>
                    We understand that maintenance is already a financial burden. We don't want to add to that, nor do we want to discourage you from doing necessary repairs. Good property management is about efficient maintenance, and our incentives should be aligned with yours: getting the job done right for the best possible price.
                  </p>
                </div>
              </div>

              <div className="border-l-4 border-navy bg-wash p-6 shadow-sm">
                <h3 className="font-black text-lg text-navy uppercase tracking-tight mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-teal" /> Serious question: Does this include Meth or Asbestos testing?
                </h3>
                <p className="font-mono text-sm text-ink-light">
                  <strong>NO.</strong> Testing for Meth or Asbestos is not included by default and is only conducted upon request or if specified in your management agreement. These tests must be carried out by an independent third-party contractor and will incur a minimum cost of $199 + GST.
                </p>
              </div>

              <div className="border-l-4 border-navy bg-wash p-6 shadow-sm">
                <h3 className="font-black text-lg text-navy uppercase tracking-tight mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-teal" /> What about Smoke Alarm testing?
                </h3>
                <div className="font-mono text-sm text-ink-light space-y-3">
                  <p>
                    Smoke alarms are assessed during our Healthy Homes assessment, tested between tenancies, and checked during each routine inspection. However, if there is an issue reported with a smoke alarm during a tenancy, standard contractor charges will apply for replacement.
                  </p>
                  <div className="bg-white border text-ink p-4 border-navy/10 mt-2">
                    <p className="font-bold text-navy mb-1">Our Recommendation:</p>
                    <p>
                      We <strong>strongly recommend</strong> signing up for SAT (Smoke Alarm Testing) services, which we coordinate for you. The cost is <strong>$116 + GST per annum</strong>. This comprehensive service includes yearly checks, testing between tenancies, and free replacement of faulty or expired alarms.
                    </p>
                  </div>
                </div>
              </div>

              <div className="border-l-4 border-navy bg-wash p-6 shadow-sm">
                <h3 className="font-black text-lg text-navy uppercase tracking-tight mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-teal" /> Seriously, are there ANY hidden costs?
                </h3>
                <p className="font-mono text-sm text-ink-light">
                  <strong>ZERO.</strong> Advertising, screening, rent collection, reporting, inspections, maintenance coordination... it is ALL included in our simple 8% + GST fee.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* REAL TALK DISCLAIMER (Moved below FAQ) */}
        <section className="py-24 bg-wash relative border-t-2 border-navy">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto border-l-8 border-navy pl-8 md:pl-12 py-4">
              <div className="flex items-center gap-4 mb-6">
                <Fingerprint className="w-10 h-10 text-navy/40" />
                <span className="font-mono text-xs font-bold text-navy/40 uppercase tracking-widest">> HUMAN_PROTOCOL_OVERRIDE</span>
              </div>

              <h2 className="text-2xl md:text-3xl font-black text-navy tracking-tight mb-6">
                A Real & Raw Disclaimer.
              </h2>

              <div className="prose prose-navy font-mono text-sm md:text-base leading-relaxed text-ink-light space-y-4">
                <p>
                  We always endeavour to provide the best property management service possible, but we'll be honest: <strong>we're not perfect.</strong>
                </p>
                <p>
                  Sometimes mistakes are made. At the end of the day, we are all human.
                </p>
                <p>
                  However, we have been doing this for a long time. In the <strong>overwhelming majority</strong> of cases, things go smoothly, and both landlords and tenants are happy with the service we provide.
                </p>
                <p>
                  The majority of our clients actually come from existing landlord referrals or existing landlords buying new properties—which is the best vote of confidence we could ask for.
                </p>
                <div className="bg-white border-2 border-navy p-6 mt-8 shadow-hard">
                  <h4 className="font-bold text-navy uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-teal" /> The "Make It Right" Guarantee
                  </h4>
                  <p>
                    If you're not happy with our service or if we've slipped up, let us know. We will fix it, and we'll offer you <strong>three months of 0% management</strong> to make it right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* CTA Section */}
        <section className="bg-navy py-24 text-white text-center border-t-8 border-teal">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Ready to Transform Your <br /> Property Management?</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto mb-12 font-mono">
              Join thousands of property owners who trust us with their investments. Start your journey towards effortless property management today.
            </p>
            <Button className="h-16 px-12 bg-teal text-navy font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-white transition-all border-2 border-teal">
              Get Started Now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Pricing;