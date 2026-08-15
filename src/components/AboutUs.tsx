import React from 'react';
import { CRAFTSMANSHIP_PILLARS, BRAND_INFO } from '../data/tailoringData';

interface AboutUsProps {
  onOpenMeasurementGuide?: () => void;
}

export const AboutUs: React.FC<AboutUsProps> = ({ onOpenMeasurementGuide }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#F4F5F7] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B132B] text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
            <i className="fa-solid fa-scissors text-xs"></i>
            <span>Our Craft Philosophy</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B]">
            Humble Roots, <span className="text-[#C5A059] italic">Master Craftsmanship</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            At <strong className="text-[#0B132B] font-semibold">Eazy Clothing Exquisites</strong>, 
            tailoring is an art of personal identity. We are committed to meticulous neat finishing, 
            exact anatomical custom measurements, and uncompromising quality craftsmanship—bridging the sharp poise 
            of modern corporate wear with the rich grandeur of traditional African attire.
          </p>
        </div>

        {/* Story & Craft Detail Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          {/* Left Narrative Frame */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/80 shadow-sm space-y-6">
              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-[#0B132B]">
                The Anatomy of a Perfect Fit
              </h3>
              
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Every garment that leaves our cutting table represents hours of dedicated passion. 
                We understand that no two bodies are identical; standard rack sizing ignores the subtle slopes 
                of shoulders, chest contours, and natural postures. 
              </p>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                Whether creating a double-breasted navy boardroom suit or a majestic royal Agbada 
                with intricate threadwork, we refuse to cut corners. From reinforced stress points to 
                crisply ironed inner facings, every detail is engineered to make you walk into any room 
                with regal confidence.
              </p>

              {/* Founder / Brand Commitment Quote Box */}
              <div className="p-5 rounded-xl bg-[#0B132B] text-white border-l-4 border-[#D4AF37] space-y-2">
                <p className="text-xs sm:text-sm italic text-slate-200">
                  "When you dress in clothes made specifically for your body, you carry yourself differently. 
                  Our promise is simple: neat finishing, durable stitchwork, and a fit that flatters your dignity."
                </p>
                <div className="flex items-center justify-between pt-2 text-xs text-[#D4AF37]">
                  <span className="font-semibold">— Master Tailor & Creative Team</span>
                  <span>Eazy Clothing Exquisites</span>
                </div>
              </div>

              <div className="pt-2 flex flex-wrap gap-4 items-center">
                <a
                  href={BRAND_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#0B132B] text-[#D4AF37] hover:bg-[#162447] text-xs font-semibold transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-sm"></i>
                  <span>Talk with Master Tailor</span>
                </a>

                {onOpenMeasurementGuide && (
                  <button
                    type="button"
                    onClick={onOpenMeasurementGuide}
                    className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg border border-slate-300 text-slate-700 hover:border-[#D4AF37] hover:text-[#0B132B] text-xs font-semibold transition-colors"
                  >
                    <i className="fa-solid fa-ruler-combined text-xs text-[#C5A059]"></i>
                    <span>How We Measure</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Right Visual Image & Fabric Highlights */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-md h-48 sm:h-64 border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80"
                    alt="Precision Tailoring Fabric Cutting"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm text-center">
                  <p className="font-serif-luxury text-2xl font-bold text-[#0B132B]">100%</p>
                  <p className="text-xs text-slate-500 font-medium">Bespoke Precision Fit</p>
                </div>
              </div>

              <div className="space-y-4 pt-6">
                <div className="p-4 rounded-xl bg-[#0B132B] text-white border border-[#D4AF37]/30 text-center">
                  <p className="font-serif-luxury text-2xl font-bold text-[#D4AF37]">Zero</p>
                  <p className="text-xs text-slate-300 font-medium">Compromise on Finishing</p>
                </div>
                <div className="rounded-2xl overflow-hidden shadow-md h-48 sm:h-64 border border-slate-200">
                  <img
                    src="https://images.unsplash.com/photo-1589756823695-278bc923f962?auto=format&fit=crop&w=600&q=80"
                    alt="Tailor Hand Stitching Suit Collar"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Pillars of Craftsmanship */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CRAFTSMANSHIP_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-white p-6 sm:p-7 rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#D4AF37]/60 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#0B132B] text-[#D4AF37] flex items-center justify-center text-lg mb-5 group-hover:scale-110 transition-transform">
                <i className={pillar.icon}></i>
              </div>
              <h4 className="font-serif-luxury text-lg font-bold text-[#0B132B] mb-2">
                {pillar.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
