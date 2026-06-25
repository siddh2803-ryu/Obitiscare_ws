
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { BRAND_NAME, PHONE, WHATSAPP_LINK } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-sm py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col">
            <span className="text-2xl font-display font-extrabold text-brand-slate tracking-tight">
              {BRAND_NAME.toUpperCase()}
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-brand-orange font-bold -mt-1">
              Ad Agency
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-orange ${
                  location.pathname === link.path ? 'text-brand-orange font-semibold' : 'text-gray-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <a 
              href={WHATSAPP_LINK} 
              target="_blank" 
              rel="noreferrer"
              className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-transform hover:scale-110"
              title="Chat on WhatsApp"
            >
              <MessageSquare size={18} />
            </a>
            <a 
              href={`tel:${PHONE.replace(/\s/g, '')}`} 
              className="p-2 bg-brand-orange text-white rounded-full hover:bg-brand-charcoal transition-transform hover:scale-110"
              title="Call Us"
            >
              <Phone size={18} />
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
             <a href={`tel:${PHONE.replace(/\s/g, '')}`} className="text-brand-orange">
              <Phone size={20} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100 border-t' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 space-y-1 bg-white shadow-xl">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-4 text-base font-medium rounded-md ${
                location.pathname === link.path ? 'text-brand-orange bg-orange-50' : 'text-gray-600 hover:text-brand-orange'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
            <a 
              href={WHATSAPP_LINK}
              className="flex items-center justify-center space-x-2 py-3 bg-green-500 text-white rounded-lg font-semibold"
            >
              <MessageSquare size={18} />
              <span>WhatsApp</span>
            </a>
            <a 
              href={`tel:${PHONE.replace(/\s/g, '')}`}
              className="flex items-center justify-center space-x-2 py-3 bg-brand-orange text-white rounded-lg font-semibold"
            >
              <Phone size={18} />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
