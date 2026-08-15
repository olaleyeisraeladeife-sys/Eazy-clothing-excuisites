import React from 'react';
import { BRAND_INFO } from '../data/tailoringData';

interface HeroProps {
  onOpenConsultation?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenConsultation }) => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center justify-center bg-[#0B132B] text-white overflow-hidden py-16 lg:py-24"
    >
      {/* Rich Atmospheric Background Layer */}
      <div className="absolute inset-0 z-0">
        {/* Dark Textured Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B132B] via-[#0B132B]/90 to-[#0B132B]/75 z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#D4AF37]/15 via-transparent to-transparent z-10"></div>

        {/* High-Quality Bespoke Tailoring & Fabric Imagery */}
        <img
          id="hero-bg-image"
          src="https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=2000&q=85"
          alt="Bespoke Tailoring and Fine Fabrics"
          className="w-full h-full object-cover object-center scale-105 filter brightness-75 contrast-110 opacity-35 transition-transform duration-1000 ease-out"
          loading="eager"
        />

        {/* Subtle Decorative Geometric Grid Pattern */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none z-10"
          style={{
            backgroundImage: `radial-gradient(#D4AF37 1px, transparent 1px)`,
            backgroundSize: '32px 32px',
          }}
        ></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Main Copy Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6 sm:space-y-8">
            {/* Brand Crown Eyebrow Tag */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#162447] border border-[#D4AF37]/40 text-[#D4AF37] text-xs font-semibold tracking-wider uppercase shadow-sm">
              <i className="fa-solid fa-crown text-[11px]"></i>
              <span>Artisanal Sartorial Excellence</span>
            </div>

            {/* Headline */}
            <h1
              id="hero-main-heading"
              className="font-serif-luxury text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.15] sm:leading-[1.12]"
            >
              Bespoke Tailoring <br className="hidden sm:inline" />
              <span className="gold-gradient-text italic font-normal">
                Crafted with Precision
              </span>
            </h1>

            {/* Subheadline */}
            <p
              id="hero-subheading"
              className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light"
            >
              Elevating your everyday wardrobe with custom-fit corporate suits, designer shirts, and elegant traditional African attire.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                id="hero-cta-services"
                href="#services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-[#0B132B] bg-gradient-to-r from-[#ECC880] via-[#D4AF37] to-[#C5A059] hover:brightness-110 shadow-lg hover:shadow-[#D4AF37]/30 transition-all transform hover:-translate-y-0.5 text-center flex items-center justify-center space-x-2"
              >
                <span>View Our Services</span>
                <i className="fa-solid fa-arrow-down text-xs"></i>
              </a>

              <a
                id="hero-cta-consultation"
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold text-sm sm:text-base text-white bg-[#162447]/90 hover:bg-[#1C2D5A] border border-[#D4AF37]/50 hover:border-[#D4AF37] shadow-md transition-all text-center flex items-center justify-center space-x-2.5 group"
              >
                <i className="fa-brands fa-whatsapp text-lg text-[#25D366] group-hover:scale-110 transition-transform"></i>
                <span>Book a Consultation</span>
              </a>
            </div>

            {/* Trust Indicators Bar */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <i className="fa-solid fa-check-double text-xs"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Neat Finishing</p>
                  <p className="text-[11px] text-slate-400">Zero loose threads</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <i className="fa-solid fa-ruler-combined text-xs"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Custom Anatomical Fit</p>
                  <p className="text-[11px] text-slate-400">Unique pattern cut</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 col-span-2 sm:col-span-1">
                <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] shrink-0">
                  <i className="fa-solid fa-truck-ramp-box text-xs"></i>
                </div>
                <div>
                  <p className="text-xs font-semibold text-white">Prompt Delivery</p>
                  <p className="text-[11px] text-slate-400">Across Nigeria & Global</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Dual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Gold Ambient Glow Behind Card */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#D4AF37]/40 via-[#ECC880]/20 to-transparent rounded-3xl blur-xl opacity-70"></div>

              {/* Main Visual Frame */}
              <div className="relative rounded-2xl bg-[#0F1E36] border border-[#D4AF37]/30 overflow-hidden shadow-2xl p-3 sm:p-4 space-y-4">
                {/* Visual Grid: Corporate & Traditional Pair */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="relative group overflow-hidden rounded-xl h-56 sm:h-64">
                    <img
                      src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80"
                      alt="Corporate Bespoke Suit"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent"></div>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="inline-block px-2 py-0.5 rounded bg-[#0B132B]/90 text-[10px] uppercase font-bold tracking-wider text-[#ECC880] border border-[#D4AF37]/30 mb-1">
                        Corporate
                      </span>
                      <p className="text-xs font-semibold text-white leading-tight">
                        Executive Tailored Suits
                      </p>
                    </div>
                  </div>

                  <div className="relative group overflow-hidden rounded-xl h-56 sm:h-64">
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=600&q=80"
                      alt="Traditional African Senator & Agbada Attire"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B132B] via-transparent to-transparent"></div>
                    <div className="absolute bottom-2.5 left-2.5 right-2.5">
                      <span className="inline-block px-2 py-0.5 rounded bg-[#0B132B]/90 text-[10px] uppercase font-bold tracking-wider text-[#ECC880] border border-[#D4AF37]/30 mb-1">
                        Traditional
                      </span>
                      <p className="text-xs font-semibold text-white leading-tight">
                        Senator & Royal Agbada
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom Highlight Strip */}
                <div className="p-3 rounded-xl bg-[#070D1E] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37] text-[#0B132B] flex items-center justify-center font-bold font-serif-luxury text-base">
                      E
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Eazy Clothing Exquisites</p>
                      <p className="text-[11px] text-[#D4AF37]">
                        Custom Stitched for Your Dignity
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:07018278641"
                    className="text-xs font-medium text-slate-300 hover:text-white px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 flex items-center"
                    title="Direct Call"
                  >
                    <i className="fa-solid fa-phone text-[#D4AF37] mr-1 text-[10px]"></i>
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
