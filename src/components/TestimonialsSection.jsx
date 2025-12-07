import React, { useRef } from 'react';
import { Quote, ArrowRight, ArrowLeft, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";

const TestimonialCard = ({ name, role, quote, hash }) => (
  // Fixed width card for carousel
  <div className="min-w-[85vw] md:min-w-[450px] h-full border-2 border-navy bg-white p-8 md:p-10 flex flex-col relative group hover:-translate-y-1 transition-transform duration-300 shadow-hard hover:shadow-none snap-start">

    {/* Tech Decorator - Top Right */}
    <div className="absolute top-0 right-0 p-2">
      <span className="font-mono text-[10px] text-teal border border-teal/30 px-1 bg-teal/5">{hash}</span>
    </div>

    <div className="mb-6 flex justify-between items-start">
      <Quote className="w-8 h-8 text-navy fill-current opacity-20" />
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map(i => (
          <Star key={i} className="w-3 h-3 text-teal fill-current" />
        ))}
      </div>
    </div>

    <p className="font-sans text-lg md:text-xl font-medium leading-relaxed mb-8 text-navy flex-grow text-pretty">
      "{quote}"
    </p>

    <div className="mt-auto border-t-2 border-navy/10 pt-4">
      <div className="font-black uppercase tracking-wide text-sm md:text-base text-navy">{name}</div>
      <div className="text-xs font-mono font-bold text-teal uppercase tracking-widest mt-1 opacity-80">{role}</div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 480; // Adjusted for new card width
      scrollContainerRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  const reviews = [
    {
      hash: "#LOG_PL2024",
      quote: "The day McKenzie took the management over it took a weight off my shoulders. That resulted in years of having the confidence to never having to visit the properties. We cannot speak highly enough of him and his management company.",
      name: "PAUL LINDSAY",
      role: "PROPERTY OWNER"
    },
    {
      hash: "#LOG_AM2024",
      quote: "Very thorough in vetting tenants—not once was the rent outstanding or damage caused. Regular inspections and updates were the norm. His end of year accounting summary made it very easy for my accountant. The small commission is worth it for peace of mind.",
      name: "ALLAN MCLAREN",
      role: "PROPERTY OWNER | 6 YEARS"
    },
    {
      hash: "#LOG_SD2020",
      quote: "McKenzie outperformed in terms of rental income to the point where he covered his own fee. In a world filled with property managers who add no value yet charge too much, Property Partner stand out as the best.",
      name: "SEAN DUDSON",
      role: "PROPERTY OWNER"
    },
    {
      hash: "#LOG_AS2020",
      quote: "I had a lot of property managers, and must say that McKenzie was definitely the best. Very professional, supportive and fair. He replied immediately when I had a concern and resolved issues straight away.",
      name: "ANNA SHEVCHENKO",
      role: "TENANT | 18 MONTHS"
    },
    {
      hash: "#LOG_JM2020",
      quote: "Their inspections are extremely thorough and the report they provide gives great insight on all areas of your rental. Someone I can trust and turn to if I have any questions. Amazing service at a fair price.",
      name: "JAKE MITCHELL",
      role: "PROPERTY OWNER | 2 YEARS"
    },
    {
      hash: "#LOG_PM2024",
      quote: "Any issue that has arisen has been resolved swiftly and painlessly. My children and I greatly appreciate the hassle-free nature of working with Property Partner.",
      name: "PETER MALTHUS",
      role: "TENANT"
    },
    {
      hash: "#LOG_SC2024",
      quote: "Excellent communication, easy and effective management. McKenzie goes above and beyond and I would highly recommend him to anyone.",
      name: "SARAH CAWSTON",
      role: "PROPERTY OWNER"
    },
    {
      hash: "#LOG_QX2023",
      quote: "After contacting several agents, McKenzie was the most professional. Every step was perfect—healthy home assessment, advertisement, finding tenants. Not only professional, but also very responsible.",
      name: "QING XU",
      role: "FIRST-TIME LANDLORD"
    }
  ];

  return (
    <section className="py-24 bg-wash border-t-2 border-navy relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#112240_1px,transparent_1px),linear-gradient(to_bottom,#112240_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-[0.03] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="mb-12 md:mb-16 flex flex-col md:flex-row justify-between items-center md:items-end gap-6 text-center md:text-left">
          <div className="max-w-2xl">
            <span className="text-xs font-mono font-bold text-teal uppercase tracking-widest mb-2 block">{'>'} VERIFIED_CLIENT_LOGS</span>
            <h2 className="anti-h2 text-navy tracking-tighter">PROVEN_TRACK_RECORD</h2>
          </div>

          {/* Navigation Controls */}
          <div className="hidden md:flex gap-2">
            <Button onClick={() => scroll('left')} variant="outline" className="h-12 w-16 p-0 border-2 border-navy rounded-none hover:bg-navy hover:text-white transition-colors group">
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            </Button>
            <Button onClick={() => scroll('right')} variant="outline" className="h-12 w-16 p-0 border-2 border-navy rounded-none hover:bg-navy hover:text-white transition-colors group">
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>

        {/* Reviews Carousel - Horizontal Scoll on ALL devices */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
        >
          {reviews.map((item, i) => (
            <TestimonialCard key={i} {...item} />
          ))}
        </div>

        {/* Mobile Swipe Indicator */}
        <div className="md:hidden flex justify-center mt-4 mb-8 gap-2">
          <span className="text-[10px] font-mono text-navy/50 uppercase flex items-center gap-2">
            <ArrowLeft className="w-3 h-3" /> Swipe to navigate <ArrowRight className="w-3 h-3" />
          </span>
        </div>

        {/* Footer CTA */}
        <div className="flex justify-center mt-8 md:mt-12 pt-8 border-t-2 border-navy/10">
          <a
            href="https://www.google.com/search?q=Property+Partner+Google+Reviews&rlz=1C1GCEA_enNZ1077NZ1077&oq=Property+Partner+Google+Reviews&gs_lcrp=EgZjaHJvbWUyBggAEEUYOdIBBzM1OGowajSoAgCwAgE&sourceid=chrome&ie=UTF-8#lrd=0x6d318914bd3ff977:0x89fd895e369954ff,1,,,,"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="ghost" className="font-mono text-xs md:text-sm font-bold uppercase tracking-widest text-navy border-2 border-transparent hover:border-navy hover:bg-white rounded-none h-14 px-8">
              [ View all reviews on Google <ArrowRight className="w-4 h-4 ml-2" /> ]
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;