import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Globe, Cpu, Users, BookOpen } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label }: { icon: any, value: string, label: string }) => (
  <div className="flex flex-col items-center p-4 bg-white/5 border border-gold/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors">
    <Icon className="w-6 h-6 text-gold mb-2" />
    <span className="font-serif text-2xl text-white font-bold">{value}</span>
    <span className="text-xs text-gray-400 uppercase tracking-widest text-center">{label}</span>
  </div>
);

export const MetaVersity: React.FC = () => {
  return (
    <section id="metaversity" className="relative w-full py-24 px-4 md:px-12 overflow-hidden bg-earth-dark">
      
      {/* Abstract Digital Grid Background */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#C6A645_1px,transparent_1px),linear-gradient(to_bottom,#C6A645_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: The Hook / Copy */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-md mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-gold uppercase tracking-widest">Enrolling Now</span>
              </div>
              
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-4">
                Haile Selassie I <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-white to-gold animate-shimmer bg-[length:200%_100%]">
                  MetaVersity
                </span>
              </h2>
              
              <p className="text-xl text-gray-300 font-light">
                Where Education Meets Innovation.
              </p>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Step into a pioneering Virtual Reality space where education and innovation converge. 
              Led by <strong>Karen Francis M.Ed</strong>, a seasoned educator with 30+ years of experience, 
              we bridge the gap between traditional learning and the global industry.
            </p>

            {/* Program Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl text-left relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Cpu className="w-24 h-24 text-gold" />
              </div>
              
              <h3 className="font-heading font-bold text-white text-lg mb-2 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-gold" />
                English for Industry Practicum
              </h3>
              <p className="text-sm text-gray-300 mb-6 leading-relaxed">
                Gain internationally informed teaching strategies and workplace communication skills. 
                Receive direct mentorship and support through HSIM's immersive virtual platform.
              </p>
              
              <a 
                href="https://www.haileselassieimetaversity.org" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gold font-bold text-sm uppercase tracking-widest hover:text-white transition-colors"
              >
                Start Your Journey <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-4">
               <a 
                 href="https://www.haileselassieimetaversity.org"
                 target="_blank"
                 rel="noopener noreferrer" 
                 className="relative inline-flex items-center justify-center px-8 py-4 bg-gold text-earth-dark font-bold uppercase tracking-widest rounded-lg overflow-hidden group transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(198,166,69,0.4)]"
               >
                 <span className="relative z-10 flex items-center gap-3">
                   Enter The MetaVersity <Globe className="w-5 h-5" />
                 </span>
                 <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
               </a>
            </div>
          </div>

          {/* Right: Visual Representation */}
          <div className="w-full lg:w-1/2 relative">
            {/* Holographic Circle Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[80px] animate-pulse-glow" />
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 grid grid-cols-2 gap-4"
            >
              {/* Feature Cards in a Grid */}
              <div className="space-y-4 mt-8">
                 <StatCard icon={Users} value="30+" label="Years Experience" />
                 <StatCard icon={Cpu} value="VR" label="Virtual Campus" />
              </div>
              <div className="space-y-4">
                 <div className="bg-black/40 backdrop-blur-md border border-gold/20 rounded-2xl p-6 h-48 flex flex-col justify-end relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <img 
                      src="https://images.unsplash.com/photo-1617802690992-15d93263d3a9?q=80&w=2070&auto=format&fit=crop" 
                      alt="VR Education" 
                      className="absolute inset-0 w-full h-full object-cover -z-10 opacity-60 mix-blend-overlay"
                    />
                    <span className="relative z-10 text-white font-serif italic text-lg">"A pioneering space where education and innovation converge."</span>
                 </div>
                 <StatCard icon={Globe} value="Global" label="Career Access" />
              </div>
            </motion.div>

            {/* Connecting Lines Decoration */}
            <svg className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-30" viewBox="0 0 400 400">
               <motion.path 
                 d="M 50 200 Q 200 50 350 200" 
                 fill="none" 
                 stroke="#C6A645" 
                 strokeWidth="1"
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 transition={{ duration: 2, ease: "easeInOut" }}
               />
               <motion.path 
                 d="M 50 200 Q 200 350 350 200" 
                 fill="none" 
                 stroke="#C6A645" 
                 strokeWidth="1"
                 initial={{ pathLength: 0 }}
                 whileInView={{ pathLength: 1 }}
                 transition={{ duration: 2, ease: "easeInOut", delay: 0.5 }}
               />
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
};