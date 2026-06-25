
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote } from 'lucide-react';
import { TAGLINE, SERVICES_DATA, CREDIBILITY_STATS, TESTIMONIALS } from '../constants';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-brand-slate py-20 lg:py-32">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M0 0 L100 0 L100 100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 rounded-full bg-brand-orange/20 text-brand-orange text-sm font-bold uppercase tracking-widest mb-6">
                Leading Ad Agency in India
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold text-white leading-tight mb-6">
                {TAGLINE}
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-lg">
                End-to-end digital and OOH advertising that drives measurable leads. Grow your local presence with experts who care.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/contact" className="px-8 py-4 bg-brand-orange hover:bg-white hover:text-brand-slate text-white font-bold rounded-lg transition-all text-center flex items-center justify-center">
                  Get a Free Campaign Plan
                  <ArrowRight size={18} className="ml-2" />
                </Link>
                <Link to="/services" className="px-8 py-4 bg-transparent border-2 border-white/30 text-white hover:border-white hover:bg-white/10 font-bold rounded-lg transition-all text-center">
                  Request a Quote
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-orange/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1200" 
                alt="Digital Marketing and OOH Illustration" 
                className="relative rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden sm:block">
                <div className="flex items-center space-x-2 text-brand-orange mb-1">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="font-bold text-brand-charcoal">High-Impact Results</p>
                <p className="text-xs text-gray-500">Verified Client Success</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats / Credibility */}
      <section className="bg-white py-12 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            {CREDIBILITY_STATS.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl sm:text-4xl font-display font-extrabold text-brand-slate mb-1">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 font-bold uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-brand-slate mb-4">
              Comprehensive Advertising Solutions
            </h2>
            <div className="w-20 h-1.5 bg-brand-orange mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need to dominate the local streets or the digital screen, we have the tools to make it happen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES_DATA.map((service) => (
              <div key={service.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl transition-all group flex flex-col h-full">
                <div className="mb-6 transform group-hover:scale-110 transition-transform origin-left">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-slate mb-4 group-hover:text-brand-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-6 flex-grow">
                  {service.shortDesc}
                </p>
                <Link 
                  to="/services" 
                  className="inline-flex items-center text-brand-orange font-bold text-sm hover:underline"
                >
                  View Details
                  <ArrowRight size={14} className="ml-1" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-brand-slate rounded-3xl p-10 lg:p-16 relative">
              <Quote className="absolute top-8 left-8 text-brand-orange/20 w-32 h-32" />
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-display font-bold text-white mb-10">
                  "{TESTIMONIALS[0].quote}"
                </h2>
                <div className="flex items-center justify-center space-x-4">
                  <img src={TESTIMONIALS[0].avatar} alt={TESTIMONIALS[0].name} className="w-16 h-16 rounded-full border-2 border-brand-orange" />
                  <div className="text-left">
                    <p className="text-white font-bold">{TESTIMONIALS[0].name}</p>
                    <p className="text-brand-orange text-sm">{TESTIMONIALS[0].role}, {TESTIMONIALS[0].company}</p>
                  </div>
                </div>
              </div>
           </div>
        </div>
      </section>

      {/* Bottom CTA with Form */}
      <section id="contact-form" className="py-24 bg-brand-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white mb-8 leading-tight">
                Ready to Launch Your Next Big Campaign?
              </h2>
              <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                Contact us today for a <strong>Free Campaign Plan</strong>. Our team will analyze your business and suggest the best mix of Digital and OOH advertising to hit your targets.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "No-obligation strategy call",
                  "Detailed competitor ad analysis",
                  "OOH site availability reports",
                  "Budget-optimized media plans"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-300">
                    <CheckCircleIcon />
                    <span className="ml-3">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-2xl">
              <h3 className="text-2xl font-bold text-brand-slate mb-6">Request Your Free Plan</h3>
              <ContactForm light={true} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const CheckCircleIcon = () => (
  <svg className="w-5 h-5 text-brand-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
  </svg>
);

export default Home;
