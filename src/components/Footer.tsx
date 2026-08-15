import React from 'react';
import { BRAND_INFO } from '../data/tailoringData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="main-footer" className="bg-[#070D1E] text-slate-400 border-t border-slate-800">
      {/* Top Footer Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full border border-[#D4AF37] bg-[#0B132B] flex items-center justify-center text-[#D4AF37]">
                <i className="fa-solid fa-scissors text-base transform -rotate-45"></i>
              </div>
              <div>
                <span className="font-serif-luxury text-xl font-bold text-white tracking-wide block">
                  Eazy Clothing
                </span>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#D4AF37] font-semibold block -mt-1">
                  Exquisites
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Bespoke tailoring crafted with precision. Elevating your everyday wardrobe with custom-fit corporate suits, designer shirts, and elegant traditional African attire.
            </p>

            {/* Social Icons */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={BRAND_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0B132B] border border-white/10 hover:border-[#25D366] text-[#25D366] flex items-center justify-center transition-all hover:scale-110"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

              <a
                href={BRAND_INFO.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0B132B] border border-white/10 hover:border-[#E1306C] text-[#E1306C] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href={BRAND_INFO.facebook.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#0B132B] border border-white/10 hover:border-[#1877F2] text-[#1877F2] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href={`mailto:${BRAND_INFO.email}`}
                className="w-9 h-9 rounded-full bg-[#0B132B] border border-white/10 hover:border-[#EA4335] text-[#EA4335] flex items-center justify-center transition-all hover:scale-110"
                aria-label="Gmail"
              >
                <i className="fa-solid fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#D4AF37] transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">Services & Collections</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#D4AF37] transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#lookbook" className="hover:text-[#D4AF37] transition-colors">Lookbook Gallery</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Tailoring Collections */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              Our Collections
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Corporate & Formal Suits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Designer Shirts & Trousers
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Modern Senator Outfits
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Royal Embroidered Agbada
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Wedding & Groom Styling
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Reach */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif-luxury text-sm font-bold text-white uppercase tracking-wider">
              Direct Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <p className="flex items-center space-x-2">
                <i className="fa-solid fa-phone text-[#D4AF37] text-[11px]"></i>
                <a href="tel:07018278641" className="hover:text-[#D4AF37]">07018278641</a>
                <span>,</span>
                <a href="tel:09098683092" className="hover:text-[#D4AF37]">09098683092</a>
              </p>

              <p className="flex items-center space-x-2">
                <i className="fa-solid fa-envelope text-[#D4AF37] text-[11px]"></i>
                <a href={`mailto:${BRAND_INFO.email}`} className="hover:text-[#D4AF37] break-all">
                  {BRAND_INFO.email}
                </a>
              </p>

              <p className="flex items-center space-x-2">
                <i className="fa-brands fa-instagram text-[#D4AF37] text-[11px]"></i>
                <a href={BRAND_INFO.instagram.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">
                  {BRAND_INFO.instagram.handle}
                </a>
              </p>

              <p className="flex items-center space-x-2">
                <i className="fa-brands fa-facebook text-[#D4AF37] text-[11px]"></i>
                <a href={BRAND_INFO.facebook.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#D4AF37]">
                  {BRAND_INFO.facebook.name}
                </a>
              </p>

              <p className="flex items-center space-x-2 text-slate-400">
                <i className="fa-solid fa-location-dot text-[#D4AF37] text-[11px]"></i>
                <span>Lagos, Nigeria (Doorstep & Worldwide Delivery)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {currentYear} Eazy Clothing Exquisites. All rights reserved.</p>
          <p className="flex items-center space-x-1">
            <span>Handcrafted with precision & dignity</span>
            <i className="fa-solid fa-heart text-[#D4AF37] text-[10px] mx-1"></i>
            <span>in Nigeria</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
