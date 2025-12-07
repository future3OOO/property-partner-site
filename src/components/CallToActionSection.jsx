import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CallToActionSection = () => {
  return (
    <section className="py-32 bg-navy relative overflow-hidden">
      {/* Structural Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#112240_1px,transparent_1px),linear-gradient(to_bottom,#112240_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto border-4 border-teal bg-navy p-12 md:p-20 relative">

          {/* Decorators */}
          <div className="absolute top-0 left-0 w-8 h-8 border-r-4 border-b-4 border-teal bg-navy -translate-x-1 -translate-y-1" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-l-4 border-t-4 border-teal bg-navy translate-x-1 translate-y-1" />

          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-6 border border-teal/30 px-3 py-1 bg-teal/10">
              <div className="w-2 h-2 bg-teal animate-pulse" />
              <span className="font-mono text-xs uppercase tracking-widest text-teal">System Ready</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 leading-[0.85] tracking-tighter text-balance">
              EXECUTE
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal/70">GROWTH_PROTOCOL</span>
            </h2>

            <p className="font-mono text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed border-l-2 border-teal/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
              &gt; Initialize portfolio optimization.<br />
              &gt; deploy advanced management assets.
            </p>

            <Button className="h-16 px-12 bg-teal text-navy font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-white hover:text-navy transition-all hover:-translate-y-1 hover:shadow-[4px_4px_0_0_#fff]">
              Start_Sequence <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;