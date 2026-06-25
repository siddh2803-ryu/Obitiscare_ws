
import React, { useState } from 'react';

const ContactForm: React.FC<{ light?: boolean }> = ({ light = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    time: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We have received your request and will contact you shortly.');
  };

  const inputClasses = `w-full px-4 py-3 rounded-lg border focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none transition-all ${
    light ? 'bg-white border-gray-200' : 'bg-gray-50 border-gray-300'
  }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Name *</label>
          <input 
            type="text" required 
            placeholder="John Doe"
            className={inputClasses}
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Company</label>
          <input 
            type="text"
            placeholder="Your Business Name"
            className={inputClasses}
            value={formData.company}
            onChange={(e) => setFormData({...formData, company: e.target.value})}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Email *</label>
          <input 
            type="email" required
            placeholder="john@example.com"
            className={inputClasses}
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Phone *</label>
          <input 
            type="tel" required
            placeholder="+91 XXXXX XXXXX"
            className={inputClasses}
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Service Interested In</label>
          <select 
            className={inputClasses}
            value={formData.service}
            onChange={(e) => setFormData({...formData, service: e.target.value})}
          >
            <option value="">Select a Service</option>
            <option value="digital">Digital Ads (Google/Meta)</option>
            <option value="hoarding">Hoarding / Billboards</option>
            <option value="broadcast">TV & Radio Commercials</option>
            <option value="ooh">OOH & Transit Branding</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Budget Range (Optional)</label>
          <select 
            className={inputClasses}
            value={formData.budget}
            onChange={(e) => setFormData({...formData, budget: e.target.value})}
          >
            <option value="">Select Budget</option>
            <option value="low">₹15,000 - ₹50,000</option>
            <option value="mid">₹50,000 - ₹2,00,000</option>
            <option value="high">₹2,00,000+</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Preferred Contact Time</label>
        <input 
          type="text"
          placeholder="e.g., Weekdays 10 AM - 12 PM"
          className={inputClasses}
          value={formData.time}
          onChange={(e) => setFormData({...formData, time: e.target.value})}
        />
      </div>

      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">Your Message</label>
        <textarea 
          rows={4}
          placeholder="Tell us about your campaign goals..."
          className={inputClasses}
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        ></textarea>
      </div>

      <p className="text-[10px] text-gray-400 mt-2">
        We respect your privacy. Information will be used only to contact you about services.
      </p>

      <button 
        type="submit"
        className="w-full bg-brand-orange hover:bg-brand-charcoal text-white font-bold py-4 rounded-lg shadow-lg transition-all transform hover:scale-[1.01]"
      >
        Submit Request
      </button>
    </form>
  );
};

export default ContactForm;
