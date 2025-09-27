import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

// Advanced lens flare component with mouse tracking
export function LensFlareTracker() {
  const containerRef = useRef<HTMLDivElement>(null);
  const flareRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (flareRef.current) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        flareRef.current.style.left = `${x}%`;
        flareRef.current.style.top = `${y}%`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-20">
      <div
        ref={flareRef}
        className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: 'radial-gradient(circle, hsl(var(--lens-flare1) / 0.3) 0%, transparent 70%)',
          filter: 'blur(20px)',
          transition: 'all 0.1s ease-out'
        }}
      />
    </div>
  );
}

// Trending fog animations component
export function TrendingFogEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Primary trending fog */}
      <div className="trending-fog absolute top-1/3 left-1/4" />
      
      {/* Secondary fog layer */}
      <div 
        className="trending-fog absolute bottom-1/3 right-1/4" 
        style={{ animationDelay: '10s', animationDuration: '35s' }}
      />
      
      {/* Tertiary accent fog */}
      <div 
        className="absolute top-2/3 left-2/3 w-400 h-400"
        style={{
          background: 'conic-gradient(hsl(var(--hologram-2) / 0.15), hsl(var(--hologram-3) / 0.1), hsl(var(--hologram-1) / 0.15))',
          borderRadius: '50%',
          filter: 'blur(40px)',
          animation: 'trending-fog-drift 20s ease-in-out infinite reverse',
          animationDelay: '15s'
        }}
      />
    </div>
  );
}

// Laser beam sweep effects
export function LaserBeamEffects() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Horizontal laser beams */}
      <div className="laser-beam absolute top-1/4 left-0 right-0" />
      <div 
        className="laser-beam absolute top-3/4 left-0 right-0" 
        style={{ animationDelay: '1.5s' }}
      />
      
      {/* Vertical laser beams */}
      <div 
        className="absolute left-1/4 top-0 bottom-0 w-0.5"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(var(--purple-neon) / 0.6) 50%, transparent 100%)',
          animation: 'laser-sweep 4s ease-in-out infinite',
          animationDelay: '2s'
        }}
      />
      
      <div 
        className="absolute right-1/4 top-0 bottom-0 w-0.5"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(var(--cyan-bright) / 0.6) 50%, transparent 100%)',
          animation: 'laser-sweep 4s ease-in-out infinite',
          animationDelay: '3s'
        }}
      />
    </div>
  );
}

// Enhanced particle effects
export function EnhancedParticles() {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: 'hsl(var(--particle-white))',
            boxShadow: '0 0 10px hsl(var(--particle-white) / 0.8)',
          }}
          animate={{
            opacity: [0.3, 1, 0.3],
            scale: [0.8, 1.2, 0.8],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// 3D holographic overlay
export function HolographicOverlay() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          background: `
            linear-gradient(45deg, transparent 48%, hsl(var(--hologram-1) / 0.1) 49%, hsl(var(--hologram-1) / 0.1) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, hsl(var(--hologram-2) / 0.05) 49%, hsl(var(--hologram-2) / 0.05) 51%, transparent 52%)
          `,
          backgroundSize: '20px 20px',
          animation: 'hologram-shift 8s ease-in-out infinite'
        }}
      />
    </div>
  );
}