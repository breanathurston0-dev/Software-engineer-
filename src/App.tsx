/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBanner } from './components/StatsBanner';
import { DashboardPreview } from './components/DashboardPreview';
import { CoreModules } from './components/CoreModules';
import { Workflow } from './components/Workflow';
import { Testimonials } from './components/Testimonials';
import { SystemRequirements } from './components/SystemRequirements';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { ContactCTA } from './components/ContactCTA';
import { Footer } from './components/Footer';
import { FloatingWidgets } from './components/FloatingWidgets';
import { HostelModal } from './components/HostelModal';

export default function App() {
  const [isHostelModalOpen, setIsHostelModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Navigation Bar */}
      <Navbar onOpenHostelModal={() => setIsHostelModalOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Floating Statistics Banner */}
        <StatsBanner />

        {/* Live Interactive Dashboard Simulation */}
        <DashboardPreview />

        {/* Core Modules Grid */}
        <CoreModules />

        {/* 4-Step Automation Workflow */}
        <Workflow />

        {/* User Testimonials */}
        <Testimonials />

        {/* PC System Specifications */}
        <SystemRequirements />

        {/* Pricing Tiers */}
        <Pricing />

        {/* Frequently Asked Questions */}
        <FAQ />

        {/* High-Conversion Contact CTA Banner */}
        <ContactCTA />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Floating Action Buttons: WhatsApp & Back to Top */}
      <FloatingWidgets />

      {/* Hostel Management System Portfolio Modal */}
      <HostelModal 
        isOpen={isHostelModalOpen} 
        onClose={() => setIsHostelModalOpen(false)} 
      />
    </div>
  );
}
