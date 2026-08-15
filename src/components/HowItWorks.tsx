import React from 'react';
import { PROCESS_STEPS, BRAND_INFO } from '../data/tailoringData';

interface HowItWorksProps {
  onOpenMeasurementGuide?: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onOpenMeasurementGuide }) => {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-[#F8F9FA] text-[#1E293B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0B132B] text-[#D4AF37] text-xs font-semibold tracking-widest uppercase">
            <i className="fa-solid fa-list-check text-xs"></i>
            <span>Seamless Sartorial Journey</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl md:text-5xl font-bold text-[#0B132B]">
            How It <span className="text-[#C5A059] italic">Works</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Our 3-step bespoke workflow is designed for effortless convenience, whether you visit our Lagos studio or order from anywhere in the world.
          </p>
        </div>

        {/* 3-Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Visual connecting line for desktop */}
          <div className="hidden md:block absolute top-1/3 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent -z-0"></div>

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.stepNumber}
              id={`process-step-${step.stepNumber}`}
              className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#D4AF37]/60 transition-all duration-300 relative z-10 flex flex-col justify-between group"
            >
              <div className="space-y-5">
                {/* Step Number Badge & Icon Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#0B132B] text-[#D4AF37] flex items-center justify-center text-xl shadow-md group-hover:scale-110 transition-transform">
                    <i className={step.iconClass}></i>
                  </div>
                  <span className="font-serif-luxury text-3xl font-bold text-[#D4AF37]/50 group-hover:text-[#D4AF37] transition-colors">
                    0{step.stepNumber}
                  </span>
                </div>

                {/* Step Title & Subtitle */}
                <div>
                  <h3 className="font-serif-luxury text-xl sm:text-2xl font-bold text-[#0B132B]">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#C5A059] mt-0.5">
                    {step.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {/* Highlight Checkpoints */}
                <div className="pt-3 border-t border-slate-100 space-y-2">
                  {step.highlights.map((hl, hidx) => (
                    <div key={hidx} className="flex items-center space-x-2 text-xs text-slate-700">
                      <i className="fa-solid fa-circle-check text-[11px] text-[#D4AF37]"></i>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step Contextual Action */}
              <div className="pt-6 mt-4 border-t border-slate-100">
                {step.stepNumber === 1 && (
                  <button
                    type="button"
                    onClick={onOpenMeasurementGuide}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-50 hover:bg-[#0B132B] text-slate-700 hover:text-[#D4AF37] border border-slate-200 hover:border-[#0B132B] text-xs font-semibold transition-all flex items-center justify-center space-x-1.5"
                  >
                    <i className="fa-solid fa-ruler text-xs"></i>
                    <span>View Measurement Guide</span>
                  </button>
                )}

                {step.stepNumber === 2 && (
                  <div className="text-center py-2 px-3 rounded-xl bg-slate-50 text-[11px] text-slate-500 font-medium border border-slate-100">
                    <i className="fa-solid fa-clock text-[#D4AF37] mr-1"></i>
                    7–10 Days Average Craft Time
                  </div>
                )}

                {step.stepNumber === 3 && (
                  <a
                    href={BRAND_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-xl bg-[#0B132B] text-[#D4AF37] hover:bg-[#162447] text-xs font-semibold transition-all flex items-center justify-center space-x-1.5"
                  >
                    <i className="fa-brands fa-whatsapp text-sm"></i>
                    <span>Start Step 1 Now</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Quick FAQ / Fitting Guarantee Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0 text-xl">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <div>
              <h4 className="font-serif-luxury text-lg font-bold text-[#0B132B]">
                The Eazy 100% Fit & Adjustment Guarantee
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 font-light">
                If the fit requires any fine adjustment upon delivery, we will adjust it for you free of charge. Your complete comfort is our highest priority.
              </p>
            </div>
          </div>

          <a
            href={BRAND_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-xl bg-[#0B132B] text-[#D4AF37] hover:bg-[#162447] text-xs font-semibold transition-colors flex items-center space-x-2"
          >
            <i className="fa-brands fa-whatsapp text-base"></i>
            <span>Consult Our Tailor</span>
          </a>
        </div>
      </div>
    </section>
  );
};
