import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, ArrowRight, Activity, Loader2, Check } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState(null);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    setError(null);
    
    try {
      const form = new FormData();
      form.append('email', email);
      
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        body: form
      });
      
      if (!response.ok) {
        throw new Error('Failed to subscribe');
      }
      
      setIsSubscribed(true);
      setEmail('');
    } catch (err) {
      setError('Failed to subscribe');
      console.error('Newsletter error:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-navy text-white pt-24 pb-12 border-t-8 border-teal relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto px-6 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">

          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="inline-block mb-8 group">
              <img src="/logo.png" alt="Property Partner" className="h-16 w-auto object-contain brightness-0 invert group-hover:opacity-80 transition-opacity" />
            </Link>
            <p className="font-mono text-sm text-white/60 mb-8 leading-relaxed max-w-xs">
              Next-generation property management infrastructure.
              <br />Automating assets since 2026.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-teal hover:text-navy hover:border-teal transition-all"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-teal hover:text-navy hover:border-teal transition-all"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-teal hover:text-navy hover:border-teal transition-all"><Linkedin className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-black text-lg uppercase tracking-tight text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-teal" /> Navigation
            </h4>
            <ul className="space-y-4 font-mono text-sm text-white/60">
              <li><Link to="/" className="hover:text-teal hover:pl-2 transition-all flex items-center gap-2">Home</Link></li>
              <li><Link to="/services" className="hover:text-teal hover:pl-2 transition-all flex items-center gap-2">Services</Link></li>
              <li><Link to="/about" className="hover:text-teal hover:pl-2 transition-all flex items-center gap-2">Our Story</Link></li>
              <li><Link to="/contact" className="hover:text-teal hover:pl-2 transition-all flex items-center gap-2">Contact</Link></li>
              <li><Link to="/login" className="text-teal font-bold hover:underline decoration-2 underline-offset-4">Portal Login</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg uppercase tracking-tight text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-teal" /> Legal / Info
            </h4>
            <ul className="space-y-4 font-mono text-sm text-white/60">
              <li>123 Property Lane<br />Real Estate City, 12345</li>
              <li>(123) 456-7890</li>
              <li className="text-teal">hello@propertypartner.co.nz</li>
              <li className="pt-4 border-t border-white/10 mt-4 text-xs"><Link to="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link></li>
              <li className="text-xs"><Link to="/terms" className="hover:text-teal transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-lg uppercase tracking-tight text-white mb-8 flex items-center gap-2">
              <span className="w-2 h-2 bg-teal" /> System Status
            </h4>
            <div className="bg-white/5 border border-white/10 p-6 mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs uppercase text-teal">Operational</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div className="w-full bg-white/10 h-1 mt-2">
                <div className="bg-teal h-full w-[98%]" />
              </div>
              <div className="mt-2 font-mono text-[10px] text-white/40 text-right">UPTIME: 99.99%</div>
            </div>

            <p className="font-sans text-sm text-white/60 mb-4">
              Subscribe for system updates.
            </p>
            
            {isSubscribed ? (
              <div className="flex items-center gap-2 text-teal font-mono text-sm">
                <Check className="w-4 h-4" />
                <span>Subscribed!</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="flex">
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="EMAIL_ADDRESS" 
                  required
                  className="bg-transparent border border-white/20 text-white px-4 py-3 w-full font-mono text-xs placeholder:text-white/30 focus:outline-none focus:border-teal transition-colors" 
                />
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-teal text-navy px-4 hover:bg-white transition-colors border border-teal disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowRight className="w-4 h-4" />
                  )}
                </button>
              </form>
            )}
            {error && <p className="text-red-400 text-xs mt-2 font-mono">{error}</p>}
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            REF: #FTR-2025 // SYSTEM V2.5
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-white/40 flex items-center gap-2">
            <Activity className="w-3 h-3 text-teal" />
            © 2025 PROPERTY PARTNER. ALL RIGHTS RESERVED.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
