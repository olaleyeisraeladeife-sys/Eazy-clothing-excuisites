import React, { useState } from 'react';
import { BRAND_INFO, FAQS } from '../data/tailoringData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    attireType: 'Corporate Bespoke Suit',
    timeline: 'Standard (7-10 Days)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct structured WhatsApp message
    const waText = encodeURIComponent(
      `*NEW INQUIRY - EAZY CLOTHING EXQUISITES*
Full Name: ${formData.fullName}
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone}
Attire Interested: ${formData.attireType}
Timeline Needed: ${formData.timeline}
Message / Specs: ${formData.message}`
    );

    // Open WhatsApp
    window.open(`https://wa.me/2347018278641?text=${waText}`, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#0B132B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#162447] text-[#ECC880] text-xs font-semibold tracking-widest uppercase border border-[#D4AF37]/30">
            <i className="fa-solid fa-comments text-xs"></i>
            <span>Get in Touch</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            Let's Craft Your <span className="gold-gradient-text">Next Masterpiece</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Ready for your bespoke consultation, custom fitting, or event wardrobe styling? Contact our master tailoring team today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Contact Channels & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F1E36] rounded-2xl p-6 sm:p-8 border border-slate-700/80 shadow-xl space-y-6">
              <h3 className="font-serif-luxury text-2xl font-bold text-white">
                Contact Information
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                Reach out to us directly via phone, WhatsApp, email, or social media for prompt consultations and order updates.
              </p>

              {/* Contact Detail Cards */}
              <div className="space-y-4">
                {/* Phones / WhatsApp */}
                <div className="p-4 rounded-xl bg-[#070D1E] border border-white/5 space-y-2">
                  <div className="flex items-center space-x-3">
                    <div className="w-9 h-9 rounded-lg bg-[#25D366]/20 text-[#25D366] flex items-center justify-center">
                      <i className="fa-brands fa-whatsapp text-lg"></i>
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white uppercase tracking-wider">
                        Phone & WhatsApp
                      </p>
                      <p className="text-[11px] text-slate-400">Direct Consultation & Fit Support</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href="https://wa.me/2347018278641"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-[#25D366]/15 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/30 transition-colors flex items-center space-x-1"
                    >
                      <i className="fa-brands fa-whatsapp"></i>
                      <span>07018278641</span>
                    </a>
                    <a
                      href="tel:09098683092"
                      className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 transition-colors flex items-center space-x-1"
                    >
                      <i className="fa-solid fa-phone text-[#D4AF37]"></i>
                      <span>09098683092</span>
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="p-4 rounded-xl bg-[#070D1E] border border-white/5 flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#EA4335]/20 text-[#EA4335] flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-envelope text-base"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Gmail Address
                    </p>
                    <a
                      href={`mailto:${BRAND_INFO.email}`}
                      className="text-xs sm:text-sm font-medium text-[#ECC880] hover:underline"
                    >
                      {BRAND_INFO.email}
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="p-4 rounded-xl bg-[#070D1E] border border-white/5 flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E1306C]/20 text-[#E1306C] flex items-center justify-center shrink-0">
                    <i className="fa-brands fa-instagram text-lg"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Instagram
                    </p>
                    <a
                      href={BRAND_INFO.instagram.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-[#ECC880] hover:underline"
                    >
                      {BRAND_INFO.instagram.handle}
                    </a>
                  </div>
                </div>

                {/* Facebook */}
                <div className="p-4 rounded-xl bg-[#070D1E] border border-white/5 flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-[#1877F2]/20 text-[#1877F2] flex items-center justify-center shrink-0">
                    <i className="fa-brands fa-facebook text-lg"></i>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white uppercase tracking-wider">
                      Facebook
                    </p>
                    <a
                      href={BRAND_INFO.facebook.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-medium text-[#ECC880] hover:underline"
                    >
                      {BRAND_INFO.facebook.name}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours */}
              <div className="pt-2 border-t border-slate-700/60 flex items-center space-x-3 text-xs text-slate-300">
                <i className="fa-solid fa-clock text-[#D4AF37]"></i>
                <span>{BRAND_INFO.hours}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Bespoke Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#0F1E36] rounded-2xl p-6 sm:p-8 md:p-10 border border-slate-700/80 shadow-xl space-y-6">
              <div>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
                  Send a Consultation Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
                  Fill in your requirements. Clicking submit will directly prepare your consultation on WhatsApp for instant confirmation.
                </p>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-xl bg-green-950/60 border border-green-500/40 text-green-200 text-xs flex items-center space-x-3">
                  <i className="fa-solid fa-circle-check text-green-400 text-lg"></i>
                  <div>
                    <p className="font-bold">WhatsApp Consultation Opened!</p>
                    <p className="text-[11px] text-green-300">
                      Our master tailor will review your requested styling immediately.
                    </p>
                  </div>
                </div>
              )}

              <form id="bespoke-contact-form" onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Full Name <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Obas Ishaq"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1E] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Email Address <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="e.g. client@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1E] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Phone / WhatsApp Number <span className="text-[#D4AF37]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="e.g. 07018278641"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1E] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Garment of Interest
                    </label>
                    <select
                      name="attireType"
                      value={formData.attireType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-[#070D1E] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                    >
                      <option value="Corporate Bespoke Suit">Corporate Bespoke Suit (2/3-Piece)</option>
                      <option value="Senator Outfit (Short/Long Sleeve)">Traditional Senator Outfit</option>
                      <option value="Royal Agbada 3-Piece">Royal Agbada 3-Piece with Embroidery</option>
                      <option value="Designer Cotton Shirts & Trousers">Designer Cotton Shirts & Trousers</option>
                      <option value="Groom / Wedding Bespoke Package">Groom / Wedding Bespoke Package</option>
                      <option value="Custom Special Occasion Attire">Custom Special Occasion Attire</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Desired Delivery Timeline
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#070D1E] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#D4AF37] transition-colors"
                  >
                    <option value="Standard (7-10 Days)">Standard (7 to 10 Working Days)</option>
                    <option value="Express Priority (3-5 Days)">Express Priority (3 to 5 Days)</option>
                    <option value="Upcoming Wedding / Event (Flexible)">Upcoming Wedding / Event (Flexible)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Your Message / Custom Style Specifications <span className="text-[#D4AF37]">*</span>
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Describe your preferred fabric color, cut, occasion, or any specific requests..."
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-[#070D1E] border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#D4AF37] transition-colors"
                  ></textarea>
                </div>

                <div className="pt-2">
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-semibold text-sm sm:text-base text-[#0B132B] bg-gradient-to-r from-[#ECC880] via-[#D4AF37] to-[#C5A059] hover:brightness-110 shadow-lg hover:shadow-[#D4AF37]/30 transition-all flex items-center justify-center space-x-2"
                  >
                    <i className="fa-brands fa-whatsapp text-lg font-bold"></i>
                    <span>Send Message & Book Consultation</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div className="mt-20 max-w-4xl mx-auto space-y-4">
          <div className="text-center mb-8">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Everything you need to know about our bespoke ordering & fitting process
            </p>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="bg-[#0F1E36] rounded-xl border border-slate-700/70 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                  className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-semibold text-white hover:text-[#ECC880] transition-colors"
                >
                  <span className="flex items-center space-x-3">
                    <span className="text-[#D4AF37] text-xs font-serif-luxury">Q{fIdx + 1}.</span>
                    <span>{faq.question}</span>
                  </span>
                  <i
                    className={`fa-solid ${
                      openFaq === fIdx ? 'fa-minus' : 'fa-plus'
                    } text-xs text-[#D4AF37] ml-2 shrink-0`}
                  ></i>
                </button>

                {openFaq === fIdx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-700/50 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
