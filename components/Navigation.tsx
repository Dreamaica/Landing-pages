import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const navLinks = [
    { name: 'MetaVersity', action: () => scrollToSection('metaversity') },
    { name: 'Trenchtown Rock', action: () => scrollToSection('trenchtown') },
    { name: 'Shop', action: () => scrollToSection('shop') },
    { name: 'Tours', action: () => scrollToSection('bud-and-breakfast') },
    { name: 'Connect', action: () => scrollToSection('connect') },
  ];

  return (
    <>
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-earth-dark/60 backdrop-blur-xl border-white/10 py-4 shadow-lg' 
          : 'bg-earth-dark/30 backdrop-blur-lg border-white/5 py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex flex-col items-start cursor-pointer group z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <span className="font-serif text-xl md:text-2xl text-white tracking-widest font-bold group-hover:text-gold transition-colors duration-300 drop-shadow-md">
            EMPRESS ZARIA
          </span>
          <span className="text-[10px] text-gray-300 md:text-gray-400 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-300 drop-shadow-md">
            Sovereign Wisdom
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, 4).map((link) => (
            <button 
              key={link.name}
              onClick={link.action}
              className="relative text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors duration-300 py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button 
            onClick={() => scrollToSection('connect')}
            className="px-6 py-2 border border-gold/50 text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-earth-brown transition-all duration-300 rounded-sm"
          >
            Connect
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileOpen(true)}
          className="md:hidden p-2 rounded-full bg-earth-dark/40 backdrop-blur-sm border border-white/10 text-white hover:text-gold hover:border-gold/50 transition-all z-50"
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>
    </nav>

    {/* Mobile Menu Overlay */}
    <AnimatePresence>
      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          className="fixed inset-0 z-[60] bg-earth-dark/95 backdrop-blur-xl flex flex-col items-center justify-center"
        >
          <button 
            onClick={() => setMobileOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/50 hover:text-gold transition-colors"
          >
            <X className="w-8 h-8" strokeWidth={1} />
          </button>

          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.button
                key={link.name}
                onClick={link.action}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.1 }}
                className="font-serif text-3xl text-white hover:text-gold transition-colors"
              >
                {link.name}
              </motion.button>
            ))}
            
            <motion.button 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4 px-10 py-3 border border-gold text-gold text-sm uppercase tracking-widest hover:bg-gold hover:text-earth-brown transition-all duration-300 rounded-sm"
              onClick={() => scrollToSection('connect')}
            >
              Connect Now
            </motion.button>
          </div>
          
          <div className="absolute bottom-12 flex gap-4">
             <div className="w-2 h-2 rounded-full bg-rasta-red opacity-50" />
             <div className="w-2 h-2 rounded-full bg-rasta-gold opacity-50" />
             <div className="w-2 h-2 rounded-full bg-rasta-green opacity-50" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  );
};