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

// Notes specifically designed to flow behind the glass card
const GlassBackingNotes: React.FC = () => {
  const musicNotes = ['♪', '♫', '♩', '♬', '♭'];
  const noteColors = ['text-rasta-red', 'text-rasta-gold', 'text-rasta-green'];
  
  return (
    <div className="absolute inset-0 -z-10 overflow-visible pointer-events-none">
       {[...Array(8)].map((_, i) => {
         const note = musicNotes[Math.floor(Math.random() * musicNotes.length)];
         const colorClass = noteColors[i % noteColors.length];
         // Position notes primarily in the bottom half to float up
         const left = 10 + Math.random() * 80; 
         const animationDuration = 8 + Math.random() * 6;
         const delay = Math.random() * 5;
         
         return (
           <div 
             key={`hero-note-${i}`}
             className={`absolute ${colorClass} text-4xl animate-note-float opacity-80`}
             style={{
               left: `${left}%`,
               bottom: '-20%',
               animationDuration: `${animationDuration}s`,
               animationDelay: `${delay}s`,
               filter: 'blur(1px)' // Slight blur to blend
             }}
           >
             {note}
           </div>
         )
       })}
    </div>
  );
};

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
    <section id="hero" className="relative w-full min-h-[100dvh] flex flex-col lg:block overflow-x-hidden pt-28 lg:pt-0">
      
      {/* 
          1. Image (Empress Zaria) 
          Mobile: First in flow (visually under header due to pt-28).
          Desktop: Absolute positioned right.
      */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="
          relative lg:absolute 
          bottom-auto lg:bottom-0 
          right-auto lg:right-0 
          w-full lg:w-[55%] 
          h-[55vh] md:h-[65vh] lg:h-[92vh] 
          pointer-events-none 
          z-0 
          flex items-end justify-center lg:justify-end
          mt-0
        "
      >
        <div className="relative w-full h-full flex items-end justify-center lg:justify-end">
          
          {/* 
            GLASS MORPH BACKING LAYER 
          */}
          <div 
            className="
              absolute bottom-0 right-auto lg:right-[10%] 
              w-[90vw] lg:w-[45vh] h-[50vh] lg:h-[75vh] 
              bg-gradient-to-b from-white/10 to-transparent 
              backdrop-blur-sm lg:backdrop-blur-md 
              border border-white/10 border-b-0
              rounded-t-[150px]
              shadow-[0_0_50px_rgba(0,0,0,0.5)]
              z-0
            "
          >
             <div className="absolute inset-4 border border-gold/20 rounded-t-[140px] border-b-0 opacity-50" />
          </div>

           <img 
            src="https://static.wixstatic.com/media/9d6d88_4e14640eeb5843bf9cee5d678ef89b73~mv2.png" 
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
          
          {/* Gradient matches background to transition to text section below */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-earth-dark to-transparent pointer-events-none z-20" />
        </div>
      </motion.div>

      {/* 
          2. Text Content (Left Glass Panel)
          Mobile: Second in flow.
          Desktop: Overlay.
      */}
      <div className="relative z-30 w-full lg:min-h-screen flex items-start lg:items-end justify-center lg:justify-start px-4 md:px-12 lg:px-24 pb-12 lg:pb-12 pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative w-full max-w-2xl pointer-events-auto -mt-12 lg:mt-0"
        >
          {/* Localized Floating Notes BEHIND the card to show through the glass */}
          <GlassBackingNotes />

          <div 
            className="
              relative overflow-hidden
              backdrop-blur-xl lg:backdrop-blur-[32px] 
              bg-earth-dark/60 lg:bg-white/5 
              border-[1px] border-white/10 lg:border-white/20 
              rounded-[24px] 
              shadow-[0_15px_40px_rgba(0,0,0,0.6)]
              p-6 md:p-12
              group
              animate-float
            "
          >
            {/* Internal Glow Effect */}
            <div className="absolute inset-0 rounded-[24px] ring-1 ring-gold/20 pointer-events-none" />
            
            {/* Fluid Shine Animation */}
            <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 animate-shimmer pointer-events-none" />

            <RastaLine />

            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-4 md:mb-6 tracking-wide drop-shadow-lg">
              Trainer of Teachers. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-light to-gold italic">
                Keeper of Sovereign Wisdom.
              </span>
            </h1>

            <p className="font-sans text-base md:text-lg text-gray-300 leading-relaxed mb-8 md:mb-10 max-w-lg font-light border-l-2 border-gold/50 pl-4">
              A Master Educator, Cultural Curator, and Founder of the Haile Selassie I MetaVersity — teaching minds, uplifting nations, and guiding sovereign communities worldwide.
            </p>

            <div className="flex flex-col gap-4 md:gap-5">
              
              {/* CTA 1: Enter MetaVersity (Beam Button) */}
              <BeamButton>
                <GraduationCap className="w-5 h-5 text-gold-light" />
                <span className="font-heading font-bold text-white tracking-wider uppercase text-sm">Enter the MetaVersity</span>
                <ArrowRight className="w-5 h-5 text-gold-light transition-transform group-hover:translate-x-1" />
              </BeamButton>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                {/* CTA 2: Shop Cultural Goods (Green Trim) */}
                <button className="group relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg border border-rasta-green/40 text-gray-200 bg-earth-dark/50 lg:bg-rasta-green/5 hover:bg-rasta-green/10 transition-all duration-300 hover:border-rasta-green/80">
                  <ShoppingBag className="w-4 h-4 text-rasta-green group-hover:text-green-400 transition-colors" />
                  <span className="font-sans font-medium text-sm tracking-wide">Shop Cultural Goods</span>
                </button>

                {/* CTA 3: Book Cultural Tour (Red Trim) */}
                <button className="group relative flex items-center justify-center gap-3 px-6 py-3.5 rounded-lg border border-rasta-red/40 text-gray-200 bg-earth-dark/50 lg:bg-rasta-red/5 hover:bg-rasta-red/10 transition-all duration-300 hover:border-rasta-red/80">
                  <MapPin className="w-4 h-4 text-rasta-red group-hover:text-red-400 transition-colors" />
                  <span className="font-sans font-medium text-sm tracking-wide">Book a Cultural Tour</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
};