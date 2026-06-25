
import React from 'react';
import { BRAND_NAME, CREDIBILITY_STATS } from '../constants';
import { ShieldCheck, Target, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-gray-50 py-20 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-brand-slate mb-4">
            About {BRAND_NAME}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Combining traditional reach with digital precision to grow Indian businesses.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-display font-bold text-brand-slate mb-6">Our Story & Mission</h2>
              <div className="w-16 h-1 bg-brand-orange mb-6"></div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Obitiscare was founded with a simple goal: to help small and medium businesses in India navigate the complex world of advertising. We noticed that agencies either focused purely on digital or purely on traditional OOH, leaving business owners to bridge the gap.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We provide integrated, full-funnel solutions that combine the trust of a physical hoarding with the precision of a Facebook ad. Our focus is always on <strong>measurable leads</strong> and a clear ROI for our clients.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="p-2 bg-orange-100 rounded-lg text-brand-orange mr-4 mt-1">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-slate">Integrity First</h4>
                    <p className="text-gray-500">Transparent reporting and honest advice on where your budget works best.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-orange-100 rounded-lg text-brand-orange mr-4 mt-1">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-slate">Targeted Approach</h4>
                    <p className="text-gray-500">We don't just spray and pray. Every campaign is backed by data and research.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="p-2 bg-orange-100 rounded-lg text-brand-orange mr-4 mt-1">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-slate">Agile Execution</h4>
                    <p className="text-gray-500">Fast turnaround times for creatives and hoarding installations.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000" 
                alt="Our Team" 
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-orange text-white p-8 rounded-2xl shadow-xl hidden lg:block">
                <p className="text-4xl font-display font-bold mb-1">15+</p>
                <p className="text-sm font-bold uppercase tracking-widest">Experts on Board</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bullets Section */}
      <section className="py-20 bg-brand-slate text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="p-6">
              <p className="text-5xl font-display font-extrabold text-brand-orange mb-4">8+</p>
              <h4 className="text-xl font-bold mb-2">Years Experience</h4>
              <p className="text-gray-400">Deep expertise in the Indian advertising landscape since 2016.</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-display font-extrabold text-brand-orange mb-4">500+</p>
              <h4 className="text-xl font-bold mb-2">Campaigns Managed</h4>
              <p className="text-gray-400">Successfully launched campaigns for retail, healthcare, and real estate.</p>
            </div>
            <div className="p-6">
              <p className="text-5xl font-display font-extrabold text-brand-orange mb-4">3.5x</p>
              <h4 className="text-xl font-bold mb-2">Average ROI</h4>
              <p className="text-gray-400">Our clients see significant growth in leads and revenue per ad spend.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
