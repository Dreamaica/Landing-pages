import React from 'react';
import { motion } from 'framer-motion';
import { Map, Mountain, Compass, Camera, Zap, Coffee, Music, ArrowRight, Star } from 'lucide-react';

const PremiumCard = ({ children, className = "" }: { children?: React.ReactNode; className?: string }) => (
  <div className={`relative overflow-hidden rounded-3xl border border-white/10 bg-earth-dark/40 backdrop-blur-xl p-8 group ${className}`}>
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">{children}</div>
  </div>
);

const SectionBadge = ({ text, color = "gold" }: { text: string; color?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full border border-${color}/30 bg-${color}/10 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-${color} mb-4`}>
    {text}
  </span>
);

export const BudAndBreakfast: React.FC = () => {
  return (
    <section id="bud-and-breakfast" className="relative w-full py-24 px-4 md:px-12 lg:px-24 overflow-hidden">
      
      {/* Deep Atmospheric Background */}
      <div className="absolute inset-0 bg-earth-dark z-0">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-forest-green/10 rounded-full blur-[120px] mix-blend-screen opacity-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] mix-blend-screen opacity-30" />
      </div>

      <div className="container mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="w-4 h-4 text-gold fill-gold" />
              <span className="text-gold text-xs font-bold uppercase tracking-[0.3em]">Premium Experiences</span>
              <Star className="w-4 h-4 text-gold fill-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4">
              Empress Zaria's <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rasta-green via-rasta-gold to-rasta-red">
                Bud & Breakfast
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto font-light text-lg">
              Authentic Jamaican experiences curated for the sovereign mind. From the grit of the Government Yards to the ancient silence of uncharted caves.
            </p>
          </motion.div>
        </div>

        {/* SECTION 1: JAMAICA UNCHARTED (Scientific/Corporate) */}
        <div className="mb-32">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
              <SectionBadge text="Leadership Expedition" color="rasta-green" />
              <h3 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                Jamaica <span className="italic text-gold">Uncharted</span>
              </h3>
              
              <div className="space-y-6 text-gray-300 leading-relaxed font-light">
                <p>
                  <strong className="text-white">A Legacy Expedition.</strong> This is not a tourist retreat. It is a private, ultra-premium expedition into the skeletal heart of Jamaica’s biodiversity and geology.
                </p>
                <p>
                  Guided by the <span className="text-gold">Jamaican Caves Organisation</span>, gain access to the Red Hills Fissure and Jackson’s Bay Cave System. Witness fossils dating back 40,000 years, including the extinct <em>Jamaican Monkey</em> and <em>Flightless Ibis</em>.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8 mb-8">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Compass className="w-6 h-6 text-gold mb-2" />
                  <div className="text-sm font-bold text-white">Red Hills Fissure</div>
                  <div className="text-xs text-gray-500">Paleontological Treasure</div>
                </div>
                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <Camera className="w-6 h-6 text-gold mb-2" />
                  <div className="text-sm font-bold text-white">Endemic Wildlife</div>
                  <div className="text-xs text-gray-500">29+ Unique Bird Species</div>
                </div>
              </div>

              <button className="group flex items-center gap-3 px-8 py-4 bg-forest-green text-white font-bold uppercase tracking-widest rounded-lg hover:bg-white hover:text-forest-green transition-all duration-300">
                <span>Request Prospectus</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2 relative"
            >
              {/* Image Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 translate-y-8">
                   <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group">
                      <img 
                        src="https://www.superstock.com/cdn/1848/CompPreview/1848-50162990.webp" 
                        alt="Spelunking Jamaica" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                   </div>
                   <div className="p-4 bg-earth-dark/60 backdrop-blur-md border border-white/10 rounded-2xl">
                      <h4 className="text-gold font-serif text-lg">The Cockpit Country</h4>
                      <p className="text-xs text-gray-400">Limestone Karst Terrain</p>
                   </div>
                </div>
                <div className="space-y-4">
                   <div className="p-4 bg-rasta-green/10 backdrop-blur-md border border-rasta-green/20 rounded-2xl">
                      <h4 className="text-white font-serif text-lg">JCO Certified</h4>
                      <p className="text-xs text-gray-400">Expert Speleologists</p>
                   </div>
                   
                   {/* Maroon Town EdVenture Card */}
                   <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 group cursor-pointer">
                      <div className="absolute top-4 left-4 z-20 px-3 py-1 bg-rasta-red/90 text-white font-bold text-[10px] uppercase tracking-widest rounded-md">
                         New
                      </div>
                      <img 
                        src="https://static.wixstatic.com/media/89bb7e_20e8e1d7604a4dbfae6997582376cebc~mv2.jpg" 
                        alt="Maroon Town EdVenture - Queen Nanny" 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h4 className="text-gold font-serif text-lg leading-tight mb-1">Maroon Town EdVenture</h4>
                        <p className="text-xs text-gray-300">Queen Nanny's Legacy</p>
                      </div>
                   </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12" />

        {/* SECTION 2: TRENCH TOWN EXPERIENCE (Cultural) */}
        <div>
           <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Visuals Left */}
            <motion.div 
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="w-full lg:w-1/2 relative"
             >
                <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
                  <div className="absolute top-4 left-4 z-20 px-4 py-2 bg-rasta-red text-white font-bold text-xs uppercase tracking-widest rounded-md">
                     Origins
                  </div>
                  <img 
                    src="https://i0.wp.com/clintonlindsay.com/wp-content/uploads/2021/09/BobMarleyBunnyWailerHome.jpg?fit=504%2C284&ssl=1" 
                    alt="Bob Marley Home" 
                    className="w-full h-auto object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-earth-dark via-transparent to-transparent opacity-90" />
                  
                  <div className="absolute bottom-0 left-0 p-8 w-full">
                     <p className="font-serif text-2xl text-white italic">"I remember when we used to sit in the government yard in Trench Town..."</p>
                     <p className="text-gold text-sm mt-2 font-sans tracking-wider">— Bob Marley</p>
                  </div>
                </div>

                {/* Floating Historic Image */}
                <div className="absolute -bottom-10 -right-6 w-1/2 aspect-video rounded-xl border border-gold/30 overflow-hidden shadow-2xl z-20 hidden md:block">
                   <img 
                     src="https://mountainsoftravelphotos.com/Jamaica%20Kingston/CultY/thumbs/02C%20Old%20aerial%20photographs%20like%20this%20one%20in%201951%20show%20the%20genesis%20of%20what%20became%20Trench%20Town%20notorious%20government%20housing%20yards%20Culture%20Yard%20Trench%20Town%20Kingston%20Jamaica.jpg"
                     alt="Historic Trench Town Aerial 1951"
                     className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-sepia/20 mix-blend-overlay" />
                </div>
            </motion.div>

            {/* Content Right */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="w-full lg:w-1/2"
            >
               <SectionBadge text="Cultural Heritage Tour" color="rasta-red" />
               <h3 className="font-serif text-3xl md:text-5xl text-white font-bold mb-6 leading-tight">
                 Trench Town <span className="text-gold">Rock</span>
               </h3>
               <p className="text-lg text-white mb-6">
                 Walk the sacred ground where Reggae was born.
               </p>
               <div className="text-gray-400 space-y-4 font-light leading-relaxed mb-8">
                  <p>
                    Trench Town is more than a location; it is a global symbol of resilience and creativity. As a part of <strong>Empress Zaria's Bud & Breakfast</strong> premium services, we offer safe, guided access to this living community.
                  </p>
                  <p>
                    Visit the Culture Yard Museum, explore the art-lined streets, and engage with the community that birthed legends like Bob Marley, Peter Tosh, and Bunny Wailer.
                  </p>
               </div>

               <div className="flex flex-col sm:flex-row gap-4">
                  <PremiumCard className="flex-1 py-4 px-6">
                     <Music className="w-5 h-5 text-rasta-red mb-2" />
                     <span className="block text-white font-bold text-sm">Culture Yard</span>
                  </PremiumCard>
                  <PremiumCard className="flex-1 py-4 px-6">
                     <Zap className="w-5 h-5 text-rasta-gold mb-2" />
                     <span className="block text-white font-bold text-sm">Guided Walk</span>
                  </PremiumCard>
                  <PremiumCard className="flex-1 py-4 px-6">
                     <Coffee className="w-5 h-5 text-rasta-green mb-2" />
                     <span className="block text-white font-bold text-sm">Bud & Breakfast</span>
                  </PremiumCard>
               </div>

               <div className="mt-8">
                  <a 
                    href="https://www.tripadvisor.com/Attraction_Review-g147309-d25568260-Reviews-Empress_Zaria_s_Bud_Breakfast-Jamaica.html"
                    target="_blank"
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-gold hover:text-white transition-colors font-bold uppercase tracking-widest text-sm border-b border-gold pb-1"
                  >
                    View on TripAdvisor <ArrowRight className="w-4 h-4" />
                  </a>
               </div>
            </motion.div>

           </div>
        </div>

      </div>
    </section>
  );
};