import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export default function GalleryPage() {
  const [filter, setFilter] = useState('all');
  const [activeImage, setActiveImage] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'strength', label: 'Strength' },
    { id: 'crossfit', label: 'CrossFit' },
    { id: 'cardio', label: 'Cardio' },
    { id: 'interior', label: 'Marvel Interior' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'strength',
      title: 'Commercial Dumbbell Racks',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 2,
      category: 'crossfit',
      title: 'High-intensity Battle Ropes',
      image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 3,
      category: 'cardio',
      title: 'Premium Cardio Treadmills',
      image: 'https://images.unsplash.com/photo-1538797563031-940d7bc947dd?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 4,
      category: 'interior',
      title: 'Neon Marvel Vibes Murals',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 5,
      category: 'strength',
      title: 'Squat Racks & Barbell Platforms',
      image: 'https://images.unsplash.com/photo-1605296867304-46d5465a25f1?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 6,
      category: 'crossfit',
      title: 'Kettlebell & Plyobox Workouts',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 7,
      category: 'interior',
      title: 'Pristine AC Workout Hall',
      image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=600&auto=format&fit=crop'
    },
    {
      id: 8,
      category: 'cardio',
      title: 'Aerobic & Cardio Rower Zones',
      image: 'https://images.unsplash.com/photo-1483721310020-03333e577076?q=80&w=600&auto=format&fit=crop'
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="pt-28 pb-20 space-y-16">
      
      {/* HEADER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-bold text-primary uppercase tracking-widest border-b-2 border-primary pb-1">
          Visual Tour
        </span>
        <h1 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-wide">
          Our Gym Gallery
        </h1>
        <p className="text-sm text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Take a look inside Fit-G Gym. Examine our elite machines, clean facilities, high-performance training areas, and spectacular interior aesthetics.
        </p>
      </section>

      {/* FILTER BUTTONS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setFilter(cat.id)}
            className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full border transition-all duration-300 ${
              filter === cat.id
                ? 'bg-primary border-primary text-white shadow-glow-red'
                : 'bg-black/55 border-dark-border text-gray-400 hover:text-white hover:border-gray-600'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </section>

      {/* IMAGES GRID */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveImage(item)}
              className="group bg-dark-card border border-dark-border rounded-xl overflow-hidden cursor-pointer relative hover:border-primary/40 transition-colors"
            >
              {/* Image container */}
              <div className="h-60 overflow-hidden relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <div className="p-3 bg-primary rounded-full text-white shadow-glow-red scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn className="w-5 h-5" />
                  </div>
                  <span className="text-xxs font-bold text-gray-400 uppercase tracking-widest mt-1">Click to Zoom</span>
                </div>
              </div>

              {/* Title tag */}
              <div className="p-4 border-t border-dark-border flex justify-between items-center bg-black/30">
                <span className="text-xs font-bold text-white uppercase tracking-wide truncate pr-2">
                  {item.title}
                </span>
                <span className="text-[8px] font-black uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-2 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX POPUP MODAL */}
      <AnimatePresence>
        {activeImage && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setActiveImage(null)}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveImage(null)}
              className="absolute top-6 right-6 p-2 bg-dark-light hover:bg-primary border border-dark-border hover:border-primary rounded-lg text-white transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Image content */}
            <div 
              className="relative max-w-4xl w-full max-h-[80vh] overflow-hidden rounded-2xl border border-dark-border shadow-glow-card"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image
            >
              <img
                src={activeImage.image}
                alt={activeImage.title}
                className="w-full h-full object-contain max-h-[80vh]"
              />
              
              {/* Bottom tag bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/75 backdrop-blur-sm border-t border-dark-border px-6 py-4 flex justify-between items-center">
                <span className="text-sm font-extrabold uppercase tracking-wider text-white">
                  {activeImage.title}
                </span>
                <span className="text-xxs font-black uppercase tracking-widest text-white bg-primary px-3 py-1 rounded">
                  {activeImage.category}
                </span>
              </div>
            </div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
