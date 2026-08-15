/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { ServicesSection } from './components/ServicesSection';
import { HowItWorks } from './components/HowItWorks';
import { LookbookGallery } from './components/LookbookGallery';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MeasurementModal } from './components/MeasurementModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  const [isMeasurementOpen, setIsMeasurementOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#1E293B] flex flex-col font-sans selection:bg-[#D4AF37] selection:text-[#0B132B]">
      {/* Navigation Bar */}
      <Navbar onOpenMeasurementGuide={() => setIsMeasurementOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenConsultation={() => setIsMeasurementOpen(true)} />

        {/* 2. About Us Section */}
        <AboutUs onOpenMeasurementGuide={() => setIsMeasurementOpen(true)} />

        {/* 3. Services & Collections Section */}
        <ServicesSection />

        {/* 4. How It Works Section */}
        <HowItWorks onOpenMeasurementGuide={() => setIsMeasurementOpen(true)} />

        {/* 5. Lookbook Gallery Section */}
        <LookbookGallery />

        {/* 6. Contact & Socials Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Measurement & Fit Guide Modal */}
      <MeasurementModal
        isOpen={isMeasurementOpen}
        onClose={() => setIsMeasurementOpen(false)}
      />

      {/* Persistent Floating WhatsApp Quick-Action */}
      <FloatingWhatsApp />
    </div>
  );
}
