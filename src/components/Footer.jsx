import React from 'react';
import { Phone, Mail, MapPin, Dumbbell, Star, Heart, Clock } from 'lucide-react';

const Instagram = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={props.className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);
export default function Footer({ setActivePage }) {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black border-t border-dark-border text-gray-400 pt-16 pb-8 relative overflow-hidden">
      {/* Subtle Red glow overlay from bottom */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-dark-border">
          
          {/* Column 1: Brand & Bio */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick('home')}>
              <div className="p-2 bg-primary rounded-lg text-white">
                <Dumbbell className="w-5 h-5" />
              </div>
              <span className="text-xl font-black tracking-wider text-white">
                FIT<span className="text-primary">-G</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed pt-2">
              Transform your body and life at Durgapur's premier luxury gym. Experience highly premium equipment, professional coaches, and our unique high-energy Marvel-themed interior.
            </p>
            {/* Google Rating Showcase */}
            <div className="flex items-center gap-2 pt-2">
              <div className="flex text-marvel-gold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-xs font-semibold text-white">
                4.7 ⭐ <span className="text-gray-500 font-normal">(20+ Google Reviews)</span>
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-5 border-l-4 border-primary pl-3">
              Explore
            </h3>
            <ul className="space-y-3 text-sm">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About Us' },
                { id: 'services', label: 'Services' },
                { id: 'membership', label: 'Membership Plans' },
                { id: 'trainers', label: 'Our Trainers' },
                { id: 'gallery', label: 'Photo Gallery' },
                { id: 'contact', label: 'Contact Us' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => handleNavClick(link.id)}
                    className="hover:text-primary hover:pl-2 transition-all duration-300 flex items-center gap-1 group text-left"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">›</span>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Hours & Operations */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-5 border-l-4 border-primary pl-3">
              Gym Timings
            </h3>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-semibold">Monday - Saturday:</span>
                  <span className="text-gray-400">05:00 AM - 10:00 PM</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-white font-semibold">Sunday:</span>
                  <span className="text-gray-400">Closed (Rest Day)</span>
                </div>
              </div>
              <div className="p-3 bg-dark-light/50 border border-dark-border rounded-lg text-xs leading-relaxed">
                <span className="font-semibold text-marvel-gold block mb-1">💡 Daily & Weekly Passes</span>
                In Durgapur for a short visit? Ask about our flexible short passes at the front desk.
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Location */}
          <div className="space-y-4">
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-5 border-l-4 border-primary pl-3">
              Get In Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                <a 
                  href="https://maps.google.com/?q=House+no-36,+Salbagan+Road,+2nd+St,+Benachity,+Durgapur,+West+Bengal+713213" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-primary transition-colors leading-relaxed"
                >
                  House no-36, Salbagan Road, 2nd St, Benachity, Durgapur, West Bengal 713213
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:7407609666" className="hover:text-primary transition-colors font-semibold text-white">74076 09666</a>
                  <a href="tel:9735990666" className="hover:text-primary transition-colors font-semibold text-white">97359 90666</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-primary shrink-0" />
                <a 
                  href="https://www.instagram.com/fitg122023/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-primary transition-colors text-white font-semibold"
                >
                  @fitg122023
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Block */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {currentYear} Fit-G Gym. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Designed with <Heart className="w-3.5 h-3.5 text-primary fill-current" /> in Durgapur, West Bengal.
          </p>
        </div>
      </div>
    </footer>
  );
}
