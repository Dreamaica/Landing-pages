import React from 'react';
import { Instagram, Facebook, Youtube, Mail, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="connect" className="relative bg-black pt-24 pb-12 overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="font-serif text-2xl text-white tracking-widest">EMPRESS ZARIA</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Sovereign Wisdom for the modern mind. Exploring culture, education, and the healing arts through the Haile Selassie I MetaVersity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-black transition-all duration-300"><Instagram size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-black transition-all duration-300"><Facebook size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-black transition-all duration-300"><Youtube size={18} /></a>
              <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-gold hover:text-black transition-all duration-300"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-wider text-sm mb-6">Explore</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">The MetaVersity</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cultural Shop</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tours & Retreats</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Speaking & Events</a></li>
            </ul>
          </div>

          {/* Legal Column */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-wider text-sm mb-6">Sovereign Rights</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Constitution</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Member Access</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-bold uppercase tracking-wider text-sm mb-6">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">Join the movement. Receive wisdom and updates directly.</p>
            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-gold text-white text-sm"
              />
              <button className="w-full py-3 bg-gold text-black font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-white transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs">© {new Date().getFullYear()} Empress Zaria. All Rights Reserved.</p>
          <div className="flex items-center gap-2 text-gray-600 text-xs">
            <span>One Love</span>
            <div className="w-2 h-2 rounded-full bg-rasta-red opacity-50" />
            <div className="w-2 h-2 rounded-full bg-rasta-gold opacity-50" />
            <div className="w-2 h-2 rounded-full bg-rasta-green opacity-50" />
          </div>
        </div>
      </div>
    </footer>
  );
};