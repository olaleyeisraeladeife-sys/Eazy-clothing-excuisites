import React, { useState } from 'react';
import { SERVICES_DATA, BRAND_INFO } from '../data/tailoringData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService?: (service: ServiceItem) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getWhatsAppServiceLink = (serviceTitle: string) => {
    const text = encodeURIComponent(
      `Hello Eazy Clothing Exquisites, I would like to consult and order bespoke tailoring for: ${serviceTitle}. Please share fabric options and measurement requirements.`
    );
    return `https://wa.me/2347018278641?text=${text}`;
  };

  return (
    <section id="services" className="py-20 lg:py-28 bg-[#0B132B] text-white relative">
      {/* Background Accent Graphics */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#162447]/60 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#162447] text-[#ECC880] text-xs font-semibold tracking-widest uppercase border border-[#D4AF37]/30">
            <i className="fa-solid fa-shirt text-xs"></i>
            <span>Signature Collections</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Our Tailoring <span className="gold-gradient-text">Services & Collections</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            From the boardroom to high-society celebrations, we engineer bespoke pieces tailored to your exact physique with heirloom-grade craftsmanship.
          </p>
        </div>

        {/* 3-Card Grid (Corporate, Traditional, Custom Bespoke) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-[#0F1E36] rounded-2xl border border-slate-700/80 hover:border-[#D4AF37]/60 shadow-xl overflow-hidden flex flex-col group transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image Frame with Badge */}
              <div className="relative h-60 overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F1E36] via-[#0F1E36]/30 to-transparent"></div>

                {/* Service Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B132B]/90 text-[#D4AF37] border border-[#D4AF37]/40 shadow-md">
                    {service.badge}
                  </span>
                </div>

                {/* Service Icon Floating */}
                <div className="absolute bottom-3 right-4 w-12 h-12 rounded-xl bg-[#0B132B] border border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] text-lg shadow-lg group-hover:bg-[#D4AF37] group-hover:text-[#0B132B] transition-colors">
                  <i className={service.iconClass}></i>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-serif-luxury text-2xl font-bold text-white group-hover:text-[#ECC880] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-[#D4AF37] font-medium mt-1">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Included Garments List */}
                  <div className="space-y-2 pt-2 border-t border-slate-700/60">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Signature Pieces:
                    </p>
                    <ul className="space-y-1.5">
                      {service.itemsList.map((item, i) => (
                        <li
                          key={i}
                          className="text-xs sm:text-sm text-slate-200 flex items-center space-x-2"
                        >
                          <i className="fa-solid fa-check text-[10px] text-[#D4AF37]"></i>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Craft Highlights */}
                  <div className="bg-[#070D1E] p-3.5 rounded-xl border border-white/5 space-y-1.5">
                    {service.keyFeatures.map((feat, fi) => (
                      <div key={fi} className="flex items-center text-xs text-slate-300 space-x-2">
                        <i className="fa-solid fa-star text-[9px] text-[#ECC880]"></i>
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="space-y-2.5 pt-4 border-t border-slate-700/60">
                  <a
                    href={getWhatsAppServiceLink(service.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#0B132B] bg-gradient-to-r from-[#ECC880] via-[#D4AF37] to-[#C5A059] hover:brightness-110 shadow-md transition-all flex items-center justify-center space-x-2"
                  >
                    <i className="fa-brands fa-whatsapp text-base"></i>
                    <span>Consult on WhatsApp</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => {
                      setSelectedService(service);
                      if (onSelectService) onSelectService(service);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <i className="fa-solid fa-circle-info text-[11px] text-[#D4AF37]"></i>
                    <span>View Fabric & Details</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Custom Inquiries */}
        <div className="mt-16 bg-gradient-to-r from-[#162447] via-[#0F1E36] to-[#162447] rounded-2xl p-6 sm:p-8 border border-[#D4AF37]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif-luxury text-xl sm:text-2xl font-bold text-white">
              Have a Specific Fabric or Custom Design in Mind?
            </h4>
            <p className="text-sm text-slate-300 font-light">
              Send us your inspiration picture or let our master styler recommend the best cuts for your body type.
            </p>
          </div>

          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-[#0B132B] bg-[#D4AF37] hover:bg-[#ECC880] shadow-md transition-all flex items-center space-x-2"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Send Picture on WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Service Details Modal */}
      {selectedService && (
        <div
          id="service-detail-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-[#0F1E36] border border-[#D4AF37]/40 rounded-2xl max-w-xl w-full p-6 sm:p-8 text-white shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-2"
              aria-label="Close modal"
            >
              <i className="fa-solid fa-xmark text-xl"></i>
            </button>

            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-[#0B132B] text-[#D4AF37] flex items-center justify-center border border-[#D4AF37]/40">
                <i className={selectedService.iconClass}></i>
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
                  {selectedService.badge}
                </span>
                <h3 className="font-serif-luxury text-2xl font-bold">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {selectedService.description}
            </p>

            <div className="space-y-3">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#ECC880]">
                Garment Options & Customizations:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {selectedService.itemsList.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-[#070D1E] border border-white/5 text-xs text-slate-200 flex items-center space-x-2"
                  >
                    <i className="fa-solid fa-scissors text-[10px] text-[#D4AF37]"></i>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#ECC880]">
                Quality Guarantees:
              </h4>
              <ul className="space-y-1 text-xs text-slate-300">
                {selectedService.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-center space-x-2">
                    <i className="fa-solid fa-check text-green-400 text-xs"></i>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-700 flex flex-col sm:flex-row gap-3">
              <a
                href={getWhatsAppServiceLink(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-[#0B132B] bg-[#D4AF37] hover:bg-[#ECC880] text-center flex items-center justify-center space-x-2"
              >
                <i className="fa-brands fa-whatsapp text-base"></i>
                <span>Order This Collection</span>
              </a>
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="py-3 px-5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 border border-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
