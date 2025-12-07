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

  const navLinks = [
    { name: 'MetaVersity', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Tours', href: '#' },
    { name: 'About', href: '#' },
  ];

  return (
    <>
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-earth-dark/90 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo Area */}
        <div className="flex flex-col items-start cursor-pointer group">
          <span className="font-serif text-2xl text-white tracking-widest font-bold group-hover:text-gold transition-colors duration-300">
            EMPRESS ZARIA
          </span>
          <span className="text-[10px] text-gray-400 uppercase tracking-[0.3em] group-hover:text-white transition-colors duration-300">
            Sovereign Wisdom
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="relative text-sm uppercase tracking-widest text-gray-300 hover:text-gold transition-colors duration-300 py-2 group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <button className="px-6 py-2 border border-gold/50 text-gold text-xs uppercase tracking-widest hover:bg-gold hover:text-earth-brown transition-all duration-300 rounded-sm">
            Connect
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          onClick={() => setMobileOpen(true)}
          className="md:hidden text-white hover:text-gold transition-colors"
        >
          <Menu className="w-8 h-8" strokeWidth={1.5} />
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
          transition={{ type: "tween", duration: 0.4 }}
          className="fixed inset-0 z-[60] bg-earth-dark/95 backdrop-blur-xl flex flex-col items-center justify-center"
        >
          <button 
            onClick={() => setMobileOpen(false)}
            className="absolute top-8 right-8 text-white/50 hover:text-gold transition-colors"
          >
            <X className="w-10 h-10" strokeWidth={1} />
          </button>

          <div className="flex flex-col items-center gap-8">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="font-serif text-3xl text-white hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.name}
              </motion.a>
            ))}
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