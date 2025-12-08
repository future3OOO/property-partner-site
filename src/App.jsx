import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "./components/ScrollToTop";

// Lazy Load Pages
const Index = lazy(() => import("./pages/Index"));
const Pricing = lazy(() => import("./pages/Pricing"));
const LandlordServices = lazy(() => import("./pages/LandlordServices"));
const TenantServices = lazy(() => import("./pages/TenantServices"));
const AvailableRentals = lazy(() => import("./pages/AvailableRentals"));
const About = lazy(() => import("./pages/About"));
const MaintenanceRequest = lazy(() => import("./pages/services/MaintenanceRequest"));
const TenantResources = lazy(() => import("./pages/TenantResources"));
const RentalApplication = lazy(() => import("./pages/RentalApplication"));
const MoveOutChecklist = lazy(() => import("./pages/MoveOutChecklist"));
const KnowledgeBase = lazy(() => import("./pages/KnowledgeBase"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Blog = lazy(() => import("./pages/Blog"));
const Contact = lazy(() => import("./pages/Contact"));

const queryClient = new QueryClient();

// Loading Component
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center bg-wash">
    <div className="w-8 h-8 border-4 border-navy border-t-teal rounded-full animate-spin" />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/landlord-services" element={<LandlordServices />} />
            <Route path="/available-rentals" element={<AvailableRentals />} />
            <Route path="/fees" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/services/maintenance" element={<MaintenanceRequest />} />
            <Route path="/tenant-services" element={<TenantServices />} />
            <Route path="/tenant-resources" element={<TenantResources />} />
            <Route path="/rental-application" element={<RentalApplication />} />
            <Route path="/check-list" element={<MoveOutChecklist />} />
            <Route path="/knowledge-base" element={<KnowledgeBase />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* Redirect old /pricing URL to /fees for SEO */}
            <Route path="/pricing" element={<Navigate to="/fees" replace />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
