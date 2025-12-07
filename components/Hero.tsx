import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, MapPin, GraduationCap } from 'lucide-react';

const RastaLine: React.FC = () => (
  <div className="flex w-32 h-1 mb-6 opacity-60">
    <div className="w-1/3 h-full bg-rasta-red shadow-[0_0_12px_rgba(161,38,42,0.8)]" />
    <div className="w-1/3 h-full bg-rasta-gold shadow-[0_0_12px_rgba(198,166,69,0.8)]" />
    <div className="w-1/3 h-full bg-rasta-green shadow-[0_0_12px_rgba(15,91,51,0.8)]" />
  </div>
);

// Advanced "Beam" Button Component
const BeamButton = ({ children, onClick }: { children?: React.ReactNode; onClick?: () => void }) => {
  return (
    <button 
      onClick={onClick}
      className="relative group w-full md:w-auto inline-flex items-center justify-center rounded-lg overflow-hidden p-[1px] transition-transform active:scale-95"
    >
      {/* The Rotating Beam */}
      <div className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#0D0D0C_0%,#C6A645_50%,#0D0D0C_100%)] opacity-100" />
      
      {/* Button Content */}
      <div className="relative w-full h-full bg-earth-dark/90 backdrop-blur-xl rounded-lg px-8 py-4 flex items-center justify-center gap-3 border border-gold/10 group-hover:bg-earth-dark/80 transition-colors">
        {children}
      </div>
    </button>
  );
};

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center lg:items-end justify-center lg:justify-start px-4 md:px-12 lg:px-24 pt-20 pb-12 overflow-hidden">
      
      {/* Right Pinned Image (Empress Zaria) */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-full lg:w-[55%] h-[85vh] lg:h-[92vh] pointer-events-none z-0 flex items-end justify-end"
      >
        <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
          
          {/* 
            GLASS MORPH BACKING LAYER 
            A royal arch/card behind her to frame the figure against the background
          */}
          <div 
            className="
              absolute bottom-0 right-[-10%] lg:right-[10%] 
              w-[80vw] lg:w-[45vh] h-[75vh] 
              bg-gradient-to-b from-white/10 to-transparent 
              backdrop-blur-md 
              border border-white/10 border-b-0
              rounded-t-[150px]
              shadow-[0_0_50px_rgba(0,0,0,0.5)]
              z-0
            "
          >
             {/* Inner border for detail */}
             <div className="absolute inset-4 border border-gold/20 rounded-t-[140px] border-b-0 opacity-50" />
          </div>

           {/* 
             Updated image source from Wix URL
           */}
           <img 
            src="https://static.wixstatic.com/media/9d6d88_17f19b7148f947c58da2df7c0dbbb481~mv2.png" 
            alt="Empress Zaria - Sovereign Wisdom"
            className="
              relative
              z-10
              w-auto 
              h-full 
              object-contain 
              object-bottom 
              lg:-mr-12
              drop-shadow-[0_0_20px_rgba(198,166,69,0.4)] 
              filter
            "
          />
          
          {/* Subtle cinematic gradient at the very bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-earth-dark to-transparent pointer-events-none z-20" />
        </div>
      </motion.div>

      {/* Left Glass Panel */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative z-30 w-full max-w-2xl lg:mb-12"
      >
        <div 
          className="
            relative overflow-hidden
            backdrop-blur-[32px] 
            bg-white/5 
            border-[1px] border-white/20 
            rounded-[24px] 
            shadow-[0_15px_40px_rgba(0,0,0,0.6)]
            p-8 md:p-12
            group
            animate-float
          "
        >
          {/* Internal Glow Effect */}
          <div className="absolute inset-0 rounded-[24px] ring-1 ring-gold/20 pointer-events-none" />
          
          {/* Fluid Shine Animation */}
          <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-shimmer pointer-events-none" />

          <RastaLine />

          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6 tracking-wide drop-shadow-lg">
            Trainer of Teachers. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold italic">
              Keeper of Sovereign Wisdom.
            </span>
          </h1>

          <p className="font-sans text-lg text-gray-300 leading-relaxed mb-10 max-w-lg font-light border-l-2 border-gold/50 pl-4">
            A Master Educator, Cultural Curator, and Founder of the Haile Selassie I MetaVersity — teaching minds, uplifting nations, and guiding sovereign communities worldwide.
          </p>

          <div className="flex flex-col gap-5">
            
            {/* CTA 1: Enter MetaVersity (Beam Button) */}
            <BeamButton>
              <GraduationCap className="w-5 h-5 text-gold-light" />
              <span className="font-heading font-bold text-white tracking-wider uppercase text-sm">Enter the MetaVersity</span>
              <ArrowRight className="w-5 h-5 text-gold-light transition-transform group-hover:translate-x-1" />
            </BeamButton>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* CTA 2: Shop Cultural Goods (Green Trim) */}
              <button className="group relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg border border-rasta-green/40 text-gray-200 bg-rasta-green/5 hover:bg-rasta-green/10 transition-all duration-300 hover:border-rasta-green/80">
                <ShoppingBag className="w-4 h-4 text-rasta-green group-hover:text-green-400 transition-colors" />
                <span className="font-sans font-medium text-sm tracking-wide">Shop Cultural Goods</span>
              </button>

              {/* CTA 3: Book Cultural Tour (Red Trim) */}
              <button className="group relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg border border-rasta-red/40 text-gray-200 bg-rasta-red/5 hover:bg-rasta-red/10 transition-all duration-300 hover:border-rasta-red/80">
                <MapPin className="w-4 h-4 text-rasta-red group-hover:text-red-400 transition-colors" />
                <span className="font-sans font-medium text-sm tracking-wide">Book a Cultural Tour</span>
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};