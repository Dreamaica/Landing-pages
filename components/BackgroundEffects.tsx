import React from 'react';
import { motion } from 'framer-motion';

// Helper to bypass TypeScript errors for custom web components
const SplineViewer = (props: any) => React.createElement('spline-viewer', props);

export const BackgroundEffects: React.FC = () => {
  const musicNotes = ['♪', '♫', '♩', '♬', '♭', '♮', '𝄞'];

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 bg-earth-dark overflow-hidden">
      
      {/* 1. Spline 3D Background */}
      <div className="absolute inset-0 z-0 opacity-40 mix-blend-screen scale-110">
        {/* Using a high-quality abstract dark spline scene. 
            If you have a specific URL for your music note scene, replace the 'url' prop below. */}
        <SplineViewer 
          url="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode"
          loading-anim-type="spinner-small-dark"
        />
      </div>

      {/* 2. Deep Earth Gradient Overlay (to blend Spline with theme) */}
      <div 
        className="absolute inset-0 opacity-80 z-10"
        style={{
          background: `
            radial-gradient(circle at 80% 20%, rgba(27,40,27,0.5) 0%, transparent 60%),
            radial-gradient(circle at 20% 80%, rgba(58,44,33,0.8) 0%, transparent 60%),
            linear-gradient(180deg, rgba(13,13,12,0.8) 0%, rgba(13,13,12,0.2) 50%, rgba(13,13,12,0.9) 100%)
          `
        }}
      />

      {/* 3. Floating Music Notes Animation */}
      <div className="absolute inset-0 z-20 overflow-hidden">
        {[...Array(15)].map((_, i) => {
          const note = musicNotes[Math.floor(Math.random() * musicNotes.length)];
          const left = Math.floor(Math.random() * 100);
          const delay = Math.random() * 10;
          const duration = 10 + Math.random() * 10;
          const size = 1 + Math.random() * 2; // rem
          
          return (
            <div
              key={i}
              className="absolute text-gold/30 font-serif animate-note-float blur-[1px]"
              style={{
                left: `${left}%`,
                fontSize: `${size}rem`,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
                textShadow: '0 0 10px rgba(198, 166, 69, 0.5)'
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

      {/* 5. Vignette */}
      <div className="absolute inset-0 z-30 bg-[radial-gradient(circle_at_center,transparent_20%,#0D0D0C_100%)] pointer-events-none" />
    </div>
  );
};