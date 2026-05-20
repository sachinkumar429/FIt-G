import React from 'react';
import { Check, Star, HelpCircle } from 'lucide-react';

export default function Membership({ setActivePage }) {
  const plans = [
    {
      title: 'Quarterly Plan',
      price: '₹1900',
      duration: '3 Months',
      popular: false,
      glow: false,
      badge: 'Starter Choice',
      features: [
        'Full access to all Strength floors',
        'Full access to Cardio Conditioning',
        'Marvel Vibes interior workout floor',
        'Clean locker & bathroom access',
        'Free spacious vehicle parking',
        '1x Certified trainer floor assistance'
      ]
    },
    {
      title: 'Yearly Plan',
      price: '₹3999',
      duration: '12 Months',
      popular: true,
      glow: true,
      badge: 'Best Value Offer',
      features: [
        'Full access to all Strength floors',
        'Full access to Cardio Conditioning',
        'Marvel Vibes interior workout floor',
        'Clean locker & bathroom access',
        'Free spacious vehicle parking',
        'Daily floor trainer support',
        'Custom Diet & Nutrition counseling charts',
        'Free Body Composition assessments (Monthly)',
        'Free Fit-G Gym brand shaker bottle'
      ]
    },
    {
      title: '6 Months Plan',
      price: '₹2800',
      duration: '6 Months',
      popular: false,
      glow: false,
      badge: 'Steady Target',
      features: [
        'Full access to all Strength floors',
        'Full access to Cardio Conditioning',
        'Marvel Vibes interior workout floor',
        'Clean locker & bathroom access',
        'Free spacious vehicle parking',
        'Daily floor trainer support',
        '1x Basic Nutrition guideline chart'
      ]
    }
  ];

  const handleEnquire = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1">
          Gym Membership
        </span>
        <h1 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-wide">
          Membership Pricing Plans
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          No hidden fees or unexpected maintenance charges. Lock in premium AC facilities, elite equipment, and energetic interior vibes at Durgapur's absolute best rates.
        </p>
      </section>

      {/* PLANS CARDS GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative transition-all duration-300 ${
                plan.glow
                  ? 'bg-black border-2 border-primary shadow-glow-red animate-glow-pulse lg:scale-105 z-10'
                  : 'glassmorphism border border-dark-border hover:border-primary/30'
              }`}
            >
              {/* Highlight Badges */}
              {plan.badge && (
                <div className={`absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-full text-xxs font-black uppercase tracking-widest ${
                  plan.popular ? 'bg-primary text-white' : 'bg-dark-light border border-dark-border text-gray-400'
                }`}>
                  {plan.badge}
                </div>
              )}

              {/* Title & Price */}
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-wider mb-2">
                  {plan.title}
                </h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">{plan.price}</span>
                  <span className="text-xs text-gray-400">/ {plan.duration}</span>
                </div>

                <div className="h-px bg-dark-border mb-6" />

                {/* Features list */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div className="p-0.5 bg-primary/10 border border-primary/20 text-primary rounded-full shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs sm:text-sm text-gray-300 leading-normal">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA button */}
              <button
                onClick={handleEnquire}
                className={`w-full py-3.5 rounded-lg font-black text-xs uppercase tracking-widest transition-all duration-300 active:scale-95 ${
                  plan.popular
                    ? 'bg-primary hover:bg-primary-dark text-white shadow-glow-red hover:shadow-glow-red-intense'
                    : 'bg-dark-light hover:bg-dark border border-dark-border hover:border-primary/20 text-white'
                }`}
              >
                Select {plan.title}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* MONTHLY OFFER PROMO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glassmorphism p-6 sm:p-8 rounded-2xl border border-dark-border text-center space-y-4">
          <div className="inline-flex items-center justify-center p-2 bg-marvel-gold/10 text-marvel-gold border border-marvel-gold/20 rounded-full">
            <Star className="w-5 h-5 fill-current" />
          </div>
          
          <h2 className="text-xl sm:text-2xl font-black uppercase text-white tracking-wider">
            Prefer Monthly Plans? Get 50% Off Admission!
          </h2>
          <p className="text-xs sm:text-sm text-gray-400 leading-relaxed max-w-2xl mx-auto">
            If you want standard monthly flexibility instead of multi-month saver plans, we are offering an immediate **50% Admission Fee discount** on new monthly enrollments this week! Visit the front desk or submit an enquiry to lock in this special rate.
          </p>
        </div>
      </section>

    </div>
  );
}
