
import React from 'react';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import ContactForm from '../components/ContactForm';
import { PHONE, WHATSAPP_LINK, OFFICE_ADDRESS } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50">
      <section className="bg-white py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-brand-slate mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to grow? Let's discuss your advertising goals.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border">
                <h3 className="text-xl font-bold text-brand-slate mb-6">Contact Information</h3>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="p-3 bg-orange-50 rounded-lg text-brand-orange mr-4">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Phone</p>
                      <p className="text-brand-slate font-semibold">{PHONE}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-3 bg-green-50 rounded-lg text-green-500 mr-4">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">WhatsApp</p>
                      <a href={WHATSAPP_LINK} className="text-brand-slate font-semibold hover:text-brand-orange underline">Chat with us directly</a>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-3 bg-blue-50 rounded-lg text-blue-500 mr-4">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Email</p>
                      <p className="text-brand-slate font-semibold">contact@obitiscare.in</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-3 bg-purple-50 rounded-lg text-purple-500 mr-4">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Office Address</p>
                      <p className="text-brand-slate font-semibold leading-relaxed">{OFFICE_ADDRESS}</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-500 mr-4">
                      <Clock size={20} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-1">Working Hours</p>
                      <p className="text-brand-slate font-semibold">Mon - Fir: 10:00 AM - 7:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-brand-orange p-8 rounded-2xl shadow-lg text-white">
                <h3 className="text-xl font-bold mb-4">Urgent Requirement?</h3>
                <p className="mb-6 opacity-90">Call us directly to jumpstart your campaign planning today.</p>
                <a 
                  href={`tel:${PHONE.replace(/\s/g, '')}`} 
                  className="block text-center py-4 bg-white text-brand-orange font-bold rounded-xl shadow-md hover:shadow-xl transition-all"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-sm border h-full">
                <h3 className="text-2xl font-bold text-brand-slate mb-2">Send us a Message</h3>
                <p className="text-gray-500 mb-8">Fill out the form below and an advertising specialist will get back to you within 24 hours.</p>
                <ContactForm light={true} />
              </div>
            </div>

          </div>

          {/* Map Placeholder */}
          <div className="mt-16 bg-white p-4 rounded-2xl shadow-sm border h-[400px]">
             <div className="w-full h-full bg-gray-100 rounded-xl flex items-center justify-center relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200" 
                  alt="Map Placeholder" 
                  className="w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                   <div className="bg-white px-8 py-4 rounded-full shadow-2xl flex items-center space-x-3 border-2 border-brand-orange">
                      <MapPin className="text-brand-orange" />
                      <span className="font-bold text-brand-slate">Locate our Office in Delhi</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
