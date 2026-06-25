
import React from 'react';
import { SERVICES_DATA } from '../constants';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-white py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-brand-slate mb-4">
            Our Advertising Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From digital clicks to physical bricks, we've got you covered.
          </p>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-32">
            {SERVICES_DATA.map((service, idx) => (
              <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <div className="mb-6 flex items-center">
                    <div className="p-4 bg-white rounded-2xl shadow-md mr-4">
                      {service.icon}
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-brand-orange">Service Detail</span>
                  </div>
                  <h2 className="text-3xl font-display font-bold text-brand-slate mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.longDesc}
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, fidx) => (
                      <div key={fidx} className="flex items-center space-x-2 text-gray-700 font-medium">
                        <Check size={18} className="text-brand-orange flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="p-6 bg-white border border-dashed border-gray-300 rounded-xl mb-8">
                    <p className="text-sm text-gray-500 uppercase font-bold tracking-wider mb-2">Deliverables & Pricing</p>
                    <p className="text-brand-slate font-semibold">{service.pricingHint}</p>
                  </div>

                  <Link to="/contact" className="inline-block px-8 py-4 bg-brand-orange text-white font-bold rounded-lg hover:bg-brand-charcoal transition-all">
                    Request a Quote
                  </Link>
                </div>
                
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-tr from-brand-orange to-brand-teal opacity-20 blur-xl group-hover:opacity-30 transition-opacity rounded-2xl"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="relative rounded-2xl shadow-xl w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
