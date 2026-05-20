import React, { useState } from 'react';
import { Send, CheckCircle2, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';
import WhatsAppIcon from './WhatsAppIcon';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    plan: 'Yearly Plan - ₹3999',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const plans = [
    'Yearly Offer - ₹3999/Year (Best Value)',
    '6 Months Offer - ₹2800',
    'Quarterly Offer - ₹1900',
    'Monthly Pass (50% Off Admission)',
    'Daily / Weekly Short Pass',
    'Personal Training Package',
    'General Enquiry'
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your full name.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.length < 10) {
      setError('Please enter a valid 10-digit phone number.');
      return;
    }

    // Success simulation
    setIsSubmitted(true);
  };

  // Pre-fill WhatsApp message link based on form answers
  const triggerWhatsAppRedirect = () => {
    const whatsappNum = '917407609666';
    const text = encodeURIComponent(
      `Hello Fit-G Gym! 🏋️‍♂️\n\nI have just submitted a membership enquiry on your website.\n\n*Name:* ${formData.name}\n*Phone:* ${formData.phone}\n*Selected Plan:* ${formData.plan}\n*Message:* ${formData.message || 'None'}\n\nPlease let me know the joining procedure and when I can visit the gym!`
    );
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="glassmorphism p-6 sm:p-8 rounded-2xl border border-dark-border shadow-glow-card relative">
      <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-primary/10 blur-3xl rounded-full pointer-events-none" />

      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Header */}
          <div className="mb-4">
            <h3 className="text-xl font-extrabold text-white uppercase tracking-wider">
              Membership Inquiry
            </h3>
            <p className="text-xs text-gray-400">
              Claim 50% discount on monthly admission or lock in ₹3999/Year!
            </p>
          </div>

          {/* Validation Alert */}
          {error && (
            <div className="p-3 bg-primary/15 border border-primary/30 rounded-lg flex items-center gap-2 text-xs text-primary font-bold">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Name Field */}
          <div className="space-y-2">
            <label htmlFor="name-input" className="block text-xs font-semibold text-gray-300 uppercase tracking-widest">
              Full Name *
            </label>
            <input
              id="name-input"
              type="text"
              name="name"
              placeholder="e.g. Rahul Sharma"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-black/60 border border-dark-border focus:border-primary rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
            />
          </div>

          {/* Phone Field */}
          <div className="space-y-2">
            <label htmlFor="phone-input" className="block text-xs font-semibold text-gray-300 uppercase tracking-widest">
              Phone Number *
            </label>
            <input
              id="phone-input"
              type="tel"
              name="phone"
              maxLength="10"
              placeholder="e.g. 9876543210"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full bg-black/60 border border-dark-border focus:border-primary rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors"
            />
          </div>

          {/* Selected Plan Field */}
          <div className="space-y-2">
            <label htmlFor="plan-select" className="block text-xs font-semibold text-gray-300 uppercase tracking-widest">
              Select Plan / Program
            </label>
            <select
              id="plan-select"
              name="plan"
              value={formData.plan}
              onChange={handleInputChange}
              className="w-full bg-black/60 border border-dark-border focus:border-primary rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors appearance-none cursor-pointer"
            >
              {plans.map((p) => (
                <option key={p} value={p} className="bg-dark-card text-white">
                  {p}
                </option>
              ))}
            </select>
          </div>

          {/* Optional Message Field */}
          <div className="space-y-2">
            <label htmlFor="message-textarea" className="block text-xs font-semibold text-gray-300 uppercase tracking-widest">
              Questions / Fitness Goals
            </label>
            <textarea
              id="message-textarea"
              name="message"
              rows="3"
              placeholder="Tell us about your fitness goals (optional)..."
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-black/60 border border-dark-border focus:border-primary rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-black text-xs uppercase tracking-widest rounded-lg transition-all duration-300 shadow-glow-red hover:shadow-glow-red-intense flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Submit Enquiry</span>
            <Send className="w-4 h-4" />
          </button>
        </form>
      ) : (
        /* Success Screen */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-8 space-y-6"
        >
          <div className="inline-flex p-4 bg-green-500/10 border border-green-500/20 text-green-400 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.2)]">
            <CheckCircle2 className="w-12 h-12" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white uppercase tracking-wider">
              Enquiry Submitted!
            </h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto leading-relaxed">
              Excellent choice, <span className="text-white font-bold">{formData.name}</span>! Our admissions coordinator has locked in your pricing offer.
            </p>
          </div>

          <div className="p-4 bg-dark-light/50 border border-dark-border rounded-xl text-left max-w-sm mx-auto space-y-2 text-xs">
            <span className="font-bold text-marvel-gold block uppercase tracking-wider">Offer Locked Details:</span>
            <p><span className="text-gray-400">Selected Option:</span> <span className="text-white font-bold">{formData.plan}</span></p>
            <p><span className="text-gray-400">Your Number:</span> <span className="text-white font-bold">{formData.phone}</span></p>
          </div>

          {/* WhatsApp Direct Proceed CTA */}
          <div className="space-y-3 pt-2">
            <button
              onClick={triggerWhatsAppRedirect}
              className="w-full py-4 bg-[#25d366] hover:bg-[#20ba5a] text-white font-black text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] active:scale-95"
            >
              <WhatsAppIcon className="w-5 h-5" />
              <span>Connect on WhatsApp</span>
            </button>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setFormData({ name: '', phone: '', plan: 'Yearly Plan - ₹3999', message: '' });
              }}
              className="text-xs text-gray-500 hover:text-white transition-colors underline underline-offset-4"
            >
              Submit another request
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}
