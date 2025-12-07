import React from 'react';
import { Section, Container } from "@/components/Layout";
import { ArrowRight, Calendar, Clock, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from "@/components/Footer";
import Header from "@/components/Header";

// Mock Data
const featuredPost = {
    id: 1,
    title: "The 2026 Christchurch Rental Ecosystem: A Data-Driven Forecast",
    excerpt: "Analysing shifts in tenant demographics, regulatory pressures, and yield compression. Why the traditional model is failing and what modern investors are doing differently.",
    date: "Oct 12, 2025",
    readTime: "8 min read",
    category: "Market Insights",
    image: "/listings/hero-modern.jpg", // Using existing asset for now
    slug: "christchurch-rental-ecosystem-2026"
};

const recentPosts = [
    {
        id: 2,
        title: "Optimising Yield: The 'Active Management' Protocol",
        excerpt: "Passive income is a myth. Discover how proactive maintenance schedules and rigorous tenant selection protocols drive verifiable ROI increases.",
        date: "Oct 08, 2025",
        readTime: "5 min read",
        category: "Strategy",
        image: "/listings/kitchen-modern.jpg",
        slug: "optimising-yield-active-management"
    },
    {
        id: 3,
        title: "Understanding the Healthy Homes Standards V2.0",
        excerpt: "A deep dive into the upcoming compliance changes. Don't get caught out by the new heating and ventilation requirements.",
        date: "Sep 28, 2025",
        readTime: "6 min read",
        category: "Compliance",
        image: "/listings/living-room-modern.jpg",
        slug: "healthy-homes-standards-v2"
    },
    {
        id: 4,
        title: "Tenant Psychology: What High-Value Renters Actually Want",
        excerpt: "It's not just about quartz countertops. Our survey of 500+ Christchurch professionals reveals the amenities that actually drive retention.",
        date: "Sep 15, 2025",
        readTime: "4 min read",
        category: "Tenancy",
        image: "/listings/bedroom-modern.jpg",
        slug: "tenant-psychology-high-value-renters"
    },
    {
        id: 5,
        title: "The Impact of Interest Rates on Local Yields",
        excerpt: "Correlating RBNZ moves with Christchurch rental performance. A historical analysis and forward-looking projection.",
        date: "Sep 02, 2025",
        readTime: "7 min read",
        category: "Market Insights",
        image: "/listings/exterior-modern.jpg",
        slug: "impact-interest-rates-local-yields"
    },
    {
        id: 6,
        title: "Why We Switched to Dynamic Maintenance Vendors",
        excerpt: "The fixed-contract model is dead. How rigorous vendor vetting and spot-checking ensures quality workmanship at fair prices.",
        date: "Aug 20, 2025",
        readTime: "5 min read",
        category: "Operations",
        image: "/listings/bathroom-modern.jpg",
        slug: "dynamic-maintenance-vendors"
    }
];

const Blog = () => {
    return (
        <div className="min-h-screen bg-paper font-sans text-navy selection:bg-teal selection:text-white">
            <Header />

            {/* Hero Section - "Knowledge Stream" */}
            <div className="pt-32 pb-16 md:pt-48 md:pb-24 border-b border-navy/10 relative overflow-hidden">
                <Container>
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-navy/20 bg-white/50 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
                            <span className="text-xs font-mono font-bold uppercase tracking-widest text-navy/80">
                                Knowledge Stream
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-navy tracking-tighter mb-6 leading-[0.9]">
                            INTELLIGENCE. <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-teal bg-[length:200%_auto] animate-gradient">
                                UNFILTERED.
                            </span>
                        </h1>
                        <p className="text-lg md:text-xl text-navy/70 max-w-2xl mx-auto font-medium leading-relaxed">
                            Data-driven insights, operational protocols, and market analysis for the modern property investor.
                        </p>
                    </div>
                </Container>
            </div>

            {/* Featured Article */}
            <Section className="border-b border-navy/10 py-16 md:py-24 bg-white">
                <Container>
                    <Link to={`/blog/${featuredPost.slug}`} className="group block">
                        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                            <div className="relative aspect-[4/3] md:aspect-[16/9] lg:aspect-[4/3] overflow-hidden border-2 border-navy shadow-hard group-hover:shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] transition-all duration-300">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute top-4 left-4 bg-navy text-white px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest">
                                    Featured
                                </div>
                            </div>
                            <div className="flex flex-col justify-center gap-4 md:gap-6">
                                <div className="flex items-center gap-4 text-xs font-mono font-bold uppercase tracking-widest text-teal">
                                    <span>{featuredPost.category}</span>
                                    <span className="w-1 h-1 bg-navy/20 rounded-full" />
                                    <span className="text-navy/50 flex items-center gap-1">
                                        <Calendar className="w-3 h-3" /> {featuredPost.date}
                                    </span>
                                </div>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-[0.95] tracking-tight group-hover:text-teal transition-colors">
                                    {featuredPost.title}
                                </h2>
                                <p className="text-navy/70 text-lg leading-relaxed line-clamp-3 md:line-clamp-4">
                                    {featuredPost.excerpt}
                                </p>
                                <div className="flex items-center gap-2 text-sm font-bold text-navy group-hover:translate-x-2 transition-transform duration-300 mt-2">
                                    Read Full Protocol <ArrowRight className="w-4 h-4" />
                                </div>
                            </div>
                        </div>
                    </Link>
                </Container>
            </Section>

            {/* Recent Posts Grid */}
            <Section className="py-24 md:py-32">
                <Container>
                    <div className="flex items-end justify-between mb-16 border-b-4 border-navy pb-4">
                        <h3 className="text-3xl font-black text-navy uppercase tracking-tighter">Latest Dispatches</h3>
                        <div className="hidden md:flex gap-2">
                            {['All', 'Market Insights', 'Strategy', 'Operations'].map((cat, i) => (
                                <button key={cat} className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-widest border-2 border-navy transition-all ${i === 0 ? 'bg-navy text-white' : 'bg-transparent text-navy hover:bg-navy hover:text-white'}`}>
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
                        {recentPosts.map((post) => (
                            <Link key={post.id} to={`/blog/${post.slug}`} className="group flex flex-col h-full">
                                <div className="relative aspect-[3/2] overflow-hidden border-2 border-navy mb-6 shadow-hard-sm group-hover:shadow-hard transition-all duration-300">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-3 right-3 bg-white/90 backdrop-blur text-navy px-2 py-1 font-mono text-[10px] font-bold uppercase tracking-widest border border-navy/10 flex items-center gap-1">
                                        <Clock className="w-3 h-3" /> {post.readTime}
                                    </div>
                                </div>

                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-widest text-teal mb-3">
                                        {post.category}
                                    </div>
                                    <h4 className="text-2xl font-black text-navy leading-none tracking-tight mb-3 group-hover:text-teal transition-colors">
                                        {post.title}
                                    </h4>
                                    <p className="text-navy/70 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex justify-between items-center pt-4 border-t border-navy/10 mt-auto">
                                        <span className="text-xs font-mono font-medium text-navy/40 uppercase">{post.date}</span>
                                        <span className="w-8 h-8 flex items-center justify-center border border-navy text-navy rounded-full group-hover:bg-navy group-hover:text-white transition-colors">
                                            <ChevronRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </Container>
            </Section>

            {/* Newsletter CTA */}
            <Section className="bg-navy py-24 border-t-8 border-teal">
                <Container>
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-6">
                            DON'T MISS A BEAT.
                        </h2>
                        <p className="text-white/70 text-lg mb-8 font-light">
                            Join 2,500+ investors receiving our weekly market intelligence briefing. No fluff, just raw data and actionable strategy.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="ENTER YOUR EMAIL"
                                className="flex-grow h-14 px-6 bg-white/5 border-2 border-white/20 text-white placeholder:text-white/30 font-mono text-sm focus:outline-none focus:border-teal focus:bg-white/10 transition-colors rounded-none"
                            />
                            <button className="h-14 px-8 bg-teal text-navy font-mono text-sm font-bold uppercase tracking-widest hover:bg-white hover:text-navy transition-colors border-2 border-teal hover:border-white">
                                Subscribe
                            </button>
                        </form>
                        <p className="mt-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">
                            We respect your inbox. Unsubscribe at any time.
                        </p>
                    </div>
                </Container>
            </Section>

            <Footer />
        </div>
    );
};

export default Blog;
