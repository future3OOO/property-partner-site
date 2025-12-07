import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        <title>Property Partner | Christchurch Property Management | Property Partner</title>
        <meta name="description" content="Professional property management in Christchurch, NZ. 8% + GST flat rate, no hidden fees. Trusted by landlords across Canterbury for tenant finding, maintenance, and full property management." />
        <meta name="keywords" content="property management Christchurch, property manager NZ, rental management Canterbury, landlord services Christchurch" />
        <link rel="canonical" href="https://propertypartner.co.nz/" />
        <meta property="og:title" content="Property Partner | Christchurch Property Management | Property Partner" />
        <meta property="og:description" content="Professional property management in Christchurch, NZ. 8% + GST flat rate, no hidden fees. Trusted by landlords across Canterbury for tenant finding, maintenance, and full property management." />
        <meta property="og:url" content="https://propertypartner.co.nz/" />
      </Helmet>
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