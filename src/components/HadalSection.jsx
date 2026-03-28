import React from 'react';
import Submarine from './Submarine';

export default function HadalSection() {
  return (
    <section
      id="hadal"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'linear-gradient(180deg, #020408 0%, #000204 50%, #000102 100%)',
        overflow: 'hidden',
      }}
      aria-label="Hadal Zone - 6,000m+ depth"
    >
      {/* Extreme glow from depths */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 150% 80% at 50% 50%, rgba(255,200,0,0.1) 0%, transparent 50%),
          radial-gradient(ellipse 120% 100% at 30% 80%, rgba(255,100,200,0.08) 0%, transparent 60%),
          radial-gradient(ellipse 120% 100% at 70% 80%, rgba(100,150,255,0.08) 0%, transparent 60%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Ultra-rare bioluminescent events */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              left: `${Math.random() * 100}%`,
              top: `${30 + Math.random() * 40}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
              borderRadius: '50%',
              background: `radial-gradient(circle, rgba(255,200,0,0.9), rgba(255,200,0,0))`,
              filter: `blur(${0.3 + Math.random() * 0.7}px)`,
              animation: `hadalglow ${8 + Math.random() * 12}s ease-in-out ${Math.random() * 5}s infinite`,
              boxShadow: `0 0 ${15 + Math.random() * 20}px rgba(255,200,0,0.4)`,
            }}
          />
        ))}
      </div>

      {/* Deep submarine */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <Submarine position="right" depth={50} />
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
          color: '#ffd60a',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          fontWeight: 600,
          textShadow: '0 0 20px rgba(255,214,10,0.4)',
        }}>
          6,000m+ — Hadal Zone — The Final Frontier
        </div>

        <h2 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 6vw, 4rem)',
          fontWeight: 300,
          color: 'rgba(255,230,150,0.95)',
          marginBottom: '1.5rem',
          lineHeight: 1.2,
          textShadow: '0 0 40px rgba(255,214,10,0.3)',
        }}>
          The Hadal Trenches
        </h2>

        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(0.95rem, 2vw, 1.2rem)',
          color: 'rgba(230,210,150,0.85)',
          maxWidth: 700,
          margin: '0 auto 2rem',
          lineHeight: 1.8,
          fontWeight: 200,
        }}>
          Welcome to the deepest places on Earth. Beyond 6,000 meters, in oceanic trenches like the Mariana Trench, pressure reaches 1,100 atmospheres. Yet even here, life persists—strange amphipods, snailfish, and microbes thrive in the ultimate extreme environment. Exploration here represents humanity's greatest challenge beneath the waves.
        </p>

        {/* Discovery cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          marginTop: '3rem',
          maxWidth: 750,
          margin: '3rem auto 0',
        }}>
          {[
            { title: 'Mariana Trench', detail: '11,034m — Deepest known point' },
            { title: 'Challenger Deep', detail: 'Deepest mapped location on Earth' },
            { title: 'Extreme Life', detail: 'Hadal snailfish observed at max depths' },
          ].map((card, i) => (
            <div
              key={i}
              style={{
                padding: '1.5rem',
                background: 'rgba(255, 214, 10, 0.08)',
                borderRadius: '4px',
                border: '1px solid rgba(255, 214, 10, 0.3)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(255, 214, 10, 0.15)';
                e.currentTarget.style.borderColor = 'rgba(255, 214, 10, 0.6)';
                e.currentTarget.style.boxShadow = '0 0 20px rgba(255, 214, 10, 0.2)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(255, 214, 10, 0.08)';
                e.currentTarget.style.borderColor = 'rgba(255, 214, 10, 0.3)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              data-reveal
            >
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                color: '#ffd60a',
                marginBottom: '0.5rem',
              }}>
                {card.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                color: 'rgba(230,210,150,0.8)',
                margin: 0,
              }}>
                {card.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Final message */}
        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          background: 'linear-gradient(135deg, rgba(255, 214, 10, 0.1) 0%, rgba(255, 100, 200, 0.08) 100%)',
          borderRadius: '4px',
          border: '1px solid rgba(255, 214, 10, 0.2)',
        }} data-reveal>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '1.1rem',
            color: 'rgba(230,210,150,0.9)',
            lineHeight: 1.8,
            fontStyle: 'italic',
            margin: 0,
          }}>
            "We have better maps of the Moon's surface than we do of Earth's ocean floor. The hadal trenches represent the final frontier of terrestrial exploration, harboring secrets that could reshape our understanding of life itself."
          </p>
        </div>
      </div>

      <style>{`
        @keyframes hadalglow {
          0%, 100% { opacity: 0.1; transform: translateY(0); }
          50% { opacity: 0.6; transform: translateY(-20px); }
        }
      `}</style>
    </section>
  );
}
