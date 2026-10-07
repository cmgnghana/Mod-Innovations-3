export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  featured?: boolean;
  deliverables?: string[];
  category?: 'Hardware & Repairs' | 'Printing & Production' | 'Design & Signage';
  suitableFor?: string;
  problemSolved?: string;
  technicalHighlights?: string[];
  serviceCtaText?: string;
}

export interface InquiryRequest {
  serviceId: string;
  fullName: string;
  email: string;
  phone: string;
  serviceCategory?: string;
  details: string;
}
