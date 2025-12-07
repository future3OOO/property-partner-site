import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Camera, ArrowRight, Grid, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const GalleryItem = ({ image, title, location, tag }) => (
    <div className="group relative overflow-hidden bg-navy border-2 border-navy aspect-[4/5] md:aspect-square">
        <img
            src={image}
            alt={title}
            className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out grayscale group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <span className="font-mono text-[10px] text-teal uppercase tracking-widest bg-navy/80 px-2 py-1 inline-block mb-3 border border-teal/20 backdrop-blur-sm">
                {tag}
            </span>
            <h3 className="text-xl font-black text-white uppercase leading-none mb-1">{title}</h3>
            <p className="font-mono text-xs text-white/60 flex items-center gap-2">
                <MapPin className="w-3 h-3" /> {location}
            </p>
        </div>
    </div>
);

const AvailableRentals = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-wash">
      <Helmet>
        <title>Rentals Available Christchurch | Property Partner</title>
        <meta name="description" content="Browse available rental properties in Christchurch managed by Property Partner. Quality homes across Canterbury with professional property management." />
        <meta name="keywords" content="rentals Christchurch, houses for rent Canterbury, rental properties NZ, available rentals Christchurch" />
        <link rel="canonical" href="https://propertypartner.co.nz/available-rentals" />
        <meta property="og:title" content="Rentals Available Christchurch | Property Partner" />
        <meta property="og:description" content="Browse available rental properties in Christchurch managed by Property Partner. Quality homes across Canterbury with professional property management." />
        <meta property="og:url" content="https://propertypartner.co.nz/available-rentals" />
      </Helmet>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <main className="flex-grow pt-24">
                {/* HERO SECTION */}
                <section className="bg-navy text-white py-16 md:py-24 border-b-8 border-teal relative overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    <div className="container mx-auto px-6 relative z-10">
                        <div className="max-w-4xl">
                            <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; TENANT_SERVICES // RENTALS</span>
                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 md:mb-8 tracking-tighter leading-none">
                                AVAILABLE <br /> LISTINGS
                            </h1>
                            <p className="text-lg md:text-xl text-white/60 max-w-2xl font-mono border-l-4 border-teal pl-6">
                                Explore our portfolio of premium rental properties. Browse active listings or view our standard of presentation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TRADE ME LINK SECTION */}
                <section className="py-16 md:py-24 bg-white relative z-20 -mt-12">
                    <div className="container mx-auto px-6">
                        <div className="bg-navy text-white p-6 md:p-12 border-4 border-teal relative overflow-hidden group hover:shadow-[12px_12px_0_0_rgba(13,148,136,0.2)] transition-shadow duration-300">
                            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
                                <div className="flex-1 w-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
                                        <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest">Live Feed Integration</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tighter uppercase leading-none">Browse Current Availability</h2>
                                    <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-2xl font-light mb-8">
                                        All our active vacancies are listed directly on Trade Me. Visit our agency profile to apply for viewings and submit applications.
                                    </p>

                                    <div className="bg-white/10 border-l-4 border-teal p-6 mb-8 max-w-3xl backdrop-blur-sm">
                                        <h3 className="font-bold text-teal uppercase tracking-widest text-sm mb-2">Application Process</h3>
                                        <p className="font-mono text-xs md:text-sm text-white/80 mb-4 leading-relaxed">
                                            To arrange a viewing, you <strong>must submit an inquiry on the Trade Me listing</strong>.
                                        </p>
                                        <p className="font-mono text-xs md:text-sm text-white/80 leading-relaxed">
                                            Anyone who attends a viewing will be automatically sent an application link. You can also view our <a href="/rental-application" className="text-teal underline decoration-teal underline-offset-4 hover:text-white transition-colors">standard application form here</a>.
                                        </p>
                                    </div>

                                </div>
                                <div className="shrink-0 w-full lg:w-auto">
                                    <Button
                                        asChild
                                        className="h-16 md:h-20 px-8 md:px-12 bg-teal text-navy font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-white hover:text-navy border-2 border-teal transition-all w-full lg:w-auto"
                                    >
                                        <a href="https://www.trademe.co.nz/a/property/office/5713372" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4">
                                            Open Trade Me <ExternalLink className="w-6 h-6" />
                                        </a>
                                    </Button>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                                <Grid className="w-48 h-48 md:w-64 md:h-64" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* GALLERY SECTION */}
                <section className="py-16 md:py-24 bg-wash">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
                            <div>
                                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; VISUAL_ARCHIVE</span>
                                <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tighter uppercase">Presentation Standard</h2>
                            </div>
                            <div className="font-mono text-xs text-navy/60 max-w-md text-left md:text-right border-l-4 md:border-l-0 md:border-r-4 border-teal pl-4 md:pl-0 md:pr-4">
                                We pride ourselves on professional photography and immaculate presentation for every listing.
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            <GalleryItem
                                image="https://images.unsplash.com/photo-1600596542815-e328701102b9?auto=format&fit=crop&q=80"
                                title="The Glass House"
                                location="Mount Victoria, Wellington"
                                tag="Leased // Premium"
                            />
                            <GalleryItem
                                image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80"
                                title="Orakei Penthouse"
                                location="Orakei, Auckland"
                                tag="Leased // Luxury"
                            />
                            <GalleryItem
                                image="https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80"
                                title="Urban Loft"
                                location="Te Aro, Wellington"
                                tag="Available Now"
                            />
                            <GalleryItem
                                image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
                                title="Seaside Villa"
                                location="Sumner, Christchurch"
                                tag="Leased"
                            />
                            <GalleryItem
                                image="https://images.unsplash.com/photo-1512918760383-eda2723ad6e1?auto=format&fit=crop&q=80"
                                title="City Point Apartments"
                                location="Auckland CBD"
                                tag="Portfolio Highlight"
                            />
                            <div className="bg-navy p-8 flex flex-col justify-center items-center text-center border-2 border-navy group cursor-pointer hover:bg-teal transition-colors aspect-[4/5] md:aspect-square">
                                <Camera className="w-12 h-12 text-teal mb-6 group-hover:text-navy transition-colors" />
                                <h3 className="text-2xl font-black text-white mb-2 uppercase group-hover:text-navy">List With Us</h3>
                                <p className="font-mono text-xs text-white/60 mb-8 group-hover:text-navy/70">
                                    Experience our premium marketing package for your investment property.
                                </p>
                                <Button className="bg-transparent border-2 border-white/20 text-white font-mono text-xs uppercase hover:bg-white hover:text-navy group-hover:border-navy group-hover:text-navy">
                                    Owner Services
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

export default AvailableRentals;
