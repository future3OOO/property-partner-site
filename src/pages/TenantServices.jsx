import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Wrench, FolderOpen, Plus, Minus, CreditCard, MessageSquare, Phone, ArrowRight, Search, ClipboardCheck, ExternalLink } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Accordion Component for FAQ Matrix
const AccordionItem = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-navy/10 last:border-0 bg-white">
    <button
      onClick={onClick}
      className="w-full flex justify-between items-center py-8 text-left group hover:bg-wash transition-colors px-6 md:px-8 focus:outline-none"
    >
      <div className="flex items-center gap-4">
        <span className={`font-mono text-xl font-bold uppercase tracking-tighter transition-colors ${isOpen ? 'text-teal' : 'text-navy group-hover:text-teal'}`}>
          {isOpen ? '[-]' : '[+]'}
        </span>
        <span className={`font-black text-lg md:text-xl uppercase tracking-tight transition-colors ${isOpen ? 'text-teal' : 'text-navy group-hover:text-teal'}`}>
          {title}
        </span>
      </div>
    </button>
    <div
      className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
    >
      <div className="overflow-hidden">
        <div className="px-6 md:px-8 pb-8 pt-2 font-mono text-sm text-ink-light leading-relaxed max-w-4xl space-y-4">
          {children}
        </div>
      </div>
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, tag, desc, action, link }) => (
  <div className="bg-white border-2 border-navy p-8 flex flex-col justify-between group hover:shadow-hard-teal hover:-translate-y-1 transition-all duration-300 relative overflow-hidden h-full">
    <div className="relative z-10">
      <div className="flex justify-between items-start mb-6">
        <div className="w-14 h-14 bg-navy text-white flex items-center justify-center border-2 border-navy group-hover:bg-teal group-hover:text-navy group-hover:border-navy transition-colors">
          <Icon className="w-7 h-7" />
        </div>
        <span className="font-mono text-[10px] font-bold text-teal uppercase tracking-widest bg-navy/5 px-2 py-1">{tag}</span>
      </div>
      <h3 className="text-3xl font-black text-navy mb-4 uppercase tracking-tighter">{title}</h3>
      <p className="font-mono text-sm text-ink mb-8 leading-relaxed border-l-2 border-teal/30 pl-4">{desc}</p>
    </div>

    {link ? (
      <Link to={link} className="w-full block mt-auto relative z-10">
        <Button className="w-full h-14 bg-navy text-white font-mono text-xs font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy border-2 border-navy transition-all flex items-center justify-between px-6">
          {action} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </Button>
      </Link>
    ) : (
      <Button className="w-full h-14 bg-navy text-white font-mono text-xs font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy border-2 border-navy transition-all flex items-center justify-between px-6 mt-auto relative z-10">
        {action} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </Button>
    )}

    {/* Decorative Background */}
    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-teal/5 rounded-full blur-3xl group-hover:bg-teal/10 transition-colors pointer-events-none" />
  </div>
);

const TenantServices = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openSection, setOpenSection] = useState('');

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? '' : section);
  };

  return (
    <div className="flex flex-col min-h-screen bg-wash">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <main className="flex-grow pt-24">
        {/* HERO SECTION */}
        <section className="bg-navy text-white py-20 md:py-32 border-b-8 border-teal relative overflow-hidden">
          {/* Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl">
              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-6 block">&gt; RESIDENT_ACCESS_TERMINAL</span>
              <h1 className="text-6xl md:text-9xl font-black text-white mb-8 tracking-tighter leading-none">
                TENANT <br /> SERVICES
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl font-mono border-l-4 border-teal pl-8 leading-relaxed">
                Secure access to maintenance protocols, tenancy protocols, and tenancy resources.
              </p>
            </div>
          </div>
        </section>

        {/* SERVICE CARDS */}
        <section className="py-24 -mt-16 relative z-20">
          <div className="container mx-auto px-6">
            <span className="font-mono text-xs font-bold text-navy bg-white px-2 py-1 mb-4 inline-block border-2 border-navy uppercase tracking-widest mb-12">&gt; QUICK_ACCESS</span>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={Wrench}
                title="Maintenance"
                tag="PRIORITY_1"
                desc="Initiate repair protocols. Track request status in real-time."
                action="Log Request"
                link="/services/maintenance"
              />
              <ServiceCard
                icon={CreditCard}
                title="Payments"
                tag="SECURE_GATEWAY"
                desc="Secure transaction gateway for rent and invoice processing."
                action="Access Ledger"
              />
              <ServiceCard
                icon={FolderOpen}
                title="Resources"
                tag="INFO_HUB"
                desc="Tenancy guides, move-out checklists, and cleaning responsibilities."
                action="View Guides"
                link="/tenant-resources"
              />
              <ServiceCard
                icon={ClipboardCheck}
                title="Inspections"
                tag="COMPLIANCE"
                desc="Quarterly property inspections with 10 days advance notice. Times are confirmed with you first—we don't just turn up."
                action="Learn More"
              />
              <ServiceCard
                icon={Search}
                title="Rentals"
                tag="LISTINGS"
                desc="Browse current listings and view available properties."
                action="Search Now"
                link="/available-rentals"
              />
            </div>
          </div>
        </section>

        {/* OUR APPROACH */}
        <section className="py-24 bg-white border-y-2 border-navy">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; RELATIONSHIP_PROTOCOL</span>
                <h2 className="text-5xl font-black text-navy mb-8 tracking-tighter uppercase leading-none">FAIR & <br />TRANSPARENT</h2>
                <div className="font-mono text-[10px] text-white bg-navy inline-block px-3 py-1 uppercase tracking-widest mb-8">
                  &gt; PRIORITY: TENANT SATISFACTION
                </div>
              </div>
              <div className="space-y-6 text-lg text-ink leading-relaxed font-medium">
                <p>
                  We always try to be fair and transparent in everything we do. We're not perfect—but we will go the extra mile to ensure all parties are happy throughout a tenancy.
                </p>
                <p className="text-ink-light">
                  While we're employed by and represent the landlord's interests, we also represent yours. Our key focus is ensuring you're happy throughout your tenancy. A property manager is more like a relationship manager these days—balancing the needs of both tenants and landlords to maintain a positive experience for everyone.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* FAQ MATRIX */}
        <section className="py-24 bg-wash">
          <div className="container mx-auto px-6">
            <div className="mb-12">
              <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">KNOWLEDGE_BASE</span>
              <h2 className="text-4xl font-black text-navy mb-8 tracking-tighter">FAQ MATRIX</h2>
            </div>

            <div className="border-t-2 border-navy">
              <AccordionItem
                title="How can I apply for a property you have listed?"
                isOpen={openSection === 'apply'}
                onClick={() => toggleSection('apply')}
              >
                <p>You can apply for a property by visiting our <Link to="/rental-application" className="text-teal underline font-bold">application page</Link>.</p>
              </AccordionItem>

              <AccordionItem
                title="How should problems during a tenancy be reported?"
                isOpen={openSection === 'problems'}
                onClick={() => toggleSection('problems')}
              >
                <p className="mb-4">If you encounter any problems or maintenance issues during your tenancy, report them promptly to ensure they're addressed in a timely manner.</p>
                <strong className="block text-navy mb-2">How to report:</strong>
                <p className="mb-4">Visit our <Link to="/services/maintenance" className="text-teal underline font-bold">maintenance page</Link> for detailed instructions on submitting a request.</p>
                <strong className="block text-navy mb-2">Information to include:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Your name and contact information</li>
                  <li>The property address</li>
                  <li>A detailed description of the issue</li>
                  <li>Any relevant photos or videos</li>
                </ul>
              </AccordionItem>

              <AccordionItem
                title="How do routine inspections work?"
                isOpen={openSection === 'inspections'}
                onClick={() => toggleSection('inspections')}
              >
                <p className="mb-4">We conduct routine inspections quarterly to maintain the property and meet insurance requirements.</p>
                <strong className="block text-navy mb-2">What to expect:</strong>
                <ul className="list-disc pl-5 space-y-1">
                  <li>You'll receive a minimum of 10 days advance notice</li>
                  <li>We'll confirm a time that suits you before scheduling—we don't just turn up</li>
                  <li>Following the inspection, both you and the landlord receive a report</li>
                </ul>
              </AccordionItem>

              <AccordionItem
                title="Can I have a pet at the property?"
                isOpen={openSection === 'pets'}
                onClick={() => toggleSection('pets')}
              >
                <div className="bg-teal/10 p-4 border-l-4 border-teal mb-6">
                  <p className="font-bold text-navy">From 1 December 2025, new pet provisions under the Residential Tenancies Amendment Act 2024 apply to all new tenancies.</p>
                </div>

                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-2">The application process:</h4>
                <p className="mb-4">No pet is permitted unless you have obtained the landlord's prior written consent. You must submit a written application describing the type and number of pets you wish to keep. The landlord will respond in writing within 21 calendar days.</p>

                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-2">How requests are assessed:</h4>
                <p className="mb-2">We consider all pet requests fairly. The landlord may approve or decline based on reasonable grounds. Valid reasons for declining include:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>The property is unsuitable for the pet (size, fencing, layout, or unique features)</li>
                  <li>Body corporate rules or council bylaws prohibit the pet</li>
                  <li>The pet is classified as dangerous or menacing under the Dog Control Act 1996</li>
                  <li>The pet has a propensity for causing damage or disruption to neighbours</li>
                  <li>You haven't agreed to reasonable conditions proposed by the landlord</li>
                  <li>You've previously failed to comply with pet-related conditions</li>
                </ul>

                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-2">If consent is given:</h4>
                <p className="mb-2">The landlord may require a pet bond (maximum two weeks' rent, in addition to your regular bond) and may impose reasonable conditions. These are formalised in a pet agreement and may include:</p>
                <ul className="list-disc pl-5 space-y-1 mb-4">
                  <li>Restrictions on the type or number of pets</li>
                  <li>Carpets to be professionally cleaned at the end of tenancy</li>
                  <li>Pets to be restrained during the landlord's lawful entry to the property</li>
                  <li>Compliance with local council bylaws (registration, microchipping, etc.)</li>
                </ul>

                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-2">Your liability:</h4>
                <p className="mb-4">You are fully liable for all damage caused by your pet beyond fair wear and tear. This liability is not capped and applies jointly to all named tenants on the agreement.</p>

                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-2">Disability assist dogs:</h4>
                <p>Certified disability assist dogs are exempt from these rules—no consent is required and no pet bond can be charged. For context, there are only around 350 certified disability assist dogs in New Zealand. Companion animals and therapy dogs are not exempt and are treated as standard pets under the Act.</p>
              </AccordionItem>

              <AccordionItem
                title="How do I end a tenancy?"
                isOpen={openSection === 'ending'}
                onClick={() => toggleSection('ending')}
              >
                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-2">Ending a fixed-term tenancy:</h4>
                <p className="mb-2">Around 90 days before your fixed-term end date, you'll receive a notification asking whether you'd like to extend for another term or move out. The landlord receives the same notification—so everyone's on the same page.</p>
                <p className="mb-4 text-xs bg-navy text-white p-2 border-l-2 border-teal">
                  <strong className="text-teal">Important:</strong> A tenancy does not automatically terminate on its end date unless explicitly stated in the contract. Most tenancy agreements automatically convert to a periodic tenancy. If you want to move out on the exact end date, you're still required to provide a minimum of 21 days notice.
                </p>

                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-2">Ending a periodic tenancy:</h4>
                <p className="mb-4">To end a periodic tenancy, provide a minimum of 21 days notice at any time.</p>

                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-2">How to send notice:</h4>
                <p className="mb-4">Email your notice to: <a href="mailto:mckenzie@propertypartner.co.nz" className="text-teal underline font-bold">mckenzie@propertypartner.co.nz</a></p>

                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-2">When does the notice period start?</h4>
                <p className="mb-4">The notice period begins the day after we receive it. For example, if you email notice on Monday before 5pm, your 21-day period starts from Tuesday.</p>

                <h4 className="font-bold text-navy uppercase text-xs tracking-wider mb-2">Further information:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li><a href="https://www.tenancy.govt.nz/ending-a-tenancy/giving-notice-to-end-tenancy/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Giving notice to end tenancy</a></li>
                  <li><a href="https://www.tenancy.govt.nz/ending-a-tenancy/serving-notices/" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">Serving notices</a></li>
                </ul>
              </AccordionItem>

              <AccordionItem
                title="What are my responsibilities during a tenancy?"
                isOpen={openSection === 'responsibilities'}
                onClick={() => toggleSection('responsibilities')}
              >
                <p>Visit our Resources section for guides on tenant responsibilities, cleaning standards, and move-out procedures.</p>
              </AccordionItem>
            </div>
          </div>
        </section>

        {/* SUPPORT PANEL */}
        <section className="bg-navy text-white py-16">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal">● LIVE_SUPPORT</span>
                </div>
                <h2 className="text-3xl font-black uppercase tracking-tighter mb-2">Need Assistance?</h2>
                <p className="font-mono text-sm text-white/60">Our team is online. Initiate a support ticket or call directly.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Button className="h-16 px-8 bg-teal text-navy font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-white hover:text-navy border-2 border-teal transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                  <MessageSquare className="w-5 h-5" /> [ 💬 START CHAT ]
                </Button>
                <Button className="h-16 px-8 bg-transparent text-white font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-white hover:text-navy border-2 border-white/20 hover:border-white transition-all flex items-center justify-center gap-3 w-full sm:w-auto">
                  <Phone className="w-5 h-5" /> [ 📞 0800 PROPERTY ]
                </Button>
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default TenantServices;
