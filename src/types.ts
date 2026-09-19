export interface FeatureModule {
  id: string;
  title: string;
  badge?: {
    text: string;
    type: 'hot' | 'pro' | 'new';
  };
  description: string;
  icon: string;
  tags: string[];
  color: string;
  bgColor: string;
  borderColor: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  period: string;
  price: string;
  cents: string;
  perMonth: string;
  savingsBadge?: string;
  isPopular?: boolean;
  features: string[];
  whatsAppText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  avatarLetter: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category?: 'general' | 'technical' | 'billing';
}

export interface SpecRow {
  label: string;
  value: string;
  highlight?: boolean;
}
