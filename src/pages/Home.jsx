import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, ShieldCheck, Trophy, Sparkles, Star, ChevronLeft, ChevronRight, CheckCircle2, Car, Wind } from 'lucide-react';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import BMICalculator from '../components/BMICalculator';
import EnquiryForm from '../components/EnquiryForm';

export default function Home({ setActivePage }) {
  const [activeReviewIndex, setActiveReviewIndex] = useState(0);

  const stats = [
    { value: '500+', label: 'Active Members' },
    { value: '5+', label: 'Elite Coaches' },
    { value: '4.7★', label: '20+ Google Reviews' },
    { value: '100%', label: 'AC Gym & Parking' }
  ];

  const offers = [
    { title: 'Yearly Plan', price: '₹3999', tag: 'Best Value Offer', desc: 'Saves 60% compared to monthly dues' },
    { title: '6 Months Plan', price: '₹2800', tag: 'Popular', desc: 'Consistent training at low pricing' },
    { title: 'Quarterly Plan', price: '₹1900', tag: 'Flexible', desc: 'Ideal for short term fitness targets' }
  ];

  const valueProps = [
    {
      icon: <Sparkles className="w-6 h-6 text-marvel-gold" />,
      title: 'Marvel Vibes Interior',
      desc: 'Work out in a highly unique, energetic, cinematic Marvel-themed gym that instantly fuels your adrenaline.'
    },
    {
      icon: <Wind className="w-6 h-6 text-primary" />,
      title: 'Full AC Facilities',
      desc: 'Stay comfortable and safe during heavy routines with optimized ventilation and cool temperatures.'
    },
    {
      icon: <Dumbbell className="w-6 h-6 text-primary" />,
      title: 'Modern Equipment',
      desc: 'Top-tier commercial lifting gear, isolated weight machines, and dedicated cross-training rigs.'
    },
    {
      icon: <Car className="w-6 h-6 text-primary" />,
      title: 'Spacious Parking',
      desc: 'No parking stress. Conveniently located with abundant dedicated parking for cars and two-wheelers.'
    }
  ];

  const servicesSummary = [
    { title: 'CrossFit Training', desc: 'Build legendary functional strength & cardiovascular capacity.', image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=400&auto=format&fit=crop' },
    { title: 'Personal Coaching', desc: 'Get 1-on-1 personalized plans, form checking, and weekly assessments.', image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop' },
    { title: 'Nutrition Consult', desc: 'Custom meal charts and supplements available to speed up results.', image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=400&auto=format&fit=crop' }
  ];

  const reviews = [
    {
      name: 'Sneha Sen',
      role: 'Member since 2024',
      rating: 5,
      comment: 'Fit-G is hands down the best gym in Benachity! The Marvel-themed interior is so cool and energetic. The yearly package of ₹3999 is unbelievably cheap for an AC gym with such elite equipment!'
    },
    {
      name: 'Amit Ghosal',
      role: 'CrossFit Enthusiast',
      rating: 5,
      comment: 'Excellent atmosphere. The coaches are extremely supportive, especially for beginners. The parking facility is very spacious, and there is no crowding. Best weight loss programs in Durgapur!'
    },
    {
      name: 'Pooja Roy',
      role: 'Personal Training Client',
      rating: 5,
      comment: 'Very professional coaches. I took the personal training package and lost 8 kgs in just 3 months. The supplements sold here are authentic and very reasonably priced. Highly recommended!'
    }
  ];

  const nextReview = () => {
    setActiveReviewIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setActiveReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const navigateToPage = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-20 overflow-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-24 select-none">
        {/* Background visual asset */}
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1600&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/30" />
          <div className="absolute inset-0 bg-radial-gradient-to-r from-primary/10 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center sm:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-8 space-y-6 sm:space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs sm:text-sm font-bold text-primary uppercase tracking-widest"
              >
                <Sparkles className="w-4 h-4 text-marvel-gold animate-pulse" />
                <span>Unleash Your Inner Superhero</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight uppercase leading-[0.95]"
              >
                <span className="block text-white">Push Harder</span>
                <span className="block text-primary text-glow shadow-glow-red">Than Yesterday</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
              >
                Join Fit-G Gym and unlock your strongest version with professional training, modern equipment, and an unbeatable fitness atmosphere.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 items-center justify-center sm:justify-start"
              >
                <button
                  onClick={() => navigateToPage('contact')}
                  className="w-full sm:w-auto px-8 py-4 bg-primary hover:bg-primary-dark text-white font-black uppercase text-sm tracking-widest rounded-lg shadow-glow-red hover:shadow-glow-red-intense transition-all duration-300 scale-100 hover:scale-105 active:scale-95"
                >
                  Join Fit-G Now
                </button>
                <button
                  onClick={() => navigateToPage('services')}
                  className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white hover:border-primary text-white hover:text-primary font-black uppercase text-sm tracking-widest rounded-lg transition-all duration-300"
                >
                  Explore Programs
                </button>
              </motion.div>

              {/* Stat Numbers */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 pt-8 border-t border-dark-border"
              >
                {stats.map((stat, i) => (
                  <div key={i} className="text-center sm:text-left">
                    <span className="block text-2xl sm:text-3xl md:text-4xl font-black text-white">{stat.value}</span>
                    <span className="block text-xxs sm:text-xs text-gray-400 font-bold uppercase tracking-wider mt-1">{stat.label}</span>
                  </div>
                ))}
              </motion.div>

            </div>

          </div>
        </div>
      </section>

      {/* 2. DYNAMIC OFFERS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative glassmorphism-glow rounded-3xl p-8 sm:p-12 overflow-hidden border border-primary/30 shadow-glow-card">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-5 space-y-4">
              <span className="inline-block px-3 py-1 bg-primary/20 border border-primary/30 rounded-md text-xs font-black uppercase text-primary tracking-widest">
                Flash Offer
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold uppercase text-white tracking-wide leading-tight">
                Unlock Exclusive Gym Membership Offers
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Save massive amounts with our customized pricing tiers. Grab a 50% discount on standard admission fees for standard monthly enrollments!
              </p>
            </div>

            {/* Glowing Offer Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {offers.map((offer, i) => (
                <div 
                  key={i} 
                  className={`p-5 rounded-2xl bg-black/60 border border-dark-border flex flex-col justify-between h-48 transition-all duration-300 hover:border-primary/50 relative overflow-hidden group ${
                    i === 0 ? 'border-primary shadow-glow-red' : ''
                  }`}
                >
                  {i === 0 && (
                    <div className="absolute top-0 right-0 bg-primary text-white text-[8px] font-black uppercase px-2 py-0.5 rounded-bl">
                      Hot
                    </div>
                  )}
                  <div>
                    <span className="block text-xxs font-bold text-gray-400 uppercase tracking-widest">{offer.tag}</span>
                    <h3 className="text-base font-extrabold text-white uppercase tracking-wider mt-1">{offer.title}</h3>
                    <p className="text-xxs text-gray-500 mt-1 leading-normal">{offer.desc}</p>
                  </div>
                  <div>
                    <span className="text-3xl font-black text-white tracking-tighter">{offer.price}</span>
                    <span className="text-xxs text-gray-400 block -mt-1">One-time payment</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. WHY CHOOSE US (FEAT. MARVEL VIBES) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1">
            Why Fit-G Gym
          </span>
          <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
            Premium Fitness Experience
          </h2>
          <p className="text-sm text-gray-400 max-w-2xl mx-auto">
            Step away from boring standard gyms. Enter an energetic, high-performance training hub loaded with top-tier convenience features in Durgapur.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glassmorphism p-6 rounded-2xl border border-dark-border hover:border-primary/30 transition-all duration-300 hover:scale-103 group"
            >
              <div className="w-12 h-12 bg-black border border-dark-border rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300">
                {prop.icon}
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                {prop.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {prop.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center sm:text-left space-y-2">
            <span className="text-xs font-bold text-primary uppercase tracking-widest">
              Training & Programs
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-wide">
              Services We Provide
            </h2>
          </div>
          <button
            onClick={() => navigateToPage('services')}
            className="px-6 py-3 bg-dark-light hover:bg-dark border border-dark-border hover:border-primary/30 text-white hover:text-primary text-xs font-black uppercase tracking-wider rounded-lg transition-all"
          >
            View All Services
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesSummary.map((service, i) => (
            <div 
              key={i}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
              </div>
              
              {/* Info */}
              <div className="p-6 space-y-2">
                <h3 className="text-lg font-extrabold text-white uppercase tracking-wider group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRANSFORMATION JOURNEY (BEFORE / AFTER COMPARISON) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1">
              Be Inspired
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-wide leading-tight">
              Real Members, Real Results
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              At Fit-G Gym, we don't just promise results; we facilitate them. Check out our customizable 12-week transformation frameworks managed by highly qualified coaches.
            </p>
            
            <div className="space-y-4 pt-2">
              {[
                'Avg. Weight Loss: 6-10 kg in 12 weeks',
                'Avg. Muscle gain: 3-5 kg in 12 weeks',
                'Supplements & nutrition planning included'
              ].map((bullet, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm font-semibold text-white">{bullet}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => navigateToPage('contact')}
              className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-black text-xs uppercase tracking-widest rounded-lg shadow-glow-red transition-all"
            >
              Start My Journey
            </button>
          </div>

          {/* Before After Slider Side */}
          <div className="lg:col-span-7">
            <BeforeAfterSlider />
          </div>

        </div>
      </section>

      {/* 6. CUSTOMER REVIEWS & TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
        <div className="absolute -top-12 left-10 text-[120px] font-black text-primary/5 pointer-events-none select-none">
          "
        </div>

        <div className="space-y-6">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Member Feedback
          </span>
          
          {/* Slider box */}
          <div className="glassmorphism p-8 sm:p-12 rounded-3xl border border-dark-border shadow-glow-card relative min-h-[220px] flex flex-col justify-between">
            <div className="flex justify-center text-marvel-gold gap-1 mb-6">
              {[...Array(reviews[activeReviewIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <p className="text-base sm:text-lg text-white font-medium italic leading-relaxed max-w-3xl mx-auto">
              "{reviews[activeReviewIndex].comment}"
            </p>

            <div className="mt-8">
              <span className="block text-base font-black text-white uppercase tracking-wider">{reviews[activeReviewIndex].name}</span>
              <span className="block text-xxs text-gray-500 font-bold uppercase tracking-widest mt-0.5">{reviews[activeReviewIndex].role}</span>
            </div>

            {/* Nav Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevReview}
                className="w-10 h-10 border border-dark-border hover:border-primary text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Previous Review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextReview}
                className="w-10 h-10 border border-dark-border hover:border-primary text-gray-400 hover:text-white rounded-lg flex items-center justify-center transition-colors"
                aria-label="Next Review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CONTACT CTA FUNNEL (BMI + ENQUIRY) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* BMI Side */}
          <div className="flex flex-col justify-between h-full">
            <div className="space-y-4 mb-6">
              <span className="text-xs font-bold text-primary uppercase tracking-widest">
                Interactive Tools
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-wide">
                Calculate & Transform
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Use our dynamic BMI tool to understand your baseline health numbers, then immediately log your interest in the customized enquiry form. Let's start transforming!
              </p>
            </div>
            <BMICalculator />
          </div>

          {/* Enquiry Side */}
          <div className="flex flex-col justify-end">
            <EnquiryForm />
          </div>

        </div>
      </section>

    </div>
  );
}
