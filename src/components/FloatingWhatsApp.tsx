import React, { useState } from 'react';
import { BRAND_INFO } from '../data/tailoringData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center space-x-3">
      {/* Interactive Tooltip / Prompt */}
      {showTooltip && (
        <div className="hidden sm:flex items-center bg-[#070D1E] text-white border border-[#D4AF37]/50 py-2 px-3.5 rounded-full shadow-2xl animate-bounce">
          <span className="text-xs font-semibold text-[#ECC880] mr-2">
            Need custom fitting?
          </span>
          <span className="text-xs text-slate-300">Chat with Master Tailor</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="ml-2 text-slate-400 hover:text-white text-xs"
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        id="floating-whatsapp-btn"
        href={BRAND_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center text-2xl shadow-2xl hover:scale-110 transition-all duration-300 group border-2 border-white/20"
        aria-label="Chat on WhatsApp"
      >
        <i className="fa-brands fa-whatsapp text-3xl"></i>
      </a>
    </div>
  );
};
