import { ServiceItem, ProcessStep, LookbookItem } from '../types';

export const BRAND_INFO = {
  name: 'Eazy Clothing Exquisites',
  tagline: 'Bespoke Tailoring Crafted with Precision',
  shortBio:
    'Dedicated to impeccable finishing, custom body measurements, and artisanal craftsmanship for modern corporate suits and rich traditional African attire.',
  phones: [
    { display: '07018278641', raw: '+2347018278641', whatsapp: '2347018278641', isPrimary: true },
    { display: '09098683092', raw: '+2349098683092', whatsapp: '2349098683092', isPrimary: false },
  ],
  whatsappUrl: 'https://wa.me/2347018278641',
  email: 'eazyclothing1@gmail.com',
  instagram: {
    handle: '@Eazyclothing_19',
    url: 'https://instagram.com/Eazyclothing_19',
  },
  facebook: {
    name: 'Wp Obas Ishaq',
    url: 'https://facebook.com/',
  },
  hours: 'Monday – Saturday: 8:00 AM – 7:00 PM (WAT)',
  location: 'Lagos & Nationwide Delivery Across Nigeria & Diaspora',
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'corporate-formal',
    title: 'Corporate & Formal Wear',
    subtitle: 'Sharp silhouettes, executive posture, & flawless drapery',
    category: 'corporate',
    badge: 'Executive & Business',
    description:
      'Engineered for executives, professionals, and discerning gentlemen. Every suit, blazer, and designer shirt is cut to your exact anatomical proportions with hand-basted canvassing and premium lining.',
    itemsList: [
      'Two-Piece & Three-Piece Bespoke Suits',
      'Slim-Fit & Classic Tailored Trousers',
      'Crisp Egyptian Cotton Designer Shirts',
      'Double-Breasted Tuxedos & Blazers',
      'Executive Safari & Trench Jackets',
    ],
    keyFeatures: [
      'Hand-finished lapels & pick stitching',
      'Breathable horsehair canvas structure',
      'Curated Super 120s – 160s Italian & English wool',
    ],
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=1000&q=80',
    iconClass: 'fa-solid fa-user-tie',
  },
  {
    id: 'traditional-native',
    title: 'Traditional & Native Wear',
    subtitle: 'Majestic African cultural elegance with contemporary edge',
    category: 'traditional',
    badge: 'Cultural Grandeur',
    description:
      'Celebrating authentic African heritage with razor-sharp geometric cuts and royal embroidery. From minimalist Senator suits to grand celebratory Agbada, we craft commanding cultural presence.',
    itemsList: [
      'Modern Senator Suits (Short & Long Sleeve)',
      'Royal 3-Piece Agbada with Intricate Embroidery',
      'Luxury Kaftans & Jalabiya Tailoring',
      'Contemporary Dashiki & Danshiki Ensembles',
      'Traditional Wedding & Chieftaincy Regalia',
    ],
    keyFeatures: [
      'Original Swiss Atiku & Guinea Brocade fabrics',
      'High-precision computerized & manual embroidery',
      'Crisp collar stiffeners & non-crease finishing',
    ],
    image:
      'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=1000&q=80',
    iconClass: 'fa-solid fa-crown',
  },
  {
    id: 'custom-bespoke',
    title: 'Custom Bespoke Fashion',
    subtitle: 'Unique garments sculpted exclusively for your landmark occasions',
    category: 'bespoke',
    badge: 'Artisanal One-of-One',
    description:
      'Your personal sartorial statement. Whether for wedding parties, gala ceremonies, red-carpet events, or custom everyday luxury, we co-design every seam, button, pocket, and monogram.',
    itemsList: [
      'Bespoke Groom & Groomsmen Wardrobes',
      'Special Occasion & Red Carpet Outfits',
      'Custom Fabric Sourcing & Curation',
      'Monogrammed & Custom-Lined Garments',
      'Wardrobe Styling & Seasonal Refresh',
    ],
    keyFeatures: [
      'Individualized pattern drafting from 24+ measurements',
      'Personalized consultation & swatch review',
      'Comprehensive fitting guarantee',
    ],
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1000&q=80',
    iconClass: 'fa-solid fa-scissors',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: 1,
    title: 'Consultation & Measurements',
    subtitle: 'Defining your vision and exact fit',
    description:
      'We start by discussing your desired style, occasion, and preferred silhouette. You choose from our premium fabric collection, and we record detailed anatomical measurements either in-person or via our guided digital fit form.',
    iconClass: 'fa-solid fa-ruler-combined',
    highlights: [
      'Style consultation & style moodboards',
      'Premium fabric swatches selection',
      'Comprehensive 24-point body measurement',
    ],
  },
  {
    stepNumber: 2,
    title: 'Precision Tailoring',
    subtitle: 'Meticulous cutting and artisanal sewing',
    description:
      'Our master tailors draft a bespoke blueprint unique to your body structure. Each piece is hand-cut and assembled with reinforced seams, neat inner lining, and precision embroidery, honoring traditional tailoring rigor.',
    iconClass: 'fa-solid fa-vest-patches',
    highlights: [
      'Individual pattern drafting',
      'Hand-canvassing & structural fusing',
      'Multi-stage quality & tension checks',
    ],
  },
  {
    stepNumber: 3,
    title: 'Delivery & Fit Guarantee',
    subtitle: 'Ensuring comfort, confidence, and perfection',
    description:
      'Your tailored attire undergoes final pressing and steam treatment before prompt, secured doorstep delivery. We confirm your fit and provide complimentary adjustments if any refinement is ever needed.',
    iconClass: 'fa-solid fa-box-open',
    highlights: [
      'Secured luxury garment packaging',
      'Fast doorstep nationwide & international shipping',
      '100% perfect fit satisfaction guarantee',
    ],
  },
];

export const LOOKBOOK_ITEMS: LookbookItem[] = [
  {
    id: 'lb-1',
    title: 'Midnight Navy Executive Three-Piece',
    category: 'corporate',
    categoryLabel: 'Corporate Wear',
    description: 'Cut from Super 140s Italian Wool with peak lapels and double vents.',
    image:
      'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80',
    tags: ['Italian Wool', 'Bespoke Suit', 'Executive'],
  },
  {
    id: 'lb-2',
    title: 'Royal White Agbada with Gold Chain Embroidery',
    category: 'traditional',
    categoryLabel: 'Traditional Wear',
    description: 'Heavyweight Austrian Atiku brocade with handcrafted neck and chest embroidery.',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80',
    tags: ['Royal Agbada', 'Swiss Atiku', 'Gold Embroidery'],
  },
  {
    id: 'lb-3',
    title: 'Emerald Green Senator Suit with Asymmetrical Cut',
    category: 'traditional',
    categoryLabel: 'Traditional Wear',
    description: 'Modern minimalist chest detailing with tailored slim trousers.',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80',
    tags: ['Senator Outfit', 'Modern Native', 'Slim Fit'],
  },
  {
    id: 'lb-4',
    title: 'Classic Charcoal Tuxedo with Satin Shawl Lapel',
    category: 'corporate',
    categoryLabel: 'Corporate Wear',
    description: 'Tailored for black-tie galas, weddings, and distinguished award ceremonies.',
    image:
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800&q=80',
    tags: ['Tuxedo', 'Black Tie', 'Shawl Lapel'],
  },
  {
    id: 'lb-5',
    title: 'Monochrome Bespoke Groom Collection',
    category: 'bespoke',
    categoryLabel: 'Custom Bespoke',
    description: 'Harmonized bridal and groomsmen set crafted with customized monograms.',
    image:
      'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80',
    tags: ['Wedding Attire', 'Groom Styling', 'Custom Monogram'],
  },
  {
    id: 'lb-6',
    title: 'Bespoke Crisp French Cuff Dress Shirt',
    category: 'corporate',
    categoryLabel: 'Corporate Wear',
    description: '100% Giza Egyptian cotton with mother-of-pearl buttons and custom collar spread.',
    image:
      'https://images.unsplash.com/photo-1620012253295-c15c429fccf8?auto=format&fit=crop&w=800&q=80',
    tags: ['Egyptian Cotton', 'French Cuffs', 'Custom Shirt'],
  },
];

export const CRAFTSMANSHIP_PILLARS = [
  {
    title: 'Neat & Clean Finishing',
    description:
      'Every seam is bound or overcast cleanly with no loose threads. We pride ourselves on the internal architecture of our clothes being as pristine as the exterior.',
    icon: 'fa-solid fa-wand-magic-sparkles',
  },
  {
    title: 'Custom Anatomical Fit',
    description:
      'No standard off-the-rack templates. We account for slope of shoulder, posture, arm length, and body dynamics for unmatched ease of movement.',
    icon: 'fa-solid fa-arrows-to-dot',
  },
  {
    title: 'Finest Fabric Curation',
    description:
      'We handpick breathable wools, Egyptian cottons, Austrian Atiku, and original Cashmere blends engineered to withstand tropical and temperate climates.',
    icon: 'fa-solid fa-gem',
  },
  {
    title: 'Heritage & Modernity',
    description:
      'Seamlessly blending rich African traditions with clean contemporary silhouettes, crafting timeless dignity for weddings, boardrooms, and celebrations.',
    icon: 'fa-solid fa-compass-drafting',
  },
];

export const FAQS = [
  {
    question: 'How do I submit my measurements if I am not in Lagos?',
    answer:
      'We have a simple step-by-step digital measurement guide that shows you exactly how to take your measurements using any standard tape. Alternatively, our master tailor can hop on a quick 5-minute WhatsApp video call to assist you!',
  },
  {
    question: 'What is the typical turnaround time for orders?',
    answer:
      'Standard custom orders are completed within 7 to 10 working days. For urgent weddings, travel, or corporate events, we offer priority express tailoring delivered within 3 to 5 days.',
  },
  {
    question: 'Can I provide my own fabric or do you source it?',
    answer:
      'Both! You can deliver your chosen material to us, or select from our catalog of certified Super 120s-160s wools, original Swiss Atiku, cashmere, and high-grade cottons.',
  },
  {
    question: 'Do you ship outside Nigeria?',
    answer:
      'Yes! We safely package and ship custom garments across Nigeria via reliable courier, and worldwide to the UK, USA, Canada, and Europe via DHL Express.',
  },
];
