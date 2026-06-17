import { useMemo } from 'react';
import './FallingParticles.css';

export const FallingParticles = ({ count = 12 }) => {
  const particles = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      const left = `${Math.random() * 100}%`;
      const delay = `${Math.random() * 12}s`;
      const duration = `${12 + Math.random() * 10}s`; // slow falling speed
      const size = `${1.2 + Math.random() * 1.8}px`; // tiny particles
      const opacity = 0.25 + Math.random() * 0.45;
      const drift = `${-40 + Math.random() * 80}px`; // slight drift left/right

      return {
        id: i,
        style: {
          left,
          animationDelay: delay,
          animationDuration: duration,
          width: size,
          height: size,
          '--op': opacity,
          '--drift': drift,
        },
      };
    });
  }, [count]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {particles.map((p) => (
        <span
          key={p.id}
          className="falling-particle absolute rounded-full"
          style={{
            ...p.style,
            backgroundColor: '#ffb400', // Beautiful warm yellow gold
            boxShadow: '0 0 6px rgba(255, 180, 0, 0.75), 0 0 10px rgba(255, 180, 0, 0.4)',
          }}
        />
      ))}
    </div>
  );
};

export default FallingParticles;
