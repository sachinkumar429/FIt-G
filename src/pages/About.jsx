import React from 'react';
import { Dumbbell, ShieldCheck, Users, Flame, Trophy, MapPin } from 'lucide-react';

export default function About({ setActivePage }) {
  const highlights = [
    {
      icon: <Flame className="w-6 h-6 text-primary" />,
      title: 'Marvel Cinematic Vibe',
      desc: 'Our interior features striking murals, neon crimson highlights, and motivational graphic environments inspired by legendary superheroes, pushing you to lift heavier and train longer.'
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: 'Inclusivity First',
      desc: 'From complete beginners learning their first squats to advanced athletes lifting triple bodyweight, our facility is engineered to be welcoming, safe, and empowering for both men and women.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-primary" />,
      title: 'Certified Instruction',
      desc: 'All of our trainers hold accredited physical coaching and nutritional consulting certificates. Get structured, scientifically-backed workout guides to prevent injury and fast-track gains.'
    }
  ];

  return (
    <div className="pt-28 pb-20 space-y-24">
      
      {/* 1. INTRO HERO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1">
              About Fit-G Gym
            </span>
            <h1 className="text-4xl sm:text-5xl font-black uppercase text-white leading-tight">
              Transform Your Body, <br />
              <span className="text-primary">Transform Your Life</span>
            </h1>
            <p className="text-sm text-gray-400 leading-relaxed">
              Founded in December 2023, Fit-G Gym has rapidly scaled to become Durgapur's premier luxury fitness experience. We designed our facility around a core value: making elite physical conditioning accessible to everyone. 
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              We break away from old, dark, stuffy basement gyms. Our fully air-conditioned facility combines pristine commercial-grade equipment with high-energy modern design elements. It's not just a place to sweat—it's a sanctuary where you construct your best self.
            </p>
            
            <div className="flex gap-4 pt-2">
              <button
                onClick={() => {
                  setActivePage('contact');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white font-black text-xs uppercase tracking-widest rounded-lg shadow-glow-red transition-all duration-300"
              >
                Claim Admission Pass
              </button>
            </div>
          </div>

          {/* Visual Side */}
          <div className="lg:col-span-6 relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-4 border-l-4 border-primary pointer-events-none" />
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-4 border-r-4 border-primary pointer-events-none" />
            
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800&auto=format&fit=crop" 
              alt="Fit-G Gym Interior" 
              className="w-full h-[400px] object-cover rounded-2xl shadow-glow-card"
            />
          </div>

        </div>
      </section>

      {/* 2. THE MARVEL EXPERIENCE */}
      <section className="bg-gradient-to-b from-dark-card to-black py-16 border-y border-dark-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 order-last lg:order-first">
              <img 
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=800&auto=format&fit=crop" 
                alt="Cinematic training environment" 
                className="w-full h-[380px] object-cover rounded-2xl shadow-glow-red"
              />
            </div>

            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold text-marvel-gold uppercase tracking-widest border-b-2 border-marvel-gold pb-1">
                The Cinematic Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold uppercase text-white tracking-wide">
                Marvel Vibes Interior
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed">
                Why train in a generic room when you can train like an Avenger? Our gym features bold neon red and cyberpunk gold design graphics, custom metal plates, and legendary Marvel wall art. 
              </p>
              <p className="text-sm text-gray-400 leading-relaxed">
                This custom theme creates a dramatic, high-energy atmosphere that heightens your mental focus, elevates your mood, and gets your blood pumping from the moment you scan your member badge. It's the perfect atmosphere to smash personal records!
              </p>
              
              <div className="p-4 bg-black/60 border border-dark-border rounded-xl flex items-center gap-3 max-w-lg">
                <Trophy className="w-6 h-6 text-marvel-gold shrink-0" />
                <span className="text-xs font-semibold text-white">
                  Designed exclusively to boost athlete focus and visual excitement.
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. CORE HIGHLIGHT DETAILS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <span className="text-xs font-bold text-primary uppercase tracking-widest">
            Our Philosophies
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-wide">
            How We Get You Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, idx) => (
            <div key={idx} className="glassmorphism p-8 rounded-2xl border border-dark-border space-y-4">
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 text-primary rounded-xl flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
