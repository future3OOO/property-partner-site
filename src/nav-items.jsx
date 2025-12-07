import { HomeIcon, DollarSignIcon, HelpCircleIcon, WrenchIcon, Building2Icon, FileText, History, Search } from 'lucide-react';
import Index from "./pages/Index.jsx";
import Pricing from "./pages/Pricing.jsx";

import MaintenanceRequest from "./pages/services/MaintenanceRequest.jsx";
import TenantServices from "./pages/TenantServices.jsx";
import LandlordServices from "./pages/LandlordServices.jsx";
import RentalApplication from "./pages/RentalApplication.jsx";
import About from "./pages/About.jsx";
import AvailableRentals from "./pages/AvailableRentals.jsx";
import TenantResources from "./pages/TenantResources.jsx";
import MoveOutChecklist from "./pages/MoveOutChecklist.jsx";
import KnowledgeBase from "./pages/KnowledgeBase.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermsOfService from "./pages/TermsOfService.jsx";

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
  {
    title: "For Owners",
    to: "/landlord-services",
    icon: <Building2Icon className="h-4 w-4" />,
    page: <LandlordServices />,
  },
  {
    title: "Available Rentals",
    to: "/available-rentals",
    icon: <Search className="h-4 w-4" />,
    page: <AvailableRentals />,
  },
  {
    title: "Pricing",
    to: "/pricing",
    icon: <DollarSignIcon className="h-4 w-4" />,
    page: <Pricing />,
  },

  {
    title: "About",
    to: "/about",
    icon: <History className="h-4 w-4" />,
    page: <About />,
  },
  {
    title: "Maintenance Request",
    to: "/services/maintenance",
    icon: <WrenchIcon className="h-4 w-4" />,
    page: <MaintenanceRequest />,
  },
  {
    title: "Tenant Services",
    to: "/tenant-services",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <TenantServices />,
  },
  {
    title: "Tenant Resources",
    to: "/tenant-resources",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <TenantResources />,
  },
  {
    title: "Rental Application",
    to: "/rental-application",
    icon: <FileText className="h-4 w-4" />,
    page: <RentalApplication />,
  },
  {
    title: "Move Out Checklist",
    to: "/check-list",
    icon: <FileText className="h-4 w-4" />,
    page: <MoveOutChecklist />,
  },
  {
    title: "Knowledge Base",
    to: "/knowledge-base",
    icon: <HelpCircleIcon className="h-4 w-4" />,
    page: <KnowledgeBase />,
  },
  {
    title: "Privacy Policy",
    to: "/privacy",
    icon: <FileText className="h-4 w-4" />,
    page: <PrivacyPolicy />,
  },
  {
    title: "Terms of Service",
    to: "/terms",
    icon: <FileText className="h-4 w-4" />,
    page: <TermsOfService />,
  },
];