
import React from 'react';
import { PORTFOLIO_DATA } from '../constants';
import { Link } from 'react-router-dom';
import { TrendingUp, Award, Map } from 'lucide-react';

const Portfolio: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gray-50 py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-brand-slate mb-4">
            Campaign Results
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See how we've helped Indian businesses achieve massive growth.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {PORTFOLIO_DATA.map((item) => (
              <div key={item.id} className="group overflow-hidden bg-white border rounded-2xl hover:shadow-2xl transition-all">
                <div className="h-64 overflow-hidden relative">
                   <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                   <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur rounded-full text-xs font-bold uppercase text-brand-slate">{item.category}</span>
                   </div>
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-brand-slate group-hover:text-brand-orange transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-400 font-medium">Client: {item.client}</p>
                    </div>
                    <div className="text-right">
                       <p className="text-brand-orange font-bold text-lg">{item.results}</p>
                       <p className="text-[10px] uppercase font-bold text-gray-400">Verified Outcome</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-8">{item.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 border-t pt-6">
                     <div className="text-center">
                        <TrendingUp size={20} className="mx-auto text-brand-orange mb-1" />
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Growth</p>
                     </div>
                     <div className="text-center">
                        <Award size={20} className="mx-auto text-brand-orange mb-1" />
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Strategy</p>
                     </div>
                     <div className="text-center">
                        <Map size={20} className="mx-auto text-brand-orange mb-1" />
                        <p className="text-[10px] font-bold text-gray-500 uppercase">Regional</p>
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 p-12 bg-gray-50 rounded-3xl text-center">
            <h3 className="text-2xl font-bold text-brand-slate mb-4">Your business could be our next success story.</h3>
            <p className="text-gray-600 mb-8 max-w-lg mx-auto">We provide detailed reporting and constant optimization to ensure you get the best results possible.</p>
            <Link to="/contact" className="inline-block px-10 py-4 bg-brand-slate text-white font-bold rounded-lg hover:bg-brand-orange transition-all">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
