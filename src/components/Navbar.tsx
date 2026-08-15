import React, { useState, useEffect } from 'react';
import { BRAND_INFO } from '../data/tailoringData';

interface NavbarProps {
  onOpenMeasurementGuide?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenMeasurementGuide }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Lookbook', href: '#lookbook' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      {/* Top Notification Bar */}
      <header
        id="navbar-top-bar"
        className="bg-[#070D1E] text-slate-300 text-xs py-2 border-b border-slate-800/80 px-4 sm:px-8 hidden md:block"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <span className="flex items-center text-slate-300">
              <i className="fa-solid fa-gem text-[#D4AF37] mr-2"></i>
              Custom Measurements & Neat Finishing
            </span>
            <span className="flex items-center text-slate-300">
              <i className="fa-solid fa-truck-fast text-[#D4AF37] mr-2"></i>
              Doorstep Delivery: Lagos & Worldwide Shipping
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="tel:07018278641"
              className="hover:text-[#D4AF37] transition-colors flex items-center"
            >
              <i className="fa-solid fa-phone text-[#D4AF37] text-xs mr-2"></i>
              07018278641
            </a>
            <a
              href={`mailto:${BRAND_INFO.email}`}
              className="hover:text-[#D4AF37] transition-colors flex items-center"
            >
              <i className="fa-solid fa-envelope text-[#D4AF37] text-xs mr-2"></i>
              {BRAND_INFO.email}
            </a>
          </div>
        </div>
      </header>

      {/* Main Navigation Bar */}
      <nav
        id="main-navigation"
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0B132B]/95 backdrop-blur-md shadow-xl border-b border-[#D4AF37]/20 py-3.5'
            : 'bg-[#0B132B] py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            id="brand-logo-link"
            href="#home"
            className="flex items-center space-x-3 group"
          >
            <div className="w-10 h-10 rounded-full border border-[#D4AF37]/40 bg-[#070D1E] flex items-center justify-center text-[#D4AF37] shadow-inner group-hover:border-[#D4AF37] transition-all">
              <i className="fa-solid fa-scissors text-lg transform -rotate-45 group-hover:scale-110 transition-transform"></i>
            </div>
            <div className="flex flex-col">
              <span className="font-serif-luxury text-xl sm:text-2xl font-bold tracking-wide text-white group-hover:text-[#ECC880] transition-colors">
                Eazy Clothing
              </span>
              <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold -mt-1">
                Exquisites
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-slate-200 hover:text-[#ECC880] transition-colors relative py-1 hover:after:w-full after:w-0 after:h-0.5 after:bg-[#D4AF37] after:absolute after:bottom-0 after:left-0 after:transition-all"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Action Button & Measurement helper */}
          <div className="hidden sm:flex items-center space-x-3">
            {onOpenMeasurementGuide && (
              <button
                id="nav-measurement-btn"
                type="button"
                onClick={onOpenMeasurementGuide}
                className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-lg border border-white/10 hover:border-[#D4AF37]/50 transition-all flex items-center"
              >
                <i className="fa-solid fa-ruler-horizontal text-[#D4AF37] mr-1.5"></i>
                Fit Guide
              </button>
            )}

            <a
              id="nav-whatsapp-cta"
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-full text-xs font-semibold text-[#0B132B] bg-gradient-to-r from-[#ECC880] via-[#D4AF37] to-[#C5A059] hover:brightness-110 shadow-md hover:shadow-lg hover:shadow-[#D4AF37]/20 transition-all transform hover:-translate-y-0.5"
            >
              <i className="fa-brands fa-whatsapp text-sm mr-2 font-bold"></i>
              Chat on WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href={BRAND_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#D4AF37] rounded-lg border border-[#D4AF37]/30 sm:hidden"
              aria-label="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp text-lg"></i>
            </a>

            <button
              id="mobile-menu-button"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <i
                className={`fa-solid ${
                  mobileMenuOpen ? 'fa-xmark' : 'fa-bars'
                } text-xl text-[#D4AF37]`}
              ></i>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-nav-drawer"
            className="lg:hidden bg-[#070D1E] border-b border-[#D4AF37]/20 px-4 pt-3 pb-6 mt-2 space-y-3 animate-fadeIn shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-md text-base font-medium text-slate-200 hover:text-[#D4AF37] hover:bg-white/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-800 space-y-3">
              {onOpenMeasurementGuide && (
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenMeasurementGuide();
                  }}
                  className="w-full text-left px-3 py-2.5 rounded-md text-sm font-medium text-slate-300 hover:text-white flex items-center"
                >
                  <i className="fa-solid fa-ruler-horizontal text-[#D4AF37] mr-2"></i>
                  View 24-Point Fit Guide
                </button>
              )}

              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center px-4 py-3 rounded-xl text-sm font-semibold text-[#0B132B] bg-[#D4AF37] hover:bg-[#ECC880] shadow-md transition-all"
              >
                <i className="fa-brands fa-whatsapp text-lg mr-2"></i>
                Chat on WhatsApp (07018278641)
              </a>

              <div className="flex justify-around pt-2 text-slate-400 text-xs">
                <span>
                  <i className="fa-solid fa-phone text-[#D4AF37] mr-1"></i> 09098683092
                </span>
                <span>
                  <i className="fa-solid fa-location-dot text-[#D4AF37] mr-1"></i> Lagos & Nationwide
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};
