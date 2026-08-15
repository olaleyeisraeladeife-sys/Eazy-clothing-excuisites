import React, { useState } from 'react';
import { BRAND_INFO } from '../data/tailoringData';

interface MeasurementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MeasurementModal: React.FC<MeasurementModalProps> = ({ isOpen, onClose }) => {
  const [measurementValues, setMeasurementValues] = useState({
    name: '',
    neck: '',
    chest: '',
    shoulder: '',
    sleeveLength: '',
    shirtLength: '',
    waist: '',
    thigh: '',
    trouserLength: '',
    agbadaLength: '',
    notes: '',
  });

  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setMeasurementValues({
      ...measurementValues,
      [e.target.name]: e.target.value,
    });
  };

  const formattedMeasurementsText = () => {
    return `*BESPOKE MEASUREMENT SUBMISSION - EAZY CLOTHING EXQUISITES*
Name: ${measurementValues.name || 'Client'}
- Neck: ${measurementValues.neck || 'N/A'} inches
- Chest/Bust: ${measurementValues.chest || 'N/A'} inches
- Shoulder: ${measurementValues.shoulder || 'N/A'} inches
- Sleeve Length: ${measurementValues.sleeveLength || 'N/A'} inches
- Top/Shirt Length: ${measurementValues.shirtLength || 'N/A'} inches
- Waist: ${measurementValues.waist || 'N/A'} inches
- Thigh/Lap: ${measurementValues.thigh || 'N/A'} inches
- Trouser Length: ${measurementValues.trouserLength || 'N/A'} inches
- Agbada Length: ${measurementValues.agbadaLength || 'N/A'} inches
- Special Notes/Preference: ${measurementValues.notes || 'None'}`;
  };

  const handleSendViaWhatsApp = () => {
    const text = encodeURIComponent(formattedMeasurementsText());
    window.open(`https://wa.me/2347018278641?text=${text}`, '_blank');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(formattedMeasurementsText());
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const measurementTips = [
    { title: 'Chest / Bust', desc: 'Measure around the fullest part of the chest, keeping tape horizontal.' },
    { title: 'Shoulder Width', desc: 'From the tip of one shoulder bone across the back to the other.' },
    { title: 'Sleeve Length', desc: 'From shoulder bone down along the arm to your wrist.' },
    { title: 'Trouser Length', desc: 'From waistline down to your ankle bone or shoe level.' },
    { title: 'Agbada Length', desc: 'From shoulder down to your preferred drop (shin or ankle).' },
  ];

  return (
    <div
      id="measurement-guide-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#0B132B] border border-[#D4AF37]/50 rounded-2xl max-w-3xl w-full p-6 sm:p-8 text-white shadow-2xl space-y-6 relative my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 text-slate-300 hover:text-white hover:bg-white/10 flex items-center justify-center"
          aria-label="Close"
        >
          <i className="fa-solid fa-xmark text-lg"></i>
        </button>

        {/* Modal Header */}
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-xl bg-[#162447] text-[#D4AF37] border border-[#D4AF37]/40 flex items-center justify-center text-xl">
            <i className="fa-solid fa-ruler-combined"></i>
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-wider text-[#D4AF37] font-semibold">
              Bespoke Fit Blueprint
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-white">
              Anatomical Measurement Form
            </h3>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300">
          Enter your measurements in inches below. You can send them directly to our master tailor on WhatsApp or copy the formatted text.
        </p>

        {/* Form Inputs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 bg-[#070D1E] p-4 rounded-xl border border-white/5">
          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Your Full Name:
            </label>
            <input
              type="text"
              name="name"
              placeholder="e.g. Adebayo Ogunlesi"
              value={measurementValues.name}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-sm text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Neck (inches):
            </label>
            <input
              type="text"
              name="neck"
              placeholder="e.g. 16.5"
              value={measurementValues.neck}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Chest / Bust:
            </label>
            <input
              type="text"
              name="chest"
              placeholder="e.g. 42"
              value={measurementValues.chest}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Shoulder Width:
            </label>
            <input
              type="text"
              name="shoulder"
              placeholder="e.g. 18.5"
              value={measurementValues.shoulder}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Sleeve Length:
            </label>
            <input
              type="text"
              name="sleeveLength"
              placeholder="e.g. 25"
              value={measurementValues.sleeveLength}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Shirt / Top Length:
            </label>
            <input
              type="text"
              name="shirtLength"
              placeholder="e.g. 32"
              value={measurementValues.shirtLength}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Waist:
            </label>
            <input
              type="text"
              name="waist"
              placeholder="e.g. 34"
              value={measurementValues.waist}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Thigh / Lap:
            </label>
            <input
              type="text"
              name="thigh"
              placeholder="e.g. 24"
              value={measurementValues.thigh}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Trouser Length:
            </label>
            <input
              type="text"
              name="trouserLength"
              placeholder="e.g. 40"
              value={measurementValues.trouserLength}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div>
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Agbada Length (if applicable):
            </label>
            <input
              type="text"
              name="agbadaLength"
              placeholder="e.g. 54"
              value={measurementValues.agbadaLength}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="sm:col-span-2 lg:col-span-3">
            <label className="block text-[11px] font-medium text-slate-300 mb-1">
              Style Notes / Preferences:
            </label>
            <textarea
              name="notes"
              rows={2}
              placeholder="e.g. Slim fit trouser with cuff, short sleeve senator collar, emerald green fabric"
              value={measurementValues.notes}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded-lg bg-[#0F1E36] border border-slate-700 text-xs text-white focus:outline-none focus:border-[#D4AF37]"
            ></textarea>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
            Quick Measurement Guide:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-slate-300">
            {measurementTips.map((tip, idx) => (
              <div key={idx} className="bg-white/5 p-2 rounded-md border border-white/5">
                <strong className="text-white">{tip.title}:</strong> {tip.desc}
              </div>
            ))}
          </div>
        </div>

        {/* Modal Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-slate-800">
          <button
            type="button"
            onClick={handleSendViaWhatsApp}
            className="flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-[#0B132B] bg-[#D4AF37] hover:bg-[#ECC880] flex items-center justify-center space-x-2 shadow-md"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Send to Master Tailor on WhatsApp</span>
          </button>

          <button
            type="button"
            onClick={handleCopy}
            className="py-3 px-5 rounded-xl text-xs font-medium text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 flex items-center justify-center space-x-1.5"
          >
            <i className={`fa-solid ${copied ? 'fa-check text-green-400' : 'fa-copy'}`}></i>
            <span>{copied ? 'Copied to Clipboard!' : 'Copy Text'}</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="py-3 px-4 rounded-xl text-xs font-medium text-slate-400 hover:text-white"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
