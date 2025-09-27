import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export default function ParticleTrail() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    let particleId = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const newParticle: Particle = {
        id: particleId++,
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
      };

      setParticles(prev => [...prev, newParticle]);

      // Remove particle after animation
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, 1000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="particle-trail absolute"
          style={{
            left: particle.x - 2,
            top: particle.y - 2,
          }}
        />
      ))}
    </div>
  );
}