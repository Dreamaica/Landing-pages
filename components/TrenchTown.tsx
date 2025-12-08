import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Radio, Heart, Globe, Crown } from 'lucide-react';

// Reusing and customizing the Beam Button for this specific section with Rasta gradients
const TrenchBeamButton = ({ children, href }: { children?: React.ReactNode; href: string }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative group inline-flex items-center justify-center rounded-xl overflow-hidden p-[2px] transition-transform active:scale-95 w-full md:w-auto"
    >
      {/* Rasta-themed Rotating Beam */}
      <div className="absolute inset-[-100%] animate-spin-slow bg-[conic-gradient(from_90deg_at_50%_50%,#A1262A_0%,#C6A645_25%,#0F5B33_50%,#C6A645_75%,#A1262A_100%)] opacity-100 blur-sm" />
      
      {/* Button Content */}
      <div className="relative w-full h-full bg-earth-dark/95 backdrop-blur-2xl rounded-[10px] px-8 py-5 flex items-center justify-center gap-3 border border-white/5 group-hover:bg-earth-dark/80 transition-colors">
        {children}
      </div>
    </a>
  );
};

const FeaturePill = ({ icon: Icon, text }: { icon: any, text: string }) => (
  <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
    <Icon className="w-3 h-3 text-gold" />
    <span className="text-xs uppercase tracking-widest text-gray-300">{text}</span>
  </div>
);

export const TrenchTown: React.FC = () => {
  return (
    <section id="trenchtown" className="relative w-full py-24 lg:py-32 px-4 md:px-12 overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 bg-earth-dark z-0">
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }} />
        
        {/* Deep ambient glows */}
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-rasta-red/10 rounded-full blur-[120px] mix-blend-screen animate-pulse-glow" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-rasta-green/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Left Column: The Content Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Decorative Rasta Stripe behind */}
              <div className="absolute -left-4 top-10 bottom-10 w-1 bg-gradient-to-b from-rasta-red via-rasta-gold to-rasta-green opacity-60 rounded-full" />
              
              <div className="pl-6 md:pl-0">
                <div className="inline-flex items-center gap-2 mb-6 text-gold/80 text-xs font-bold uppercase tracking-[0.2em]">
                  <Crown className="w-4 h-4" />
                  <span>Official Appointment</span>
                </div>
                
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-8">
                  Trench Town <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-rasta-red via-rasta-gold to-rasta-green">
                    Culture Yard
                  </span>
                </h2>

                <div className="glass-panel p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl mb-8 relative overflow-hidden group">
                  {/* Glass Shine */}
                  <div className="absolute inset-0 w-[200%] h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-200%] group-hover:animate-shimmer pointer-events-none" />
                  
                  <p className="text-gray-300 text-lg leading-relaxed font-light mb-6">
                    "Trench Town is a sacred cultural ground. It is where the fire of the Ras Tafari Movement shaped the sound that changed the world."
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-2">
                    <FeaturePill icon={Crown} text="Heritage Preservation" />
                    <FeaturePill icon={Radio} text="Trench Town Radio" />
                    <FeaturePill icon={Globe} text="Cultural Diplomacy" />
                  </div>
                </div>

                <p className="text-gray-400 mb-8 max-w-lg leading-relaxed">
                  Under the new mandate, we preserve the legacies of His Imperial Majesty Haile Selassie I and Empress Menen, uplifting youth and connecting Jamaica to the Diaspora.
                </p>

                <TrenchBeamButton href="https://trenchtown.live">
                  <span className="font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gold tracking-widest uppercase text-sm">
                    Experience TrenchTown.Live
                  </span>
                  <ExternalLink className="w-4 h-4 text-gold" />
                </TrenchBeamButton>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visual Element / "The Portal" */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative h-[500px] flex items-center justify-center"
          >
             {/* Abstract circular portal representing the 'Yard' */}
             <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full border border-white/5 bg-white/1 backdrop-blur-sm animate-[spin-slow_20s_linear_infinite]" />
                <div className="absolute w-[280px] h-[280px] md:w-[380px] md:h-[380px] rounded-full border border-gold/10 border-dashed animate-[spin-slow_30s_linear_infinite_reverse]" />
                <div className="absolute w-[150px] h-[150px] bg-gradient-to-tr from-rasta-red/20 via-rasta-gold/20 to-rasta-green/20 rounded-full blur-3xl animate-pulse" />
             </div>

             {/* Floating Cards simulating the digital experience */}
             <motion.div 
               animate={{ y: [0, -20, 0] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative z-10 w-full max-w-sm aspect-video bg-black/40 backdrop-blur-md rounded-xl border border-white/10 overflow-hidden shadow-2xl"
             >
                {/* Simulated Interface Header */}
                <div className="h-8 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                   <div className="w-2 h-2 rounded-full bg-rasta-red/50" />
                   <div className="w-2 h-2 rounded-full bg-rasta-gold/50" />
                   <div className="w-2 h-2 rounded-full bg-rasta-green/50" />
                   <div className="ml-auto w-16 h-1 bg-white/10 rounded-full" />
                </div>
                {/* Content Placeholder */}
                <div className="p-6 flex flex-col items-center justify-center h-full text-center">
                   <h3 className="font-serif text-2xl text-white mb-2">Trench Town</h3>
                   <span className="text-gold text-xs tracking-[0.3em] uppercase">Live Experience</span>
                   <div className="mt-6 flex gap-4 opacity-50">
                      <div className="w-8 h-8 rounded-full border border-white/20" />
                      <div className="w-8 h-8 rounded-full border border-white/20" />
                      <div className="w-8 h-8 rounded-full border border-white/20" />
                   </div>
                </div>
             </motion.div>

             {/* Floating decorative elements */}
             <motion.div 
                animate={{ y: [0, 15, 0], x: [0, 10, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 md:left-10 z-20 px-6 py-3 bg-earth-dark/80 backdrop-blur-xl border border-rasta-gold/30 rounded-lg shadow-xl"
             >
                <div className="flex items-center gap-3">
                   <div className="w-2 h-2 bg-rasta-gold rounded-full animate-pulse" />
                   <span className="text-xs font-bold text-gray-200 tracking-wider">LIVE RADIO</span>
                </div>
             </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};