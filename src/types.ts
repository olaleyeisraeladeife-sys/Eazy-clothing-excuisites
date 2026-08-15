export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'corporate' | 'traditional' | 'bespoke';
  description: string;
  keyFeatures: string[];
  itemsList: string[];
  image: string;
  iconClass: string;
  badge: string;
}

export interface ProcessStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
  iconClass: string;
  highlights: string[];
}

export interface LookbookItem {
  id: string;
  title: string;
  category: 'corporate' | 'traditional' | 'bespoke';
  categoryLabel: string;
  description: string;
  image: string;
  tags: string[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  attireType: string;
  timeline: string;
  message: string;
}
