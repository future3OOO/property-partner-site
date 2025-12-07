import React from 'react';
import { Check, Star, Zap, Shield, Smartphone, FileText, UserCheck, PieChart } from 'lucide-react';

const BenefitCard = ({ icon: Icon, title, desc, tag }) => (
  <div className="bg-white border-2 border-navy p-6 hover:bg-navy transition-all duration-200 group relative overflow-hidden">
    <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
      <span className="font-mono text-[10px] text-teal border border-teal px-1">SPEC_{tag}</span>
    </div>

    <div className="mb-6">
      <Icon className="w-8 h-8 text-navy group-hover:text-teal transition-colors" />
    </div>

    {/* Bottom Right Dot */}
    <div className="absolute bottom-4 right-4 w-2 h-2 bg-navy group-hover:bg-teal transition-colors" />
    <h3 className="text-lg font-black text-navy mb-2 uppercase tracking-tight group-hover:text-white transition-colors">{title}</h3>
    <p className="text-sm font-mono text-ink-light group-hover:text-white/70 transition-colors">{desc}</p>
  </div>
);

const BenefitsSection = () => {
  const benefits = [
    { icon: Zap, title: "Transparent Pricing", desc: "No hidden fees - transparent 8.5% management fee", tag: "COST" },
    { icon: Star, title: "Professional Media", desc: "High-fidelity photography assets included", tag: "VISUAL" },
    { icon: FileText, title: "Detailed Reports", desc: "Granular property condition analytics", tag: "DATA" },
    { icon: Shield, title: "Regular Inspections", desc: "Quarterly physical asset verification", tag: "SECURE" },
    { icon: UserCheck, title: "24/7 Support", desc: "Round-the-clock maintenance coordination", tag: "LIVE" },
    { icon: UserCheck, title: "Personal Manager", desc: "Dedicated account executive", tag: "HUMAN" },
    { icon: Smartphone, title: "Online Portal", desc: "Real-time owner dashboard access", tag: "DIGITAL" },
    { icon: PieChart, title: "Financial Reports", desc: "Monthly fiscal performance summaries", tag: "FISCAL" }
  ];

  return (
    <section className="py-24 bg-white border-t-2 border-navy">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest mb-2 block">{'>'} SYSTEM_SPECS</span>
            {/* STRICT TYPOGRAPHY IMPLEMENTATION */}
            <h2 className="anti-h2 text-navy tracking-tighter leading-none">
              FULL_STACK <br />
              MANAGEMENT
            </h2>
          </div>
          <div className="hidden md:block">
            <div className="w-24 h-24 border-2 border-navy relative flex items-center justify-center">
              <div className="absolute inset-0 border-2 border-teal translate-x-2 translate-y-2" />
              <Zap className="w-8 h-8 text-navy" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefits.map((item, i) => (
            <BenefitCard key={i} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;