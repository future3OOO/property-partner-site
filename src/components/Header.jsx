import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ContactDialog from "@/components/ContactDialog";
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle, SheetDescription } from "@/components/ui/sheet";
import { Link, useLocation } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

// Fixed ListItem to use NavigationMenuLink
const ListItem = React.forwardRef(({ className, title, children, href, active, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          ref={ref}
          to={href}
          className={cn(
            "block select-none space-y-1 p-3 leading-none no-underline outline-none transition-colors hover:bg-wash hover:text-navy border-2 border-transparent hover:border-navy",
            className
          )}
          {...props}
        >
          <div className="text-sm font-black uppercase tracking-tight text-navy">{title}</div>
          <p className="line-clamp-2 text-xs font-mono font-medium text-ink-light leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactDialogOpen, setContactDialogOpen] = useState(false);

  const handleMobileGetStarted = () => {
    setIsMenuOpen(false);
    // Small delay to let Sheet close animation complete
    setTimeout(() => setContactDialogOpen(true), 150);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[999] bg-paper border-b-4 border-navy max-w-[100vw]">
      <div className="container mx-auto px-4 md:px-6 h-20 md:h-24 flex items-center justify-between gap-4">

        {/* Brand Identity */}
        {/* Brand Identity */}
        <Link to="/" className="flex items-end gap-1 md:gap-2 group min-w-0">
          <img src="/logo.png" alt="Property Partner" className="h-12 md:h-16 w-auto object-contain shrink-0" />
          <div className="flex flex-col justify-center min-w-0 pb-2.5">
            <span className="font-black text-sm md:text-lg tracking-tighter text-navy leading-[0.9] md:leading-[0.9] group-hover:text-teal transition-colors whitespace-nowrap">
              PROPERTY
            </span>
            <span className="font-black text-sm md:text-lg tracking-tighter text-navy leading-[0.9] md:leading-[0.9] md:-mt-0.5 group-hover:text-teal transition-colors whitespace-nowrap">
              PARTNER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:block shrink-0">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-mono text-xs font-bold uppercase tracking-widest text-navy border-2 border-transparent hover:border-navy hover:bg-transparent focus:bg-transparent rounded-none h-12")}>
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-mono text-xs font-bold uppercase tracking-widest text-navy border-2 border-transparent hover:border-navy hover:bg-transparent focus:bg-transparent rounded-none h-12">
                  For Owners
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white border-4 border-navy">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end bg-navy p-6 no-underline outline-none focus:shadow-md"
                          href="/landlord-services"
                        >
                          <div className="mt-4 mb-2 text-lg font-black text-white uppercase tracking-tight">
                            Landlord Services
                          </div>
                          <p className="text-xs font-mono text-white/70 leading-tight">
                            Comprehensive management solutions for modern property investors.
                          </p>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="#" title="Management Agreement" className="opacity-50 cursor-not-allowed pointer-events-none">
                      Start your journey with us. (Coming Soon)
                    </ListItem>
                    <ListItem href="/landlord-services#core-services" title="Property Management">
                      Full-service operational oversight.
                    </ListItem>

                    <ListItem href="/landlord-services#financial-reporting" title="Financial Reporting">
                      Real-time ledger access.
                    </ListItem>
                    <ListItem href="/knowledge-base" title="Knowledge Base">
                      FAQ & Policy Database
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-mono text-xs font-bold uppercase tracking-widest text-navy border-2 border-transparent hover:border-navy hover:bg-transparent focus:bg-transparent rounded-none h-12">
                  For Tenants
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] bg-white border-4 border-navy">
                    <li className="row-span-4">
                      <NavigationMenuLink asChild>
                        <a
                          className="flex h-full w-full select-none flex-col justify-end bg-teal p-6 no-underline outline-none focus:shadow-md border-2 border-navy relative overflow-hidden group"
                          href="/tenant-services"
                        >
                          <div className="absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-[size:1rem_1rem]" />
                          <div className="relative z-10">
                            <div className="mt-4 mb-2 text-lg font-black text-navy uppercase tracking-tight group-hover:underline decoration-4 decoration-white underline-offset-4">
                              Tenant Services
                            </div>
                            <p className="text-xs font-mono text-navy/80 leading-tight font-bold">
                              Everything you need for a successful tenancy.
                            </p>
                          </div>
                        </a>
                      </NavigationMenuLink>
                    </li>
                    <ListItem href="/services/maintenance" title="Maintenance">
                      Report issues instantly.
                    </ListItem>
                    <ListItem href="/tenant-resources" title="Resources">
                      Guides & checklists.
                    </ListItem>
                    <ListItem href="/check-list" title="Checklist">
                      Interactive move-out guide.
                    </ListItem>
                    <ListItem href="/available-rentals" title="Available Rentals">
                      View current vacancies.
                    </ListItem>
                    <ListItem href="/rental-application" title="Rental Application">
                      Apply for your next home.
                    </ListItem>
                    <ListItem href="/knowledge-base" title="Knowledge Base">
                      FAQ & Policy Database
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link to="/pricing" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-mono text-xs font-bold uppercase tracking-widest text-navy border-2 border-transparent hover:border-navy hover:bg-transparent focus:bg-transparent rounded-none h-12")}>
                    Pricing
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-mono text-xs font-bold uppercase tracking-widest text-navy border-2 border-transparent hover:border-navy hover:bg-transparent focus:bg-transparent rounded-none h-12">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white border-4 border-navy">
                    <ListItem href="/knowledge-base" title="Knowledge Base">
                      FAQ & Policy Database
                    </ListItem>
                    <ListItem href="/blog" title="Blog">
                      Industry insights and news.
                    </ListItem>
                    <ListItem href="#" title="Guides">
                      Property management handbooks.
                    </ListItem>
                    <ListItem href="/privacy" title="Privacy Policy">
                      Data protection standards.
                    </ListItem>
                    <ListItem href="/terms" title="Terms of Service">
                      User agreements.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent font-mono text-xs font-bold uppercase tracking-widest text-navy border-2 border-transparent hover:border-navy hover:bg-transparent focus:bg-transparent rounded-none h-12">
                  About
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 bg-white border-4 border-navy">
                    <ListItem href="/about" title="Our Story">
                      The mission behind Property Partner.
                    </ListItem>
                    <ListItem href="#" title="Team">
                      The experts managing your assets.
                    </ListItem>
                    <ListItem href="#" title="Careers">
                      Join our growing team.
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden lg:flex items-center gap-6 shrink-0">
          <a href="https://client.propertytree.com/login" target="_blank" rel="noopener noreferrer" className="font-mono text-sm font-bold uppercase tracking-widest text-navy hover:text-teal hover:underline decoration-2 underline-offset-4 decoration-teal">
            Sign In
          </a>
          <ContactDialog>
            <Button className="h-12 px-8 bg-navy text-white font-mono text-xs font-bold uppercase tracking-widest rounded-none hover:bg-teal hover:text-navy hover:shadow-hard transition-all border-2 border-navy">
              Get Started
            </Button>
          </ContactDialog>
        </div>

        {/* Mobile Menu Trigger */}
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden rounded-none h-12 w-12 md:h-12 md:w-12 border-2 border-transparent hover:border-navy shrink-0">
              <Menu className="w-8 h-8 md:w-8 md:h-8 text-navy" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] bg-paper border-l-4 border-navy p-0 overflow-y-auto z-[1000]">
            <SheetDescription className="sr-only">
              Navigation menu for Property Partner website.
            </SheetDescription>
            <div className="flex flex-col min-h-full">
              <div className="h-20 md:h-24 border-b-4 border-navy flex items-center justify-between px-6 bg-wash">
                <SheetTitle className="font-black text-xl md:text-2xl text-navy tracking-tighter">MENU</SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="rounded-none hover:bg-red-500 hover:text-white"><X className="w-6 h-6 md:w-8 md:h-8" /></Button>
                </SheetClose>
              </div>

              <nav className="flex flex-col p-6 gap-2">
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase text-navy py-3 border-b border-gray-200">Home</Link>

                <div className="py-3 border-b border-gray-200">
                  <div className="text-xl font-black uppercase text-navy mb-4 text-teal">For Owners</div>
                  <div className="pl-4 flex flex-col gap-3">
                    <Link to="/landlord-services" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm font-bold text-navy">Landlord Services</Link>
                    <span className="font-mono text-sm text-ink-light opacity-50 cursor-not-allowed">Management Agreement (Coming Soon)</span>
                    <span className="font-mono text-sm text-ink-light">Property Management</span>

                    <Link to="/knowledge-base" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm font-bold text-navy">Knowledge Base</Link>
                  </div>
                </div>

                <div className="py-3 border-b border-gray-200">
                  <div className="text-xl font-black uppercase text-navy mb-4 text-teal">For Tenants</div>
                  <div className="pl-4 flex flex-col gap-3">
                    <Link to="/tenant-services" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm font-bold text-navy">Tenant Services</Link>
                    <Link to="/services/maintenance" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm text-ink-light">Maintenance Request</Link>
                    <Link to="/tenant-resources" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm text-ink-light">Resources</Link>
                    <Link to="/check-list" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm text-ink-light">Checklist</Link>
                    <Link to="/available-rentals" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm text-ink-light">Available Rentals</Link>
                    <Link to="/rental-application" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm text-ink-light">Rental Application</Link>
                    <Link to="/knowledge-base" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm font-bold text-navy">Knowledge Base</Link>
                  </div>
                </div>

                <Link to="/pricing" onClick={() => setIsMenuOpen(false)} className="text-xl font-black uppercase text-navy py-3 border-b border-gray-200">Pricing</Link>

                <div className="py-3 border-b border-gray-200">
                  <div className="text-xl font-black uppercase text-navy mb-4 text-teal">Resources</div>
                  <div className="pl-4 flex flex-col gap-3">
                    <Link to="/knowledge-base" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm font-bold text-navy">Knowledge Base</Link>
                    <span className="font-mono text-sm text-ink-light">Blog</span>
                    <span className="font-mono text-sm text-ink-light">Guides</span>
                    <Link to="/privacy" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm text-ink-light hover:text-teal">Privacy Policy</Link>
                    <Link to="/terms" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm text-ink-light hover:text-teal">Terms of Service</Link>
                  </div>
                </div>

                <div className="py-3 border-b border-gray-200">
                  <div className="text-xl font-black uppercase text-navy mb-4 text-teal">About</div>
                  <div className="pl-4 flex flex-col gap-3">
                    <Link to="/about" onClick={() => setIsMenuOpen(false)} className="font-mono text-sm font-bold text-navy">Our Story</Link>
                    <span className="font-mono text-sm text-ink-light">Team</span>
                    <span className="font-mono text-sm text-ink-light">Careers</span>
                  </div>
                </div>

                <div className="mt-8 pt-8 flex flex-col gap-4">
                  <a href="https://client.propertytree.com/login" target="_blank" rel="noopener noreferrer" className="w-full text-center font-mono text-sm font-bold uppercase tracking-widest text-navy py-4 border-2 border-navy">
                    Sign In
                  </a>
                  <Button
                    onClick={handleMobileGetStarted}
                    className="w-full h-14 bg-navy text-white font-mono text-sm font-bold uppercase tracking-widest rounded-none border-2 border-navy"
                  >
                    Get Started
                  </Button>
                </div>
              </nav>
            </div>
          </SheetContent>
        </Sheet>

      </div>

      {/* Separate ContactDialog for mobile - controlled by state */}
      <ContactDialog open={contactDialogOpen} onOpenChange={setContactDialogOpen}>
        <span className="hidden" />
      </ContactDialog>
    </header>
  );
};

export default Header;