import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingCTA from './components/FloatingCTA';

// Import Pages
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Membership from './pages/Membership';
import TrainersPage from './pages/TrainersPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Sync state with URL hash for browser history & bookmarks support
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['about', 'services', 'membership', 'trainers', 'gallery', 'contact'];
      if (validPages.includes(hash)) {
        setActivePage(hash);
      } else {
        // Default to 'home' when there is no hash or hash is invalid/home
        setActivePage('home');
        if (window.location.hash) {
          window.history.replaceState("", document.title, window.location.pathname + window.location.search);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial mount page lookup
    handleHashChange();

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash when activePage state changes
  const handlePageChange = (pageId) => {
    setActivePage(pageId);
    if (pageId === 'home') {
      // Cleanly remove hash from browser history & URL bar without reloading
      if (window.location.hash) {
        window.history.replaceState("", document.title, window.location.pathname + window.location.search);
      }
    } else {
      window.location.hash = pageId;
    }
  };

  // Render Page Component based on current activePage state
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home setActivePage={handlePageChange} />;
      case 'about':
        return <About setActivePage={handlePageChange} />;
      case 'services':
        return <ServicesPage setActivePage={handlePageChange} />;
      case 'membership':
        return <Membership setActivePage={handlePageChange} />;
      case 'trainers':
        return <TrainersPage />;
      case 'gallery':
        return <GalleryPage />;
      case 'contact':
        return <ContactPage />;
      default:
        return <Home setActivePage={handlePageChange} />;
    }
  };

  const pageVariants = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 }
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between selection:bg-primary selection:text-white">
      
      {/* 1. STICKY NAVBAR */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* 2. DYNAMIC TRANSITIONAL VIEWPORT */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={pageVariants}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* 3. FOOTER */}
      <Footer setActivePage={handlePageChange} />

      {/* 4. FLOATING LEADS CTA BAR */}
      <FloatingCTA />
      
    </div>
  );
}
