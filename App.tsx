import React from 'react';
import { Hero } from './components/Hero';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navigation } from './components/Navigation';
import { Shop } from './components/Shop';
import { Footer } from './components/Footer';
import { TrenchTown } from './components/TrenchTown';
import { MetaVersity } from './components/MetaVersity';
import { BudAndBreakfast } from './components/BudAndBreakfast';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-earth-dark">
      {/* Cinematic Background Layer */}
      <BackgroundEffects />

      {/* Navigation Overlay */}
      <Navigation />

      {/* Main Hero Content */}
      <Hero />
      
      {/* Trench Town Mandate Section */}
      <TrenchTown />

      {/* MetaVersity Lead Magnet */}
      <MetaVersity />

      {/* Premium Tours & Experiences */}
      <BudAndBreakfast />
      
      {/* Shop Section */}
      <Shop />
      
      {/* Footer / Connect Section */}
      <Footer />
    </main>
  );
};

export default App;