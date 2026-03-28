import React from 'react';
import FishSchool from './FishSchool';
import Submarine from './Submarine';

export default function TwilightSection() {
  return (
    <section
      id="twilight"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #1a7ba3 0%, #1a5a83 30%, #1a3f5a 70%, #0f2a45 100%)',
        overflow: 'hidden',
      }}
      aria-label="Twilight Zone - 200m depth"
    >
      {/* Background effects */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 80% 40% at 50% 20%, rgba(50,150,200,0.2) 0%, transparent 70%),
          radial-gradient(ellipse 60% 60% at 20% 50%, rgba(100,150,180,0.15) 0%, transparent 70%),
          radial-gradient(ellipse 60% 60% at 80% 50%, rgba(100,150,180,0.15) 0%, transparent 70%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Ambient light effect */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(100,180,220,0.15) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        pointerEvents: 'none',
      }} />

      {/* Fish schools */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FishSchool count={4} depth={20} typeMix={['small', 'medium']} />
        <FishSchool count={3} depth={50} typeMix={['medium']} />
        <FishSchool count={2} depth={70} typeMix={['large']} />
      </div>

      {/* Submarines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Submarine position="left" depth={30} />
        <Submarine position="right" depth={60} />
      </div>

      {/* Main content */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: 900,
        margin: '0 auto',
        textAlign: 'center',
        paddingTop: '2rem',
      }} data-reveal>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)',
          color: '#00f5d4',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          fontWeight: 600,
          textShadow: '0 0 20px rgba(0,245,212,0.4)',
        }}>
          200-1,000m — Twilight Zone
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          fontWeight: 300,
          color: 'rgba(200,230,255,0.95)',
          marginBottom: '1.5rem',
          lineHeight: 1.2,
          textShadow: '0 0 40px rgba(100,180,255,0.3)',
        }}>
          Where Light Fades
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
          color: 'rgba(180,210,240,0.85)',
          maxWidth: 700,
          margin: '0 auto 2rem',
          lineHeight: 1.8,
          fontWeight: 200,
        }}>
          In the twilight zone, sunlight becomes a distant memory. Here, strange creatures adapted to perpetual gloom drift through the blue-green haze. Submarines explore these mysterious waters, encountering fish with bioluminescent lures and deep-sea predators hunting in the growing darkness.
        </p>

        <div style={{
          display: 'inline-block',
          padding: '1.5rem 2rem',
          background: 'rgba(0, 245, 212, 0.08)',
          borderLeft: '3px solid var(--bio-cyan)',
          borderRadius: '2px',
          marginTop: '2rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'rgba(200,230,255,0.9)',
            fontStyle: 'italic',
            margin: 0,
          }}>
            "The twilight zone is home to more fish biomass than all other ocean zones combined, yet we've explored less than 5% of these mysterious depths."
          </p>
        </div>
      </div>
    </section>
  );
}
