import React from 'react';
import { Hero } from './components/Hero';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Navigation } from './components/Navigation';

const App: React.FC = () => {
  return (
    <main className="relative min-h-screen w-full overflow-hidden">
      {/* Cinematic Background Layer */}
      <BackgroundEffects />

      {/* Navigation Overlay */}
      <Navigation />

      {/* Main Hero Content */}
      <Hero />
      
      {/* Subtle footer credit or scroll indicator could go here */}
    </main>
  );
};

export default App;