import React from 'react';
import FishSchool from './FishSchool';
import Submarine from './Submarine';

export default function AbyssalSection() {
  return (
    <section
      id="abyssal"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #0a1f35 0%, #050d1a 40%, #020408 100%)',
        overflow: 'hidden',
      }}
      aria-label="Abyssal Zone - 4,000m depth"
    >
      {/* Extreme deep glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 120% 60% at 50% 40%, rgba(255,0,110,0.15) 0%, transparent 60%),
          radial-gradient(ellipse 100% 80% at 30% 70%, rgba(255,100,100,0.1) 0%, transparent 70%),
          radial-gradient(ellipse 100% 80% at 70% 70%, rgba(100,200,255,0.1) 0%, transparent 70%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Abyssal bioluminescence - rare and eerie */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 60}%`,
              width: `${2 + Math.random() * 3}px`,
              height: `${2 + Math.random() * 3}px`,
              borderRadius: '50%',
              background: Math.random() > 0.5 
                ? `radial-gradient(circle, rgba(255,0,110,0.7), rgba(255,0,110,0))`
                : `radial-gradient(circle, rgba(255,100,50,0.7), rgba(255,100,50,0))`,
              filter: `blur(${0.5 + Math.random() * 0.5}px)`,
              animation: `deepGlow ${6 + Math.random() * 8}s ease-in-out ${Math.random() * 4}s infinite`,
              boxShadow: Math.random() > 0.5 
                ? `0 0 ${10 + Math.random() * 15}px rgba(255,0,110,0.5)`
                : `0 0 ${10 + Math.random() * 15}px rgba(255,100,50,0.5)`,
            }}
          />
        ))}
      </div>

      {/* Rare deep fish */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FishSchool count={2} depth={30} typeMix={['anglerfish']} />
        <FishSchool count={1} depth={60} typeMix={['large']} />
      </div>

      {/* Submarines deep exploration */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Submarine position="left" depth={45} />
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
          color: '#ff006e',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          fontWeight: 600,
          textShadow: '0 0 20px rgba(255,0,110,0.4)',
        }}>
          4,000-6,000m — Abyssal Zone
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          fontWeight: 300,
          color: 'rgba(255,150,200,0.95)',
          marginBottom: '1.5rem',
          lineHeight: 1.2,
          textShadow: '0 0 40px rgba(255,0,110,0.3)',
        }}>
          The Crushing Dark
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
          color: 'rgba(220,180,200,0.85)',
          maxWidth: 700,
          margin: '0 auto 2rem',
          lineHeight: 1.8,
          fontWeight: 200,
        }}>
          At these depths, water pressure exceeds 600 times that at sea level. The temperature hovers just above freezing. Life here exists in extreme scarcity, with creatures adapted to survive on the sparse remains of food falling from above—a slow rain of decay from the living ocean above.
        </p>

        <div style={{
          marginTop: '3rem',
          padding: '2rem',
          background: 'rgba(255, 0, 110, 0.08)',
          borderRadius: '4px',
          border: '1px solid rgba(255, 0, 110, 0.3)',
          backdropFilter: 'blur(10px)',
        }}>
          <h3 style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.3rem',
            color: '#ff006e',
            marginBottom: '1rem',
          }}>
            Abyssal Facts
          </h3>
          <ul style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1rem',
            color: 'rgba(220,180,200,0.85)',
            lineHeight: 2,
            textAlign: 'left',
            maxWidth: 500,
            margin: '0 auto',
            listStyle: 'none',
            padding: 0,
          }}>
            <li>🔬 Pressure: 600+ atmospheres</li>
            <li>❄️ Temperature: 2-4°C (near freezing)</li>
            <li>🦑 Life: Gigantic squids, tripod fish, sea cucumbers</li>
            <li>⚫ Light: Virtually no natural light</li>
            <li>🍽️ Food: Marine snow from above</li>
          </ul>
        </div>
      </div>

      <style>{`
        @keyframes deepGlow {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}
