import React, { useEffect, useState } from 'react';
import FishSchool from './FishSchool';
import Submarine from './Submarine';

export default function MidnightSection({ scrollProgress }) {
  const [glowIntensity, setGlowIntensity] = useState(0.5);

  useEffect(() => {
    const intensity = 0.3 + (scrollProgress > 0.4 ? (scrollProgress - 0.4) * 0.7 : 0);
    setGlowIntensity(Math.min(intensity, 0.8));
  }, [scrollProgress]);

  return (
    <section
      id="midnight"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #1a3f5a 0%, #0f2a45 30%, #0a1f35 70%, #050d1a 100%)',
        overflow: 'hidden',
      }}
      aria-label="Midnight Zone - 1,000m depth"
    >
      {/* Bioluminescent glow effect */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 100% 50% at 50% 30%, rgba(100,100,255,${glowIntensity * 0.3}) 0%, transparent 60%),
          radial-gradient(ellipse 80% 60% at 30% 60%, rgba(160,100,255,${glowIntensity * 0.2}) 0%, transparent 70%),
          radial-gradient(ellipse 80% 60% at 70% 60%, rgba(100,160,255,${glowIntensity * 0.2}) 0%, transparent 70%)
        `,
        pointerEvents: 'none',
        transition: 'background 0.3s ease',
      }} />

      {/* Floating bioluminescent particles */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${3 + Math.random() * 4}px`,
              height: `${3 + Math.random() * 4}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(160,100,255,0.8), rgba(160,100,255,0))`,
              filter: `blur(${1 + Math.random()}px)`,
              animation: `bioluminesce ${4 + Math.random() * 6}s ease-in-out ${Math.random() * 3}s infinite`,
              boxShadow: `0 0 ${8 + Math.random() * 12}px rgba(160,100,255,0.6)`,
            }}
          />
        ))}
      </div>

      {/* Fish schools with bioluminescence */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <FishSchool count={3} depth={25} typeMix={['medium', 'large']} />
        <FishSchool count={2} depth={55} typeMix={['anglerfish']} />
        <FishSchool count={4} depth={75} typeMix={['small', 'medium']} />
      </div>

      {/* Submarines */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Submarine position="right" depth={40} />
        <Submarine position="left" depth={70} />
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
          color: '#a855ff',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          fontWeight: 600,
          textShadow: '0 0 20px rgba(168,85,255,0.4)',
        }}>
          1,000-4,000m — Midnight Zone
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          fontWeight: 300,
          color: 'rgba(200,180,255,0.95)',
          marginBottom: '1.5rem',
          lineHeight: 1.2,
          textShadow: '0 0 40px rgba(168,85,255,0.3)',
        }}>
          Bioluminescent Realm
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
          color: 'rgba(200,190,230,0.85)',
          maxWidth: 700,
          margin: '0 auto 2rem',
          lineHeight: 1.8,
          fontWeight: 200,
        }}>
          Absolute darkness reigns here, yet this zone pulses with ethereal light. Creatures emit their own bioluminescence—communication, camouflage, and predatory deception. It's a realm of living light in a sea of endless black, where every flash tells a story of survival in the abyss.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
          maxWidth: 700,
          margin: '3rem auto 0',
        }}>
          {[
            { title: 'Anglerfish', desc: 'Use bioluminescent lures to hunt' },
            { title: 'Hatchetfish', desc: 'Mirror surface light for camouflage' },
            { title: 'Gulper Eels', desc: 'Enormous mouths for scarce meals' },
          ].map((fact, i) => (
            <div
              key={i}
              style={{
                padding: '1.5rem',
                background: 'rgba(168, 85, 255, 0.08)',
                borderRadius: '4px',
                border: '1px solid rgba(168, 85, 255, 0.3)',
                backdropFilter: 'blur(10px)',
              }}
              data-reveal
            >
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: '#a855ff',
                marginBottom: '0.5rem',
              }}>
                {fact.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'rgba(200,190,230,0.8)',
                margin: 0,
              }}>
                {fact.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bioluminesce {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.9; }
        }
      `}</style>
    </section>
  );
}
