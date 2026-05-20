import React from 'react';
import { Dumbbell, ShieldCheck, Heart, Users, MessageCircle, Apple, Store, HelpCircle, Wind, ParkingCircle } from 'lucide-react';

export default function ServicesPage({ setActivePage }) {
  const services = [
    {
      icon: <Wind className="w-7 h-7 text-primary" />,
      title: 'Full AC Gym Facility',
      desc: 'Maintain high performance without sweating excess fluids. Our double-fan centralized air cooling maintains a clean, sterile, fresh flow of air throughout the entire floor.',
      tag: 'Core'
    },
    {
      icon: <Dumbbell className="w-7 h-7 text-primary" />,
      title: 'Commercial Strength & Cardio',
      desc: 'Heavy commercial dumbbells, structural plates, Olympic lifting bars, high-grade cable towers, and high-quality treadmills/ellipticals for supreme cardiorespiratory training.',
      tag: 'Equipment'
    },
    {
      icon: <Users className="w-7 h-7 text-primary" />,
      title: 'CrossFit & Group Workouts',
      desc: 'High-intensity functional group training including battle ropes, plyometric boxes, kettlebell flows, and speed routines. Build unbeatable athletic endurance.',
      tag: 'Athletics'
    },
    {
      icon: <ShieldCheck className="w-7 h-7 text-primary" />,
      title: 'Elite 1-on-1 Personal Training',
      desc: 'Work directly with certified trainers who correct lifting forms, customize workout schedules, track body compositions weekly, and prevent recovery plateaus.',
      tag: 'Premium'
    },
    {
      icon: <Heart className="w-7 h-7 text-primary" />,
      title: 'Fat Loss & Weight Gain Programs',
      desc: 'Struggling with slow metabolism or lack of mass? Our highly structured programs outline exact compound lifts and cardio targets to shift your body scale safely.',
      tag: 'Results'
    },
    {
      icon: <Apple className="w-7 h-7 text-primary" />,
      title: 'Nutrition & Diet Consulting',
      desc: 'Workouts are only 30% of the puzzle. Get custom weekly macro charts, caloric guides, cheat-meal rules, and grocery list breakdowns mapped to your BMI status.',
      tag: 'Science'
    },
    {
      icon: <Store className="w-7 h-7 text-primary" />,
      title: 'Authentic Supplements Available',
      desc: 'No need to risk unverified online sellers. Purchase 100% authentic whey proteins, creatine, pre-workouts, and multivitamins directly at our front desk at best market rates.',
      tag: 'Convenience'
    },
    {
      icon: <ParkingCircle className="w-7 h-7 text-primary" />,
      title: 'Abundant Parking & Locker Space',
      desc: 'Safe, dedicated double-wheeler and car parking spots exclusively reserved for our members. Plus, high-security lockable storage cells for your personal bags.',
      tag: 'Facility'
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* HEADER SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1">
          Gym Offerings
        </span>
        <h1 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-wide">
          Our Services & Programs
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          From high-performance lifting and structured weight loss programs to nutritional consulting and our customized Marvel interior experience, we provide a complete physical fitness catalog.
        </p>
      </section>

      {/* SERVICES LISTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((item, idx) => (
            <div 
              key={idx} 
              className="glassmorphism p-6 rounded-2xl border border-dark-border hover:border-primary/25 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Badge */}
                <div className="flex justify-between items-center mb-5">
                  <div className="w-12 h-12 bg-black border border-dark-border group-hover:bg-primary/10 group-hover:border-primary/20 text-primary rounded-xl flex items-center justify-center transition-colors">
                    {item.icon}
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest text-gray-500 bg-dark-light px-2 py-1 rounded border border-dark-border">
                    {item.tag}
                  </span>
                </div>

                <h3 className="text-base font-extrabold text-white uppercase tracking-wider mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PASSPORT & COLLEGE VISITORS BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-primary/15 via-black to-dark-card border border-primary/30 p-8 sm:p-12 rounded-3xl relative overflow-hidden shadow-glow-card">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-primary/5 blur-[90px] rounded-full pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-2 py-0.5 bg-primary text-white text-[9px] font-black uppercase tracking-wider rounded">
                Short Term
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase text-white tracking-wide">
                Visiting Durgapur? Grab a Daily or Weekly Pass!
              </h2>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                We understand college students on breaks, business travelers, and holiday visitors need flexible schedules. Enjoy complete floor access to our full AC equipment and premium Marvel facilities without heavy monthly enrollment commitments.
              </p>
            </div>
            
            <div className="lg:col-span-4 text-center lg:text-right">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-4.5 bg-primary hover:bg-primary-dark text-white font-black text-xs uppercase tracking-widest rounded-lg shadow-glow-red hover:shadow-glow-red-intense transition-all"
              >
                Inquire Pass Rates
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
