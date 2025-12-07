# Property Partner Website

A next-generation property management platform built with React, Tailwind CSS, and System V2.0 aesthetics.

## Project Overview

This codebase powers the Property Partner public website, featuring:
- **System V2.0 Design**: High-contrast, terminal-inspired aesthetics with Navy/Teal branding.
- **Knowledge Base**: A comprehensive FAQ system with strict landlord/tenant separation.
- **Tenant Resources**: Interactive guides, move-out checklists, and protocols.
- **Legal Compliance**: Integrated Privacy Policy and Terms of Service.

## Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + [Shadcn UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)

## Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

```sh
# Install dependencies
npm install

# Start development server
npm run dev
```

## Project Structure

- `src/pages`: Main route components (LandlordServices, TenantResources, etc.).
- `src/components`: Reusable UI components (Header, Footer, ui/).
- `src/components/ui`: Shadcn primitives.
- `src/lib`: Utility functions.

## Deployment

The project is configured for deployment on standard static hosting providers (Netlify, Vercel, etc.).
Build command: `npm run build`
Output directory: `dist`

---
© 2025 Property Partner. All rights reserved.
