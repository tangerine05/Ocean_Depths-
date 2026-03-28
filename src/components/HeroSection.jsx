import React, { useEffect, useRef } from 'react';
import ParticleField from './ParticleField';
import AnimatedWaves from './AnimatedWaves';

export default function HeroSection() {
  const titleRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    if (titleRef.current) {
      const el = titleRef.current;
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      setTimeout(() => {
        el.style.transition = 'opacity 1.5s ease, transform 1.5s cubic-bezier(0.16,1,0.3,1)';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 300);
    }
  }, []);

  const scrollDown = () => {
    const next = document.getElementById('twilight');
    if (next) next.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="surface"
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: 600,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(180deg, #1a8fab 0%, #1a7ba3 20%, #0d5a7d 50%, #051a35 100%)',
      }}
      aria-label="Surface - Sunlight Zone"
    >
      {/* Enhanced ocean surface light rays - Brighter */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `
          radial-gradient(ellipse 60% 40% at 50% -10%, rgba(100,200,235,0.6) 0%, transparent 70%),
          radial-gradient(ellipse 30% 60% at 20% -5%, rgba(50,180,220,0.25) 0%, transparent 60%),
          radial-gradient(ellipse 30% 60% at 80% -5%, rgba(50,180,220,0.25) 0%, transparent 60%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Animated light rays - Enhanced */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '200%',
        height: '80%',
        pointerEvents: 'none',
        overflow: 'hidden',
      }}>
        {[...Array(12)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            top: 0,
            left: `${5 + i * 8}%`,
            width: '3%',
            height: '100%',
            background: 'linear-gradient(180deg, rgba(100,200,240,0.25) 0%, transparent 100%)',
            transform: `rotate(${-20 + i * 3}deg)`,
            transformOrigin: 'top center',
            animation: `rayShimmer ${2.5 + i * 0.4}s ease-in-out ${i * 0.2}s infinite alternate`,
            filter: 'drop-shadow(0 0 8px rgba(100,180,255,0.3))',
          }} />
        ))}
      </div>

      {/* Enhanced Particles (plankton) - Brighter */}
      <ParticleField count={80} color="#00d4ff" opacity={0.7} speed={0.8} />

      {/* Enhanced Bubbles with glow */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        {[...Array(18)].map((_, i) => (
          <div key={i} style={{
            position: 'absolute',
            bottom: `-${Math.random() * 20}%`,
            left: `${3 + i * 5.5}%`,
            width: `${3 + Math.random() * 10}px`,
            height: `${3 + Math.random() * 10}px`,
            borderRadius: '50%',
            border: '2px solid rgba(200,255,255,0.5)',
            boxShadow: 'inset -2px -2px 5px rgba(0,0,0,0.3), 0 0 10px rgba(100,200,255,0.3)',
            animation: `bubbleRise ${3.5 + Math.random() * 3.5}s linear ${Math.random() * 4}s infinite`,
            backdropFilter: 'blur(0.5px)',
          }} />
        ))}
      </div>

      {/* Main content */}
      <div ref={titleRef} style={{
        position: 'relative',
        zIndex: 10,
        textAlign: 'center',
        padding: '0 1.5rem',
        maxWidth: 900,
      }}>
        {/* Depth tag - Brighter */}
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 'clamp(0.55rem, 1.5vw, 0.7rem)',
          color: '#00f5d4',
          letterSpacing: '0.25em',
          textTransform: 'uppercase',
          marginBottom: '1.5rem',
          opacity: 0.95,
          fontWeight: 600,
          textShadow: '0 0 20px rgba(0,245,212,0.5)',
        }}>
          0m — Sunlight Zone — Surface
        </div>

        {/* Main title - Enhanced */}
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(3rem, 10vw, 8rem)',
          fontWeight: 300,
          lineHeight: 0.9,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          marginBottom: '1rem',
          textShadow: '0 0 60px rgba(100,180,255,0.4), 0 0 20px rgba(100,200,255,0.3)',
          filter: 'drop-shadow(0 0 15px rgba(100,180,255,0.3))',
        }}>
          <span style={{ display: 'block', fontStyle: 'italic', color: 'rgba(200,240,255,0.7)', fontSize: '0.4em', fontWeight: 200, letterSpacing: '0.1em', marginBottom: '0.5rem', textShadow: '0 0 30px rgba(100,180,255,0.3)' }}>into the</span>
          Ocean Depths
        </h1>

        {/* Subtitle */}
        <p style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 2.5vw, 1.4rem)',
          fontWeight: 200,
          color: 'rgba(200,230,245,0.95)',
          maxWidth: 560,
          margin: '0 auto 3rem',
          lineHeight: 1.6,
          fontStyle: 'italic',
          textShadow: '0 0 10px rgba(100,200,255,0.2)',
        }}>
          Descend through five layers of the ocean — from sunlit shallows to the crushing dark of the hadal trenches.
        </p>

        {/* CTA - Enhanced */}
        <button
          onClick={scrollDown}
          data-hover
          aria-label="Begin descent"
          style={{
            background: 'rgba(0,245,212,0.15)',
            border: '2px solid rgba(0,255,220,0.6)',
            color: '#00f5d4',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '0.9rem 2.5rem',
            cursor: 'none',
            transition: 'all 0.3s ease',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 20px rgba(0,245,212,0.2)',
            fontWeight: 600,
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(0,245,212,0.25)';
            e.currentTarget.style.borderColor = 'rgba(0,255,220,0.9)';
            e.currentTarget.style.boxShadow = '0 0 30px rgba(0,245,212,0.4)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'rgba(0,245,212,0.15)';
            e.currentTarget.style.borderColor = 'rgba(0,255,220,0.6)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(0,245,212,0.2)';
          }}
        >
          Begin Descent ↓
        </button>
      </div>

      {/* Animated waves component */}
      <AnimatedWaves />

      <style>{`
        @keyframes rayShimmer {
          from { 
            opacity: 0.4; 
            transform: rotate(${-20}deg) scaleX(0.7);
            filter: drop-shadow(0 0 4px rgba(100,180,255,0.2));
          }
          to { 
            opacity: 1; 
            transform: rotate(${-20}deg) scaleX(1.3);
            filter: drop-shadow(0 0 12px rgba(100,180,255,0.5));
          }
        }
        
        @keyframes bubbleRise {
          0% { 
            transform: translateY(0) translateX(0); 
            opacity: 0;
          }
          10% { 
            opacity: 0.7;
          }
          90% { 
            opacity: 0.4;
          }
          100% { 
            transform: translateY(-110vh) translateX(${Math.random() > 0.5 ? '' : '-'}30px); 
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}
