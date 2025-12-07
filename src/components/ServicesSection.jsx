import React from 'react';
import { ArrowRight, Shield, Users, FileCheck, BarChart3, Terminal } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, desc, id, className, variant = 'default' }) => {
  const isFeatured = variant === 'featured';

  return (
    <div className={`
      flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 shadow-hard hover:shadow-hard-lg 
      ${isFeatured
        ? 'bg-navy border-2 border-teal hover:border-white'
        : 'bg-white border-2 border-navy hover:border-teal'} 
      ${className}
    `}>

      {/* TERMINAL HEADER */}
      <div className={`p-2 flex justify-between items-center transition-colors duration-300 ${isFeatured ? 'bg-teal group-hover:bg-white' : 'bg-navy group-hover:bg-teal'}`}>
        <div className="flex items-center gap-2">
          <Terminal className={`w-4 h-4 transition-colors ${isFeatured ? 'text-navy group-hover:text-navy' : 'text-teal group-hover:text-navy'}`} />
          <span className={`font-mono text-[10px] font-bold uppercase tracking-widest transition-colors ${isFeatured ? 'text-navy' : 'text-white/70 group-hover:text-navy'}`}>
            SYS_MOD_{id}
          </span>
        </div>
        <div className="flex gap-1">
          <div className={`w-2 h-2 rounded-full transition-colors ${isFeatured ? 'bg-navy/20' : 'bg-white/20 group-hover:bg-navy/20'}`} />
          <div className={`w-2 h-2 rounded-full transition-colors ${isFeatured ? 'bg-navy/20' : 'bg-white/20 group-hover:bg-navy/20'}`} />
          <div className={`w-2 h-2 rounded-full animate-pulse transition-colors ${isFeatured ? 'bg-navy' : 'bg-teal group-hover:bg-navy'}`} />
        </div>
      </div>

      {/* CONTENT BODY */}
      <div className="p-8 flex flex-col flex-grow relative overflow-hidden">
        {/* Subtle Grid */}
        <div className={`absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:1rem_1rem] -z-10 transition-opacity ${isFeatured ? 'opacity-[0.03]' : 'opacity-50 group-hover:opacity-100'}`} />

        <div className="flex justify-between items-start mb-6 z-10">
          <div className={`w-12 h-12 border-2 flex items-center justify-center transition-colors shadow-hard-sm 
                ${isFeatured
              ? 'border-teal bg-navy group-hover:bg-teal group-hover:border-white'
              : 'border-navy bg-white group-hover:border-teal group-hover:bg-teal/10'}`}>
            <Icon className={`w-6 h-6 transition-colors ${isFeatured ? 'text-teal group-hover:text-navy' : 'text-navy group-hover:text-teal'}`} />
          </div>
        </div>

        <h3 className={`text-xl font-black mb-4 uppercase tracking-tight transition-colors z-10 ${isFeatured ? 'text-white group-hover:text-teal' : 'text-navy group-hover:text-teal'}`}>{title}</h3>

        <p className={`text-sm font-mono leading-relaxed transition-colors z-10 flex-grow ${isFeatured ? 'text-white/70 group-hover:text-white' : 'text-ink-light group-hover:text-navy'}`}>
          {desc}
        </p>

        <div className={`mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest transition-colors pt-4 border-t-2 z-10 
            ${isFeatured
            ? 'text-teal border-teal/20 group-hover:text-white group-hover:border-white/20'
            : 'text-navy/40 border-navy/5 group-hover:text-teal group-hover:border-teal/20'}`}>
          <div className={`w-2 h-2 transition-opacity ${isFeatured ? 'bg-white' : 'bg-teal opacity-0 group-hover:opacity-100'}`} />
          Execute_Function <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  );
}

const ServicesSection = () => {
  return (
    <section className="py-24 bg-wash relative border-t-2 border-navy">
      <div className="container mx-auto px-6">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b-2 border-navy pb-6">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest mb-2 block">{'>'} SYSTEM_MODULES</span>
            <h2 className="anti-h2 text-navy tracking-tighter leading-none">
              MODERN <br /> SOLUTIONS
            </h2>
          </div>
          <div className="font-mono text-xs text-navy hidden md:block text-right">
            STATUS: ACTIVE<br />
            UPTIME: 99.9%
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <ServiceCard
            className="md:col-span-2"
            icon={Shield}
            id="01"
            title="Property Management"
            desc="Full-service property management including rent collection, maintenance coordination, and regular inspections. We handle the day-to-day operations with algorithmic precision."
            variant="featured"
          />

          <ServiceCard
            className="md:col-span-1"
            icon={Users}
            id="02"
            title="Tenant Selection"
            desc="Comprehensive tenant screening with thorough background checks and credit validation protocols. We filter signal from noise."
          />

          <ServiceCard
            className="md:col-span-1"
            icon={FileCheck}
            id="03"
            title="Compliance"
            desc="Automated regulatory alignment including Healthy Homes Standards and legislative updates. Zero latency compliance."
          />

          <ServiceCard
            className="md:col-span-2"
            icon={BarChart3}
            id="04"
            title="Relationship Management"
            desc="Optimizing landlord-tenant relations through structured communication channels and transparent dispute resolution protocols."
          />

        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
