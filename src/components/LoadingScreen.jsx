import React, { useEffect } from 'react';

export default function LoadingScreen({ onComplete }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'linear-gradient(135deg, #051428 0%, #0a2f4a 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 9999,
      animation: 'fadeOut 0.5s ease forwards 2s',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2rem, 5vw, 4rem)',
          color: 'var(--bio-cyan)',
          marginBottom: '2rem',
          animation: 'pulseGlow 2s ease-in-out infinite',
          textShadow: '0 0 40px rgba(0, 245, 212, 0.5)',
        }}>
          Ocean Odyssey
        </h1>
        <div style={{
          width: 200,
          height: 3,
          background: 'rgba(0, 245, 212, 0.2)',
          borderRadius: '2px',
          overflow: 'hidden',
          margin: '0 auto',
        }}>
          <div style={{
            height: '100%',
            background: 'var(--bio-cyan)',
            animation: 'loadingBar 2s ease-in-out forwards',
            boxShadow: '0 0 20px var(--bio-cyan)',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes fadeOut {
          to {
            opacity: 0;
            pointerEvents: none;
          }
        }
        @keyframes loadingBar {
          0% {
            width: 0%;
          }
          100% {
            width: 100%;
          }
        }
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.8;
            textShadow: 0 0 40px rgba(0, 245, 212, 0.5);
          }
          50% {
            opacity: 1;
            textShadow: 0 0 60px rgba(0, 245, 212, 0.8);
          }
        }
      `}</style>
    </div>
  );
}
