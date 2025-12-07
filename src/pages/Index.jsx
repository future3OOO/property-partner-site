import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import BenefitsSection from '../components/BenefitsSection';
import RentalAppraisalSection from '../components/RentalAppraisalSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CallToActionSection from '../components/CallToActionSection';
import Footer from '../components/Footer';


const Index = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      <main className="flex-grow">
        <HeroSection />
        <ServicesSection />
        <BenefitsSection />
        <TestimonialsSection />
        <RentalAppraisalSection />
        <CallToActionSection />
      </main>
      <Footer />

    </div>
  );
};

export default Index;