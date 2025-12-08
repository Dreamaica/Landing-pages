import React from 'react';
import { motion } from 'framer-motion';

// Helper to bypass TypeScript errors for custom web components
const SplineViewer = (props: any) => React.createElement('spline-viewer', props);

export const BackgroundEffects: React.FC = () => {
  const musicNotes = ['♪', '♫', '♩', '♬', '♭', '♮', '𝄞'];
  // Rasta colors defined in tailwind config
  const noteColors = ['text-rasta-red', 'text-rasta-gold', 'text-rasta-green'];

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-earth-dark overflow-hidden">
      
      {/* 1. Spline 3D Background */}
      <div className="absolute inset-0 z-0 opacity-60 mix-blend-screen scale-110">
        <SplineViewer 
          url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          loading-anim-type="spinner-small-dark"
        />
      </div>

      {/* 2. Deep Earth Gradient Overlay - Thinner opacity (0.3) to let Spline show through */}
      <div 
        className="absolute inset-0 opacity-30 z-10"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(27,40,27,0.4) 0%, transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(58,44,33,0.6) 0%, transparent 60%),
            linear-gradient(180deg, rgba(13,13,12,0.6) 0%, rgba(13,13,12,0.1) 50%, rgba(13,13,12,0.8) 100%)
          `
        }}
      />

      {/* 3. Floating Music Notes Animation - Rasta Colors */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        {[...Array(20)].map((_, i) => {
          const note = musicNotes[Math.floor(Math.random() * musicNotes.length)];
          const colorClass = noteColors[i % noteColors.length];
          const left = Math.floor(Math.random() * 100);
          const delay = Math.random() * 10;
          const duration = 12 + Math.random() * 10;
          const size = 1 + Math.random() * 2; // rem
          
          return (
            <div
              key={i}
              className={`absolute ${colorClass} font-serif animate-note-float opacity-70`}
              style={{
                left: `${left}%`,
                fontSize: `${size}rem`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                textShadow: '0 0 15px currentColor'
              }}
            >
              {note}
            </div>
          );
        })}
      </div>

      {/* 4. Cinematic Dust Particles (Subtle) */}
      <div className="absolute inset-0 z-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute rounded-full bg-gold opacity-20 animate-dust"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDuration: Math.random() * 10 + 15 + 's',
              animationDelay: Math.random() * 5 + 's',
            }}
          />
        ))}
      </div>

      {/* 5. Vignette - slightly reduced to keep sides visible */}
      <div className="absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_30%,#0D0D0C_100%)] pointer-events-none opacity-80" />
    </div>
  );
};