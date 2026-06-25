
import React from 'react';
import { Monitor, Layout, Tv, Bus, CheckCircle, Award, Users } from 'lucide-react';
import { Service, Testimonial, CaseStudy } from './types';

export const BRAND_NAME = "Obitiscare";
export const DOMAIN = "obitiscare.in";
export const TAGLINE = "We Care Your Business";
export const PHONE = "+91 87002 94300";
export const WHATSAPP_LINK = "https://wa.me/918700294300";
export const OFFICE_ADDRESS = "TOP FLOOR, PLOT NO 83 AND 83-A, PATEL GARDEN EXTN, New Delhi, South West Delhi, Delhi, 110078";

export const SERVICES_DATA: Service[] = [
  {
    id: 'digital-ads',
    title: 'Digital Ads',
    shortDesc: 'Campaign strategy, creative, targeting, and conversion tracking on Google, YouTube, and Meta.',
    longDesc: 'Our digital advertising solutions focus on full-funnel performance. From top-of-funnel awareness on YouTube to high-intent search ads on Google and highly targeted social campaigns on Meta/Instagram, we handle everything from creative production to real-time optimization.',
    icon: <Monitor className="w-8 h-8 text-brand-orange" />,
    features: ['Google Search & Display', 'YouTube Video Ads', 'Facebook & Instagram Ads', 'Conversion Tracking', 'Lead Optimization'],
    pricingHint: 'Packages starting from ₹15,000/month (excl. ad spend)',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'hoarding-ads',
    title: 'Hoarding Advertisement',
    shortDesc: 'Site research, design, booking, and production management for high-impact billboards.',
    longDesc: 'Obitiscare provides premium hoarding sites across India. We manage the entire lifecycle: from scouting the perfect high-traffic location to professional graphic design, material production, and final installation.',
    icon: <Layout className="w-8 h-8 text-brand-orange" />,
    features: ['Prime Location Scouting', 'Large Format Design', 'High-Quality Flex Print', 'Mounting & Maintenance', 'Night Lighting Options'],
    pricingHint: 'Per-site monthly rentals based on location traffic.',
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'broadcast-ads',
    title: 'Broadcast Media',
    shortDesc: 'TV & Radio commercials: script, production coordination, and strategic media buying.',
    longDesc: 'Command mass attention through television and radio. We offer end-to-end services including scriptwriting, voiceover talent, studio production, and media buying to ensure your spots air during peak engagement times.',
    icon: <Tv className="w-8 h-8 text-brand-orange" />,
    features: ['TV Commercial Production', 'Radio Spot Voiceovers', 'Script Writing', 'Prime Time Slots', 'Regional Targeting'],
    pricingHint: 'Custom production + media buying plans available.',
    image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ooh-transit',
    title: 'OOH & Transit',
    shortDesc: 'Billboards, bus shelters, transit, and banners: creative + placement optimization.',
    longDesc: 'Out-of-home advertising goes beyond billboards. We place your brand on bus shelters, transit vehicles, and metro stations to capture consumers on the move.',
    icon: <Bus className="w-8 h-8 text-brand-orange" />,
    features: ['Bus Shelters & Benches', 'Transit/Vehicle Branding', 'Metro Station Ads', 'Mall Branding', 'Street Furniture'],
    pricingHint: 'Network-wide or single-point options.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Sameer Gupta',
    role: 'Managing Director',
    company: 'Gupta Dental Clinics',
    quote: 'Obitiscare transformed our patient acquisition. Their local targeting on Google and Meta brought us a 30% increase in bookings within 2 months.',
    avatar: 'https://i.pravatar.cc/150?u=1'
  },
  {
    id: '2',
    name: 'Anjali Mehra',
    role: 'Marketing Head',
    company: 'Urban Living Real Estate',
    quote: 'The hoarding placements they secured for our new project launch were top-notch. Highly professional and results-oriented team.',
    avatar: 'https://i.pravatar.cc/150?u=2'
  },
  {
    id: '3',
    name: 'Rohan Sharma',
    role: 'Founder',
    company: 'QuickFix Electronics',
    quote: 'Managing digital ads was a headache until Obitiscare took over. Now we get quality leads at half the acquisition cost.',
    avatar: 'https://i.pravatar.cc/150?u=3'
  }
];

export const CREDIBILITY_STATS = [
  { label: 'Years of Experience', value: '8+', icon: <Award className="w-6 h-6" /> },
  { label: 'Campaigns Managed', value: '500+', icon: <CheckCircle className="w-6 h-6" /> },
  { label: 'Happy Clients', value: '200+', icon: <Users className="w-6 h-6" /> }
];

export const PORTFOLIO_DATA: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Local Retail Growth',
    category: 'Digital Ads',
    client: 'Heritage Silks',
    results: '400% ROI in 3 Months',
    description: 'We implemented a hyper-local Meta Ads strategy combined with Google Search to drive walk-ins for a festive sale.',
    image: 'https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'cs2',
    title: 'Metro Reach Campaign',
    category: 'OOH / Transit',
    client: 'EcoRide India',
    results: '2M+ Monthly Impressions',
    description: 'A massive transit branding campaign across three major metro lines to launch a new electric vehicle service.',
    image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=800'
  }
];
