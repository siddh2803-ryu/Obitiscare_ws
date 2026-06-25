
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { BRAND_NAME, TAGLINE, PHONE, OFFICE_ADDRESS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-slate text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <span className="text-2xl font-display font-extrabold tracking-tight">
              {BRAND_NAME.toUpperCase()}
            </span>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed italic">
              "{TAGLINE}"
            </p>
            <p className="mt-4 text-gray-400 text-sm leading-relaxed">
              Full-funnel advertising solutions for Indian businesses. We combine the power of digital precision with high-impact traditional OOH.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-brand-orange"><Instagram size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-orange"><Facebook size={20} /></a>
              <a href="#" className="text-gray-400 hover:text-brand-orange"><Linkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-brand-orange text-sm">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-brand-orange text-sm">About Us</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-orange text-sm">Our Services</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-brand-orange text-sm">Portfolio</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-brand-orange text-sm">Contant</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-brand-orange text-sm">Digital Marketing</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-orange text-sm">Hoarding & Billboards</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-orange text-sm">TV & Radio Ads</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-brand-orange text-sm">Transit Branding</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400 text-sm">
                <MapPin size={18} className="text-brand-orange flex-shrink-0 mt-1" />
                <span>{OFFICE_ADDRESS}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Phone size={18} className="text-brand-orange flex-shrink-0" />
                <span>{PHONE}</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400 text-sm">
                <Mail size={18} className="text-brand-orange flex-shrink-0" />
                <span>contact@obitiscare.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-gray-500 text-xs">
          <p>© {new Date().getFullYear()} {BRAND_NAME}. All rights reserved. Registered in India.</p>
          <p className="mt-2">Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
