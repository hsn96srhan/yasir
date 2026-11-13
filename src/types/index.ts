export interface ServiceItem {
  id: string;
  title: string;
  summary: string;
  detail: string;
  features: string[];
  image: string;
}

export interface ProductItem {
  id: string;
  name: string;
  category: 'مطبوعات' | 'استيكر وسيارات' | 'هدايا شركات' | 'معارض وكلادينق';
  spec: string;
  image: string;
}

export interface ReviewItem {
  id: string;
  name: string;
  title: string;
  company: string;
  rating: number;
  quote: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface PartnerItem {
  id: string;
  name: string;
  category: string;
  logoText: string;
}

export interface ProjectShowcase {
  id: string;
  title: string;
  category: string;
  image: string;
}

