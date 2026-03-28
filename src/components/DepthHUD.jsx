import React from 'react';

export default function DepthHUD({ scrollProgress }) {
  const depths = [
    { label: 'Surface', depth: 0, color: '#00f5d4' },
    { label: 'Twilight Zone', depth: 200, color: '#00d4ff' },
    { label: 'Midnight Zone', depth: 1000, color: '#a855ff' },
    { label: 'Abyssal Zone', depth: 4000, color: '#ff006e' },
    { label: 'Hadal Zone', depth: 6000, color: '#ffd60a' },
  ];

  const currentDepth = Math.floor(scrollProgress * 6000);
  const currentZone = depths[Math.min(Math.floor(scrollProgress * depths.length), depths.length - 1)];

  return (
    <div
      style={{
        position: 'fixed',
        right: '2rem',
        top: '2rem',
        zIndex: 100,
        background: 'rgba(5, 26, 53, 0.9)',
        border: '1px solid rgba(0, 245, 212, 0.3)',
        padding: '1.5rem',
        borderRadius: '4px',
        backdropFilter: 'blur(10px)',
        minWidth: 250,
      }}
    >
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.65rem',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'rgba(0, 245, 212, 0.7)',
        marginBottom: '1rem',
      }}>
        Current Depth
      </div>

      <div style={{
        fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
        fontFamily: 'var(--font-display)',
        color: currentZone.color,
        marginBottom: '0.5rem',
        textShadow: `0 0 20px ${currentZone.color}`,
      }}>
        {currentDepth.toLocaleString()}m
      </div>

      <div style={{
        fontFamily: 'var(--font-body)',
        fontSize: '0.9rem',
        color: 'rgba(200, 230, 245, 0.8)',
        marginBottom: '1.5rem',
      }}>
        {currentZone.label}
      </div>

      {/* Progress bar */}
      <div style={{
        width: '100%',
        height: '6px',
        background: 'rgba(0, 245, 212, 0.1)',
        borderRadius: '3px',
        overflow: 'hidden',
        marginBottom: '1rem',
      }}>
        <div
          style={{
            height: '100%',
            width: `${scrollProgress * 100}%`,
            background: `linear-gradient(90deg, ${currentZone.color}, rgba(0, 245, 212, 0.6))`,
            boxShadow: `0 0 10px ${currentZone.color}`,
            transition: 'width 0.3s ease',
          }}
        />
      </div>

      {/* Zone indicators */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '0.5rem',
      }}>
        {depths.map((depth, idx) => (
          <div
            key={idx}
            style={{
              width: '100%',
              height: '4px',
              background: scrollProgress >= (idx / depths.length) ? depth.color : 'rgba(0, 245, 212, 0.1)',
              borderRadius: '2px',
              boxShadow: scrollProgress >= (idx / depths.length) ? `0 0 8px ${depth.color}` : 'none',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
}
