import React from 'react';
import { Award, CheckCircle2, MessageSquare } from 'lucide-react';

export default function TrainersPage() {
  const trainers = [
    {
      name: 'Vikram Singh',
      role: 'Head Strength Coach & Nutritionist',
      certifications: ['ISSA Sports Nutrition Specialist', 'K11 Certified Fitness Coach', '10+ Years Experience'],
      specialties: ['Hypertrophy / Muscle Gain', 'Advanced Powerlifting Form', 'Custom Macro Meal Planning'],
      image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=400&auto=format&fit=crop',
      bgGlow: 'from-primary/20'
    },
    {
      name: 'Rohan Dutta',
      role: 'Head CrossFit & Cardio Specialist',
      certifications: ['CrossFit Level-2 Trainer', 'Functional Training Specialist', '6+ Years Experience'],
      specialties: ['High Intensity CrossFit', 'Agility & Speed Conditioning', 'Endurance & Stamina Scaling'],
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=400&auto=format&fit=crop',
      bgGlow: 'from-marvel-gold/20'
    },
    {
      name: 'Priya Sharma',
      role: 'Senior Weight Loss & Pilates Coach',
      certifications: ['Gold\'s Gym Academy Certified', 'Pilates & Mobility Specialist', '5+ Years Experience'],
      specialties: ['Targeted Weight Loss / Fat Burn', 'Mobility & Joint Health', 'Female Fitness & Posture Coaching'],
      image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=400&auto=format&fit=crop',
      bgGlow: 'from-marvel-blue/20'
    }
  ];

  const handleWhatsAppConsult = (trainerName) => {
    const whatsappNum = '917407609666';
    const text = encodeURIComponent(`Hi Fit-G Gym! I'd like to book a fitness consultation with Coach ${trainerName}. Please let me know the trainer slots and personal training charges.`);
    window.open(`https://wa.me/${whatsappNum}?text=${text}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 space-y-20">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1">
          Elite Coaching
        </span>
        <h1 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-wide">
          Meet Our Elite Trainers
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Our certified coaches possess the sports science credentials and practical experience necessary to engineer your dream physique safely and effectively.
        </p>
      </section>

      {/* TRAINERS LISTING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {trainers.map((trainer, idx) => (
            <div
              key={idx}
              className="bg-dark-card border border-dark-border rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group flex flex-col justify-between"
            >
              
              {/* Photo Area */}
              <div className="h-80 overflow-hidden relative">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Visual Glow Layer */}
                <div className={`absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/20 to-transparent`} />
                
                {/* Role Badge */}
                <div className="absolute bottom-4 left-4 bg-primary text-white text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded shadow-lg">
                  {trainer.role}
                </div>
              </div>

              {/* Description & Qualifications */}
              <div className="p-6 space-y-6 flex-1 flex flex-col justify-between">
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-extrabold text-white uppercase tracking-wider">
                      {trainer.name}
                    </h3>
                  </div>

                  {/* Certifications (Accredited) */}
                  <div className="space-y-2">
                    <span className="block text-[9px] font-black text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-marvel-gold" />
                      Certifications
                    </span>
                    <ul className="space-y-1.5">
                      {trainer.certifications.map((cert, cIdx) => (
                        <li key={cIdx} className="flex items-center gap-2 text-xs text-white font-semibold">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Specialties */}
                  <div className="space-y-2">
                    <span className="block text-[9px] font-black text-gray-500 uppercase tracking-widest">
                      Specialties
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {trainer.specialties.map((spec, sIdx) => (
                        <span
                          key={sIdx}
                          className="text-[10px] font-bold text-gray-300 bg-dark-light border border-dark-border px-2.5 py-1 rounded-md"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action WhatsApp Trigger */}
                <button
                  onClick={() => handleWhatsAppConsult(trainer.name)}
                  className="w-full py-3 bg-dark-light hover:bg-primary hover:text-white border border-dark-border hover:border-primary text-gray-300 font-black text-xs uppercase tracking-widest rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  <span>Book Consultation</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
