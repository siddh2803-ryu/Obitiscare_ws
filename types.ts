
// Fix: Import React to resolve the 'Cannot find namespace React' error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  icon: React.ReactNode;
  features: string[];
  pricingHint: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  results: string;
  description: string;
  image: string;
}
