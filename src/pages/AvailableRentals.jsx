import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Camera, ArrowRight, Grid, MapPin, Home, Bed, Loader2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Trade Me Listing Card with Photo Carousel
const TradeMeListing = ({ listing }) => {
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const photos = listing.photos || [];

    const nextPhoto = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentPhoto((prev) => (prev + 1) % photos.length);
    };

    const prevPhoto = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentPhoto((prev) => (prev - 1 + photos.length) % photos.length);
    };

    const selectPhoto = (e, index) => {
        e.preventDefault();
        e.stopPropagation();
        setCurrentPhoto(index);
    };

    return (
        <div className="group relative overflow-hidden bg-navy border-2 border-navy aspect-[3/2]">
            {/* Main Image */}
            <a
                href={listing.trademe_url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full pointer-events-none"
            >
                <img
                    src={photos[currentPhoto] || '/placeholder.svg'}
                    alt={`${listing.title} - Photo ${currentPhoto + 1}`}
                    loading="lazy"
                    decoding="async"
                    className="object-cover w-full h-full opacity-80 pointer-events-auto cursor-pointer group-hover:opacity-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/20 to-transparent opacity-100 pointer-events-none" />
            </a>

            {/* Photo Navigation Arrows */}
            {photos.length > 1 && (
                <>
                    <button
                        onClick={prevPhoto}
                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-navy/80 hover:bg-teal text-white hover:text-navy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 pointer-events-auto"
                        aria-label="Previous photo"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={nextPhoto}
                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-navy/80 hover:bg-teal text-white hover:text-navy flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-30 pointer-events-auto"
                        aria-label="Next photo"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </>
            )}

            {/* Photo Dots Selector */}
            {photos.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-30 pointer-events-auto">
                    {photos.map((_, index) => (
                        <button
                            key={index}
                            onClick={(e) => selectPhoto(e, index)}
                            className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentPhoto
                                ? 'bg-teal w-6'
                                : 'bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`View photo ${index + 1}`}
                        />
                    ))}
                </div>
            )}

            {/* Photo Counter */}
            {photos.length > 1 && (
                <div className="absolute top-4 right-4 bg-navy/80 backdrop-blur-sm px-2 py-1 z-30 pointer-events-auto">
                    <span className="font-mono text-[10px] text-white">
                        {currentPhoto + 1} / {photos.length}
                    </span>
                </div>
            )}

            {/* Content Overlay */}
            <a
                href={listing.trademe_url}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-0 left-0 right-0 p-6 z-10 pointer-events-none"
            >
                <span className="font-mono text-[10px] text-teal uppercase tracking-widest bg-navy/80 px-2 py-1 inline-block mb-3 border border-teal/20 backdrop-blur-sm">
                    {listing.price} {listing.bedrooms > 0 && `// ${listing.bedrooms} Bed`}
                </span>
                <h3 className="text-lg font-black text-white uppercase leading-tight mb-1 line-clamp-2">{listing.title}</h3>
                <p className="font-mono text-xs text-white/60 flex items-center gap-2">
                    <MapPin className="w-3 h-3" /> {listing.address}
                </p>
                <div className="mt-3 flex items-center gap-2 text-teal font-mono text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>View on Trade Me</span>
                    <ExternalLink className="w-3 h-3" />
                </div>
            </a>
        </div>
    );
};

const AvailableRentals = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [listings, setListings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/listings/listings.json')
            .then(res => {
                if (!res.ok) throw new Error('Failed to load listings');
                return res.json();
            })
            .then(data => {
                setListings(data);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error loading listings:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-wash">
            <Helmet>
                <title>Rentals Available Christchurch | Property Partner</title>
                <meta name="description" content="Browse available rental properties in Christchurch managed by Property Partner. Quality homes across Canterbury with professional property management." />
                <meta name="keywords" content="rentals Christchurch, houses for rent Canterbury, rental properties NZ, available rentals Christchurch" />
                <link rel="canonical" href="https://propertypartner.co.nz/available-rentals" />
                <meta property="og:title" content="Rentals Available Christchurch | Property Partner" />
                <meta property="og:description" content="Browse available rental properties in Christchurch managed by Property Partner." />
                <meta property="og:url" content="https://propertypartner.co.nz/available-rentals" />
            </Helmet>
            <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

            <main className="flex-grow pt-24">
                {/* HERO SECTION */}
                <section className="bg-navy text-white py-20 md:py-32 border-b-8 border-teal relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
                    {/* Subtle spotlight effect instead of heavy gradient */}
                    <div className="absolute top-0 right-0 w-[50%] h-full bg-teal/5 blur-3xl rounded-full translate-x-1/2" />

                    <div className="container mx-auto px-6 relative z-30 pointer-events-auto">
                        <div className="max-w-4xl">
                            <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-6 block border-l-2 border-teal pl-3">
                                PROPERTY_PARTNER // RENTALS
                            </span>
                            <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white mb-8 tracking-tighter leading-[0.85]">
                                RENTAL <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal to-teal/60">LISTINGS</span>
                            </h1>
                            <p className="text-lg md:text-2xl text-white/80 max-w-2xl font-medium leading-relaxed font-mono border-l-4 border-teal pl-6">
                                See what's available. See what's recently been rented.
                            </p>
                        </div>
                    </div>
                </section>

                {/* TRADE ME LINK SECTION - INVERTED TO LIGHT MODE */}
                <section className="py-16 md:py-24 bg-white relative z-20 -mt-12">
                    <div className="container mx-auto px-6">
                        <div className="bg-wash text-navy p-6 md:p-12 border-4 border-navy relative overflow-hidden group shadow-hard hover:translate-y-1 hover:shadow-none transition-all duration-300">
                            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-12">
                                <div className="flex-1 w-full">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-3 h-3 bg-teal rounded-full animate-pulse" />
                                        <span className="font-mono text-xs font-bold text-navy/60 uppercase tracking-widest">Live Feed Integration</span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tighter uppercase leading-[0.9] text-navy">
                                        Browse Current <br /> Availability
                                    </h2>
                                    <p className="text-navy/70 text-base md:text-xl leading-relaxed max-w-2xl font-medium mb-8">
                                        All our active vacancies are listed directly on Trade Me. Visit our agency profile to apply for viewings and submit applications.
                                    </p>

                                    <div className="bg-white border-l-4 border-teal p-6 mb-8 max-w-3xl shadow-sm">
                                        <h3 className="font-bold text-navy uppercase tracking-widest text-xs mb-2">Application Protocol</h3>
                                        <p className="font-mono text-xs md:text-sm text-navy/80 mb-2 leading-relaxed">
                                            1. Submit inquiry via Trade Me listing.
                                        </p>
                                        <p className="font-mono text-xs md:text-sm text-navy/80 leading-relaxed">
                                            2. Attend viewing &rarr; Receive application link.
                                        </p>
                                    </div>
                                </div>
                                <div className="shrink-0 w-full lg:w-auto">
                                    <Button
                                        asChild
                                        className="h-16 md:h-20 px-8 md:px-12 bg-navy text-white font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy border-2 border-navy transition-all w-full lg:w-auto shadow-hard-sm hover:shadow-none"
                                    >
                                        <a href="https://www.trademe.co.nz/a/property/office/5713372" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-4">
                                            Open Trade Me <ExternalLink className="w-6 h-6" />
                                        </a>
                                    </Button>
                                    <div className="mt-3 text-center lg:text-right">
                                        <a href="/rental-application" className="font-mono text-xs font-bold text-navy/40 uppercase tracking-widest hover:text-teal transition-colors border-b border-transparent hover:border-teal">
                                            View Standard Application form
                                        </a>
                                    </div>
                                </div>
                            </div>
                            {/* Innovative 'Digital Blueprint' Graphic behind the button */}
                            <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none opacity-[0.07] translate-x-1/3 -translate-y-1/3 rotate-12">
                                <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-navy">
                                    <path d="M10 10 H190 V190 H10 Z" stroke="currentColor" strokeWidth="2" />
                                    <path d="M40 10 V190 M80 10 V190 M120 10 V190 M160 10 V190" stroke="currentColor" strokeWidth="0.5" />
                                    <path d="M10 40 H190 M10 80 H190 M10 120 H190 M10 160 H190" stroke="currentColor" strokeWidth="0.5" />
                                    <rect x="40" y="40" width="80" height="80" stroke="currentColor" strokeWidth="2" />
                                    <rect x="120" y="120" width="40" height="40" stroke="currentColor" strokeWidth="2" />
                                    <path d="M100 80 L140 120" stroke="currentColor" strokeWidth="1" />
                                    <circle cx="140" cy="140" r="10" stroke="currentColor" strokeWidth="2" />
                                    <circle cx="80" cy="80" r="20" stroke="currentColor" strokeWidth="1" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CURRENT LISTINGS SECTION */}
                <section className="py-16 md:py-24 bg-wash">
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-8">
                            <div>
                                <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; LIVE_LISTINGS</span>
                                <h2 className="text-3xl md:text-4xl font-black text-navy tracking-tighter uppercase">Current Properties</h2>
                            </div>
                            <div className="font-mono text-xs text-navy/60 max-w-md text-left md:text-right border-l-4 md:border-l-0 md:border-r-4 border-teal pl-4 md:pl-0 md:pr-4">
                                Properties automatically synced from our Trade Me listings. Updated daily. Use arrows or dots to browse photos.
                            </div>
                        </div>

                        {loading ? (
                            <div className="flex items-center justify-center py-20">
                                <Loader2 className="w-8 h-8 text-teal animate-spin" />
                                <span className="ml-4 font-mono text-navy/60">Loading listings...</span>
                            </div>
                        ) : listings.length > 0 ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
                                {listings.map((listing) => (
                                    <TradeMeListing key={listing.id} listing={listing} />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16 bg-white border-4 border-navy/10">
                                <Home className="w-16 h-16 text-navy/20 mx-auto mb-6" />
                                <h3 className="text-2xl font-black text-navy uppercase mb-4">No Current Listings</h3>
                                <p className="font-mono text-sm text-navy/60 max-w-md mx-auto mb-8">
                                    All properties are currently tenanted. Check back soon or visit our Trade Me page for the latest updates.
                                </p>
                                <Button
                                    asChild
                                    className="h-14 px-8 bg-navy text-white font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy border-2 border-navy transition-all"
                                >
                                    <a href="https://www.trademe.co.nz/a/property/office/5713372" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3">
                                        Check Trade Me <ExternalLink className="w-5 h-5" />
                                    </a>
                                </Button>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA SECTION */}
                <section className="py-16 md:py-24 bg-navy text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:6rem_6rem]" />
                    <div className="container mx-auto px-6 relative z-30 pointer-events-auto">
                        <div className="max-w-4xl mx-auto text-center">
                            <span className="font-mono text-xs font-bold text-teal uppercase tracking-widest mb-4 block">&gt; LANDLORDS</span>
                            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter uppercase">
                                Got a Property to Rent?
                            </h2>
                            <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
                                We provide professional property management services for landlords across Christchurch. Simple 8% + GST fee, no hidden costs.
                            </p>
                            <Button
                                asChild
                                className="h-16 px-12 bg-teal text-navy font-mono text-sm font-bold uppercase tracking-widest rounded-none hover:bg-white border-2 border-teal transition-all"
                            >
                                <a href="/landlord-services" className="flex items-center gap-4">
                                    Landlord Services <ArrowRight className="w-5 h-5" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AvailableRentals;
