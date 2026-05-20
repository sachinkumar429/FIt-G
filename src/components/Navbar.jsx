import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Dumbbell } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ activePage, setActivePage }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Monitor scroll height for transitions and progress indicator
  useEffect(() => {
    const handleScroll = () => {
      // Background dark-fill toggle
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Scroll progress percentage calculation
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'membership', label: 'Membership Plans' },
    { id: 'trainers', label: 'Trainers' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId) => {
    setActivePage(pageId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-dark-border py-3 shadow-lg' 
          : 'bg-gradient-to-b from-black/80 to-transparent py-5'
      }`}
    >
      {/* Scroll Progress Bar */}
      <div 
        className="absolute top-0 left-0 h-[3px] bg-primary transition-all duration-100 ease-out" 
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo / Brand Name */}
          <div 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 cursor-pointer group select-none"
          >
            <div className="p-2 bg-primary rounded-lg text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-glow-red">
              <Dumbbell className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-black tracking-wider text-white">
                FIT<span className="text-primary">-G</span>
              </span>
              <span className="block text-[8px] tracking-[0.25em] font-semibold uppercase text-marvel-gold">
                Marvel Vibes Interior
              </span>
            </div>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative py-1 text-sm font-semibold tracking-wider transition-all duration-300 ${
                  activePage === link.id 
                    ? 'text-primary' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {link.label}
                {activePage === link.id && (
                  <motion.div 
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-[2px] bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:7407609666" 
              className="flex items-center gap-2 text-xs font-semibold text-gray-300 hover:text-primary transition-all duration-300"
            >
              <Phone className="w-4 h-4 text-primary" />
              <span>Call: 74076 09666</span>
            </a>
            <button
              onClick={() => handleNavClick('contact')}
              className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white font-bold text-xs uppercase tracking-widest rounded-md transition-all duration-300 shadow-glow-red hover:shadow-glow-red-intense scale-100 hover:scale-105 active:scale-95"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Menu Toggle button */}
          <div className="lg:hidden flex items-center gap-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-white hover:text-primary transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-black/95 backdrop-blur-lg border-b border-dark-border overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left py-2 px-3 rounded-md text-base font-bold tracking-wide transition-all ${
                    activePage === link.id 
                      ? 'bg-primary/10 text-primary border-l-4 border-primary pl-4' 
                      : 'text-gray-300 hover:bg-dark-light hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              
              <div className="pt-4 border-t border-dark-border flex flex-col gap-4">
                <a 
                  href="tel:7407609666" 
                  className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-primary transition-all font-semibold"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  <span>Call: 74076 09666</span>
                </a>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="w-full py-3 bg-primary hover:bg-primary-dark text-white font-black uppercase text-center tracking-wider rounded-md shadow-glow-red transition-all"
                >
                  Join Fit-G Gym
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
