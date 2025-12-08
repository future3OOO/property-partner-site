import { HomeIcon, DollarSignIcon, HelpCircleIcon, WrenchIcon, Building2Icon, FileText, History, Search } from 'lucide-react';

export const navItems = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "For Owners",
    to: "/landlord-services",
    icon: <Building2Icon className="h-4 w-4" />,
  },
  {
    title: "Available Rentals",
    to: "/available-rentals",
    icon: <Search className="h-4 w-4" />,
  },
  {
    title: "Pricing",
    to: "/fees",
    icon: <DollarSignIcon className="h-4 w-4" />,
  },

  {
    title: "About",
    to: "/about",
    icon: <History className="h-4 w-4" />,
  },
  {
    title: "Maintenance Request",
    to: "/services/maintenance",
    icon: <WrenchIcon className="h-4 w-4" />,
  },
  {
    title: "Tenant Services",
    to: "/tenant-services",
    icon: <HomeIcon className="h-4 w-4" />,
  },
  {
    title: "Tenant Resources",
    to: "/tenant-resources",
    icon: <HelpCircleIcon className="h-4 w-4" />,
  },
  {
    title: "Rental Application",
    to: "/rental-application",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Move Out Checklist",
    to: "/check-list",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Knowledge Base",
    to: "/knowledge-base",
    icon: <HelpCircleIcon className="h-4 w-4" />,
  },
  {
    title: "Privacy Policy",
    to: "/privacy",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Terms of Service",
    to: "/terms",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Blog",
    to: "/blog",
    icon: <FileText className="h-4 w-4" />,
  },
  {
    title: "Contact",
    to: "/contact",
    icon: <FileText className="h-4 w-4" />,
  },
];