import React, { useState } from 'react';
import { LOOKBOOK_ITEMS, BRAND_INFO } from '../data/tailoringData';
import { LookbookItem } from '../types';

export const LookbookGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<LookbookItem | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? LOOKBOOK_ITEMS
      : LOOKBOOK_ITEMS.filter((item) => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Creations' },
    { id: 'corporate', label: 'Corporate & Suits' },
    { id: 'traditional', label: 'Traditional & Senator' },
    { id: 'bespoke', label: 'Bespoke & Occasion' },
  ];

  return (
    <section id="lookbook" className="py-20 lg:py-28 bg-[#0F1E36] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#162447] text-[#ECC880] text-xs font-semibold tracking-widest uppercase border border-[#D4AF37]/30">
            <i className="fa-solid fa-camera text-xs"></i>
            <span>Visual Portfolio</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            The Bespoke <span className="gold-gradient-text">Lookbook</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Explore our custom creations. Each piece reflects exact bespoke proportions, premium fabric texture, and razor-sharp finishing.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-[#0B132B] shadow-md shadow-[#D4AF37]/20 scale-105'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              id={`lookbook-card-${item.id}`}
              className="group relative rounded-2xl overflow-hidden bg-[#070D1E] border border-slate-800 hover:border-[#D4AF37]/60 shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image Frame */}
              <div className="relative h-80 sm:h-96 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070D1E] via-[#070D1E]/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                {/* Top Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#0B132B]/90 text-[#ECC880] border border-[#D4AF37]/30">
                    {item.categoryLabel}
                  </span>
                </div>

                {/* Quick Expand Button */}
                <button
                  type="button"
                  onClick={() => setSelectedImage(item)}
                  className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B132B]/80 text-[#D4AF37] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-[#D4AF37] hover:text-[#0B132B]"
                  aria-label="View large"
                >
                  <i className="fa-solid fa-expand text-xs"></i>
                </button>

                {/* Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 space-y-2">
                  <h3 className="font-serif-luxury text-lg font-bold text-white group-hover:text-[#ECC880] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {item.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {item.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300 font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2 flex items-center justify-between">
                    <a
                      href={`https://wa.me/2347018278641?text=${encodeURIComponent(
                        `Hello Eazy Clothing Exquisites, I saw the '${item.title}' in your lookbook and I want to order a similar custom attire.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold text-[#D4AF37] hover:text-[#ECC880] flex items-center space-x-1"
                    >
                      <span>Order This Style</span>
                      <i className="fa-solid fa-arrow-right text-[10px]"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Order Callout */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-300 mb-4">
            Follow our daily tailoring updates & client transformations on Instagram.
          </p>
          <a
            href={BRAND_INFO.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white text-xs font-bold hover:brightness-110 shadow-md transition-all"
          >
            <i className="fa-brands fa-instagram text-base"></i>
            <span>Follow {BRAND_INFO.instagram.handle} on Instagram</span>
          </a>
        </div>
      </div>

      {/* Lightbox / Zoom Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="bg-[#0F1E36] border border-[#D4AF37]/40 rounded-2xl max-w-2xl w-full overflow-hidden text-white shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#0B132B]/80 text-white hover:text-[#D4AF37] flex items-center justify-center z-10"
            >
              <i className="fa-solid fa-xmark text-lg"></i>
            </button>

            <div className="max-h-[60vh] overflow-hidden bg-black">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full object-contain max-h-[60vh] mx-auto"
              />
            </div>

            <div className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase font-semibold text-[#D4AF37]">
                  {selectedImage.categoryLabel}
                </span>
                <span className="text-xs text-slate-400">Eazy Clothing Exquisites</span>
              </div>
              <h3 className="font-serif-luxury text-2xl font-bold">
                {selectedImage.title}
              </h3>
              <p className="text-sm text-slate-300">
                {selectedImage.description}
              </p>

              <div className="pt-3 border-t border-slate-700 flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/2347018278641?text=${encodeURIComponent(
                    `Hello, I would like to order a bespoke version of '${selectedImage.title}'.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-[#0B132B] bg-[#D4AF37] hover:bg-[#ECC880] text-center flex items-center justify-center space-x-2"
                >
                  <i className="fa-brands fa-whatsapp text-base"></i>
                  <span>Inquire on WhatsApp</span>
                </a>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="py-3 px-5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/5 border border-white/10"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
