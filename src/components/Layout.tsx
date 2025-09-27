import { ReactNode } from 'react';
import Navigation from './Navigation';
import CosmicBackground from './CosmicBackground';
import ParticleTrail from './ParticleTrail';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen relative">
      <CosmicBackground />
      <Navigation />
      <ParticleTrail />
      <main className="relative z-10 pt-16">
        {children}
      </main>
    </div>
  );
}